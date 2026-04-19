import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { GrowthIcon, MapPinPulseIcon, SparkIcon } from "@/components/icons";
import { JsonLd } from "@/components/seo/json-ld";
import { cities } from "@/lib/data/cities";
import { services } from "@/lib/data/services";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Web Design + Local SEO for Service Businesses",
  description:
    "Anosity Digital Marketing helps local service businesses get more calls and booked jobs with conversion-focused websites and local SEO.",
  path: "/",
  keywords: [
    "web design for service businesses",
    "local seo agency",
    "digital marketing for local businesses",
  ],
});

export default function Home() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }])} />
      <section className="hero-bg section-padding border-b border-slate-800/70">
        <div className="container grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
              Local Growth Engine
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              We Help Local Service Businesses <span className="text-gradient">Get More Customers</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Anosity builds high-converting websites and local SEO campaigns for roofing, plumbing, cleaning, HVAC, landscaping, and other service businesses ready to scale.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" eventLabel="hero_cta_primary">
                Get a Quote
              </Button>
              <Button href="/services" variant="ghost" eventLabel="hero_cta_secondary">
                Explore Services
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Section
        eyebrow="Trusted By Service Brands"
        title="Built for businesses where every phone call counts"
        subtitle="Our conversion strategy is purpose-built for local intent and decision speed."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <SparkIcon className="mb-4 h-7 w-7 text-fuchsia-300" />
            <h3 className="text-lg font-semibold text-white">Conversion-first design</h3>
            <p className="mt-2 text-sm text-slate-300">Every section is designed to reduce friction and increase qualified calls.</p>
          </Card>
          <Card>
            <MapPinPulseIcon className="mb-4 h-7 w-7 text-cyan-300" />
            <h3 className="text-lg font-semibold text-white">Local SEO precision</h3>
            <p className="mt-2 text-sm text-slate-300">Map pack + city-service targeting built into your site architecture from day one.</p>
          </Card>
          <Card>
            <GrowthIcon className="mb-4 h-7 w-7 text-violet-300" />
            <h3 className="text-lg font-semibold text-white">Measured growth</h3>
            <p className="mt-2 text-sm text-slate-300">Analytics and conversion tracking ensure every improvement is tied to business results.</p>
          </Card>
        </div>
      </Section>

      <Section eyebrow="Services" title="Core growth services">
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.06}>
              <Card>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-slate-300">{service.shortDescription}</p>
                <Link href={`/services/${service.slug}`} className="mt-5 inline-block text-sm font-semibold text-cyan-300 hover:text-cyan-200">
                  View service page
                </Link>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Markets"
        title="Markets we serve"
        subtitle="Localized digital marketing pages—web design and local SEO for service businesses in each area."
      >
        <div className="flex flex-wrap gap-3">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/locations/${city.slug}`}
              className="glass rounded-full px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-slate-700/80 transition hover:bg-slate-800/60 hover:text-white"
            >
              {city.name}, {city.state}
            </Link>
          ))}
          <Link href="/locations" className="rounded-full px-4 py-2 text-sm font-semibold text-slate-400 underline-offset-4 hover:text-cyan-200 hover:underline">
            All locations
          </Link>
        </div>
      </Section>
    </>
  );
}
