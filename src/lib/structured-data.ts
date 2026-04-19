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
    areaServed: siteConfig.areaServed,
    serviceType: ["Digital Marketing", "Web Design", "Local SEO"],
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
  const description = `${city.intro} Digital marketing for businesses in ${placeName}, delivered through web design and local SEO.`;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: `Digital marketing in ${placeName} — web design & local SEO`,
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
