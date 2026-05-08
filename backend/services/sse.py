import asyncio
from typing import List, AsyncGenerator

class SSEManager:
    def __init__(self):
        self.queues: List[asyncio.Queue] = []

    async def subscribe(self) -> AsyncGenerator[str, None]:
        queue = asyncio.Queue()
        self.queues.append(queue)
        try:
            while True:
                data = await queue.get()
                yield f"data: {data}\n\n"
        finally:
            if queue in self.queues:
                self.queues.remove(queue)

    async def broadcast(self, message: str):
        for queue in self.queues:
            await queue.put(message)

sse_manager = SSEManager()
