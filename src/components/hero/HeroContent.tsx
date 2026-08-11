import { cohorts } from "../../data/cohorts";
import { DATA_COMMONS_URL } from "../../config/links";

const stats = [
  { value: "~394K", label: "Individuals" },
  { value: "54K+", label: "Genomic profiles" },
  { value: "44K+", label: "Lipidomic profiles" },
];

export default function HeroContent() {
  return (
    <div className="relative z-20 mx-auto max-w-6xl px-6 lg:px-8 py-16 lg:py-0 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-10 flex flex-col justify-center">
        <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
          Australian Cardiovascular disease{" "}
          <span className="lg:block">Data Commons</span>
        </h1>
        <p className="text-lg text-white/90 font-normal max-w-2xl leading-relaxed mb-8">
          Australia's first global standards-based human data commons. An
          MRFF-funded national initiative unifying genomic, lipidomic, and
          clinical data across {cohorts.length} cardiovascular research cohorts to identify
          novel biomarkers and therapeutic targets for coronary artery disease.
        </p>
        <dl className="flex flex-wrap gap-x-12 gap-y-6 mb-10">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse">
              <dt className="text-xs sm:text-sm uppercase tracking-wider text-white/70 mt-1.5">
                {s.label}
              </dt>
              <dd className="font-headline text-3xl sm:text-4xl font-bold text-white leading-none">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
        <div className="flex flex-wrap gap-4">
          <a
            href={DATA_COMMONS_URL}
            target="_blank"
            rel="noopener"
            className="px-8 py-3.5 bg-white text-[#7A1A1A] font-semibold rounded shadow-sm hover:bg-white/90 transition-colors duration-150 text-center"
          >
            Explore the Australian Cardiovascular disease Data Commons
          </a>
        </div>
      </div>
    </div>
  );
}
