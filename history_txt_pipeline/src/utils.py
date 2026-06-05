from __future__ import annotations

import hashlib
import re
from pathlib import Path


def stable_file_id(relative_path: str) -> str:
    return hashlib.sha1(relative_path.encode("utf-8")).hexdigest()[:12]


def safe_name(name: str, max_len: int = 88) -> str:
    cleaned = re.sub(r"[\\/:*?\"<>|]+", "_", name)
    cleaned = re.sub(r"\s+", " ", cleaned).strip(". ")
    if not cleaned:
        cleaned = "untitled"
    if len(cleaned) <= max_len:
        return cleaned
    digest = hashlib.sha1(name.encode("utf-8")).hexdigest()[:8]
    return f"{cleaned[:max_len - 10].rstrip()}_{digest}"


def relpath(path: Path, root: Path) -> str:
    return path.relative_to(root).as_posix()


def normalize_text(text: str, normalize_whitespace: bool, keep_line_breaks: bool) -> str:
    text = text.replace("\r\n", "\n").replace("\r", "\n")
    text = text.replace("\ufeff", "")
    if normalize_whitespace:
        lines = [re.sub(r"[ \t]+", " ", line).rstrip() for line in text.split("\n")]
        if keep_line_breaks:
            text = "\n".join(lines)
            text = re.sub(r"\n{4,}", "\n\n\n", text)
        else:
            text = re.sub(r"\s+", " ", "\n".join(lines)).strip()
    return text.strip()


def possible_garbled_text(text: str) -> bool:
    if not text:
        return True
    replacement_count = text.count("\ufffd")
    odd_count = sum(text.count(token) for token in ["锟", "�", "Ã", "Â"])
    sample_len = max(1, min(len(text), 5000))
    return (replacement_count + odd_count) / sample_len > 0.01
