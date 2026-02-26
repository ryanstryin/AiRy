import type { Metadata } from "next";
import { AcceleratorHero } from "@/components/sections/accelerator/AcceleratorHero";
import { TheProblem } from "@/components/sections/accelerator/TheProblem";
import { ParadigmShift } from "@/components/sections/accelerator/ParadigmShift";
import { ClaudeCowork } from "@/components/sections/accelerator/ClaudeCowork";
import { HowItWorks } from "@/components/sections/accelerator/HowItWorks";
import { SecurityPillars } from "@/components/sections/accelerator/SecurityPillars";
import { TheBuild } from "@/components/sections/accelerator/TheBuild";
import { ROISection } from "@/components/sections/accelerator/ROISection";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "AIRY AI Accelerator — Stop Renting Software. Start Owning Labor.",
  description:
    "Deploy Claude Cowork — a secure, on-premise AI employee — in a 2-day sprint for $2,000. Built for small businesses ready to move from AI chat to AI operations.",
};

export default function AcceleratorPage() {
  return (
    <main>
      <AcceleratorHero />
      <TheProblem />
      <ParadigmShift />
      <ClaudeCowork />
      <HowItWorks />
      <SecurityPillars />
      <TheBuild />
      <ROISection />

      <section id="intake" className="py-32 bg-bg-base">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-display-m font-bold mb-4">Ready to Build Your AI Employee?</h2>
            <p className="text-text-secondary">Tell us about your operation. We'll respond within 24 hours.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
