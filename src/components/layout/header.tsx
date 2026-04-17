import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BrandLogoLink } from "@/components/layout/brand-logo";
import { MobileNav } from "@/components/layout/mobile-nav";

export const headerNavItems = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-xl">
      <div className="container flex h-[4.5rem] items-center justify-between gap-3 py-3">
        <BrandLogoLink variant="header" className="min-w-0 sm:mr-2" />

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {headerNavItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-300 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <MobileNav items={headerNavItems} />
          <Button href="/contact" className="inline-flex px-3 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm" eventLabel="header_primary_cta">
            <span className="hidden sm:inline">Get More Leads</span>
            <span className="sm:hidden">Leads</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
