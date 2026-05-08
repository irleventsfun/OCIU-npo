from backend.agents.base import BaseAgent
from backend.services.model_router import TaskComplexity

class EmailEngineAgent(BaseAgent):
    def __init__(self):
        super().__init__("EmailEngine", TaskComplexity.LIGHT)

    async def run(self, context: str) -> dict:
        model = self.get_model()
        return {"output": f"Simulated email sequence for: {context}", "model_used": model}

email_agent = EmailEngineAgent()
