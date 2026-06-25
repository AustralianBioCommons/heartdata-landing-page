import SectionWrapper from "../ui/SectionWrapper";
import MaterialIcon from "../ui/MaterialIcon";
import { DATA_COMMONS_URL, CONTACT_URL } from "../../config/links";

const steps = [
  {
    step: "1",
    title: "Select your cohort",
    description:
      "Sign in to the ACDC Data Commons and use the cohort explorer to browse harmonised metadata and per-cohort data dictionaries, then build the custom cohort of studies and variables you need.",
  },
  {
    step: "2",
    title: "Apply through REMS",
    description:
      "Choose Apply for access to be forwarded to the Resource Entitlement Management System (REMS), the DAC's application software. There you submit your application — research question, data requested, and institutional ethics approval — and track its status and any amendments.",
  },
  {
    step: "3",
    title: "Committee review",
    description:
      "The Data Access Committee (DAC) assesses each request for scientific merit, ethical compliance and alignment with participant consent, and makes recommendations to the relevant cohort steering committees.",
  },
  {
    step: "4",
    title: "Access and analyse",
    description:
      "On approval, download the approved datasets or analyse them directly on the Gen3 platform, then export your results for publication.",
  },
];

export default function AboutAccess() {
  return (
    <SectionWrapper
      id="access"
      bg="bg-white"
      labelledBy="access-heading"
      className="scroll-mt-24"
    >
      <div className="max-w-3xl mb-8">
        <h2
          id="access-heading"
          className="font-headline text-2xl sm:text-3xl font-bold text-primary mb-4"
        >
          Apply for data access
        </h2>
        <p className="text-on-surface-variant text-sm leading-relaxed">
          ACDC is built first for the academic research community, and access is also open to
          approved industry and commercial researchers — everyone applies through the same data
          access application and Data Access Committee (DAC) review. Data ownership is always
          retained by the contributing cohorts.
        </p>
      </div>

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {steps.map((s) => (
          <li
            key={s.step}
            className="bg-surface-alt border border-outline-light border-l-2 border-l-secondary p-5 rounded-sm"
          >
            <div className="w-8 h-8 rounded-sm bg-secondary/10 flex items-center justify-center mb-3">
              <span className="text-secondary font-bold text-sm">{s.step}</span>
            </div>
            <h3 className="font-semibold text-on-surface text-sm mb-1">{s.title}</h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">{s.description}</p>
          </li>
        ))}
      </ol>

      {/* CTA banner */}
      <div className="bg-primary rounded-sm p-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <h3 className="text-on-primary font-semibold text-base flex items-center gap-2">
            <MaterialIcon icon="lock_open" className="text-on-primary text-xl" />
            Ready to apply?
          </h3>
          <p className="text-[#b0c8e8] text-sm mt-1">
            Start your data access application on the ACDC Data Commons, or contact the ACDC team
            with any questions.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <a
            href={DATA_COMMONS_URL}
            target="_blank"
            rel="noopener"
            className="px-6 py-3 bg-white text-primary font-semibold rounded shadow-sm hover:bg-white/90 transition-colors duration-150"
          >
            Start your application
          </a>
          <a
            href={CONTACT_URL}
            className="px-6 py-3 border border-white/40 text-white font-semibold rounded hover:bg-white/10 transition-colors duration-150"
          >
            Contact the team
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
