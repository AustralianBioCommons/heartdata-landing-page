import SectionWrapper from "../ui/SectionWrapper";
import MaterialIcon from "../ui/MaterialIcon";
import { APPLY_URL, CONTACT_URL } from "../../config/links";

export default function AboutApplyCta() {
  return (
    <SectionWrapper id="access" bg="bg-white" labelledBy="access-heading" className="scroll-mt-24">
      <div className="bg-primary rounded-sm p-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <h2
            id="access-heading"
            className="text-on-primary font-semibold text-base flex items-center gap-2"
          >
            <MaterialIcon icon="lock_open" className="text-on-primary text-xl" />
            Ready to apply?
          </h2>
          <p className="text-[#b0c8e8] text-base mt-1">
            Data access applications are reviewed by the ACDC Data Access Committee. See how the
            four-step process works and start your application.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <a
            href={APPLY_URL}
            className="px-6 py-3 bg-white text-primary font-semibold rounded shadow-sm hover:bg-white/90 transition-colors duration-150"
          >
            How to apply
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
