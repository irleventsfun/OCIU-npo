import sqlite3
import os
import json
import time
from typing import Optional

class AICache:
    def __init__(self, db_path="ai_cache.db"):
        self.db_path = db_path
        self._init_db()

    def _init_db(self):
        with sqlite3.connect(self.db_path) as conn:
            conn.execute("""
                CREATE TABLE IF NOT EXISTS cache (
                    prompt_hash TEXT PRIMARY KEY,
                    response TEXT,
                    timestamp REAL
                )
            """)

    def get(self, prompt: str) -> Optional[str]:
        import hashlib
        prompt_hash = hashlib.sha256(prompt.encode()).hexdigest()
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.execute("SELECT response FROM cache WHERE prompt_hash = ?", (prompt_hash,))
            row = cursor.fetchone()
            if row:
                return row[0]
        return None

    def set(self, prompt: str, response: str):
        import hashlib
        prompt_hash = hashlib.sha256(prompt.encode()).hexdigest()
        with sqlite3.connect(self.db_path) as conn:
            conn.execute(
                "INSERT OR REPLACE INTO cache (prompt_hash, response, timestamp) VALUES (?, ?, ?)",
                (prompt_hash, response, time.time())
            )

ai_cache = AICache()
