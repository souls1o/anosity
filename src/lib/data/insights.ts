export type InsightPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  heroImage: string;
  imageAlt: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  keywords: string[];
  intro: string[];
  takeaways: string[];
  sections: {
    icon: "spark" | "map" | "growth";
    heading: string;
    paragraphs: string[];
    cardTitle: string;
    cardBody: string;
  }[];
};

export const insightPosts: InsightPost[] = [
  {
    slug: "local-seo-checklist-service-businesses",
    title: "Local SEO Checklist for Service Businesses",
    description:
      "A practical checklist to improve map visibility, local rankings, and lead quality for service-area businesses.",
    category: "Local SEO",
    heroImage: "/insights/local-seo-checklist.svg",
    imageAlt: "Checklist board for local SEO priorities",
    publishedAt: "2026-04-30",
    updatedAt: "2026-04-30",
    readTime: "6 min read",
    keywords: [
      "local seo checklist for service businesses",
      "google business profile optimization checklist",
      "local seo for contractors",
    ],
    intro: [
      "Local SEO works best when the fundamentals are executed consistently. For most service businesses, that means aligning your location coverage, service relevance, and trust signals so both search engines and buyers can validate your authority quickly.",
      "This checklist focuses on practical updates that improve qualified lead flow. Each step below is designed to support rankings and conversion quality at the same time.",
    ],
    takeaways: [
      "Align one core service intent per page.",
      "Keep Google Business Profile signals active and consistent.",
      "Use proof assets to strengthen local trust and conversion rates.",
    ],
    sections: [
      {
        icon: "map",
        heading: "Start with service + city relevance",
        paragraphs: [
          "Build clear pages around your highest-value services and primary service areas. Keep each page focused on one main intent so search engines and buyers can quickly understand what you offer and where.",
          "When pages mix too many intents, rankings often stall because relevance becomes diluted. A cleaner structure helps your city and service terms support each other across the site.",
        ],
        cardTitle: "Quick win",
        cardBody: "Audit your top 5 service pages and make sure each one clearly names the primary service and market within the first screen.",
      },
      {
        icon: "spark",
        heading: "Tighten Google Business Profile signals",
        paragraphs: [
          "Use accurate categories, consistent business information, and detailed service descriptions. Publish real photos and keep updates active to reinforce trust and engagement.",
          "Google Business Profile is often the first touchpoint for local-intent searches. If your listing is stale or inconsistent, map visibility and click-through rates usually suffer.",
        ],
        cardTitle: "Operational reminder",
        cardBody: "Set a recurring monthly workflow for posts, photos, and review responses so your profile stays active without last-minute scrambling.",
      },
      {
        icon: "growth",
        heading: "Strengthen authority with proof",
        paragraphs: [
          "Collect high-quality reviews, showcase outcomes, and maintain citation consistency across trusted directories. Local SEO wins are easier when trust signals match your on-site positioning.",
          "Authority is not one metric. It is the combined effect of review quality, citation consistency, and on-site proof that validates your promises.",
        ],
        cardTitle: "Authority lever",
        cardBody: "Add one outcome-focused testimonial to each service page and link it to a relevant city page where possible.",
      },
    ],
  },
  {
    slug: "website-conversion-fixes-for-local-businesses",
    title: "Website Conversion Fixes for Local Businesses",
    description:
      "Conversion upgrades that help local service websites turn more traffic into qualified calls and quote requests.",
    category: "Web Design",
    heroImage: "/insights/website-conversion-fixes.svg",
    imageAlt: "Website wireframe with conversion elements highlighted",
    publishedAt: "2026-04-30",
    updatedAt: "2026-04-30",
    readTime: "5 min read",
    keywords: [
      "website conversion tips for local businesses",
      "service business website optimization",
      "increase quote requests from website",
    ],
    intro: [
      "Most local business websites do not lose because of design polish alone. They lose because visitors cannot quickly answer key trust questions or find a frictionless contact path.",
      "These conversion fixes are built for high-intent traffic where buyers are actively comparing options and ready to take action.",
    ],
    takeaways: [
      "Clarify offer, market, and trust signal above the fold.",
      "Reduce friction in all call and quote paths.",
      "Place proof near decision points, not in isolated sections.",
    ],
    sections: [
      {
        icon: "spark",
        heading: "Clarify the offer above the fold",
        paragraphs: [
          "State your core service, primary market, and why clients should choose you in the first screen. The faster buyers understand fit, the faster they move toward contact.",
          "Your headline and supporting sentence should eliminate ambiguity. If a visitor has to scroll to understand what you do, conversion performance usually drops.",
        ],
        cardTitle: "Messaging check",
        cardBody: "Test your hero copy by asking: would a first-time visitor know your core service and location in under 5 seconds?",
      },
      {
        icon: "map",
        heading: "Reduce friction in contact paths",
        paragraphs: [
          "Place visible call and quote actions on every key page. Keep forms short, mobile-friendly, and focused on the minimum details needed for fast follow-up.",
          "Every extra field creates decision drag. Minimize required inputs and emphasize response speed to increase completion rates from mobile users.",
        ],
        cardTitle: "Conversion check",
        cardBody: "On mobile, ensure your primary call-to-action is reachable without excessive scrolling on service and city pages.",
      },
      {
        icon: "growth",
        heading: "Support decisions with trust assets",
        paragraphs: [
          "Use testimonials, project examples, and service guarantees near calls to action. Proof near action points improves confidence when buyers compare multiple providers.",
          "Trust assets have more impact when contextual. Pair them with the exact service and location intent the visitor is evaluating.",
        ],
        cardTitle: "Trust placement tip",
        cardBody: "Place one testimonial and one project proof element directly above the main CTA on each service page.",
      },
    ],
  },
  {
    slug: "ai-receptionist-playbook-for-missed-calls",
    title: "AI Receptionist Playbook for Missed Calls",
    description:
      "How to use AI receptionist workflows to capture after-hours demand and turn missed calls into booked opportunities.",
    category: "AI Receptionist",
    heroImage: "/insights/ai-receptionist-playbook.svg",
    imageAlt: "Phone support workflow diagram for AI receptionist",
    publishedAt: "2026-04-30",
    updatedAt: "2026-04-30",
    readTime: "5 min read",
    keywords: [
      "ai receptionist for missed calls",
      "call handling automation for service businesses",
      "after hours call answering system",
    ],
    intro: [
      "Missed calls are often the highest-cost leak in service business lead generation. An AI receptionist can reduce that leakage, but only when call flows are mapped to real business outcomes.",
      "This playbook focuses on implementation choices that protect lead quality while improving response speed.",
    ],
    takeaways: [
      "Define call outcomes before writing scripts.",
      "Build qualification logic around real service scenarios.",
      "Review performance monthly and refine based on outcomes.",
    ],
    sections: [
      {
        icon: "map",
        heading: "Map your call outcomes first",
        paragraphs: [
          "Define what should happen for new leads, existing customers, emergencies, and spam. Clear routing logic prevents AI call handling from becoming generic or inconsistent.",
          "Outcome mapping creates operational guardrails so your team and automation align on what good handling looks like for each scenario.",
        ],
        cardTitle: "Routing baseline",
        cardBody: "Document your top 6 call intents and the required next step for each before launch.",
      },
      {
        icon: "spark",
        heading: "Script for qualification and next steps",
        paragraphs: [
          "Build conversational scripts around services, locations, and booking readiness. The best workflows balance speed, accuracy, and clear escalation rules.",
          "The goal is not to maximize script length. It is to gather enough context to move qualified callers toward booking or the right handoff quickly.",
        ],
        cardTitle: "Script design tip",
        cardBody: "Keep opening prompts concise and focus qualification questions on service type, urgency, and location.",
      },
      {
        icon: "growth",
        heading: "Track performance monthly",
        paragraphs: [
          "Review call volume, qualification rates, and booking outcomes to improve scripts over time. AI receptionist systems perform best when tuned against real call data.",
          "Monthly reviews reveal where workflows over-qualify, under-qualify, or route too slowly, giving you clear tuning opportunities.",
        ],
        cardTitle: "Metrics to monitor",
        cardBody: "Track qualified call rate, booked-call rate, and average handoff time to spot script and routing bottlenecks.",
      },
    ],
  },
];

export const insightPostMap = new Map(insightPosts.map((post) => [post.slug, post]));

export function getInsightSitemapEntries(baseUrl: string) {
  return insightPosts.map((post) => ({
    url: `${baseUrl}/insights/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));
}
