import os
import json
import httpx
from typing import Optional

class RedisCache:
    def __init__(self):
        self.url = os.getenv("UPSTASH_REDIS_REST_URL")
        self.token = os.getenv("UPSTASH_REDIS_REST_TOKEN")

    async def get(self, key: str) -> Optional[str]:
        if not self.url or not self.token:
            return None

        async with httpx.AsyncClient() as client:
            resp = await client.get(
                f"{self.url}/get/{key}",
                headers={"Authorization": f"Bearer {self.token}"}
            )
            if resp.status_code == 200:
                return resp.json().get("result")
        return None

    async def set(self, key: str, value: str, ttl: int = 3600):
        if not self.url or not self.token:
            return

        async with httpx.AsyncClient() as client:
            await client.get(
                f"{self.url}/set/{key}/{value}/ex/{ttl}",
                headers={"Authorization": f"Bearer {self.token}"}
            )

redis_cache = RedisCache()
