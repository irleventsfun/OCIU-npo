from backend.agents.base import BaseAgent
from backend.services.model_router import TaskComplexity

class MediaAnalystAgent(BaseAgent):
    def __init__(self):
        super().__init__("MediaAnalyst", TaskComplexity.LIGHT)

    async def run(self, metrics: str) -> dict:
        model = self.get_model()
        return {"output": f"Simulated insights for: {metrics}", "model_used": model}

media_analyst_agent = MediaAnalystAgent()
