import SectionWrapper from "../ui/SectionWrapper";

const partners = [
  { name: "ACvA", label: "Australian Cardiovascular Alliance" },
  { name: "MRFF", label: "Research Data Infrastructure Initiative" },
  { name: "ACDC", label: "Data Commons Portal" },
];

const affiliateLogos = [
  { src: "/images/logos/australian-biocommons.svg", alt: "Australian BioCommons" },
  { src: "/images/logos/baker-heart-and-diabetes-institute.svg", alt: "Baker Heart and Diabetes Institute" },
  { src: "/images/logos/bioplatforms-australia.svg", alt: "Bioplatforms Australia" },
  { src: "/images/logos/cad-frontiers.svg", alt: "CAD Frontiers" },
  { src: "/images/logos/medical-research-future-fund-mrff.svg", alt: "Medical Research Future Fund (MRFF)" },
  { src: "/images/logos/national-research-infrastructure-for-australia-ncris.svg", alt: "National Research Infrastructure for Australia (NCRIS)" },
  { src: "/images/logos/university-of-melbourne.svg", alt: "University of Melbourne" },
  { src: "/images/logos/university-of-sydney.svg", alt: "University of Sydney" },
];

export default function Partners() {
  return (
    <SectionWrapper bg="bg-white" labelledBy="partners-heading">
      <div className="text-center mb-12">
        <h2
          id="partners-heading"
          className="font-headline text-xl sm:text-2xl font-semibold text-on-surface-variant"
        >
          Strategic Leadership &amp; Partners
        </h2>
      </div>

      {/* Partner logos */}
      <div className="flex flex-wrap justify-center items-center gap-12 mb-16">
        {partners.map((p) => (
          <div
            key={p.name}
            className="flex flex-col items-center opacity-50 hover:opacity-80 transition-opacity duration-150"
          >
            <span className="text-xl font-bold text-primary tracking-tight font-headline">
              {p.name}
            </span>
            <span className="text-[0.625rem] uppercase tracking-wider font-medium text-on-surface-variant mt-1">
              {p.label}
            </span>
          </div>
        ))}
      </div>

      {/* Affiliate logos */}
      <div className="border-t border-outline-light mb-12" />
      <div className="text-center mb-8">
        <span className="text-sm uppercase tracking-widest font-medium text-on-surface-variant">
          Affiliated Institutions
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center mb-16">
        {affiliateLogos.map((logo) => (
          <div key={logo.src} className="flex items-center justify-center h-[80px] mix-blend-multiply">
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-w-[120px] w-full h-auto opacity-80 hover:opacity-100 transition-opacity duration-200"
            />
          </div>
        ))}
      </div>

      {/* Quote */}
      <div className="max-w-3xl mx-auto border-l-[3px] border-primary pl-6 py-2">
        <p className="text-on-surface-variant leading-relaxed text-base">
          &ldquo;The ACDC represents a generational shift in how we handle
          cardiovascular data in Australia. By bridging the gap between
          discovery science and clinical practice, we are saving lives through
          data precision.&rdquo;
        </p>
        <div className="mt-4">
          <div className="font-semibold text-primary text-sm">
            ACvA Strategic Steering Committee
          </div>
          <div className="text-on-surface-variant text-xs mt-0.5">
            Australian Cardiovascular Alliance
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
