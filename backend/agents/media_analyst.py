from backend.agents.base import BaseAgent
from backend.services.model_router import TaskComplexity

class MediaAnalystAgent(BaseAgent):
    def __init__(self):
        super().__init__("MediaAnalyst", TaskComplexity.LIGHT)

    async def run(self, metrics: str) -> dict:
        prompt = f"Analyze these performance metrics and summarize insights: {metrics}"
        result = await self.generate_response(prompt)

        self.log_to_vault(f"media_analysis_{hash(metrics) % 10000}", result)

        return {"output": result, "model_used": self.get_model()}

media_analyst_agent = MediaAnalystAgent()
