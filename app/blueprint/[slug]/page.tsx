import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getChild, releasedChildren } from "@/content/blueprint/children";
import { Breadcrumb } from "@/components/sections/blueprint/child/Breadcrumb";
import { ChildHero } from "@/components/sections/blueprint/child/ChildHero";
import { Belief } from "@/components/sections/blueprint/child/Belief";
import { Problem } from "@/components/sections/blueprint/child/Problem";
import { Framework } from "@/components/sections/blueprint/child/Framework";
import { PracticalMoves } from "@/components/sections/blueprint/child/PracticalMoves";
import { EmbeddedGuide } from "@/components/sections/blueprint/child/EmbeddedGuide";
import { LayerNav } from "@/components/sections/blueprint/child/LayerNav";
import { ChildCTA } from "@/components/sections/blueprint/child/ChildCTA";

const SITE = "https://airytransformation.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return releasedChildren().map((c) => ({ slug: c.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const child = getChild(slug);
  if (!child || !child.released) return {};

  const path = `/blueprint/${child.slug}`;
  return {
    title: child.seo.title,
    description: child.seo.description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title: child.title,
      description: child.seo.description,
      siteName: "AIRY",
    },
    twitter: {
      card: "summary_large_image",
      title: child.title,
      description: child.seo.description,
    },
  };
}

export default async function BlueprintChildPage({ params }: Props) {
  const { slug } = await params;
  const child = getChild(slug);
  if (!child || !child.released) notFound();

  const url = `${SITE}/blueprint/${child.slug}`;
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: child.title,
    description: child.seo.description,
    url,
    mainEntityOfPage: url,
    about: child.belief,
    author: { "@type": "Organization", name: "AIRY", url: SITE },
    publisher: { "@type": "Organization", name: "AIRY", url: SITE },
    isPartOf: {
      "@type": "CreativeWork",
      name: "The AIRY Blueprint",
      url: `${SITE}/blueprint`,
    },
  };

  return (
    <main className="pt-[68px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <Breadcrumb child={child} />
      <ChildHero child={child} />
      <Belief child={child} />
      <Problem child={child} />
      <Framework child={child} />
      <PracticalMoves child={child} />
      <EmbeddedGuide child={child} />
      <LayerNav child={child} />
      <ChildCTA slug={child.slug} />
    </main>
  );
}
