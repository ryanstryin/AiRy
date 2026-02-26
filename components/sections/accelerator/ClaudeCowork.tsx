import { AnimateIn } from "@/components/ui/AnimateIn";

const features = [
  { title: "Autonomous Agent", desc: "Does the work, doesn't just chat. Reads files, executes tasks, updates systems.", icon: "⚡" },
  { title: "Local & Secure", desc: "Runs on your machine, not in the browser. Data never leaves your premise.", icon: "🔒" },
  { title: "Context Aware", desc: "Reads your documents, understands your formats, learns your business logic.", icon: "🧠" },
];

export function ClaudeCowork() {
  return (
    <section className="py-32 bg-bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <div className="text-center mb-16">
            <h2 className="text-display-l font-bold mb-4">Meet Claude Cowork</h2>
            <p className="text-body-l text-text-secondary max-w-xl mx-auto">
              Your first AI employee. Powered by Anthropic's Claude. Built for your specific operations.
            </p>
          </div>
        </AnimateIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div className="border border-bg-border bg-bg-base rounded-2xl p-8 h-full hover:border-teal/30 transition-colors duration-300">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold text-text-primary mb-3">{f.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
