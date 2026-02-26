import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";

export function ROISection() {
  return (
    <section className="py-32 bg-bg-surface">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimateIn>
          <h2 className="text-display-l font-bold mb-4">ROI in &lt; 1 Month.</h2>
          <p className="text-body-l text-text-secondary mb-16">
            The cost of manual errors and labor dwarfs the cost of a Digital Dispatcher.
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <div className="flex items-end justify-center gap-12 mb-8 h-48">
            <div className="flex flex-col items-center gap-3">
              <div className="w-24 bg-red-500/40 border border-red-500/30 rounded-t-lg" style={{ height: "160px" }} />
              <p className="text-xs text-text-secondary text-center">Cost of Errors<br />& Manual Entry</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-24 bg-teal/40 border border-teal/30 rounded-t-lg" style={{ height: "80px" }} />
              <p className="text-xs text-text-secondary text-center">Cost of Digital<br />Dispatcher</p>
            </div>
          </div>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <div className="border border-teal/20 bg-teal/5 rounded-2xl p-8 mb-8">
            <p className="text-2xl font-bold text-text-primary mb-2">Stop Typing. Start Dispatching.</p>
            <p className="text-text-secondary">Don't hire more clerks. Build your Digital Dispatcher.</p>
          </div>
          <Button href="#intake" variant="primary" className="text-base px-8 py-4">
            Schedule Your 2-Day Sprint Today →
          </Button>
        </AnimateIn>
      </div>
    </section>
  );
}
