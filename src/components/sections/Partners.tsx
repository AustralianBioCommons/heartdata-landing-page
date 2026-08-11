import SectionWrapper from "../ui/SectionWrapper";

interface Logo {
  src: string;
  alt: string;
  /** Partner organisation website (opens in a new tab) */
  url: string;
  /** Tailwind height class override for visual balance (defaults to h-[3.15rem]) */
  heightClass?: string;
}

const groups: { label: string; logos: Logo[] }[] = [
  {
    label: "Leadership",
    logos: [
      { src: "images/logos/png/australian-cardiovascular-alliance.png", alt: "Australian Cardiovascular Alliance (ACvA)", url: "https://ozheart.org" },
      { src: "images/logos/png/australian-biocommons.png", alt: "Australian BioCommons", url: "https://www.biocommons.org.au" },
      { src: "images/logos/png/baker-horizontal.png", alt: "Baker Heart and Diabetes Institute", url: "https://baker.edu.au", heightClass: "h-[2.8rem]"},
      { src: "images/logos/png/bioplatforms-australia.png", alt: "Bioplatforms Australia", url: "https://bioplatforms.com" },
      { src: "images/logos/png/cad-frontiers.png", alt: "CAD Frontiers", url: "https://cadfrontiers.org.au" },
    ],
  },
  {
    label: "Funding",
    logos: [
      { src: "images/logos/png/national-research-infrastructure-for-australia-ncris.png", alt: "National Research Infrastructure for Australia (NCRIS)", url: "https://www.education.gov.au/ncris" },
      { src: "images/logos/png/medical-research-future-fund-mrff.png", alt: "Medical Research Future Fund (MRFF)", url: "https://www.health.gov.au/our-work/medical-research-future-fund" },
    ],
  },
  {
    label: "Affiliated",
    logos: [
      { src: "images/logos/png/university-of-melbourne-horiz.png", alt: "University of Melbourne", url: "https://www.unimelb.edu.au" },
      { src: "images/logos/png/university-of-sydney.png", alt: "University of Sydney", url: "https://www.sydney.edu.au" },
    ],
  },
];

export default function Partners() {
  return (
    <SectionWrapper bg="bg-white" labelledBy="partners-heading" className="!py-8 lg:!py-12">
      <h2
        id="partners-heading"
        className="font-headline text-2xl sm:text-3xl font-bold text-primary text-center mb-4"
      >
        Strategic Leadership &amp; Partners
      </h2>

      <p className="max-w-3xl mx-auto text-center text-on-surface-variant text-sm leading-relaxed mb-2">
        The ACDC is delivered by a national partnership of cardiovascular research
        organisations and data-infrastructure providers, funded by the Australian Government
        through NCRIS and the Medical Research Future Fund, and supported by affiliated
        universities. Together these partners provide the scientific leadership, secure
        infrastructure and governance that underpin Australia&rsquo;s first global
        standards-based human data commons.
      </p>

      <div className="divide-y divide-outline-light">
        {groups.map((group) => (
          <div key={group.label} className="py-6 text-center">
            <span className="block text-[1.05rem] uppercase tracking-widest font-semibold text-on-surface-variant mb-4">
              {group.label}
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {group.logos.map((logo) => (
                <a
                  key={logo.alt}
                  href={logo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={logo.alt}
                  className="inline-flex rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}${logo.src}`}
                    alt={logo.alt}
                    className={`${logo.heightClass ?? "h-[3.15rem]"} w-auto object-contain mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity duration-200`}
                  />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
