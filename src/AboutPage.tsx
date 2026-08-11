import TopNav from "./components/layout/TopNav";
import Footer from "./components/layout/Footer";
import AboutHeader from "./components/about/AboutHeader";
import AboutOverview from "./components/about/AboutOverview";
import AboutDataCollection from "./components/about/AboutDataCollection";
import AboutApplyCta from "./components/about/AboutApplyCta";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-on-surface font-body">
      <TopNav />
      <main className="flex-1 pt-16">
        <AboutHeader />
        <AboutOverview />
        <AboutDataCollection />
        <AboutApplyCta />
      </main>
      <Footer />
    </div>
  );
}
