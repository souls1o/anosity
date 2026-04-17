import type { Service } from "./types";
import { localSeoPricing, webDesignPricing } from "./services-pricing-copy";

export const services: Service[] = [
  {
    slug: "web-design",
    title: "Web Design",
    shortDescription:
      "High-converting websites built to turn local traffic into booked calls.",
    heroTitle: "Websites That Convert Clicks Into Calls",
    heroSubtitle:
      "We design premium, fast websites for roofing, HVAC, plumbing, cleaning, and home-service businesses that need more booked jobs.",
    benefits: [
      "Mobile-first layouts optimized for trust and conversions",
      "Fast page speed and clean UX that improves lead quality",
      "Built-in local SEO structure for long-term traffic growth",
      "Conversion-focused copy and calls to action across every page",
    ],
    problemsSolved: [
      "Outdated sites that look untrustworthy",
      "Traffic that does not become calls or form leads",
      "Slow websites that lose rankings and users",
      "Pages that fail to explain your real value quickly",
    ],
    process: [
      "Audience and offer positioning workshop",
      "Wireframes and conversion-first page structure",
      "Premium visual design and development",
      "Launch, tracking setup, and optimization roadmap",
    ],
    primaryKeyword: "web design for local businesses",
    pricing: webDesignPricing,
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    shortDescription:
      "Own local search visibility and drive qualified inbound leads every month.",
    heroTitle: "Get Found First in Local Search",
    heroSubtitle:
      "Our local SEO campaigns help service businesses rank in the map pack and organic results where buying-intent customers are searching.",
    benefits: [
      "City and service keyword targeting strategy",
      "Google Business Profile optimization and management",
      "Technical and on-page optimization for ranking gains",
      "Local authority signals and citation consistency",
    ],
    problemsSolved: [
      "Low map pack visibility in your service areas",
      "Inconsistent local listings and trust signals",
      "Poor on-page SEO structure",
      "Competitors outranking you for high-intent terms",
    ],
    process: [
      "Local visibility and keyword opportunity audit",
      "Technical and on-page fixes",
      "City + service landing page rollout",
      "Monthly reporting and ranking improvements",
    ],
    primaryKeyword: "local seo for service businesses",
    pricing: localSeoPricing,
  },
];

export const serviceMap = new Map(services.map((service) => [service.slug, service]));
