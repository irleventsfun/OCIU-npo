from backend.agents.base import BaseAgent
from backend.services.model_router import TaskComplexity
import os

class ContentGeneratorAgent(BaseAgent):
    def __init__(self):
        super().__init__("ContentGenerator", TaskComplexity.MID)

    async def run(self, topic: str) -> dict:
        prompt = f"Generate a social media post about {topic}. Brand voice: Professional yet engaging."
        result = await self.generate_response(prompt)

        self.log_to_vault(f"content_{hash(topic) % 10000}", result)

        return {
            "model_used": self.get_model(),
            "output": result
        }

content_agent = ContentGeneratorAgent()
