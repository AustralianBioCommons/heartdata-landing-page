import SectionWrapper from "../ui/SectionWrapper";
import MaterialIcon from "../ui/MaterialIcon";
import { DATA_DICTIONARY_URL, USER_GUIDE_URL } from "../../config/links";

const dataTypes = [
  { icon: "genetics", label: "Genomic", subtitle: "54,583 profiles" },
  { icon: "water_drop", label: "Lipidomic", subtitle: "44,737 profiles" },
  { icon: "clinical_notes", label: "Clinical", subtitle: "394,068 records" },
  { icon: "radiology", label: "Imaging", subtitle: "CTCA & cardiac imaging" },
];

// Flow connector: vertical arrow when steps stack (mobile), horizontal on desktop.
function StepConnector() {
  return (
    <div className="hidden md:flex items-center justify-center text-primary/40 shrink-0">
      <MaterialIcon icon="arrow_forward" className="text-2xl" />
    </div>
  );
}

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

      {/* Tier 2: Harmonisation bar — links to the live data dictionary */}
      <a
        href={DATA_DICTIONARY_URL}
        target="_blank"
        rel="noopener"
        className="group bg-primary rounded-sm p-6 flex items-center gap-6 hover:bg-primary-dark transition-colors duration-150"
      >
        <MaterialIcon icon="hub" className="text-on-primary text-3xl shrink-0" />
        <div className="flex-1">
          <h3 className="text-on-primary font-semibold text-lg flex items-center gap-1">
            Data Harmonisation
            <MaterialIcon
              icon="open_in_new"
              className="text-base text-[#b0c8e8] group-hover:text-on-primary transition-colors"
            />
          </h3>
          <p className="text-[#b0c8e8] text-sm mt-1">
            Standardised clinical variables unified across all cohorts &mdash; explore the live
            data dictionary.
          </p>
        </div>
        <div className="text-3xl font-bold text-on-primary tabular-nums shrink-0">
          68
          <span className="block text-xs font-normal text-[#b0c8e8]">variables</span>
        </div>
      </a>

      {/* Connector */}
      <div className="flex justify-center py-6">
        <div className="flex flex-col items-center gap-1">
          <div className="w-px h-10 bg-primary/30" />
          <MaterialIcon icon="keyboard_arrow_down" className="text-primary/40 text-2xl" />
        </div>
      </div>

      {/* Tier 3: Access journey — Explore -> Apply (CTA) -> Analyse */}
      <div className="flex flex-col md:flex-row md:items-stretch gap-4">
        {/* Step 1 */}
        <div className="flex-1 bg-white border border-outline-light border-l-2 border-l-primary p-5 rounded-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">
              1
            </span>
            <MaterialIcon icon="search" className="text-primary text-2xl" />
          </div>
          <div className="text-sm font-semibold text-on-surface">Explore &amp; build your cohort</div>
          <p className="text-xs text-on-surface-variant mt-1">
            Filter the harmonised data to find the datasets and data types that fit your research
            question.
          </p>
        </div>

        <StepConnector />

        {/* Step 2 — Apply for access */}
        <div className="flex-1 bg-white border border-outline-light border-l-2 border-l-primary p-5 rounded-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">
              2
            </span>
            <MaterialIcon icon="key" className="text-primary text-2xl" />
          </div>
          <div className="text-sm font-semibold text-on-surface">Apply for access</div>
          <p className="text-xs text-on-surface-variant mt-1">
            Submit a data access request through REMS, reviewed by the Data Access Committee.
          </p>
        </div>

        <StepConnector />

        {/* Step 3 */}
        <div className="flex-1 bg-white border border-outline-light border-l-2 border-l-primary p-5 rounded-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">
              3
            </span>
            <MaterialIcon icon="terminal" className="text-primary text-2xl" />
          </div>
          <div className="text-sm font-semibold text-on-surface">Analyse your way</div>
          <p className="text-xs text-on-surface-variant mt-1">
            Once approved, work in a managed analysis workspace, or pull your data out via an API
            key into your own environment.
          </p>
        </div>
      </div>

      {/* User Guide entry point */}
      <p className="text-sm text-on-surface-variant mt-4">
        New to the platform?{" "}
        <a
          href={USER_GUIDE_URL}
          className="font-medium text-primary hover:text-primary-dark inline-flex items-center gap-1"
        >
          Read the User Guide
          <MaterialIcon icon="arrow_forward" className="text-base" />
        </a>
      </p>
    </SectionWrapper>
  );
}
