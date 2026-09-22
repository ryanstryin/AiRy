import { AnimateIn } from "@/components/ui/AnimateIn";
import { Card } from "@/components/ui/Card";
import type { BlueprintChild } from "@/content/blueprint/children/types";

export function Framework({ child }: { child: BlueprintChild }) {
  const fw = child.framework;
  if (!fw) return null;

  return (
    <section className="py-24 md:py-32 bg-bg-base" aria-labelledby="framework-heading">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-widest text-teal mb-4">The framework</p>
          <h2 id="framework-heading" className="text-display-m font-semibold mb-4">
            {fw.heading}
          </h2>
          {fw.intro && <p className="text-body-l text-text-secondary">{fw.intro}</p>}
        </AnimateIn>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fw.items.map((item, i) => (
            <li key={item.title}>
              <AnimateIn delay={i * 0.1} className="h-full">
                <Card variant={i % 2 === 0 ? "teal" : "purple"} className="h-full p-8 flex flex-col">
                  <p className="text-xs uppercase tracking-widest text-text-tertiary mb-3">
                    {item.label}
                  </p>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-text-secondary mb-6">{item.desc}</p>
                  {item.attributes && item.attributes.length > 0 && (
                    <dl className="mt-auto space-y-4 border-t border-bg-border pt-6">
                      {item.attributes.map((a) => (
                        <div key={a.label}>
                          <dt className="text-xs uppercase tracking-wider text-text-tertiary mb-1">
                            {a.label}
                          </dt>
                          <dd className="text-sm font-medium text-text-primary">{a.value}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </Card>
              </AnimateIn>
            </li>
          ))}
        </ol>

        {fw.insight && (
          <AnimateIn delay={0.2}>
            <p className="mt-10 border-l-2 border-purple pl-6 text-body-l text-text-primary max-w-4xl">
              {fw.insight}
            </p>
          </AnimateIn>
        )}
      </div>
    </section>
  );
}
