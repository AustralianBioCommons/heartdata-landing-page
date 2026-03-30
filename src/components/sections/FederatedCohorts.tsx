import { useState } from "react";
import SectionWrapper from "../ui/SectionWrapper";
import MaterialIcon from "../ui/MaterialIcon";
import { cohorts, totalSubjects, totalGenomic, totalLipidomic } from "../../data/cohorts";

const VISIBLE_COUNT = 5;

function formatNumber(n: number): string {
  return n.toLocaleString("en-AU");
}

const summaryStats = [
  { value: formatNumber(totalSubjects), label: "Participants" },
  { value: formatNumber(totalGenomic), label: "Genomic Profiles" },
  { value: formatNumber(totalLipidomic), label: "Lipidomic Profiles" },
  { value: String(cohorts.length), label: "Cohorts" },
];

export default function FederatedCohorts() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? cohorts : cohorts.slice(0, VISIBLE_COUNT);

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
          Data availability across ACDC cardiovascular research cohorts.
        </p>
      </div>

      {/* Summary strip */}
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
                Subjects
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
            {visible.map((cohort) => (
              <tr
                key={cohort.name}
                className="hover:bg-primary/[0.03] transition-colors duration-150"
              >
                <td className="p-4 font-medium text-on-surface sticky left-0 bg-white text-sm">
                  {cohort.name}
                </td>
                <td className="p-4 text-on-surface-variant text-sm">
                  {cohort.outcomes}
                </td>
                <td className="p-4 text-right font-mono tabular-nums text-on-surface text-sm">
                  {formatNumber(cohort.subjects)}
                </td>
                <td className="p-4 text-right font-mono tabular-nums text-sm">
                  {cohort.genomic !== null ? (
                    <span className="text-on-surface">{formatNumber(cohort.genomic)}</span>
                  ) : (
                    <span className="inline-block w-2.5 h-2.5 rounded-full border-[1.5px] border-outline" aria-label="Not yet available" />
                  )}
                </td>
                <td className="p-4 text-right font-mono tabular-nums text-sm">
                  {cohort.lipidomic !== null ? (
                    <span className="text-on-surface">{formatNumber(cohort.lipidomic)}</span>
                  ) : (
                    <span className="inline-block w-2.5 h-2.5 rounded-full border-[1.5px] border-outline" aria-label="Not yet available" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-surface-alt border-t-2 border-outline">
              <td className="p-4 font-semibold text-primary text-sm sticky left-0 bg-surface-alt" colSpan={2}>
                Total ({cohorts.length} cohorts)
              </td>
              <td className="p-4 text-right font-mono tabular-nums font-semibold text-primary text-sm">
                {formatNumber(totalSubjects)}
              </td>
              <td className="p-4 text-right font-mono tabular-nums font-semibold text-primary text-sm">
                {formatNumber(totalGenomic)}
              </td>
              <td className="p-4 text-right font-mono tabular-nums font-semibold text-primary text-sm">
                {formatNumber(totalLipidomic)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Expand/collapse + legend */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-6 text-xs text-on-surface-variant">
          <span className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full border-[1.5px] border-outline" />
            Not yet available
          </span>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark transition-colors duration-150"
        >
          {expanded ? (
            <>
              Show fewer
              <MaterialIcon icon="expand_less" className="text-lg" />
            </>
          ) : (
            <>
              View all {cohorts.length} cohorts
              <MaterialIcon icon="expand_more" className="text-lg" />
            </>
          )}
        </button>
      </div>
    </SectionWrapper>
  );
}
