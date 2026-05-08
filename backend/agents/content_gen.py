from backend.agents.base import BaseAgent
from backend.services.model_router import TaskComplexity
import os

class ContentGeneratorAgent(BaseAgent):
    def __init__(self):
        super().__init__("ContentGenerator", TaskComplexity.MID)

    async def run(self, topic: str) -> dict:
        model = self.get_model()

        result = f"Generated content about {topic} using {model}."

        self.log_to_vault(f"content_{hash(topic) % 10000}", result)

        return {
            "model_used": model,
            "output": result
        }

content_agent = ContentGeneratorAgent()
