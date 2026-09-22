import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { finalCta, leadMagnet } from "@/content/blueprint/parent";
import { BlueprintForm } from "@/components/sections/blueprint/BlueprintForm";

export function BlueprintFinalCTA() {
  return (
    <>
      <section className="relative py-32 overflow-hidden bg-bg-base">
        <div
          className="absolute inset-0 opacity-20 animate-aurora"
          style={{
            background: "linear-gradient(135deg, #7C3AED 0%, #08080E 50%, #00C4A7 100%)",
            backgroundSize: "300% 300%",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <AnimateIn>
            <h2 className="text-display-l font-bold mb-8">
              {finalCta.mantra.map((line, i) => (
                <span key={line} className={`block ${i === finalCta.mantra.length - 1 ? "text-teal" : ""}`}>
                  {line}
                </span>
              ))}
            </h2>
            <p className="text-body-l text-text-secondary max-w-2xl mx-auto mb-12">{finalCta.body}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href={finalCta.primaryCta.href} variant="primary" className="text-base px-8 py-4">
                {finalCta.primaryCta.label}
              </Button>
              <Button href={finalCta.secondaryCta.href} variant="ghost">
                {finalCta.secondaryCta.label}
              </Button>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section id={leadMagnet.id} className="py-32 bg-bg-surface scroll-mt-20" aria-labelledby={`${leadMagnet.id}-heading`}>
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-teal text-sm font-medium tracking-widest uppercase mb-4">{leadMagnet.eyebrow}</p>
            <h2 id={`${leadMagnet.id}-heading`} className="text-display-m font-bold mb-4">
              {leadMagnet.heading}
            </h2>
            <p className="text-text-secondary">{leadMagnet.body}</p>
          </div>
          <BlueprintForm guide={leadMagnet.guide} showHeading={false} />
        </div>
      </section>
    </>
  );
}
