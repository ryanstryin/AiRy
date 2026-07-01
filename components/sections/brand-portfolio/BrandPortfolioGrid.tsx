"use client";

import { useState } from "react";

type Category = {
  category: string;
  brands: string[];
};

const data: Category[] = [
  {
    category: "Enterprise SaaS",
    brands: ["SAP", "Fieldglass", "Ariba", "Concur", "Magento", "Share Spring"],
  },
  {
    category: "Luxury Travel",
    brands: [
      "Four Seasons",
      "Fairmont",
      "Belmond",
      "Lacure Villas",
      "LHW",
      "The Plaza",
    ],
  },
  {
    category: "Healthcare & Wellness",
    brands: [
      "Humana",
      "Sleep.com",
      "Casper",
      "Mattress Firm",
      "Nectar Sleep",
      "Elite Ivy Tutors",
      "A Place For Mom",
      "Brightview Senior",
      "Surterra Wellness",
      "Pax",
    ],
  },
  {
    category: "Banking & Finance",
    brands: [
      "CIBC",
      "HSBC",
      "Forge",
      "BlackRock",
      "Nasdaq",
      "Visa",
      "American Express",
      "Venmo",
    ],
  },
  {
    category: "Enterprise Consulting",
    brands: [
      "EY",
      "Accenture",
      "McKinsey & Co.",
      "Esquire Digital",
      "The Benfield Connection",
      "Future of Commerce",
    ],
  },
  {
    category: "Pharma & Lab Tech",
    brands: ["Novartis", "Boehringer Ingelheim", "Bayer", "Thermo Fisher"],
  },
  {
    category: "Energy & Communications",
    brands: [
      "Duke Energy",
      "The Trade Desk",
      "Charter Communications",
      "Spectrum Brands",
      "The NPD Group",
    ],
  },
  {
    category: "Fashion & Ecommerce",
    brands: [
      "Cole Haan",
      "Saint Laurent",
      "Godiva",
      "Bebe",
      "Nordstrom",
      "Macy's",
      "Nasty Gal",
      "Warby Parker",
      "Ray-Ban",
      "Alex and Ani",
      "Timberland",
      "Ralph Lauren",
      "Simplicity Patterns",
      "NY Times Store",
      "Burlington",
      "Gap / Old Navy",
    ],
  },
  {
    category: "Sports & Ecommerce",
    brands: [
      "Bauer Hockey",
      "Maverik Cascade",
      "Sports Authority",
      "Dick's Sporting Goods",
      "Altra Running",
      "ASICS",
      "MLB Shop",
      "NFL Shop",
    ],
  },
  {
    category: "Home & Local Services",
    brands: [
      "The Home Depot",
      "Tractor Supply",
      "Ace Hardware",
      "Zales",
      "Roto-Rooter",
      "1000Bulbs",
      "Tools Today",
      "Masterbrand Cabinets",
      "ImageThink",
      "WeWork",
      "Summer OS",
    ],
  },
  {
    category: "Education & Nonprofits",
    brands: [
      "The Wallace Foundation",
      "The College Board",
      "College Advisor",
      "Wharton Exec Ed",
      "The Wharton School",
    ],
  },
  {
    category: "Commercial Ecommerce",
    brands: [
      "eBay Enterprise",
      "eBay",
      "Dollar Tree",
      "Dollar General",
      "Constellation Brands",
      "Nature Made",
      "Nespresso",
      "RadioShack",
      "iRobot",
      "The Bouqs Co.",
      "Shop BMW",
      "Stanley Black & Decker",
    ],
  },
  {
    category: "Gaming & Entertainment",
    brands: ["EA Sports", "Duolingo", "Lionsgate"],
  },
];

export function BrandPortfolioGrid() {
  const [active, setActive] = useState("all");

  const filters = ["all", ...data.map((d) => d.category)];
  const visible = active === "all" ? data : data.filter((d) => d.category === active);

  return (
    <>
      {/* Filter bar — sticky below the fixed 68px global header */}
      <nav className="sticky top-[68px] z-40 -mx-6 mb-14 border-b border-bg-border bg-bg-base/90 px-6 backdrop-blur-md">
        <div className="flex gap-1 overflow-x-auto py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {filters.map((f) => {
            const isActive = active === f;
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`whitespace-nowrap rounded-lg px-4 py-1.5 text-[0.8rem] font-medium transition-colors duration-150 ${
                  isActive
                    ? "border border-teal/20 bg-teal/10 text-teal"
                    : "border border-transparent text-text-secondary hover:bg-bg-surface hover:text-text-primary"
                }`}
              >
                {f === "all" ? "All brands" : f}
              </button>
            );
          })}
        </div>
      </nav>

      <div className="space-y-14">
        {visible.map((section) => (
          <section key={section.category}>
            <div className="mb-5 flex items-center gap-3.5">
              <span className="whitespace-nowrap text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-teal">
                {section.category}
              </span>
              <span className="whitespace-nowrap rounded-[10px] bg-bg-surface px-2 py-0.5 text-[0.66rem] font-medium text-text-tertiary">
                {section.brands.length} brands
              </span>
              <div className="h-px flex-1 bg-bg-border" />
            </div>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(136px,1fr))] gap-2">
              {section.brands.map((brand) => (
                <div
                  key={`${section.category}-${brand}`}
                  className="group flex h-[68px] items-center justify-center overflow-hidden rounded-xl border border-bg-border bg-bg-surface px-3.5 transition-colors duration-200 hover:border-teal"
                >
                  <span className="text-center text-sm font-semibold leading-snug text-text-secondary transition-colors duration-200 group-hover:text-teal">
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
