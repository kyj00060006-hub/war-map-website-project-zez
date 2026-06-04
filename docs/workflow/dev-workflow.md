# Development Workflow

This document keeps work reproducible across devices and Codex sessions.

## One-Time Setup On A New Device

```bash
git clone https://github.com/kyj00060006-hub/war-map-website-project-zez.git
cd war-map-website-project-zez
npm install
npm run dev
```

If the repository already exists locally:

```bash
cd war-map-website-project-zez
git status
git pull
npm install
npm run dev
```

## Daily Start Checklist

Run:

```bash
git status
git pull
```

Read:

```txt
CODEX_HANDOFF.md
README.md
docs/workflow/dev-workflow.md
```

Then inspect the relevant source files before editing.

## Before Editing

Check:

```bash
git status --short
```

If there are uncommitted changes you did not make, do not overwrite or revert them. Understand whether they are part of the current task.

## Development Server

```bash
npm run dev
```

Vite usually opens:

```txt
http://localhost:5173/
```

Useful routes:

```txt
/
/map
/map?battle=battle-shanghai-1937
/battles
/battles/battle-shanghai-1937
/about
```

## Build Verification

Every handoff-worthy change should pass:

```bash
npm run build
```

Expected output should include a successful Vite production build into `dist/`.

## Git Handoff Rules

Commit focused work:

```bash
git status
git add <files>
git commit -m "<message>"
```

Push when another device needs to continue:

```bash
git push
```

Confirm clean state:

```bash
git status --short
```

No output means the working tree is clean.

## What To Update After Each Round

Update `CODEX_HANDOFF.md` when any of these change:

- current project status
- latest important commits
- new constraints
- known issues
- next recommended tasks
- setup/build/deploy instructions

Archive major prompts in `docs/prompts/`.

## Dependency Policy

- Keep dependencies in project-local `node_modules/`.
- Do not use global installs for project dependencies.
- Commit `package.json` and `package-lock.json` together.
- Do not commit `node_modules/` or `dist/`.
- If a dependency is added, explain why in the final response or commit summary.

## Architecture Guardrails

Data:

- Use `src/data/` for historical content.
- Use `src/types/war.ts` for shared schema.
- Keep sample data marked as `draft` unless source-checked.

Map:

- Keep one shared `WarMap` component.
- Keep basemap rendering behind `BaseMapLayer`.
- Keep future map overlays behind `MapLayerRenderer`.
- Add map-layer data through `src/data/mapLayers.ts` or future data modules.

UI:

- Keep the dark archive / operational dashboard style.
- Prefer restrained panels, clear borders, and readable density.
- Avoid over-animated, game-like, parchment, or slogan-poster styles.

Routing:

- Keep React Router routes centralized in `src/app/router.tsx`.
- Keep Vercel SPA rewrites in `vercel.json`.

## Recommended Codex Start Command

Tell Codex:

```txt
先读 CODEX_HANDOFF.md、README.md、docs/workflow/dev-workflow.md，再继续我的任务。不要重构整体架构，完成后运行 npm run build，更新 CODEX_HANDOFF.md 并提交。
```
