import SectionWrapper from "../ui/SectionWrapper";

interface Logo {
  src: string;
  alt: string;
  /** Tailwind height class override for visual balance (defaults to h-[3.15rem]) */
  heightClass?: string;
}

const groups: { label: string; logos: Logo[] }[] = [
  {
    label: "Leadership",
    logos: [
      { src: "images/logos/png/australian-cardiovascular-alliance.png", alt: "Australian Cardiovascular Alliance (ACvA)" },
      { src: "images/logos/png/australian-biocommons.png", alt: "Australian BioCommons" },
      { src: "images/logos/png/baker-horizontal.png", alt: "Baker Heart and Diabetes Institute", heightClass: "h-[2.8rem]"},
      { src: "images/logos/png/bioplatforms-australia.png", alt: "Bioplatforms Australia" },
      { src: "images/logos/png/cad-frontiers.png", alt: "CAD Frontiers" },
    ],
  },
  {
    label: "Funding",
    logos: [
      { src: "images/logos/png/national-research-infrastructure-for-australia-ncris.png", alt: "National Research Infrastructure for Australia (NCRIS)" },
      { src: "images/logos/png/medical-research-future-fund-mrff.png", alt: "Medical Research Future Fund (MRFF)" },
    ],
  },
  {
    label: "Affiliated",
    logos: [
      { src: "images/logos/png/university-of-melbourne.png", alt: "University of Melbourne" },
      { src: "images/logos/png/university-of-sydney.png", alt: "University of Sydney" },
    ],
  },
];

export default function Partners() {
  return (
    <SectionWrapper bg="bg-white" labelledBy="partners-heading" className="!py-8 lg:!py-12">
      <h2
        id="partners-heading"
        className="font-headline text-2xl sm:text-3xl font-bold text-primary text-center mb-6"
      >
        Strategic Leadership &amp; Partners
      </h2>

      <div className="divide-y divide-outline-light">
        {groups.map((group) => (
          <div key={group.label} className="py-6 text-center">
            <span className="block text-[1.05rem] uppercase tracking-widest font-semibold text-on-surface-variant mb-4">
              {group.label}
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {group.logos.map((logo) => (
                <img
                  key={logo.alt}
                  src={`${import.meta.env.BASE_URL}${logo.src}`}
                  alt={logo.alt}
                  className={`${logo.heightClass ?? "h-[3.15rem]"} w-auto object-contain mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity duration-200`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
