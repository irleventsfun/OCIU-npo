from backend.agents.base import BaseAgent
from backend.services.model_router import TaskComplexity
from backend.services.ollama_client import ollama_client
import os

class CodeGeneratorAgent(BaseAgent):
    def __init__(self):
        super().__init__("CodeGenerator", TaskComplexity.HEAVY)

    async def run(self, prompt: str, context: str = "") -> dict:
        full_prompt = f"Context from Obsidian:\n{context}\n\nTask: {prompt}\n\nGenerate the code ONLY."
        result = await self.generate_response(full_prompt)

        self.log_to_vault(f"codegen_{hash(prompt) % 10000}", result)

        return {
            "model_used": self.get_model(),
            "output": result
        }

code_agent = CodeGeneratorAgent()
