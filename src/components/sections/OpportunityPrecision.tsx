import SectionWrapper from "../ui/SectionWrapper";
import MaterialIcon from "../ui/MaterialIcon";

const dataTypes = [
  { icon: "genetics", label: "Genomic", subtitle: "54,583 profiles" },
  { icon: "water_drop", label: "Lipidomic", subtitle: "44,737 profiles" },
  { icon: "clinical_notes", label: "Clinical", subtitle: "394,068 records" },
  { icon: "radiology", label: "Imaging", subtitle: "CTCA & cardiac imaging" },
];

const capabilities = [
  { icon: "search", label: "Search & Mine", description: "Query harmonised metadata across all cohorts" },
  { icon: "model_training", label: "Analysis Toolkit", description: "ML/AI-enabled analytical environments" },
  { icon: "upload_file", label: "Export & Publish", description: "Export datasets for downstream analysis" },
  { icon: "group", label: "Collaborate & Share", description: "Controlled sharing with global research teams" },
];

const objectives = [
  { label: "Polygenic Risk Scores", description: "Assessing PRS performance in the Australian population" },
  { label: "Metabolic Risk Scores", description: "Developing a combined PRS/MRS biosignature for CAD" },
  { label: "International Integration", description: "Federated analysis with NHLBI BioData Catalyst cohorts" },
];

export default function OpportunityPrecision() {
  return (
    <SectionWrapper bg="bg-surface-alt" labelledBy="platform-heading">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2
          id="platform-heading"
          className="font-headline text-2xl sm:text-3xl font-bold text-primary mb-4"
        >
          The ACDC Platform
        </h2>
        <p className="text-on-surface-variant text-sm">
          From fragmented research data to harmonised, actionable insights.
        </p>
      </div>

      {/* Tier 1: Input Data Types */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {dataTypes.map((dt) => (
          <div
            key={dt.label}
            className="bg-white border border-outline-light border-l-2 border-l-tertiary p-5 rounded-sm text-center"
          >
            <MaterialIcon icon={dt.icon} className="text-tertiary text-2xl mb-2" />
            <div className="text-sm font-semibold text-on-surface">{dt.label}</div>
            <div className="text-xs text-on-surface-variant mt-1">{dt.subtitle}</div>
          </div>
        ))}
      </div>

      {/* Connector */}
      <div className="flex justify-center py-6">
        <div className="flex flex-col items-center gap-1">
          <div className="w-px h-10 bg-primary/30" />
          <MaterialIcon icon="keyboard_arrow_down" className="text-primary/40 text-2xl" />
        </div>
      </div>

      {/* Tier 2: Harmonisation Bar */}
      <div className="bg-primary rounded-sm p-6 flex items-center gap-6">
        <MaterialIcon icon="hub" className="text-on-primary text-3xl shrink-0" />
        <div className="flex-1">
          <h3 className="text-on-primary font-semibold text-lg">Data Harmonisation</h3>
          <p className="text-[#b0c8e8] text-sm mt-1">
            Standardised clinical variables unified across all cohorts through
            a comprehensive harmonised data dictionary.
          </p>
        </div>
        <div className="text-3xl font-bold text-on-primary tabular-nums shrink-0">
          68
          <span className="block text-xs font-normal text-[#b0c8e8]">variables</span>
        </div>
      </div>

      {/* Connector */}
      <div className="flex justify-center py-6">
        <div className="flex flex-col items-center gap-1">
          <div className="w-px h-10 bg-primary/30" />
          <MaterialIcon icon="keyboard_arrow_down" className="text-primary/40 text-2xl" />
        </div>
      </div>

      {/* Tier 3: Platform Capabilities */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {capabilities.map((cap) => (
          <div
            key={cap.label}
            className="bg-white border border-outline-light border-l-2 border-l-primary p-5 rounded-sm"
          >
            <MaterialIcon icon={cap.icon} className="text-primary text-2xl mb-2" />
            <div className="text-sm font-semibold text-on-surface">{cap.label}</div>
            <div className="text-xs text-on-surface-variant mt-1">{cap.description}</div>
          </div>
        ))}
      </div>

      {/* Research Objectives */}
      <div className="mt-10 pt-8 border-t border-outline-light">
        <h3 className="text-xs uppercase tracking-wider font-medium text-on-surface-variant mb-4">
          Research Objectives
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {objectives.map((obj) => (
            <div key={obj.label} className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-1.5 shrink-0" />
              <div>
                <span className="font-semibold text-on-surface text-sm">{obj.label}</span>
                <p className="text-xs text-on-surface-variant mt-0.5">{obj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
