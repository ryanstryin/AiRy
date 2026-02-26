import { AnimateIn } from "@/components/ui/AnimateIn";

const steps = [
  { label: "THE DROP", title: "Drop the file.", desc: "Dispatcher drags scanned documents to a local folder on the Windows network share." },
  { label: "THE PROCESS", title: "AI reads it.", desc: "Claude Cowork reads (OCR), validates, cross-references, and formats the data. Zero human input." },
  { label: "THE RESULT", title: "System updated.", desc: "Your ERP or database updates automatically. Zero typing. Zero errors." },
];

export function HowItWorks() {
  return (
    <section className="py-32 bg-bg-base">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <h2 className="text-display-l font-bold text-center mb-16">A Seamless Workflow</h2>
        </AnimateIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step, i) => (
            <AnimateIn key={i} delay={i * 0.15}>
              <div className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-3 text-teal text-xl z-10">→</div>
                )}
                <div className="border border-teal/20 bg-teal/5 rounded-2xl p-8 h-full">
                  <p className="text-xs font-bold uppercase tracking-widest text-teal mb-4">{step.label}</p>
                  <h3 className="text-xl font-bold text-text-primary mb-3">{step.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
