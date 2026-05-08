import psutil
import os
from enum import Enum
from typing import Optional

class TaskComplexity(Enum):
    LIGHT = "light"    # tagging, classification, routing, email
    MID = "mid"        # content gen, social copy, prospects
    HEAVY = "heavy"    # code gen, reasoning, web design

class ModelRouter:
    def __init__(self):
        self.ram_threshold = 0.8  # 80% RAM usage threshold for fallback
        self.models = {
            TaskComplexity.LIGHT: "qwen3:0.5b", # Adjusting names to standard Ollama naming if needed
            TaskComplexity.MID: "qwen3:4b",
            TaskComplexity.HEAVY: "qwen3:8b"
        }

    def get_current_ram_usage(self):
        return psutil.virtual_memory().percent / 100

    def select_model(self, complexity: TaskComplexity) -> str:
        ram_usage = self.get_current_ram_usage()

        if ram_usage > self.ram_threshold:
            return "cloud-fallback"

        return self.models.get(complexity, "qwen3:1.8b")

    def get_status(self):
        return {
            "ram_usage": self.get_current_ram_usage(),
            "fallback_active": self.get_current_ram_usage() > self.ram_threshold
        }

router = ModelRouter()
