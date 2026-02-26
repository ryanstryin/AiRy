import { AnimateIn } from "@/components/ui/AnimateIn";

const leftPath = [
  "AI Speculation",
  "Chat Interfaces",
  "Pilot Projects",
  "Stalled Transformation",
];

const rightPath = [
  "Agentic Strategy",
  "AIRY Implementation",
  "Deployed Operations",
  "Scaled Intelligence",
];

export function ProblemStatement() {
  return (
    <section className="py-32 bg-bg-base">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimateIn>
            <p className="text-display-m font-semibold leading-snug text-text-primary">
              "Most businesses are stuck between{" "}
              <span className="text-text-secondary">speculation</span> and{" "}
              <span className="text-teal">deployment.</span>"
            </p>
            <p className="mt-6 text-body-l text-text-secondary">
              They've tried chatbots. They've attended webinars. They have the AI anxiety but not
              the AI advantage. The missing piece isn't more technology — it's the operating layer.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-bg-border rounded-xl p-4">
                <p className="text-xs uppercase tracking-wider text-text-tertiary mb-4">The Stuck Path</p>
                <div className="flex flex-col gap-2">
                  {leftPath.map((step, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-text-tertiary flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-teal/20 bg-teal/5 rounded-xl p-4">
                <p className="text-xs uppercase tracking-wider text-teal mb-4">The AIRY Path</p>
                <div className="flex flex-col gap-2">
                  {rightPath.map((step, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                      <span className="text-sm text-text-primary font-medium">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
