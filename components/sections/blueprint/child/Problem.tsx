import { AnimateIn } from "@/components/ui/AnimateIn";
import type { BlueprintChild } from "@/content/blueprint/children/types";

export function Problem({ child }: { child: BlueprintChild }) {
  if (child.problem.length === 0) return null;
  const stats = child.problemStats ?? [];

  return (
    <section className="py-24 bg-bg-base" aria-labelledby="problem-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          <AnimateIn className="lg:col-span-3">
            <p className="text-xs uppercase tracking-widest text-teal mb-4">The problem</p>
            <h2 id="problem-heading" className="text-display-m font-semibold mb-8">
              {child.problemHeading ?? "What changed"}
            </h2>
            <div className="space-y-5 text-body-l text-text-secondary">
              {child.problem.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </AnimateIn>
          {stats.length > 0 && (
            <AnimateIn delay={0.15} className="lg:col-span-2">
              <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="border border-bg-border bg-bg-surface rounded-2xl p-6"
                  >
                    <dt className="sr-only">{s.label}</dt>
                    <dd>
                      <span className="block text-display-l font-bold text-teal">{s.value}</span>
                      <span className="block mt-2 text-sm text-text-secondary">{s.label}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </AnimateIn>
          )}
        </div>
      </div>
    </section>
  );
}
