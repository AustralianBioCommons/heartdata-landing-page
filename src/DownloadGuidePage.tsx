import type { ReactNode } from "react";
import TopNav from "./components/layout/TopNav";
import Footer from "./components/layout/Footer";
import SectionWrapper from "./components/ui/SectionWrapper";
import MaterialIcon from "./components/ui/MaterialIcon";
import { CONTACT_URL } from "./config/links";

const DATA_COMMONS_URL = "https://commons.heartdata.baker.edu.au";
const STUDY_EXPLORER_URL = "https://commons.heartdata.baker.edu.au/discovery";
const GEN3_METADATA_URL = "https://github.com/AustralianBioCommons/gen3-metadata";
const GEN3_CLIENT_URL = "https://github.com/uc-cdis/cdis-data-client";
const GEN3_CLIENT_DOCS_URL = "https://docs.gen3.org/gen3-resources/tools/data-client/";
const GEN3_API_KEY_DOCS_URL =
  "https://docs.gen3.org/gen3-resources/user-guide/using-api/#credentials-to-send-api-requests";
const GEN3_WORKSPACE_DOCS_URL = "https://docs.gen3.org/gen3-resources/user-guide/analyze-data/";

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="bg-on-surface text-surface/90 rounded-sm p-4 my-3 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed">
      <code>{children}</code>
    </pre>
  );
}

function Code({ children }: { children: ReactNode }) {
  return (
    <code className="rounded bg-surface-container px-1 py-0.5 text-[0.85em] font-mono">
      {children}
    </code>
  );
}

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener" className="text-primary font-medium hover:underline">
      {children}
    </a>
  );
}

const workspaceCards = [
  {
    icon: "rocket_launch",
    title: "Launch a workspace",
    body: (
      <>
        Click <strong>Workspace</strong> in the portal&rsquo;s top nav, choose a preconfigured image
        (JupyterHub for Python/R, or RStudio), and click <strong>Launch</strong>.
      </>
    ),
  },
  {
    icon: "dataset",
    title: "Get your data in",
    body: (
      <>
        Easiest: on the Exploration page, select your cohort and click{" "}
        <strong>Export to Workspace</strong> &mdash; files appear under <Code>/pd/data</Code> (allow
        ~5&nbsp;min). Or upload your <Code>credentials.json</Code> and <Code>manifest.json</Code> and
        run the Gen3 client (section&nbsp;2) inside the workspace.
      </>
    ),
  },
  {
    icon: "save",
    title: "Save to /pd",
    body: (
      <>
        Save everything under <Code>/pd</Code>, your personal drive &mdash; it persists across
        sessions. Anything outside <Code>/pd</Code> is lost when you terminate the workspace.
      </>
    ),
  },
  {
    icon: "power_settings_new",
    title: "Get results out & finish",
    body: (
      <>
        Download notebooks and outputs with <strong>File &rarr; Download as</strong> (or the
        terminal). Click <strong>Terminate Workspace</strong> when you&rsquo;re done to free cloud
        resources.
      </>
    ),
  },
];

export default function DownloadGuidePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-on-surface font-body">
      <TopNav />
      <main className="flex-1 pt-16">
        {/* Header */}
        <SectionWrapper id="top" bg="bg-surface-alt" labelledBy="download-heading">
          <p className="text-xs uppercase tracking-wider font-medium text-on-surface-variant mb-3">
            For researchers with access
          </p>
          <h1
            id="download-heading"
            className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-4 max-w-3xl leading-tight"
          >
            Downloading &amp; analysing data
          </h1>
          <p className="text-on-surface-variant text-sm sm:text-base max-w-3xl leading-relaxed">
            Once your access is approved, there are two ways to get data out of the ACDC Data Commons:
            pull the harmonised <strong>clinical &amp; metadata</strong> as tidy tables with the{" "}
            <Code>gen3-metadata</Code> tool, or download the large <strong>omics files</strong> with the
            Gen3 client and a manifest. You can then analyse the data on your own machine or in a
            browser-based Gen3 workspace &mdash; this guide covers all three.
          </p>
        </SectionWrapper>

        {/* Prerequisite: API key */}
        <SectionWrapper id="api-key" bg="bg-white" labelledBy="apikey-heading" className="scroll-mt-24">
          <h2
            id="apikey-heading"
            className="font-headline text-2xl sm:text-3xl font-bold text-primary mb-4"
          >
            Before you start &mdash; get your API key
          </h2>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-3xl">
            Every tool below authenticates with an API key. Sign in to the{" "}
            <ExtLink href={DATA_COMMONS_URL}>Data Commons</ExtLink>, open your profile, create an API
            key, and download it as <Code>credentials.json</Code>. You&rsquo;ll point each tool at this
            file. The <ExtLink href={GEN3_API_KEY_DOCS_URL}>Gen3 credentials guide</ExtLink> has the
            full walkthrough.
          </p>
        </SectionWrapper>

        {/* 1. Clinical & metadata */}
        <SectionWrapper id="metadata" bg="bg-surface-alt" labelledBy="metadata-heading" className="scroll-mt-24">
          <h2
            id="metadata-heading"
            className="font-headline text-2xl sm:text-3xl font-bold text-primary mb-4"
          >
            1 &middot; Clinical &amp; metadata
          </h2>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-3xl mb-6">
            The <ExtLink href={GEN3_METADATA_URL}>gen3-metadata</ExtLink> tool fetches the harmonised
            clinical and metadata for a study. It walks the data dictionary and returns every node
            (subject, demographic, and so on) as raw JSON or tidy tables &mdash; pandas DataFrames in
            Python, data.frames in R.
          </p>

          <h3 className="text-sm font-semibold text-on-surface mb-1">Python</h3>
          <CodeBlock>{`# install
git clone https://github.com/AustralianBioCommons/gen3-metadata.git
bash build.sh`}</CodeBlock>
          <CodeBlock>{`from gen3_metadata.gen3_metadata_parser import fetch_all_metadata

result = fetch_all_metadata("credentials.json", "program1", "AusDiab")

result.subject          # one node, as raw JSON
dfs = result.to_df()    # all nodes, as pandas DataFrames
dfs.subject             # -> DataFrame`}</CodeBlock>

          <h3 className="text-sm font-semibold text-on-surface mb-1 mt-6">R</h3>
          <CodeBlock>{`# install
remotes::install_github("AustralianBioCommons/gen3-metadata", subdir = "gen3metadata-R")`}</CodeBlock>
          <CodeBlock>{`library(gen3metadata)

result <- fetch_all_metadata("credentials.json", "program1", "AusDiab")

result$subject          # one node, as a nested list
dfs <- to_df(result)    # all nodes, as data.frames
dfs$subject             # -> data.frame`}</CodeBlock>

          <p className="text-on-surface-variant text-sm leading-relaxed max-w-3xl mt-4">
            By default you get the <strong>latest</strong> data release. Pass{" "}
            <Code>data_release = "v2.3"</Code> to pin a version, or <Code>None</Code> (Python) /{" "}
            <Code>NULL</Code> (R) to return every record. Full docs and an example notebook are in the{" "}
            <ExtLink href={GEN3_METADATA_URL}>gen3-metadata repository</ExtLink>.
          </p>
        </SectionWrapper>

        {/* 2. Omics files */}
        <SectionWrapper id="omics" bg="bg-white" labelledBy="omics-heading" className="scroll-mt-24">
          <h2
            id="omics-heading"
            className="font-headline text-2xl sm:text-3xl font-bold text-primary mb-4"
          >
            2 &middot; Omics files
          </h2>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-3xl mb-6">
            Genomic and other omics files are large, so you download them with the Gen3 client using a{" "}
            <strong>manifest</strong> &mdash; a small JSON file listing the files you selected.
          </p>

          <ol className="space-y-6">
            <li>
              <h3 className="text-sm font-semibold text-on-surface mb-1">1. Build a manifest</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed max-w-3xl">
                In the <ExtLink href={STUDY_EXPLORER_URL}>Study Explorer</ExtLink>, select the studies
                or files you want and click <strong>Download Manifest</strong> to get{" "}
                <Code>manifest.json</Code>.
              </p>
            </li>
            <li>
              <h3 className="text-sm font-semibold text-on-surface mb-1">2. Install the Gen3 client</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed max-w-3xl">
                Download the <ExtLink href={GEN3_CLIENT_URL}>gen3-client</ExtLink> binary for your
                operating system from its releases page and add it to your <Code>PATH</Code>. The{" "}
                <ExtLink href={GEN3_CLIENT_DOCS_URL}>Gen3 data-client docs</ExtLink> cover the details.
              </p>
            </li>
            <li>
              <h3 className="text-sm font-semibold text-on-surface mb-1">
                3. Configure it with your key
              </h3>
              <CodeBlock>{`gen3-client configure --profile acdc \\
  --cred credentials.json \\
  --apiendpoint https://commons.heartdata.baker.edu.au`}</CodeBlock>
            </li>
            <li>
              <h3 className="text-sm font-semibold text-on-surface mb-1">4. Download the files</h3>
              <CodeBlock>{`gen3-client download-multiple --profile acdc --manifest manifest.json`}</CodeBlock>
            </li>
          </ol>

          <div className="mt-6 bg-surface-alt border border-outline-light rounded-sm p-5 max-w-3xl">
            <h3 className="text-sm font-semibold text-on-surface mb-2">Troubleshooting</h3>
            <ul className="text-xs text-on-surface-variant space-y-1 list-disc pl-5 leading-relaxed">
              <li>Make sure you&rsquo;re signed in and your access to the selected studies is approved.</li>
              <li>Manifests expire &mdash; regenerate from the Study Explorer if downloads fail.</li>
              <li>
                Check the endpoint is <Code>https://commons.heartdata.baker.edu.au</Code>.
              </li>
              <li>On a network error, confirm your VPN / connectivity.</li>
            </ul>
          </div>
        </SectionWrapper>

        {/* 3. Analyse in a workspace */}
        <SectionWrapper id="workspaces" bg="bg-surface-alt" labelledBy="workspaces-heading" className="scroll-mt-24">
          <h2
            id="workspaces-heading"
            className="font-headline text-2xl sm:text-3xl font-bold text-primary mb-4"
          >
            3 &middot; Analyse in a Gen3 workspace
          </h2>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-3xl mb-6">
            Prefer not to set anything up locally? Gen3 <strong>workspaces</strong> are browser-based
            Jupyter or RStudio environments that sit right next to the data. The{" "}
            <ExtLink href={GEN3_WORKSPACE_DOCS_URL}>Gen3 analysis guide</ExtLink> has the full details.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {workspaceCards.map((card) => (
              <div
                key={card.title}
                className="bg-white border border-outline-light border-l-2 border-l-primary p-5 rounded-sm"
              >
                <MaterialIcon icon={card.icon} className="text-primary text-2xl mb-2 block" />
                <h3 className="text-sm font-semibold text-on-surface mb-1">{card.title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-on-surface-variant mt-8">
            Need help?{" "}
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
