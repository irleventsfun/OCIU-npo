import psutil
import os
import time
from backend.services.obsidian import obsidian
from backend.services.redis_cache import redis_cache

RAM_CRITICAL = 0.85  # 85%
QUEUE_MAX = 20
CHECK_INTERVAL = 10  # Seconds

async def hardened_self_heal():
    while True:
        ram_usage = psutil.virtual_memory().percent / 100
        queue_size = int(await redis_cache.get("system:queue_size") or "0")

        if ram_usage > RAM_CRITICAL:
            # Kill lowest priority jobs
            print(f"CRITICAL RAM: {ram_usage*100}%. Throttling heavy agents.")
            await redis_cache.set("system:throttle", "true", ttl=300)
            obsidian.write_note(f"SelfHeal_RAM_{int(time.time())}", f"RAM at {ram_usage*100}%. Heavy agents throttled.", folder="logs/system")

        if queue_size > QUEUE_MAX:
            print(f"QUEUE OVERFLOW: {queue_size} jobs. Rejecting new tasks.")
            await redis_cache.set("system:reject_new", "true", ttl=60)
            obsidian.write_note(f"SelfHeal_Queue_{int(time.time())}", f"Queue overflow ({queue_size}). New jobs rejected.", folder="logs/system")

        await asyncio.sleep(CHECK_INTERVAL)

def start_self_heal():
    import asyncio
    asyncio.run(hardened_self_heal())
