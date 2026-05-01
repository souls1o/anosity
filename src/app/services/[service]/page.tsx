import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { JsonLd } from "@/components/seo/json-ld";
import { PricingTransitionCta } from "@/components/services/pricing-transition-cta";
import { ServiceOutcomePricingSection } from "@/components/services/service-outcome-pricing-section";
import { cities } from "@/lib/data/cities";
import { serviceMap, services } from "@/lib/data/services";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/structured-data";

type Props = { params: Promise<{ service: string }> };

const aiReceptionistFaqs = [
  {
    question: "How does your AI receptionist handle missed calls?",
    answer:
      "We configure scripted call flows so missed, after-hours, and overflow calls still get immediate responses, qualification, and a clear next step like booking or escalation.",
  },
  {
    question: "Can the AI receptionist use our custom scripts and offers?",
    answer:
      "Yes. We tailor scripts, service responses, and call logic to your business so the conversation sounds aligned with your brand voice and service priorities.",
  },
  {
    question: "Do you support booking automation?",
    answer:
      "Yes. Depending on your setup, we can implement booking workflows and escalation logic so qualified callers are routed to the right place without manual bottlenecks.",
  },
];

const serviceFaqMap: Record<
  string,
  {
    question: string;
    answer: string;
  }[]
> = {
  "web-design": [
    {
      question: "How long does a web design project usually take?",
      answer:
        "Most projects take 4-8 weeks depending on page count, content readiness, and revision speed. We define timeline milestones before kickoff so launch expectations are clear.",
    },
    {
      question: "Do your websites include SEO-ready structure?",
      answer:
        "Yes. Every build includes clean architecture, core metadata, and conversion-focused page structure so your local SEO efforts compound instead of starting from scratch.",
    },
    {
      question: "Can you redesign our existing website without hurting rankings?",
      answer:
        "Yes. We map current URLs, preserve high-value content intent, and use a migration checklist to protect indexation and equity during relaunch.",
    },
  ],
  "local-seo": [
    {
      question: "How soon can local SEO show meaningful movement?",
      answer:
        "Some gains can appear in the first 30-90 days, but durable results usually build over several months as technical fixes, on-page relevance, and authority signals compound.",
    },
    {
      question: "Do you optimize Google Business Profile as part of local SEO?",
      answer:
        "Yes. GBP optimization and map pack relevance are core parts of our local SEO process for service businesses targeting nearby customers.",
    },
    {
      question: "Can local SEO help if we serve multiple nearby cities?",
      answer:
        "Yes. We structure service and location coverage to match your real market footprint while avoiding thin duplicate pages that weaken quality.",
    },
  ],
  "ai-receptionist": aiReceptionistFaqs,
};

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

  const isAiReceptionist = item.slug === "ai-receptionist";

  return buildMetadata({
    title: isAiReceptionist ? "AI Receptionist for Local Businesses" : item.title,
    description: isAiReceptionist
      ? "AI receptionist setup for local service businesses: custom scripts, lead qualification, and optional booking workflows that turn missed calls into booked jobs."
      : `${item.shortDescription} Target keyword: ${item.primaryKeyword}.`,
    path: `/services/${item.slug}`,
    keywords: [
      item.primaryKeyword,
      `${item.title} pricing`,
      `${item.title} agency`,
      `${item.title} for local businesses`,
      ...(isAiReceptionist
        ? [
            "missed call automation",
            "ai call answering for contractors",
            "after hours call answering",
          ]
        : []),
    ],
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { service } = await params;
  const item = serviceMap.get(service);

  if (!item) notFound();
  const isAiReceptionist = item.slug === "ai-receptionist";
  const serviceFaqs = serviceFaqMap[item.slug] ?? [];

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: item.title, href: `/services/${item.slug}` },
        ]}
      />
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
          faqPageSchema(serviceFaqs),
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

      {isAiReceptionist ? (
        <Section
          eyebrow="Use Cases"
          title="AI receptionist built for high-intent call flows"
          subtitle="The goal is simple: fewer missed opportunities and more qualified conversations."
        >
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <h3 className="text-lg font-semibold text-white">After-hours coverage</h3>
              <p className="mt-2 text-sm text-slate-300">
                Keep responding when your team is offline so ready-to-book callers do not move to the next company.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold text-white">Lead qualification</h3>
              <p className="mt-2 text-sm text-slate-300">
                Prioritize serious opportunities first with structured intake and routing logic matched to your services.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold text-white">Booking acceleration</h3>
              <p className="mt-2 text-sm text-slate-300">
                Add booking and escalation workflows so more calls reach a clear next step instead of stalling out.
              </p>
            </Card>
          </div>
        </Section>
      ) : null}

      <Section
        eyebrow="Service Areas"
        title={`Where we deliver ${item.title.toLowerCase()}`}
        subtitle="Choose your market page for local context and city-specific strategy."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {cities.map((city) => (
            <Card key={city.slug}>
              <h3 className="text-lg font-semibold text-white">
                <Link href={`/services/${item.slug}/${city.slug}`} className="hover:text-cyan-200">
                  {item.title} in {city.name}
                </Link>
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Explore digital marketing priorities, FAQs, and positioning for {city.name}, {city.state}.
              </p>
              <Link href={`/locations/${city.slug}`} className="mt-4 inline-block text-sm font-semibold text-cyan-300 hover:text-cyan-200">
                View {city.name} city page
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Related Services"
        title="Build a complete local growth system"
        subtitle="Most service businesses grow faster when web, SEO, and call conversion work together."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {services
            .filter((serviceItem) => serviceItem.slug !== item.slug)
            .map((serviceItem) => (
              <Card key={serviceItem.slug}>
                <h3 className="text-lg font-semibold text-white">{serviceItem.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{serviceItem.shortDescription}</p>
                <Link href={`/services/${serviceItem.slug}`} className="mt-4 inline-block text-sm font-semibold text-cyan-300 hover:text-cyan-200">
                  Explore {serviceItem.title}
                </Link>
              </Card>
            ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title={`${item.title} FAQs`} subtitle="Answers to common delivery and implementation questions.">
        <div className="space-y-3">
          {serviceFaqs.map((faq) => (
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
