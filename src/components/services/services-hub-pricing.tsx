import { Button } from "@/components/ui/button";

export function ServicesHubPricing() {
  return (
    <section className="section-padding bg-slate-950/50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Pricing</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl">
            Transparent ranges. Custom outcomes.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-400 md:text-base">
            We do not hide the ball on budget. What you invest depends on how deep we go—your scope, how many services you want to lead with, and how many locations you need to compete in. We anchor expectations early so you can move forward with confidence.
          </p>
          <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-slate-700/50 bg-slate-900/50 px-6 py-5 shadow-[0_0_40px_rgba(168,85,247,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">General range</p>
            <p className="mt-2 font-display text-xl font-bold text-white md:text-2xl">
              Most projects land between{" "}
              <span className="bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">$1,000 and $2,500</span>
              , depending on scope
            </p>
            <p className="mt-3 text-xs text-slate-500">
              Ranges are directional—not a cap or a floor. We will confirm numbers after a short discovery call.
            </p>
          </div>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <Button href="/contact" className="px-7 py-3" eventLabel="services_hub_quote">
              Request a personalized quote
            </Button>
            <Button href="/contact" variant="ghost" className="px-7 py-3" eventLabel="services_hub_audit">
              Get a free growth audit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
