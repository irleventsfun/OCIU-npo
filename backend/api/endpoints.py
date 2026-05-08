from fastapi import APIRouter, Body
from backend.agents.code_gen import code_agent
from backend.agents.content_gen import content_agent
from backend.agents.voice_studio import voice_agent
from backend.agents.web_designer import web_designer_agent
from backend.agents.music_gen import music_agent
from backend.agents.video_editor import video_agent
from backend.agents.avatar_3d import avatar_agent
from backend.agents.prospect_finder import prospect_agent
from backend.agents.email_engine import email_agent
from backend.agents.media_analyst import media_analyst_agent
from backend.services.model_router import router

api_router = APIRouter()

@api_router.get("/status")
async def get_status():
    return router.get_status()

@api_router.post("/agent/code")
async def run_code_agent(payload: dict = Body(...)):
    return await code_agent.run(payload.get("prompt"), payload.get("context", ""))

@api_router.post("/agent/content")
async def run_content_agent(payload: dict = Body(...)):
    return await content_agent.run(payload.get("topic"))

@api_router.post("/agent/voice")
async def run_voice_agent(payload: dict = Body(...)):
    return await voice_agent.run(payload.get("text"))

@api_router.post("/agent/web")
async def run_web_agent(payload: dict = Body(...)):
    return await web_designer_agent.run(payload.get("prompt"))

@api_router.post("/agent/music")
async def run_music_agent(payload: dict = Body(...)):
    return await music_agent.run(payload.get("prompt"))

@api_router.post("/agent/video")
async def run_video_agent(payload: dict = Body(...)):
    return await video_agent.run(payload.get("prompt"))

@api_router.post("/agent/avatar")
async def run_avatar_agent(payload: dict = Body(...)):
    return await avatar_agent.run(payload.get("prompt"))

@api_router.post("/agent/prospect")
async def run_prospect_agent(payload: dict = Body(...)):
    return await prospect_agent.run(payload.get("criteria"))

@api_router.post("/agent/email")
async def run_email_agent(payload: dict = Body(...)):
    return await email_agent.run(payload.get("context"))

@api_router.post("/agent/media")
async def run_media_agent(payload: dict = Body(...)):
    return await media_analyst_agent.run(payload.get("metrics"))
