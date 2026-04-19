export type OutcomePricingTier = {
  id: string;
  label: string;
  headline: string;
  body: string;
  startingFrom: string;
};

export type ServicePricingBlock = {
  tiers: OutcomePricingTier[];
  disclaimer: string;
};

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  benefits: string[];
  problemsSolved: string[];
  process: string[];
  primaryKeyword: string;
  /** Outcome-based “starting from” tiers; omit for services without a pricing block yet */
  pricing?: ServicePricingBlock;
};

export type CityFaq = {
  id: string;
  question: string;
  answer: string;
};

export type City = {
  slug: string;
  name: string;
  state: string;
  intro: string;
  /** Unique copy for “web design [city]” style intent */
  webDesignBody: string;
  /** Holistic digital marketing narrative (web + local SEO); used in city hero, not as a separate “service silo” */
  digitalMarketingBody: string;
  /** Unique copy for “seo agency [city]” intent */
  seoAgencyBody: string;
  /** Visible FAQs + matching FAQPage JSON-LD */
  faqs: CityFaq[];
};

export type PortfolioProject = {
  id: string;
  title: string;
  url: string;
  /**
   * When true (default), the card embeds the site in a scaled iframe (“live” preview).
   * Many production sites send `X-Frame-Options` or CSP `frame-ancestors` that block embedding;
   * for those URLs set `livePreview: false` and use `previewImage` instead.
   */
  livePreview?: boolean;
  /**
   * Static screenshot in `public/` (e.g. `/portfolio/acme.png`).
   * Shown when `livePreview` is false. When `livePreview` is true, the iframe is used and this image is not displayed.
   */
  previewImage?: string;
};
