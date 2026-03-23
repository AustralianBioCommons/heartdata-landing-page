export default function HeroContent() {
  return (
    <div className="relative z-20 mx-auto max-w-6xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full">
      <div className="lg:col-span-8 flex flex-col justify-center">
        <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight tracking-tight mb-6">
          Australian Cardiovascular disease Data Commons
        </h1>
        <p className="text-lg text-on-surface-variant font-normal max-w-2xl leading-relaxed mb-10">
          Accelerating discovery science and clinical translation for coronary
          artery disease through an innovative, accessible, and globally
          connected data infrastructure.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://commons.heartdata.baker.edu.au"
            target="_blank"
            rel="noopener"
            className="px-8 py-3.5 bg-primary text-on-primary font-semibold rounded shadow-sm hover:bg-primary-dark transition-colors duration-150"
          >
            Explore Data Commons
          </a>
          <a
            href="#cohorts"
            className="px-8 py-3.5 border border-outline text-primary font-semibold rounded hover:bg-surface-alt transition-colors duration-150"
          >
            Request Access
          </a>
        </div>
      </div>
    </div>
  );
}
