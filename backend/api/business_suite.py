from fastapi import APIRouter, Body
from backend.agents.content_gen import content_agent
from backend.agents.prospect_finder import prospect_agent

business_suite_router = APIRouter()

@business_suite_router.post("/content-studio")
async def content_studio(payload: dict = Body(...)):
    # Route through CamoFlow OS agents
    return await content_agent.run(payload.get("topic"))

@business_suite_router.post("/prospect-engine")
async def prospect_engine(payload: dict = Body(...)):
    # Route through CamoFlow OS agents
    return await prospect_agent.run(payload.get("criteria"))
