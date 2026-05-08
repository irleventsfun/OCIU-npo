from abc import ABC, abstractmethod
from typing import Any, Dict
from backend.services.model_router import router, TaskComplexity
from backend.services.obsidian import obsidian
import asyncio

class BaseAgent(ABC):
    def __init__(self, name: str, complexity: TaskComplexity):
        self.name = name
        self.complexity = complexity
        self.last_model_used = None

    @abstractmethod
    async def run(self, input_data: Any) -> Dict[str, Any]:
        pass

    def log_to_vault(self, task_name: str, result: str):
        content = f"# Task: {task_name}\n\nAgent: {self.name}\n\n## Result\n\n{result}"
        obsidian.write_note(f"{task_name}_{self.name}", content, folder="logs")
        # Notify via SSE
        from backend.services.sse import sse_manager
        asyncio.create_task(sse_manager.broadcast(f"Task {task_name} completed by {self.name}"))

    def get_model(self):
        model = router.select_model(self.complexity)
        self.last_model_used = model
        return model

    async def generate_response(self, prompt: str) -> str:
        retries = 3
        current_complexity = self.complexity

        while retries > 0:
            model = router.select_model(current_complexity)
            self.last_model_used = model

            try:
                if model == "cloud-fallback":
                    from backend.services.cloud_fallback import cloud_fallback
                    return await cloud_fallback.generate(prompt)
                else:
                    from backend.services.ollama_client import ollama_client
                    return await ollama_client.generate(model, prompt)
            except Exception as e:
                retries -= 1
                if retries == 0:
                    return f"All retries failed. Final error: {str(e)}"

                # Model fallback on failure
                if current_complexity == TaskComplexity.HEAVY:
                    current_complexity = TaskComplexity.MID
                elif current_complexity == TaskComplexity.MID:
                    current_complexity = TaskComplexity.LIGHT

                print(f"Retry {3-retries} failed. Falling back to lower complexity model.")
