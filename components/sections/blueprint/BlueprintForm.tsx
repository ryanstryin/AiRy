"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

interface GuideFormState {
  name: string;
  email: string;
  company: string;
  aiStage: string;
}

const initialState: GuideFormState = {
  name: "",
  email: "",
  company: "",
  aiStage: "",
};

const aiStageOptions = [
  "Experimenting with chat tools",
  "A few automations running",
  "Agents in production, no system",
  "We need agents to find and transact with us",
];

export function BlueprintForm({ guide, showHeading = true }: { guide: string; showHeading?: boolean }) {
  const [form, setForm] = useState<GuideFormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const guideHref = `/blueprint/guides/${guide}.html`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      setStatus("error");
      setErrorMsg("Please add your name and work email.");
      return;
    }
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/blueprint-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, guide, source: "blueprint-download" }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  const fieldClass =
    "w-full bg-bg-surface border border-bg-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-teal transition-colors duration-200 text-sm";

  if (status === "success") {
    return (
      <div className="border border-teal/30 bg-teal/5 rounded-2xl p-10 text-center" role="status">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-xl font-bold text-text-primary mb-2">
          Check your inbox — the guide is on its way.
        </h3>
        <a
          href={guideHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-teal hover:text-text-primary text-sm font-medium transition-colors"
        >
          Open the guide now ↗
        </a>
      </div>
    );
  }

  return (
    <div className="border border-bg-border bg-bg-surface/50 rounded-2xl p-6 md:p-8">
      {showHeading && (
        <>
          <h3 className="text-xl font-bold text-text-primary mb-1">Get the guide</h3>
          <p className="text-text-secondary text-sm mb-6">
            We&apos;ll email you the link now, plus one short follow-up. No newsletters unless you ask.
          </p>
        </>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor={`bp-name-${guide}`} className="block text-sm text-text-secondary mb-1.5">
              Full Name *
            </label>
            <input
              id={`bp-name-${guide}`}
              name="name"
              type="text"
              required
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Smith"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor={`bp-email-${guide}`} className="block text-sm text-text-secondary mb-1.5">
              Work Email *
            </label>
            <input
              id={`bp-email-${guide}`}
              name="email"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              placeholder="jane@company.com"
              className={fieldClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor={`bp-company-${guide}`} className="block text-sm text-text-secondary mb-1.5">
              Company
            </label>
            <input
              id={`bp-company-${guide}`}
              name="company"
              type="text"
              autoComplete="organization"
              value={form.company}
              onChange={handleChange}
              placeholder="Acme Corp"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor={`bp-aiStage-${guide}`} className="block text-sm text-text-secondary mb-1.5">
              Where are you with AI today?
            </label>
            <select
              id={`bp-aiStage-${guide}`}
              name="aiStage"
              value={form.aiStage}
              onChange={handleChange}
              className={fieldClass}
            >
              <option value="">Select one</option>
              {aiStageOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
        </div>

        {status === "error" && (
          <p className="text-red-400 text-sm" role="alert">
            {errorMsg}
          </p>
        )}

        <Button
          type="submit"
          variant="primary"
          disabled={status === "loading"}
          className="w-full justify-center py-4"
        >
          {status === "loading" ? "Sending..." : "Email me the guide →"}
        </Button>
      </form>
    </div>
  );
}
