import { useState } from "react";
import SectionWrapper from "../ui/SectionWrapper";
import MaterialIcon from "../ui/MaterialIcon";
import {
  onboardedCohorts,
  comingCohorts,
  onboardedClinical,
  onboardedGenomic,
  onboardedLipidomic,
  type Cohort,
} from "../../data/cohorts";

function formatNumber(n: number): string {
  return n.toLocaleString("en-AU");
}

const summaryStats = [
  { value: formatNumber(onboardedClinical), label: "Clinical Records" },
  { value: formatNumber(onboardedGenomic), label: "Genomic Profiles" },
  { value: formatNumber(onboardedLipidomic), label: "Lipidomic Profiles" },
  { value: String(onboardedCohorts.length), label: "Datasets" },
];

// Cohort-level "coming" status pill — deliberately a labelled pill (not the bare
// per-data-type "Not yet available" dot) so the two indicators read as distinct.
function ComingPill() {
  return (
    <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-surface-alt border border-outline-light px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-on-surface-variant">
      <MaterialIcon icon="schedule" className="text-xs" />
      Coming
    </span>
  );
}

// Per-data-type availability: a number, or the "Not yet available" dot when null.
function DataCell({ value }: { value: number | null }) {
  return value !== null ? (
    <span className="text-on-surface">{formatNumber(value)}</span>
  ) : (
    <span
      className="inline-block w-2.5 h-2.5 rounded-full border-[1.5px] border-outline"
      aria-label="Not yet available"
    />
  );
}

function CohortRow({ cohort, coming = false }: { cohort: Cohort; coming?: boolean }) {
  return (
    <tr
      className={`hover:bg-primary/[0.03] transition-colors duration-150 ${
        coming ? "opacity-60" : ""
      }`}
    >
      <td className="p-4 font-medium text-on-surface sticky left-0 bg-white text-sm">
        <span className="inline-flex items-center">
          {cohort.name}
          {coming && <ComingPill />}
        </span>
      </td>
      <td className="p-4 text-on-surface-variant text-sm">{cohort.outcomes}</td>
      <td className="p-4 text-right font-mono tabular-nums text-on-surface text-sm">
        {formatNumber(cohort.clinical)}
      </td>
      <td className="p-4 text-right font-mono tabular-nums text-sm">
        <DataCell value={cohort.genomic} />
      </td>
      <td className="p-4 text-right font-mono tabular-nums text-sm">
        <DataCell value={cohort.lipidomic} />
      </td>
    </tr>
  );
}

export default function FederatedCohorts() {
  const [expanded, setExpanded] = useState(false);
  const hasComing = comingCohorts.length > 0;

  return (
    <SectionWrapper id="datasets" bg="bg-white" labelledBy="datasets-heading">
      <div className="mb-8">
        <h2
          id="datasets-heading"
          className="font-headline text-2xl sm:text-3xl font-bold text-primary mb-2"
        >
          Research Datasets
        </h2>
        <p className="text-on-surface-variant text-sm">
          Data availability across onboarded ACDC cardiovascular research cohorts.
        </p>
      </div>

      {/* Summary strip (onboarded cohorts only) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {summaryStats.map((s) => (
          <div
            key={s.label}
            className="bg-surface-alt border border-outline-light rounded-sm p-4 text-center"
          >
            <div className="text-2xl font-bold text-primary tabular-nums leading-none">
              {s.value}
            </div>
            <div className="text-xs text-on-surface-variant mt-2">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div
        className={`border border-outline rounded-sm overflow-x-auto ${
          expanded ? "max-h-[420px] overflow-y-auto" : ""
        }`}
      >
        <table className="w-full text-left border-collapse min-w-[640px]">
          <caption className="sr-only">
            Data availability across ACDC research datasets
          </caption>
          <thead>
            <tr className="bg-surface-alt border-b-2 border-outline">
              <th className="p-4 text-xs font-medium uppercase tracking-wider text-on-surface-variant sticky left-0 top-0 bg-surface-alt z-10">
                Study
              </th>
              <th className="p-4 text-xs font-medium uppercase tracking-wider text-on-surface-variant sticky top-0 bg-surface-alt">
                Outcomes
              </th>
              <th className="p-4 text-xs font-medium uppercase tracking-wider text-on-surface-variant text-right sticky top-0 bg-surface-alt">
                Clinical
              </th>
              <th className="p-4 text-xs font-medium uppercase tracking-wider text-on-surface-variant text-right sticky top-0 bg-surface-alt">
                Genomic
              </th>
              <th className="p-4 text-xs font-medium uppercase tracking-wider text-on-surface-variant text-right sticky top-0 bg-surface-alt">
                Lipidomic
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-light">
            {/* Onboarded cohorts (default view) */}
            {onboardedCohorts.map((c) => (
              <CohortRow key={c.name} cohort={c} />
            ))}

            {/* Onboarded total — caps the onboarded block */}
            <tr className="bg-surface-alt border-t-2 border-outline">
              <td
                className="p-4 font-semibold text-primary text-sm sticky left-0 bg-surface-alt"
                colSpan={2}
              >
                Total &middot; {onboardedCohorts.length} onboarded cohorts
              </td>
              <td className="p-4 text-right font-mono tabular-nums font-semibold text-primary text-sm">
                {formatNumber(onboardedClinical)}
              </td>
              <td className="p-4 text-right font-mono tabular-nums font-semibold text-primary text-sm">
                {formatNumber(onboardedGenomic)}
              </td>
              <td className="p-4 text-right font-mono tabular-nums font-semibold text-primary text-sm">
                {formatNumber(onboardedLipidomic)}
              </td>
            </tr>

            {/* To-be-onboarded cohorts (revealed on expand) */}
            {expanded && hasComing && (
              <>
                <tr className="bg-surface-alt border-t border-outline-light">
                  <td
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-on-surface-variant"
                    colSpan={5}
                  >
                    To be onboarded &middot; {comingCohorts.length} cohorts
                  </td>
                </tr>
                {comingCohorts.map((c) => (
                  <CohortRow key={c.name} cohort={c} coming />
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>

      {/* Legend + expand/collapse */}
      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-on-surface-variant">
          <span className="flex items-center gap-2">
            <ComingPill />
            Cohort scheduled for onboarding
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full border-[1.5px] border-outline" />
            Data type not yet available
          </span>
        </div>
        {hasComing && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark transition-colors duration-150 shrink-0"
          >
            {expanded ? (
              <>
                Show fewer
                <MaterialIcon icon="expand_less" className="text-lg" />
              </>
            ) : (
              <>
                View {comingCohorts.length} upcoming datasets
                <MaterialIcon icon="expand_more" className="text-lg" />
              </>
            )}
          </button>
        )}
      </div>
    </SectionWrapper>
  );
}
