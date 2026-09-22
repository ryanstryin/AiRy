import { Button } from "@/components/ui/Button";
import { WordReveal } from "@/components/ui/WordReveal";
import { hero, stack } from "@/content/blueprint/parent";

export function BlueprintHero() {
  const layersTopDown = [...stack.layers].reverse();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden dot-grid pt-[68px]">
      <div
        className="absolute inset-0 opacity-30 animate-aurora"
        style={{
          background: "linear-gradient(135deg, #7C3AED 0%, #08080E 40%, #00C4A7 75%, #08080E 100%)",
          backgroundSize: "300% 300%",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-16 items-center">
        <div className="text-center lg:text-left">
          <p className="text-teal text-sm font-medium tracking-widest uppercase mb-6 opacity-80">{hero.eyebrow}</p>

          <h1 className="text-display-xl font-bold mb-6 leading-tight">
            <WordReveal text={hero.headline} accentWords={hero.accentWords} accentClassName="text-purple" />
          </h1>

          <p className="text-body-l text-text-secondary max-w-2xl mx-auto lg:mx-0 mb-10">{hero.body}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <Button href={hero.primaryCta.href} variant="primary" className="text-base px-8 py-4 justify-center">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary" className="text-base px-8 py-4 justify-center">
              {hero.secondaryCta.label}
            </Button>
          </div>

          <p className="text-sm text-text-tertiary">{hero.tagline}</p>
        </div>

        {/* Five-layer stack graphic, rebuilt in HTML */}
        <div className="relative" aria-label="The five-layer AIRY Stack" role="img">
          <div
            className="absolute -inset-8 rounded-[2rem] blur-3xl opacity-40"
            style={{ background: "radial-gradient(circle at 50% 30%, rgba(124,58,237,0.5), transparent 70%)" }}
            aria-hidden="true"
          />
          <div className="relative flex flex-col gap-2" aria-hidden="true">
            <p className="text-[11px] uppercase tracking-widest text-text-tertiary mb-1 text-right">{stack.topLabel}</p>
            {layersTopDown.map((layer, i) => (
              <div
                key={layer.number}
                className="flex items-center gap-4 rounded-xl border border-purple/30 bg-bg-surface/80 backdrop-blur px-5 py-4 shadow-[0_0_30px_rgba(124,58,237,0.12)]"
                style={{ marginInline: `${(4 - i) * 0.75}rem` }}
              >
                <span className="text-purple font-bold tabular-nums text-sm">{layer.number}</span>
                <span className="font-semibold text-text-primary">{layer.name}</span>
                <span className="ml-auto hidden sm:block text-xs text-text-tertiary truncate">{layer.guideTitle}</span>
              </div>
            ))}
            <p className="text-[11px] uppercase tracking-widest text-text-tertiary mt-1 text-right">{stack.bottomLabel}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Quotable definition, placed directly under the hero (also repeated in JSON-LD). */
export function BlueprintDefinition() {
  return (
    <section className="py-16 bg-bg-surface border-y border-bg-border">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-body-l text-text-primary text-center leading-relaxed">
          <strong className="text-teal font-semibold">The AIRY Blueprint</strong>
          {hero.definition.replace(/^The AIRY Blueprint/, "")}
        </p>
      </div>
    </section>
  );
}
