import SectionWrapper from "../ui/SectionWrapper";
import MaterialIcon from "../ui/MaterialIcon";

const challenges = [
  {
    icon: "emergency",
    iconColor: "text-secondary",
    title: "Urgency in Cardiology",
    description:
      "Heart attacks occur every 10 minutes in Australia. Current standard risk factors\u2014hypertension, hyperlipidemia, and diabetes\u2014only partially explain the prevalence of Coronary Artery Disease (CAD).",
  },
  {
    icon: "biotech",
    iconColor: "text-primary",
    title: "Elucidating Residual Risk",
    description:
      'We must elucidate mechanisms beyond standard factors. The \u201Cresidual risk\u201D remains high, requiring a deeper understanding of multi-omic interplay to predict and prevent future cardiac events.',
  },
  {
    icon: "hub",
    iconColor: "text-tertiary",
    title: "A Multi-Omic Imperative",
    description:
      "Bridging genomic, proteomic, lipidomic, and metabolomic datasets is essential. Only by integrating these layers can we uncover the complex biological pathways driving cardiovascular disease.",
  },
];

export default function CriticalChallenge() {
  return (
    <SectionWrapper id="research" bg="bg-surface-alt" labelledBy="challenge-heading" className="!pt-8 lg:!pt-12">
      <h2
        id="challenge-heading"
        className="font-headline text-2xl sm:text-3xl font-bold text-primary mb-6"
      >
        The Critical Challenge
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {challenges.map((c) => (
          <div
            key={c.title}
            className="bg-white border border-outline-light border-l-2 border-l-primary p-6 rounded-sm"
          >
            <MaterialIcon icon={c.icon} className={`text-2xl ${c.iconColor} mb-4 block`} />
            <h3 className="text-lg font-semibold text-on-surface mb-3">
              {c.title}
            </h3>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              {c.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
