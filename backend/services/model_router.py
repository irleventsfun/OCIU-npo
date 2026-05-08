import psutil
import os
from enum import Enum
from typing import Optional

class TaskComplexity(Enum):
    LIGHT = "light"
    MID = "mid"
    HEAVY = "heavy"

class ModelRouter:
    def __init__(self):
        self.ram_threshold = 0.8

    def get_current_ram_usage(self):
        # Allow override for testing
        force_usage = os.getenv("FORCE_RAM_USAGE")
        if force_usage:
            return float(force_usage)
        return psutil.virtual_memory().percent / 100

    def select_model(self, complexity: TaskComplexity) -> str:
        ram_usage = self.get_current_ram_usage()

        if ram_usage > self.ram_threshold:
            return "cloud-fallback"

        if complexity == TaskComplexity.LIGHT:
            return "qwen3:0.5b"
        elif complexity == TaskComplexity.MID:
            return "qwen3:4b"
        elif complexity == TaskComplexity.HEAVY:
            return "qwen3:8b"

        return "qwen3:1.8b"

    def get_status(self):
        return {
            "ram_usage": self.get_current_ram_usage(),
            "fallback_active": self.get_current_ram_usage() > self.ram_threshold
        }

router = ModelRouter()
