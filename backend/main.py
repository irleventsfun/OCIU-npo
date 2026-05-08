import os
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from backend.api.endpoints import api_router
from backend.api.business_suite import business_suite_router

load_dotenv()

app = FastAPI(title="CamoFlow OS API")
app.include_router(api_router, prefix="/api")
app.include_router(business_suite_router, prefix="/business-suite")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "CamoFlow OS Orchestration Layer Running"}

@app.get("/health")
async def health():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
