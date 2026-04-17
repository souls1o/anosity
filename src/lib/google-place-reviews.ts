import type { MarqueeReview, MarqueeReviewsResult } from "./reviews-types";
import { placeholderMarqueeReviews } from "./reviews-placeholders";

type PlacesReview = {
  rating?: number;
  text?: { text?: string };
  relativePublishTimeDescription?: string;
  authorAttribution?: { displayName?: string };
};

type PlacesDetailsResponse = {
  reviews?: PlacesReview[];
};

function normalizeReviews(raw: PlacesReview[]): MarqueeReview[] {
  return raw.flatMap((r, index) => {
    const text = r.text?.text?.trim() ?? "";
    const author = r.authorAttribution?.displayName?.trim() || "Google user";
    const rating = typeof r.rating === "number" ? Math.min(5, Math.max(1, r.rating)) : 5;
    if (!text) return [];
    const item: MarqueeReview = {
      id: `google-${index}-${author.slice(0, 8)}`,
      author,
      rating,
      text,
      relativeTime: r.relativePublishTimeDescription,
    };
    return [item];
  });
}

export async function getMarqueeReviews(): Promise<MarqueeReviewsResult> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return {
      reviews: placeholderMarqueeReviews,
      source: "placeholder",
    };
  }

  const url = `https://places.googleapis.com/v1/places/${placeId}`;

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "reviews",
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return {
        reviews: placeholderMarqueeReviews,
        source: "placeholder",
        placeId,
      };
    }

    const data = (await response.json()) as PlacesDetailsResponse;
    const normalized = normalizeReviews(data.reviews ?? []);

    if (normalized.length === 0) {
      return {
        reviews: placeholderMarqueeReviews,
        source: "placeholder",
        placeId,
      };
    }

    return {
      reviews: normalized,
      source: "google",
      placeId,
    };
  } catch {
    return {
      reviews: placeholderMarqueeReviews,
      source: "placeholder",
      placeId,
    };
  }
}
