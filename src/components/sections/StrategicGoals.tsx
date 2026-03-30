const goals = [
  {
    number: "01",
    title: "Identify Biomarkers",
    description:
      "Systematically identifying diagnostic and prognostic biomarkers for CAD through integrated multi-omic analysis.",
  },
  {
    number: "02",
    title: "PRS Performance",
    description:
      "Assessing the clinical utility and performance of Polygenic Risk Scores specifically within the Australian population demographic.",
  },
  {
    number: "03",
    title: "Global Interoperability",
    description:
      "Ensuring ACDC architecture is fully interoperable with international standards including the NIH and Global Alliance for Genomics and Health (GA4GH).",
  },
];

export default function StrategicGoals() {
  return (
    <section
      id="governance"
      className="py-10 lg:py-16 bg-gradient-to-br from-[#002c5f] to-[#003d7a] text-white"
      aria-labelledby="goals-heading"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2
            id="goals-heading"
            className="font-headline text-2xl sm:text-3xl font-semibold mb-4"
          >
            Our Strategic Goals
          </h2>
          <p className="text-[#8fb3de] text-base">
            Building a resilient, sustainable, and interoperable national data
            commons to transform clinical cardiology.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {goals.map((goal) => (
            <div
              key={goal.number}
              className="border-l-2 border-white/30 bg-white/[0.08] p-8 rounded-sm"
            >
              <div className="text-2xl font-bold text-white/25 mb-5">
                {goal.number}
              </div>
              <h3 className="text-lg font-semibold mb-3">{goal.title}</h3>
              <p className="text-[#8fb3de] leading-relaxed text-sm">
                {goal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
