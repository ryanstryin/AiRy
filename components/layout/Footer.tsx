import Link from "next/link";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ryanpitcheralle/" },
  { label: "Instagram", href: "https://www.instagram.com/ryanstryin/" },
  { label: "YouTube", href: "https://www.youtube.com/@RyanPitcheralle" },
];

export function Footer() {
  return (
    <footer className="border-t border-bg-border bg-bg-base">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-teal">AIRY</span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Deployed Intelligence. Not speculation. Not strategy documents. Operating systems.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-tertiary hover:text-teal text-sm transition-colors duration-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-text-primary font-semibold mb-4 text-sm uppercase tracking-wider">Products</h3>
            <ul className="space-y-3">
              <li><Link href="/accelerator" className="text-text-secondary hover:text-teal text-sm transition-colors">AI Accelerator</Link></li>
              <li><a href="https://agentspeak.io" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-teal text-sm transition-colors">AgentSpeak.io ↗</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-text-primary font-semibold mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-text-secondary hover:text-teal text-sm transition-colors">About</Link></li>
              <li><Link href="/case-studies" className="text-text-secondary hover:text-teal text-sm transition-colors">Case Studies</Link></li>
              <li><Link href="/contact" className="text-text-secondary hover:text-teal text-sm transition-colors">Contact</Link></li>
              <li><a href="mailto:support@airytransformation.com" className="text-text-secondary hover:text-teal text-sm transition-colors">support@airytransformation.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-bg-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-tertiary text-xs">© 2026 AIRY. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-text-tertiary hover:text-text-secondary text-xs transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-text-tertiary hover:text-text-secondary text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
