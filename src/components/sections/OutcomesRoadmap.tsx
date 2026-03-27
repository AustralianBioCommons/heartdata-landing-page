import SectionWrapper from "../ui/SectionWrapper";

const phases = [
  {
    phase: "Phase 1",
    timeline: "YEARS 1-2",
    title: "Improved Researcher Capacity",
    description:
      "Initial operations focus on centralizing major Australian cohorts (AusDiab, FIELD, BioHEART) and deploying the discovery portal. This phase drastically reduces the time for researchers to discover and request access to harmonized multi-omic data.",
    accentColor: "border-l-primary",
  },
  {
    phase: "Phase 2",
    timeline: "YEAR 4 GOAL",
    title: "Full Establishment & Linkage",
    description:
      "The four-year milestone marks a fully established, sustainable Data Commons. This includes seamless international linkage, automated governance workflows, and a mature ecosystem supporting precision medicine clinical trials nationwide.",
    accentColor: "border-l-secondary",
  },
];

export default function OutcomesRoadmap() {
  return (
    <SectionWrapper bg="bg-white" labelledBy="roadmap-heading">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2
          id="roadmap-heading"
          className="font-headline text-2xl sm:text-3xl font-bold text-primary mb-4"
        >
          Project Outcomes &amp; Roadmap
        </h2>
        <p className="text-on-surface-variant text-sm">
          Tracing the trajectory from initial pilot phases to a fully
          established national data commons.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {phases.map((p) => (
          <div
            key={p.phase}
            className={`bg-white border border-outline-light border-l-2 ${p.accentColor} p-8 rounded-sm hover:border-l-primary hover:shadow-sm transition-all duration-150`}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-3xl font-bold text-outline">
                {p.phase}
              </span>
              <span className="px-3 py-1 bg-surface-alt text-primary text-xs font-semibold rounded-sm">
                {p.timeline}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-on-surface mb-3">
              {p.title}
            </h3>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
