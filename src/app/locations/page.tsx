import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { JsonLd } from "@/components/seo/json-ld";
import { cities } from "@/lib/data/cities";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Locations",
  description: "City-specific landing pages for local SEO targeting.",
  path: "/locations",
  keywords: ["local seo city pages", "service area pages", "locations marketing"],
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
        <div className="grid gap-4 md:grid-cols-3">
          {cities.map((city) => (
            <Card key={city.slug}>
              <h2 className="text-lg font-semibold text-white">
                {city.name}, {city.state}
              </h2>
              <p className="mt-2 text-sm text-slate-300">{city.intro}</p>
              <Link href={`/locations/${city.slug}`} className="mt-4 inline-block text-sm font-semibold text-cyan-300 hover:text-cyan-200">
                View city page
              </Link>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
