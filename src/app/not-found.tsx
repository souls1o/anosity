import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container text-center">
        <h1 className="text-3xl font-bold text-white">Page not found</h1>
        <p className="mt-3 text-slate-300">The page you requested does not exist.</p>
        <Link href="/" className="mt-6 inline-block text-sm font-semibold text-cyan-300 hover:text-cyan-200">
          Back to homepage
        </Link>
      </div>
    </section>
  );
}
