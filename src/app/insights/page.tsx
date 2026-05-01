import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { insightPosts } from "@/lib/data/insights";
import { buildMetadata } from "@/lib/seo";
import { blogCollectionSchema, breadcrumbSchema } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Insights",
  description:
    "Actionable digital marketing insights for local service businesses covering web design, local SEO, and call-conversion systems.",
  path: "/insights",
  openGraphType: "article",
  keywords: [
    "local seo tips for service businesses",
    "website conversion advice",
    "digital marketing insights",
  ],
});

export default function InsightsPage() {
  const [featured, ...remainingPosts] = insightPosts;

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/insights" },
        ]}
      />
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/insights" },
          ]),
          blogCollectionSchema(
            insightPosts.map((post) => ({
              title: post.title,
              description: post.description,
              publishedAt: post.publishedAt,
              path: `/insights/${post.slug}`,
            }))
          ),
        ]}
      />
      <Section
        eyebrow="Insights"
        title="Digital marketing insights for local service businesses"
        subtitle="Blog-style playbooks designed to rank for high-intent topics and guide readers into your service pages."
      >
        <div className="grid gap-8 lg:grid-cols-[1.5fr_0.9fr]">
          <article className="overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/40">
            <Image src={featured.heroImage} alt={featured.imageAlt} width={1600} height={900} className="h-auto w-full" priority />
            <div className="p-6 md:p-8">
              <p className="text-xs uppercase tracking-wider text-cyan-300">{featured.category}</p>
              <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">{featured.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-slate-300">{featured.description}</p>
              <p className="mt-4 text-sm text-slate-400">{featured.readTime}</p>
              <Link href={`/insights/${featured.slug}`} className="mt-6 inline-block text-sm font-semibold text-cyan-300 hover:text-cyan-200">
                Read featured guide
              </Link>
            </div>
          </article>

          <Card className="h-fit">
            <h3 className="text-lg font-semibold text-white">Why this blog exists</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Each article targets high-intent search topics and routes readers to relevant services, city pages, and conversion actions.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>- Local SEO implementation guides</li>
              <li>- Website conversion strategies</li>
              <li>- AI call-conversion workflows</li>
            </ul>
            <Link href="/contact" className="mt-5 inline-block text-sm font-semibold text-cyan-300 hover:text-cyan-200">
              Request a strategy plan
            </Link>
          </Card>
        </div>

        <div className="mt-10 space-y-5">
          {remainingPosts.map((post) => (
            <article key={post.slug} className="grid gap-5 rounded-2xl border border-slate-800/70 bg-slate-900/30 p-5 md:grid-cols-[0.38fr_1fr]">
              <div className="overflow-hidden rounded-xl border border-slate-800/80">
                <Image src={post.heroImage} alt={post.imageAlt} width={1200} height={675} className="h-full w-full object-cover" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-cyan-300">{post.category}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{post.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{post.description}</p>
                <p className="mt-3 text-xs text-slate-400">{post.readTime}</p>
                <Link href={`/insights/${post.slug}`} className="mt-4 inline-block text-sm font-semibold text-cyan-300 hover:text-cyan-200">
                  Read article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
