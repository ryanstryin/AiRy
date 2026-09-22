"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

interface FormState {
  name: string;
  email: string;
  company: string;
  employees: string;
  bottleneck: string;
  message: string;
  path: string;
  aiStage: string;
  layer: string;
  source: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  employees: "",
  bottleneck: "",
  message: "",
  path: "",
  aiStage: "",
  layer: "",
  source: "contact",
};

const pathOptions = [
  { value: "accelerator", label: "AI Accelerator" },
  { value: "agentops", label: "AgentOps Partner" },
  { value: "enterprise", label: "Enterprise (AgentSpeak.io)" },
  { value: "general", label: "Not sure yet" },
];

const aiStageOptions = [
  "Experimenting with chat tools",
  "A few automations running",
  "Agents in production, no system",
  "We need agents to find and transact with us",
];

const layerOptions = [
  "Shared brain",
  "Workflows",
  "Authority content",
  "Growth engine",
  "Visibility",
  "Not sure",
];

const SOURCE_PATTERN = /^[a-z0-9-]{1,100}$/i;

/** Reads ?path= and ?source= from the URL (client only; avoids a Suspense boundary). */
function readQueryPrefill(): Partial<Pick<FormState, "path" | "source">> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const prefill: Partial<Pick<FormState, "path" | "source">> = {};
  const path = params.get("path");
  if (path && pathOptions.some((o) => o.value === path)) prefill.path = path;
  const source = params.get("source");
  if (source && SOURCE_PATTERN.test(source)) prefill.source = source;
  return prefill;
}

const bottleneckOptions = [
  "Data Entry & Document Processing",
  "Reporting & Analytics",
  "Customer Communications",
  "Workflow Automation",
  "Other",
];

const employeeOptions = ["1–10", "11–50", "51–250", "250+"];

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const prefill = readQueryPrefill();
    if (prefill.path || prefill.source) {
      setForm((prev) => ({ ...prev, ...prefill }));
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setForm((prev) => ({ ...initialState, path: prev.path, source: prev.source }));
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  const fieldClass =
    "w-full bg-bg-surface border border-bg-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-teal transition-colors duration-200 text-sm";

  if (status === "success") {
    return (
      <div className="border border-teal/30 bg-teal/5 rounded-2xl p-10 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-xl font-bold text-text-primary mb-2">Message Received</h3>
        <p className="text-text-secondary">We'll be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <input type="hidden" name="source" value={form.source} />

      <div>
        <label htmlFor="path" className="block text-sm text-text-secondary mb-1.5">
          What are you interested in?
        </label>
        <select
          id="path"
          name="path"
          value={form.path}
          onChange={handleChange}
          className={fieldClass}
        >
          <option value="">Select one</option>
          {pathOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm text-text-secondary mb-1.5">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-text-secondary mb-1.5">
            Work Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@company.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="company" className="block text-sm text-text-secondary mb-1.5">
            Company *
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            value={form.company}
            onChange={handleChange}
            placeholder="Acme Corp"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="employees" className="block text-sm text-text-secondary mb-1.5">
            Employees
          </label>
          <select
            id="employees"
            name="employees"
            value={form.employees}
            onChange={handleChange}
            className={fieldClass}
          >
            <option value="">Select range</option>
            {employeeOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="bottleneck" className="block text-sm text-text-secondary mb-1.5">
          Biggest operational bottleneck
        </label>
        <select
          id="bottleneck"
          name="bottleneck"
          value={form.bottleneck}
          onChange={handleChange}
          className={fieldClass}
        >
          <option value="">Select one</option>
          {bottleneckOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="aiStage" className="block text-sm text-text-secondary mb-1.5">
            Where is AI today?
          </label>
          <select
            id="aiStage"
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
        <div>
          <label htmlFor="layer" className="block text-sm text-text-secondary mb-1.5">
            Which layer hurts most?
          </label>
          <select
            id="layer"
            name="layer"
            value={form.layer}
            onChange={handleChange}
            className={fieldClass}
          >
            <option value="">Select one</option>
            {layerOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-text-secondary mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us what you're working on..."
          className={`${fieldClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm">{errorMsg}</p>
      )}

      <Button
        type="submit"
        variant="primary"
        disabled={status === "loading"}
        className="w-full justify-center py-4"
      >
        {status === "loading" ? "Sending..." : "Send Message →"}
      </Button>
    </form>
  );
}
