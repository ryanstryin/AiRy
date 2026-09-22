import { AnimateIn } from "@/components/ui/AnimateIn";
import { pattern } from "@/content/blueprint/parent";

export function PatternGuardrails() {
  return (
    <section className="py-32 bg-bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <p className="text-teal text-sm font-medium tracking-widest uppercase mb-4 text-center">{pattern.eyebrow}</p>
          <h2 className="text-display-l font-bold text-center mb-6">{pattern.heading}</h2>
          <p className="text-body-l text-text-secondary text-center max-w-2xl mx-auto mb-16">{pattern.body}</p>
        </AnimateIn>

        {/* The loop */}
        <AnimateIn delay={0.1}>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative" aria-label="The AIRY loop">
            {pattern.loop.map((step, i) => {
              const isHuman = step.actor === "Human";
              return (
                <li key={`${step.actor}-${step.verb}`} className="relative">
                  <div
                    className={`rounded-2xl border p-6 h-full ${
                      isHuman ? "border-teal/30 bg-teal/5" : "border-purple/30 bg-purple/5"
                    }`}
                  >
                    <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${isHuman ? "text-teal" : "text-purple"}`}>
                      {step.actor}
                    </p>
                    <p className="text-2xl font-bold text-text-primary mb-2">{step.verb}</p>
                    <p className="text-sm text-text-secondary">{step.detail}</p>
                  </div>
                  <span
                    className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-text-tertiary"
                    aria-hidden="true"
                  >
                    {i < pattern.loop.length - 1 ? "→" : "↺"}
                  </span>
                </li>
              );
            })}
          </ol>
          <p className="text-center text-sm text-text-tertiary mt-6">↺ Every cycle starts smarter</p>
        </AnimateIn>

        {/* One rule, five places */}
        <AnimateIn delay={0.15}>
          <dl className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {pattern.perLayer.map((row) => (
              <div key={row.layer} className="rounded-xl border border-bg-border bg-bg-base p-4">
                <dt className="text-xs font-semibold uppercase tracking-widest text-purple mb-1">{row.layer}</dt>
                <dd className="text-sm text-text-secondary">{row.rule}</dd>
              </div>
            ))}
          </dl>
        </AnimateIn>

        {/* Guardrails */}
        <div className="mt-24">
          <AnimateIn>
            <h3 className="text-display-m font-bold text-center mb-12 max-w-3xl mx-auto">{pattern.guardrailsHeading}</h3>
          </AnimateIn>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pattern.guardrails.map((rule, i) => (
              <li key={rule}>
                <AnimateIn delay={(i % 3) * 0.08} className="h-full">
                  <div className="flex gap-4 rounded-2xl border border-bg-border bg-bg-base p-6 h-full">
                    <span
                      className="flex-none w-8 h-8 rounded-full bg-teal/10 border border-teal/30 text-teal text-sm font-bold flex items-center justify-center"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <p className="text-text-primary leading-relaxed">{rule}</p>
                  </div>
                </AnimateIn>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
