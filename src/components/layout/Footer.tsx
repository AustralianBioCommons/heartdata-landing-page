const footerLinks = [
  { label: "Data Policy", href: "/docs/ACDC_Data_Sharing_Policy.pdf" },
  { label: "Terms of Access", href: "/policies/terms-of-use.html" },
  { label: "Governance Framework", href: "#governance" },
  { label: "Privacy", href: "/docs/ACDC_Privacy_Policy.pdf" },
  { label: "Contact", href: "mailto:acdc@baker.edu.au" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-alt border-t border-outline-light">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-3">
          <span className="text-lg font-bold text-on-surface font-headline tracking-tight">
            ACDC
          </span>
          <p className="text-on-surface-variant text-xs uppercase tracking-wider leading-relaxed">
            &copy; {new Date().getFullYear()} Australian Cardiovascular disease
            Data Commons (ACDC). Supported by ACvA &amp; Australian BioCommons.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-3 md:justify-end items-center">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-on-surface-variant text-xs uppercase tracking-wider hover:text-primary hover:underline underline-offset-4 transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
