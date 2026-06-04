import type { ReactNode } from "react";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  compact?: boolean;
};

export function PageShell({ eyebrow, title, description, children, compact }: PageShellProps) {
  return (
    <main className={compact ? "page-shell compact" : "page-shell"}>
      <section className="page-heading">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {description ? <p>{description}</p> : null}
      </section>
      {children}
    </main>
  );
}
