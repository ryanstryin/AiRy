import { AnimateIn } from "@/components/ui/AnimateIn";
import { whyNow } from "@/content/blueprint/parent";

export function WhyNow() {
  return (
    <section className="py-32 bg-bg-base">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <p className="text-teal text-sm font-medium tracking-widest uppercase mb-4 text-center">Why now</p>
          <h2 className="text-display-l font-bold text-center mb-16 max-w-3xl mx-auto">{whyNow.heading}</h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyNow.cards.map((card, i) => (
            <AnimateIn key={card.headline} delay={i * 0.12} className="h-full">
              <div className="border border-bg-border bg-bg-surface rounded-2xl p-8 h-full">
                {"stat" in card && card.stat ? (
                  <p className="text-display-l font-bold text-purple mb-4" aria-hidden="true">
                    {card.stat}
                  </p>
                ) : (
                  <p className="text-display-l font-bold text-text-tertiary mb-4" aria-hidden="true">
                    0{i + 1}
                  </p>
                )}
                <h3 className="text-xl font-bold text-text-primary mb-3">{card.headline}</h3>
                <p className="text-text-secondary leading-relaxed">{card.body}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.3}>
          <p className="mt-16 text-display-m text-center max-w-4xl mx-auto text-text-primary">{whyNow.closer}</p>
        </AnimateIn>
      </div>
    </section>
  );
}
