import { AnimateIn } from "@/components/ui/AnimateIn";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { agentOps } from "@/content/blueprint/parent";

export function AgentOpsPartner() {
  const { comparison, fractional } = agentOps;

  return (
    <section id="agent-operations-partner" className="relative py-32 bg-bg-surface overflow-hidden scroll-mt-20">
      <div
        className="absolute inset-x-0 top-0 h-[480px] opacity-40 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.25), transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <AnimateIn>
          <div className="max-w-4xl">
            <Badge variant="purple" className="mb-6 uppercase tracking-widest">{agentOps.eyebrow}</Badge>
            <h2 className="text-display-l font-bold mb-6 text-balance">{agentOps.heading}</h2>
            <p className="text-body-l text-text-primary mb-4">{agentOps.lead}</p>
            <p className="text-text-secondary leading-relaxed">{agentOps.body}</p>
          </div>
        </AnimateIn>

        {/* Roles */}
        <AnimateIn delay={0.1}>
          <h3 className="text-xl font-bold mt-16 mb-6">{agentOps.rolesHeading}</h3>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {agentOps.roles.map((r) => (
              <div key={r.role} className="rounded-2xl border border-purple/20 bg-bg-base p-6">
                <dt className="text-purple font-bold mb-2">{r.role}</dt>
                <dd className="text-sm text-text-secondary leading-relaxed">{r.meaning}</dd>
              </div>
            ))}
          </dl>
        </AnimateIn>

        {/* Comparison */}
        <AnimateIn delay={0.1}>
          {/* Mobile: one card per comparison row, column header as the label above each value. */}
          <ul className="md:hidden mt-16 space-y-4">
            {comparison.rows.map((row, r) => (
              <li key={r} className="rounded-2xl border border-bg-border bg-bg-base p-6">
                <dl className="space-y-4">
                  {row.map((cell, i) => (
                    <div
                      key={i}
                      className={i === 2 ? "rounded-xl border border-purple/20 bg-purple/5 p-4 -mx-1" : ""}
                    >
                      <dt className="text-[11px] font-semibold uppercase tracking-wider text-text-tertiary mb-1">
                        {comparison.columns[i]}
                      </dt>
                      <dd className={`text-sm ${i === 2 ? "text-text-primary font-medium" : "text-text-secondary"}`}>
                        {cell}
                      </dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ul>

          <div className="hidden md:block mt-16 overflow-x-auto rounded-2xl border border-bg-border">
            <table className="w-full min-w-[640px] text-left text-sm">
              <caption className="sr-only">How an Agent Operations Partner compares with an agency and a consultant</caption>
              <thead>
                <tr className="border-b border-bg-border">
                  {comparison.columns.map((c, i) => (
                    <th
                      key={c}
                      scope="col"
                      className={`p-5 font-semibold ${
                        i === 2 ? "bg-purple/10 text-text-primary" : "bg-bg-base text-text-tertiary"
                      }`}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row, r) => (
                  <tr key={r} className="border-b border-bg-border last:border-0">
                    {row.map((cell, i) => (
                      <td
                        key={i}
                        className={`p-5 ${i === 2 ? "bg-purple/5 text-text-primary font-medium" : "text-text-secondary"}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateIn>

        <div className="mt-10">
          <Button href={agentOps.cta.href} variant="primary" className="text-base px-8 py-4">
            {agentOps.cta.label}
          </Button>
        </div>

        {/* Fractional roles */}
        <AnimateIn delay={0.1}>
          <div className="mt-24 max-w-3xl">
            <h3 className="text-display-m font-bold mb-4">{fractional.heading}</h3>
            <p className="text-text-secondary leading-relaxed">{fractional.body}</p>
          </div>
          {/* Mobile: one card per fractional role, column header as the label above each value. */}
          <ul className="md:hidden mt-10 space-y-4">
            {fractional.rows.map((row) => (
              <li key={row.role} className="rounded-2xl border border-bg-border bg-bg-base p-6">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-text-tertiary mb-1">
                  {fractional.columns[0]}
                </p>
                <h4 className="text-base font-semibold text-text-primary mb-4">{row.role}</h4>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-wider text-text-tertiary mb-1">
                      {fractional.columns[1]}
                    </dt>
                    <dd className="text-sm text-purple font-medium">{row.layer}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-wider text-text-tertiary mb-1">
                      {fractional.columns[2]}
                    </dt>
                    <dd className="text-sm text-text-secondary">{row.outcome}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>

          <div className="hidden md:block mt-10 overflow-x-auto rounded-2xl border border-bg-border">
            <table className="w-full min-w-[640px] text-left text-sm">
              <caption className="sr-only">Fractional roles, the layers they own and example outcomes</caption>
              <thead className="bg-bg-base">
                <tr className="border-b border-bg-border">
                  {fractional.columns.map((c) => (
                    <th key={c} scope="col" className="p-5 font-semibold text-text-tertiary">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {fractional.rows.map((row) => (
                  <tr key={row.role} className="border-b border-bg-border last:border-0">
                    <th scope="row" className="p-5 font-semibold text-text-primary">
                      {row.role}
                    </th>
                    <td className="p-5 text-purple font-medium">{row.layer}</td>
                    <td className="p-5 text-text-secondary">{row.outcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-text-secondary">{fractional.note}</p>
        </AnimateIn>
      </div>
    </section>
  );
}
