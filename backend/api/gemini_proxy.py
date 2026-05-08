from fastapi import APIRouter, Body
from backend.services.gemini_service import gemini_service

gemini_router = APIRouter()

@gemini_router.post("/prompt")
async def route_prompt(payload: dict = Body(...)):
    prompt = payload.get("prompt")
    purpose = payload.get("purpose", "routing")

    if purpose == "routing":
        full_prompt = f"Categorize this task and select the best agent (Code, Content, Voice, etc.): {prompt}"
    else:
        full_prompt = prompt

    return {"response": await gemini_service.generate(full_prompt)}

@gemini_router.post("/script")
async def generate_script(payload: dict = Body(...)):
    topic = payload.get("topic")
    full_prompt = f"Write a professional video script about {topic}. Brand voice aware."
    return {"script": await gemini_service.generate(full_prompt)}
