import type { ServicePricingBlock } from "./types";

/** Reusable disclaimer under outcome-based tiers */
export const pricingScopeDisclaimer =
  "Final investment depends on your scope, how many services you promote, and how many locations you need to win.";

export const webDesignPricing: ServicePricingBlock = {
  disclaimer:
    "Build pricing is separate from maintenance. Ongoing maintenance is $97/mo and includes hosting, small updates, fixes, and monthly reporting (page visits, button clicks, and form submissions).",
  tiers: [
    {
      id: "basic",
      label: "Basic",
      headline: "A credible site that earns trust fast",
      body: "For businesses that need a polished, professional digital front door—clear positioning, strong first impression, and frictionless contact paths so serious prospects know you are the right call.",
      startingFrom: "$600",
    },
    {
      id: "growth",
      label: "Growth",
      headline: "More qualified leads from the services you want most",
      body: "For operators ready to compete on intent—sharper messaging across multiple services, conversion paths tuned to how people actually buy, and a site structured to turn more of the right traffic into booked work.",
      startingFrom: "$1,000",
    },
    {
      id: "authority",
      label: "Authority",
      headline: "Multi-city dominance and compounding demand",
      body: "For brands pushing into new towns and categories—built to scale authority across markets, reinforce relevance everywhere you operate, and support aggressive local growth without diluting trust or clarity.",
      startingFrom: "$1,800",
    },
  ],
};

export const aiReceptionistPricing: ServicePricingBlock = {
  disclaimer:
    "AI receptionist investment is monthly and depends on customization depth (scripts, response logic, booking flows, and feature add-ons).",
  tiers: [
    {
      id: "ai-starter",
      label: "Starter",
      headline: "Reliable AI call handling with your core script",
      body: "Great for businesses that need consistent after-hours and overflow coverage using approved scripts, core FAQs, and clean handoff behavior.",
      startingFrom: "$197/mo",
    },
    {
      id: "ai-growth",
      label: "Growth",
      headline: "Smarter responses and tailored conversation paths",
      body: "For teams that want deeper customization: service-specific responses, qualification logic, and more nuanced scripting that matches your brand voice.",
      startingFrom: "$297/mo",
    },
    {
      id: "ai-advanced",
      label: "Advanced",
      headline: "Automation-forward receptionist workflows",
      body: "For operators who want advanced booking automation, custom integrations, escalation rules, and expanded feature sets for higher call volume.",
      startingFrom: "$497/mo",
    },
  ],
};

export const localSeoPricing: ServicePricingBlock = {
  disclaimer: pricingScopeDisclaimer,
  tiers: [
    {
      id: "foundation",
      label: "Foundation",
      headline: "Visibility that puts you back in the running",
      body: "Stabilize your local footprint, tighten trust signals, and earn more of the searches that already exist—so neighbors who need you can actually find you and choose you with confidence.",
      startingFrom: "$700/mo",
    },
    {
      id: "seo-growth",
      label: "Growth",
      headline: "More calls from the zip codes that pay",
      body: "Turn up demand where it matters—map visibility, service-area relevance, and authority that translate into more conversations with buyers who are ready to book, not just browse.",
      startingFrom: "$1,500/mo",
    },
    // {
    //   id: "expansion",
    //   label: "Expansion",
    //   headline: "New markets without starting from zero",
    //   body: "Layer in additional towns, trades, or offers with a roadmap designed to compound—so each expansion builds on the last and your pipeline keeps widening without losing focus or control.",
    //   startingFrom: "$2,400/mo",
    // },
  ],
};
