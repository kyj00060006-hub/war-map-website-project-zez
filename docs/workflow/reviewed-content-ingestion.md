# Reviewed Content Ingestion Workflow

This project can continue before expert review is finished. The website now has a separate calibration layer so reviewed content can be filled in later without changing page structure.

## Current Inputs

- Prefilled expert package: `/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/`
- Review summary table: `01_预填审校总表.csv`
- Per-battle prefilled cards: `02_预填战役资料卡/`
- OCR evidence CSVs: `03_证据摘要/`
- OCR excerpt Markdown files: `04_关键OCR摘录/`
- Visual source index: `website/src/data/visualSources.ts`
- Review status index: `website/src/data/battleReviewPackages.ts`

## What Can Be Built Before Expert Review

- Page layout and routes.
- Battle detail sections for source status, OCR evidence count, and related JPG/PDF candidates.
- Visual source selection UI.
- Draft badges and data-quality notes.
- Import scripts that convert reviewed CSV/Markdown into TypeScript data.

## What Should Wait For Review

- Final factual wording for dates, participants, troop strength, casualties, process, results, and significance.
- Final source citations with page numbers.
- Which maps are safe and suitable for public display.
- Disputed or conflicting interpretations.

## Final Fill-In Path

When reviewed material is ready:

1. Update or export a reviewed table from `professional_review_package_v2_prefilled`.
2. Convert confirmed fields into `src/data/battles.ts`.
3. Copy only selected web-ready image assets into `public/battle-images/` or `public/maps/`.
4. Keep source PDFs and large originals outside the website repo unless explicitly needed.
5. Run:

```bash
npm run index:visuals
npm run build
```

## Battle ID Notes

Some prefilled package IDs differ from website demo IDs. These are bridged in `src/data/battleReviewPackages.ts` and `src/utils/dataSelectors.ts`.

- `battle-yuxianggui-1944` -> `battle-ichigo-1944`, `battle-henan-1944`, `battle-hunan-1944`, `battle-guangxi-1944`
- `battle-changsha` -> `battle-first-changsha-1939`, `battle-second-changsha-1941`, `battle-third-changsha-1941`, `battle-fourth-changsha-1944`
- `battle-western-yunnan` -> `battle-west-yunnan-1944`
- `battle-central-plains-breakout` -> `battle-zhongyuan-breakout-1946`
- `battle-korean-war-outbreak-1950` -> `battle-korean-outbreak-1950`
- `battle-inchon-landing-1950` -> `battle-incheon-1950`

## Rule

Do not treat OCR-prefilled text as final historical fact. It is scaffolding for review and evidence navigation.
