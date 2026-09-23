// Copy for the /blueprint parent landing page.
// Source: "The AIRY Blueprint: Landing Page Copy" + Blueprint deck slides.

export const AGENTOPS_CTA_LABEL = "Book an AgentOps Briefing →";

export function agentOpsHref(source = "blueprint"): string {
  return `/contact?path=agentops&source=${encodeURIComponent(source)}`;
}

export type ChildSlug =
  | "ai-native-organization"
  | "graph-engineering"
  | "ai-authority-engine"
  | "marketing-engineering"
  | "digital-credibility-stack";

/** Only released children get a live link; the rest show "Guide coming soon". */
export const releasedChildren: ChildSlug[] = ["digital-credibility-stack"];

export function isReleased(slug: ChildSlug): boolean {
  return releasedChildren.includes(slug);
}

export const seo = {
  title: "The AIRY Blueprint: Operating System for AI-Native Teams",
  description:
    "Five layers, one system: a shared brain, designed workflows, authority content, a growth engine and verified visibility. Run by a forward-deployed partner.",
  canonical: "/blueprint",
  ogTitle: "The AIRY Blueprint",
  ogDescription:
    "The operating system for companies that want AI to run on trusted human signal, not generic output.",
  siteUrl: "https://airytransformation.com",
};

export const hero = {
  eyebrow: "The AIRY Blueprint",
  headline: "Human signal. Machine scale.",
  accentWords: ["Machine", "scale."],
  body: "AI made output cheap. Trust got expensive. The AIRY Blueprint is the operating system for companies that want their AI to run on what only they have: their people, their judgment and their experience.",
  primaryCta: { label: AGENTOPS_CTA_LABEL, href: agentOpsHref("blueprint") },
  secondaryCta: { label: "Get the Blueprint (PDF) →", href: "#get-the-blueprint" },
  tagline: "Deployed Intelligence. Not speculation. Not strategy documents. Operating systems.",
  // Quotable definition placed under the hero and repeated in schema.
  definition:
    "The AIRY Blueprint is a five-layer operating system for AI-native companies: a shared brain, designed workflows, authority content, a growth engine and verified visibility. Humans decide, AI executes, humans approve, and the brain remembers.",
};

export const whyNow = {
  heading: "Three shifts every leadership team is feeling.",
  cards: [
    {
      number: "01",
      headline: "The click is disappearing.",
      body: "When AI summaries appear, click rates fall to around 8%. Organic search is no longer a guaranteed traffic engine.",
    },
    {
      number: "02",
      headline: "Chatbots aren't a strategy.",
      body: "Handing every employee a chatbot makes them faster, not smarter. Speed without a connected company brain only scales chaos.",
    },
    {
      number: "03",
      headline: "Generic content is free.",
      body: "If an LLM can guess it, you don't own it. Anything AI can write without you is a commodity.",
    },
  ],
  closer:
    "The winners won't be the companies with the most AI. They'll be the ones whose AI runs on the most trusted human signal.",
};

export const beliefs = {
  heading: "Six beliefs behind every system we deploy.",
  eyebrow: "What AIRY believes",
  items: [
    { number: "01", belief: "Humans own the bookends.", line: "Strategy and taste going in. Review and trust coming out." },
    { number: "02", belief: "Design the work.", line: "A managed workflow beats one giant chat, every time." },
    { number: "03", belief: "The brain is the moat.", line: "Shared, structured context that every agent reads and writes." },
    { number: "04", belief: "Experience is a monopoly.", line: "Your proprietary story is the one input AI can't generate." },
    { number: "05", belief: "Signal over activity.", line: "Measure qualified replies and real feedback, not volume shipped." },
    { number: "06", belief: "Verified beats viral.", line: "Systemized, verifiable human proof is what AI search trusts." },
  ],
};

export interface StackMove {
  title: string;
  body: string;
}

export interface StackLayer {
  number: "01" | "02" | "03" | "04" | "05";
  name: string;
  promise: string;
  belief: string;
  moves: [StackMove, StackMove, StackMove];
  guideTitle: string;
  slug: ChildSlug;
}

/** Ordered foundation-first (01 → 05). Render reversed to read top-down as the market sees it. */
export const stack = {
  eyebrow: "The AIRY Stack",
  heading: "Five layers. One system.",
  intro:
    "Every layer rests on the one below it. Start at the foundation and read up to what your market actually sees. Each layer has its own deep-dive guide.",
  topLabel: "What the market sees",
  bottomLabel: "The foundation",
  layers: [
    {
      number: "01",
      name: "Shared brain",
      promise: "The context every agent starts from.",
      belief: "Agents never start from zero.",
      moves: [
        { title: "Capture", body: "Pull calls, docs, support tickets, and market signal into one place, automatically." },
        { title: "Curate", body: "Structure it as plain Markdown folders agents can read: facts, opinions, approved language." },
        { title: "Compound", body: "Every run writes back what worked, so the next run starts smarter." },
      ],
      guideTitle: "The AI-Native Organization",
      slug: "ai-native-organization",
    },
    {
      number: "02",
      name: "Designed workflows",
      promise: "Agents, checks and human gates by design.",
      belief: "The output is still the report. The difference is the work is designed.",
      moves: [
        { title: "Qualify", body: "Use a graph only when work has multiple steps, sources, checks, risk, or approvals. Otherwise, write a better prompt." },
        { title: "Separate", body: "Run steps in parallel where you can, and make sure the checker is never the writer." },
        { title: "Gate", body: "Put the human approval exactly where mistakes get expensive." },
      ],
      guideTitle: "Graph Engineering",
      slug: "graph-engineering",
    },
    {
      number: "03",
      name: "Authority content",
      promise: "Scale your expertise, not generic content.",
      belief: "If an LLM can guess it, you don't own it.",
      moves: [
        { title: "Document the unmade data set", body: "Milestones, failures, anecdotes, and the stances where you break from your industry." },
        { title: "Split your energy 80 / 20", body: "80% on timeless frameworks you write; 20% on timely posts AI remixes from them." },
        { title: "Polish the last 1%", body: "One word change restores your voice. No full rewrites." },
      ],
      guideTitle: "The AI Authority Engine",
      slug: "ai-authority-engine",
    },
    {
      number: "04",
      name: "Growth engine",
      promise: "Turn market signal into pipeline.",
      belief: "Messages sent is activity. Qualified replies are signal.",
      moves: [
        { title: "Listen", body: "Turn calls, reviews, churn, and CRM data into customer truth, with receipts." },
        { title: "Build & ship", body: "One real pain becomes five assets, and outbound fires on timing, not volume." },
        { title: "Learn", body: "Evals grade every output on voice, buyer fit, approval, and pipeline, then feed the memory." },
      ],
      guideTitle: "Marketing Engineering",
      slug: "marketing-engineering",
    },
    {
      number: "05",
      name: "Verified visibility",
      promise: "Be the trusted, cited, verified source.",
      belief: "Verified humans beat raw algorithms.",
      moves: [
        { title: "Brands & creators", body: "Claim Search Profiles and feed the Discover follow loop." },
        { title: "Local businesses", body: "Build compliant review engines that surface the badged Local Guides already in your customer base." },
        { title: "Professionals", body: "Verify skills with digital badges, and write the story that proves the value." },
      ],
      guideTitle: "The Digital Credibility Stack",
      slug: "digital-credibility-stack",
    },
  ] satisfies StackLayer[],
  nudge:
    "Not sure where you are? Most teams have layers 04 and 05 running on hope and layer 01 missing entirely. An AgentOps Briefing finds your weakest layer in 30 minutes.",
};

export const pattern = {
  eyebrow: "The pattern and the guardrails",
  heading: "One rule, five places.",
  body: "Every AIRY system follows the same loop. Humans decide. AI executes. Humans approve. The brain remembers. Every cycle starts smarter than the last.",
  loop: [
    { actor: "Human", verb: "Decides", detail: "Strategy, taste, and the goal" },
    { actor: "AI", verb: "Executes", detail: "Repeats, remixes, and checks itself" },
    { actor: "Human", verb: "Approves", detail: "Review and trust at the gate" },
    { actor: "Brain", verb: "Remembers", detail: "What worked feeds the next run" },
  ],
  perLayer: [
    { layer: "Brain", rule: "Agents read from and write to it" },
    { layer: "Workflows", rule: "The checker is never the writer" },
    { layer: "Authority", rule: "AI repeats only your approved IP" },
    { layer: "Growth", rule: "Evals grade it before it ships" },
    { layer: "Visibility", rule: "Real humans verify the proof" },
  ],
  guardrailsHeading: "Six non-negotiables that make AI safe to put your name on.",
  guardrails: [
    "Every output has a checker that isn't the writer.",
    "Humans own the gate wherever mistakes cost money or trust.",
    "AI compiles your IP. It never invents your story.",
    "Every insight carries its receipts.",
    "Draw the graph before you automate it.",
    "Measure signal, not activity.",
  ],
};

export type PathAccent = "teal" | "purple" | "neutral";

export interface PathCard {
  id: "accelerator" | "agentops" | "agentspeak";
  eyebrow: string;
  name: string;
  isNew?: boolean;
  forWho: string;
  whatItIs: string;
  cta: { label: string; href: string; external?: boolean };
  accent: PathAccent;
}

export const threePaths = {
  heading: "Three Paths. One Transformation.",
  subheading:
    "Pick the path that matches where you are today. They share one blueprint, so you can move between them as you grow.",
  cards(source = "blueprint"): PathCard[] {
    return [
      {
        id: "accelerator",
        eyebrow: "For Small Business",
        name: "AI Accelerator",
        forWho: "Small businesses drowning in manual data entry and document work.",
        whatItIs:
          "AI employees deployed in a 2-day sprint. You own the labor, not a software subscription.",
        cta: { label: "Launch Your AI Employees →", href: "/accelerator" },
        accent: "teal",
      },
      {
        id: "agentops",
        eyebrow: "For Growth-Stage & Mid-Market",
        name: "Agent Operations Partner",
        isNew: true,
        forWho: "Growth-stage and mid-market teams that have AI tools but no AI operating system.",
        whatItIs:
          "A forward-deployed AIRY operator embedded in your team to build and run the Blueprint with you: brain, workflows, content, growth and visibility.",
        cta: { label: AGENTOPS_CTA_LABEL, href: agentOpsHref(source) },
        accent: "purple",
      },
      {
        id: "agentspeak",
        eyebrow: "For Enterprise",
        name: "Enterprise: AgentSpeak.io",
        forWho:
          "Enterprises preparing for AI agents that discover, negotiate and transact on the web.",
        whatItIs:
          "Agent-ready web infrastructure so AI agents from Google, OpenAI and Perplexity can discover, negotiate and transact with your business.",
        cta: { label: "Govern Your Agent Ecosystem →", href: "https://agentspeak.io", external: true },
        accent: "neutral",
      },
    ];
  },
};

export const agentOps = {
  eyebrow: "New · Forward-deployed",
  heading: "Your AI operations team, embedded in your business.",
  lead: "Most companies don't need another AI tool. They need someone inside the business who builds the system, runs it, and keeps it honest. That's the Agent Operations Partner.",
  body: "AIRY's forward-deployed operators work alongside your team, not from a slide deck. We map how your work actually moves, build the shared brain your agents need, ship one working machine at a time, and stay on to run, grade and improve it. You get the output of an AI operations team without hiring one.",
  rolesHeading: "What your partner does",
  roles: [
    { role: "Architect", meaning: "Maps your workflows and designs the graph: jobs, checks, and human gates." },
    { role: "Builder", meaning: "Stands up your company brain and ships agents, skill chains and dashboards." },
    { role: "Operator", meaning: "Runs the system every week, monitors outputs, and fixes what drifts." },
    { role: "Quality lead", meaning: "Owns the evals, so every output is graded before it reaches a customer." },
    { role: "Coach", meaning: "Trains your people to direct agents, so the capability stays in-house." },
  ],
  comparison: {
    columns: ["A typical agency", "A consultant", "An Agent Operations Partner"] as const,
    rows: [
      ["Rents you output", "Hands you a strategy deck", "Builds a system you own"],
      ["Works outside your business", "Leaves after the report", "Works inside your team, week after week"],
      ["Measures deliverables shipped", "Measures recommendations made", "Measures signal: pipeline, replies, real feedback"],
    ] as [string, string, string][],
  },
  cta: { label: AGENTOPS_CTA_LABEL, href: agentOpsHref("blueprint") },
  fractional: {
    heading: "Fractional roles. Priced to outcomes.",
    body: "You don't buy hours. You pick the fractional role your business is missing, we agree on the outcomes it has to deliver, and the price is built around those outcomes. Every engagement is bespoke, and every one is measured on signal.",
    columns: ["Fractional role", "Owns this layer", "Example outcome we'd agree on"] as const,
    rows: [
      {
        role: "Fractional Head of AI Operations",
        layer: "01 Shared brain + 02 Designed workflows",
        outcome: "A live company brain and your first quality-checked agent workflow in production",
      },
      {
        role: "Fractional Marketing Engineer",
        layer: "04 Growth engine",
        outcome: "A signal-driven outbound and content engine feeding qualified pipeline",
      },
      {
        role: "Fractional Authority Architect",
        layer: "03 Authority content",
        outcome: "A weekly authority engine publishing in your voice, from your approved IP",
      },
      {
        role: "Fractional AI Visibility Lead",
        layer: "05 Verified visibility",
        outcome: "Verified, cited presence across AI search, maps and profiles",
      },
    ],
    note: "Need more than one? Roles stack. Most partners start with one and add the next once the first proves itself.",
  },
};

export const proof = {
  eyebrow: "Proof",
  heading: "The Blueprint, in the field.",
  lead: {
    name: "The Benfield Connection",
    tag: "Partner firm",
    body: "The Benfield Connection is a marketing and communications consultancy serving enterprise technology companies. AIRY sits inside the firm as its subject-matter practitioner, running the Blueprint as a Benfield offering for Benfield's own clients. Workstreams span a site migration, a content hub, prospect intelligence tools, and AI search authority for a portfolio of companies.",
    pullQuote:
      "Proof that the Blueprint travels. AIRY builds it inside a partner firm, and that firm delivers it to its own clients.",
    link: { label: "See how Benfield builds Search Authority →", href: "https://benfieldconnection.com", external: true },
  },
  comingSoon: {
    name: "CTD / Second Half",
    body: "Case study coming soon.",
  },
  optional: {
    name: "Cogent Waste Solutions",
    tag: "AI Accelerator",
    body: "An AI Accelerator case study: AI employees deployed to take document-heavy work off the team.",
    link: { label: "Read the case study →", href: "/case-studies/cogent-waste-solutions" },
  },
};

export const howItWorks = {
  eyebrow: "How it works and what you keep",
  heading: "Start small. Prove it. Then scale.",
  steps: [
    { number: "01", name: "Audit", body: "We map your unmade data set, your recurring workflows and your credibility gaps." },
    { number: "02", name: "Build the brain", body: "We structure your context into agent-readable folders your team owns." },
    { number: "03", name: "Ship one machine", body: "One workflow, one wedge, one human gate. Run by hand first, then automated." },
    { number: "04", name: "Prove and scale", body: "We grade it on real signal, then expand only what works." },
  ],
  stepsCloser: "Proof beats a complicated demo. Every time.",
  outcomesHeading: "Five systems your company owns.",
  outcomes: [
    { name: "A living company brain", body: "Structured context that gets smarter every run." },
    { name: "Designed workflows", body: "Mapped, automated and quality-checked, with human gates." },
    { name: "An authority engine", body: "Your expertise, published at scale in your voice." },
    { name: "A signal-driven growth system", body: "From customer truth to qualified pipeline." },
    { name: "Verified visibility", body: "Trusted and cited across search, maps and profiles." },
  ],
  outcomesCloser: "Systems, not one-off outputs. Everything we build stays yours.",
};

export const faq = {
  heading: "Questions, answered.",
  items: [
    {
      q: "What is an Agent Operations Partner?",
      a: "A forward-deployed AIRY team that works inside your business to build, run and improve your AI system. Think of an embedded AI operations function, not an outside vendor.",
    },
    {
      q: "How is this different from the AI Accelerator?",
      a: "The Accelerator deploys AI employees for document-heavy small businesses in a 2-day sprint. The Agent Operations Partner is ongoing and covers the full Blueprint: brain, workflows, content, growth and visibility.",
    },
    {
      q: "Do we need to hire AI engineers?",
      a: "No. Your partner handles the build. Your team supplies what AI can't: judgment, taste and experience. We train them to direct agents as the system grows.",
    },
    {
      q: "Who owns what you build?",
      a: "You do. The company brain, workflows, prompts and dashboards stay in your accounts and stay yours if we part ways.",
    },
    {
      q: "Which AI tools do you use?",
      a: "Whatever fits the job and your security needs, from Claude and Codex to local, on-premise models for sensitive data. The workflow is the skill; tools change.",
    },
    {
      q: "How do you keep AI output safe to put our name on?",
      a: "Every system follows the AIRY guardrails: a checker that isn't the writer, human approval where mistakes are expensive, and AI that only compiles your approved material.",
    },
    {
      q: "How is it priced?",
      a: "Through fractional roles with bespoke pricing. Before we start, we agree on the outcomes the role has to deliver, and the price is built around them. You pay for outcomes, not hours.",
    },
    {
      q: "How long until we see results?",
      a: "We ship one working machine first and grade it on real signal before we scale. The timeline is one of the outcomes we agree on up front.",
    },
  ],
};

export const leadMagnet = {
  id: "get-the-blueprint",
  guide: "the-airy-blueprint",
  eyebrow: "The AIRY Blueprint (PDF)",
  heading: "Get the Blueprint.",
  body: "Name, work email and company. We'll email you the link right away, and follow up in two days with an invitation to an AgentOps Briefing.",
};

export const finalCta = {
  mantra: ["Build the brain.", "Design the work.", "Verify the human.", "Let the machines repeat."],
  body: "Our mission is to help every organization become AI-native without losing what makes it trusted: its people, its judgment and its experience. Let's find your weakest layer and fix it first.",
  primaryCta: { label: AGENTOPS_CTA_LABEL, href: agentOpsHref("blueprint") },
  secondaryCta: { label: "Or start with the guides ↓", href: "#the-stack" },
};
