import { Button } from "@/components/ui/Button";
import { WordReveal } from "@/components/ui/WordReveal";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid pt-[68px]">
      {/* Aurora background */}
      <div
        className="absolute inset-0 opacity-30 animate-aurora"
        style={{
          background:
            "linear-gradient(135deg, #00C4A7 0%, #08080E 40%, #7C3AED 70%, #08080E 100%)",
          backgroundSize: "300% 300%",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <p className="text-teal text-sm font-medium tracking-widest uppercase mb-6 opacity-80">
          Agentic Transformation
        </p>

        <h1 className="text-display-xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
          <WordReveal
            text="From AI Speculation to Agentic Operations"
            accentWords={["Agentic", "Operations"]}
          />
        </h1>

        <p className="text-body-l text-text-secondary max-w-2xl mx-auto mb-12">
          We don't talk about AI's potential. We install it. Three definitive pathways to
          agentic transformation — choose your operating system.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="border border-teal/30 bg-teal/5 rounded-2xl p-6 text-left hover:border-teal/60 transition-colors duration-200 flex flex-col">
            <p className="text-xs text-text-tertiary uppercase tracking-wider mb-2">Small Business</p>
            <h3 className="text-lg font-semibold text-text-primary mb-2">AI Accelerator</h3>
            <p className="text-sm text-text-secondary mb-4 flex-1">Your AI employee. Deployed in 2 days.</p>
            <Button href="/accelerator" variant="primary" className="text-sm px-4 py-2 self-start">
              Launch AI Employees →
            </Button>
          </div>

          <div className="border border-purple/50 bg-purple/10 rounded-2xl p-6 text-left hover:border-purple transition-colors duration-200 shadow-[0_0_40px_rgba(124,58,237,0.18)] flex flex-col">
            <p className="text-xs text-purple uppercase tracking-wider mb-2">New · Forward-deployed</p>
            <h3 className="text-lg font-semibold text-text-primary mb-2">AgentOps Partner</h3>
            <p className="text-sm text-text-secondary mb-4 flex-1">Your AI operations team, embedded in your business.</p>
            <Button href="/blueprint" variant="secondary" className="text-sm px-4 py-2 self-start border-purple text-purple hover:bg-purple hover:text-white">
              See the Blueprint →
            </Button>
          </div>

          <div className="border border-purple/30 bg-purple/5 rounded-2xl p-6 text-left hover:border-purple/60 transition-colors duration-200 flex flex-col">
            <p className="text-xs text-text-tertiary uppercase tracking-wider mb-2">Enterprise</p>
            <h3 className="text-lg font-semibold text-text-primary mb-2">AgentSpeak.io</h3>
            <p className="text-sm text-text-secondary mb-4 flex-1">Governance for multi-agent ecosystems</p>
            <Button href="https://agentspeak.io" variant="secondary" external className="text-sm px-4 py-2 self-start border-purple text-purple hover:bg-purple hover:text-white">
              Explore Protocols →
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-teal animate-pulse" />
      </div>
    </section>
  );
}
