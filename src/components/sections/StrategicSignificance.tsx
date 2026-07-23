import SectionWrapper from "../ui/SectionWrapper";
import MaterialIcon from "../ui/MaterialIcon";

const governanceBodies = [
  {
    acronym: "SAC",
    name: "Scientific Advisory Committee",
    description: "Scientific oversight of ACDC development and implementation.",
    icon: "science",
  },
  {
    acronym: "PGWG",
    name: "Platform Governance Working Group",
    description: "Advises on the operation, access and use of the ACDC.",
    icon: "groups",
  },
  {
    acronym: "PMC",
    name: "Project Management Committee",
    description: "Oversight of the project, risk assessment and deliverable review.",
    icon: "assignment",
  },
  {
    acronym: "DAC",
    name: "Data Access Committee",
    description: "Review and approval of data access applications.",
    icon: "verified_user",
  },
];

export default function StrategicSignificance() {
  return (
    <SectionWrapper id="governance" bg="bg-white" labelledBy="governance-heading">
      <div className="mb-8">
        <h2
          id="governance-heading"
          className="font-headline text-2xl sm:text-3xl font-bold text-primary mb-4"
        >
          Trust &amp; Governance
        </h2>
        <p className="text-on-surface-variant text-sm max-w-3xl">
          Rigorous oversight ensuring secure, ethical access to sensitive
          cardiovascular research data.
        </p>
      </div>

      {/* Governance Bodies */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {governanceBodies.map((b) => (
          <div
            key={b.acronym}
            className="flex gap-4 p-5 bg-surface-alt border border-outline-light rounded-sm"
          >
            <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center shrink-0">
              <span className="text-primary font-bold text-sm">{b.acronym}</span>
            </div>
            <div>
              <h4 className="font-semibold text-on-surface text-sm">{b.name}</h4>
              <p className="text-xs text-on-surface-variant mt-1">{b.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Security & Compliance */}
      <div className="flex gap-4 p-5 bg-surface-alt border border-outline-light rounded-sm">
        <MaterialIcon icon="shield" className="text-tertiary text-xl shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-on-surface text-sm">Security &amp; Compliance</h4>
          <p className="text-xs text-on-surface-variant mt-1">
            Industry-standard security practices with encrypted storage,
            continuous monitoring, and sovereign Australian infrastructure.
            Compliant with all relevant laws and regulations.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
