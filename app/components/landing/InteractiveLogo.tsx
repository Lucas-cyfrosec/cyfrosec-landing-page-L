'use client';

import { useEffect, useRef, useState } from 'react';

// ─── DESIGN TOKENS ────────────────────────────────────────────────────────────
type RGB = [number, number, number];
const MAIN: RGB = [110, 231, 255];        // #6ee7ff — thick blocks, ring 1
const SECONDARY: RGB = [47, 127, 184];    // #2f7fb8 — border, broken rings, cuts
const BADGE_FILL = 'rgba(8,22,38,0.35)';  // subtle dark-navy disc (no white)

// ─── BADGE GEOMETRY (fractions of badge radius R; angles 0=top, clockwise) ─────
// Measured from public/circle_logo.png; rendered in a faux-3D plane that tilts.
const FR_BORDER = 1.0;
const FR_RING3 = 0.787;
const FR_THICK_OUT = 0.713;
const FR_RING2 = 0.630;
const FR_THICK_IN = 0.560;
const FR_RING1 = 0.361;
const FW_OUT = 0.167;   // outer thick-block radial thickness
const FW_IN = 0.148;    // inner thick-block radial thickness
const LW_BORDER = 0.021, LW_RING = 0.025, LW_RING1 = 0.021, LW_CUT = 0.021;

const RING3_ARCS: [number, number][] = [[0, 135], [140, 175], [182, 202], [205, 313], [320, 355]];
const RING2_ARCS: [number, number][] = [[6, 25], [46, 132], [186, 218], [223, 312], [332, 337]];
const THICK_OUT: [number, number][] = [[320, 354], [140, 174]];
const THICK_IN: [number, number][] = [[6, 38], [186, 217]];
const CUTS: [number, number, number][] = [   // [angleDeg, fromFrac, toFrac]
  [270, 0.704, 0.944],   // left horizontal
  [90, 0.611, 0.917],    // right horizontal
  [222, 0.537, 0.917],   // lower-left diagonal
  [45, 0.872, 0.973],    // upper-right tick
];

// ─── CENTRE EYE / LENS (calmer glossy lens, floats forward with parallax) ──────
const FOV = 640;                  // perspective focal length
const EYE_RADIUS = 0.269;         // lens radius as fraction of R (reference ratio)
const EYE_LIFT = 0.16;            // how far the eye floats above the badge plane
const EYE_ACCENT: RGB = [92, 224, 255];
const EYE_BASE: RGB = [56, 150, 224];
const EYE_CORE_DARK: RGB = [18, 58, 104];
const EYE_CORE_LIGHT: RGB = [37, 99, 168];
const LOOK_RANGE = 0.26;                // gaze travel (fraction of lens radius)
const IRIS_R = 0.56;                    // iris radius (fraction of lens radius)
const PUPIL_R = 0.28;                   // pupil radius (fraction of lens radius)
const PUPIL_DARK: RGB = [8, 26, 52];    // flat pupil colour
const IRIS_RGB: RGB = [150, 224, 252];  // iris outer tint

// ─── SPIDERS ("bugs" that crawl out of the 4 thick blocks toward the eye) ──────
const SPIDER_BLOCKS: [number, number, number][] = [
  [320, 354, FR_THICK_OUT], [140, 174, FR_THICK_OUT],   // outer pair
  [6, 38, FR_THICK_IN], [186, 217, FR_THICK_IN],        // inner pair
];
const SPIDER_BODY: RGB = [9, 24, 44];   // dark body fill (cyan-rimmed)
const MAX_SPIDERS = 5;
const SPIDER_SPEED = 0.0017;            // base crawl speed; orbital bias keeps spiders in play longer
const SPIDER_ORBIT_BIAS = 0.65;         // favor circling the badge over diving straight inward
const SPIDER_INWARD_GAIN = 0.6;         // inward pull so spiders reliably spiral in and get zapped
const QUEUE_CHASE_GAIN = 1.75;          // once scanned, the active queued spider commits faster to the kill ring
// Threat categories registered/struck in the side notes panel as bugs are found & killed.
const THREAT_WORDS = ['Apps', 'Network', 'Code', 'AI Model', 'Infrastructure'];
const SPAWN_STOP = 15;                  // keep spawning through the full hunt window; secure phase starts only after spawning ends
const SPIDER_SIZE = 0.05;               // body size as fraction of R
const LASER_RANGE = 0.43;              // radius where the eye lasers the spider (outside the eye ring)
const LASER_LOCK_TIME = 0.4;            // beam hold before the spider bursts
const RADAR_SPEED = 1.5;                // radar sweep speed (degrees per frame)
const RADAR_BEAM = 6;                   // detection half-width (degrees)
const RADAR_TRAIL = 72;                 // sweep trail length (degrees)
const RADAR_INNER = 0.39;               // sweep starts at the eye ring, not the eyeball
const RADAR_RGB: RGB = [180, 250, 255]; // detection highlight colour

// ─── PHASE 2: "SECURED" (green wave + shield once the bugs are cleared) ────────
const GREEN_MAIN: RGB = [80, 255, 160];  // green accent (blocks, ring 1, wave, shield)
const GREEN_SEC: RGB = [38, 170, 110];   // muted green (border, rings, cuts)
const SECURE_AT = 15;                    // begin the secure sequence at 15s
const WAVE_DUR = 1.6;                    // green wave sweep duration (s)
const SHIELD_DUR = 1.0;                  // shield entrance duration (s)
const SECURE_HOLD = 8;                   // hold the secured state before looping back to hunt mode

// ─── INTERACTION TUNABLES ─────────────────────────────────────────────────────
const DRAG_FACTOR = 0.006;        // radians per dragged pixel
const INERTIA_DECAY = 0.94;       // momentum falloff after release
const MAX_VEL = 0.06;             // cap release momentum
const TILT_CLAMP = 0.9;           // max up/down tilt (rad)
const BADGE_SCALE = 0.45;         // R = BADGE_SCALE × min(w,h)
const MAX_DPR = 1.5;

function clamp(v: number, a: number, b: number) { return Math.max(a, Math.min(b, v)); }
function rgba(c: RGB, a: number) { return `rgba(${c[0]},${c[1]},${c[2]},${a.toFixed(3)})`; }
function lerpRGB(a: RGB, b: RGB, t: number): RGB {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
}
function parseHex(s: string): RGB | null {
  const h = s.replace('#', '').trim();
  if (h.length === 6) return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  if (h.length === 3) { const [r, g, b] = h.split('').map(p => parseInt(p + p, 16)); return [r, g, b]; }
  return null;
}

interface LogoProps {
  baseColor?: string;
  accentColor?: string;
  autoRotateSpeed?: number;   // retained for API compatibility
  className?: string;
}

export default function InteractiveLogo({ baseColor, accentColor, className = '' }: LogoProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // Detected-threat log shown in the side notes panel.
  const [notes, setNotes] = useState<{ id: number; word: string; struck: boolean }[]>([]);
  const [secured, setSecured] = useState(false);   // hide the notes panel once secured

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const main = (accentColor && parseHex(accentColor)) || MAIN;
    const secondary = (baseColor && parseHex(baseColor)) || SECONDARY;
    const eyeAccent = (accentColor && parseHex(accentColor)) || EYE_ACCENT;
    const eyeBase = (baseColor && parseHex(baseColor)) || EYE_BASE;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let rotX = 0.16, rotY = -0.05, velX = 0, velY = 0;   // default: gentle near-face-on tilt
    let time = 0, raf = 0, paused = false, dragging = false;
    let w = 0, h = 0, dpr = 1, lastPX = 0, lastPY = 0, lastPT = 0;
    // Pupil "looking around": current offset, target offset, next-saccade time.
    let lookX = 0, lookY = 0, lookTX = 0, lookTY = 0, nextLook = 1.4;
    // Spiders crawling toward the eye.
    type Spider = {
      nx: number;
      ny: number;
      phase: number;
      wob: number;
      alpha: number;
      zapping: boolean;
      zapT: number;
      dead: boolean;
      deadT: number;
      detect: number;
      burst: number;
      orbitDir: number;
      hx: number;   // heading (crawl direction) — local unit vector
      hy: number;
      r0: number;   // spawn radius (the block it crawled out of)
      word: number; // threat-category index (THREAT_WORDS)
      noteId: number;     // id of its entry in the notes panel (-1 until registered)
      registered: boolean;
    };
    const spiders: Spider[] = [];
    let nextSpawn = 0.8, eyeFlash = 0, radarAngle = 0;
    let spawnCount = 0, noteSeq = 0;   // notes bookkeeping
    let phase = 0, waveStart = 0, waveFrac = 0, shieldStart = 0;   // 0 hunt → 1 green wave → 2 secured

    function resetCycle() {
      spiders.length = 0;
      nextSpawn = 0.8;
      eyeFlash = 0;
      radarAngle = 0;
      time = 0;
      lookX = 0;
      lookY = 0;
      lookTX = 0;
      lookTY = 0;
      nextLook = 1.4;
      spawnCount = 0;
      noteSeq = 0;
      phase = 0;
      waveStart = 0;
      waveFrac = 0;
      shieldStart = 0;
      setNotes([]);
      setSecured(false);
    }

    // Register a threat word in the notes panel (once per spider).
    function registerNote(sp: Spider, struck: boolean) {
      if (sp.registered) return;
      sp.registered = true;
      sp.noteId = noteSeq++;
      const word = THREAT_WORDS[sp.word];
      const id = sp.noteId;
      setNotes(prev => [...prev, { id, word, struck }].slice(-7));
    }
    function strikeNote(sp: Spider) {
      if (sp.noteId < 0) { registerNote(sp, true); return; }
      const id = sp.noteId;
      setNotes(prev => prev.map(n => (n.id === id ? { ...n, struck: true } : n)));
    }

    function resize() {
      const d = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      const cw = canvas!.clientWidth, chh = canvas!.clientHeight;
      if (cw === w && chh === h && d === dpr) return;
      w = cw; h = chh; dpr = d;
      canvas!.width = Math.max(1, cw * d); canvas!.height = Math.max(1, chh * d);
    }

    // Rotate a local point by the assembly's tilt (rotX about X, then rotY about Y).
    function txf(x: number, y: number, z: number, rX: number, rY: number): [number, number, number] {
      const cX = Math.cos(rX), sX = Math.sin(rX);
      const y1 = y * cX - z * sX, z1 = y * sX + z * cX;
      const cY = Math.cos(rY), sY = Math.sin(rY);
      const x2 = x * cY + z1 * sY, z2 = -x * sY + z1 * cY;
      return [x2, y1, z2];
    }
    function proj(x: number, y: number, z: number, cx: number, cyy: number): [number, number, number] {
      const s = FOV / (FOV + z);
      return [x * s + cx, y * s + cyy, s];
    }
    // Local plane point for a badge angle (0=top, clockwise) at a radius fraction.
    function lp(aDeg: number, rFrac: number, R: number): [number, number] {
      const a = (aDeg * Math.PI) / 180;
      return [R * rFrac * Math.sin(a), -R * rFrac * Math.cos(a)];
    }

    // Partial arc / block — single path, butt caps, alpha by average depth.
    function arc(rFrac: number, s: number, e: number, lwFrac: number, col: RGB, baseA: number,
      R: number, cx: number, cyy: number, rX: number, rY: number) {
      const n = Math.max(2, Math.round(Math.abs(e - s) / 4));
      let zsum = 0, ssum = 0;
      ctx!.beginPath();
      for (let i = 0; i <= n; i++) {
        const a = s + ((e - s) * i) / n;
        const [lx, ly] = lp(a, rFrac, R);
        const t = txf(lx, ly, 0, rX, rY);
        const [sx, sy, sc] = proj(t[0], t[1], t[2], cx, cyy);
        if (i === 0) ctx!.moveTo(sx, sy); else ctx!.lineTo(sx, sy);
        zsum += t[2]; ssum += sc;
      }
      const depth = (zsum / (n + 1) + R) / (2 * R);
      const alpha = clamp(baseA * (0.5 + (1 - depth) * 0.7), 0.04, 1);
      ctx!.strokeStyle = rgba(col, alpha);
      ctx!.lineWidth = Math.max(0.6, lwFrac * R * (ssum / (n + 1)));
      ctx!.lineCap = 'butt'; ctx!.lineJoin = 'round'; ctx!.stroke();
    }

    // Full ring — per-segment depth shading (front brighter), round caps.
    function ring(rFrac: number, lwFrac: number, col: RGB, baseA: number,
      R: number, cx: number, cyy: number, rX: number, rY: number) {
      const N = 96;
      const P: [number, number, number, number][] = [];
      for (let i = 0; i <= N; i++) {
        const [lx, ly] = lp((i / N) * 360, rFrac, R);
        const t = txf(lx, ly, 0, rX, rY);
        const [sx, sy, sc] = proj(t[0], t[1], t[2], cx, cyy);
        P.push([sx, sy, t[2], sc]);
      }
      for (let i = 0; i < N; i++) {
        const [x0, y0, z0, s0] = P[i], [x1, y1, z1, s1] = P[i + 1];
        const depth = ((z0 + z1) / 2 + R) / (2 * R);
        const alpha = clamp(baseA * (0.5 + (1 - depth) * 0.7), 0.04, 1);
        ctx!.beginPath(); ctx!.moveTo(x0, y0); ctx!.lineTo(x1, y1);
        ctx!.strokeStyle = rgba(col, alpha);
        ctx!.lineWidth = Math.max(0.6, lwFrac * R * ((s0 + s1) / 2));
        ctx!.lineCap = 'round'; ctx!.stroke();
      }
    }

    // Straight radial cut-line.
    function radial(aDeg: number, f0: number, f1: number, lwFrac: number, col: RGB, baseA: number,
      R: number, cx: number, cyy: number, rX: number, rY: number) {
      const [lx0, ly0] = lp(aDeg, f0, R), [lx1, ly1] = lp(aDeg, f1, R);
      const t0 = txf(lx0, ly0, 0, rX, rY), t1 = txf(lx1, ly1, 0, rX, rY);
      const p0 = proj(t0[0], t0[1], t0[2], cx, cyy), p1 = proj(t1[0], t1[1], t1[2], cx, cyy);
      const depth = ((t0[2] + t1[2]) / 2 + R) / (2 * R);
      const alpha = clamp(baseA * (0.5 + (1 - depth) * 0.7), 0.04, 1);
      ctx!.beginPath(); ctx!.moveTo(p0[0], p0[1]); ctx!.lineTo(p1[0], p1[1]);
      ctx!.strokeStyle = rgba(col, alpha);
      ctx!.lineWidth = Math.max(0.6, lwFrac * R * ((p0[2] + p1[2]) / 2));
      ctx!.lineCap = 'butt'; ctx!.stroke();
    }

    // Subtle navy disc fill behind the badge.
    function disc(R: number, cx: number, cyy: number, rX: number, rY: number) {
      const N = 64;
      ctx!.beginPath();
      for (let i = 0; i <= N; i++) {
        const [lx, ly] = lp((i / N) * 360, 1.0, R);
        const t = txf(lx, ly, 0, rX, rY);
        const [sx, sy] = proj(t[0], t[1], t[2], cx, cyy);
        if (i === 0) ctx!.moveTo(sx, sy); else ctx!.lineTo(sx, sy);
      }
      ctx!.closePath(); ctx!.fillStyle = BADGE_FILL; ctx!.fill();
    }

    // Centre eye/lens — billboard that floats forward (parallax) as the badge tilts.
    function drawEye(R: number, cx: number, cyy: number, rX: number, rY: number) {
      const t = txf(0, 0, EYE_LIFT * R, rX, rY);
      const [ex, ey, scale] = proj(t[0], t[1], t[2], cx, cyy);
      const rad = EYE_RADIUS * R * scale;
      const dark = document.documentElement.classList.contains('dark');
      const core = dark ? EYE_CORE_DARK : EYE_CORE_LIGHT;
      const pulse = reduce ? 0 : (Math.sin(time * 1.6) * 0.5 + 0.5);

      ctx!.beginPath(); ctx!.arc(ex, ey, rad * 1.4, 0, Math.PI * 2);
      const glow = ctx!.createRadialGradient(ex, ey, rad * 0.5, ex, ey, rad * 1.4);
      glow.addColorStop(0, rgba(eyeAccent, 0.15 + pulse * 0.07 + eyeFlash * 0.4));
      glow.addColorStop(1, rgba(eyeAccent, 0));
      ctx!.fillStyle = glow; ctx!.fill();

      // Eyeball body — glossy sphere lit from the upper-left.
      const bx = ex - rad * 0.22, by = ey - rad * 0.26;
      const body = ctx!.createRadialGradient(bx, by, rad * 0.1, ex, ey, rad);
      body.addColorStop(0, rgba([96, 186, 236], 0.95));
      body.addColorStop(0.5, rgba(eyeBase, 0.95));
      body.addColorStop(1, rgba(core, 1));
      ctx!.beginPath(); ctx!.arc(ex, ey, rad, 0, Math.PI * 2); ctx!.fillStyle = body; ctx!.fill();

      // Iris + pupil move together = the gaze. Flat features, so it stays ONE eye.
      const ix = ex + lookX * rad, iy = ey + lookY * rad;
      const irisR = IRIS_R * rad;
      const iris = ctx!.createRadialGradient(ix, iy, irisR * 0.25, ix, iy, irisR);
      iris.addColorStop(0, rgba(IRIS_RGB, 0));
      iris.addColorStop(0.55, rgba(IRIS_RGB, 0.32));
      iris.addColorStop(1, rgba(IRIS_RGB, 0.85));
      ctx!.beginPath(); ctx!.arc(ix, iy, irisR, 0, Math.PI * 2); ctx!.fillStyle = iris; ctx!.fill();
      ctx!.beginPath(); ctx!.arc(ix, iy, irisR, 0, Math.PI * 2);
      ctx!.strokeStyle = rgba(eyeAccent, 0.85); ctx!.lineWidth = Math.max(1, rad * 0.03); ctx!.stroke();

      // Pupil — flat dark disc with a crisp aperture ring.
      ctx!.beginPath(); ctx!.arc(ix, iy, PUPIL_R * rad, 0, Math.PI * 2);
      ctx!.fillStyle = rgba(PUPIL_DARK, 0.96); ctx!.fill();
      ctx!.beginPath(); ctx!.arc(ix, iy, PUPIL_R * rad, 0, Math.PI * 2);
      ctx!.strokeStyle = rgba(eyeAccent, 0.7); ctx!.lineWidth = Math.max(1, rad * 0.02); ctx!.stroke();

      // Fixed corneal catch-light (upper-left) — sells the glossy eyeball.
      const shx = ex - rad * 0.3, shy = ey - rad * 0.36;
      const sheen = ctx!.createRadialGradient(shx, shy, rad * 0.02, shx, shy, rad * 0.18);
      sheen.addColorStop(0, rgba([255, 255, 255], 0.8));
      sheen.addColorStop(1, rgba([255, 255, 255], 0));
      ctx!.beginPath(); ctx!.arc(shx, shy, rad * 0.18, 0, Math.PI * 2); ctx!.fillStyle = sheen; ctx!.fill();

      // Eyeball rim
      ctx!.beginPath(); ctx!.arc(ex, ey, rad, 0, Math.PI * 2);
      ctx!.strokeStyle = rgba(eyeAccent, 0.9); ctx!.lineWidth = Math.max(1, rad * 0.06);
      ctx!.shadowColor = rgba(eyeAccent, 0.6); ctx!.shadowBlur = 4; ctx!.stroke(); ctx!.shadowBlur = 0;
    }

    // A little spider, drawn on the badge plane (tilts with it), facing the centre.
    function drawSpider(sp: Spider, R: number, cx: number, cyy: number, rX: number, rY: number) {
      const t = txf(sp.nx * R, sp.ny * R, 0, rX, rY);
      const [sx, sy, sc] = proj(t[0], t[1], t[2], cx, cyy);
      // Face the crawl direction: project a short step along the heading.
      const th = txf((sp.nx + sp.hx * 0.04) * R, (sp.ny + sp.hy * 0.04) * R, 0, rX, rY);
      const ph = proj(th[0], th[1], th[2], cx, cyy);
      const head = Math.atan2(ph[1] - sy, ph[0] - sx);
      const sz = SPIDER_SIZE * R * sc;
      const a = sp.alpha * (1 - sp.burst);

      if (a > 0.02) {
        ctx!.save();
        ctx!.translate(sx, sy); ctx!.rotate(head);
        ctx!.lineCap = 'round'; ctx!.lineJoin = 'round';
        // 8 spindly, tapered legs fanning front-to-back, with an articulated knee + tarsus.
        const LEG = [[0.58, 0.81], [0.16, 0.99], [-0.34, 0.94], [-0.74, 0.67]];
        for (let side = -1; side <= 1; side += 2) {
          for (let i = 0; i < 4; i++) {
            const ang = Math.atan2(LEG[i][1] * side, LEG[i][0]);
            const px = sz * 0.18, py = side * sz * 0.13;
            const wig = Math.sin(sp.phase + i * 0.9 + (side > 0 ? 0 : Math.PI)) * 0.09;
            const ka = ang + wig;
            const kx = px + Math.cos(ka) * sz * 0.95, ky = py + Math.sin(ka) * sz * 0.95;
            const fa = ka + side * 0.4;
            const fx = kx + Math.cos(fa) * sz * 0.85, fy = ky + Math.sin(fa) * sz * 0.85;
            ctx!.strokeStyle = rgba(main, 0.7 * a);
            ctx!.lineWidth = Math.max(0.6, sz * 0.1);
            ctx!.beginPath(); ctx!.moveTo(px, py); ctx!.lineTo(kx, ky); ctx!.stroke();
            ctx!.lineWidth = Math.max(0.4, sz * 0.05);
            ctx!.beginPath(); ctx!.moveTo(kx, ky); ctx!.lineTo(fx, fy); ctx!.stroke();
          }
        }
        ctx!.strokeStyle = rgba(main, 0.55 * a); ctx!.lineWidth = Math.max(0.4, sz * 0.05);
        ctx!.beginPath();
        ctx!.moveTo(sz * 0.5, -sz * 0.12); ctx!.lineTo(sz * 0.72, -sz * 0.18);
        ctx!.moveTo(sz * 0.5, sz * 0.12); ctx!.lineTo(sz * 0.72, sz * 0.18);
        ctx!.stroke();

        const abx = -sz * 0.5;
        const ab = ctx!.createRadialGradient(abx - sz * 0.18, -sz * 0.12, sz * 0.04, abx, 0, sz * 0.72);
        ab.addColorStop(0, rgba([46, 96, 156], 0.95 * a));
        ab.addColorStop(1, rgba(SPIDER_BODY, 0.97 * a));
        ctx!.fillStyle = ab; ctx!.strokeStyle = rgba(main, 0.7 * a); ctx!.lineWidth = Math.max(0.5, sz * 0.045);
        ctx!.beginPath(); ctx!.ellipse(abx, 0, sz * 0.64, sz * 0.46, 0, 0, Math.PI * 2); ctx!.fill(); ctx!.stroke();
        ctx!.fillStyle = rgba([20, 48, 86], 0.97 * a);
        ctx!.beginPath(); ctx!.ellipse(sz * 0.26, 0, sz * 0.32, sz * 0.26, 0, 0, Math.PI * 2); ctx!.fill(); ctx!.stroke();

        if (sp.detect > 0.03) {
          const dg = sp.detect;
          ctx!.shadowColor = rgba(RADAR_RGB, 0.9 * dg); ctx!.shadowBlur = 10;
          ctx!.strokeStyle = rgba(RADAR_RGB, 0.95 * dg); ctx!.lineWidth = Math.max(0.8, sz * 0.11);
          ctx!.beginPath(); ctx!.ellipse(abx, 0, sz * 0.64, sz * 0.46, 0, 0, Math.PI * 2); ctx!.stroke();
          ctx!.beginPath(); ctx!.ellipse(sz * 0.26, 0, sz * 0.32, sz * 0.26, 0, 0, Math.PI * 2); ctx!.stroke();
          ctx!.shadowBlur = 0;
        }
        ctx!.restore();
      }

      if (sp.deadT > 0) {
        const burst = clamp(sp.deadT / 0.22, 0, 1);
        ctx!.save();
        ctx!.translate(sx, sy);
        ctx!.rotate(time * 12 + sp.phase);
        ctx!.strokeStyle = rgba(RADAR_RGB, 0.75 * burst);
        ctx!.lineWidth = Math.max(0.8, sz * 0.1);
        ctx!.lineCap = 'round';
        ctx!.shadowColor = rgba(RADAR_RGB, 0.9 * burst);
        ctx!.shadowBlur = 8;
        for (let i = 0; i < 8; i++) {
          const ang = (i / 8) * Math.PI * 2;
          const inner = sz * (0.2 + (1 - burst) * 0.2);
          const outer = sz * (0.9 + (1 - burst) * 1.2);
          ctx!.beginPath();
          ctx!.moveTo(Math.cos(ang) * inner, Math.sin(ang) * inner);
          ctx!.lineTo(Math.cos(ang) * outer, Math.sin(ang) * outer);
          ctx!.stroke();
        }
        ctx!.restore();
      }

      if (!sp.dead && sp.detect > 0.03) {
        const dg = sp.detect, b = sz * 2.1, g = sz * 0.8;
        ctx!.strokeStyle = rgba(RADAR_RGB, dg); ctx!.lineWidth = Math.max(1, sz * 0.1); ctx!.lineCap = 'round';
        for (const ux of [-1, 1]) for (const uy of [-1, 1]) {
          const ox = sx + ux * b, oy = sy + uy * b;
          ctx!.beginPath(); ctx!.moveTo(ox - ux * g, oy); ctx!.lineTo(ox, oy); ctx!.lineTo(ox, oy - uy * g); ctx!.stroke();
        }
      }

      if (!sp.dead && sp.registered) {
        const label = String(sp.noteId + 1);
        const bx = sx + sz * 1.4;
        const by = sy - sz * 1.45;
        const br = Math.max(7, sz * 0.52);
        ctx!.save();
        ctx!.fillStyle = rgba([7, 20, 36], 0.9);
        ctx!.strokeStyle = rgba(RADAR_RGB, 0.9);
        ctx!.lineWidth = Math.max(1, sz * 0.08);
        ctx!.beginPath();
        ctx!.arc(bx, by, br, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.stroke();
        ctx!.fillStyle = rgba([255, 255, 255], 0.96);
        ctx!.font = `${Math.max(10, sz * 0.8)}px ui-monospace, SFMono-Regular, Menlo, monospace`;
        ctx!.textAlign = 'center';
        ctx!.textBaseline = 'middle';
        ctx!.fillText(label, bx, by + 0.5);
        ctx!.restore();
      }
    }

    function drawLaser(targetNX: number, targetNY: number, R: number, cx: number, cyy: number, rX: number, rY: number) {
      const eyeT = txf(0, 0, EYE_LIFT * R, rX, rY);
      const [ex, ey, scale] = proj(eyeT[0], eyeT[1], eyeT[2], cx, cyy);
      const rad = EYE_RADIUS * R * scale;
      const targetT = txf(targetNX * R, targetNY * R, 0, rX, rY);
      const [tx, ty] = proj(targetT[0], targetT[1], targetT[2], cx, cyy);
      const ix = ex + lookX * rad;
      const iy = ey + lookY * rad;
      const dx = tx - ix;
      const dy = ty - iy;
      const dl = Math.hypot(dx, dy) || 1;
      const startX = ix + (dx / dl) * (PUPIL_R * rad * 0.9);
      const startY = iy + (dy / dl) * (PUPIL_R * rad * 0.9);
      const pulse = 0.7 + Math.sin(time * 36) * 0.3;
      ctx!.save();
      ctx!.globalCompositeOperation = 'screen';
      ctx!.strokeStyle = rgba(RADAR_RGB, 0.95);
      ctx!.shadowColor = rgba(RADAR_RGB, 0.95);
      ctx!.shadowBlur = 18;
      ctx!.lineCap = 'round';
      ctx!.lineWidth = Math.max(2.2, R * 0.02) * pulse;
      ctx!.beginPath();
      ctx!.moveTo(startX, startY);
      ctx!.lineTo(tx, ty);
      ctx!.stroke();
      ctx!.strokeStyle = rgba([255, 255, 255], 0.95);
      ctx!.shadowBlur = 8;
      ctx!.lineWidth = Math.max(1, R * 0.007);
      ctx!.beginPath();
      ctx!.moveTo(startX, startY);
      ctx!.lineTo(tx, ty);
      ctx!.stroke();
      ctx!.fillStyle = rgba([255, 255, 255], 0.95);
      ctx!.beginPath();
      ctx!.arc(startX, startY, Math.max(1.5, R * 0.01), 0, Math.PI * 2);
      ctx!.fill();
      ctx!.restore();
    }

    // Rotating radar sweep drawn on the badge plane (tilts with it).
    function drawRadar(R: number, cx: number, cyy: number, rX: number, rY: number) {
      const inner = RADAR_INNER, edge = 0.98, N = 16;
      const P = (aDeg: number, rf: number) => {
        const [x, y] = lp(aDeg, rf, R); const t = txf(x, y, 0, rX, rY);
        return proj(t[0], t[1], t[2], cx, cyy);
      };
      // Faded trailing band — from the eye ring outward (never over the eyeball).
      for (let k = 0; k < N; k++) {
        const a0 = radarAngle - k * (RADAR_TRAIL / N), a1 = radarAngle - (k + 1) * (RADAR_TRAIL / N);
        const pi0 = P(a0, inner), po0 = P(a0, edge), pi1 = P(a1, inner), po1 = P(a1, edge);
        ctx!.beginPath();
        ctx!.moveTo(pi0[0], pi0[1]); ctx!.lineTo(po0[0], po0[1]); ctx!.lineTo(po1[0], po1[1]); ctx!.lineTo(pi1[0], pi1[1]); ctx!.closePath();
        ctx!.fillStyle = rgba(main, (1 - k / N) * 0.13); ctx!.fill();
      }
      // Bright leading line — starts at the eye ring.
      const pI = P(radarAngle, inner), pO = P(radarAngle, edge);
      ctx!.beginPath(); ctx!.moveTo(pI[0], pI[1]); ctx!.lineTo(pO[0], pO[1]);
      ctx!.strokeStyle = rgba(main, 0.85); ctx!.lineWidth = Math.max(1, R * 0.01); ctx!.lineCap = 'round';
      ctx!.shadowColor = rgba(main, 0.8); ctx!.shadowBlur = 8; ctx!.stroke(); ctx!.shadowBlur = 0;
    }

    // Green radiation wave-front expanding from the eye (badge plane).
    function drawWave(R: number, cx: number, cyy: number, rX: number, rY: number) {
      if (waveFrac <= 0.01 || waveFrac >= 1.0) return;   // stop the visible front at the outer logo line
      const N = 72;
      ctx!.beginPath();
      for (let i = 0; i <= N; i++) {
        const [lx, ly] = lp((i / N) * 360, waveFrac, R);
        const t = txf(lx, ly, 0, rX, rY); const p = proj(t[0], t[1], t[2], cx, cyy);
        if (i === 0) ctx!.moveTo(p[0], p[1]); else ctx!.lineTo(p[0], p[1]);
      }
      const a = clamp(1.15 - waveFrac, 0.12, 0.9);
      ctx!.strokeStyle = rgba(GREEN_MAIN, a); ctx!.lineWidth = Math.max(2, R * 0.02); ctx!.lineCap = 'round';
      ctx!.shadowColor = rgba(GREEN_MAIN, a); ctx!.shadowBlur = 18; ctx!.stroke(); ctx!.shadowBlur = 0;
    }

    // Green force-field "shield" that scales + fades in once secured.
    function drawShield(R: number, cx: number, cyy: number, rX: number, rY: number) {
      const p = clamp((time - shieldStart) / SHIELD_DUR, 0, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      const rf = 0.92 + 0.08 * ease + Math.sin(time * 3) * 0.005 * p;   // grows from just inside onto the outer line
      const a = ease;
      const N = 80;
      ctx!.beginPath();
      for (let i = 0; i <= N; i++) {
        const [lx, ly] = lp((i / N) * 360, rf, R);
        const t = txf(lx, ly, 0, rX, rY); const pr = proj(t[0], t[1], t[2], cx, cyy);
        if (i === 0) ctx!.moveTo(pr[0], pr[1]); else ctx!.lineTo(pr[0], pr[1]);
      }
      ctx!.closePath();
      ctx!.fillStyle = rgba(GREEN_MAIN, 0.06 * a); ctx!.fill();
      ctx!.strokeStyle = rgba(GREEN_MAIN, 0.9 * a); ctx!.lineWidth = Math.max(2, R * 0.018); ctx!.lineCap = 'round';
      ctx!.shadowColor = rgba(GREEN_MAIN, a); ctx!.shadowBlur = 16; ctx!.stroke(); ctx!.shadowBlur = 0;
    }

    function frame() {
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0); ctx!.clearRect(0, 0, w, h);
      if (!reduce) time += 0.016;
      let firing = false, fireNX = 0, fireNY = 0;

      if (!reduce) {
        // Idle gaze target (used only when no spider is currently detected).
        if (time > nextLook) {
          const ang = Math.random() * Math.PI * 2;
          const dist = (0.3 + Math.random() * 0.7) * LOOK_RANGE;
          lookTX = Math.cos(ang) * dist; lookTY = Math.sin(ang) * dist;
          nextLook = time + 0.35 + Math.random() * 0.9;
        }

        // Spiders: spawn from a block, crawl inward, and get zapped before the eye ring.
        eyeFlash *= 0.9;
        radarAngle = (radarAngle + RADAR_SPEED) % 360;
        let bestDet = 0, detNX = 0, detNY = 0;
        const activeQueueId = spiders.reduce((min, sp) => (
          !sp.dead && sp.registered ? Math.min(min, sp.noteId) : min
        ), Number.POSITIVE_INFINITY);

        // Keep crawling bugs in play for the full hunt window.
        const spawning = time < SPAWN_STOP;

        if (spawning && time > nextSpawn) {
          if (spiders.length < MAX_SPIDERS) {
            const [a0, a1, rf] = SPIDER_BLOCKS[(Math.random() * SPIDER_BLOCKS.length) | 0];
            const ang = ((a0 + Math.random() * (a1 - a0)) * Math.PI) / 180;
            spiders.push({
              nx: rf * Math.sin(ang),
              ny: -rf * Math.cos(ang),
              phase: Math.random() * 6.28,
              wob: Math.random() * 6.28,
              alpha: 0,
              zapping: false,
              zapT: 0,
              dead: false,
              deadT: 0,
              detect: 0,
              burst: 0,
              orbitDir: Math.random() > 0.5 ? 1 : -1,
              hx: -Math.sin(ang),   // start facing roughly inward; turns to face the crawl
              hy: Math.cos(ang),
              r0: rf,               // spawn radius — emerge straight out of this block first
              word: spawnCount % THREAT_WORDS.length,   // cycle the threat categories
              noteId: -1,
              registered: false,
            });
            spawnCount++;
          }
          nextSpawn = time + 0.9 + Math.random() * 1.6;
        }
        for (let i = spiders.length - 1; i >= 0; i--) {
          const sp = spiders[i];
          sp.phase += 0.3;
          if (sp.zapping) {
            sp.zapT -= 0.016;
            sp.detect = 1;
            firing = true;
            fireNX = sp.nx;
            fireNY = sp.ny;
            eyeFlash = Math.max(eyeFlash, 0.85);
            if (sp.zapT <= 0) {
              sp.zapping = false;
              sp.dead = true;
              sp.deadT = 0.22;
              sp.burst = 0.01;
              strikeNote(sp);   // laser destroyed it → scratch the word
            }
          } else if (!sp.dead) {
            const d = Math.hypot(sp.nx, sp.ny) || 1e-4;
            const dirx = -sp.nx / d, diry = -sp.ny / d;
            sp.wob += 0.09;
            const tangentX = -diry * sp.orbitDir;
            const tangentY = dirx * sp.orbitDir;
            const isActiveQueueTarget = sp.registered && sp.noteId === activeQueueId;
            // Emerge: crawl straight inward out of the block first, then start circling.
            const emerge = clamp((sp.r0 - d) / 0.1, 0, 1);   // 0 at spawn → 1 once clear of the block
            const orbitWobble = Math.sin(sp.wob) * 0.22 * emerge;
            let inwardWeight = Math.max(
              clamp((d - LASER_RANGE) / 0.34, 0.45, 1) * SPIDER_INWARD_GAIN,
              (1 - emerge) * 0.7,
            );
            let orbitWeight = (SPIDER_ORBIT_BIAS + Math.cos(sp.wob * 0.6) * 0.08) * emerge;
            if (isActiveQueueTarget) {
              inwardWeight *= QUEUE_CHASE_GAIN;
              orbitWeight *= 0.38;
            }
            const mx = tangentX * orbitWeight + dirx * inwardWeight + (-diry * orbitWobble);
            const my = tangentY * orbitWeight + diry * inwardWeight + (dirx * orbitWobble);
            const ml = Math.hypot(mx, my) || 1;
            sp.nx += (mx / ml) * SPIDER_SPEED;
            sp.ny += (my / ml) * SPIDER_SPEED;
            // Face the crawl direction (smoothed turn for natural movement).
            sp.hx += (mx / ml - sp.hx) * 0.18;
            sp.hy += (my / ml - sp.hy) * 0.18;
            const hl = Math.hypot(sp.hx, sp.hy) || 1; sp.hx /= hl; sp.hy /= hl;
            sp.alpha = Math.min(1, sp.alpha + 0.05);

            const sa = ((Math.atan2(sp.nx, -sp.ny) * 180) / Math.PI + 360) % 360;
            const adiff = Math.abs(((radarAngle - sa + 540) % 360) - 180);
            if (!sp.registered && adiff < RADAR_BEAM) {
              sp.detect = 1;
              registerNote(sp, false);
            }
            sp.detect *= sp.registered ? 0.86 : 0.93;
            if (isActiveQueueTarget) sp.detect = Math.max(sp.detect, 0.72);
            if (sp.detect > bestDet) {
              bestDet = sp.detect;
              detNX = sp.nx;
              detNY = sp.ny;
            }

            const nd = Math.hypot(sp.nx, sp.ny);
            if (nd <= LASER_RANGE) {
              if (sp.registered && sp.noteId === activeQueueId) {
                // Scanned by radar in queue order → the eye fires.
                sp.zapping = true;
                sp.zapT = LASER_LOCK_TIME;
                sp.detect = 1;
                firing = true;
                fireNX = sp.nx;
                fireNY = sp.ny;
                eyeFlash = 1;
              } else {
                // Not its turn yet → hold at the laser range and keep circling until the queue reaches it.
                const k = LASER_RANGE / (nd || 1e-4);
                sp.nx *= k; sp.ny *= k;
              }
            }
          } else {
            sp.deadT -= 0.016;
            sp.burst = Math.min(1, sp.burst + 0.16);
            sp.alpha *= 0.8;
            sp.detect *= 0.85;
            if (sp.deadT <= 0) spiders.splice(i, 1);
          }
        }

        // Gaze: lock onto the firing target first, otherwise the strongest detected spider.
        let gx = lookTX, gy = lookTY;
        if (firing) {
          const gd = Math.hypot(fireNX, fireNY) || 1;
          gx = (fireNX / gd) * LOOK_RANGE;
          gy = (fireNY / gd) * LOOK_RANGE;
        } else if (bestDet > 0.15) {
          const gd = Math.hypot(detNX, detNY) || 1;
          gx = (detNX / gd) * LOOK_RANGE;
          gy = (detNY / gd) * LOOK_RANGE;
        }
        lookX += (gx - lookX) * 0.35;
        lookY += (gy - lookY) * 0.35;

        // Phase 2: only after the full hunt window ends and every spider is destroyed.
        if (phase === 0 && !spawning && spiders.length === 0) {
          phase = 1; waveStart = time; setSecured(true);
        }
        if (phase >= 1) {
          waveFrac = Math.min(1.12, ((time - waveStart) / WAVE_DUR) * 1.12);
          if (phase === 1 && time - waveStart >= WAVE_DUR) { phase = 2; shieldStart = time; }
          if (phase === 2 && time - shieldStart >= SECURE_HOLD) resetCycle();
        }
      }

      // Base orientation: drag + inertia.
      if (!dragging) {
        rotY += velY; rotX = clamp(rotX + velX, -TILT_CLAMP, TILT_CLAMP);
        velY *= INERTIA_DECAY; velX *= INERTIA_DECAY;
        if (Math.abs(velY) < 1e-5) velY = 0;
        if (Math.abs(velX) < 1e-5) velX = 0;
      }
      // Badge holds still (no idle sway) — only the centre eye animates.
      const rX = rotX, rY = rotY;

      const cx = w / 2, cyy = h / 2, R = Math.min(w, h) * BADGE_SCALE;
      // As the green wave passes a radius, that element converts blue → green (eye excluded).
      const greenMix = (rf: number) => clamp((waveFrac - rf) / 0.1, 0, 1);
      const gcol = (blue: RGB, green: RGB, rf: number) => {
        const t = greenMix(rf);
        return t <= 0 ? blue : lerpRGB(blue, green, t);
      };

      disc(R, cx, cyy, rX, rY);
      ring(FR_BORDER, LW_BORDER, gcol(secondary, GREEN_SEC, FR_BORDER), 0.9, R, cx, cyy, rX, rY);
      for (const [s, e] of RING3_ARCS) arc(FR_RING3, s, e, LW_RING, gcol(secondary, GREEN_SEC, FR_RING3), 0.85, R, cx, cyy, rX, rY);
      for (const [s, e] of THICK_OUT) arc(FR_THICK_OUT, s, e, FW_OUT, gcol(main, GREEN_MAIN, FR_THICK_OUT), 1, R, cx, cyy, rX, rY);
      for (const [s, e] of RING2_ARCS) arc(FR_RING2, s, e, LW_RING, gcol(secondary, GREEN_SEC, FR_RING2), 0.85, R, cx, cyy, rX, rY);
      for (const [s, e] of THICK_IN) arc(FR_THICK_IN, s, e, FW_IN, gcol(main, GREEN_MAIN, FR_THICK_IN), 1, R, cx, cyy, rX, rY);
      for (const [a, f0, f1] of CUTS) radial(a, f0, f1, LW_CUT, gcol(secondary, GREEN_SEC, (f0 + f1) / 2), 0.9, R, cx, cyy, rX, rY);
      ring(FR_RING1, LW_RING1, gcol(main, GREEN_MAIN, FR_RING1), 0.95, R, cx, cyy, rX, rY);
      if (!reduce && phase === 0) drawRadar(R, cx, cyy, rX, rY);
      for (const sp of spiders) drawSpider(sp, R, cx, cyy, rX, rY);
      if (phase === 1) drawWave(R, cx, cyy, rX, rY);
      if (phase >= 2) drawShield(R, cx, cyy, rX, rY);
      drawEye(R, cx, cyy, rX, rY);
      if (!reduce && firing) drawLaser(fireNX, fireNY, R, cx, cyy, rX, rY);
    }

    function loop() {
      if (!paused) frame();
      raf = requestAnimationFrame(loop);
    }

    function onDown(e: PointerEvent) {
      dragging = true; velX = 0; velY = 0;
      lastPX = e.clientX; lastPY = e.clientY; lastPT = performance.now();
      canvas!.setPointerCapture(e.pointerId);
    }
    function onMove(e: PointerEvent) {
      if (!dragging) return;
      const now = performance.now();
      const dx = e.clientX - lastPX, dy = e.clientY - lastPY;
      const dt = Math.max(8, now - lastPT);
      const dRY = -dx * DRAG_FACTOR, dRX = dy * DRAG_FACTOR;
      rotY += dRY; rotX = clamp(rotX + dRX, -TILT_CLAMP, TILT_CLAMP);
      velY = clamp(dRY * (16 / dt), -MAX_VEL, MAX_VEL);
      velX = clamp(dRX * (16 / dt), -MAX_VEL * 0.6, MAX_VEL * 0.6);
      lastPX = e.clientX; lastPY = e.clientY; lastPT = now;
    }
    function onUp() { dragging = false; }
    function onVisibility() { paused = document.hidden; }

    const io = new IntersectionObserver(([en]) => { paused = !en.isIntersecting || document.hidden; }, { threshold: 0.01 });
    const ro = new ResizeObserver(resize);
    io.observe(canvas); ro.observe(canvas); resize();
    canvas.addEventListener('pointerdown', onDown);
    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerup', onUp);
    canvas.addEventListener('pointercancel', onUp);
    canvas.addEventListener('lostpointercapture', onUp);
    document.addEventListener('visibilitychange', onVisibility);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect(); ro.disconnect();
      canvas.removeEventListener('pointerdown', onDown);
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerup', onUp);
      canvas.removeEventListener('pointercancel', onUp);
      canvas.removeEventListener('lostpointercapture', onUp);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [accentColor, baseColor]);

  return (
    <div className={`relative ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full cursor-grab active:cursor-grabbing touch-none" />

      {/* Detected-threat notes panel (right side) */}
      <div className={`cf-notes hidden lg:flex ${secured ? 'cf-hide' : ''}`} aria-hidden="true">
        <div className="cf-notes-head">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
            <path d="M14 3v5h5" />
            <path d="M9 13h6M9 17h6" />
          </svg>
          <span>Threats Detected</span>
        </div>
        <ul className="cf-notes-list">
          {notes.map(n => (
            <li key={n.id} className={`cf-note cf-enter ${n.struck ? 'cf-struck' : ''}`}>
              <span className="cf-dot" />
              <span className="cf-word">{n.word}</span>
              <span className="cf-line" />
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .cf-notes {
          position: absolute; left: 100%; top: 50%; transform: translateY(-50%);
          margin-left: 28px; flex-direction: column; gap: 10px; min-width: 196px;
          padding: 14px 16px; border-radius: 12px; pointer-events: none;
          background: rgba(8,20,38,0.72); border: 1px solid rgba(110,231,255,0.28);
          box-shadow: 0 0 24px rgba(110,231,255,0.12), inset 0 0 18px rgba(110,231,255,0.05);
          backdrop-filter: blur(4px);
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          transition: opacity .6s ease, transform .6s ease;
        }
        .cf-notes.cf-hide { opacity: 0; transform: translateY(-50%) translateX(12px); pointer-events: none; }
        .cf-notes-head {
          display: flex; align-items: center; gap: 8px; color: #6ee7ff;
          font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase;
          padding-bottom: 9px; margin-bottom: 2px; border-bottom: 1px solid rgba(110,231,255,0.18);
        }
        .cf-notes-head svg { width: 15px; height: 15px; flex: none; }
        .cf-notes-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
        .cf-note { position: relative; display: flex; align-items: center; gap: 9px; color: #bfe9ff; font-size: 13px; transition: opacity .3s ease; }
        .cf-note.cf-struck { opacity: .5; }
        .cf-dot { width: 6px; height: 6px; border-radius: 50%; background: #6ee7ff; box-shadow: 0 0 8px #6ee7ff; flex: none; }
        .cf-note.cf-struck .cf-dot { background: #2f7fb8; box-shadow: none; }
        .cf-line { position: absolute; left: 15px; right: 0; top: 52%; height: 2px; background: #6ee7ff; box-shadow: 0 0 6px #6ee7ff; transform: scaleX(0); transform-origin: left; transition: transform .35s ease; }
        .cf-note.cf-struck .cf-line { transform: scaleX(1); }
        .cf-enter { animation: cf-in .3s ease; }
        @keyframes cf-in { from { opacity: 0; transform: translateX(10px); } to { opacity: 1; transform: none; } }
        @media (prefers-reduced-motion: reduce) {
          .cf-line { transition: none; }
          .cf-enter { animation: none; }
        }
      `}</style>
    </div>
  );
}
