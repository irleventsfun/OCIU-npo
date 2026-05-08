import os
import httpx
from typing import Optional

class CloudFallback:
    def __init__(self):
        pass

    @property
    def gemini_key(self): return os.getenv("GEMINI_API_KEY")
    @property
    def groq_key(self): return os.getenv("GROQ_API_KEY")
    @property
    def anthropic_key(self): return os.getenv("ANTHROPIC_API_KEY")

    async def generate_gemini(self, prompt: str) -> str:
        if not self.gemini_key:
            return "Gemini API key not configured."
        url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={self.gemini_key}"
        async with httpx.AsyncClient() as client:
            resp = await client.post(url, json={"contents": [{"parts": [{"text": prompt}]}]})
            if resp.status_code == 200:
                return resp.json()["candidates"][0]["content"]["parts"][0]["text"]
            return f"Gemini Error: {resp.text}"

    async def generate_groq(self, prompt: str) -> str:
        if not self.groq_key:
            return "Groq API key not configured."
        url = "https://api.groq.com/openai/v1/chat/completions"
        headers = {"Authorization": f"Bearer {self.groq_key}"}
        async with httpx.AsyncClient() as client:
            resp = await client.post(url, headers=headers, json={
                "model": "llama3-8b-8192",
                "messages": [{"role": "user", "content": prompt}]
            })
            if resp.status_code == 200:
                return resp.json()["choices"][0]["message"]["content"]
            return f"Groq Error: {resp.text}"

    async def generate_anthropic(self, prompt: str) -> str:
        if not self.anthropic_key:
            return "Anthropic API key not configured."
        url = "https://api.anthropic.com/v1/messages"
        headers = {
            "x-api-key": self.anthropic_key,
            "anthropic-version": "2023-06-01",
            "content-type": "application/json"
        }
        async with httpx.AsyncClient() as client:
            resp = await client.post(url, headers=headers, json={
                "model": "claude-3-haiku-20240307",
                "max_tokens": 1024,
                "messages": [{"role": "user", "content": prompt}]
            })
            if resp.status_code == 200:
                return resp.json()["content"][0]["text"]
            return f"Anthropic Error: {resp.text}"

    async def generate(self, prompt: str) -> str:
        # Simple rotation or priority: Gemini -> Groq -> Anthropic
        if self.gemini_key:
            return await self.generate_gemini(prompt)
        if self.groq_key:
            return await self.generate_groq(prompt)
        if self.anthropic_key:
            return await self.generate_anthropic(prompt)
        return "No cloud fallback keys available."

cloud_fallback = CloudFallback()
