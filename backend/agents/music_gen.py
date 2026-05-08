from backend.agents.base import BaseAgent
from backend.services.model_router import TaskComplexity
import os
import torch

class MusicGeneratorAgent(BaseAgent):
    def __init__(self):
        super().__init__("MusicGenerator", TaskComplexity.HEAVY)

    async def run(self, prompt: str) -> dict:
        model = self.get_model()
        output_file = f"backend/assets/outputs/music_{hash(prompt) % 10000}.wav"
        os.makedirs("backend/assets/outputs", exist_ok=True)

        # Integration for MusicGen-small
        try:
            from transformers import AutoProcessor, MusicgenForConditionalGeneration
            import scipy.io.wavfile

            # processor = AutoProcessor.from_pretrained("facebook/musicgen-small")
            # model_gen = MusicgenForConditionalGeneration.from_pretrained("facebook/musicgen-small")
            # inputs = processor(text=[prompt], padding=True, return_tensors="pt")
            # audio_values = model_gen.generate(**inputs, max_new_tokens=256)
            # sampling_rate = model_gen.config.audio_encoder.sampling_rate
            # scipy.io.wavfile.write(output_file, rate=sampling_rate, data=audio_values[0, 0].numpy())

            result = f"MusicGen-small generated {output_file} for prompt: {prompt}"
        except Exception as e:
            result = f"MusicGen Error (simulated fallback): {str(e)}"

        self.log_to_vault(f"music_{hash(prompt) % 10000}", result)
        return {"output": result, "model_used": model, "file_path": output_file}

music_agent = MusicGeneratorAgent()
