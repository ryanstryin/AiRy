import { AnimateIn } from "@/components/ui/AnimateIn";
import { BlueprintForm } from "@/components/sections/blueprint/BlueprintForm";
import type { BlueprintChild } from "@/content/blueprint/children/types";

export function EmbeddedGuide({ child }: { child: BlueprintChild }) {
  return (
    <>
      <section id="guide" className="py-24 md:py-32 bg-bg-base scroll-mt-20" aria-labelledby="guide-heading">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-teal mb-4">The guide</p>
              <h2 id="guide-heading" className="text-display-m font-semibold">
                Read {child.title}
              </h2>
            </div>
            <a
              href={child.guideFile}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary hover:text-teal transition-colors"
            >
              Open full screen ↗
            </a>
          </AnimateIn>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-bg-border bg-bg-surface">
            <iframe
              src={child.guideFile}
              title={`${child.title}: the full guide`}
              loading="lazy"
              className="absolute inset-0 w-full h-full"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section id="download" className="pb-24 md:pb-32 bg-bg-base scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <BlueprintForm guide={child.slug} />
        </div>
      </section>
    </>
  );
}
