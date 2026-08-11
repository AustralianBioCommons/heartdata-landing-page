import SectionWrapper from "../ui/SectionWrapper";
import MaterialIcon from "../ui/MaterialIcon";
import { CONTACT_URL } from "../../config/links";

export default function ApplyContribute() {
  return (
    <SectionWrapper
      id="contribute"
      bg="bg-surface-alt"
      labelledBy="contribute-heading"
      className="scroll-mt-24"
    >
      <div className="bg-primary rounded-sm p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center gap-6">
        <div className="flex-1">
          <h2
            id="contribute-heading"
            className="font-headline text-2xl font-bold text-on-primary flex items-center gap-3"
          >
            <MaterialIcon icon="database" className="text-on-primary text-2xl" />
            Contribute your cohort
          </h2>
          <p className="text-[#b0c8e8] text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
            The Commons grows with every cohort that joins. If you lead a cardiovascular study
            and want your data harmonised to global standards, discoverable by the national
            research community, and shared on your terms, we&rsquo;d like to hear from you
            &mdash; data ownership always remains with the contributing cohort.
          </p>
        </div>
        <div className="shrink-0">
          <a
            href={CONTACT_URL}
            className="inline-block px-6 py-3 bg-white text-primary font-semibold rounded shadow-sm hover:bg-white/90 transition-colors duration-150"
          >
            Talk to the ACDC team
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
