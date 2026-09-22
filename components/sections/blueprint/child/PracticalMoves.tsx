import { AnimateIn } from "@/components/ui/AnimateIn";
import type { BlueprintChild } from "@/content/blueprint/children/types";

export function PracticalMoves({ child }: { child: BlueprintChild }) {
  return (
    <section className="py-24 md:py-32 bg-bg-surface border-y border-bg-border" aria-labelledby="moves-heading">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-widest text-teal mb-4">Practical moves</p>
          <h2 id="moves-heading" className="text-display-m font-semibold">
            Three moves to make this layer work.
          </h2>
        </AnimateIn>

        <ol className="space-y-6">
          {child.moves.map((move, i) => (
            <li key={move.title}>
              <AnimateIn delay={i * 0.1}>
                <article className="grid grid-cols-1 md:grid-cols-12 gap-6 border border-bg-border bg-bg-base rounded-2xl p-8">
                  <div className="md:col-span-4">
                    <span className="block text-display-m font-bold text-teal mb-3">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{move.title}</h3>
                    {move.summary && (
                      <p className="text-sm text-text-secondary">{move.summary}</p>
                    )}
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-text-secondary leading-relaxed">{move.detail}</p>
                    {move.points && move.points.length > 0 && (
                      <ul className="mt-6 space-y-3">
                        {move.points.map((pt) => (
                          <li key={pt} className="flex gap-3 text-sm text-text-secondary">
                            <span
                              className="mt-2 w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0"
                              aria-hidden="true"
                            />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              </AnimateIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
