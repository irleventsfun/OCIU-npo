import psutil
import os
import time
import subprocess

RAM_THRESHOLD = 0.9  # 90%
CHECK_INTERVAL = 60   # 1 minute

def self_heal():
    while True:
        ram_usage = psutil.virtual_memory().percent / 100
        if ram_usage > RAM_THRESHOLD:
            print(f"High RAM usage detected: {ram_usage*100}%. Cleaning up...")
            # Kill processes that are too heavy (simulated)
            # os.system("pkill -f 'heavy_agent'")

            # Log to Obsidian
            from backend.services.obsidian import obsidian
            obsidian.write_note("SystemHealthAlert", f"High RAM usage ({ram_usage*100}%) triggered self-healing.", folder="logs")

        time.sleep(CHECK_INTERVAL)

if __name__ == "__main__":
    self_heal()
