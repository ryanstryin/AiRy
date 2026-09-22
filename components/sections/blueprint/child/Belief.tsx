import { AnimateIn } from "@/components/ui/AnimateIn";
import type { BlueprintChild } from "@/content/blueprint/children/types";

export function Belief({ child }: { child: BlueprintChild }) {
  return (
    <section className="py-24 bg-bg-surface border-y border-bg-border dot-grid">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn className="max-w-5xl">
          <p className="text-xs uppercase tracking-widest text-purple mb-6">The belief</p>
          <blockquote>
            <p className="text-display-l font-bold text-text-primary">{child.belief}</p>
            {child.beliefDetail && (
              <p className="mt-6 text-body-l text-text-secondary max-w-3xl">
                {child.beliefDetail}
              </p>
            )}
          </blockquote>
        </AnimateIn>
      </div>
    </section>
  );
}
