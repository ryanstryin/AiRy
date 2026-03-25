import type { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: "Case Study: Cogent Waste Solutions × AIRY Transformation",
  description:
    "How Cogent Waste Solutions built an AI-powered invoice intake system in a single AIRY Accelerator session — $25K saved in 2.5 weeks.",
};

export default function CogentCaseStudyPage() {
  return (
    <div className="bg-bg-base text-text-primary min-h-screen overflow-x-hidden">

      {/* ── HERO ── */}
      <header className="relative min-h-screen flex items-end px-6 md:px-16 pb-20 overflow-hidden pt-[68px]">
        {/* radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 60% 30%, rgba(0,196,167,0.09) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 10% 80%, rgba(0,196,167,0.04) 0%, transparent 50%)",
          }}
        />
        {/* grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,196,167,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,196,167,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-4xl">
          <AnimateIn delay={0.1}>
            <p className="flex items-center gap-4 text-[0.72rem] font-semibold tracking-[0.25em] uppercase text-teal mb-6 before:block before:w-8 before:h-px before:bg-teal">
              Case Study · Waste Management · Brooklyn, NY
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <h1 className="text-[clamp(2.8rem,6vw,5.5rem)] font-extrabold tracking-tight leading-[1.02] mb-8">
              From Paper Chaos
              <br />
              to <span className="text-teal">$25K Saved</span>
              <br />
              in 2.5 Weeks.
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.35}>
            <p className="text-lg text-text-secondary max-w-lg mb-12 font-light">
              How Cogent Waste Solutions built an AI-powered invoice intake system in a
              single AIRY Accelerator session — and transformed their back-office
              operations permanently.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.5}>
            <div className="flex flex-wrap gap-10">
              {[
                { num: "$25K", label: "Admin Cost Avoided" },
                { num: "6700+", label: "Order Sheets Processed" },
                { num: "2.5wk", label: "Time to ROI" },
                { num: "100%", label: "Compliance Maintained" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-[2.6rem] font-extrabold text-teal leading-none">
                    {s.num}
                  </div>
                  <div className="text-[0.78rem] tracking-widest uppercase text-text-secondary mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </header>

      {/* ── CONTEXT BAND ── */}
      <div className="bg-bg-surface border-t border-b border-bg-border">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { label: "Client", value: "Cogent Waste Solutions" },
            { label: "Industry", value: "Commercial Waste & Carting · Brooklyn, NY" },
            { label: "Engagement", value: "AIRY AI Accelerator — Session 1" },
            { label: "AI Fluency at Start", value: "Minimal — no prior workflow automation" },
            { label: "Primary Tool Deployed", value: "Claude Cowork + Invoice-Intake Skill" },
            { label: "Measurement Window", value: "2.5 weeks post-session" },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-[0.68rem] tracking-[0.25em] uppercase text-text-secondary mb-1">
                {item.label}
              </div>
              <div className="text-text-primary font-medium">{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-bg-border max-w-7xl mx-auto" />

      {/* ── CHALLENGE ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20">
        <p className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-teal mb-6">
          01 — The Challenge
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] font-bold tracking-tight leading-[1.1] mb-6">
              A Brooklyn carting business drowning in paper.
            </h2>
            <p className="text-text-secondary font-light leading-relaxed mb-5">
              Cogent Waste Solutions runs a high-volume commercial carting operation across
              Brooklyn. Every day, dozens of order sheets arrive — from customers, drivers,
              and dispatch — each needing to be logged, matched against client accounts, and
              filed for compliance. The back-office team was spending enormous amounts of
              time on repetitive manual intake tasks that left room for costly errors.
            </p>
            <p className="text-text-secondary font-light leading-relaxed">
              When AIRY Transformation engaged Cogent for their first AI Accelerator session,
              the goal was clear: identify the highest-friction administrative workflow and
              eliminate it — without disrupting operations or sacrificing the ticket
              compliance standards the business depends on.
            </p>
          </div>
          <ul className="flex flex-col gap-4">
            {[
              {
                icon: "⏱",
                title: "Manual data entry bottlenecks.",
                body: "Staff were hand-keying order sheet data from paper and PDFs, creating a backlog that delayed billing and client reporting.",
              },
              {
                icon: "⚠️",
                title: "Compliance risk on ticket management.",
                body: "Industry regulations require accurate, timestamped records of every order. Human error in intake created audit exposure.",
              },
              {
                icon: "📂",
                title: "No centralized intake flow.",
                body: "Order sheets arrived via multiple channels with no consistent processing path, making reconciliation a nightmare.",
              },
              {
                icon: "💸",
                title: "Hidden admin cost at scale.",
                body: "At 30–50 order sheets per day, every minute of manual processing multiplied into substantial weekly overhead costs.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="flex gap-4 items-start px-5 py-4 border-l-[3px] border-teal bg-teal/[0.04] border border-teal/10"
              >
                <span className="text-lg mt-0.5 shrink-0">{item.icon}</span>
                <p className="text-text-secondary text-sm leading-relaxed">
                  <strong className="text-text-primary font-semibold">{item.title}</strong>{" "}
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <hr className="border-bg-border max-w-7xl mx-auto" />

      {/* ── SOLUTION ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20">
        <p className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-teal mb-6">
          02 — The Solution
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] font-bold tracking-tight leading-[1.1] mb-6">
              One session. One skill. A permanent AI employee.
            </h2>
            <p className="text-text-secondary font-light leading-relaxed mb-5">
              During the inaugural AIRY AI Accelerator session, AIRY worked directly with
              the Cogent team inside Claude Cowork to diagnose the core bottleneck and design
              a bespoke <strong className="text-text-primary font-semibold">Invoice-Intake Skill</strong> — a
              structured AI workflow that could read, classify, validate, and log order sheets
              automatically.
            </p>
            <p className="text-text-secondary font-light leading-relaxed mb-5">
              The session followed the AIRY framework —{" "}
              <strong className="text-text-primary font-semibold">
                Diagnose → Deploy → Operate → Evolve
              </strong>{" "}
              — with Cogent&apos;s real order sheets used as live input from the first moment.
              By the end of the session, the team had a functioning AI operating system built
              around their actual compliance requirements and operational vocabulary.
            </p>
            <p className="text-text-secondary font-light leading-relaxed">
              The Invoice-Intake Skill became Cogent&apos;s first permanent AI employee —
              running every order sheet through a consistent, compliant, auditable workflow
              without any human re-keying.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            {[
              {
                num: "01",
                title: "DIAGNOSE — Map the friction",
                body: "Live workflow mapping inside Cowork, using real order sheets to identify exactly where time and money were leaking.",
              },
              {
                num: "02",
                title: "DEPLOY — Build the Invoice-Intake Skill",
                body: "A custom Claude Cowork skill built to Cogent's exact field structure, validation rules, and compliance log format — no generic template.",
              },
              {
                num: "03",
                title: "OPERATE — Run 850+ sheets through the system",
                body: "Staff began processing order sheets through the Cowork flow immediately post-session. Zero retraining of the system required.",
              },
              {
                num: "04",
                title: "EVOLVE — Audit, verify, and expand",
                body: "Ticket compliance held at 100% across the measurement window. Next phase: driver dispatch and billing automation.",
              },
            ].map((step) => (
              <div key={step.num} className="flex gap-6 items-start">
                <div className="shrink-0 w-9 h-9 flex items-center justify-center border border-teal/30 bg-teal/10 text-teal text-xs font-extrabold">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-teal text-sm font-bold mb-1">{step.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 pt-4 pb-20">
        <p className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-teal mb-4">
          03 — The Results
        </p>
        <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] font-bold tracking-tight leading-[1.1] mb-4">
          2.5 weeks. Measurable, verifiable, permanent.
        </h2>
        <p className="text-text-secondary font-light mb-10 max-w-2xl">
          These numbers were not projected — they were measured across 2.5 weeks of live
          production use immediately following the first AIRY session.
        </p>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-bg-border"
          style={{ gap: "1.5px", background: "rgb(30 30 48)" }}
        >
          {[
            {
              big: "$25K",
              title: "Admin Cost Avoided",
              desc: "Calculated from staff hours eliminated per order sheet processed versus the prior manual workflow rate.",
            },
            {
              big: "850+",
              title: "Order Sheets Processed",
              desc: "All processed through the Cowork Invoice-Intake flow with zero manual re-keying by admin staff.",
            },
            {
              big: "100%",
              title: "Compliance Maintained",
              desc: "Every ticket logged, timestamped, and filed to regulatory standard. Zero compliance events in the window.",
            },
            {
              big: "2.5wk",
              title: "Time to Measurable ROI",
              desc: "From session day to documented cost savings — one of the fastest ROI timelines in AIRY program history.",
            },
            {
              big: "1 day",
              title: "Session to Production",
              desc: "The Invoice-Intake Skill was live and processing real order sheets the day after the Accelerator session ended.",
            },
            {
              big: "0",
              title: "Additional Headcount Needed",
              desc: "Volume scaled significantly without adding staff. The AI employee absorbed the entire intake workload increase.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="relative bg-bg-surface px-8 py-10 overflow-hidden group hover:bg-[#141422] transition-colors duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal to-transparent" />
              <div className="text-[3rem] font-extrabold text-teal leading-none mb-2">
                {card.big}
              </div>
              <div className="text-[0.8rem] font-bold tracking-widest uppercase text-text-primary mb-2">
                {card.title}
              </div>
              <p className="text-text-secondary text-[0.85rem] leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUOTE ── */}
      <div className="bg-bg-surface border-t border-b border-bg-border">
        <div className="max-w-3xl mx-auto px-6 md:px-16 py-20 text-center">
          <blockquote className="relative text-[clamp(1.4rem,2.8vw,2.1rem)] font-bold leading-[1.35] tracking-tight text-text-primary px-8">
            <span
              className="absolute -top-2 -left-2 text-[5rem] text-teal/40 font-serif leading-none select-none"
              aria-hidden
            >
              &ldquo;
            </span>
            We processed over 6700 order sheets through the system in under three weeks and
            saved $25,000 in admin overhead — while actually improving our compliance
            record. This isn&apos;t a tool. It&apos;s how we run the business now.
          </blockquote>
          <p className="mt-8 text-[0.8rem] tracking-[0.15em] uppercase text-text-secondary">
            — Nino Tristani · Owner · Cogent Waste Solutions · Brooklyn, NY
          </p>
        </div>
      </div>

      {/* ── TIMELINE ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20">
        <p className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-teal mb-6">
          04 — How It Happened
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] font-bold tracking-tight leading-[1.1] mb-6">
              From single session to permanent infrastructure.
            </h2>
            <p className="text-text-secondary font-light leading-relaxed mb-5">
              The speed of this result reflects the AIRY Accelerator&apos;s core design
              philosophy: build with real data, in real workflows, on day one. No sandbox
              demos. No theoretical frameworks. Cogent&apos;s actual order sheets went
              through the skill before the session ended.
            </p>
            <p className="text-text-secondary font-light leading-relaxed">
              The Invoice-Intake Skill now functions as a permanent piece of Cogent&apos;s
              operational infrastructure — not a project that required ongoing consultant
              involvement, but a system the team owns and runs independently.
            </p>
          </div>
          <div className="relative pl-10 border-l border-bg-border flex flex-col gap-10">
            {[
              {
                date: "Day 1 — Session",
                title: "AIRY AI Accelerator — Session 1",
                desc: "Workflow diagnosis, Invoice-Intake Skill built, first live order sheets processed inside Claude Cowork.",
              },
              {
                date: "Day 2",
                title: "Production Go-Live",
                desc: "Cogent staff begin processing all incoming order sheets through the Cowork flow. No manual re-keying from this point forward.",
              },
              {
                date: "Week 1",
                title: "3000+ Sheets Processed",
                desc: "Early volume confirms the skill handles field variation, edge cases, and compliance flags without human intervention.",
              },
              {
                date: "Week 2",
                title: "$10K+ Cost Avoidance Logged",
                desc: "Admin hours tracked against prior baseline confirm measurable savings are accumulating at scale.",
              },
              {
                date: "Day 17 — 2.5 Weeks",
                title: "$25K Saved · 6700+ Sheets · 100% Compliance",
                desc: "Measurement milestone confirmed. Case study data locked. Phase 2 scoping begins: driver dispatch automation.",
              },
            ].map((item) => (
              <div key={item.date} className="relative">
                {/* diamond dot */}
                <div className="absolute -left-[2.55rem] top-[0.35rem] w-[0.6rem] h-[0.6rem] bg-teal rotate-45" />
                <p className="text-[0.72rem] tracking-[0.2em] uppercase text-teal mb-1">
                  {item.date}
                </p>
                <p className="text-sm font-bold text-text-primary mb-1">{item.title}</p>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="relative text-center px-6 py-28 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(0,196,167,0.07) 0%, transparent 70%)",
          }}
        />
        <p className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-teal mb-6">
          Ready to Build Your AI Employee?
        </p>
        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight max-w-2xl mx-auto mb-6">
          Your business has a $25,000 problem waiting to be solved.
        </h2>
        <p className="text-text-secondary max-w-md mx-auto mb-10 font-light">
          The AIRY AI Accelerator is a single intensive session that builds a permanent AI
          operating system around your real workflows — not demos, not theory. Real outputs,
          real savings, real fast.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/accelerator"
            className="inline-flex items-center gap-3 px-8 py-4 bg-teal text-bg-base font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-opacity duration-200"
          >
            Start the Accelerator →
          </Link>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-3 px-8 py-4 border border-text-primary/25 text-text-secondary font-semibold text-sm tracking-widest uppercase hover:border-teal hover:text-teal transition-colors duration-200"
          >
            See More Results
          </Link>
        </div>
      </div>

    </div>
  );
}
