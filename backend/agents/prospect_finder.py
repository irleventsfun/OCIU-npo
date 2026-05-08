from backend.agents.base import BaseAgent
from backend.services.model_router import TaskComplexity

class ProspectFinderAgent(BaseAgent):
    def __init__(self):
        super().__init__("ProspectFinder", TaskComplexity.MID)

    async def run(self, criteria: str) -> dict:
        prompt = f"Find and qualify prospects matching: {criteria}. Output as a list."
        result = await self.generate_response(prompt)

        self.log_to_vault(f"prospects_{hash(criteria) % 10000}", result)

        return {"output": result, "model_used": self.get_model()}

prospect_agent = ProspectFinderAgent()
