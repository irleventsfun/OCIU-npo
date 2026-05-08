import requests
import os

class AutomationLayer:
    def __init__(self):
        self.webhook_url = os.getenv("N8N_WEBHOOK_URL")

    def trigger_workflow(self, data: dict):
        if self.webhook_url:
            return requests.post(self.webhook_url, json=data)
        return {"status": "no-webhook-configured"}

automation = AutomationLayer()
