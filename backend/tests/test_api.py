import requests
import json
import os

BASE_URL = "http://localhost:8000/api"

def test_status():
    print("Testing /status...")
    try:
        response = requests.get(f"{BASE_URL}/status")
        print(f"Status: {response.status_code}")
        print(f"Body: {json.dumps(response.json(), indent=2)}")
    except Exception as e:
        print(f"Error: {e}")

def test_agents():
    agents = [
        ("/agent/code", {"prompt": "python hello world"}),
        ("/agent/content", {"topic": "AI trends"}),
        ("/agent/voice", {"text": "Welcome"}),
        ("/agent/music", {"prompt": "lofi beat"}),
        ("/agent/avatar", {"audio_path": "a.mp3", "image_path": "i.jpg"}),
    ]
    for endpoint, payload in agents:
        print(f"\nTesting {endpoint}...")
        try:
            resp = requests.post(f"{BASE_URL}{endpoint}", json=payload)
            print(f"Status: {resp.status_code}")
            print(f"Output: {resp.json().get('output')[:100]}...")
        except Exception as e:
            print(f"Error: {e}")

if __name__ == "__main__":
    test_status()
    test_agents()
