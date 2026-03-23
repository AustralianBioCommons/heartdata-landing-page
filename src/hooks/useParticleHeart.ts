import { useEffect, useRef } from "react";
import type { RefObject } from "react";

interface BloodCell {
  mesh: import("three").Mesh;
  vx: number;
  vy: number;
  vz: number;
  rotVx: number;
  rotVy: number;
  rotVz: number;
  radius: number;
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

      // --- Scene ---
      const scene = new THREE.Scene();
      scene.background = new THREE.Color("#7A1A1A");

      const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
      camera.position.set(0, 0, 8);
      camera.lookAt(0, 0, 0);

      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

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
      // Blood cell shape: large radius, fat tube = tiny hole, mostly disc
      // Then squash Y to make it slightly oval (biconcave disc)
      // 20% smaller: 0.28*0.8=0.224, 0.22*0.8=0.176
      const torusGeo = new THREE.TorusGeometry(0.224, 0.176, 12, 24);
      torusGeo.scale(1.0, 0.85, 1.0); // slightly oval, not perfect circle
      const cellMat = new THREE.MeshPhongMaterial({
        color: "#c53030",
        emissive: "#3A0808",
        specular: "#FF6666",
        shininess: 40,
        transparent: true,
        opacity: 0.46, // 50% lighter (0.92 * 0.5)
      });

      // --- Cell management ---
      const cells: BloodCell[] = [];
      const MAX_CELLS = 160; // 400% more (40 * 4)
      const CELL_RADIUS = 0.4; // smaller collision radius to match

      // View bounds (approximate at z=0 for camera at z=8, fov=50)
      let viewW = 7;
      let viewH = 4;
      function spawnCell() {
        if (cells.length >= MAX_CELLS) return;

        const mesh = new THREE.Mesh(torusGeo, cellMat);

        // Spawn well off-screen left so cells are never seen appearing
        const x = -(viewW / 2) - 1;
        const y = (Math.random() - 0.5) * viewH * 1.2; // full height + beyond edges
        const z = (Math.random() - 0.5) * 2;
        mesh.position.set(x, y, z);

        // Random initial rotation (natural tumble)
        mesh.rotation.set(
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2
        );

        // Inject with high initial velocity, will decelerate to laminar speed
        const angle = (Math.random() - 0.5) * Math.PI; // full 180 arc
        const injectSpeed = 0.03 + Math.random() * 0.02; // 4-8x faster than cruise
        const vx = Math.cos(angle) * injectSpeed;
        const vy = Math.sin(angle) * injectSpeed;
        const vz = (Math.random() - 0.5) * 0.004;

        // Gentle tumble
        const rotVx = (Math.random() - 0.5) * 0.008;
        const rotVy = (Math.random() - 0.5) * 0.005;
        const rotVz = (Math.random() - 0.5) * 0.006;

        // Uniform size (tight range: 0.9 to 1.1)
        const s = 0.9 + Math.random() * 0.2;
        mesh.scale.set(s, s, s);

        scene.add(mesh);
        cells.push({ mesh, vx, vy, vz, rotVx, rotVy, rotVz, radius: CELL_RADIUS * s });
      }

      // --- Collision ---
      function resolveCollisions() {
        for (let i = 0; i < cells.length; i++) {
          for (let j = i + 1; j < cells.length; j++) {
            const a = cells[i];
            const b = cells[j];
            const dx = b.mesh.position.x - a.mesh.position.x;
            const dy = b.mesh.position.y - a.mesh.position.y;
            const dz = b.mesh.position.z - a.mesh.position.z;
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
            const minDist = a.radius + b.radius;

            if (dist < minDist && dist > 0.001) {
              // Push apart
              const overlap = (minDist - dist) / 2;
              const nx = dx / dist;
              const ny = dy / dist;
              const nz = dz / dist;

              a.mesh.position.x -= nx * overlap * 0.5;
              a.mesh.position.y -= ny * overlap * 0.5;
              a.mesh.position.z -= nz * overlap * 0.5;
              b.mesh.position.x += nx * overlap * 0.5;
              b.mesh.position.y += ny * overlap * 0.5;
              b.mesh.position.z += nz * overlap * 0.5;

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

      const animate = () => {
        animationId = requestAnimationFrame(animate);
        if (!isVisibleRef.current) return;

        const now = performance.now();
        const dt = Math.min((now - lastTime) / 1000, 0.05); // cap at 50ms
        lastTime = now;

        // Linear ramp down: 3x at start → 1x over 8s
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
          c.mesh.position.x += c.vx * speedMult;
          c.mesh.position.y += c.vy * speedMult;
          c.mesh.position.z += c.vz * speedMult;

          // Tumble
          c.mesh.rotation.x += c.rotVx;
          c.mesh.rotation.y += c.rotVy;
          c.mesh.rotation.z += c.rotVz;

          // Drag: decelerate from injection speed toward cruise
          c.vx *= 0.997;
          c.vy *= 0.997;
          c.vz *= 0.995;
          c.vz += (-c.mesh.position.z * 0.0001);
          // Gently nudge toward cruise speed rightward
          c.vx += (0.007 - c.vx) * 0.005;

          // Despawn if out of bounds (right, top, or bottom)
          const despawnX = (viewW / 2) + 2;
          const despawnY = (viewH / 2) + 3;
          if (c.mesh.position.x > despawnX || Math.abs(c.mesh.position.y) > despawnY) {
            scene.remove(c.mesh);
            cells.splice(i, 1);
          }
        }

        // Collisions
        resolveCollisions();

        renderer.render(scene, camera);
      };

      animate();

      // Cleanup
      return () => {
        disposed = true;
        cancelAnimationFrame(animationId);
        resizeObserver.disconnect();
        intersectionObserver.disconnect();
        for (const c of cells) {
          scene.remove(c.mesh);
        }
        cells.length = 0;
        torusGeo.dispose();
        cellMat.dispose();
        renderer.dispose();
      };
    });

    return () => {
      disposed = true;
    };
  }, [canvasRef]);
}
