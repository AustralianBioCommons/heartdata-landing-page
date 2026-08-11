import TopNav from "./components/layout/TopNav";
import Footer from "./components/layout/Footer";
import ApplyHeader from "./components/apply/ApplyHeader";
import ApplyAccess from "./components/apply/ApplyAccess";
import ApplyContribute from "./components/apply/ApplyContribute";

export default function ApplyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-on-surface font-body">
      <TopNav />
      <main className="flex-1 pt-16">
        <ApplyHeader />
        <ApplyAccess />
        <ApplyContribute />
      </main>
      <Footer />
    </div>
  );
}
