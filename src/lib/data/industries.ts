/**
 * Industries we serve — shared across all location pages (not per-city).
 */
export const industriesWeServe = [
  "roofing",
  "HVAC",
  "plumbing",
  "cleaning",
  "landscaping",
  "solar",
  "electrical",
  "pest control",
] as const;

export type IndustryId = (typeof industriesWeServe)[number];

/** Natural-language list for body copy, e.g. "roofing, HVAC, …, and pest control" */
export function formatIndustriesList(list: readonly string[]): string {
  if (list.length === 0) return "";
  if (list.length === 1) return list[0];
  const last = list[list.length - 1];
  const rest = list.slice(0, -1);
  return `${rest.join(", ")}, and ${last}`;
}
