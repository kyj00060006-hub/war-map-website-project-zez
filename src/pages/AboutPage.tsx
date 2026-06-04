import { PageShell } from "../components/layout/PageShell";

export function AboutPage() {
  return (
    <PageShell
      eyebrow="Project Notes"
      title="项目说明"
      description="第一版 Demo 用于验证课程作品的网站架构与可演示性。"
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
          <p>本轮由 Codex 根据构建计划生成工程骨架、数据 schema、交互组件和部署配置。</p>
        </article>
        <article>
          <h2>数据来源说明</h2>
          <p>第一版数据均为 draft 示例卡片，后续将补充正式史料来源、页码引用和数据冲突说明。</p>
        </article>
        <article>
          <h2>后续改进计划</h2>
          <p>计划加入真实地形图、战线变化、势力范围、部队部署、交通线、城市节点和更完整战役资料。</p>
        </article>
      </section>
    </PageShell>
  );
}
