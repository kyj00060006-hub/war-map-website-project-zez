from __future__ import annotations

from pathlib import Path


def read_text_with_encoding(path: Path) -> tuple[str, str]:
    raw = path.read_bytes()

    for encoding in ["utf-8", "utf-8-sig"]:
        try:
            return raw.decode(encoding), encoding
        except UnicodeDecodeError:
            pass

    try:
        from charset_normalizer import from_bytes

        matches = from_bytes(raw)
        best = matches.best()
        if best and best.encoding:
            return str(best), best.encoding
    except Exception:
        pass

    for encoding in ["gb18030", "big5", "latin-1"]:
        try:
            return raw.decode(encoding), encoding
        except UnicodeDecodeError:
            pass

    raise UnicodeDecodeError("unknown", raw, 0, 1, "Could not decode text file")
