import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies — AIRY Transformation",
  description:
    "Real results from real businesses. See how AIRY Accelerator sessions deliver measurable ROI through permanent AI operating systems.",
};

const caseStudies = [
  {
    href: "/case-studies/cogent-waste-solutions",
    client: "Cogent Waste Solutions",
    industry: "Commercial Waste & Carting · Brooklyn, NY",
    headline: "From Paper Chaos to $25K Saved in 2.5 Weeks.",
    summary:
      "How Cogent Waste Solutions built an AI-powered invoice intake system in a single AIRY Accelerator session — and transformed their back-office operations permanently.",
    stats: [
      { num: "$25K", label: "Admin Cost Avoided" },
      { num: "6700+", label: "Order Sheets Processed" },
      { num: "2.5wk", label: "Time to ROI" },
      { num: "100%", label: "Compliance Maintained" },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-bg-base pt-24 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-teal mb-4">
            Results
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4">
            Case Studies
          </h1>
          <p className="text-text-secondary text-lg max-w-xl">
            Measured outcomes from real AIRY Accelerator engagements. No
            projections. No theory. Numbers from live production use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((cs) => (
            <Link
              key={cs.href}
              href={cs.href}
              className="group block border border-bg-border bg-bg-surface hover:border-teal transition-colors duration-300 p-8"
            >
              <p className="text-xs tracking-[0.2em] uppercase text-text-secondary mb-2">
                {cs.industry}
              </p>
              <h2 className="text-xl font-bold text-text-primary mb-3 group-hover:text-teal transition-colors duration-200">
                {cs.headline}
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-8">
                {cs.summary}
              </p>
              <div className="grid grid-cols-4 gap-4 border-t border-bg-border pt-6">
                {cs.stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-extrabold text-teal leading-none mb-1">
                      {s.num}
                    </div>
                    <div className="text-[0.65rem] tracking-widest uppercase text-text-secondary">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
