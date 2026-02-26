import { AnimateIn } from "@/components/ui/AnimateIn";

export function ParadigmShift() {
  return (
    <section className="py-32 bg-bg-base">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <h2 className="text-display-l font-bold text-center mb-16">The Paradigm Shift</h2>
        </AnimateIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimateIn delay={0.1}>
            <div className="border border-bg-border rounded-2xl p-8 opacity-70">
              <p className="text-xs uppercase tracking-wider text-text-tertiary mb-4">The Old Way: Renting SaaS</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><span className="text-text-tertiary mt-0.5">✗</span><span className="text-text-secondary">Monthly subscriptions that scale with headcount</span></li>
                <li className="flex items-start gap-3"><span className="text-text-tertiary mt-0.5">✗</span><span className="text-text-secondary">Requires human labor to operate the software</span></li>
                <li className="flex items-start gap-3"><span className="text-text-tertiary mt-0.5">✗</span><span className="text-text-secondary">You pay forever, own nothing</span></li>
              </ul>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="border border-teal/30 bg-teal/5 rounded-2xl p-8">
              <p className="text-xs uppercase tracking-wider text-teal mb-4">The New Way: Owning AI</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><span className="text-teal mt-0.5">✓</span><span className="text-text-primary font-medium">One-time build. You own it.</span></li>
                <li className="flex items-start gap-3"><span className="text-teal mt-0.5">✓</span><span className="text-text-primary font-medium">The software IS the worker</span></li>
                <li className="flex items-start gap-3"><span className="text-teal mt-0.5">✓</span><span className="text-text-primary font-medium">No fatigue. No typos. No sick days.</span></li>
              </ul>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
