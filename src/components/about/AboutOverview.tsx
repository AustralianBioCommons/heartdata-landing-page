import SectionWrapper from "../ui/SectionWrapper";
import MaterialIcon from "../ui/MaterialIcon";

const aims = [
  {
    icon: "analytics",
    title: "Validate and build risk scores",
    description:
      "Assess the performance of polygenic risk scores (PRS) in the Australian population, and develop and validate the first combined PRS/metabolic risk score biosignature for coronary artery disease.",
  },
  {
    icon: "biotech",
    title: "Discover biomarkers and targets",
    description:
      "Reveal new insights into the relationship between lipid metabolism, genetics and cardiovascular disease to identify predictive biomarkers and potential therapeutic targets.",
  },
  {
    icon: "public",
    title: "Connect Australia globally",
    description:
      "Enable federated analysis with international cohorts and platforms — such as the NHLBI BioData Catalyst — while data remains on sovereign Australian infrastructure.",
  },
  {
    icon: "cardiology",
    title: "Accelerate clinical translation",
    description:
      "Move discoveries into clinical practice through a translational pipeline, and provide a reusable template for human data-sharing infrastructure across precision medicine.",
  },
];

export default function AboutOverview() {
  return (
    <SectionWrapper id="about" bg="bg-white" labelledBy="about-heading">
      <div className="max-w-3xl mb-10">
        <h2
          id="about-heading"
          className="font-headline text-2xl sm:text-3xl font-bold text-primary mb-4"
        >
          About ACDC
        </h2>
        <div className="space-y-4 text-on-surface-variant text-sm leading-relaxed">
          <p>
            The Australian Cardiovascular disease Data Commons (ACDC) is a secure, scalable and
            internationally integrated data infrastructure for cardiovascular research. An
            MRFF-funded national initiative led through the Australian Cardiovascular Alliance
            (ACvA), it brings together genomic, lipidomic and clinical data from established
            Australian cohorts and connects them to global best-practice analysis platforms — the
            first global standards-based human data commons of its kind in Australia.
          </p>
          <p>
            <span className="font-semibold text-on-surface">The need.</span> One Australian
            suffers a heart attack every ten minutes, making coronary artery disease the leading
            cause of premature cardiovascular death. Atherosclerosis develops silently over years,
            and up to 27% of heart attack patients have none of the standard modifiable risk
            factors — high blood pressure, cholesterol, diabetes or smoking — that prevention has
            targeted for over 50 years. Many patients suffer recurrent events despite optimal
            treatment, reflecting a substantial &ldquo;residual risk&rdquo; that today&rsquo;s
            risk factors cannot explain.
          </p>
          <p>
            <span className="font-semibold text-on-surface">The opportunity.</span> Polygenic and
            metabolic risk scores point toward a future of personalised, precision prevention —
            but validating them requires large, well-characterised, representative populations. By
            pooling established cohorts with deep molecular profiling and biobanked samples, ACDC
            creates the scale needed to validate existing markers and discover new ones for early
            atherosclerosis and cardiovascular risk.
          </p>
        </div>
      </div>

      {/* Aims */}
      <h3 className="text-xs uppercase tracking-wider font-medium text-on-surface-variant mb-4">
        Our aims
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {aims.map((aim) => (
          <div
            key={aim.title}
            className="bg-surface-alt border border-outline-light border-l-2 border-l-primary p-5 rounded-sm"
          >
            <MaterialIcon icon={aim.icon} className="text-primary text-2xl mb-2 block" />
            <h4 className="text-sm font-semibold text-on-surface mb-1">{aim.title}</h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">{aim.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
