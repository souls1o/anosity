import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { JsonLd } from "@/components/seo/json-ld";
import { PricingTransitionCta } from "@/components/services/pricing-transition-cta";
import { ServiceOutcomePricingSection } from "@/components/services/service-outcome-pricing-section";
import { serviceMap, services } from "@/lib/data/services";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";

type Props = { params: Promise<{ service: string }> };

export async function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params;
  const item = serviceMap.get(service);
  if (!item) {
    return buildMetadata({
      title: "Service Not Found",
      description: "The requested service page was not found.",
      path: "/services",
    });
  }

  return buildMetadata({
    title: item.title,
    description: `${item.shortDescription} Target keyword: ${item.primaryKeyword}.`,
    path: `/services/${item.slug}`,
    keywords: [
      item.primaryKeyword,
      `${item.title} pricing`,
      `${item.title} agency`,
      `${item.title} for local businesses`,
    ],
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { service } = await params;
  const item = serviceMap.get(service);

  if (!item) notFound();

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: item.title,
            description: item.shortDescription,
            path: `/services/${item.slug}`,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: item.title, path: `/services/${item.slug}` },
          ]),
        ]}
      />
      <Section eyebrow="Service" title={item.heroTitle} subtitle={item.heroSubtitle}>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold text-white">Benefits</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {item.benefits.map((benefit) => (
                <li key={benefit}>- {benefit}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-white">Problems we solve</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {item.problemsSolved.map((problem) => (
                <li key={problem}>- {problem}</li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {item.pricing ? (
        <>
          <ServiceOutcomePricingSection serviceTitle={item.title} pricing={item.pricing} />
          <PricingTransitionCta serviceSlug={item.slug} />
        </>
      ) : null}
    </>
  );
}
