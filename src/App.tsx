import TopNav from "./components/layout/TopNav";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/hero/HeroSection";
import CriticalChallenge from "./components/sections/CriticalChallenge";
import OpportunityPrecision from "./components/sections/OpportunityPrecision";
import FederatedCohorts from "./components/sections/FederatedCohorts";
import OutcomesRoadmap from "./components/sections/OutcomesRoadmap";
import StrategicSignificance from "./components/sections/StrategicSignificance";
import StrategicGoals from "./components/sections/StrategicGoals";
import Partners from "./components/sections/Partners";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-on-surface font-body">
      <TopNav />
      <main className="flex-1 pt-16">
        <HeroSection />
        <CriticalChallenge />
        <OpportunityPrecision />
        <FederatedCohorts />
        <OutcomesRoadmap />
        <StrategicSignificance />
        <StrategicGoals />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
