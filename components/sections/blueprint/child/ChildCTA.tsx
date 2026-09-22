import { Button } from "@/components/ui/Button";

export function ChildCTA({ slug }: { slug: string }) {
  return (
    <section className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 animate-aurora"
        style={{
          background: "linear-gradient(135deg, #7C3AED 0%, #08080E 50%, #00C4A7 100%)",
          backgroundSize: "300% 300%",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-display-l font-bold mb-10">Your weakest layer is where we start.</h2>
        <Button href={`/contact?path=agentops&source=blueprint-${slug}`}>
          Book an AgentOps Briefing →
        </Button>
      </div>
    </section>
  );
}
