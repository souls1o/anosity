import type { City } from "@/lib/data/types";
import { siteConfig } from "./site";

type Crumb = {
  name: string;
  path: string;
};

function fullUrl(path: string) {
  return `${siteConfig.url}${path}`;
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logoPath}`,
    image: `${siteConfig.url}${siteConfig.ogImagePath}`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    sameAs: Object.values(siteConfig.social),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    inLanguage: siteConfig.locale,
    publisher: {
      "@id": `${siteConfig.url}#organization`,
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}#localbusiness`,
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    priceRange: siteConfig.priceRange,
    areaServed: siteConfig.areaServed,
    serviceType: ["Digital Marketing", "Web Design", "Local SEO", "AI Receptionist"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Marketing Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Design" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local SEO" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Receptionist" } },
      ],
    },
    knowsAbout: [
      "Local SEO",
      "Conversion-focused web design",
      "Lead generation for service businesses",
      "Call handling automation",
    ],
    sameAs: Object.values(siteConfig.social),
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: fullUrl(input.path),
    provider: {
      "@id": `${siteConfig.url}#organization`,
    },
    areaServed: siteConfig.areaServed,
  };
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: fullUrl(crumb.path),
    })),
  };
}

/**
 * City landing pages: page-level entity tied to a specific place.
 * Avoid repeating the global Organization/LocalBusiness block here (already in root layout).
 */
export function cityLocationWebPageSchema(city: City) {
  const path = `/locations/${city.slug}`;
  const pageUrl = fullUrl(path);
  const placeName = `${city.name}, ${city.state}`;
  const description = `${city.intro} Digital marketing for businesses in ${placeName}, delivered through web design, local SEO, and AI receptionist systems.`;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: `Digital marketing in ${placeName} — web design, local SEO & AI receptionist`,
    description,
    inLanguage: siteConfig.locale,
    isPartOf: {
      "@id": `${siteConfig.url}#website`,
    },
    publisher: {
      "@id": `${siteConfig.url}#organization`,
    },
    about: {
      "@type": "Place",
      name: placeName,
      address: {
        "@type": "PostalAddress",
        addressLocality: city.name,
        addressRegion: city.state,
        addressCountry: "US",
      },
    },
  };
}

export function faqPageSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  updatedAt?: string;
  imagePath?: string;
  keywords?: string[];
}) {
  const pageUrl = fullUrl(input.path);
  const image = `${siteConfig.url}${input.imagePath ?? siteConfig.ogImagePath}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.publishedAt,
    dateModified: input.updatedAt ?? input.publishedAt,
    keywords: input.keywords,
    author: {
      "@id": `${siteConfig.url}#organization`,
    },
    publisher: {
      "@id": `${siteConfig.url}#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
    },
    url: pageUrl,
    image: [image],
    inLanguage: siteConfig.locale,
  };
}

export function blogCollectionSchema(
  posts: { title: string; path: string; description: string; publishedAt: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${siteConfig.url}/insights#blog`,
    url: `${siteConfig.url}/insights`,
    name: "Anosity Insights",
    description: "Digital marketing insights for local service businesses.",
    publisher: {
      "@id": `${siteConfig.url}#organization`,
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      url: fullUrl(post.path),
      author: {
        "@id": `${siteConfig.url}#organization`,
      },
      publisher: {
        "@id": `${siteConfig.url}#organization`,
      },
      image: [`${siteConfig.url}${siteConfig.ogImagePath}`],
    })),
  };
}
