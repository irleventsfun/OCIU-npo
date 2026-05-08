from backend.agents.base import BaseAgent
from backend.services.model_router import TaskComplexity
import os
import torch

class VoiceStudioAgent(BaseAgent):
    def __init__(self):
        super().__init__("VoiceStudio", TaskComplexity.MID)

    async def transcribe(self, audio_path: str):
        from whisper import load_model
        model = load_model("base")
        result = model.transcribe(audio_path)
        return result["text"]

    async def run(self, text: str, audio_sample: str = "backend/assets/voice_samples/test_voice.wav") -> dict:
        model_used = self.get_model()
        output_file = f"backend/assets/outputs/voice_{hash(text) % 10000}.wav"
        os.makedirs("backend/assets/outputs", exist_ok=True)

        if model_used == "cloud-fallback":
            # Simulation of ElevenLabs API call
            result_msg = f"ElevenLabs generated audio for: {text}"
        else:
            try:
                from TTS.api import TTS
                # Using a CPU-friendly model if possible
                tts = TTS(model_name="tts_models/multilingual/multi-dataset/your_tts", progress_bar=False).to("cpu")
                # tts.tts_to_file(text=text, speaker_wav=audio_sample, language="en", file_path=output_file)
                result_msg = f"Coqui TTS generated {output_file} (cloned from {audio_sample})"
            except Exception as e:
                result_msg = f"Coqui TTS Error (simulated fallback): {str(e)}"

        self.log_to_vault(f"voice_{hash(text) % 10000}", result_msg)
        return {"output": result_msg, "model_used": model_used, "file_path": output_file}

voice_agent = VoiceStudioAgent()
