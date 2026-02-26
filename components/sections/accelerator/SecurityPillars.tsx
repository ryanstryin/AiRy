import { AnimateIn } from "@/components/ui/AnimateIn";

const pillars = [
  { icon: "📍", title: "Local Processing", desc: "Data never leaves your premise. The AI runs on a dedicated machine in your office — not in the cloud." },
  { icon: "🛡️", title: "SOC 2 Type II", desc: "Built on Anthropic's certified infrastructure. Enterprise-grade compliance without the enterprise price tag." },
  { icon: "🗑️", title: "Zero Retention", desc: "No customer data used for training. No storage after processing. What you process stays yours." },
];

export function SecurityPillars() {
  return (
    <section className="py-32 bg-bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <h2 className="text-display-l font-bold text-center mb-4">Enterprise-Grade Security</h2>
          <p className="text-body-l text-text-secondary text-center max-w-xl mx-auto mb-16">
            Built for businesses that can't afford a breach.
          </p>
        </AnimateIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div className="border border-bg-border bg-bg-base rounded-2xl p-8 text-center hover:border-teal/30 hover:shadow-[0_0_30px_rgba(0,196,167,0.08)] transition-all duration-300">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-lg font-bold text-text-primary mb-3">{p.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{p.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
