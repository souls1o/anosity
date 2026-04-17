import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { cities, cityMap } from "@/lib/data/cities";
import { formatIndustriesList, industriesWeServe } from "@/lib/data/industries";
import { services } from "@/lib/data/services";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, cityLocationWebPageSchema } from "@/lib/structured-data";

type Props = { params: Promise<{ city: string }> };

export async function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const item = cityMap.get(city);
  if (!item) {
    return buildMetadata({
      title: "Location Not Found",
      description: "The requested location was not found.",
      path: "/locations",
    });
  }

  return buildMetadata({
    title: `Web Design & Local SEO in ${item.name}, ${item.state}`,
    description: `${item.intro} Learn how Anosity helps ${item.name} service businesses earn more visibility and booked calls.`,
    path: `/locations/${item.slug}`,
    keywords: [
      `digital marketing ${item.name.toLowerCase()}`,
      `web design ${item.name.toLowerCase()}`,
      `local seo ${item.name.toLowerCase()}`,
      `${item.name.toLowerCase()} service business marketing`,
    ],
  });
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const item = cityMap.get(city);
  if (!item) notFound();

  return (
    <>
      <JsonLd
        data={[
          cityLocationWebPageSchema(item),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Locations", path: "/locations" },
            { name: `${item.name}, ${item.state}`, path: `/locations/${item.slug}` },
          ]),
        ]}
      />
      <Section
        eyebrow={`Serving ${item.name}, ${item.state}`}
        title={`Web Design + Local SEO in ${item.name}`}
        subtitle={item.intro}
      >
        <Card>
          <p className="text-sm text-slate-200">
            We support {formatIndustriesList(industriesWeServe)} companies in {item.name} with conversion-focused websites and local SEO built around high-intent local search terms.
          </p>
        </Card>
      </Section>

      <Section
        title={`Services in ${item.name}`}
        subtitle="Target city + service keyword combinations without bloated, duplicate templates."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.slug}>
              <h3 className="text-lg font-semibold text-white">
                {service.title} in {item.name}
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                We align {service.primaryKeyword} with &quot;{service.slug.replace("-", " ")} {item.name.toLowerCase()}&quot; search demand using localized messaging and conversion-focused UX.
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title={`Need more leads in ${item.name}?`}>
        <div className="glass rounded-2xl p-8 text-center">
          <Button href="/contact" eventLabel={`city_cta_${item.slug}`}>
            Request a Plan
          </Button>
        </div>
      </Section>
    </>
  );
}
