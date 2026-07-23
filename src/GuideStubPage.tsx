import TopNav from "./components/layout/TopNav";
import Footer from "./components/layout/Footer";
import SectionWrapper from "./components/ui/SectionWrapper";
import MaterialIcon from "./components/ui/MaterialIcon";
import { CONTACT_URL } from "./config/links";

// Placeholder guide page — a real, design-system page for a User Guide topic
// whose detailed walkthrough is still being written.
export default function GuideStubPage({ title, intro }: { title: string; intro: string }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-on-surface font-body">
      <TopNav />
      <main className="flex-1 pt-16">
        <SectionWrapper id="top" bg="bg-surface-alt" labelledBy="stub-heading">
          <p className="text-xs uppercase tracking-wider font-medium text-on-surface-variant mb-3">
            User guide
          </p>
          <h1
            id="stub-heading"
            className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-4 max-w-3xl leading-tight"
          >
            {title}
          </h1>
          <p className="text-on-surface-variant text-sm sm:text-base max-w-3xl leading-relaxed">
            {intro}
          </p>
        </SectionWrapper>

        <SectionWrapper bg="bg-white">
          <div className="bg-surface-alt border border-outline-light border-l-2 border-l-primary rounded-sm p-6 max-w-3xl flex gap-4">
            <MaterialIcon icon="schedule" className="text-primary text-2xl shrink-0 mt-0.5" />
            <div>
              <h2 className="text-sm font-semibold text-on-surface mb-1">Detailed guide coming soon</h2>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                We&rsquo;re writing this walkthrough. In the meantime, need a hand?{" "}
                <a href={CONTACT_URL} className="text-primary hover:underline">
                  Contact the ACDC team
                </a>
                .
              </p>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
