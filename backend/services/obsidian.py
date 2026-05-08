import os
from pathlib import Path

class ObsidianVault:
    def __init__(self):
        self.vault_path = os.getenv("OBSIDIAN_VAULT_PATH", "./obsidian_vault")
        os.makedirs(self.vault_path, exist_ok=True)

    def write_note(self, title: str, content: str, folder: str = ""):
        target_dir = Path(self.vault_path) / folder
        target_dir.mkdir(parents=True, exist_ok=True)

        file_path = target_dir / f"{title}.md"
        with open(file_path, "w") as f:
            f.write(content)
        return str(file_path)

    def read_note(self, title: str, folder: str = ""):
        file_path = Path(self.vault_path) / folder / f"{title}.md"
        if file_path.exists():
            with open(file_path, "r") as f:
                return f.read()
        return None

    def list_notes(self, folder: str = ""):
        target_dir = Path(self.vault_path) / folder
        if target_dir.exists():
            return [f.stem for f in target_dir.glob("*.md")]
        return []

obsidian = ObsidianVault()
