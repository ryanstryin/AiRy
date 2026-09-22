import { AnimateIn } from "@/components/ui/AnimateIn";
import { howItWorks } from "@/content/blueprint/parent";

export function HowItWorks() {
  return (
    <section className="py-32 bg-bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <p className="text-teal text-sm font-medium tracking-widest uppercase mb-4 text-center">{howItWorks.eyebrow}</p>
          <h2 className="text-display-l font-bold text-center mb-16">{howItWorks.heading}</h2>
        </AnimateIn>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorks.steps.map((step, i) => (
            <li key={step.number} className="relative">
              <AnimateIn delay={i * 0.12} className="h-full">
                {i < howItWorks.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 text-teal text-xl z-10" aria-hidden="true">
                    →
                  </div>
                )}
                <div className="border border-teal/20 bg-teal/5 rounded-2xl p-8 h-full">
                  <p className="text-xs font-bold uppercase tracking-widest text-teal mb-4">Step {step.number}</p>
                  <h3 className="text-xl font-bold text-text-primary mb-3">{step.name}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{step.body}</p>
                </div>
              </AnimateIn>
            </li>
          ))}
        </ol>

        <AnimateIn delay={0.2}>
          <p className="text-display-m text-center mt-12">{howItWorks.stepsCloser}</p>
        </AnimateIn>

        <div className="mt-24">
          <AnimateIn>
            <h3 className="text-display-m font-bold text-center mb-12">{howItWorks.outcomesHeading}</h3>
          </AnimateIn>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {howItWorks.outcomes.map((o, i) => (
              <li key={o.name}>
                <AnimateIn delay={i * 0.08} className="h-full">
                  <div className="rounded-2xl border border-purple/20 bg-bg-base p-6 h-full">
                    <p className="text-purple text-xs font-bold tabular-nums mb-3">0{i + 1}</p>
                    <p className="font-semibold text-text-primary mb-2">{o.name}</p>
                    <p className="text-sm text-text-secondary leading-relaxed">{o.body}</p>
                  </div>
                </AnimateIn>
              </li>
            ))}
          </ul>
          <AnimateIn delay={0.2}>
            <p className="text-body-l text-text-secondary text-center mt-12">{howItWorks.outcomesCloser}</p>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
