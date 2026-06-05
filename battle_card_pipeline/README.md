# Battle Card Pipeline

Create reviewed-ready Markdown battle card drafts from the TXT pipeline output.

This tool does not create website data. It only searches normalized chunk files,
collects evidence candidates, and writes draft/incomplete cards for human review.

## Run

```bash
cd battle_card_pipeline
python3 run_battle_cards.py --dry-run
python3 run_battle_cards.py --limit 5
python3 run_battle_cards.py
```

Default input:

```txt
~/Desktop/zez_project/txt_pipeline_output
```

Default output:

```txt
~/Desktop/zez_project/battle_cards_output
```

Custom paths:

```bash
python3 run_battle_cards.py \
  --input ~/Desktop/zez_project/txt_pipeline_output \
  --output ~/Desktop/zez_project/battle_cards_output
```

## Output

```txt
battle_cards_output/
  battle_cards/<war>/<battle_id>.md
  evidence_index/evidence_index.csv
  evidence_index/evidence_index.json
  review_queue.md
  batch_summary.md
```

## Quality Rules

- Cards are `draft` when evidence candidates exist.
- Cards are `incomplete` when no evidence candidate is found.
- Nothing is marked `checked`.
- Raw TXT/chunks are not converted directly into website data.
- Evidence snippets are candidates for review, not final historical claims.
