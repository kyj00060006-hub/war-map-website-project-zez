from __future__ import annotations

from typing import Dict, List, Union


def choose_split(text: str, start: int, target_end: int) -> int:
    if target_end >= len(text):
        return len(text)
    window_start = max(start + 1, target_end - 1200)
    window = text[window_start:target_end]
    for marker in ["\n\n", "\n", "。", "；", ";"]:
        index = window.rfind(marker)
        if index > 0:
            return window_start + index + len(marker)
    return target_end


Chunk = Dict[str, Union[int, str]]


def chunk_text(text: str, chunk_size: int, overlap: int) -> List[Chunk]:
    if chunk_size <= 0:
        raise ValueError("chunk_size must be positive")
    if overlap < 0 or overlap >= chunk_size:
        raise ValueError("chunk_overlap must be >= 0 and < chunk_size")

    chunks: List[Chunk] = []
    start = 0
    length = len(text)
    while start < length:
        target_end = min(length, start + chunk_size)
        end = choose_split(text, start, target_end)
        if end <= start:
            end = target_end
        chunks.append({"index": len(chunks) + 1, "char_start": start, "char_end": end, "text": text[start:end].strip()})
        if end >= length:
            break
        start = max(0, end - overlap)
    return chunks
