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
import { breadcrumbSchema, cityLocationWebPageSchema, faqPageSchema } from "@/lib/structured-data";

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

  const place = `${item.name}, ${item.state}`;
  return buildMetadata({
    title: `Digital Marketing in ${place} — Web & Local SEO`,
    description: `Digital marketing for service businesses in ${place}: web design and local SEO that turn local searches into booked calls. ${item.intro}`,
    path: `/locations/${item.slug}`,
    keywords: [
      `web design ${item.name.toLowerCase()}`,
      `digital marketing ${item.name.toLowerCase()}`,
      `seo agency ${item.name.toLowerCase()}`,
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
          faqPageSchema(item.faqs),
        ]}
      />
      <Section
        eyebrow={`Serving ${item.name}, ${item.state}`}
        titleAs="h1"
        title={`Digital marketing for ${item.name} service businesses`}
        subtitle={item.intro}
      >
        <Card className="space-y-4">
          <p className="text-sm text-slate-200">
            For us, digital marketing in {item.name} is not a grab bag of unrelated channels—it is the discipline of earning demand online. We deliver that through two coordinated pillars: conversion-focused web design and local SEO built for how your buyers actually search and choose a provider.
          </p>
          <p className="text-sm leading-relaxed text-slate-200">{item.digitalMarketingBody}</p>
          <p className="text-sm text-slate-200">
            We support {formatIndustriesList(industriesWeServe)} companies in {item.name} when they need a stronger site, clearer local visibility, or both working together—not competing priorities.
          </p>
        </Card>
      </Section>

      <Section title={`Web design in ${item.name}`} subtitle="Site speed, clarity, and conversion paths tuned for local buyers.">
        <Card>
          <p className="text-sm leading-relaxed text-slate-200">{item.webDesignBody}</p>
        </Card>
      </Section>

      <Section title={`Local SEO in ${item.name}`} subtitle="Technical structure, relevance, and authority aligned with services you actually sell.">
        <Card>
          <p className="text-sm leading-relaxed text-slate-200">{item.seoAgencyBody}</p>
        </Card>
      </Section>

      <Section
        title={`Services in ${item.name}`}
        subtitle="Each service page deepens topical relevance while keeping city copy unique and useful."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.slug}>
              <h3 className="text-lg font-semibold text-white">
                {service.title} in {item.name}
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                We align {service.primaryKeyword} with &quot;{service.slug.replaceAll("-", " ")} {item.name.toLowerCase()}&quot; search demand using localized messaging and conversion-focused UX.
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Frequently asked questions" subtitle="Straight answers about how we work with local service businesses.">
        <div className="space-y-3">
          {item.faqs.map((faq) => (
            <details
              key={faq.id}
              className="group glass rounded-2xl border border-slate-800/80 px-5 py-4 open:border-cyan-500/30"
            >
              <summary className="cursor-pointer list-none text-left font-semibold text-white [&::-webkit-details-marker]:hidden">
                <span className="inline-flex w-full items-center justify-between gap-3">
                  {faq.question}
                  <span className="shrink-0 text-cyan-300 transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{faq.answer}</p>
            </details>
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
