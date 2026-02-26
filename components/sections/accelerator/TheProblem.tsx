import { AnimateIn } from "@/components/ui/AnimateIn";

const points = [
  { label: "THE BOTTLENECK", text: "Hours wasted on manual data entry, dirty documents, and repetitive workflows.", highlight: false },
  { label: "THE COST", text: "Billing disputes. Lost revenue. Human error at scale.", highlight: false },
  { label: "THE REALITY", text: "You are paying humans to do robot work.", highlight: true },
];

export function TheProblem() {
  return (
    <section className="py-32 bg-bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <h2 className="text-display-l font-bold text-center mb-16">The Manual Entry Trap</h2>
        </AnimateIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div className={`border rounded-2xl p-8 h-full ${p.highlight ? "border-teal/30 bg-teal/5" : "border-bg-border bg-bg-base"}`}>
                <p className="text-xs font-bold uppercase tracking-widest text-text-tertiary mb-4">{p.label}</p>
                <p className={`text-lg font-semibold leading-snug ${p.highlight ? "text-teal" : "text-text-secondary"}`}>{p.text}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
