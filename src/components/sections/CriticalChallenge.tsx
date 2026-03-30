import SectionWrapper from "../ui/SectionWrapper";
import MaterialIcon from "../ui/MaterialIcon";

const challenges = [
  {
    icon: "emergency",
    iconColor: "text-secondary",
    title: "The Burden of Cardiovascular Disease",
    description:
      "Cardiovascular disease remains the leading cause of death worldwide. In Australia, one person suffers a heart attack every 10 minutes, and up to 27% of heart attack patients present with life-threatening events despite the absence of standard modifiable risk factors.",
  },
  {
    icon: "biotech",
    iconColor: "text-primary",
    title: "Beyond Standard Risk Factors",
    description:
      "Many patients progress to recurrent cardiac events despite optimal risk factor management, reflecting significant residual risk. Integrating genomic, lipidomic, proteomic, and metabolomic data is essential to uncover the biological mechanisms driving this gap.",
  },
];

export default function CriticalChallenge() {
  return (
    <SectionWrapper id="research" bg="bg-surface-alt" labelledBy="challenge-heading" className="!pt-8 lg:!pt-12">
      <h2
        id="challenge-heading"
        className="font-headline text-2xl sm:text-3xl font-bold text-primary mb-6"
      >
        The Research Challenge
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
