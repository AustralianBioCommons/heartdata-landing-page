import {
  CONTACT_URL,
  PRIVACY_POLICY_URL,
  TERMS_OF_USE_URL,
  USER_GUIDE_URL,
} from "../../config/links";

// Base-aware so the anchor also resolves from standalone pages (e.g. about.html).
const base = import.meta.env.BASE_URL;

const footerLinks: { label: string; href: string; external?: boolean }[] = [
  { label: "User Guide", href: USER_GUIDE_URL },
  { label: "Terms of Use", href: TERMS_OF_USE_URL, external: true },
  { label: "Trust & Governance", href: `${base}#governance` },
  { label: "Privacy Policy", href: PRIVACY_POLICY_URL, external: true },
  { label: "Contact", href: CONTACT_URL },
];

export default function Footer() {
  return (
    <footer className="bg-surface-alt border-t border-outline-light">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <span className="font-headline text-lg font-bold tracking-tight text-primary">
          ACDC
        </span>
        <nav
          aria-label="Footer"
          className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end"
        >
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener" : undefined}
              className="whitespace-nowrap text-xs uppercase tracking-wider text-on-surface-variant hover:text-primary hover:underline underline-offset-4 transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
