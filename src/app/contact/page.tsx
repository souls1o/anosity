import { LeadForm } from "@/components/forms/lead-form";
import { JsonLd } from "@/components/seo/json-ld";
import { Section } from "@/components/ui/section";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Book a strategy call with Anosity Digital Marketing.",
  path: "/contact",
  keywords: ["contact digital marketing agency", "book seo consultation", "web design quote"],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <Section
        eyebrow="Contact"
        title="Book your growth strategy call"
        subtitle="Tell us about your market and goals. We will map out website and local SEO opportunities."
      >
        <div className="grid gap-6 md:grid-cols-[1fr_1.2fr] md:items-start">
          <aside className="glass w-full shrink-0 rounded-2xl px-5 py-5 md:max-w-sm md:py-4">
            <p className="text-sm text-slate-300">Call us</p>
            <p className="mt-1 text-lg font-semibold text-white">{siteConfig.phone}</p>
            <p className="mt-4 text-sm text-slate-300">Email</p>
            <p className="mt-1 text-lg font-semibold text-white">{siteConfig.email}</p>
          </aside>
          <LeadForm />
        </div>
      </Section>
    </>
  );
}
