import { AnimateIn } from "@/components/ui/AnimateIn";

const quotes = [
  {
    text: "We spent 9 months exploring 'AI solutions.' AIRY delivered an agentic accountant in 3 weeks.",
    author: "CFO, Manufacturing Firm",
    detail: "85 Employees",
  },
  {
    text: "AgentSpeak.io finally gave our 14 disparate AI initiatives a common language and governance framework.",
    author: "Head of Innovation",
    detail: "Global Logistics Firm",
  },
];

const stats = [
  { value: "65%", label: "Faster data processing", sub: "Gaming client with custom AI agents" },
  { value: "$250K", label: "Saved per year", sub: "Cannabis client — automated inventory" },
];

export function Testimonials() {
  return (
    <section className="py-32 bg-bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <h2 className="text-display-l font-bold text-center mb-16">Real Results for Real Businesses</h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {quotes.map((q, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div className="border border-bg-border rounded-2xl p-8 bg-bg-base h-full">
                <p className="text-body-l text-text-primary leading-relaxed mb-6">"{q.text}"</p>
                <div>
                  <p className="text-sm font-semibold text-text-primary">— {q.author}</p>
                  <p className="text-sm text-text-secondary">{q.detail}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stats.map((s, i) => (
            <AnimateIn key={i} delay={0.2 + i * 0.1}>
              <div className="border border-teal/20 bg-teal/5 rounded-2xl p-8 text-center">
                <p className="text-5xl font-bold text-teal mb-2">{s.value}</p>
                <p className="text-lg font-semibold text-text-primary mb-1">{s.label}</p>
                <p className="text-sm text-text-secondary">{s.sub}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
