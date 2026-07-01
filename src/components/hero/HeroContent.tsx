import { cohorts } from "../../data/cohorts";
import { DATA_COMMONS_URL, LEARN_MORE_URL } from "../../config/links";

export default function HeroContent() {
  return (
    <div className="relative z-20 mx-auto max-w-6xl px-6 lg:px-8 py-16 lg:py-0 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-8 flex flex-col justify-center">
        <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
          Australian Cardiovascular disease Data Commons
        </h1>
        <p className="text-lg text-white/80 font-normal max-w-2xl leading-relaxed mb-4">
          Australia's first global standards-based human data commons. An
          MRFF-funded national initiative unifying genomic, lipidomic, and
          clinical data across {cohorts.length} cardiovascular research cohorts to identify
          novel biomarkers and therapeutic targets for coronary artery disease.
        </p>
        <p className="text-base text-white/90 font-semibold tracking-wide mb-10">
          ~394K individuals &middot; 54K+ genomic profiles &middot; 44K+
          lipidomic profiles
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={DATA_COMMONS_URL}
            target="_blank"
            rel="noopener"
            className="px-8 py-3.5 bg-white text-[#7A1A1A] font-semibold rounded shadow-sm hover:bg-white/90 transition-colors duration-150"
          >
            Explore the Data Commons
          </a>
          <a
            href={LEARN_MORE_URL}
            className="px-8 py-3.5 border border-white/40 text-white font-semibold rounded hover:bg-white/10 transition-colors duration-150"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}
