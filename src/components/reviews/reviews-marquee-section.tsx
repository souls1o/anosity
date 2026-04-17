import type { MarqueeReview, MarqueeReviewsResult } from "@/lib/reviews-types";

function googleMapsPlaceUrl(placeId: string) {
  return `https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${encodeURIComponent(placeId)}`;
}

function Stars({ rating }: { rating: number }) {
  const clamped = Math.min(5, Math.max(0, Math.round(rating)));
  return (
    <div className="flex gap-0.5" aria-label={`${clamped} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < clamped ? "text-amber-400" : "text-slate-600"} aria-hidden>
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({
  review,
  source,
}: {
  review: MarqueeReview;
  source: MarqueeReviewsResult["source"];
}) {
  return (
    <article
      className="glass shrink-0 rounded-2xl border border-slate-700/50 p-5 shadow-[0_8px_32px_rgba(2,6,23,0.35)]"
      style={{ width: "min(100vw - 2rem, 340px)" }}
    >
      <Stars rating={review.rating} />
      <blockquote className="mt-3 line-clamp-4 text-sm leading-relaxed text-slate-200">
        <span className="text-fuchsia-300/90" aria-hidden>
          {"\u201c"}
        </span>
        {review.text}
        <span className="text-fuchsia-300/90" aria-hidden>
          {"\u201d"}
        </span>
      </blockquote>
      <footer className="mt-4 flex items-center justify-between gap-3 border-t border-white/5 pt-3">
        <cite className="not-italic text-xs font-semibold text-white">{review.author}</cite>
        {source === "placeholder" ? (
          <span className="rounded-full border border-slate-600/80 bg-slate-900/80 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Sample
          </span>
        ) : review.relativeTime ? (
          <span className="text-[11px] text-slate-500">{review.relativeTime}</span>
        ) : null}
      </footer>
    </article>
  );
}

export function ReviewsMarqueeSection({ reviews, source, placeId }: MarqueeReviewsResult) {
  const durationSeconds = Math.max(32, reviews.length * 14);

  return (
    <section className="bg-slate-950 pb-14 pt-12" aria-labelledby="reviews-marquee-heading">
      <div className="container mb-10">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Reviews</p>
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <h2 id="reviews-marquee-heading" className="font-display text-2xl font-bold text-white md:text-3xl">
            What clients say about working with us
          </h2>
          {source === "google" && placeId ? (
            <a
              href={googleMapsPlaceUrl(placeId)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-cyan-300 hover:text-cyan-200"
            >
              View on Google Maps
            </a>
          ) : null}
        </div>
        {source === "placeholder" ? (
          <p className="mt-3 max-w-2xl text-sm text-slate-400">
            Sample testimonials rotate here until you add your Google Place ID and API key. Then reviews sync automatically from your Business Profile (up to five per request, refreshed hourly).
          </p>
        ) : null}
      </div>

      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-slate-950 to-transparent md:w-28"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-slate-950 to-transparent md:w-28"
          aria-hidden
        />

        <div className="overflow-hidden">
          <div
            data-marquee="reviews"
            className="reviews-marquee-row"
            style={{
              animation: `marquee-scroll-reviews ${durationSeconds}s linear infinite`,
            }}
          >
            <div className="flex shrink-0 flex-nowrap gap-4 pr-4">
              {reviews.map((review) => (
                <ReviewCard key={`a-${review.id}`} review={review} source={source} />
              ))}
            </div>
            <div className="flex shrink-0 flex-nowrap gap-4 pr-4" aria-hidden>
              {reviews.map((review) => (
                <ReviewCard key={`b-${review.id}`} review={review} source={source} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-8">
        {source === "google" ? (
          <p className="text-center text-[11px] leading-relaxed text-slate-500 md:text-left">
            Reviews and ratings are provided by Google users and are subject to Google&apos;s policies. Google and Google Maps are trademarks of Google LLC.
          </p>
        ) : (
          <p className="text-center text-[11px] text-slate-600 md:text-left">
            Connect{" "}
            <code className="rounded bg-slate-900 px-1 py-0.5 text-[10px] text-slate-400">GOOGLE_PLACES_API_KEY</code> and{" "}
            <code className="rounded bg-slate-900 px-1 py-0.5 text-[10px] text-slate-400">GOOGLE_PLACE_ID</code> to load live Google reviews.
          </p>
        )}
      </div>
    </section>
  );
}
