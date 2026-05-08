from abc import ABC, abstractmethod
from typing import Any, Dict
from backend.services.model_router import router, TaskComplexity
from backend.services.obsidian import obsidian

class BaseAgent(ABC):
    def __init__(self, name: str, complexity: TaskComplexity):
        self.name = name
        self.complexity = complexity

    @abstractmethod
    async def run(self, input_data: Any) -> Dict[str, Any]:
        pass

    def log_to_vault(self, task_name: str, result: str):
        content = f"# Task: {task_name}\n\nAgent: {self.name}\n\n## Result\n\n{result}"
        obsidian.write_note(f"{task_name}_{self.name}", content, folder="logs")

    def get_model(self):
        return router.select_model(self.complexity)
