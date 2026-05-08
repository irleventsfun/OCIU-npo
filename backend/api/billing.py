from fastapi import APIRouter, Body, Header, HTTPException
from backend.services.redis_cache import redis_cache
from backend.services.obsidian import obsidian
import uuid

billing_router = APIRouter()

@billing_router.post("/webhook")
async def paystack_webhook(
    payload: dict = Body(...),
    x_paystack_signature: str = Header(None),
    x_idempotency_key: str = Header(None)
):
    # Verify signature...

    if x_idempotency_key:
        processed = await redis_cache.get(f"webhook_processed:{x_idempotency_key}")
        if processed:
            return {"status": "already_processed"}

    event = payload.get("event")
    data = payload.get("data")
    user_id = data.get("customer", {}).get("email")

    if event == "subscription.create":
        # Provision Pro JWT (simulated as a simple token in Redis)
        pro_token = str(uuid.uuid4())
        await redis_cache.set(f"sub:{user_id}", "pro")
        await redis_cache.set(f"token:{user_id}", pro_token)
        obsidian.write_note(f"SubUpgrade_{user_id}", f"User {user_id} upgraded to Pro. Token: {pro_token}", folder="billing")

    elif event == "subscription.disable":
        await redis_cache.set(f"sub:{user_id}", "free")
        await redis_cache.delete(f"token:{user_id}")
        obsidian.write_note(f"SubDowngrade_{user_id}", f"User {user_id} downgraded to Free.", folder="billing")

    if x_idempotency_key:
        await redis_cache.set(f"webhook_processed:{x_idempotency_key}", "true", ttl=86400)

    return {"status": "success"}
