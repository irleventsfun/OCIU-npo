import os
from fastapi import FastAPI, Request, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
import httpx
import time
from typing import Dict

app = FastAPI(title="CamoFlow Edge Proxy")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

CORE_SERVER_URL = os.getenv("CORE_SERVER_URL", "http://localhost:8000")
EDGE_CACHE: Dict[str, dict] = {}
CACHE_TTL = 300 # 5 minutes default

async def verify_token(request: Request):
    auth_header = request.headers.get("Authorization")
    if not auth_header:
        raise HTTPException(status_code=401, detail="Missing auth token")
    # In a real setup, verify JWT with Supabase/Firebase here
    return True

@app.api_route("/{path:path}", methods=["GET", "POST", "PUT", "DELETE"])
async def proxy(path: str, request: Request, authenticated: bool = Depends(verify_token)):
    method = request.method
    url = f"{CORE_SERVER_URL}/{path}"

    # Check cache for GET requests
    if method == "GET":
        if path in EDGE_CACHE:
            entry = EDGE_CACHE[path]
            if time.time() - entry["timestamp"] < CACHE_TTL:
                return entry["data"]

    async with httpx.AsyncClient(timeout=30.0) as client:
        try:
            body = await request.body()
            resp = await client.request(
                method,
                url,
                content=body,
                headers=dict(request.headers),
                params=dict(request.query_params)
            )

            data = resp.json()

            if method == "GET" and resp.status_code == 200:
                EDGE_CACHE[path] = {"data": data, "timestamp": time.time()}

            return data
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
