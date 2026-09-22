import { AnimateIn } from "@/components/ui/AnimateIn";
import { beliefs } from "@/content/blueprint/parent";

export function Beliefs() {
  return (
    <section className="py-32 bg-bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <p className="text-teal text-sm font-medium tracking-widest uppercase mb-4 text-center">{beliefs.eyebrow}</p>
          <h2 className="text-display-l font-bold text-center mb-16 max-w-3xl mx-auto">{beliefs.heading}</h2>
        </AnimateIn>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {beliefs.items.map((item, i) => (
            <li key={item.number}>
              <AnimateIn delay={(i % 3) * 0.1} className="h-full">
                <div className="border border-bg-border bg-bg-base rounded-2xl p-8 h-full hover:border-purple/40 transition-colors duration-200">
                  <p className="text-purple font-bold text-sm tabular-nums mb-4">{item.number}</p>
                  <h3 className="text-xl font-bold text-text-primary mb-2">{item.belief}</h3>
                  <p className="text-text-secondary leading-relaxed">{item.line}</p>
                </div>
              </AnimateIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
