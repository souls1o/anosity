import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { JsonLd } from "@/components/seo/json-ld";
import { ServicesHubPricing } from "@/components/services/services-hub-pricing";
import { services } from "@/lib/data/services";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Services",
  description: "Explore web design and local SEO services built for local service-based businesses.",
  path: "/services",
  keywords: [
    "web design services",
    "local seo services",
    "digital marketing services for local businesses",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <Section
        eyebrow="Services"
        title="Performance-focused marketing services"
        subtitle="Each service page is SEO-ready and conversion-focused for high-intent searches."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.slug}>
              <h2 className="text-xl font-semibold text-white">{service.title}</h2>
              <p className="mt-3 text-sm text-slate-300">{service.shortDescription}</p>
              <div className="mt-6 flex items-center justify-between gap-4">
                <Link href={`/services/${service.slug}`} className="text-sm font-semibold text-cyan-300 hover:text-cyan-200">
                  Learn more
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>
      
    </>
  );
}
