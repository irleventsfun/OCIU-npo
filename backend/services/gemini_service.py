import os
import httpx
from backend.services.ai_cache import ai_cache

class GeminiService:
    def __init__(self):
        self.api_key = os.getenv("GEMINI_API_KEY")
        self.base_url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent"

    async def generate(self, prompt: str, temperature: float = 0.3) -> str:
        cached = ai_cache.get(prompt)
        if cached:
            return cached

        if not self.api_key:
            return "Gemini API key not configured."

        url = f"{self.base_url}?key={self.api_key}"
        payload = {
            "contents": [{"parts": [{"text": prompt}]}],
            "generationConfig": {
                "temperature": temperature,
                "maxOutputTokens": 2048,
            }
        }

        async with httpx.AsyncClient() as client:
            resp = await client.post(url, json=payload)
            if resp.status_code == 200:
                result = resp.json()["candidates"][0]["content"]["parts"][0]["text"]
                ai_cache.set(prompt, result)
                return result
            return f"Gemini Error: {resp.text}"

gemini_service = GeminiService()
