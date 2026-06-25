import SectionWrapper from "../ui/SectionWrapper";
import MaterialIcon from "../ui/MaterialIcon";
import { cohorts, totalClinical } from "../../data/cohorts";

const approxIndividuals = `${Math.round(totalClinical / 1000)}K`;

const collection = [
  {
    icon: "diversity_3",
    title: "Contributing cohorts",
    description:
      `Data comes from large, long-running Australian population and clinical studies spanning decades of cardiovascular research — together representing roughly ${approxIndividuals} individuals across ${cohorts.length} cohorts, with tens of thousands carrying molecular profiling. Many are still actively collecting follow-up through participant review and linkage to health and death registries.`,
  },
  {
    icon: "clinical_notes",
    title: "What's included",
    description:
      "Baseline demographic, lifestyle, anthropometric and clinical measures; adjudicated cardiovascular outcomes (heart attack, stroke, cardiovascular death, heart failure and more); and molecular profiling — genomics, lipidomics, metabolomics, proteomics and imaging biomarkers — including biobanked archived samples.",
  },
  {
    icon: "hub",
    title: "Harmonisation",
    description:
      "Working alongside each cohort's data custodians, contributed data is mapped to a common data dictionary of 68 harmonised variables so measures are comparable across every cohort, with full per-cohort dictionaries to help researchers assess suitability.",
  },
  {
    icon: "verified_user",
    title: "Ethics, consent and sovereignty",
    description:
      "Data is contributed under each cohort's institutional ethics approvals and participant consent, governed to protect privacy and security and to honour data sovereignty — including dedicated engagement with Aboriginal and Torres Strait Islander communities and custodians before any use of Indigenous cohort data.",
  },
];

export default function AboutDataCollection() {
  return (
    <SectionWrapper
      id="data-collection"
      bg="bg-surface-alt"
      labelledBy="data-collection-heading"
    >
      <div className="max-w-3xl mb-8">
        <h2
          id="data-collection-heading"
          className="font-headline text-2xl sm:text-3xl font-bold text-primary mb-4"
        >
          How data is collected
        </h2>
        <p className="text-on-surface-variant text-sm leading-relaxed">
          ACDC operates a federated model: it does not recruit participants directly. Established
          Australian cardiovascular cohorts contribute data they have already gathered, while
          ownership and authority over each dataset remain with its original custodians.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {collection.map((item) => (
          <div
            key={item.title}
            className="flex gap-4 p-5 bg-white border border-outline-light rounded-sm"
          >
            <MaterialIcon icon={item.icon} className="text-tertiary text-xl shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-on-surface text-sm">{item.title}</h3>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
