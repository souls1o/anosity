import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { PortfolioCard } from "@/components/portfolio/portfolio-card";
import { JsonLd } from "@/components/seo/json-ld";
import { portfolioProjects } from "@/lib/data/portfolio";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata = buildMetadata({
  title: "Portfolio",
  description:
    "Selected websites and digital experiences built for local service businesses by Anosity Digital Marketing.",
  path: "/portfolio",
  keywords: ["digital marketing portfolio", "local business website examples", "seo case portfolio"],
});

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
        ])}
      />
      <Section
        eyebrow="Past Work"
        title="Portfolio"
        subtitle="Recent launches and redesigns for service brands we partner with—each site built to earn trust and drive calls."
      >
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project, index) => (
            <li key={project.id}>
              <Reveal delay={index * 0.05}>
                <PortfolioCard project={project} index={index} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
