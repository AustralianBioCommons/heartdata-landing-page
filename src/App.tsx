import TopNav from "./components/layout/TopNav";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/hero/HeroSection";
import CriticalChallenge from "./components/sections/CriticalChallenge";
import FederatedCohorts from "./components/sections/FederatedCohorts";
import OpportunityPrecision from "./components/sections/OpportunityPrecision";
import StrategicSignificance from "./components/sections/StrategicSignificance";
import Partners from "./components/sections/Partners";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-on-surface font-body">
      <TopNav />
      <main className="flex-1 pt-16">
        <HeroSection />
        <CriticalChallenge />
        <FederatedCohorts />
        <OpportunityPrecision />
        <StrategicSignificance />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
