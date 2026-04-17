"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params?: Record<string, string | number>) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", name, params ?? {});
}

export function trackCtaClick(label: string) {
  trackEvent("cta_click", { label });
}

export function trackFormSubmission(formName: string) {
  trackEvent("generate_lead", { form_name: formName });
}
