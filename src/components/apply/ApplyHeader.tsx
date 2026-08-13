import SectionWrapper from "../ui/SectionWrapper";

export default function ApplyHeader() {
  return (
    <SectionWrapper id="top" bg="bg-surface-alt" labelledBy="apply-page-heading">
      <p className="text-xs uppercase tracking-wider font-medium text-on-surface-variant mb-3">
        Data access
      </p>
      <h1
        id="apply-page-heading"
        className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-4 max-w-3xl leading-tight"
      >
        Apply for data access
      </h1>
      <p className="text-on-surface-variant text-base sm:text-lg max-w-prose leading-relaxed">
        ACDC is built first for the academic research community, and access is also open to
        approved industry and commercial researchers &mdash; everyone applies through the same
        data access application and Data Access Committee (DAC) review. Data ownership is
        always retained by the contributing cohorts.
      </p>
    </SectionWrapper>
  );
}
