import { AnimateIn } from "@/components/ui/AnimateIn";
import { faq } from "@/content/blueprint/parent";

export function BlueprintFAQ() {
  return (
    <section id="faq" className="py-32 bg-bg-base" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-6">
        <AnimateIn>
          <p className="text-teal text-sm font-medium tracking-widest uppercase mb-4 text-center">FAQ</p>
          <h2 id="faq-heading" className="text-display-l font-bold text-center mb-12">
            {faq.heading}
          </h2>
        </AnimateIn>

        <div className="flex flex-col gap-3">
          {faq.items.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-bg-border bg-bg-surface open:border-purple/40 transition-colors duration-200"
            >
              <summary className="flex items-center justify-between gap-6 cursor-pointer list-none p-6 font-semibold text-text-primary rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <span
                  className="flex-none w-6 h-6 rounded-full border border-bg-border flex items-center justify-center text-teal transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="px-6 pb-6 -mt-2 text-text-secondary leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
