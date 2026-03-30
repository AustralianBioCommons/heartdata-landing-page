import { useRef } from "react";
import { useParticleHeart } from "../../hooks/useParticleHeart";

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useParticleHeart(canvasRef);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      role="presentation"
      className="absolute inset-0 w-full h-full"
    />
  );
}
