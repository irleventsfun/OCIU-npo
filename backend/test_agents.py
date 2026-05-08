import requests
import json

BASE_URL = "http://localhost:8000/api"

def test_status():
    print("Testing /status...")
    try:
        response = requests.get(f"{BASE_URL}/status")
        print(f"Status: {response.status_code}")
        print(f"Body: {json.dumps(response.json(), indent=2)}")
    except Exception as e:
        print(f"Error: {e}")

def test_code_agent():
    print("\nTesting /agent/code...")
    payload = {
        "prompt": "Write a python script to calculate fibonacci",
        "context": "Project uses Python 3.12"
    }
    try:
        response = requests.post(f"{BASE_URL}/agent/code", json=payload)
        print(f"Status: {response.status_code}")
        print(f"Body: {json.dumps(response.json(), indent=2)}")
    except Exception as e:
        print(f"Error: {e}")

def test_content_agent():
    print("\nTesting /agent/content...")
    payload = {
        "topic": "Benefits of local-first AI"
    }
    try:
        response = requests.post(f"{BASE_URL}/agent/content", json=payload)
        print(f"Status: {response.status_code}")
        print(f"Body: {json.dumps(response.json(), indent=2)}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    test_status()
    test_code_agent()
    test_content_agent()
