import type { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact AIRY — Start Your Agentic Transformation",
  description: "Talk to an agentic systems architect. We respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <main className="pt-[68px]">
      <section className="py-32 bg-bg-base">
        <div className="max-w-2xl mx-auto px-6">
          <AnimateIn>
            <div className="text-center mb-12">
              <p className="text-teal text-sm font-medium tracking-widest uppercase mb-4">Get In Touch</p>
              <h1 className="text-display-l font-bold mb-4">Start Your Transformation</h1>
              <p className="text-body-l text-text-secondary">
                Tell us where you are. We'll tell you exactly what to build. Response within 24 hours.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <ContactForm />
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div className="mt-12 text-center">
              <p className="text-text-tertiary text-sm">
                Or email directly:{" "}
                <a href="mailto:support@airytransformation.com" className="text-teal hover:underline">
                  support@airytransformation.com
                </a>
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
