import type { City } from "./types";

export const cities: City[] = [
  {
    slug: "tulare-ca",
    name: "Tulare",
    state: "CA",
    intro:
      "Tulare service businesses compete hard for attention. We help you stand out with conversion-focused websites and local SEO campaigns built for local search behavior.",
  },
  {
    slug: "visalia-ca",
    name: "Visalia",
    state: "CA",
    intro:
      "Visalia homeowners compare providers fast. Your digital presence should earn trust quickly and make contacting you effortless.",
  },
  {
    slug: "porterville-ca",
    name: "Porterville",
    state: "CA",
    intro:
      "In Porterville, visibility and credibility decide who gets the call. We combine premium design and local SEO to keep your schedule full.",
  },
];

export const cityMap = new Map(cities.map((city) => [city.slug, city]));
