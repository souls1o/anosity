import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { JsonLd } from "@/components/seo/json-ld";
import { cities } from "@/lib/data/cities";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Locations",
  description:
    "Digital marketing by city—localized pages for web design and local SEO for Central Valley service businesses.",
  path: "/locations",
  keywords: [
    "web design locations",
    "digital marketing locations",
    "local seo agency locations",
    "local seo city pages",
    "service area pages",
  ],
});

export default function LocationsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
        ])}
      />
      <Section
        eyebrow="Locations"
        title="City landing pages built for local intent"
        subtitle="Each location page is generated from structured data and can scale as you add new markets."
      >
        <p className="mb-8 max-w-3xl text-slate-300">
          Explore dedicated pages for{" "}
          {cities.map((city, index) => (
            <span key={city.slug}>
              {index > 0 ? (index === cities.length - 1 ? ", and " : ", ") : null}
              <Link href={`/locations/${city.slug}`} className="font-semibold text-cyan-300 hover:text-cyan-200">
                digital marketing in {city.name} (web design & local SEO)
              </Link>
            </span>
          ))}
          .
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {cities.map((city) => (
            <Card key={city.slug}>
              <h3 className="text-lg font-semibold text-white">
                {city.name}, {city.state}
              </h3>
              <p className="mt-2 text-sm text-slate-300">{city.intro}</p>
              <Link href={`/locations/${city.slug}`} className="mt-4 inline-block text-sm font-semibold text-cyan-300 hover:text-cyan-200">
                {city.name}: digital marketing details
              </Link>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
