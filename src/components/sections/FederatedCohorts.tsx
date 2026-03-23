import SectionWrapper from "../ui/SectionWrapper";
import { cohorts, totalSubjects } from "../../data/cohorts";

function AvailabilityDot({ available }: { available: boolean }) {
  return available ? (
    <span
      className="inline-block w-2.5 h-2.5 rounded-full bg-tertiary"
      aria-label="Available"
    />
  ) : (
    <span
      className="inline-block w-2.5 h-2.5 rounded-full border-[1.5px] border-outline"
      aria-label="Not available"
    />
  );
}

function formatNumber(n: number): string {
  return n.toLocaleString("en-AU");
}

export default function FederatedCohorts() {
  return (
    <SectionWrapper id="cohorts" bg="bg-surface-alt" labelledBy="cohorts-heading">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
        <div>
          <h2
            id="cohorts-heading"
            className="font-headline text-2xl sm:text-3xl font-bold text-primary"
          >
            Federated Research Cohorts
          </h2>
          <p className="text-on-surface-variant mt-2 text-sm">
            Current data integration status across major Australian
            cardiovascular studies.
          </p>
        </div>
        <div className="text-right shrink-0">
          <div className="text-3xl font-bold text-primary leading-none tabular-nums">
            n = {formatNumber(totalSubjects)}
          </div>
          <div className="text-xs uppercase tracking-wider text-on-surface-variant mt-1">
            Total Patient Records
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="border border-outline rounded-sm overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <caption className="sr-only">
            Omic data availability across ACDC federated research cohorts
          </caption>
          <thead>
            <tr className="bg-surface-alt border-b-2 border-outline">
              <th className="p-4 text-xs font-medium uppercase tracking-wider text-on-surface-variant sticky left-0 bg-surface-alt">
                Cohort Name
              </th>
              <th className="p-4 text-xs font-medium uppercase tracking-wider text-on-surface-variant text-right">
                Subjects
              </th>
              <th className="p-4 text-xs font-medium uppercase tracking-wider text-on-surface-variant text-center">
                Genomic
              </th>
              <th className="p-4 text-xs font-medium uppercase tracking-wider text-on-surface-variant text-center">
                Lipidomic
              </th>
              <th className="p-4 text-xs font-medium uppercase tracking-wider text-on-surface-variant text-center">
                Proteomic
              </th>
              <th className="p-4 text-xs font-medium uppercase tracking-wider text-on-surface-variant text-center">
                Metabolomic
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-light">
            {cohorts.map((cohort) => (
              <tr
                key={cohort.name}
                className="hover:bg-primary/[0.03] focus-within:bg-primary/[0.03] transition-colors duration-150"
              >
                <td className="p-4 font-medium text-on-surface sticky left-0 bg-white">
                  {cohort.name}
                </td>
                <td className="p-4 text-right font-mono tabular-nums text-on-surface">
                  {formatNumber(cohort.subjects)}
                </td>
                <td className="p-4 text-center" aria-label={`${cohort.name}: Genomic ${cohort.genomic ? "available" : "not available"}`}>
                  <AvailabilityDot available={cohort.genomic} />
                </td>
                <td className="p-4 text-center" aria-label={`${cohort.name}: Lipidomic ${cohort.lipidomic ? "available" : "not available"}`}>
                  <AvailabilityDot available={cohort.lipidomic} />
                </td>
                <td className="p-4 text-center" aria-label={`${cohort.name}: Proteomic ${cohort.proteomic ? "available" : "not available"}`}>
                  <AvailabilityDot available={cohort.proteomic} />
                </td>
                <td className="p-4 text-center" aria-label={`${cohort.name}: Metabolomic ${cohort.metabolomic ? "available" : "not available"}`}>
                  <AvailabilityDot available={cohort.metabolomic} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center gap-6 text-xs text-on-surface-variant">
        <span className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-tertiary" />
          Data available
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full border-[1.5px] border-outline" />
          Not yet integrated
        </span>
      </div>
    </SectionWrapper>
  );
}
