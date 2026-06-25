const footerLinks = [
  { label: "Data Policy", href: "/docs/ACDC_Data_Sharing_Policy.pdf" },
  { label: "Terms of Access", href: "/policies/terms-of-use.html" },
  // Base-aware so the anchor also resolves from standalone pages (e.g. about.html).
  { label: "Governance Framework", href: `${import.meta.env.BASE_URL}#governance` },
  { label: "Privacy", href: "/docs/ACDC_Privacy_Policy.pdf" },
  { label: "Contact", href: "mailto:acdc@baker.edu.au" },
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
