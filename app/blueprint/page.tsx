import type { Metadata } from "next";
import { BlueprintHero, BlueprintDefinition } from "@/components/sections/blueprint/BlueprintHero";
import { WhyNow } from "@/components/sections/blueprint/WhyNow";
import { Beliefs } from "@/components/sections/blueprint/Beliefs";
import { StackLayers } from "@/components/sections/blueprint/StackLayers";
import { PatternGuardrails } from "@/components/sections/blueprint/PatternGuardrails";
import { AgentOpsPartner } from "@/components/sections/blueprint/AgentOpsPartner";
import { Proof } from "@/components/sections/blueprint/Proof";
import { HowItWorks } from "@/components/sections/blueprint/HowItWorks";
import { BlueprintFAQ } from "@/components/sections/blueprint/BlueprintFAQ";
import { BlueprintFinalCTA } from "@/components/sections/blueprint/BlueprintFinalCTA";
import { ThreePaths } from "@/components/sections/shared/ThreePaths";
import { agentOps, faq, hero, seo, stack } from "@/content/blueprint/parent";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  alternates: { canonical: seo.canonical },
  openGraph: {
    title: seo.ogTitle,
    description: seo.ogDescription,
    url: seo.canonical,
    type: "website",
    siteName: "AIRY Transformation",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.ogTitle,
    description: seo.ogDescription,
  },
};

const pageUrl = `${seo.siteUrl}${seo.canonical}`;
const orgId = `${seo.siteUrl}/#organization`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": orgId,
      name: "AIRY",
      url: seo.siteUrl,
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: seo.title,
      description: hero.definition,
      publisher: { "@id": orgId },
      about: { "@id": `${pageUrl}#agent-operations-partner` },
      hasPart: stack.layers.map((layer) => ({
        "@type": "WebPage",
        name: `${layer.guideTitle} (Layer ${layer.number}: ${layer.name})`,
        url: `${seo.siteUrl}/blueprint/${layer.slug}`,
      })),
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#agent-operations-partner`,
      name: "Agent Operations Partner",
      description: agentOps.lead,
      provider: { "@id": orgId },
      serviceType: "Forward-deployed AI operations",
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function BlueprintPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <BlueprintHero />
      <BlueprintDefinition />
      <WhyNow />
      <Beliefs />
      <StackLayers />
      <PatternGuardrails />
      <ThreePaths source="blueprint" className="bg-bg-base" />
      <AgentOpsPartner />
      <Proof />
      <HowItWorks />
      <BlueprintFAQ />
      <BlueprintFinalCTA />
    </main>
  );
}
