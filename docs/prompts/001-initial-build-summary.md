# 001 Initial Build Summary

The original first-round prompt asked Codex to build a deployable, extensible demo website for modern war-history visualization.

## Required Stack

- React
- Vite
- TypeScript
- React Router
- Leaflet / React Leaflet
- Plain CSS or CSS Modules
- TypeScript/JSON-style data modules
- Vercel deployment support

## Required Routes

```txt
/
/map
/battles
/battles/:battleId
/about
```

## Required First Demo Features

- Home page cover
- Shared layout and navigation
- Map page
- Three-war switching
- Stage-level timeline
- Battle markers on map
- Battle preview modal
- Modal link to full battle detail page
- Battle archive page
- Single battle detail page
- About page
- All historical content data-driven, not hardcoded in components
- Vercel SPA rewrite support

## Required Data Modules

```txt
src/data/wars.ts
src/data/timeline.ts
src/data/battles.ts
src/data/mapConfigs.ts
src/data/mapLayers.ts
src/data/cities.ts
src/data/routes.ts
```

## Required Map Architecture

- Use one shared `WarMap` component.
- Do not create separate map components for each war.
- Use `BaseMapLayer` to support standard tile, custom tile, and image overlay basemaps.
- Use `MapLayerRenderer` to prepare for frontlines, control areas, troop areas, and routes.

## Visual Direction

- Modern military sandbox
- Historical archive
- Dark background
- Graphite gray
- Dark blue-gray
- Low-saturation military green
- Semi-transparent information panels
- Fine borders
- Clear modern sans-serif typography

Avoid:

- cheap war-game style
- yellow-earth palette
- parchment / ancient-scroll style
- big red-black slogan poster style
- excessive animation

## Demo Data Scope

The first version uses 3-5 sample battles per war and marks them as `draft`. It should not pretend that the historical data is fully source-verified.

## Completion Notes

The initial implementation was committed as:

```txt
08284f4 Build war history map demo
```

It created the route structure, data schema, map components, archive/detail pages, Vercel config, and README.
