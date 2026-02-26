import { Button } from "@/components/ui/Button";
import { WordReveal } from "@/components/ui/WordReveal";

export function AcceleratorHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden dot-grid pt-[68px]">
      <div
        className="absolute inset-0 opacity-25 animate-aurora"
        style={{
          background: "linear-gradient(135deg, #00C4A7 0%, #08080E 50%, #00C4A7 100%)",
          backgroundSize: "300% 300%",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-teal text-sm font-medium tracking-widest uppercase mb-6 opacity-80">
          AIRY AI Accelerator — Claude Cowork
        </p>
        <h1 className="text-display-xl font-bold mb-6">
          <WordReveal
            text="Stop Renting Software. Start Owning Labor."
            accentWords={["Owning", "Labor."]}
          />
        </h1>
        <p className="text-body-l text-text-secondary max-w-2xl mx-auto mb-10">
          A secure, on-premise AI employee that works 24/7 — deployed in 2 days. Not a chatbot. Not a SaaS subscription. A digital worker built for your operations.
        </p>
        <Button href="#intake" variant="primary" className="text-base px-8 py-4">
          Build My AI Employee →
        </Button>
      </div>
    </section>
  );
}
