import os
import httpx
import hashlib
from backend.services.redis_cache import redis_cache

class GeminiService:
    def __init__(self):
        self.api_key = os.getenv("GEMINI_API_KEY")
        self.base_url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent"

    async def generate(self, prompt: str, temperature: float = 0.3) -> str:
        prompt_hash = hashlib.sha256(prompt.encode()).hexdigest()
        cached = await redis_cache.get(f"gemini:{prompt_hash}")
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
                await redis_cache.set(f"gemini:{prompt_hash}", result, ttl=86400) # 24h
                return result
            return f"Gemini Error: {resp.text}"

gemini_service = GeminiService()
