export type MarqueeReview = {
  id: string;
  author: string;
  rating: number;
  text: string;
  relativeTime?: string;
};

export type MarqueeReviewsResult = {
  reviews: MarqueeReview[];
  source: "google" | "placeholder";
  /** Present when reviews came from Google — used for attribution links */
  placeId?: string;
};
