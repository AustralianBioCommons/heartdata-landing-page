import { useEffect, useRef } from "react";
import type { RefObject } from "react";

interface BloodCell {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  rx: number;
  ry: number;
  rz: number;
  rotVx: number;
  rotVy: number;
  rotVz: number;
  scale: number;
  radius: number;
}

// Biconcave red-blood-cell disc (dimpled centre, no hole): revolve an
// Evans–Fung-style half-thickness profile around the Y axis.
function createBiconcaveDiscGeometry(THREE: typeof import("three")) {
  const R = 0.4; // outer radius (matches the previous cell footprint)
  const A = 0.27; // thickness amplitude (centre ~0.11, rim bulge ~0.30)
  const PROFILE_STEPS = 8; // samples along the radius (lowered for perf)
  const LATHE_SEGMENTS = 16; // revolution segments (lowered for perf)

  // h(x) = A * sqrt(1 - x^2) * (0.21 + 2.0 x^2 - 1.12 x^4), x = r/R in [0,1]
  const halfThickness = (x: number) =>
    A * Math.sqrt(Math.max(0, 1 - x * x)) * (0.21 + 2.0 * x * x - 1.12 * x * x * x * x);

  const points: import("three").Vector2[] = [];
  for (let i = 0; i <= PROFILE_STEPS; i++) {
    // bottom surface: centre -> rim
    const x = i / PROFILE_STEPS;
    points.push(new THREE.Vector2(x * R, -halfThickness(x)));
  }
  for (let i = 1; i <= PROFILE_STEPS; i++) {
    // top surface: rim -> centre (skip the duplicate rim point)
    const x = (PROFILE_STEPS - i) / PROFILE_STEPS;
    points.push(new THREE.Vector2(x * R, halfThickness(x)));
  }

  const geo = new THREE.LatheGeometry(points, LATHE_SEGMENTS);
  geo.computeVertexNormals();
  return geo;
}

// Runtime device-quality heuristic. Static deploy -> no server-side detection,
// so we tier in-browser. deviceMemory is Chromium-only; default high when
// absent so Safari/Firefox aren't penalised. A coarse pointer flags
// phones/tablets, which often report many cores but have weak GPUs.
type QualityTier = { maxCells: number; pixelRatioCap: number; antialias: boolean };

function detectQualityTier(): QualityTier {
  const cores = navigator.hardwareConcurrency ?? 8;
  const mem = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8;
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  if (coarse || cores <= 4 || mem <= 4) return { maxCells: 45, pixelRatioCap: 1, antialias: false };
  if (cores >= 8 && mem >= 8) return { maxCells: 160, pixelRatioCap: 2, antialias: true };
  return { maxCells: 90, pixelRatioCap: 1.5, antialias: true };
}

export function useParticleHeart(canvasRef: RefObject<HTMLCanvasElement | null>) {
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let animationId: number;
    let disposed = false;

    import("three").then((THREE) => {
      if (disposed) return;

      const tier = detectQualityTier();

      // --- Scene ---
      const scene = new THREE.Scene();
      scene.background = new THREE.Color("#7A1A1A");

      const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
      camera.position.set(0, 0, 8);
      camera.lookAt(0, 0, 0);

      const renderer = new THREE.WebGLRenderer({ canvas, antialias: tier.antialias });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, tier.pixelRatioCap));

      // --- Lighting ---
      const ambient = new THREE.AmbientLight("#551111", 0.8);
      scene.add(ambient);

      const dirLight = new THREE.DirectionalLight("#FF8888", 1.0);
      dirLight.position.set(3, 4, 5);
      scene.add(dirLight);

      const fillLight = new THREE.DirectionalLight("#882222", 0.4);
      fillLight.position.set(-2, -1, 3);
      scene.add(fillLight);

      // --- Shared geometry & material ---
      // Biconcave red-blood-cell disc (dimpled centre, no through-hole).
      const cellGeo = createBiconcaveDiscGeometry(THREE);
      const cellMat = new THREE.MeshPhongMaterial({
        color: "#c53030",
        emissive: "#3A0808",
        specular: "#FF6666",
        shininess: 40,
        transparent: true,
        opacity: 0.46, // 50% lighter (0.92 * 0.5)
      });

      // --- Cell management: one InstancedMesh => a single draw call for all cells ---
      const cells: BloodCell[] = [];
      const MAX_CELLS = tier.maxCells;
      const CELL_RADIUS = 0.4; // collision radius

      const instanced = new THREE.InstancedMesh(cellGeo, cellMat, MAX_CELLS);
      instanced.frustumCulled = false; // bounds don't track moving instances; the band fills the view
      instanced.count = 0; // nothing drawn until cells spawn
      scene.add(instanced);
      const dummy = new THREE.Object3D(); // reused to compose per-instance matrices

      // View bounds (approximate at z=0 for camera at z=8, fov=50)
      const REF_VIEW_W = 18; // viewW where flow runs at reference (desktop) speed -> flowScale = 1
      let viewW = 7;
      let viewH = 4;
      let flowScale = 1; // scales flow velocity with viewport so laminar is reached at any size
      function spawnCell() {
        if (cells.length >= MAX_CELLS) return;

        // Spawn well off-screen left so cells are never seen appearing
        const x = -(viewW / 2) - 1;
        const y = (Math.random() - 0.5) * viewH * 1.2; // full height + beyond edges
        const z = (Math.random() - 0.5) * 2;

        // Inject with high initial velocity, will decelerate to laminar speed
        const angle = (Math.random() - 0.5) * Math.PI; // full 180 arc
        const injectSpeed = (0.03 + Math.random() * 0.02) * flowScale; // 4-8x cruise, viewport-scaled
        const vx = Math.cos(angle) * injectSpeed;
        const vy = Math.sin(angle) * injectSpeed;
        const vz = (Math.random() - 0.5) * 0.004 * flowScale;

        // Gentle tumble
        const rotVx = (Math.random() - 0.5) * 0.008;
        const rotVy = (Math.random() - 0.5) * 0.005;
        const rotVz = (Math.random() - 0.5) * 0.006;

        // Uniform size (tight range: 0.9 to 1.1)
        const s = 0.9 + Math.random() * 0.2;

        cells.push({
          x, y, z,
          vx, vy, vz,
          rx: Math.random() * Math.PI * 2,
          ry: Math.random() * Math.PI * 2,
          rz: Math.random() * Math.PI * 2,
          rotVx, rotVy, rotVz,
          scale: s,
          radius: CELL_RADIUS * s,
        });
      }

      // --- Collision ---
      function resolveCollisions() {
        for (let i = 0; i < cells.length; i++) {
          for (let j = i + 1; j < cells.length; j++) {
            const a = cells[i];
            const b = cells[j];
            const dx = b.x - a.x;
            const dy = b.y - a.y;
            const dz = b.z - a.z;
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
            const minDist = a.radius + b.radius;

            if (dist < minDist && dist > 0.001) {
              // Push apart
              const overlap = (minDist - dist) / 2;
              const nx = dx / dist;
              const ny = dy / dist;
              const nz = dz / dist;

              a.x -= nx * overlap * 0.5;
              a.y -= ny * overlap * 0.5;
              a.z -= nz * overlap * 0.5;
              b.x += nx * overlap * 0.5;
              b.y += ny * overlap * 0.5;
              b.z += nz * overlap * 0.5;

              // Soft velocity deflection (damped)
              const dvx = a.vx - b.vx;
              const dvy = a.vy - b.vy;
              const dvz = a.vz - b.vz;
              const dot = dvx * nx + dvy * ny + dvz * nz;

              if (dot > 0) {
                const impulse = dot * 0.45; // heavy -- cells knock each other about
                a.vx -= impulse * nx;
                a.vy -= impulse * ny;
                a.vz -= impulse * nz;
                b.vx += impulse * nx;
                b.vy += impulse * ny;
                b.vz += impulse * nz;
              }
            }
          }
        }
      }

      // --- Resize ---
      const updateSize = () => {
        const parent = canvas.parentElement;
        if (!parent) return;
        const w = parent.clientWidth;
        const h = parent.clientHeight;
        renderer.setSize(w, h);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();

        // Recalculate view bounds
        const vFov = (camera.fov * Math.PI) / 180;
        viewH = 2 * Math.tan(vFov / 2) * camera.position.z;
        viewW = viewH * camera.aspect;

        // Scale flow speed with viewport width so the inject->laminar transition
        // always completes at the same fraction of the visible band.
        flowScale = Math.min(Math.max(viewW / REF_VIEW_W, 0.3), 1.25);
      };

      const resizeObserver = new ResizeObserver(updateSize);
      resizeObserver.observe(canvas.parentElement!);
      updateSize();

      // --- Visibility ---
      const intersectionObserver = new IntersectionObserver(
        ([entry]) => { isVisibleRef.current = entry.isIntersecting; },
        { threshold: 0 }
      );
      intersectionObserver.observe(canvas);

      // --- Spawn timer ---
      let timeSinceSpawn = 0;
      let nextSpawnDelay = 0.03 + Math.random() * 0.05; // much faster spawning

      // Start empty -- cells spawn in from the left only

      if (prefersReducedMotion) {
        renderer.render(scene, camera);
        return;
      }

      // --- Animation ---
      let lastTime = performance.now();
      const animStartTime = performance.now();
      const RAMP_DURATION = 24000; // 14 seconds to reach baseline
      const FAST_MULT = 3.0; // 200% faster at start
      let frame = 0;

      const animate = () => {
        animationId = requestAnimationFrame(animate);
        if (!isVisibleRef.current) return;

        const now = performance.now();
        const dt = Math.min((now - lastTime) / 1000, 0.05); // cap at 50ms
        lastTime = now;

        // Linear ramp down: 3x at start → 1x over time
        const elapsed = now - animStartTime;
        const rampT = Math.min(1, elapsed / RAMP_DURATION);
        const speedMult = FAST_MULT - (FAST_MULT - 1.5) * rampT; // baseline is 1.2x (20% faster)

        // Spawn new cells
        timeSinceSpawn += dt;
        if (timeSinceSpawn >= nextSpawnDelay) {
          spawnCell();
          timeSinceSpawn = 0;
          nextSpawnDelay = 0.03 + Math.random() * 0.05;
        }

        // Update cells
        for (let i = cells.length - 1; i >= 0; i--) {
          const c = cells[i];

          // Move (scaled by ramp multiplier)
          c.x += c.vx * speedMult;
          c.y += c.vy * speedMult;
          c.z += c.vz * speedMult;

          // Tumble
          c.rx += c.rotVx;
          c.ry += c.rotVy;
          c.rz += c.rotVz;

          // Drag: decelerate from injection speed toward cruise
          c.vx *= 0.997;
          c.vy *= 0.997;
          c.vz *= 0.995;
          c.vz += (-c.z * 0.0001);
          // Gently nudge toward cruise speed rightward (cruise scales with viewport)
          c.vx += (0.007 * flowScale - c.vx) * 0.005;

          // Despawn if out of bounds (right, top, or bottom)
          const despawnX = (viewW / 2) + 2;
          const despawnY = (viewH / 2) + 3;
          if (c.x > despawnX || Math.abs(c.y) > despawnY) {
            cells.splice(i, 1);
          }
        }

        // Collisions (throttled to every 2nd frame; soft + decorative)
        if (frame % 2 === 0) resolveCollisions();
        frame++;

        // Write per-instance matrices for the active cells
        for (let i = 0; i < cells.length; i++) {
          const c = cells[i];
          dummy.position.set(c.x, c.y, c.z);
          dummy.rotation.set(c.rx, c.ry, c.rz);
          dummy.scale.setScalar(c.scale);
          dummy.updateMatrix();
          instanced.setMatrixAt(i, dummy.matrix);
        }
        instanced.count = cells.length;
        instanced.instanceMatrix.needsUpdate = true;

        renderer.render(scene, camera);
      };

      animate();

      // Cleanup
      return () => {
        disposed = true;
        cancelAnimationFrame(animationId);
        resizeObserver.disconnect();
        intersectionObserver.disconnect();
        scene.remove(instanced);
        instanced.dispose();
        cells.length = 0;
        cellGeo.dispose();
        cellMat.dispose();
        renderer.dispose();
      };
    });

    return () => {
      disposed = true;
    };
  }, [canvasRef]);
}
