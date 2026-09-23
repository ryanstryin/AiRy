import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 animate-aurora"
        style={{
          background: "linear-gradient(135deg, #7C3AED 0%, #08080E 50%, #00C4A7 100%)",
          backgroundSize: "300% 300%",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-display-l font-bold mb-4">Your Business is Ready for Agents.</h2>
        <p className="text-body-l text-text-secondary mb-16">Which ecosystem do you operate in?</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left items-stretch">
          <div className="border border-teal/30 bg-teal/5 rounded-2xl p-8 flex flex-col">
            <p className="text-[11px] sm:text-xs text-text-tertiary uppercase tracking-wider mb-2">Small Business</p>
            <h3 className="text-xl font-bold mb-2">Focused. Operational. Ready.</h3>
            <p className="text-sm text-text-secondary mb-6 flex-1">
              You need AI employees running specific functions now, on a proven platform.
            </p>
            <Button href="/accelerator" variant="primary" className="self-start">
              Launch the AI Accelerator →
            </Button>
          </div>

          <div className="border border-purple/50 bg-purple/10 rounded-2xl p-8 flex flex-col">
            <p className="text-[11px] sm:text-xs text-text-tertiary uppercase tracking-wider mb-2">
              Growth-Stage &amp; Mid-Market
            </p>
            <h3 className="text-xl font-bold mb-2">Embedded. Accountable. Ongoing.</h3>
            <p className="text-sm text-text-secondary mb-6 flex-1">
              The AgentOps Partner: your AI operations team, embedded in your business.
            </p>
            <Button
              href="/contact?path=agentops&source=home-final"
              variant="primary"
              className="self-start bg-purple text-white hover:shadow-[0_0_24px_rgba(124,58,237,0.5)]"
            >
              Book an AgentOps Briefing →
            </Button>
          </div>

          <div className="border border-purple/30 bg-purple/5 rounded-2xl p-8 flex flex-col">
            <p className="text-[11px] sm:text-xs text-text-tertiary uppercase tracking-wider mb-2">Enterprise</p>
            <h3 className="text-xl font-bold mb-2">Complex. Multi-Agent. Global.</h3>
            <p className="text-sm text-text-secondary mb-6 flex-1">
              Managing multiple AI agents requiring governance, communication protocols, and oversight.
            </p>
            <Button href="https://agentspeak.io" variant="secondary" external
              className="self-start border-purple text-purple hover:bg-purple hover:text-white">
              Explore AgentSpeak.io →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
