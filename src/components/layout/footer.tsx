import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { BrandLogoLink } from "@/components/layout/brand-logo";
import { SocialLinks } from "@/components/layout/social-links";

const footerNav = {
  services: [
    { href: "/services/web-design", label: "Web design" },
    { href: "/services/local-seo", label: "Local SEO" },
  ],
  company: [
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950">
      <div className="container py-14">
        <div className="grid gap-12 border-b border-slate-800/60 pb-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <BrandLogoLink variant="footer" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              {siteConfig.description}
            </p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-500">Follow</p>
            <SocialLinks className="mt-3" />
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7 lg:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Services</p>
              <ul className="mt-4 space-y-2.5">
                {footerNav.services.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-slate-300 hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Company</p>
              <ul className="mt-4 space-y-2.5">
                {footerNav.company.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-slate-300 hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Contact</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>
                  <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="hover:text-white">
                    {siteConfig.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="font-medium text-cyan-300 hover:text-cyan-200">
                    Book a strategy call
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
