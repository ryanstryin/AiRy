import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { AGENTOPS_CTA_LABEL } from "@/content/blueprint/parent";
import type { BlueprintChild } from "@/content/blueprint/children/types";

export function ChildHero({ child }: { child: BlueprintChild }) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 70% 20%, rgba(124,58,237,0.12) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 10% 90%, rgba(0,196,167,0.06) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl">
          <AnimateIn>
            <p className="text-teal text-sm font-medium tracking-widest uppercase mb-6">
              Layer {child.layer} · {child.layerName}
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className="text-display-xl font-bold mb-6">{child.title}</h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-body-l text-text-secondary max-w-2xl mb-10">{child.subtitle}</p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <Button href="#guide">Read the guide →</Button>
              <Button
                href={`/contact?path=agentops&source=blueprint-${child.slug}`}
                variant="secondary"
              >
                {AGENTOPS_CTA_LABEL}
              </Button>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
