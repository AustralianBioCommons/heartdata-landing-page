import SectionWrapper from "../ui/SectionWrapper";
import MaterialIcon from "../ui/MaterialIcon";

export default function StrategicSignificance() {
  return (
    <SectionWrapper bg="bg-surface-alt" labelledBy="significance-heading">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
        <div>
          <h2
            id="significance-heading"
            className="font-headline text-2xl sm:text-3xl font-bold text-primary mb-6"
          >
            Strategic Significance
          </h2>
          <p className="text-on-surface-variant text-base leading-relaxed mb-8">
            ACDC establishes a standardized infrastructure pathway, providing a
            blueprint for national research programs in collaboration with the{" "}
            <strong>Australian BioCommons</strong>.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 bg-white border border-outline-light rounded-sm">
              <MaterialIcon icon="public" className="text-primary shrink-0 text-xl" />
              <div>
                <h4 className="font-semibold text-on-surface text-sm">
                  International Alignment
                </h4>
                <p className="text-xs text-on-surface-variant mt-1">
                  Architecture strictly adheres to NIH and GA4GH standards,
                  ensuring Australian research is globally interoperable and
                  competitive.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-white border border-outline-light rounded-sm">
              <MaterialIcon icon="account_tree" className="text-primary shrink-0 text-xl" />
              <div>
                <h4 className="font-semibold text-on-surface text-sm">
                  Scalable Infrastructure
                </h4>
                <p className="text-xs text-on-surface-variant mt-1">
                  The ACDC framework serves as a reference model for other
                  high-performance clinical data initiatives across the
                  continent.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote panel */}
        <div className="bg-primary p-10 text-on-primary rounded-sm relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <h3 className="text-xl font-semibold mb-4 relative">Global Standards</h3>
          <p className="text-[#b0c8e8] leading-relaxed mb-8 relative">
            &ldquo;By adopting global data sharing standards, we ensure that
            Australian cardiovascular data can be harmonized with the
            world&rsquo;s largest datasets, amplifying our national research
            impact.&rdquo;
          </p>
          <div className="flex items-center gap-4 relative">
            <div className="w-10 h-[1px] bg-primary-light" />
            <span className="uppercase tracking-wider text-xs font-semibold text-[#b0c8e8]">
              NIH &amp; GA4GH Compliant
            </span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
