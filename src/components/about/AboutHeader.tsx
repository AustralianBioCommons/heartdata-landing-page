import SectionWrapper from "../ui/SectionWrapper";

export default function AboutHeader() {
  return (
    <SectionWrapper id="top" bg="bg-surface-alt" labelledBy="about-page-heading">
      <p className="text-xs uppercase tracking-wider font-medium text-on-surface-variant mb-3">
        About the platform
      </p>
      <h1
        id="about-page-heading"
        className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-4 max-w-3xl leading-tight"
      >
        Australia's first global standards-based cardiovascular data commons
      </h1>
      <p className="text-on-surface-variant text-sm sm:text-base max-w-3xl leading-relaxed">
        The Australian Cardiovascular disease Data Commons (ACDC) unifies genomic, lipidomic,
        and clinical data from cardiovascular research cohorts across Australia &mdash; giving
        approved researchers the scale and tools to uncover the drivers of coronary artery
        disease.
      </p>
    </SectionWrapper>
  );
}
