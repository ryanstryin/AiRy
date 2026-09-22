import type { BlueprintChild } from "./types";

export const digitalCredibilityStack: BlueprintChild = {
  slug: "digital-credibility-stack",
  layer: "05",
  layerName: "Verified visibility",
  title: "The New Digital Credibility Stack",
  subtitle:
    "Surviving the AI search crisis through authority, badges, and follower ecosystems.",
  belief: "Verified humans beat raw algorithms.",
  beliefDetail:
    "The future belongs to those who systemize verifiable human signals.",
  problemHeading: "The click is disappearing.",
  problem: [
    "A search used to lead to ten blue links and a publisher click. Now the AI Overview answers in place, and the session often ends with zero clicks.",
    "When AI summaries appear, click rates fall to around 8%, and organic clicks drop 38%. Traditional organic search is no longer a guaranteed traffic engine.",
    "Every major platform is responding the same way: leaning on verified human authority to keep users trusting what they see. Search Profiles, Local Guides and digital badges are three layers of that new credibility stack.",
  ],
  problemStats: [
    { value: "8%", label: "click rate when AI summaries appear" },
    { value: "38%", label: "drop in organic clicks" },
  ],
  framework: {
    heading: "One pattern across three layers",
    intro:
      "Each audience has its own verification mechanism, and each mechanism serves a distinct goal. The common thread is systemized, verifiable human signal.",
    items: [
      {
        label: "Layer 01",
        title: "Brands & creators",
        desc: "A claimed profile turns a branded search into a follow, and the follow feeds your content into Google Discover.",
        attributes: [
          { label: "Verification mechanism", value: "Google Search Profiles" },
          {
            label: "Ultimate goal",
            value: "Sustained audience retention (the Discover follow loop)",
          },
        ],
      },
      {
        label: "Layer 02",
        title: "Local businesses",
        desc: "Algorithms can't verify hours, menus or photos on their own. Maps runs on human truth, formalized through the Local Guide program.",
        attributes: [
          { label: "Verification mechanism", value: "Google Local Guides" },
          {
            label: "Ultimate goal",
            value: "Trust visibility and freshness (badged Maps reviews)",
          },
        ],
      },
      {
        label: "Layer 03",
        title: "Professionals",
        desc: "A paper certificate is a static image. A digital badge carries metadata anyone can check.",
        attributes: [
          { label: "Verification mechanism", value: "Digital badges" },
          {
            label: "Ultimate goal",
            value: "Verified career advancement (LinkedIn credential metadata)",
          },
        ],
      },
    ],
    insight:
      "Across every layer of the internet, raw algorithmic visibility is dying. The future of search is verifiable, human, and social.",
  },
  moves: [
    {
      title: "Brands & creators",
      summary: "Claim Search Profiles and feed the Discover follow loop.",
      detail:
        "A Search Profile does not directly boost organic rankings. The payoff is retention: when a searcher follows your profile, your content reaches them through Google Discover. It enhances an existing Knowledge Panel rather than replacing it, giving you control of your branded search narrative.",
      points: [
        "Check eligibility: 10,000 followers on one supported platform (YouTube, Instagram, X or TikTok). Audiences can't be stacked across platforms.",
        "US-based, 18+ (or adult-managed), and built for publishers, creators and media brands. Local brick-and-mortar businesses are excluded.",
        "Claim at profile.google.com/claim, sync your highest-followed handle, aggregate your links and pin one to three top posts.",
        "Embed the Search Profile badge on owned media, respecting the design specs: 48×48dp or 44×44px touch targets, no stretching, no mixed icon styles.",
      ],
    },
    {
      title: "Local businesses",
      summary:
        "Build compliant review engines that surface the badged Local Guides already in your customer base.",
      detail:
        "Reviews, edits, photos, Q&A and new places are the human inputs behind every Maps listing. Google rewards depth over volume, and a badged review with a name, a level, detail and photos carries far more weight than a two-word anonymous one.",
      points: [
        "Know the point economy: +15 for a new place, +10 for a detailed review of 200+ characters, +7 for an original photo, +1 for an edit or Q&A answer.",
        "Level 4 (250 points) is the tipping point: the Local Guide badge appears next to the reviewer's name on every public review.",
        "Don't court Guides one by one. Ask every customer systematically and compliantly, and the badged Guides already in your base will surface.",
      ],
    },
    {
      title: "Professionals",
      summary:
        "Verify skills with digital badges, and write the story that proves the value.",
      detail:
        "A digital badge is a clickable, verifiable asset: a verifiable URL, an exact issue date, an expiration status and the specific competencies earned. It proves continuous learning to the marketplace. The badge proves the skill exists; the narrative around it proves your value.",
      points: [
        "Three clicks: open the credential email, add the badge from the wallet to LinkedIn, save the auto-filled Licenses & Certifications entry.",
        "Post with context: what you learned and the friction you overcame to earn it. Never post the image without a description.",
        "Keep the profile curated. Only feature badges that align with your current goals.",
      ],
    },
  ],
  guideFile: "/blueprint/guides/digital-credibility-stack.html",
  released: true,
  seo: {
    title: "The New Digital Credibility Stack | AIRY Blueprint",
    description:
      "AI search is eroding the click. The three-layer credibility stack: Google Search Profiles, badged Local Guide reviews and verifiable digital badges.",
  },
};
