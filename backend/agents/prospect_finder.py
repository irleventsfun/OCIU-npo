from backend.agents.base import BaseAgent
from backend.services.model_router import TaskComplexity

class ProspectFinderAgent(BaseAgent):
    def __init__(self):
        super().__init__("ProspectFinder", TaskComplexity.MID)

    async def run(self, criteria: str) -> dict:
        model = self.get_model()
        return {"output": f"Simulated lead list for: {criteria}", "model_used": model}

prospect_agent = ProspectFinderAgent()
