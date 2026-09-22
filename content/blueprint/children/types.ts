export type BlueprintLayer = "01" | "02" | "03" | "04" | "05";

/** A labelled fact attached to a framework item (e.g. "Mechanism" → "Google Search Profiles"). */
export interface FrameworkAttribute {
  label: string;
  value: string;
}

/** One node of the guide's core diagram, rebuilt as HTML. */
export interface FrameworkItem {
  /** Short marker, e.g. "Layer 01". */
  label: string;
  title: string;
  desc: string;
  attributes?: FrameworkAttribute[];
}

export interface BlueprintFramework {
  heading: string;
  intro?: string;
  items: FrameworkItem[];
  /** Closing takeaway shown under the diagram. */
  insight?: string;
}

export interface PracticalMove {
  title: string;
  /** The one-line move from the Blueprint layer slide. */
  summary?: string;
  /** Expanded detail from the guide. */
  detail: string;
  points?: string[];
}

export interface ProblemStat {
  value: string;
  label: string;
}

export interface BlueprintChild {
  slug: string;
  layer: BlueprintLayer;
  layerName: string;
  /** H1 */
  title: string;
  subtitle: string;
  /** One-line belief, shown large. */
  belief: string;
  /** Optional supporting line under the belief. */
  beliefDetail?: string;
  problemHeading?: string;
  /** 2–3 short paragraphs. */
  problem: string[];
  problemStats?: ProblemStat[];
  framework?: BlueprintFramework;
  /** Exactly three moves. */
  moves: [PracticalMove, PracticalMove, PracticalMove];
  /** Public path of the self-contained HTML guide, e.g. "/blueprint/guides/digital-credibility-stack.html". */
  guideFile: string;
  released: boolean;
  seo: {
    title: string;
    description: string;
  };
}
