import type { Metadata } from "next";
import { siteConfig } from "./site";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
  imagePath?: string;
  openGraphType?: "website" | "article";
};

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  noIndex = false,
  imagePath = siteConfig.ogImagePath,
  openGraphType = "website",
}: SeoInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  const absoluteImageUrl = `${siteConfig.url}${imagePath}`;
  return {
    title,
    description,
    keywords,
    category: "Digital Marketing",
    metadataBase: new URL(siteConfig.url),
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    alternates: { canonical: path },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url,
      type: openGraphType,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [
        {
          url: absoluteImageUrl,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteImageUrl],
    },
  };
}
