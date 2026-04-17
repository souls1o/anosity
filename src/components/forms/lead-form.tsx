"use client";

import { FormEvent, useState } from "react";
import { trackFormSubmission } from "@/lib/tracking";

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    trackFormSubmission("contact_form");
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-6">
      <div className="grid gap-4">
        <input required name="name" placeholder="Your name" className="rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm" />
        <input required type="email" name="email" placeholder="Email address" className="rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm" />
        <input required name="business" placeholder="Business name" className="rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm" />
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us your goals (e.g., more roofing leads in Tulare)..."
          className="rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm"
        />
        <button
          type="submit"
          className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:-translate-y-0.5"
        >
          Request Plan
        </button>
      </div>
      {submitted ? (
        <p className="mt-3 text-sm text-cyan-300">Thanks! We will reach out shortly with next steps.</p>
      ) : null}
    </form>
  );
}
