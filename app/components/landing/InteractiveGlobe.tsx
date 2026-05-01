'use client';

import { useEffect, useRef, useState } from 'react';

// ─── TUNABLE VALUES ───────────────────────────────────────────────────────────
const NODE_COUNT = 30;                  // total icon nodes (Fibonacci distributed)
const MAX_CONNECTIONS_PER_NODE = 3;     // max local arcs per node
const BACKBONE_LINK_COUNT = 9;          // long-distance cross-globe arcs
const NODE_JITTER_DEG = 3.5;           // organic jitter on Fibonacci positions (set 0 for perfect grid)
const BACK_OPACITY_MIN = 0.15;          // min opacity for back-facing nodes/arcs
const ARC_OPACITY_MAX = 0.58;           // max arc opacity (front-facing)
const ICON_SIZE_HUB = 23;              // hub icon size (px at full scale)
const ICON_SIZE_SUPPORT = 17;          // support icon size
const DIAMOND_SIZE_HUB = 4.5;          // hub diamond marker size
const DIAMOND_SIZE_SUPPORT = 3.0;      // support diamond marker size
const ROTATION_SPEED = 0.00175;        // auto-rotation speed (rad/frame)
const DRAG_ROTATION_FACTOR = 0.005;    // radians per dragged pixel
const INERTIA_DECAY = 0.94;            // inertia decay when pointer stops
const MAX_ROTATION_VELOCITY = 0.06;    // cap release momentum for very fast drags
const FRAME_DURATION_MS = 1000 / 60;   // normalize drag velocity to frame-based rotation
// ─────────────────────────────────────────────────────────────────────────────

const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2;

const ICON_CYCLE = ['cloud', 'building', 'shield', 'monitor', 'cloud-box', 'globe', 'person', 'home'] as const;
type IconType = (typeof ICON_CYCLE)[number];
type RGB = [number, number, number];
type NodeRole = 'hub' | 'support';
type LinkTier = 'cluster' | 'support' | 'backbone';

interface GlobePalette {
  dotColor: string;
  arcColor: string;
  markerColor: string;
  dotRgb: RGB;
  arcRgb: RGB;
  markerRgb: RGB;
  glowInner: string;
  glowMid: string;
  glowOuter: string;
  outline: string;
}

const DARK_THEME_PALETTE: GlobePalette = {
  dotColor: 'rgba(38, 146, 255, ALPHA)',
  arcColor: 'rgba(64, 212, 255, ALPHA)',
  markerColor: 'rgba(92, 248, 255, 1)',
  dotRgb: [38, 146, 255],
  arcRgb: [64, 212, 255],
  markerRgb: [92, 248, 255],
  glowInner: 'rgba(10,40,78,0.38)',
  glowMid: 'rgba(11,64,122,0.12)',
  glowOuter: 'rgba(4,17,34,0)',
  outline: 'rgba(74,190,255,0.14)',
};

const LIGHT_THEME_PALETTE: GlobePalette = {
  dotColor: 'rgba(37, 99, 235, ALPHA)',
  arcColor: 'rgba(3, 105, 161, ALPHA)',
  markerColor: 'rgba(2, 132, 199, 1)',
  dotRgb: [37, 99, 235],
  arcRgb: [3, 105, 161],
  markerRgb: [2, 132, 199],
  glowInner: 'rgba(59,130,246,0.14)',
  glowMid: 'rgba(14,165,233,0.06)',
  glowOuter: 'rgba(255,255,255,0)',
  outline: 'rgba(3,105,161,0.22)',
};

interface LatLng { lat: number; lng: number; }
interface GlobeNode extends LatLng { id: string; icon: IconType; role: NodeRole; emphasis: number; phase: number; }
interface GlobeLink { from: string; to: string; tier: LinkTier; emphasis: number; phase: number; }

interface GlobeProps {
  dotColor?: string;
  arcColor?: string;
  markerColor?: string;
  autoRotateSpeed?: number;
  className?: string;
}

// ─── MATH HELPERS ─────────────────────────────────────────────────────────────
function fract(value: number) { return value - Math.floor(value); }
function seededNoise(seed: number) { return fract(Math.sin(seed * 127.1 + 311.7) * 43758.5453123); }
function degToRad(value: number) { return (value * Math.PI) / 180; }
function radToDeg(value: number) { return (value * 180) / Math.PI; }
function wrapLng(lng: number) { const w = ((lng + 180) % 360 + 360) % 360 - 180; return w === -180 ? 180 : w; }
function clamp(value: number, min: number, max: number) { return Math.max(min, Math.min(max, value)); }

function latLngToUnit(lat: number, lng: number): [number, number, number] {
  const phi = degToRad(90 - lat);
  const theta = degToRad(lng + 180);
  return [-(Math.sin(phi) * Math.cos(theta)), Math.cos(phi), Math.sin(phi) * Math.sin(theta)];
}

function latLngToXYZ(lat: number, lng: number, radius: number): [number, number, number] {
  const [x, y, z] = latLngToUnit(lat, lng);
  return [x * radius, y * radius, z * radius];
}

function offsetLatLng(lat: number, lng: number, distanceDeg: number, bearingRad: number): LatLng {
  const lat1 = degToRad(lat), lng1 = degToRad(lng);
  const angularDistance = degToRad(distanceDeg);
  const lat2 = Math.asin(Math.sin(lat1) * Math.cos(angularDistance) + Math.cos(lat1) * Math.sin(angularDistance) * Math.cos(bearingRad));
  const lng2 = lng1 + Math.atan2(Math.sin(bearingRad) * Math.sin(angularDistance) * Math.cos(lat1), Math.cos(angularDistance) - Math.sin(lat1) * Math.sin(lat2));
  return { lat: clamp(radToDeg(lat2), -85, 85), lng: wrapLng(radToDeg(lng2)) };
}

function angularDistance(a: LatLng, b: LatLng) {
  const ua = latLngToUnit(a.lat, a.lng), ub = latLngToUnit(b.lat, b.lng);
  return radToDeg(Math.acos(clamp(ua[0]*ub[0]+ua[1]*ub[1]+ua[2]*ub[2], -1, 1)));
}

function nearestNodes<T extends LatLng>(source: LatLng, points: T[], count: number, excludeId?: string) {
  return points
    .filter(p => !excludeId || (p as unknown as GlobeNode).id !== excludeId)
    .map(p => ({ point: p, distance: angularDistance(source, p) }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, count);
}

function rotY(x: number, y: number, z: number, angle: number): [number, number, number] {
  const cos = Math.cos(angle), sin = Math.sin(angle);
  return [x*cos+z*sin, y, -x*sin+z*cos];
}
function rotX(x: number, y: number, z: number, angle: number): [number, number, number] {
  const cos = Math.cos(angle), sin = Math.sin(angle);
  return [x, y*cos-z*sin, y*sin+z*cos];
}
function project(x: number, y: number, z: number, cx: number, cy: number, fov: number): [number, number] {
  const scale = fov / (fov + z);
  return [x*scale+cx, y*scale+cy];
}

function parseHexColor(color: string): RGB | null {
  const hex = color.replace('#', '').trim();
  if (hex.length === 3) { const [r,g,b] = hex.split('').map(p => parseInt(p+p, 16)); return [r,g,b]; }
  if (hex.length === 6) return [parseInt(hex.slice(0,2),16),parseInt(hex.slice(2,4),16),parseInt(hex.slice(4,6),16)];
  return null;
}

function colorWithAlpha(color: string, alpha: number, fallback: RGB) {
  if (color.includes('ALPHA')) return color.replace('ALPHA', alpha.toFixed(2));
  if (color.startsWith('#')) { const p = parseHexColor(color); if (p) return `rgba(${p[0]},${p[1]},${p[2]},${alpha.toFixed(2)})`; }
  const match = color.match(/rgba?\(([^)]+)\)/i);
  if (match) { const parts = match[1].split(',').slice(0,3).map(p => parseFloat(p.trim())).filter(p => isFinite(p)); if (parts.length===3) return `rgba(${parts[0]},${parts[1]},${parts[2]},${alpha.toFixed(2)})`; }
  return `rgba(${fallback[0]},${fallback[1]},${fallback[2]},${alpha.toFixed(2)})`;
}

// ─── BACKGROUND DOTS (Fibonacci sphere, uniform coverage) ────────────────────
function createBackgroundDots(count: number) {
  return Array.from({ length: count }, (_, i) => {
    const theta = (2*Math.PI*i)/GOLDEN_RATIO, phi = Math.acos(1-(2*(i+0.5))/count);
    return [Math.cos(theta)*Math.sin(phi), Math.cos(phi), Math.sin(theta)*Math.sin(phi)] as [number,number,number];
  });
}

// ─── NETWORK GENERATION ───────────────────────────────────────────────────────

/**
 * Generate NODE_COUNT nodes using the Fibonacci sphere (sunflower) algorithm.
 * This guarantees perfectly uniform angular spacing — no clustering, no gaps.
 * Every 3rd node is promoted to 'hub' role, giving 10 evenly-distributed hubs.
 * A small deterministic jitter (NODE_JITTER_DEG) is added so the pattern looks
 * organic rather than mechanical.
 */
function generateFibonacciNodes(): GlobeNode[] {
  const nodes: GlobeNode[] = [];
  for (let i = 0; i < NODE_COUNT; i++) {
    const theta = (2 * Math.PI * i) / GOLDEN_RATIO;
    const phi = Math.acos(1 - (2 * (i + 0.5)) / NODE_COUNT);
    const lat = 90 - radToDeg(phi);
    const lng = wrapLng((radToDeg(theta) % 360) - 180);
    // Small deterministic jitter — breaks mechanical look, keeps global spread
    const jDist = seededNoise(i * 13.71 + 2.33) * NODE_JITTER_DEG;
    const jBear = seededNoise(i * 7.43 + 1.17) * Math.PI * 2;
    const pos = jDist > 0 ? offsetLatLng(lat, lng, jDist, jBear) : { lat, lng };
    const role: NodeRole = i % 3 === 0 ? 'hub' : 'support';
    nodes.push({
      id: `node-${i}`,
      lat: pos.lat,
      lng: pos.lng,
      icon: ICON_CYCLE[i % ICON_CYCLE.length],
      role,
      emphasis: role === 'hub' ? 1.08 : 0.84,
      phase: i * 0.431 + seededNoise(i * 5.3) * 0.5,
    });
  }
  return nodes;
}

/**
 * Build balanced connections:
 *
 * 1. LOCAL LINKS — each node connects to its nearest neighbours up to
 *    MAX_CONNECTIONS_PER_NODE. Degree-capping prevents any single region from
 *    concentrating all arcs.
 *
 * 2. BACKBONE LINKS — select BACKBONE_LINK_COUNT long-distance arcs between
 *    hub nodes using a greedy midpoint-spread algorithm: each new backbone link
 *    must have its arc-midpoint ≥ 28° from every already-selected backbone
 *    midpoint. This ensures backbone arcs fan out in different directions and
 *    visually cover the whole globe.
 *
 * 3. ORPHAN GUARD — any node still with degree 0 is force-connected to its
 *    single closest neighbour so no node floats unconnected.
 */
function buildNetwork() {
  const nodes = generateFibonacciNodes();
  const byId = new Map(nodes.map(n => [n.id, n]));
  const degrees = new Map(nodes.map(n => [n.id, 0]));
  const seen = new Set<string>();
  const links: GlobeLink[] = [];

  function addLink(from: string, to: string, tier: LinkTier, emphasis: number): boolean {
    if (from === to) return false;
    const key = [from, to].sort().join('::');
    if (seen.has(key)) return false;
    seen.add(key);
    links.push({
      from, to, tier, emphasis,
      phase: seededNoise(links.length * 9.7 + emphasis * 13.1) * Math.PI * 2,
    });
    degrees.set(from, (degrees.get(from) ?? 0) + 1);
    degrees.set(to, (degrees.get(to) ?? 0) + 1);
    return true;
  }

  // ── 1. Local k-NN connections ────────────────────────────────────────────
  // Iterate nodes in a shuffled-but-deterministic order so early nodes don't
  // monopolise connections. Use seededNoise as a sort key.
  const shuffled = [...nodes].sort((a, b) => seededNoise(parseInt(a.id.split('-')[1])*3.7+0.2) - seededNoise(parseInt(b.id.split('-')[1])*3.7+0.2));
  for (const node of shuffled) {
    if ((degrees.get(node.id) ?? 0) >= MAX_CONNECTIONS_PER_NODE) continue;
    const candidates = nearestNodes(node, nodes, MAX_CONNECTIONS_PER_NODE + 4, node.id);
    for (const { point } of candidates) {
      if ((degrees.get(node.id) ?? 0) >= MAX_CONNECTIONS_PER_NODE) break;
      const target = point as GlobeNode;
      // Allow target up to one extra connection above max to keep graph connected
      if ((degrees.get(target.id) ?? 0) > MAX_CONNECTIONS_PER_NODE) continue;
      const tier: LinkTier = node.role === 'hub' && target.role === 'hub' ? 'cluster' : 'support';
      addLink(node.id, target.id, tier, node.role === 'hub' ? 0.92 : 0.76);
    }
  }

  // ── 2. Backbone long-distance links with midpoint-spread guarantee ────────
  const hubs = nodes.filter(n => n.role === 'hub');

  // Collect candidate hub pairs with angular distance in [50°, 150°]
  const hubPairs: Array<{ a: GlobeNode; b: GlobeNode; dist: number }> = [];
  for (let i = 0; i < hubs.length; i++) {
    for (let j = i + 1; j < hubs.length; j++) {
      const dist = angularDistance(hubs[i], hubs[j]);
      if (dist > 50 && dist < 150) hubPairs.push({ a: hubs[i], b: hubs[j], dist });
    }
  }
  // Sort longest-first so we tend to pick dramatic cross-globe arcs
  hubPairs.sort((a, b) => b.dist - a.dist);

  // Greedy midpoint-spread selection
  const selectedMidpoints: [number, number, number][] = [];
  const MIN_MIDPOINT_SPREAD_DEG = 28;

  for (const { a, b } of hubPairs) {
    if (selectedMidpoints.length >= BACKBONE_LINK_COUNT) break;
    const ua = latLngToUnit(a.lat, a.lng);
    const ub = latLngToUnit(b.lat, b.lng);
    const mx = ua[0]+ub[0], my = ua[1]+ub[1], mz = ua[2]+ub[2];
    const ml = Math.sqrt(mx*mx+my*my+mz*mz) || 1;
    const mid: [number,number,number] = [mx/ml, my/ml, mz/ml];
    const tooClose = selectedMidpoints.some(sm => {
      const dot = clamp(sm[0]*mid[0]+sm[1]*mid[1]+sm[2]*mid[2], -1, 1);
      return radToDeg(Math.acos(dot)) < MIN_MIDPOINT_SPREAD_DEG;
    });
    if (!tooClose) {
      selectedMidpoints.push(mid);
      addLink(a.id, b.id, 'backbone', 1.12);
    }
  }

  // ── 3. Orphan guard ──────────────────────────────────────────────────────
  for (const node of nodes) {
    if ((degrees.get(node.id) ?? 0) === 0) {
      const nearest = nearestNodes(node, nodes, 2, node.id)[0];
      if (nearest) addLink(node.id, (nearest.point as GlobeNode).id, 'support', 0.68);
    }
  }

  return {
    nodes,
    links,
    nodeById: (id: string) => {
      const n = byId.get(id);
      if (!n) throw new Error(`Missing globe node: ${id}`);
      return n;
    },
  };
}

// ─── PRE-COMPUTED DATA (runs once at module load) ────────────────────────────
const BACKGROUND_DOTS = createBackgroundDots(2450);
const NETWORK = buildNetwork();

// ─── ICON DRAWING ─────────────────────────────────────────────────────────────
function drawMarkerIcon(ctx: CanvasRenderingContext2D, type: IconType, x: number, y: number, size: number, color: string) {
  ctx.save(); ctx.strokeStyle=color; ctx.fillStyle=color; ctx.lineWidth=Math.max(1.05,size*0.075); ctx.lineCap='round'; ctx.lineJoin='round';
  const cx=x+size*0.5, cy=y+size*0.5;
  switch (type) {
    case 'person':
      ctx.beginPath(); ctx.arc(cx,cy,size*0.5,0,Math.PI*2); ctx.stroke();
      ctx.beginPath(); ctx.arc(cx,cy-size*0.14,size*0.14,0,Math.PI*2); ctx.stroke();
      ctx.beginPath(); ctx.arc(cx,cy+size*0.42,size*0.26,Math.PI*1.12,Math.PI*1.88); ctx.stroke(); break;
    case 'cloud': {
      const draw=(cx2: number,cy2: number,w: number,h: number)=>{ ctx.beginPath(); ctx.moveTo(cx2-w*0.42,cy2+h*0.25); ctx.bezierCurveTo(cx2-w*0.52,cy2+h*0.25,cx2-w*0.52,cy2-h*0.02,cx2-w*0.36,cy2-h*0.02); ctx.bezierCurveTo(cx2-w*0.4,cy2-h*0.48,cx2-w*0.08,cy2-h*0.52,cx2-w*0.04,cy2-h*0.16); ctx.bezierCurveTo(cx2-w*0.06,cy2-h*0.62,cx2+w*0.24,cy2-h*0.62,cx2+w*0.2,cy2-h*0.18); ctx.bezierCurveTo(cx2+w*0.26,cy2-h*0.54,cx2+w*0.52,cy2-h*0.28,cx2+w*0.42,cy2-h*0.02); ctx.bezierCurveTo(cx2+w*0.54,cy2-h*0.02,cx2+w*0.52,cy2+h*0.25,cx2+w*0.42,cy2+h*0.25); ctx.closePath(); ctx.stroke(); };
      const ba=ctx.globalAlpha; ctx.globalAlpha=ba*0.42; draw(cx+size*0.14,cy-size*0.12,size*0.82,size*0.6); ctx.globalAlpha=ba; draw(cx-size*0.04,cy+size*0.08,size*0.9,size*0.62); break; }
    case 'building': {
      const w=size*0.72,h=size*0.9,bx=cx-w/2,by=cy-h/2;
      ctx.beginPath(); ctx.rect(bx,by,w,h); ctx.stroke();
      const ww=w*0.26,wh=h*0.13,gx=(w-2*ww)/3,gy=(h*0.78-4*wh)/5; ctx.lineWidth=Math.max(0.85,size*0.042);
      for(let r=0;r<4;r++) for(let c=0;c<2;c++) { ctx.beginPath(); ctx.rect(bx+gx+c*(ww+gx),by+h*0.06+gy+r*(wh+gy),ww,wh); ctx.stroke(); } break; }
    case 'globe':
      ctx.beginPath(); ctx.arc(cx,cy,size*0.48,0,Math.PI*2); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(cx,cy,size*0.22,size*0.48,0,0,Math.PI*2); ctx.lineWidth=Math.max(0.95,size*0.052); ctx.stroke();
      ctx.lineWidth=Math.max(0.9,size*0.04);
      [-0.26,0,0.26].forEach(o=>{ const hw=Math.sqrt(0.48*0.48-o*o)*size; ctx.beginPath(); ctx.moveTo(cx-hw,cy+o*size); ctx.lineTo(cx+hw,cy+o*size); ctx.stroke(); }); break;
    case 'home':
      ctx.beginPath(); ctx.arc(cx,cy,size*0.5,0,Math.PI*2); ctx.stroke();
      ctx.lineWidth=Math.max(1.0,size*0.065);
      ctx.beginPath(); ctx.moveTo(cx,cy-size*0.32); ctx.lineTo(cx-size*0.3,cy-size*0.04); ctx.lineTo(cx+size*0.3,cy-size*0.04); ctx.closePath(); ctx.stroke();
      ctx.beginPath(); ctx.rect(cx-size*0.22,cy-size*0.04,size*0.44,size*0.35); ctx.stroke();
      ctx.lineWidth=Math.max(0.85,size*0.042); ctx.beginPath(); ctx.rect(cx-size*0.09,cy+size*0.1,size*0.18,size*0.21); ctx.stroke(); break;
    case 'monitor': {
      const mw=size*0.9,mh=size*0.54,mx=cx-mw/2,my=cy-size*0.42;
      ctx.beginPath(); ctx.rect(mx,my,mw,mh); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx,my+mh); ctx.lineTo(cx,my+mh+size*0.1); ctx.moveTo(cx-size*0.2,my+mh+size*0.1); ctx.lineTo(cx+size*0.2,my+mh+size*0.1); ctx.stroke();
      const bw=size*0.46,bh=size*0.34,bx=cx-bw/2,by=my+mh+size*0.18;
      ctx.beginPath(); ctx.rect(bx,by,bw,bh); ctx.stroke();
      ctx.lineWidth=Math.max(0.85,size*0.04);
      ctx.beginPath(); ctx.moveTo(bx+bw*0.15,by+bh*0.15); ctx.lineTo(bx+bw*0.85,by+bh*0.85); ctx.moveTo(bx+bw*0.85,by+bh*0.15); ctx.lineTo(bx+bw*0.15,by+bh*0.85); ctx.stroke(); break; }
    case 'cloud-box': {
      const clx=cx,cly=cy-size*0.22,cw=size*0.78,ch=size*0.48;
      ctx.beginPath(); ctx.moveTo(clx-cw*0.42,cly+ch*0.25); ctx.bezierCurveTo(clx-cw*0.52,cly+ch*0.25,clx-cw*0.52,cly-ch*0.02,clx-cw*0.36,cly-ch*0.02); ctx.bezierCurveTo(clx-cw*0.4,cly-ch*0.48,clx-cw*0.08,cly-ch*0.52,clx-cw*0.04,cly-ch*0.16); ctx.bezierCurveTo(clx-cw*0.06,cly-ch*0.62,clx+cw*0.24,cly-ch*0.62,clx+cw*0.2,cly-ch*0.18); ctx.bezierCurveTo(clx+cw*0.26,cly-ch*0.54,clx+cw*0.52,cly-ch*0.28,clx+cw*0.42,cly-ch*0.02); ctx.bezierCurveTo(clx+cw*0.54,cly-ch*0.02,clx+cw*0.52,cly+ch*0.25,clx+cw*0.42,cly+ch*0.25); ctx.closePath(); ctx.stroke();
      const bx=cx-size*0.28,by=y+size*0.52,bw=size*0.56,bh=size*0.42;
      ctx.beginPath(); ctx.rect(bx,by,bw,bh); ctx.stroke();
      ctx.lineWidth=Math.max(0.85,size*0.04); ctx.beginPath(); ctx.moveTo(cx,by); ctx.lineTo(cx,by+bh); ctx.moveTo(bx,by+bh*0.5); ctx.lineTo(bx+bw,by+bh*0.5); ctx.stroke(); break; }
    case 'shield': {
      const sw=size*0.7,sh=size*0.85,sx=cx-sw/2,sy=cy-sh*0.46;
      ctx.beginPath(); ctx.moveTo(cx,sy); ctx.lineTo(sx+sw,sy); ctx.lineTo(sx+sw,sy+sh*0.5); ctx.quadraticCurveTo(sx+sw,sy+sh,cx,sy+sh); ctx.quadraticCurveTo(sx,sy+sh,sx,sy+sh*0.5); ctx.lineTo(sx,sy); ctx.closePath(); ctx.stroke();
      ctx.lineWidth=Math.max(1.0,size*0.06); ctx.beginPath(); ctx.moveTo(cx-sw*0.22,cy+sh*0.04); ctx.lineTo(cx-sw*0.02,cy+sh*0.22); ctx.lineTo(cx+sw*0.26,cy-sh*0.14); ctx.stroke(); break; }
  }
  ctx.restore();
}

// ─── REACT COMPONENT ──────────────────────────────────────────────────────────
export default function InteractiveGlobe({
  dotColor,
  arcColor,
  markerColor,
  autoRotateSpeed = ROTATION_SPEED,
  className = '',
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    if (typeof document === 'undefined') return true;
    return document.documentElement.classList.contains('dark');
  });

  useEffect(() => {
    if (typeof document === 'undefined') return undefined;

    const root = document.documentElement;
    const updateTheme = () => setIsDarkTheme(root.classList.contains('dark'));

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;
    const palette = isDarkTheme ? DARK_THEME_PALETTE : LIGHT_THEME_PALETTE;
    const activeDotColor = dotColor ?? palette.dotColor;
    const activeArcColor = arcColor ?? palette.arcColor;
    const activeMarkerColor = markerColor ?? palette.markerColor;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const effectiveRotateSpeed = prefersReducedMotion ? 0 : autoRotateSpeed;

    let rotationY = 0.45, rotationX = 0.28, time = 0, dragging = false;
    let rotationVelocityY = 0, rotationVelocityX = 0;
    let lastPointerX = 0, lastPointerY = 0, lastPointerTime = 0;
    let animationFrame = 0, canvasWidth = 0, canvasHeight = 0, canvasDpr = 1, paused = false;

    function resizeCanvas() {
      const dpr = window.devicePixelRatio || 1, width = canvas!.clientWidth, height = canvas!.clientHeight;
      if (width===canvasWidth&&height===canvasHeight&&dpr===canvasDpr) return;
      canvasWidth=width; canvasHeight=height; canvasDpr=dpr;
      canvas!.width=Math.max(1,width*dpr); canvas!.height=Math.max(1,height*dpr);
    }

    function draw() {
      if (paused) { animationFrame=requestAnimationFrame(draw); return; }
      const dpr=canvasDpr, width=canvasWidth, height=canvasHeight, cx=width/2, cy=height/2, radius=Math.min(width,height)*0.385, fov=620;
      ctx!.setTransform(dpr,0,0,dpr,0,0); ctx!.clearRect(0,0,width,height);
      if (!dragging) {
        rotationY += effectiveRotateSpeed + rotationVelocityY;
        rotationX = clamp(rotationX + rotationVelocityX, -1.02, 1.02);
      }
      rotationVelocityY *= prefersReducedMotion ? 0 : INERTIA_DECAY;
      rotationVelocityX *= prefersReducedMotion ? 0 : INERTIA_DECAY;
      if (Math.abs(rotationVelocityY) < 0.00002) rotationVelocityY = 0;
      if (Math.abs(rotationVelocityX) < 0.00002) rotationVelocityX = 0;
      time+=prefersReducedMotion?0:0.014;

      // Ambient glow
      const glow=ctx!.createRadialGradient(cx,cy,radius*0.28,cx,cy,radius*1.55);
      glow.addColorStop(0,palette.glowInner); glow.addColorStop(0.55,palette.glowMid); glow.addColorStop(1,palette.glowOuter);
      ctx!.fillStyle=glow; ctx!.fillRect(0,0,width,height);

      // Globe outline
      ctx!.beginPath(); ctx!.arc(cx,cy,radius,0,Math.PI*2); ctx!.strokeStyle=palette.outline; ctx!.lineWidth=1; ctx!.stroke();

      // Background dots — subtle, back-hemisphere only
      for (const dot of BACKGROUND_DOTS) {
        let [x,y,z]=[dot[0]*radius,dot[1]*radius,dot[2]*radius];
        [x,y,z]=rotX(x,y,z,rotationX); [x,y,z]=rotY(x,y,z,rotationY);
        if (z>0) continue;
        const [sx,sy]=project(x,y,z,cx,cy,fov), alpha=Math.max(0.07,0.34*(1-(z+radius)/(2*radius)));
        ctx!.beginPath(); ctx!.arc(sx,sy,0.9+alpha*2.1,0,Math.PI*2); ctx!.fillStyle=colorWithAlpha(activeDotColor,alpha,palette.dotRgb); ctx!.fill();
      }

      // Transform and sort links (back-to-front)
      const transformedLinks = NETWORK.links.map(link=>{
        const fn=NETWORK.nodeById(link.from), tn=NETWORK.nodeById(link.to);
        let [x1,y1,z1]=latLngToXYZ(fn.lat,fn.lng,radius); let [x2,y2,z2]=latLngToXYZ(tn.lat,tn.lng,radius);
        [x1,y1,z1]=rotX(x1,y1,z1,rotationX); [x1,y1,z1]=rotY(x1,y1,z1,rotationY);
        [x2,y2,z2]=rotX(x2,y2,z2,rotationX); [x2,y2,z2]=rotY(x2,y2,z2,rotationY);
        const avgZ=(z1+z2)/2, angleDeg=angularDistance(fn,tn);
        const mx=(x1+x2)/2,my=(y1+y2)/2,mz=(z1+z2)/2, ml=Math.sqrt(mx*mx+my*my+mz*mz)||1;
        const arcBase=link.tier==='backbone'?1.2:link.tier==='support'?1.1:1.055;
        const arcBoost=link.tier==='backbone'?Math.min(0.26,angleDeg/180*0.28):link.tier==='support'?Math.min(0.18,angleDeg/180*0.2):Math.min(0.12,angleDeg/180*0.14);
        const arcH=radius*(arcBase+arcBoost);
        return { ...link, averageZ:avgZ, fromNode:fn, toNode:tn, start:project(x1,y1,z1,cx,cy,fov), end:project(x2,y2,z2,cx,cy,fov), control:project((mx/ml)*arcH,(my/ml)*arcH,(mz/ml)*arcH,cx,cy,fov) };
      }).filter(l=>l.averageZ<=radius*0.78).sort((a,b)=>b.averageZ-a.averageZ);

      // Draw arcs
      for (const link of transformedLinks) {
        const depth=(link.averageZ+radius)/(2*radius), ff=1-depth;
        const alphaBase=link.tier==='backbone'?ARC_OPACITY_MAX*0.95:link.tier==='cluster'?ARC_OPACITY_MAX*0.78:ARC_OPACITY_MAX*0.64;
        const alpha=Math.max(BACK_OPACITY_MIN*0.36,alphaBase*(0.24+ff*0.9)*link.emphasis);
        const lw=(link.tier==='backbone'?1.65:link.tier==='cluster'?1.12:0.88)*(link.averageZ<0?1.08:0.82);
        ctx!.beginPath(); ctx!.moveTo(link.start[0],link.start[1]); ctx!.quadraticCurveTo(link.control[0],link.control[1],link.end[0],link.end[1]);
        ctx!.strokeStyle=colorWithAlpha(activeArcColor,alpha,palette.arcRgb); ctx!.lineWidth=lw;
        ctx!.shadowColor=colorWithAlpha(activeMarkerColor,alpha*0.55,palette.markerRgb); ctx!.shadowBlur=link.tier==='backbone'?10:link.tier==='cluster'?6:4; ctx!.stroke(); ctx!.shadowBlur=0;
        // Travelling dot along front-facing arcs
        if (!prefersReducedMotion&&link.averageZ<=0.1*radius) {
          const pt=(Math.sin(time*(link.tier==='backbone'?0.8:1.05)+link.phase)+1)/2;
          const px=(1-pt)*(1-pt)*link.start[0]+2*(1-pt)*pt*link.control[0]+pt*pt*link.end[0];
          const py=(1-pt)*(1-pt)*link.start[1]+2*(1-pt)*pt*link.control[1]+pt*pt*link.end[1];
          const ps=link.tier==='backbone'?2.2:link.tier==='cluster'?1.8:1.4;
          ctx!.beginPath(); ctx!.arc(px,py,ps,0,Math.PI*2); ctx!.fillStyle=colorWithAlpha(activeMarkerColor,0.82,palette.markerRgb);
          ctx!.shadowColor=colorWithAlpha(activeMarkerColor,0.55,palette.markerRgb); ctx!.shadowBlur=8; ctx!.fill(); ctx!.shadowBlur=0;
        }
      }

      // Transform and sort nodes (back-to-front)
      const transformedNodes=NETWORK.nodes.map(node=>{
        let [x,y,z]=latLngToXYZ(node.lat,node.lng,radius);
        [x,y,z]=rotX(x,y,z,rotationX); [x,y,z]=rotY(x,y,z,rotationY);
        return { ...node, x, y, z, screen:project(x,y,z,cx,cy,fov) };
      }).sort((a,b)=>b.z-a.z);

      // Draw nodes
      for (const node of transformedNodes) {
        const [sx,sy]=node.screen, depth=(node.z+radius)/(2*radius), ss=Math.max(0.44,1-depth*0.56);
        const da=Math.max(BACK_OPACITY_MIN,(node.role==='hub'?1.0:0.88)-depth*(node.role==='hub'?0.72:0.62));
        const iS=(node.role==='hub'?ICON_SIZE_HUB:ICON_SIZE_SUPPORT)*ss*node.emphasis;
        const dS=(node.role==='hub'?DIAMOND_SIZE_HUB:DIAMOND_SIZE_SUPPORT)*ss*node.emphasis;
        const pulse=!prefersReducedMotion&&depth<0.52?(Math.sin(time*(node.role==='hub'?2.2:1.55)+node.phase)*0.5+0.5)*(node.role==='hub'?1:0.55):0;
        ctx!.save(); ctx!.globalAlpha=da; ctx!.translate(sx,sy); ctx!.rotate(Math.PI/4);
        const ps=dS+pulse*(node.role==='hub'?2.7:1.8);
        ctx!.beginPath(); ctx!.rect(-ps,-ps,ps*2,ps*2); ctx!.strokeStyle=colorWithAlpha(activeMarkerColor,0.14+pulse*0.22,palette.markerRgb); ctx!.lineWidth=1; ctx!.stroke();
        ctx!.beginPath(); ctx!.rect(-dS,-dS,dS*2,dS*2); ctx!.fillStyle=colorWithAlpha(activeMarkerColor,node.role==='hub'?0.14:0.08,palette.markerRgb); ctx!.fill();
        ctx!.strokeStyle=colorWithAlpha(activeMarkerColor,node.role==='hub'?0.96:0.72,palette.markerRgb); ctx!.lineWidth=node.role==='hub'?1.4:1.1; ctx!.stroke(); ctx!.restore();
        ctx!.save(); ctx!.globalAlpha=da;
        drawMarkerIcon(ctx!,node.icon,sx-iS*0.5,sy-iS*0.5,iS,colorWithAlpha(activeMarkerColor,node.role==='hub'?0.98:0.78,palette.markerRgb));
        ctx!.restore();
      }

      animationFrame=requestAnimationFrame(draw);
    }

    function onPointerDown(e: PointerEvent) {
      dragging = true;
      rotationVelocityY = 0;
      rotationVelocityX = 0;
      lastPointerX = e.clientX;
      lastPointerY = e.clientY;
      lastPointerTime = performance.now();
      canvas!.setPointerCapture(e.pointerId);
    }
    function onPointerMove(e: PointerEvent) {
      if(!dragging)return;
      const now = performance.now();
      const dx = e.clientX - lastPointerX;
      const dy = e.clientY - lastPointerY;
      const dt = Math.max(8, now - lastPointerTime);
      const rotationDeltaY = -dx * DRAG_ROTATION_FACTOR;
      const rotationDeltaX = dy * DRAG_ROTATION_FACTOR;

      rotationY += rotationDeltaY;
      rotationX = clamp(rotationX + rotationDeltaX, -1.02, 1.02);
      rotationVelocityY = clamp(rotationDeltaY * (FRAME_DURATION_MS / dt), -MAX_ROTATION_VELOCITY, MAX_ROTATION_VELOCITY);
      rotationVelocityX = clamp(rotationDeltaX * (FRAME_DURATION_MS / dt), -MAX_ROTATION_VELOCITY * 0.6, MAX_ROTATION_VELOCITY * 0.6);

      lastPointerX = e.clientX;
      lastPointerY = e.clientY;
      lastPointerTime = now;
    }
    function releaseDrag() {
      dragging = false;
      lastPointerTime = 0;
    }
    function onVisibilityChange() { paused=document.hidden; }

    const observer=new IntersectionObserver(([e])=>{ paused=!e.isIntersecting||document.hidden; },{threshold:0.01});
    const resizeObserver=new ResizeObserver(resizeCanvas);
    observer.observe(canvas); resizeObserver.observe(canvas); resizeCanvas();
    canvas.addEventListener('pointerdown',onPointerDown); canvas.addEventListener('pointermove',onPointerMove);
    canvas.addEventListener('pointerup',releaseDrag); canvas.addEventListener('pointercancel',releaseDrag);
    canvas.addEventListener('lostpointercapture',releaseDrag); document.addEventListener('visibilitychange',onVisibilityChange);
    animationFrame=requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animationFrame);
      canvas.removeEventListener('pointerdown',onPointerDown); canvas.removeEventListener('pointermove',onPointerMove);
      canvas.removeEventListener('pointerup',releaseDrag); canvas.removeEventListener('pointercancel',releaseDrag);
      canvas.removeEventListener('lostpointercapture',releaseDrag); document.removeEventListener('visibilitychange',onVisibilityChange);
      observer.disconnect(); resizeObserver.disconnect();
    };
  }, [arcColor, autoRotateSpeed, dotColor, isDarkTheme, markerColor]);

  return (
    <div className={`relative ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  );
}
