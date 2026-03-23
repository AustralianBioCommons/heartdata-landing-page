import SectionWrapper from "../ui/SectionWrapper";
import MaterialIcon from "../ui/MaterialIcon";

export default function CriticalChallenge() {
  return (
    <SectionWrapper id="research" bg="bg-surface-alt" labelledBy="challenge-heading">
      <div className="max-w-4xl">
        <h2
          id="challenge-heading"
          className="font-headline text-2xl sm:text-3xl font-bold text-primary mb-8"
        >
          The Critical Challenge
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-outline-light border-l-2 border-l-primary p-8 rounded-sm">
            <MaterialIcon icon="emergency" className="text-2xl text-secondary mb-4 block" />
            <h3 className="text-lg font-semibold text-on-surface mb-3">
              Urgency in Cardiology
            </h3>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              Heart attacks occur every 10 minutes in Australia. Current standard
              risk factors&mdash;hypertension, hyperlipidemia, and
              diabetes&mdash;only partially explain the prevalence of Coronary
              Artery Disease (CAD).
            </p>
          </div>
          <div className="bg-white border border-outline-light border-l-2 border-l-primary p-8 rounded-sm">
            <MaterialIcon icon="biotech" className="text-2xl text-primary mb-4 block" />
            <h3 className="text-lg font-semibold text-on-surface mb-3">
              Elucidating Residual Risk
            </h3>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              We must elucidate mechanisms beyond standard factors. The
              &ldquo;residual risk&rdquo; remains high, requiring a deeper
              understanding of multi-omic interplay to predict and prevent future
              cardiac events.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
