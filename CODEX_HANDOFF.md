# Codex Handoff

This file is the first thing Codex should read when continuing this project on a different device.

## Project

- Repository: `kyj00060006-hub/war-map-website-project-zez`
- GitHub URL: `https://github.com/kyj00060006-hub/war-map-website-project-zez`
- Local project name: `war-map-website-project-zez`
- Current branch: `main`
- App type: React + Vite + TypeScript single-page app
- Deployment target: Vercel

## Current Goal

Build a course-demo website for modern Chinese war-history visualization. The site should feel like a restrained modern military sandbox / archive interface, not a casual travel map or flashy war game.

The first demo validates:

- multi-page routing
- war switching
- stage timeline filtering
- Leaflet map rendering
- battle markers
- battle preview modal
- battle archive page
- battle detail page
- Vercel SPA routing support

The current priority is demo experience and extensibility, not adding large amounts of unverified historical data.

## Current Status

Implemented pages:

- `/` home page
- `/map` war map overview
- `/battles` battle archive
- `/battles/:battleId` battle detail
- `/about` project notes

Implemented interactions:

- Switch among Anti-Japanese War, Chinese Civil War, and Korean War / War to Resist U.S. Aggression and Aid Korea
- Select timeline stages
- Show battle markers for the active war + active stage
- Show an empty-stage message when no battles are recorded for a stage
- Show a current-stage battle list on the map page
- Click a battle in the list to fly the map to that battle and open `BattlePreviewModal`
- Click a map marker to open `BattlePreviewModal`
- Navigate from modal to battle detail page
- Return from battle detail to `/map?battle=<battleId>` with a positioning-ready query parameter
- Render route/frontline/control-area/troop-area layer schemas, with tooltips for map layers
- Show an enhanced legend for battle markers and future map layer types

Important history commits expected on `main`:

- `08284f4 Build war history map demo`
- `8c41d55 Enhance war map demo experience`

There may be later handoff or feature commits after these. On a new device, always check:

```bash
git log --oneline --max-count=5
```

If a new device does not see the latest pushed work, run `git pull` or confirm the previous device pushed successfully.

## Tech Stack

- React 18
- Vite 4
- TypeScript
- React Router
- Leaflet
- React Leaflet
- Plain CSS
- TypeScript data modules

Vite is intentionally pinned to `^4.5.14` in `package.json` because the current macOS/Codex runtime had Rollup 4 native binary signature problems with Vite 5. Do not upgrade Vite unless you are ready to re-test build behavior.

## Important Files

Routing:

- `src/app/router.tsx`

Pages:

- `src/pages/HomePage.tsx`
- `src/pages/MapPage.tsx`
- `src/pages/BattlesPage.tsx`
- `src/pages/BattleDetailPage.tsx`
- `src/pages/AboutPage.tsx`

Map components:

- `src/components/map/WarMap.tsx`
- `src/components/map/BaseMapLayer.tsx`
- `src/components/map/BattleMarkers.tsx`
- `src/components/map/MapLayerRenderer.tsx`
- `src/components/map/MapLegend.tsx`
- `src/components/map/StageTimeline.tsx`
- `src/components/map/StageInfoPanel.tsx`
- `src/components/map/StageBattleList.tsx`
- `src/components/map/BattlePreviewModal.tsx`

Battle components:

- `src/components/battles/BattleCard.tsx`
- `src/components/battles/BattleFilters.tsx`
- `src/components/battles/BattleDetailContent.tsx`

Data and types:

- `src/types/war.ts`
- `src/data/wars.ts`
- `src/data/timeline.ts`
- `src/data/battles.ts`
- `src/data/mapConfigs.ts`
- `src/data/mapLayers.ts`
- `src/utils/dataSelectors.ts`

Styles:

- `src/styles/global.css`

Deployment:

- `vercel.json`

## Non-Negotiable Constraints

- Do not rewrite the whole architecture.
- Do not split the map into separate `AntiJapaneseMap`, `CivilWarMap`, or `KoreanWarMap` components.
- Do not hardcode historical content in JSX components.
- Keep historical data in `src/data/` or future data modules.
- Do not break `src/types/war.ts`.
- Do not add large volumes of unverified history data just to make the demo look fuller.
- Keep `dataQuality.status` as `draft` for sample data unless sources are actually checked.
- Do not add login, backend, database, CMS, or heavy UI frameworks.
- Keep the visual language restrained: dark panels, graphite/blue-gray, low-saturation military green, clean borders.
- Avoid parchment, yellow-earth theme, big red-black poster style, or flashy war-game style.
- `npm run build` must pass before handing off or pushing.

## Fresh Device Setup

Use these commands on another device:

```bash
git clone https://github.com/kyj00060006-hub/war-map-website-project-zez.git
cd war-map-website-project-zez
npm install
npm run dev
```

Open the local Vite URL, usually:

```txt
http://localhost:5173/
```

Build check:

```bash
npm run build
```

If the new device already has the repo:

```bash
cd war-map-website-project-zez
git status
git pull
npm install
npm run dev
```

## Codex Startup Prompt For Another Device

Paste this into Codex on the new device:

```txt
请接力这个项目。先阅读 CODEX_HANDOFF.md、README.md、docs/workflow/dev-workflow.md，然后检查 git status 和最近 3 个 commit。

项目是 React + Vite + TypeScript + React Router + React Leaflet 的近现代战争时空可视化网站。

请遵守：
- 不要重构整体架构
- 不要把历史内容写死在组件里
- 不要破坏 src/types/war.ts 和现有 data schema
- 不要新增大量未经核验的历史资料
- 每轮完成后运行 npm run build
- 每轮完成后更新 CODEX_HANDOFF.md，提交 git，并提醒我是否需要 push

当前我想继续做的是：<在这里写本轮任务>
```

## Normal Work Loop

1. Pull latest code:

   ```bash
   git pull
   ```

2. Read:

   ```txt
   CODEX_HANDOFF.md
   README.md
   docs/workflow/dev-workflow.md
   ```

3. Make a focused change.

4. Run:

   ```bash
   npm run build
   ```

5. Update `CODEX_HANDOFF.md` if the project status or next task changed.

6. Commit:

   ```bash
   git status
   git add <changed files>
   git commit -m "<clear message>"
   ```

7. Push when the work should be available on another device:

   ```bash
   git push
   ```

## Known Environment Notes

- This project keeps dependencies local in `node_modules/`. Do not install project dependencies globally.
- If one Codex environment does not have `npm` available globally, use the device terminal or install Node.js normally. Avoid global package installs unless the user explicitly approves.
- Vercel should detect Vite automatically. The SPA route refresh behavior is handled by `vercel.json`.
- `dist/` and `node_modules/` are ignored by git.

## Next Good Tasks

Reasonable next iterations:

- Make `/map?battle=<battleId>` close/open behavior more polished and optionally highlight the selected marker.
- Add a small “data quality” badge on battle archive cards.
- Add source-management placeholders to battle detail pages.
- Add optional city nodes and route toggles using the existing map-layer architecture.
- Add a Vercel deployment note after the first successful deployment.

Avoid next:

- Do not add dozens of new battles before source workflow is designed.
- Do not replace the whole map system.
- Do not introduce backend/database features.
