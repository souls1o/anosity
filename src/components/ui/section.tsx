import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** Use `h1` only once per page (typically the hero section). */
  titleAs?: "h1" | "h2";
  children: ReactNode;
};

export function Section({ id, eyebrow, title, subtitle, titleAs = "h2", children }: SectionProps) {
  const HeadingTag = titleAs === "h1" ? "h1" : "h2";

  return (
    <section id={id} className="section-padding">
      <div className="container">
        <div className="mb-10 max-w-2xl">
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              {eyebrow}
            </p>
          ) : null}
          <HeadingTag className="text-3xl font-bold text-white md:text-4xl">{title}</HeadingTag>
          {subtitle ? <p className="mt-4 text-slate-300">{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
