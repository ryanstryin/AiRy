"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const columnLabels = {
  traditional: "Traditional AI Consulting",
  airy: "AIRY",
};

const rows = [
  { label: "Delivery", traditional: "Open-ended strategy decks", airy: "Defined products: AgentSpeak.io or AI Accelerator" },
  { label: "Outcome", traditional: "Recommendations", airy: "Deployed, functioning agentic systems" },
  { label: "Timeline", traditional: 'Months to "insights"', airy: "Weeks to live operations" },
  { label: "Expertise", traditional: '"AI experts"', airy: "Agentic systems architects" },
  { label: "Ongoing Value", traditional: "Retainer for advice", airy: "Protocol updates or agent management" },
];

export function DifferentiatorTable() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-bg-base" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-l font-bold mb-4">Why AIRY Isn't Another AI Consultancy</h2>
        </motion.div>

        {/* Desktop / tablet: three-column table */}
        <div className="hidden md:block border border-bg-border rounded-2xl overflow-hidden">
          <div className="grid grid-cols-3 bg-bg-surface px-6 py-4">
            <div />
            <div className="text-sm text-text-tertiary uppercase tracking-wider">{columnLabels.traditional}</div>
            <div className="text-sm text-teal uppercase tracking-wider font-semibold">{columnLabels.airy}</div>
          </div>

          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="grid grid-cols-3 px-6 py-5 border-t border-bg-border hover:bg-bg-surface/50 transition-colors"
            >
              <div className="text-sm font-semibold text-text-primary">{row.label}</div>
              <div className="text-sm text-text-secondary pr-4">{row.traditional}</div>
              <div className="text-sm text-text-primary font-medium">{row.airy}</div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: one stacked card per row */}
        <div className="md:hidden space-y-4">
          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="border border-bg-border rounded-2xl bg-bg-surface/40 p-5"
            >
              <h3 className="text-base font-semibold text-text-primary mb-4">{row.label}</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-[11px] text-text-tertiary uppercase tracking-wider mb-1">
                    {columnLabels.traditional}
                  </p>
                  <p className="text-sm text-text-secondary">{row.traditional}</p>
                </div>
                <div>
                  <p className="text-[11px] text-teal uppercase tracking-wider font-semibold mb-1">
                    {columnLabels.airy}
                  </p>
                  <p className="text-sm text-text-primary font-medium">{row.airy}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
