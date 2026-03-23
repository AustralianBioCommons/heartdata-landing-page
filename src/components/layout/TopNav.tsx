import { useState } from "react";
import MaterialIcon from "../ui/MaterialIcon";

const navLinks = [
  { label: "Research", href: "#research" },
  { label: "Cohorts", href: "#cohorts" },
  { label: "Data Commons", href: "https://commons.heartdata.baker.edu.au", external: true },
  { label: "Governance", href: "#governance" },
];

export default function TopNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-outline-light shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <a href="#" className="text-xl font-bold tracking-tight text-primary font-headline">
            ACDC
          </a>
          {/* Desktop links */}
          <div className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener" : undefined}
                className="text-on-surface-variant font-medium text-sm font-headline tracking-tight hover:text-primary transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://commons.heartdata.baker.edu.au"
            target="_blank"
            rel="noopener"
            className="hidden sm:inline-block px-4 py-1.5 text-sm font-semibold text-primary hover:bg-surface-alt rounded transition-colors duration-150"
          >
            Login
          </a>
          <a
            href="https://commons.heartdata.baker.edu.au"
            target="_blank"
            rel="noopener"
            className="hidden sm:inline-block px-5 py-1.5 bg-primary text-on-primary text-sm font-semibold rounded shadow-sm hover:bg-primary-dark transition-colors duration-150"
          >
            Apply
          </a>
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-on-surface-variant hover:text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <MaterialIcon icon={mobileOpen ? "close" : "menu"} className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-outline-light bg-white px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener" : undefined}
              className="block text-on-surface-variant font-medium text-sm font-headline py-2 hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <a
              href="https://commons.heartdata.baker.edu.au"
              target="_blank"
              rel="noopener"
              className="px-4 py-2 text-sm font-semibold text-primary border border-outline rounded"
            >
              Login
            </a>
            <a
              href="https://commons.heartdata.baker.edu.au"
              target="_blank"
              rel="noopener"
              className="px-4 py-2 bg-primary text-on-primary text-sm font-semibold rounded"
            >
              Apply
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
