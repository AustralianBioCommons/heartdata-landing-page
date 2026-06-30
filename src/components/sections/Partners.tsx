import SectionWrapper from "../ui/SectionWrapper";

interface Logo {
  src: string;
  alt: string;
}

const groups: { label: string; logos: Logo[] }[] = [
  {
    label: "Leadership",
    logos: [
      { src: "images/logos/australian-cardiovascular-alliance.svg", alt: "Australian Cardiovascular Alliance (ACvA)" },
      { src: "images/logos/australian-biocommons.svg", alt: "Australian BioCommons" },
      { src: "images/logos/baker-heart-and-diabetes-institute.svg", alt: "Baker Heart and Diabetes Institute" },
      { src: "images/logos/bioplatforms-australia.svg", alt: "Bioplatforms Australia" },
      { src: "images/logos/cad-frontiers.svg", alt: "CAD Frontiers" },
    ],
  },
  {
    label: "Funding",
    logos: [
      { src: "images/logos/national-research-infrastructure-for-australia-ncris.svg", alt: "National Research Infrastructure for Australia (NCRIS)" },
      { src: "images/logos/medical-research-future-fund-mrff.svg", alt: "Medical Research Future Fund (MRFF)" },
    ],
  },
  {
    label: "Affiliated",
    logos: [
      { src: "images/logos/university-of-melbourne.svg", alt: "University of Melbourne" },
      { src: "images/logos/university-of-sydney.svg", alt: "University of Sydney" },
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
            <span className="block text-xs uppercase tracking-widest font-semibold text-on-surface-variant mb-4">
              {group.label}
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {group.logos.map((logo) => (
                <img
                  key={logo.alt}
                  src={`${import.meta.env.BASE_URL}${logo.src}`}
                  alt={logo.alt}
                  className="h-12 w-auto max-w-[150px] object-contain mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity duration-200"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
