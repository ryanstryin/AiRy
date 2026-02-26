import type { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About AIRY — Agentic Systems Architects",
  description:
    "AIRY is not an AI consultancy. We are agentic systems architects who install operating systems, not deliver strategy decks.",
};

export default function AboutPage() {
  return (
    <main className="pt-[68px]">
      <section className="py-32 bg-bg-base">
        <div className="max-w-3xl mx-auto px-6">
          <AnimateIn>
            <p className="text-teal text-sm font-medium tracking-widest uppercase mb-6">Our Philosophy</p>
            <h1 className="text-display-l font-bold mb-8">
              We Install Intelligence.<br />
              <span className="text-text-secondary font-normal">Not strategy documents.</span>
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div className="space-y-6 text-body-l text-text-secondary leading-relaxed">
              <p>
                Most AI consultancies sell you a plan. A deck. A roadmap with 14 workshops and a
                pilot program that stretches into months of "discovery." AIRY doesn't do that.
              </p>
              <p>
                We are agentic systems architects. We build the operating layer that transforms AI
                from a novelty into a colleague — and we deliver it in weeks, not quarters.
              </p>
              <p>
                AIRY runs two definitive pathways:{" "}
                <strong className="text-text-primary">AgentSpeak.io</strong> for enterprises that
                need governance and protocol across complex multi-agent deployments, and the{" "}
                <strong className="text-text-primary">AIRY AI Accelerator</strong> for businesses
                ready to deploy their first AI employee in 2 days.
              </p>
              <p>
                The missing piece in AI adoption has never been more technology. It's always been
                the operating layer — the system that makes AI do the work, not just answer questions.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div className="flex gap-4 mt-12">
              <Button href="/accelerator" variant="primary">Explore the Accelerator</Button>
              <Button href="https://agentspeak.io" variant="secondary" external>AgentSpeak.io ↗</Button>
            </div>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
