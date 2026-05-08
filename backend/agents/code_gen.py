from backend.agents.base import BaseAgent
from backend.services.model_router import TaskComplexity
from backend.services.ollama_client import ollama_client
import os

class CodeGeneratorAgent(BaseAgent):
    def __init__(self):
        super().__init__("CodeGenerator", TaskComplexity.HEAVY)

    async def run(self, prompt: str, context: str = "") -> dict:
        model = self.get_model()

        if model == "cloud-fallback":
            # Simulate cloud fallback for now as keys might be missing
            result = f"// Cloud Fallback Result\nfunction example() {{ }}"
        else:
            full_prompt = f"Context from Obsidian:\n{context}\n\nTask: {prompt}\n\nGenerate the code ONLY."
            result = await ollama_client.generate(model, full_prompt)

        self.log_to_vault(f"codegen_{hash(prompt) % 10000}", result)

        return {
            "model_used": model,
            "output": result
        }

code_agent = CodeGeneratorAgent()
