from fastapi import Request, HTTPException
from backend.services.redis_cache import redis_cache

async def subscription_middleware(request: Request, call_next):
    # Skip for public endpoints or static assets
    if request.url.path.startswith("/api/agent"):
        user_id = request.headers.get("X-User-Id", "anonymous")

        # Check subscription state in Redis
        sub_state = await redis_cache.get(f"sub:{user_id}")

        # Default for anonymous or new users
        if not sub_state:
            sub_state = "free"
            await redis_cache.set(f"sub:{user_id}", "free")

        # Check usage caps for free tier
        usage_count = await redis_cache.get(f"usage:{user_id}")
        if not usage_count:
            usage_count = "0"

        if sub_state == "free" and int(usage_count) >= 3:
            raise HTTPException(status_code=402, detail="Usage limit reached. Please upgrade to Pro.")

        # Increment usage
        await redis_cache.set(f"usage:{user_id}", str(int(usage_count) + 1))

    response = await call_next(request)
    return response
