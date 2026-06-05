from __future__ import annotations

from datetime import datetime
from typing import Any


def now_iso() -> str:
    return datetime.now().isoformat(timespec="seconds")


def log_entry(file_id: str, file_name: str, status: str, message: str = "", **extra: Any) -> dict[str, Any]:
    return {
        "time": now_iso(),
        "file_id": file_id,
        "file_name": file_name,
        "status": status,
        "message": message,
        **extra,
    }
