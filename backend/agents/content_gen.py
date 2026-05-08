from backend.agents.base import BaseAgent
from backend.services.model_router import TaskComplexity
import os
from backend.services.model_router import router

class ContentGeneratorAgent(BaseAgent):
    def __init__(self):
        super().__init__("ContentGenerator", TaskComplexity.MID)

    async def run(self, topic: str) -> dict:
        prompt = f"Generate a social media post about {topic}. Brand voice: Professional yet engaging."

        # Explicitly check router here for debugging in test
        # model = router.select_model(self.complexity)

        result = await self.generate_response(prompt)

        self.log_to_vault(f"content_{hash(topic) % 10000}", result)

        return {
            "model_used": self.last_model_used,
            "output": result
        }

content_agent = ContentGeneratorAgent()
