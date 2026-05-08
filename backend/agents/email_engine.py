from backend.agents.base import BaseAgent
from backend.services.model_router import TaskComplexity

class EmailEngineAgent(BaseAgent):
    def __init__(self):
        super().__init__("EmailEngine", TaskComplexity.LIGHT)

    async def run(self, context: str) -> dict:
        prompt = f"Generate a personalized outreach email based on: {context}"
        result = await self.generate_response(prompt)

        self.log_to_vault(f"email_{hash(context) % 10000}", result)

        return {"output": result, "model_used": self.get_model()}

email_agent = EmailEngineAgent()
