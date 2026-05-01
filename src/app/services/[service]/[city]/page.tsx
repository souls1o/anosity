import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { cityMap, cities } from "@/lib/data/cities";
import { serviceMap, services } from "@/lib/data/services";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/structured-data";

type Props = { params: Promise<{ city: string; service: string }> };

export async function generateStaticParams() {
  return services.flatMap((service) =>
    cities.map((city) => ({
      service: service.slug,
      city: city.slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city, service } = await params;
  const cityItem = cityMap.get(city);
  const serviceItem = serviceMap.get(service);

  if (!cityItem || !serviceItem) {
    return buildMetadata({
      title: "Page Not Found",
      description: "The requested service area page was not found.",
      path: "/services",
      noIndex: true,
    });
  }

  const place = `${cityItem.name}, ${cityItem.state}`;
  const serviceTitle = serviceItem.title.toLowerCase();

  return buildMetadata({
    title: `${serviceItem.title} in ${place}`,
    description: `${serviceItem.title} for service businesses in ${place}. Conversion-focused delivery, local strategy, and implementation support designed to generate more qualified calls and booked jobs.`,
    path: `/services/${serviceItem.slug}/${cityItem.slug}`,
    keywords: [
      `${serviceTitle} in ${cityItem.name.toLowerCase()}`,
      `${serviceTitle} ${cityItem.name.toLowerCase()} ca`,
      `${serviceTitle} agency ${cityItem.name.toLowerCase()}`,
      `${serviceTitle} company ${cityItem.name.toLowerCase()}`,
      `${serviceTitle} pricing ${cityItem.name.toLowerCase()}`,
      `${serviceTitle} near me ${cityItem.name.toLowerCase()}`,
    ],
  });
}

export default async function ServiceCityPage({ params }: Props) {
  const { city, service } = await params;
  const cityItem = cityMap.get(city);
  const serviceItem = serviceMap.get(service);
  if (!cityItem || !serviceItem) notFound();

  const place = `${cityItem.name}, ${cityItem.state}`;
  const pagePath = `/services/${serviceItem.slug}/${cityItem.slug}`;
  const faqs = [
    {
      question: `Do you offer ${serviceItem.title.toLowerCase()} in ${cityItem.name}?`,
      answer: `Yes. We provide ${serviceItem.title.toLowerCase()} implementation tailored to ${cityItem.name} service businesses with local demand, conversion, and lead-quality priorities in mind.`,
    },
    {
      question: `How is this ${serviceItem.title.toLowerCase()} page different from your main service page?`,
      answer: `This page focuses on ${cityItem.name}-specific market intent, messaging, and buying behavior while still connecting to the core ${serviceItem.title.toLowerCase()} process.`,
    },
    {
      question: `Can we combine ${serviceItem.title.toLowerCase()} with your other services in ${cityItem.name}?`,
      answer: `Yes. Most clients in ${cityItem.name} combine web, SEO, and call-conversion support to create a stronger full-funnel growth system.`,
    },
  ];

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: serviceItem.title, href: `/services/${serviceItem.slug}` },
          { label: place, href: pagePath },
        ]}
      />
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: serviceItem.title, path: `/services/${serviceItem.slug}` },
            { name: place, path: pagePath },
          ]),
          serviceSchema({
            name: `${serviceItem.title} in ${place}`,
            description: `${serviceItem.shortDescription} Market: ${place}.`,
            path: pagePath,
          }),
          faqPageSchema(faqs),
        ]}
      />

      <Section
        eyebrow={`${serviceItem.title} in ${place}`}
        title={`${serviceItem.title} services for ${cityItem.name} businesses`}
        subtitle="High-intent local strategy and execution designed to turn searches into booked work."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <h2 className="text-lg font-semibold text-white">Why this works in {cityItem.name}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Buyers in {cityItem.name} compare providers quickly, so your {serviceItem.title.toLowerCase()} strategy needs to communicate trust, relevance, and next steps fast.
            </p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-white">Built for commercial local intent</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              This page targets high-intent searches around {serviceItem.title.toLowerCase()} in {cityItem.name}, with clear offer positioning and conversion-focused pathways.
            </p>
          </Card>
        </div>
      </Section>

      <Section title={`What you get with ${serviceItem.title} in ${cityItem.name}`}>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold text-white">Benefits</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {serviceItem.benefits.map((benefit) => (
                <li key={benefit}>- {benefit}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-white">Problems solved</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {serviceItem.problemsSolved.map((problem) => (
                <li key={problem}>- {problem}</li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section title="Explore nearby and related pages">
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <h3 className="text-base font-semibold text-white">City hub</h3>
            <p className="mt-2 text-sm text-slate-300">See broader digital marketing strategy for {place}.</p>
            <Link href={`/locations/${cityItem.slug}`} className="mt-4 inline-block text-sm font-semibold text-cyan-300 hover:text-cyan-200">
              View {cityItem.name} location page
            </Link>
          </Card>
          <Card>
            <h3 className="text-base font-semibold text-white">Service hub</h3>
            <p className="mt-2 text-sm text-slate-300">Review full delivery scope and pricing context for {serviceItem.title}.</p>
            <Link href={`/services/${serviceItem.slug}`} className="mt-4 inline-block text-sm font-semibold text-cyan-300 hover:text-cyan-200">
              View {serviceItem.title} service page
            </Link>
          </Card>
          <Card>
            <h3 className="text-base font-semibold text-white">Plan your next step</h3>
            <p className="mt-2 text-sm text-slate-300">Get a market-specific growth plan aligned to your service mix and goals.</p>
            <Link href="/contact" className="mt-4 inline-block text-sm font-semibold text-cyan-300 hover:text-cyan-200">
              Request a strategy plan
            </Link>
          </Card>
        </div>
      </Section>

      <Section title={`${serviceItem.title} in ${cityItem.name} FAQs`} subtitle="Answers to common local intent and delivery questions.">
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
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
    </>
  );
}
