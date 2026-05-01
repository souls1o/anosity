import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { GrowthIcon, MapPinPulseIcon, SparkIcon } from "@/components/icons";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { cities } from "@/lib/data/cities";
import { insightPostMap, insightPosts } from "@/lib/data/insights";
import { services } from "@/lib/data/services";
import { buildMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema } from "@/lib/structured-data";

type Props = { params: Promise<{ slug: string }> };
type SectionIconKey = "spark" | "map" | "growth";

const sectionIcons: Record<SectionIconKey, ComponentType<{ className?: string }>> = {
  spark: SparkIcon,
  map: MapPinPulseIcon,
  growth: GrowthIcon,
};

export async function generateStaticParams() {
  return insightPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = insightPostMap.get(slug);

  if (!post) {
    return buildMetadata({
      title: "Insight Not Found",
      description: "The requested insight page was not found.",
      path: "/insights",
      noIndex: true,
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/insights/${post.slug}`,
    keywords: post.keywords,
    imagePath: post.heroImage,
    openGraphType: "article",
  });
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = insightPostMap.get(slug);
  if (!post) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/insights" },
          { label: post.title, href: `/insights/${post.slug}` },
        ]}
      />
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/insights" },
            { name: post.title, path: `/insights/${post.slug}` },
          ]),
          articleSchema({
            title: post.title,
            description: post.description,
            path: `/insights/${post.slug}`,
            publishedAt: post.publishedAt,
            updatedAt: post.updatedAt,
            imagePath: post.heroImage,
            keywords: post.keywords,
          }),
        ]}
      />
      <Section eyebrow={post.category} title={post.title} subtitle={post.description}>
        <article className="mx-auto max-w-4xl">
          <div className="mb-8 overflow-hidden rounded-2xl border border-slate-800/70">
            <Image src={post.heroImage} alt={post.imageAlt} width={1600} height={900} className="h-auto w-full" priority />
          </div>

          <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-400">
            <span>{post.readTime}</span>
            <span aria-hidden>•</span>
            <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
          </div>

          <div className="space-y-4 text-base leading-relaxed text-slate-200">
            {post.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 grid gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5 md:grid-cols-3">
            {post.takeaways.map((item) => (
              <p key={item} className="text-sm font-medium text-cyan-100">
                {item}
              </p>
            ))}
          </div>

          <div className="mt-10 space-y-10">
            {post.sections.map((section) => {
              const Icon = sectionIcons[section.icon as SectionIconKey];
              return (
                <section key={section.heading} className="space-y-4 border-b border-slate-800/80 pb-8 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-cyan-300" />
                    <h2 className="text-2xl font-semibold text-white">{section.heading}</h2>
                  </div>
                  <div className="space-y-4 text-base leading-relaxed text-slate-200">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <Card>
                    <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">{section.cardTitle}</p>
                    <p className="mt-2 text-sm text-slate-300">{section.cardBody}</p>
                  </Card>
                </section>
              );
            })}
          </div>
        </article>
      </Section>

      <Section title="Explore related services">
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.slug}>
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{service.shortDescription}</p>
              <Link href={`/services/${service.slug}`} className="mt-4 inline-block text-sm font-semibold text-cyan-300 hover:text-cyan-200">
                View service
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Browse market pages">
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
        </div>
      </Section>
    </>
  );
}
