import { PageShell } from "../components/layout/PageShell";

export function AboutPage() {
  return (
    <PageShell
      eyebrow="Project Notes"
      title="项目说明"
      description="本项目以历史科普叙述为主，结合地图、时间轴、图册和资料校准状态展示近现代战争进程。"
    >
      <section className="about-grid">
        <article>
          <h2>项目目标</h2>
          <p>通过地图、时间轴、战役资料库和详情页展示三场近现代战争的阶段演变和重要战役分布。</p>
        </article>
        <article>
          <h2>功能说明</h2>
          <p>当前版本支持多页面路由、战争切换、阶段筛选、战役点位预览、资料库筛选和结构化详情。</p>
        </article>
        <article>
          <h2>AI 工具工作流</h2>
          <p>本轮由 Codex 根据构建计划整理资料、生成数据 schema、交互组件、审校工作台和部署配置。</p>
        </article>
        <article>
          <h2>数据来源说明</h2>
          <p>当前内容来自 OCR 文本、图册候选页和字段级证据对齐表；兵力、伤亡、起止日期等数字字段保留待校准说明。</p>
        </article>
        <article>
          <h2>后续改进计划</h2>
          <p>后续可继续补充矢量化态势层、战线变化、势力范围、部队部署、交通线、城市节点和更完整来源页码。</p>
        </article>
      </section>
    </PageShell>
  );
}
