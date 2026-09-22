import Link from "next/link";
import { neighbors } from "@/content/blueprint/children";
import type { BlueprintChild } from "@/content/blueprint/children/types";

function NeighborLink({
  child,
  direction,
}: {
  child: BlueprintChild | null;
  direction: "prev" | "next";
}) {
  const align = direction === "prev" ? "text-left" : "text-right md:ml-auto";
  if (!child) return <div className={align} />;

  const arrowLabel = direction === "prev" ? "← Previous layer" : "Next layer →";
  const body = (
    <>
      <span className="block text-xs uppercase tracking-wider text-text-tertiary mb-1">
        {arrowLabel}
      </span>
      <span className="block text-sm font-medium">
        Layer {child.layer} · {child.title}
      </span>
    </>
  );

  if (!child.released) {
    return (
      <div className={`${align} text-text-tertiary`} aria-disabled="true">
        {body}
        <span className="block text-xs mt-1">Coming soon</span>
      </div>
    );
  }

  return (
    <Link
      href={`/blueprint/${child.slug}`}
      className={`${align} block text-text-primary hover:text-teal transition-colors`}
    >
      {body}
    </Link>
  );
}

export function LayerNav({ child }: { child: BlueprintChild }) {
  const { prev, next } = neighbors(child.slug);
  return (
    <nav aria-label="Blueprint layers" className="py-16 bg-bg-base border-t border-bg-border">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <NeighborLink child={prev} direction="prev" />
        <div className="md:text-center">
          <Link
            href="/blueprint"
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            Back to the Blueprint
          </Link>
        </div>
        <NeighborLink child={next} direction="next" />
      </div>
    </nav>
  );
}
