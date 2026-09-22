import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AGENTOPS_CTA_LABEL, agentOpsHref, isReleased, stack } from "@/content/blueprint/parent";

export function StackLayers() {
  const layersTopDown = [...stack.layers].reverse();

  return (
    <section id="the-stack" className="py-32 bg-bg-base scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <p className="text-teal text-sm font-medium tracking-widest uppercase mb-4 text-center">{stack.eyebrow}</p>
          <h2 className="text-display-l font-bold text-center mb-6">{stack.heading}</h2>
          <p className="text-body-l text-text-secondary text-center max-w-2xl mx-auto mb-16">{stack.intro}</p>
        </AnimateIn>

        <p className="text-xs uppercase tracking-widest text-text-tertiary mb-4">{stack.topLabel} ↑</p>
        <ol className="flex flex-col gap-4">
          {layersTopDown.map((layer, i) => {
            const released = isReleased(layer.slug);
            const href = `/blueprint/${layer.slug}`;
            return (
              <li key={layer.number} id={`layer-${layer.number}`}>
                <AnimateIn delay={i * 0.08}>
                  <article className="border border-bg-border bg-bg-surface rounded-2xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-8 hover:border-purple/40 transition-colors duration-200">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-purple font-bold tabular-nums">Layer {layer.number}</span>
                        {released ? <Badge variant="teal">Guide live</Badge> : null}
                      </div>
                      <h3 className="text-2xl font-bold text-text-primary mb-2">{layer.name}</h3>
                      <p className="text-text-primary/90 mb-4">{layer.promise}</p>
                      <blockquote className="border-l-2 border-purple pl-4 text-text-secondary italic mb-6">
                        {layer.belief}
                      </blockquote>
                      {released ? (
                        <Link
                          href={href}
                          className="inline-flex items-center gap-2 text-teal font-medium hover:underline underline-offset-4"
                        >
                          Read the guide: {layer.guideTitle} →
                        </Link>
                      ) : (
                        <p className="text-sm text-text-tertiary">
                          <span className="text-text-secondary">{layer.guideTitle}</span> · Guide coming soon
                        </p>
                      )}
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-text-tertiary mb-4">
                        Practical moves
                      </p>
                      <ol className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {layer.moves.map((move, j) => (
                          <li key={move.title} className="rounded-xl border border-bg-border bg-bg-base p-4">
                            <p className="text-teal text-xs font-bold mb-2">{j + 1}</p>
                            <p className="font-semibold text-text-primary text-sm mb-1">{move.title}</p>
                            <p className="text-text-secondary text-sm leading-relaxed">{move.body}</p>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </article>
                </AnimateIn>
              </li>
            );
          })}
        </ol>
        <p className="text-xs uppercase tracking-widest text-text-tertiary mt-4">{stack.bottomLabel} ↓</p>

        <AnimateIn delay={0.2}>
          <div className="mt-16 border border-purple/30 bg-purple/5 rounded-2xl p-8 flex flex-col md:flex-row md:items-center gap-6 justify-between">
            <p className="text-body-l text-text-primary max-w-3xl">{stack.nudge}</p>
            <Button href={agentOpsHref("blueprint")} variant="primary" className="shrink-0 justify-center">
              {AGENTOPS_CTA_LABEL}
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
