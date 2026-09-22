import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Badge } from "@/components/ui/Badge";
import { proof } from "@/content/blueprint/parent";

export function Proof() {
  const { lead, comingSoon, optional } = proof;

  return (
    <section className="py-32 bg-bg-base">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <p className="text-teal text-sm font-medium tracking-widest uppercase mb-4 text-center">{proof.eyebrow}</p>
          <h2 className="text-display-l font-bold text-center mb-16">{proof.heading}</h2>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <AnimateIn className="lg:col-span-2 h-full">
            <article className="rounded-2xl border border-purple/30 bg-bg-surface p-8 md:p-10 h-full flex flex-col shadow-[0_0_40px_rgba(124,58,237,0.08)]">
              <Badge variant="purple" className="self-start mb-4">{lead.tag}</Badge>
              <h3 className="text-2xl font-bold text-text-primary mb-4">{lead.name}</h3>
              <p className="text-text-secondary leading-relaxed mb-8">{lead.body}</p>
              <blockquote className="border-l-2 border-teal pl-5 text-body-l text-text-primary mb-8 flex-1">
                {lead.pullQuote}
              </blockquote>
              <a
                href={lead.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start text-teal font-medium hover:underline underline-offset-4"
              >
                {lead.link.label}
              </a>
            </article>
          </AnimateIn>

          <div className="flex flex-col gap-6">
            <AnimateIn delay={0.1} className="flex-1">
              <article className="rounded-2xl border border-bg-border bg-bg-surface p-8 h-full">
                <Badge variant="teal" className="mb-4">{optional.tag}</Badge>
                <h3 className="text-xl font-bold text-text-primary mb-3">{optional.name}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">{optional.body}</p>
                <Link href={optional.link.href} className="text-teal font-medium hover:underline underline-offset-4">
                  {optional.link.label}
                </Link>
              </article>
            </AnimateIn>
            <AnimateIn delay={0.2} className="flex-1">
              <article className="rounded-2xl border border-dashed border-bg-border bg-bg-surface/50 p-8 h-full">
                <Badge variant="neutral" className="mb-4">Coming soon</Badge>
                <h3 className="text-xl font-bold text-text-secondary mb-3">{comingSoon.name}</h3>
                <p className="text-text-tertiary text-sm">{comingSoon.body}</p>
              </article>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
