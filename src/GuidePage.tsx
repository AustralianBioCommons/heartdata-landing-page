import TopNav from "./components/layout/TopNav";
import Footer from "./components/layout/Footer";
import SectionWrapper from "./components/ui/SectionWrapper";
import MaterialIcon from "./components/ui/MaterialIcon";
import { CONTACT_URL } from "./config/links";

const base = import.meta.env.BASE_URL;

interface GuideTopic {
  id: string;
  icon: string;
  title: string;
  description: string;
  href?: string; // when the guide already exists, link straight to it
}

const topics: GuideTopic[] = [
  {
    id: "account",
    icon: "person_add",
    title: "Set up an account",
    description: "Create your ACDC Data Commons account and sign in.",
  },
  {
    id: "build-cohorts",
    icon: "tune",
    title: "Build cohorts with filters",
    description:
      "Use the cohort explorer to filter the harmonised data and assemble your study set.",
  },
  {
    id: "analysis-approach",
    icon: "analytics",
    title: "Choose an analysis approach",
    description: "Decide between a managed analysis workspace and your own environment.",
  },
  {
    id: "api-key",
    icon: "key",
    title: "Create an API key",
    description: "Generate an API key to pull approved data into your own environment.",
    href: `${base}download.html#api-key`,
  },
  {
    id: "download-data",
    icon: "download",
    title: "Download data",
    description: "Pull clinical & metadata as tables, or omics files with the Gen3 client and a manifest.",
    href: `${base}download.html`,
  },
  {
    id: "workspaces",
    icon: "terminal",
    title: "Use workspaces",
    description: "Run analyses in a managed, secure analytical workspace.",
    href: `${base}download.html#workspaces`,
  },
];

export default function GuidePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-on-surface font-body">
      <TopNav />
      <main className="flex-1 pt-16">
        {/* Header */}
        <SectionWrapper id="top" bg="bg-surface-alt" labelledBy="guide-heading">
          <p className="text-xs uppercase tracking-wider font-medium text-on-surface-variant mb-3">
            For researchers with access
          </p>
          <h1
            id="guide-heading"
            className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-4 max-w-3xl leading-tight"
          >
            User Guide
          </h1>
          <p className="text-on-surface-variant text-sm sm:text-base max-w-3xl leading-relaxed">
            Step-by-step walkthroughs for working with the ACDC platform &mdash; from setting up your
            account to building cohorts, running analyses, and getting your data out. Detailed guides
            with screenshots are being added; the topics below outline what&rsquo;s covered.
          </p>
        </SectionWrapper>

        {/* Topics */}
        <SectionWrapper bg="bg-white" labelledBy="topics-heading">
          <h2
            id="topics-heading"
            className="font-headline text-2xl sm:text-3xl font-bold text-primary mb-6"
          >
            Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topics.map((t) => (
              <div
                key={t.id}
                id={t.id}
                className="scroll-mt-24 bg-surface-alt border border-outline-light border-l-2 border-l-primary p-5 rounded-sm flex gap-4"
              >
                <MaterialIcon icon={t.icon} className="text-primary text-2xl shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-on-surface">{t.title}</h3>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                    {t.description}
                  </p>
                  {t.href ? (
                    <a
                      href={t.href}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary-dark mt-2"
                    >
                      Read guide
                      <MaterialIcon icon="open_in_new" className="text-xs" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full bg-white border border-outline-light px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-on-surface-variant mt-2">
                      <MaterialIcon icon="schedule" className="text-xs" />
                      Coming soon
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-on-surface-variant mt-6">
            More detailed documentation is on the way. Need help now?{" "}
            <a href={CONTACT_URL} className="text-primary hover:underline">
              Contact the ACDC team
            </a>
            .
          </p>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
