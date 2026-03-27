import SectionWrapper from "../ui/SectionWrapper";
import MaterialIcon from "../ui/MaterialIcon";

const metrics = [
  { label: "Polygenic Risk Scores", value: "PRS", bg: "bg-primary text-on-primary" },
  { label: "Metabolic Risk Scores", value: "MRS", bg: "bg-secondary text-on-secondary" },
  { label: "Phenotyped Subjects", value: "394k+", bg: "bg-surface-container text-primary" },
  { label: "Global Interoperability", value: "NIH", bg: "bg-primary-dark text-on-primary" },
];

const capabilities = [
  "Validating PRS performance in Australian clinical settings.",
  "Discovering novel metabolic biomarkers for atherosclerosis.",
  "Unified access to fragmented multi-omic datasets.",
];

export default function OpportunityPrecision() {
  return (
    <SectionWrapper bg="bg-white" labelledBy="opportunity-heading">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Metric cards */}
        <div className="grid grid-cols-2 gap-4">
          {metrics.map((m) => (
            <div
              key={m.value}
              className={`${m.bg} p-6 rounded-sm h-44 flex flex-col justify-end`}
            >
              <div className="text-2xl font-bold mb-1">{m.value}</div>
              <div className="text-sm opacity-80">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div>
          <h2
            id="opportunity-heading"
            className="font-headline text-2xl sm:text-3xl font-bold text-primary mb-6"
          >
            The Opportunity for Precision
          </h2>
          <p className="text-on-surface-variant text-base leading-relaxed mb-8">
            Large, well-phenotyped datasets provide the power to identify specific
            markers. By integrating Genomic, Lipidomic, Proteomic, and
            Metabolomic data, ACDC enables researchers to evaluate risk with
            unprecedented granularity.
          </p>
          <ul className="space-y-4">
            {capabilities.map((cap) => (
              <li key={cap} className="flex items-start gap-3">
                <MaterialIcon
                  icon="check_circle"
                  filled
                  className="text-tertiary text-xl shrink-0 mt-0.5"
                />
                <span className="font-medium text-on-surface text-sm">{cap}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
