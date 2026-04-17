import { Button } from "@/components/ui/button";

type PricingTransitionCtaProps = {
  serviceSlug: string;
};

export function PricingTransitionCta({ serviceSlug }: PricingTransitionCtaProps) {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-slate-700/40 bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-900/80 p-8 shadow-[0_0_60px_rgba(6,182,212,0.08)] md:p-10">
          <div
            className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-fuchsia-600/15 blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-300">Still deciding?</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl">
              Get clarity before you commit
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              If you are not sure which level fits, start with a short conversation. We will map realistic outcomes, timelines, and what “winning” looks like in your market—no pressure and no commodity checklist.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href="/contact" className="px-6 py-3" eventLabel={`pricing_quote_${serviceSlug}`}>
                Request a quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
