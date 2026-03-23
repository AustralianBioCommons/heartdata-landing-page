import { useEffect, useRef } from "react";
import type { RefObject } from "react";

export function useParticleHeart(canvasRef: RefObject<HTMLCanvasElement | null>) {
  const mouseRef = useRef({ x: 0, y: 0 });
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let animationId: number;
    let disposed = false;

    // Dynamic import for code splitting
    import("three").then((THREE) => {
      if (disposed) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
      });

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Particle count based on device capability
      const isLowEnd =
        typeof navigator.hardwareConcurrency !== "undefined" &&
        navigator.hardwareConcurrency < 4;
      const particleCount = isLowEnd ? 1500 : 3000;

      // --- Heart shape generation ---
      const positions = new Float32Array(particleCount * 3);
      const originalPositions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      const sizes = new Float32Array(particleCount);

      const primaryLight = new THREE.Color("#6b9fd4");
      const warmTint = new THREE.Color("#a8b4d4");

      for (let i = 0; i < particleCount; i++) {
        // Parametric heart surface with jitter
        const u = Math.random() * Math.PI * 2;
        const v = Math.random() * Math.PI;

        const sinU = Math.sin(u);
        const cosU = Math.cos(u);
        const sinV = Math.sin(v);
        const cosV = Math.cos(v);

        // Heart surface equation
        let x = sinV * (15 * sinU - 4 * Math.sin(3 * u));
        let y =
          8 * cosV -
          (13 * cosU - 5 * Math.cos(2 * u) - 2 * Math.cos(3 * u) - Math.cos(4 * u));
        let z = sinV * (15 * cosU) * 0.3;

        // Scale and add jitter for organic feel
        const scale = 0.04;
        const jitter = 0.15;
        x = x * scale + (Math.random() - 0.5) * jitter;
        y = y * scale + (Math.random() - 0.5) * jitter;
        z = z * scale + (Math.random() - 0.5) * jitter;

        const idx = i * 3;
        positions[idx] = x;
        positions[idx + 1] = y;
        positions[idx + 2] = z;
        originalPositions[idx] = x;
        originalPositions[idx + 1] = y;
        originalPositions[idx + 2] = z;

        // Color gradient based on Y position (normalized)
        const t = (y + 1) / 2;
        const color = primaryLight.clone().lerp(warmTint, t);
        colors[idx] = color.r;
        colors[idx + 1] = color.g;
        colors[idx + 2] = color.b;

        // Size variation
        sizes[i] = 0.5 + Math.random() * 1.5;
      }

      // --- Particle system ---
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));

      const material = new THREE.ShaderMaterial({
        vertexShader: `
          attribute float aSize;
          varying vec3 vColor;
          varying float vOpacity;
          void main() {
            vColor = color;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = aSize * (200.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
            // Depth-based opacity
            vOpacity = smoothstep(8.0, 3.0, -mvPosition.z);
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
          varying float vOpacity;
          void main() {
            // Soft circle
            float dist = length(gl_PointCoord - vec2(0.5));
            if (dist > 0.5) discard;
            float alpha = smoothstep(0.5, 0.2, dist) * vOpacity;
            gl_FragColor = vec4(vColor, alpha * 0.85);
          }
        `,
        transparent: true,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);

      // --- Connection lines ---
      const linePositions: number[] = [];
      const maxConnectionDist = 0.35;
      const maxConnections = isLowEnd ? 800 : 2000;
      let connectionCount = 0;

      for (let i = 0; i < particleCount && connectionCount < maxConnections; i++) {
        for (let j = i + 1; j < particleCount && connectionCount < maxConnections; j++) {
          const dx = positions[i * 3] - positions[j * 3];
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
          const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxConnectionDist) {
            linePositions.push(
              positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
              positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
            );
            connectionCount++;
          }
        }
      }

      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(linePositions, 3)
      );

      const lineMaterial = new THREE.LineBasicMaterial({
        color: "#6b9fd4",
        transparent: true,
        opacity: 0.06,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(lines);

      camera.position.z = 5;

      // --- Resize handling ---
      const updateSize = () => {
        const parent = canvas.parentElement;
        if (!parent) return;
        const w = parent.clientWidth;
        const h = parent.clientHeight;
        renderer.setSize(w, h);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };

      const resizeObserver = new ResizeObserver(updateSize);
      resizeObserver.observe(canvas.parentElement!);
      updateSize();

      // --- Intersection observer to pause when off-screen ---
      const intersectionObserver = new IntersectionObserver(
        ([entry]) => {
          isVisibleRef.current = entry.isIntersecting;
        },
        { threshold: 0 }
      );
      intersectionObserver.observe(canvas);

      // --- Heartbeat timing ---
      // Double-peak Gaussian for realistic lub-dub
      const gaussian = (x: number, mean: number, sigma: number) =>
        Math.exp(-((x - mean) ** 2) / (2 * sigma ** 2));

      let time = 0;

      // If reduced motion, render one static frame
      if (prefersReducedMotion) {
        renderer.render(scene, camera);
        return;
      }

      // --- Animation loop ---
      const animate = () => {
        animationId = requestAnimationFrame(animate);

        if (!isVisibleRef.current) return;

        time += 0.02;

        // Heartbeat: ~75 BPM, cycle period ~0.8s mapped to animation time
        const cycle = time % 4; // 4 "animation seconds" per beat at 0.02 increment
        const cycleNorm = cycle / 4;
        const lub = gaussian(cycleNorm, 0.08, 0.03) * 0.12;
        const dub = gaussian(cycleNorm, 0.28, 0.04) * 0.06;
        const pulse = 1.0 + lub + dub;

        particles.scale.set(pulse, pulse, pulse);
        lines.scale.set(pulse, pulse, pulse);

        // Slow rotation
        particles.rotation.y += 0.001;
        lines.rotation.y = particles.rotation.y;

        // Mouse interaction -- soft repulsion
        const posAttr = geometry.attributes.position;
        const mx = (mouseRef.current.x / window.innerWidth) * 2 - 1;
        const my = -(mouseRef.current.y / window.innerHeight) * 2 + 1;

        for (let i = 0; i < particleCount; i++) {
          const idx = i * 3;
          const ox = originalPositions[idx];
          const oy = originalPositions[idx + 1];
          const oz = originalPositions[idx + 2];

          // Project to approximate screen space
          const projX = ox * 0.5;
          const projY = oy * 0.5;
          const dx = projX - mx;
          const dy = projY - my;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 0.8) {
            const force = (0.8 - dist) * 0.15;
            const angle = Math.atan2(dy, dx);
            positions[idx] = ox + Math.cos(angle) * force;
            positions[idx + 1] = oy + Math.sin(angle) * force;
            positions[idx + 2] = oz;
          } else {
            // Lerp back to original
            positions[idx] += (ox - positions[idx]) * 0.05;
            positions[idx + 1] += (oy - positions[idx + 1]) * 0.05;
            positions[idx + 2] += (oz - positions[idx + 2]) * 0.05;
          }
        }
        posAttr.needsUpdate = true;

        renderer.render(scene, camera);
      };

      animate();

      // Cleanup
      return () => {
        disposed = true;
        cancelAnimationFrame(animationId);
        resizeObserver.disconnect();
        intersectionObserver.disconnect();
        geometry.dispose();
        material.dispose();
        lineGeometry.dispose();
        lineMaterial.dispose();
        renderer.dispose();
      };
    });

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [canvasRef]);
}
