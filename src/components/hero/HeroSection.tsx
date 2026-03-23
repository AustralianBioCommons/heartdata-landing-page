import HeroCanvas from "./HeroCanvas";
import HeroContent from "./HeroContent";

export default function HeroSection() {
  return (
    <section className="relative min-h-[min(600px,85vh)] flex items-center overflow-hidden bg-white">
      {/* Particle canvas */}
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
        {/* Multi-stop gradient overlay */}
        <div className="absolute inset-0 hero-gradient-overlay z-10" />
      </div>
      <HeroContent />
    </section>
  );
}
