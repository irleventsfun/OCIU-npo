from backend.agents.base import BaseAgent
from backend.services.model_router import TaskComplexity

class DonorBuddyAgent(BaseAgent):
    def __init__(self):
        super().__init__("DonorBuddy", TaskComplexity.MID)

    async def run(self, need: str) -> dict:
        prompt = f"Find ethical donor prospects and CSR programs for: {need}. Generate a professional outreach proposal."
        result = await self.generate_response(prompt)

        self.log_to_vault(f"donor_prospects_{hash(need) % 10000}", result)

        return {"output": result, "model_used": self.get_model()}

donor_buddy_agent = DonorBuddyAgent()
