from backend.agents.base import BaseAgent
from backend.services.model_router import TaskComplexity

class MusicGeneratorAgent(BaseAgent):
    def __init__(self):
        super().__init__("MusicGenerator", TaskComplexity.HEAVY)

    async def run(self, prompt: str) -> dict:
        model = self.get_model()
        # Would use MusicGen-small here
        return {"output": f"Simulated audio file path for music: {prompt}", "model_used": model}

music_agent = MusicGeneratorAgent()
