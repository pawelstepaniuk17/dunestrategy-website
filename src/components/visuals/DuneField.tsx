import { useEffect, useRef } from "react";

/**
 * DuneField
 * A real-time, GPU-light canvas animation of layered desert dune ridges.
 * Ridges drift continuously; the pointer warps the sand in real time,
 * lifting a soft crest that follows the cursor (reactive on hover).
 *
 * Palette is derived from the site's design tokens (deep navy + gold),
 * read from CSS custom properties so it always matches the theme.
 */

type Ridge = {
  baseY: number; // 0..1 vertical anchor
  amp: number; // wave amplitude in px
  wavelength: number; // px
  speed: number; // horizontal drift px/s
  phase: number;
  color: string;
  fillAlpha: number;
};

function readHsl(varName: string, fallback: string) {
  if (typeof window === "undefined") return fallback;
  const v = getComputedStyle(document.documentElement)
    .getPropertyValue(varName)
    .trim();
  return v ? `hsl(${v})` : fallback;
}

function readHslA(varName: string, alpha: number, fallback: string) {
  if (typeof window === "undefined") return fallback;
  const v = getComputedStyle(document.documentElement)
    .getPropertyValue(varName)
    .trim();
  return v ? `hsl(${v} / ${alpha})` : fallback;
}

const DuneField = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number>(0);
  // Pointer state in canvas pixel space. Target is where the cursor is,
  // current eases toward it so the crest glides rather than snaps.
  const pointer = useRef({
    tx: -9999,
    ty: -9999,
    x: -9999,
    y: -9999,
    strength: 0,
    targetStrength: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Theme colors
    let bg = readHsl("--background", "hsl(217 42% 8%)");
    let gold = readHsl("--gold", "hsl(40 54% 58%)");
    let ridgeCore = readHslA("--foreground", 1, "hsl(210 30% 94%)");

    let ridges: Ridge[] = [];

    const buildRidges = () => {
      // Far -> near. Near ridges are larger, brighter, faster.
      const layers = 7;
      ridges = Array.from({ length: layers }).map((_, i) => {
        const t = i / (layers - 1); // 0 far .. 1 near
        return {
          baseY: 0.42 + t * 0.62,
          amp: 10 + t * 46,
          wavelength: 520 - t * 300,
          speed: 2 + t * 6,
          phase: i * 1.7,
          color: gold,
          fillAlpha: 0.05 + t * 0.14,
        };
      });
    };

    const resize = () => {
      const parent = canvas.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // refresh theme colors on resize (covers theme switches)
      bg = readHsl("--background", "hsl(217 42% 8%)");
      gold = readHsl("--gold", "hsl(40 54% 58%)");
      ridgeCore = readHslA("--foreground", 1, "hsl(210 30% 94%)");
      buildRidges();
    };

    resize();

    let last = performance.now();

    const draw = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      const p = pointer.current;
      // Ease pointer position + strength for smooth, real-time warp.
      p.x += (p.tx - p.x) * Math.min(dt * 10, 1);
      p.y += (p.ty - p.y) * Math.min(dt * 10, 1);
      p.strength += (p.targetStrength - p.strength) * Math.min(dt * 6, 1);

      // Background wash
      ctx.clearRect(0, 0, width, height);
      const grad = ctx.createLinearGradient(0, 0, 0, height);
      grad.addColorStop(0, bg);
      grad.addColorStop(1, bg);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      const time = prefersReduced ? 0 : now / 1000;
      const influence = 190; // px radius of the pointer crest

      for (let r = 0; r < ridges.length; r++) {
        const ridge = ridges[r];
        const yAnchor = ridge.baseY * height;
        const drift = prefersReduced ? 0 : time * ridge.speed;

        ctx.beginPath();
        const step = 8;
        for (let x = -step; x <= width + step; x += step) {
          const k = (x + drift * 6 + ridge.phase * 120) / ridge.wavelength;
          let y =
            yAnchor +
            Math.sin(k * Math.PI * 2) * ridge.amp +
            Math.sin(k * Math.PI * 2 * 0.5 + ridge.phase) * ridge.amp * 0.4;

          // Pointer warp: lift the sand near the cursor, scaled by ridge depth
          if (p.strength > 0.001) {
            const dx = x - p.x;
            const dist = Math.abs(dx);
            if (dist < influence) {
              const falloff = 1 - dist / influence;
              const smooth = falloff * falloff * (3 - 2 * falloff);
              const depthScale = ridge.baseY; // near ridges react more
              // Only lift ridges at/above the cursor band for a dune-crest feel
              const bandProximity = Math.max(
                0,
                1 - Math.abs(yAnchor - p.y) / (height * 0.55)
              );
              y -= smooth * 60 * p.strength * depthScale * bandProximity;
            }
          }

          if (x === -step) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        // Close the shape to the bottom to fill the dune body
        ctx.lineTo(width + step, height);
        ctx.lineTo(-step, height);
        ctx.closePath();

        ctx.fillStyle = `hsl(${getComputedStyle(document.documentElement)
          .getPropertyValue("--gold")
          .trim()} / ${ridge.fillAlpha})`;
        ctx.fill();

        // Crest line
        ctx.beginPath();
        for (let x = -step; x <= width + step; x += step) {
          const k = (x + drift * 6 + ridge.phase * 120) / ridge.wavelength;
          let y =
            yAnchor +
            Math.sin(k * Math.PI * 2) * ridge.amp +
            Math.sin(k * Math.PI * 2 * 0.5 + ridge.phase) * ridge.amp * 0.4;
          if (p.strength > 0.001) {
            const dx = x - p.x;
            const dist = Math.abs(dx);
            if (dist < influence) {
              const falloff = 1 - dist / influence;
              const smooth = falloff * falloff * (3 - 2 * falloff);
              const depthScale = ridge.baseY;
              const bandProximity = Math.max(
                0,
                1 - Math.abs(yAnchor - p.y) / (height * 0.55)
              );
              y -= smooth * 60 * p.strength * depthScale * bandProximity;
            }
          }
          if (x === -step) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        const lineAlpha = 0.12 + ridge.baseY * 0.28;
        ctx.strokeStyle = `hsl(${getComputedStyle(document.documentElement)
          .getPropertyValue("--gold")
          .trim()} / ${lineAlpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Soft glow that follows the pointer
      if (p.strength > 0.01 && p.x > -1000) {
        const glow = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          influence
        );
        glow.addColorStop(
          0,
          `hsl(${getComputedStyle(document.documentElement)
            .getPropertyValue("--gold")
            .trim()} / ${0.1 * p.strength})`
        );
        glow.addColorStop(1, "transparent");
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, width, height);
      }

      // Vignette to blend edges into the layout
      const vig = ctx.createLinearGradient(0, 0, 0, height);
      vig.addColorStop(0, bg);
      vig.addColorStop(0.28, "transparent");
      vig.addColorStop(0.85, "transparent");
      vig.addColorStop(1, bg);
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, width, height);

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.current.tx = e.clientX - rect.left;
      pointer.current.ty = e.clientY - rect.top;
      pointer.current.targetStrength = 1;
    };
    const onLeave = () => {
      pointer.current.targetStrength = 0;
    };

    const host = canvas.parentElement ?? canvas;
    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
};

export default DuneField;
