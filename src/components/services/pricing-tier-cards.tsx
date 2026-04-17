import type { ServicePricingBlock } from "@/lib/data/types";

type PricingTierCardsProps = {
  pricing: ServicePricingBlock;
};

export function PricingTierCards({ pricing }: PricingTierCardsProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {pricing.tiers.map((tier) => (
        <article
          key={tier.id}
          className="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/35 p-6 shadow-[0_12px_40px_rgba(2,6,23,0.45)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-cyan-500/25 hover:shadow-[0_20px_50px_rgba(168,85,247,0.12)]"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-fuchsia-500/[0.07] via-transparent to-cyan-500/[0.1] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden
          />
          <div className="relative">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300/90">{tier.label}</p>
            <h3 className="mt-2 font-display text-lg font-bold tracking-tight text-white">{tier.headline}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{tier.body}</p>
            <p className="mt-6 text-xs font-medium uppercase tracking-wider text-slate-500">Starting from</p>
            <p className="mt-1 bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text font-display text-2xl font-bold text-transparent">
              {tier.startingFrom}
            </p>
            <div
              className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-fuchsia-500/10 blur-2xl transition-opacity duration-300 group-hover:bg-fuchsia-500/15"
              aria-hidden
            />
          </div>
        </article>
      ))}
    </div>
  );
}
