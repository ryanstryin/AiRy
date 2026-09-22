import Link from "next/link";
import type { BlueprintChild } from "@/content/blueprint/children/types";

const SITE = "https://airytransformation.com";

export function Breadcrumb({ child }: { child: BlueprintChild }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Blueprint", item: `${SITE}/blueprint` },
      {
        "@type": "ListItem",
        position: 2,
        name: `Layer ${child.layer}`,
        item: `${SITE}/blueprint#layer-${child.layer}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: child.title,
        item: `${SITE}/blueprint/${child.slug}`,
      },
    ],
  };

  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-6 pt-10">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-text-tertiary">
        <li>
          <Link href="/blueprint" className="hover:text-text-primary transition-colors">
            Blueprint
          </Link>
        </li>
        <li aria-hidden="true">›</li>
        <li>
          <Link
            href={`/blueprint#layer-${child.layer}`}
            className="hover:text-text-primary transition-colors"
          >
            Layer {child.layer}
          </Link>
        </li>
        <li aria-hidden="true">›</li>
        <li aria-current="page" className="text-text-secondary">
          {child.title}
        </li>
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  );
}
