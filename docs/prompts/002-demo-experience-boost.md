# 002 Demo Experience Boost

请基于当前第一版，不要重构整体架构，做一次 Demo 体验补强。

目标：
当前工程架构基本正确。下一步不是填充大量历史资料，而是让第一版展示体验更完整、更像一个可演示作品。

请完成：

1. 空阶段提示
当用户点击某个时间阶段但该阶段没有战役点时，在地图页明显位置显示：
“当前阶段暂无已录入战役，后续将补充该阶段资料。”
不要让用户以为地图坏了。

2. 当前阶段战役列表
在地图页增加“当前阶段战役列表”区域，显示当前 activeWarId + activeStageId 下的战役。
点击列表中的战役时：
- 地图定位到该战役坐标
- 打开 BattlePreviewModal

3. 图层 tooltip
给 MapLayerRenderer 中的 Polyline 和 Polygon 添加 Tooltip，显示 layer.name 和 layer.description。
为后续战线、势力范围、行军路线展示做准备。

4. 图例增强
MapLegend 需要区分：
- battle marker
- route
- frontline
- control-area
- troop-area
即使当前只有少量示例图层，也要让后续扩展顺滑。

5. 地图视觉包装
在不替换底图的情况下，优化地图页视觉，使其更接近“现代军事沙盘 / 作战平台”，不要像普通旅游地图。
可以通过：
- 深色面板
- 半透明信息卡片
- 更清晰的边框
- 更克制的按钮状态
- 地图容器外框
来完成。
不要使用夸张动画、黄土风、页游风。

6. 详情页返回地图定位预留
在 /battles/:battleId 页的“返回地图”链接中，预留 query 参数：
/map?battle=xxx
暂时可以不完全实现定位，但请先设计好入口。
后续要实现从详情页返回地图并自动定位该战役。

要求：
- 不要把历史内容写死在组件里。
- 不要破坏现有 data schema。
- 不要重写整个 WarMap。
- 不要大量新增未经核验的历史资料。
- npm run build 必须通过。

## Completion Notes

Completed and committed as:

```txt
8c41d55 Enhance war map demo experience
```
