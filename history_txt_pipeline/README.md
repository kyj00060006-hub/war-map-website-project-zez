# History TXT Pipeline

Local pipeline for processing OCR TXT historical sources into a source index, normalized Markdown copies, and chunk files for later battle-card extraction.

This does **not** perform PDF extraction and does **not** write directly to website data files such as `battles.ts`.

## Install

```bash
cd history_txt_pipeline
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

The pipeline can run without optional dependencies, but `charset-normalizer` improves non-UTF-8 text reading.

## Configure

```bash
cp config.example.json config.json
```

Edit:

```json
{
  "input_dir": "~/Desktop/zez_project/ocr_text",
  "output_dir": "~/Desktop/zez_project/txt_pipeline_output"
}
```

For the current OCR output, use:

```json
{
  "input_dir": "~/Desktop/zez_project/ocr_text",
  "output_dir": "~/Desktop/zez_project/txt_pipeline_output"
}
```

## Dry Run

```bash
python run_pipeline.py --config config.json --dry-run
```

## Test First 5 Files

```bash
python run_pipeline.py --config config.json --limit 5
```

## Full Run

```bash
python run_pipeline.py --config config.json
```

Or pass paths directly:

```bash
python run_pipeline.py --input ~/Desktop/zez_project/ocr_text --output ~/Desktop/zez_project/txt_pipeline_output
```

## Output

```txt
txt_pipeline_output/
  00_manifest/
    txt_manifest.csv
    txt_manifest.json
  01_normalized_text/
  02_chunks/
  03_source_index/
    source_index.md
    source_index.csv
    source_index.json
  04_processing_logs/
    processing_log.md
    processing_log.json
    failed_files.md
  05_batch_reports/
    batch_summary.md
  06_ready_for_battle_cards/
    README.md
```

## Battle-Card Workflow

Correct downstream flow:

```txt
normalized text / chunks
→ source index
→ selected P0 sources
→ Markdown battle cards
→ human review
→ website data
```

Do not directly convert raw TXT into final website data.
