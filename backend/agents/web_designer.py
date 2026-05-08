from backend.agents.base import BaseAgent
from backend.services.model_router import TaskComplexity
from backend.services.ollama_client import ollama_client
import os

class WebDesignerAgent(BaseAgent):
    def __init__(self):
        super().__init__("WebDesigner", TaskComplexity.HEAVY)

    async def run(self, prompt: str) -> dict:
        full_prompt = f"Design a Next.js + Tailwind CSS component for: {prompt}. Return ONLY the code."
        result = await self.generate_response(full_prompt)

        self.log_to_vault(f"web_design_{hash(prompt) % 10000}", result)

        return {"output": result, "model_used": self.get_model()}

web_designer_agent = WebDesignerAgent()
