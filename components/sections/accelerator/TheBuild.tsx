import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";

export function TheBuild() {
  return (
    <section className="py-32 bg-bg-base">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <h2 className="text-display-l font-bold text-center mb-16">The Build: 2-Day Sprint</h2>
        </AnimateIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <AnimateIn delay={0.1}>
            <div className="border border-bg-border bg-bg-surface rounded-2xl p-8">
              <p className="text-sm font-semibold text-teal uppercase tracking-wider mb-6">Done-With-You Implementation</p>
              <p className="text-text-secondary text-sm mb-8">We map formats. We code the skills. We install the Bridge.</p>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-teal flex items-center justify-center text-bg-base font-bold text-sm flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-text-primary">Day 1: Mapping</h4>
                    <p className="text-sm text-text-secondary mt-1">We audit your documents, map your data formats, and define the agent's skill set.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-teal flex items-center justify-center text-bg-base font-bold text-sm flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-text-primary">Day 2: Deployment</h4>
                    <p className="text-sm text-text-secondary mt-1">We install the Headless Mac Bridge, deploy Claude Cowork, and run live tests with your real documents.</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="border border-teal/30 bg-teal/5 rounded-2xl p-8 text-center">
              <p className="text-sm text-text-secondary uppercase tracking-wider mb-6">Investment</p>
              <div className="mb-2">
                <span className="text-6xl font-bold text-teal">$2,000</span>
              </div>
              <p className="text-text-secondary mb-6">One-time setup fee</p>
              <div className="border-t border-teal/20 pt-6 mb-6">
                <span className="text-3xl font-bold text-text-primary">$200</span>
                <span className="text-text-secondary">/month</span>
                <p className="text-sm text-text-secondary mt-2">Ongoing maintenance retainer</p>
              </div>
              <ul className="text-left space-y-2 mb-8 text-sm text-text-secondary">
                <li className="flex gap-2"><span className="text-teal">✓</span> Monthly skill updates</li>
                <li className="flex gap-2"><span className="text-teal">✓</span> Security patches for the Bridge</li>
                <li className="flex gap-2"><span className="text-teal">✓</span> 99.9% accuracy monitoring</li>
                <li className="flex gap-2"><span className="text-teal">✓</span> Monthly health check</li>
              </ul>
              <p className="text-xs text-text-tertiary italic mb-6">
                "Think of it as continuing education for your digital employee."
              </p>
              <Button href="#intake" variant="primary" className="w-full justify-center">
                Schedule Your 2-Day Sprint →
              </Button>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
