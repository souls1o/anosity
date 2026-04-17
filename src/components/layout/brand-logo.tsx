import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

type BrandLogoLinkProps = {
  /** Header uses a compact mark; footer can be slightly larger */
  variant?: "header" | "footer";
  className?: string;
};

export function BrandLogoLink({ variant = "header", className = "" }: BrandLogoLinkProps) {
  const box =
    variant === "header"
      ? "h-8 w-[7.25rem] sm:h-9 sm:w-[8.25rem]"
      : "h-10 w-[9.5rem] sm:h-11 sm:w-[10.5rem]";

  return (
    <Link
      href="/"
      className={`relative block shrink-0 ${box} ${className}`}
      aria-label={`${siteConfig.name} — home`}
    >
      <Image
        src="/images/logo.png"
        alt=""
        fill
        className="object-contain object-left"
        sizes={variant === "header" ? "(max-width: 640px) 116px, 132px" : "(max-width: 640px) 152px, 168px"}
        priority={variant === "header"}
      />
    </Link>
  );
}
