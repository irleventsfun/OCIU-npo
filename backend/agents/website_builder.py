from backend.agents.base import BaseAgent
from backend.services.model_router import TaskComplexity

class WebsiteBuilderAgent(BaseAgent):
    def __init__(self):
        super().__init__("WebsiteBuilder", TaskComplexity.HEAVY)

    async def run(self, description: str) -> dict:
        prompt = f"Generate a website structure, sections, copy, and layout ideas for: {description}. Focus on community or portfolio needs."
        result = await self.generate_response(prompt)

        self.log_to_vault(f"website_plan_{hash(description) % 10000}", result)

        return {
            "model_used": self.get_model(),
            "output": result
        }

website_builder_agent = WebsiteBuilderAgent()
