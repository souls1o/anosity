import Image from "next/image";
import type { PortfolioProject } from "@/lib/data/types";

const previewGradients = [
  "from-violet-950/90 via-slate-900/80 to-cyan-950/70",
  "from-fuchsia-950/85 via-slate-900/75 to-indigo-950/70",
  "from-cyan-950/85 via-slate-900/80 to-emerald-950/65",
  "from-rose-950/80 via-slate-900/85 to-violet-950/70",
  "from-amber-950/50 via-slate-900/80 to-fuchsia-950/75",
  "from-sky-950/80 via-slate-900/75 to-violet-950/70",
];

function formatUrlForPill(raw: string): string {
  try {
    const u = new URL(raw.startsWith("http") ? raw : `https://${raw}`);
    const host = u.hostname.replace(/^www\./, "");
    const path = u.pathname === "/" ? "" : u.pathname;
    return `${host}${path}`;
  } catch {
    return raw.replace(/^https?:\/\//, "");
  }
}

function embedUrl(raw: string): string {
  try {
    return new URL(raw.startsWith("http") ? raw : `https://${raw}`).href;
  } catch {
    return raw.startsWith("http") ? raw : `https://${raw}`;
  }
}

type PortfolioCardProps = {
  project: PortfolioProject;
  index: number;
};

export function PortfolioCard({ project, index }: PortfolioCardProps) {
  const pillLabel = formatUrlForPill(project.url);
  const gradient = previewGradients[index % previewGradients.length];
  const href = embedUrl(project.url);
  const showLive = project.livePreview !== false;

  return (
    <article className="glass glow group flex flex-col overflow-hidden rounded-2xl border border-slate-700/50 shadow-[0_8px_40px_rgba(2,6,23,0.35)] transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-900">
        {/* Browser chrome */}
        <div className="absolute inset-x-0 top-0 z-20 flex h-9 items-center gap-1.5 border-b border-white/5 bg-slate-950/90 px-3 backdrop-blur-sm">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" aria-hidden />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" aria-hidden />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" aria-hidden />
        </div>

        <div className="absolute inset-0 top-9 z-10">
          {showLive ? (
            <>
              {/* Scaled iframe mimics a “desktop site in a thumbnail” without loading full viewport width */}
              <iframe
                src={href}
                title={`${project.title} live website preview`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="pointer-events-none absolute left-0 top-0 h-[400%] w-[400%] origin-top-left scale-[0.25] border-0 bg-slate-950"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-slate-950/50"
                aria-hidden
              />
            </>
          ) : project.previewImage ? (
            <>
              <Image
                src={project.previewImage}
                alt={`${project.title} website preview`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"
                aria-hidden
              />
            </>
          ) : (
            <div
              className={`absolute inset-0 bg-gradient-to-br ${gradient}`}
              aria-hidden
            >
              <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" aria-hidden />
            </div>
          )}
        </div>

        {/* Centered URL pill */}
        <div className="pointer-events-none absolute inset-0 top-9 z-30 flex items-center justify-center p-4">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto inline-flex max-w-[min(100%,22rem)] items-center justify-center rounded-full border border-white/15 bg-slate-950/80 px-5 py-2.5 text-center text-sm font-medium text-white shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-md transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-cyan-400/35 hover:shadow-[0_12px_40px_rgba(34,211,238,0.15)]"
          >
            <span className="truncate">{pillLabel}</span>
          </a>
        </div>
      </div>

      <div className="border-t border-white/5 px-4 py-3">
        <h2 className="font-display text-sm font-semibold tracking-tight text-white">{project.title}</h2>
      </div>
    </article>
  );
}
