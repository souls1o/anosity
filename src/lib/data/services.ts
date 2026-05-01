import type { Service } from "./types";
import { aiReceptionistPricing, localSeoPricing, webDesignPricing } from "./services-pricing-copy";

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
  {
    slug: "ai-receptionist",
    title: "AI Receptionist",
    shortDescription:
      "Never miss qualified calls with an AI receptionist trained on your services, scripts, and booking flow.",
    heroTitle: "AI Receptionist That Converts Calls Into Booked Jobs",
    heroSubtitle:
      "We implement AI receptionist workflows for service businesses that need fast, consistent responses, better lead qualification, and optional automated booking.",
    benefits: [
      "24/7 call coverage for missed, overflow, and after-hours inquiries",
      "Scripted responses tailored to your services and brand voice",
      "Lead qualification logic to prioritize high-value opportunities",
      "Optional booking workflows and escalation rules for live follow-up",
    ],
    problemsSolved: [
      "Missed calls that turn into lost revenue",
      "Inconsistent call handling across staff and shifts",
      "Slow response times when prospects are ready to book",
      "Manual call triage that drains team capacity",
    ],
    process: [
      "Discovery call to map scripts, FAQs, and qualification criteria",
      "Conversation flow design and response guardrails",
      "Booking/escalation workflow setup and testing",
      "Go-live monitoring, tuning, and monthly performance review",
    ],
    primaryKeyword: "ai receptionist for local businesses",
    pricing: aiReceptionistPricing,
  },
];

export const serviceMap = new Map(services.map((service) => [service.slug, service]));
