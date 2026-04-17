type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export function Section({ id, eyebrow, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="section-padding">
      <div className="container">
        <div className="mb-10 max-w-2xl">
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
          {subtitle ? <p className="mt-4 text-slate-300">{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
