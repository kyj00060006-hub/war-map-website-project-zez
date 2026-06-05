from __future__ import annotations

import re
from pathlib import Path
from typing import Dict


META_RE = re.compile(r"^- ([^:]+):\s*(.*)$", re.MULTILINE)


def read_chunk(path: Path) -> Dict[str, str]:
    raw = path.read_text(encoding="utf-8", errors="replace")
    metadata = {match.group(1).strip(): match.group(2).strip() for match in META_RE.finditer(raw)}
    marker = "\n## Text\n"
    text = raw.split(marker, 1)[1].strip() if marker in raw else raw
    metadata["text"] = text
    metadata["chunk_path"] = str(path)
    return metadata

