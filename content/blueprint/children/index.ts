import type { BlueprintChild } from "./types";
import { digitalCredibilityStack } from "./digital-credibility-stack";

export type { BlueprintChild } from "./types";

const GUIDES = "/blueprint/guides";

/** Parent Blueprint guide (the full deck). */
export const blueprintGuideFile = `${GUIDES}/the-airy-blueprint.html`;

/** All five Blueprint children, in layer order. Only released children get a route. */
export const blueprintChildren: BlueprintChild[] = [
  {
    slug: "ai-native-organization",
    layer: "01",
    layerName: "Shared brain",
    title: "The AI-Native Organization",
    subtitle: "The company's brain is the moat.",
    belief: "Agents never start from zero.",
    beliefDetail: "They start from everything your company already knows.",
    problem: [],
    moves: [
      {
        title: "Capture",
        detail:
          "Pull calls, docs, support tickets, and market signal into one place, automatically.",
      },
      {
        title: "Curate",
        detail:
          "Structure it as plain Markdown folders agents can read: facts, opinions, approved language.",
      },
      {
        title: "Compound",
        detail:
          "Every run writes back what worked, so the next run starts smarter.",
      },
    ],
    guideFile: `${GUIDES}/ai-native-organization.html`,
    released: false,
    seo: {
      title: "The AI-Native Organization | AIRY Blueprint",
      description:
        "Layer 01 of the AIRY Blueprint: a shared company brain so agents never start from zero.",
    },
  },
  {
    slug: "graph-engineering",
    layer: "02",
    layerName: "Designed workflows",
    title: "Graph Engineering, Clearly Explained",
    subtitle: "The output is still the report. The difference is the work is designed.",
    belief: "Design the work, not just the prompt.",
    problem: [],
    moves: [
      {
        title: "Qualify",
        detail:
          "Use a graph only when work has multiple steps, sources, checks, risk, or approvals. Otherwise, write a better prompt.",
      },
      {
        title: "Separate",
        detail:
          "Run steps in parallel where you can, and make sure the checker is never the writer.",
      },
      {
        title: "Gate",
        detail: "Put the human approval exactly where mistakes get expensive.",
      },
    ],
    guideFile: `${GUIDES}/graph-engineering.html`,
    released: false,
    seo: {
      title: "Graph Engineering, Clearly Explained | AIRY Blueprint",
      description:
        "Layer 02 of the AIRY Blueprint: designed workflows that put human approval where mistakes get expensive.",
    },
  },
  {
    slug: "ai-authority-engine",
    layer: "03",
    layerName: "Authority content",
    title: "The AI Authority Engine",
    subtitle: "You do the thinking. AI does the repeating.",
    belief: "Experience is a monopoly.",
    beliefDetail:
      "If an LLM can guess it, you don't own it. Experience is the one thing AI can't copy.",
    problem: [],
    moves: [
      {
        title: "Document the unmade data set",
        detail:
          "Milestones, failures, anecdotes, and the stances where you break from your industry.",
      },
      {
        title: "Split your energy 80 / 20",
        detail:
          "80% on timeless frameworks you write; 20% on timely posts AI remixes from them.",
      },
      {
        title: "Polish the last 1%",
        detail: "One word change restores your voice. No full rewrites.",
      },
    ],
    guideFile: `${GUIDES}/ai-authority-engine.html`,
    released: false,
    seo: {
      title: "The AI Authority Engine | AIRY Blueprint",
      description:
        "Layer 03 of the AIRY Blueprint: authority content built on the experience AI can't copy.",
    },
  },
  {
    slug: "marketing-engineering",
    layer: "04",
    layerName: "Growth engine",
    title: "Marketing Engineering",
    subtitle: "Messages sent is activity. Qualified replies are signal.",
    belief: "Build the system behind the marketing.",
    problem: [],
    moves: [
      {
        title: "Listen",
        detail:
          "Turn calls, reviews, churn, and CRM data into customer truth, with receipts.",
      },
      {
        title: "Build & ship",
        detail:
          "One real pain becomes five assets, and outbound fires on timing, not volume.",
      },
      {
        title: "Learn",
        detail:
          "Evals grade every output on voice, buyer fit, approval, and pipeline, then feed the memory.",
      },
    ],
    guideFile: `${GUIDES}/marketing-engineering.html`,
    released: false,
    seo: {
      title: "Marketing Engineering | AIRY Blueprint",
      description:
        "Layer 04 of the AIRY Blueprint: the growth engine that turns customer truth into pipeline.",
    },
  },
  digitalCredibilityStack,
];

export function getChild(slug: string): BlueprintChild | undefined {
  return blueprintChildren.find((c) => c.slug === slug);
}

export function releasedChildren(): BlueprintChild[] {
  return blueprintChildren.filter((c) => c.released);
}

/** Previous/next among ALL children (released or not), in layer order. */
export function neighbors(slug: string): {
  prev: BlueprintChild | null;
  next: BlueprintChild | null;
} {
  const i = blueprintChildren.findIndex((c) => c.slug === slug);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: i > 0 ? blueprintChildren[i - 1] : null,
    next: i < blueprintChildren.length - 1 ? blueprintChildren[i + 1] : null,
  };
}
