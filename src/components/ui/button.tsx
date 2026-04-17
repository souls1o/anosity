"use client";

import Link from "next/link";
import { trackCtaClick } from "@/lib/tracking";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  eventLabel?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  eventLabel,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold tracking-wide";

  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-slate-950 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:-translate-y-0.5 hover:shadow-[0_0_38px_rgba(34,211,238,0.45)]"
      : "glass text-slate-100 hover:-translate-y-0.5";

  return (
    <Link
      href={href}
      className={`${base} ${styles} ${className}`}
      onClick={() => trackCtaClick(eventLabel ?? `cta_${href}`)}
    >
      {children}
    </Link>
  );
}
