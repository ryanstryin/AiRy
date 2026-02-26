import { AnimateIn } from "@/components/ui/AnimateIn";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const agentSpeakProtocols = ["AEO", "GEO", "UCP", "MCP"];
const acceleratorComponents = ["Claude Cowork", "2-Day Sprint", "DWY Workflow", "Monthly Agent Mgmt"];

export function TwoProducts() {
  return (
    <section className="py-32 bg-bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <div className="text-center mb-16">
            <h2 className="text-display-l font-bold mb-4">Two Paths. One Transformation.</h2>
            <p className="text-body-l text-text-secondary max-w-xl mx-auto">
              Defined products for defined outcomes — not open-ended engagements.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimateIn delay={0.1}>
            <div className="border border-purple/20 bg-bg-base rounded-2xl p-8 h-full flex flex-col shadow-[0_0_40px_rgba(124,58,237,0.08)]">
              <div className="mb-2">
                <span className="text-xs text-text-tertiary uppercase tracking-wider">For Global Enterprises</span>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-1">AgentSpeak.io</h3>
              <p className="text-purple text-sm font-medium mb-4">The Agentic Information Layer</p>
              <p className="text-text-secondary mb-6 flex-1">
                A governance and communication framework for enterprises deploying multiple AI agents
                across departments. Not another AI tool — the operating layer that makes them work together.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {agentSpeakProtocols.map((p) => (
                  <Badge key={p} variant="purple">{p}</Badge>
                ))}
              </div>
              <Button href="https://agentspeak.io" variant="secondary" external
                className="self-start border-purple text-purple hover:bg-purple hover:text-white">
                Govern Your Agent Ecosystem →
              </Button>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div className="border border-teal/20 bg-bg-base rounded-2xl p-8 h-full flex flex-col shadow-[0_0_40px_rgba(0,196,167,0.08)]">
              <div className="mb-2">
                <span className="text-xs text-text-tertiary uppercase tracking-wider">For Small Business</span>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-1">AIRY AI Accelerator</h3>
              <p className="text-teal text-sm font-medium mb-4">Agentic Operations with Claude</p>
              <p className="text-text-secondary mb-6 flex-1">
                A fixed-scope, rapid-implementation program that installs, trains, and deploys your
                first AI employees on the Claude platform. Not consulting — a complete agentic
                operating system in 2 days.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {acceleratorComponents.map((c) => (
                  <Badge key={c} variant="teal">{c}</Badge>
                ))}
              </div>
              <Button href="/accelerator" variant="primary" className="self-start">
                Launch Your AI Employees →
              </Button>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
