import { twMerge } from "tailwind-merge";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { threePaths, type PathCard } from "@/content/blueprint/parent";

interface ThreePathsProps {
  source?: string;
  heading?: string;
  subheading?: string;
  id?: string;
  className?: string;
}

const cardStyles: Record<PathCard["accent"], string> = {
  teal: "border-teal/20 bg-bg-base shadow-[0_0_40px_rgba(0,196,167,0.06)] hover:border-teal/40",
  purple:
    "border-purple/60 bg-purple/[0.07] shadow-[0_0_60px_rgba(124,58,237,0.25)] ring-1 ring-purple/30 lg:-my-4 lg:py-12",
  neutral: "border-bg-border bg-bg-base hover:border-text-tertiary/60",
};

const labelStyles: Record<PathCard["accent"], string> = {
  teal: "text-teal",
  purple: "text-purple",
  neutral: "text-text-secondary",
};

const buttonStyles: Record<PathCard["accent"], { variant: "primary" | "secondary"; className?: string }> = {
  teal: { variant: "secondary" },
  purple: {
    variant: "primary",
    className:
      "bg-purple text-white hover:shadow-[0_0_24px_rgba(124,58,237,0.5)]",
  },
  neutral: {
    variant: "secondary",
    className: "border-text-tertiary text-text-primary hover:bg-text-primary hover:text-bg-base",
  },
};

export function ThreePaths({
  source = "home",
  heading = threePaths.heading,
  subheading = threePaths.subheading,
  id = "paths",
  className,
}: ThreePathsProps) {
  const cards = threePaths.cards(source);

  return (
    <section id={id} className={twMerge("py-32 bg-bg-surface", className)} aria-labelledby={`${id}-heading`}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <div className="text-center mb-16">
            <h2 id={`${id}-heading`} className="text-display-l font-bold mb-4">
              {heading}
            </h2>
            <p className="text-body-l text-text-secondary max-w-2xl mx-auto">{subheading}</p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {cards.map((card, i) => {
            const btn = buttonStyles[card.accent];
            return (
              <AnimateIn
                key={card.id}
                delay={0.1 * (i + 1)}
                // Middle card first on mobile so the highlighted path leads.
                className={twMerge("h-full", card.id === "agentops" && "order-first lg:order-none")}
              >
                <article
                  className={twMerge(
                    "relative border rounded-2xl p-8 h-full flex flex-col transition-colors duration-200",
                    cardStyles[card.accent],
                  )}
                >
                  {/* Fixed height so the headings and labels line up across all three cards. */}
                  <div className="min-h-[28px] flex items-center justify-between gap-3 mb-2">
                    <span className="text-[11px] sm:text-xs text-text-tertiary uppercase tracking-wider">
                      {card.eyebrow}
                    </span>
                    {card.isNew && <Badge variant="purple" className="bg-purple text-white border-purple">New</Badge>}
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4">{card.name}</h3>

                  <p className={twMerge("text-xs font-semibold uppercase tracking-widest mb-2", labelStyles[card.accent])}>
                    For
                  </p>
                  <p className="text-text-secondary text-sm mb-5">{card.forWho}</p>

                  <p className={twMerge("text-xs font-semibold uppercase tracking-widest mb-2", labelStyles[card.accent])}>
                    What it is
                  </p>
                  <p className="text-text-primary/90 mb-8 flex-1">{card.whatItIs}</p>

                  <Button
                    href={card.cta.href}
                    external={card.cta.external}
                    variant={btn.variant}
                    className={twMerge("self-start", btn.className)}
                  >
                    {card.cta.label}
                  </Button>
                </article>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
