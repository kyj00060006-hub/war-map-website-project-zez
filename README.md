# 近现代战争时空可视化网站

这是一个面向课程作品展示的 React + Vite + TypeScript 第一版 Demo。网站通过地图、阶段时间轴、战役资料库和战役详情页，展示抗日战争、解放战争、朝鲜战争 / 抗美援朝的示例战役分布。

## 功能

- 首页封面与三大战争索引
- `/map` 战争地图总览页
- 三大战争切换
- 阶段级时间轴筛选
- Leaflet 战役点位与战役预览 Modal
- `/battles` 战役资料库，支持战争、阶段和搜索筛选
- `/battles/:battleId` 单场战役详情页
- `/about` 项目说明页
- `vercel.json` SPA rewrites，适配 Vercel 部署

## 技术栈

- React
- Vite
- TypeScript
- React Router
- Leaflet / React Leaflet
- 普通 CSS
- TypeScript data modules

## Demo 定位

本版本为第一版 Demo，使用少量示例战役数据验证网站架构、地图交互、时间轴筛选、战役弹窗和详情页。完整史料数据、真实地形图、战线变化、势力范围、部队部署图层和经核验的战役卡片将在后续版本中逐步补充。

This is the first demo version. It uses sample historical data to validate the website architecture, routing, map interaction, timeline filtering, battle preview modal, and battle detail pages. Full historical data, custom terrain maps, front lines, control areas, troop deployment layers, and source-verified battle cards will be added in later iterations.

## 本地运行

```bash
git clone https://github.com/kyj00060006-hub/war-map-website-project-zez.git
cd war-map-website-project-zez
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## 数据结构

历史内容集中在 `src/data/` 与 `src/types/war.ts`：

- `wars.ts`
- `timeline.ts`
- `battles.ts`
- `mapConfigs.ts`
- `mapLayers.ts`
- `cities.ts`
- `routes.ts`

地图底图由 `mapConfigs.ts` 控制，当前使用标准瓦片，后续可替换为自定义瓦片或图片覆盖底图。

## 跨设备接力

换设备继续开发时，请先阅读：

- `CODEX_HANDOFF.md`
- `docs/workflow/dev-workflow.md`
- `docs/prompts/codex-start-template.md`

推荐接力流程：

```bash
git pull
npm install
npm run dev
```

每轮完成后：

```bash
npm run build
git status
git add <changed-files>
git commit -m "<clear message>"
git push
```
