import { Section } from "@/components/ui/section";
import { PricingTierCards } from "@/components/services/pricing-tier-cards";
import type { ServicePricingBlock } from "@/lib/data/types";

type ServiceOutcomePricingSectionProps = {
  serviceTitle: string;
  pricing: ServicePricingBlock;
};

export function ServiceOutcomePricingSection({ serviceTitle, pricing }: ServiceOutcomePricingSectionProps) {
  return (
    <Section
      eyebrow="Investment"
      title={`Where do you want to take ${serviceTitle.toLowerCase()}?`}
      subtitle="Starting points—not boxed packages. Pick the outcome level that matches your ambition; we shape the engagement around your market and goals."
    >
      <PricingTierCards pricing={pricing} />
      <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-slate-500">{pricing.disclaimer}</p>
    </Section>
  );
}
