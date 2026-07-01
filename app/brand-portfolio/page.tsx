import type { Metadata } from "next";
import { BrandPortfolioGrid } from "@/components/sections/brand-portfolio/BrandPortfolioGrid";

export const metadata: Metadata = {
  title: "Brand Portfolio — AIRY Transformation",
  description:
    "100+ brands across 14 industries. Two decades of SEO, digital strategy, and AI-driven growth for the companies that define their categories.",
};

const stats = [
  { num: "100+", label: "Brands" },
  { num: "14", label: "Industries" },
  { num: "20+", label: "Years" },
];

export default function BrandPortfolioPage() {
  return (
    <main className="min-h-screen bg-bg-base pt-24 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <header className="relative overflow-hidden rounded-2xl border border-bg-border py-20 px-6 text-center">
          <div className="dot-grid pointer-events-none absolute inset-0" />
          <div className="relative">
            <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-teal/25 bg-teal/10 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-teal">
              SEO · AI Visibility · Growth Strategy
            </span>
            <h1 className="mb-4 text-[clamp(2rem,5vw,3.4rem)] font-light leading-tight tracking-tight text-text-primary">
              <strong className="font-semibold text-white">Enterprise experience.</strong>
              <br />
              At <em className="not-italic text-teal">global scale.</em>
            </h1>
            <p className="mx-auto mb-12 max-w-xl text-lg font-light text-text-secondary">
              Two decades of SEO, digital strategy, and AI-driven growth across 100
              brands that define their categories.
            </p>
            <div className="inline-flex overflow-hidden rounded-2xl border border-bg-border">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`px-8 py-5 sm:px-10 ${
                    i < stats.length - 1 ? "border-r border-bg-border" : ""
                  }`}
                >
                  <span className="block text-3xl font-semibold tracking-tight text-teal">
                    {s.num}
                  </span>
                  <span className="mt-0.5 block text-[0.66rem] font-medium uppercase tracking-[0.08em] text-text-tertiary">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </header>

        <div className="mt-14">
          <BrandPortfolioGrid />
        </div>
      </div>
    </main>
  );
}
