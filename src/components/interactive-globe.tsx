import { useEffect, useRef } from 'react';

const HUB_REGION_COUNT = 8;
const HUB_NODE_COUNTS = [4, 4, 3, 4, 4, 3, 3, 3];
const SECONDARY_NODE_COUNT = 20;
const CLUSTER_SPREAD_DEG = 11;
const MIN_COVERAGE_SPACING_DEG = 30;
const INTRA_CLUSTER_LINKS = 2;
const SUPPORT_LINKS = 3;
const BACKBONE_LINKS = 9;
const BACK_OPACITY_MIN = 0.16;
const ROTATION_SPEED = 0.00175;

const ARC_OPACITY_MAX = 0.58;
const HUB_ICON_SIZE = 23;
const SUPPORT_ICON_SIZE = 18;
const HUB_DIAMOND_SIZE = 4.3;
const SUPPORT_DIAMOND_SIZE = 3.2;

const DEFAULT_DOT_RGB: RGB = [38, 146, 255];
const DEFAULT_ARC_RGB: RGB = [64, 212, 255];
const DEFAULT_MARKER_RGB: RGB = [92, 248, 255];
const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2;

const ICON_CYCLE = ['cloud', 'building', 'shield', 'monitor', 'cloud-box', 'globe', 'person', 'home'] as const;
type IconType = (typeof ICON_CYCLE)[number];
type RGB = [number, number, number];
type NodeRole = 'hub' | 'support';
type LinkTier = 'cluster' | 'support' | 'backbone';

interface LatLng {
  lat: number;
  lng: number;
}

interface GlobeNode extends LatLng {
  id: string;
  icon: IconType;
  role: NodeRole;
  clusterId?: number;
  emphasis: number;
  phase: number;
}

interface GlobeLink {
  from: string;
  to: string;
  tier: LinkTier;
  emphasis: number;
  phase: number;
}

interface CoverageCandidate extends LatLng {
  key: string;
  priority: number;
}

interface HubRegion extends LatLng {
  icons: IconType[];
}

interface GlobeProps {
  dotColor?: string;
  arcColor?: string;
  markerColor?: string;
  autoRotateSpeed?: number;
  className?: string;
}

const HUB_REGIONS: HubRegion[] = [
  { lat: 37.78, lng: -122.42, icons: ['cloud', 'monitor', 'building', 'shield'] },
  { lat: 40.71, lng: -74.0, icons: ['building', 'shield', 'person', 'cloud-box'] },
  { lat: -23.55, lng: -46.63, icons: ['globe', 'home', 'shield', 'cloud'] },
  { lat: 50.11, lng: 8.68, icons: ['shield', 'building', 'cloud-box', 'monitor'] },
  { lat: 6.52, lng: 3.37, icons: ['monitor', 'cloud', 'person', 'shield'] },
  { lat: 25.2, lng: 55.27, icons: ['cloud-box', 'building', 'monitor', 'globe'] },
  { lat: 35.68, lng: 139.69, icons: ['globe', 'building', 'cloud', 'shield'] },
  { lat: -33.87, lng: 151.21, icons: ['home', 'cloud-box', 'monitor', 'person'] },
];

const SUPPORT_SEEDS: Array<LatLng & { priority: number }> = [
  { lat: 46, lng: -32, priority: 1.2 },
  { lat: 22, lng: -30, priority: 1.1 },
  { lat: -10, lng: -18, priority: 1.15 },
  { lat: -34, lng: -5, priority: 1.05 },
  { lat: 38, lng: -160, priority: 1.2 },
  { lat: 8, lng: -152, priority: 1.25 },
  { lat: -18, lng: -145, priority: 1.2 },
  { lat: 18, lng: 165, priority: 1.15 },
  { lat: -8, lng: 92, priority: 1.18 },
  { lat: -30, lng: 104, priority: 1.05 },
  { lat: -42, lng: 42, priority: 1.0 },
  { lat: -47, lng: -112, priority: 1.0 },
  { lat: 63, lng: -22, priority: 0.95 },
  { lat: 67, lng: 86, priority: 0.9 },
  { lat: 54, lng: 86, priority: 1.08 },
  { lat: 11, lng: 108, priority: 1.12 },
  { lat: 29, lng: 34, priority: 0.96 },
  { lat: -5, lng: 52, priority: 1.1 },
  { lat: 60, lng: -96, priority: 0.88 },
  { lat: -28, lng: 149, priority: 0.92 },
  { lat: 0, lng: -105, priority: 1.08 },
  { lat: 12, lng: -118, priority: 0.98 },
  { lat: -2, lng: 138, priority: 0.95 },
  { lat: 32, lng: 152, priority: 0.92 },
];

const BACKBONE_PAIRS: Array<[number, number]> = [
  [0, 1],
  [1, 3],
  [3, 5],
  [5, 6],
  [6, 7],
  [1, 2],
  [2, 4],
  [4, 5],
  [0, 6],
  [3, 6],
  [3, 4],
];

const BACKGROUND_DOTS = createBackgroundDots(2450);
const NETWORK = buildNetwork();

function fract(value: number) {
  return value - Math.floor(value);
}

function seededNoise(seed: number) {
  return fract(Math.sin(seed * 127.1 + 311.7) * 43758.5453123);
}

function degToRad(value: number) {
  return (value * Math.PI) / 180;
}

function radToDeg(value: number) {
  return (value * 180) / Math.PI;
}

function wrapLng(lng: number) {
  const wrapped = ((lng + 180) % 360 + 360) % 360 - 180;
  return wrapped === -180 ? 180 : wrapped;
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function latLngToUnit(lat: number, lng: number): [number, number, number] {
  const phi = degToRad(90 - lat);
  const theta = degToRad(lng + 180);
  return [
    -(Math.sin(phi) * Math.cos(theta)),
    Math.cos(phi),
    Math.sin(phi) * Math.sin(theta),
  ];
}

function latLngToXYZ(lat: number, lng: number, radius: number): [number, number, number] {
  const [x, y, z] = latLngToUnit(lat, lng);
  return [x * radius, y * radius, z * radius];
}

function offsetLatLng(lat: number, lng: number, distanceDeg: number, bearingRad: number): LatLng {
  const lat1 = degToRad(lat);
  const lng1 = degToRad(lng);
  const angularDistance = degToRad(distanceDeg);

  const lat2 = Math.asin(
    Math.sin(lat1) * Math.cos(angularDistance) +
      Math.cos(lat1) * Math.sin(angularDistance) * Math.cos(bearingRad)
  );
  const lng2 =
    lng1 +
    Math.atan2(
      Math.sin(bearingRad) * Math.sin(angularDistance) * Math.cos(lat1),
      Math.cos(angularDistance) - Math.sin(lat1) * Math.sin(lat2)
    );

  return {
    lat: clamp(radToDeg(lat2), -85, 85),
    lng: wrapLng(radToDeg(lng2)),
  };
}

function angularDistance(a: LatLng, b: LatLng) {
  const ua = latLngToUnit(a.lat, a.lng);
  const ub = latLngToUnit(b.lat, b.lng);
  const dot = clamp(ua[0] * ub[0] + ua[1] * ub[1] + ua[2] * ub[2], -1, 1);
  return radToDeg(Math.acos(dot));
}

function minAngularDistance(target: LatLng, points: LatLng[]) {
  if (!points.length) {
    return 180;
  }

  let min = Infinity;
  for (const point of points) {
    min = Math.min(min, angularDistance(target, point));
  }
  return min;
}

function nearestNodes<T extends LatLng>(source: LatLng, points: T[], count: number, excludeId?: string) {
  return points
    .filter((point) => !excludeId || (point as GlobeNode).id !== excludeId)
    .map((point) => ({ point, distance: angularDistance(source, point) }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, count);
}

function rotY(x: number, y: number, z: number, angle: number): [number, number, number] {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return [x * cos + z * sin, y, -x * sin + z * cos];
}

function rotX(x: number, y: number, z: number, angle: number): [number, number, number] {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return [x, y * cos - z * sin, y * sin + z * cos];
}

function project(x: number, y: number, z: number, cx: number, cy: number, fov: number): [number, number] {
  const scale = fov / (fov + z);
  return [x * scale + cx, y * scale + cy];
}

function parseHexColor(color: string): RGB | null {
  const hex = color.replace('#', '').trim();
  if (hex.length === 3) {
    const [r, g, b] = hex.split('').map((part) => Number.parseInt(part + part, 16));
    return [r, g, b];
  }
  if (hex.length === 6) {
    return [
      Number.parseInt(hex.slice(0, 2), 16),
      Number.parseInt(hex.slice(2, 4), 16),
      Number.parseInt(hex.slice(4, 6), 16),
    ];
  }
  return null;
}

function colorWithAlpha(color: string, alpha: number, fallback: RGB) {
  if (color.includes('ALPHA')) {
    return color.replace('ALPHA', alpha.toFixed(2));
  }

  if (color.startsWith('#')) {
    const parsed = parseHexColor(color);
    if (parsed) {
      return `rgba(${parsed[0]}, ${parsed[1]}, ${parsed[2]}, ${alpha.toFixed(2)})`;
    }
  }

  const match = color.match(/rgba?\(([^)]+)\)/i);
  if (match) {
    const parts = match[1]
      .split(',')
      .slice(0, 3)
      .map((part) => Number.parseFloat(part.trim()))
      .filter((part) => Number.isFinite(part));

    if (parts.length === 3) {
      return `rgba(${parts[0]}, ${parts[1]}, ${parts[2]}, ${alpha.toFixed(2)})`;
    }
  }

  return `rgba(${fallback[0]}, ${fallback[1]}, ${fallback[2]}, ${alpha.toFixed(2)})`;
}

function createBackgroundDots(count: number) {
  return Array.from({ length: count }, (_, index) => {
    const theta = (2 * Math.PI * index) / GOLDEN_RATIO;
    const phi = Math.acos(1 - (2 * (index + 0.5)) / count);
    return [
      Math.cos(theta) * Math.sin(phi),
      Math.cos(phi),
      Math.sin(theta) * Math.sin(phi),
    ] as [number, number, number];
  });
}

function createFibonacciCandidates(count: number): CoverageCandidate[] {
  return Array.from({ length: count }, (_, index) => {
    const theta = (2 * Math.PI * index) / GOLDEN_RATIO;
    const phi = Math.acos(1 - (2 * (index + 0.5)) / count);
    const lat = 90 - radToDeg(phi);
    const lng = wrapLng((radToDeg(theta) % 360) - 180);
    const jitterDistance = 2 + seededNoise(index * 4.37 + 0.8) * 6;
    const jitterBearing = seededNoise(index * 7.91 + 1.2) * Math.PI * 2;
    const jittered = offsetLatLng(lat, lng, jitterDistance, jitterBearing);

    return {
      key: `grid-${index}`,
      lat: jittered.lat,
      lng: jittered.lng,
      priority: 0.15,
    };
  });
}

function createHubNodes() {
  return HUB_REGIONS.slice(0, HUB_REGION_COUNT).flatMap((hub, hubIndex) => {
    const count = HUB_NODE_COUNTS[hubIndex] ?? HUB_NODE_COUNTS[HUB_NODE_COUNTS.length - 1] ?? 4;

    return Array.from({ length: count }, (_, nodeIndex) => {
      const ringFactor = nodeIndex === 0 ? 0.26 : 0.58 + Math.floor((nodeIndex - 1) / 2) * 0.18;
      const distanceDeg = CLUSTER_SPREAD_DEG * (ringFactor + seededNoise(hubIndex * 19 + nodeIndex * 7 + 0.33) * 0.16);
      const angle =
        ((Math.PI * 2) / count) * nodeIndex +
        seededNoise(hubIndex * 31 + nodeIndex * 11 + 0.9) * 1.05;
      const position = offsetLatLng(hub.lat, hub.lng, distanceDeg, angle);

      return {
        id: `hub-${hubIndex}-${nodeIndex}`,
        lat: position.lat,
        lng: position.lng,
        icon: hub.icons[nodeIndex % hub.icons.length],
        role: 'hub' as const,
        clusterId: hubIndex,
        emphasis: 1.04 + (count - nodeIndex) * 0.06,
        phase: hubIndex * 0.75 + nodeIndex * 0.42,
      };
    });
  });
}

function selectSupportNodes(baseNodes: GlobeNode[]) {
  const candidates: CoverageCandidate[] = [
    ...SUPPORT_SEEDS.map((seed, index) => ({
      key: `seed-${index}`,
      lat: seed.lat,
      lng: seed.lng,
      priority: seed.priority,
    })),
    ...createFibonacciCandidates(160),
  ];

  const chosen: GlobeNode[] = [];
  const used = new Set<string>();
  let spacing = MIN_COVERAGE_SPACING_DEG;
  const activeHubCenters = HUB_REGIONS.slice(0, HUB_REGION_COUNT);

  while (chosen.length < SECONDARY_NODE_COUNT && spacing >= 16) {
    const existing = [...baseNodes, ...chosen];
    let bestCandidate: CoverageCandidate | null = null;
    let bestScore = -Infinity;

    for (const candidate of candidates) {
      if (used.has(candidate.key)) {
        continue;
      }

      const minToExisting = minAngularDistance(candidate, existing);
      if (minToExisting < spacing * 0.56) {
        continue;
      }

      const minToHubCenter = minAngularDistance(candidate, activeHubCenters);
      const bridgeBias = 12 - Math.abs(minToHubCenter - 38) * 0.22;
      const equatorBias = 2.4 - Math.abs(candidate.lat) * 0.03;
      const polarPenalty = Math.max(0, Math.abs(candidate.lat) - 68) * 0.32;
      const priorityBoost = candidate.priority * 8;
      const score = minToExisting * 1.3 + bridgeBias + equatorBias + priorityBoost - polarPenalty;

      if (score > bestScore) {
        bestScore = score;
        bestCandidate = candidate;
      }
    }

    if (!bestCandidate) {
      spacing -= 3;
      continue;
    }

    used.add(bestCandidate.key);
    chosen.push({
      id: `support-${chosen.length}`,
      lat: bestCandidate.lat,
      lng: bestCandidate.lng,
      icon: ICON_CYCLE[(chosen.length + 2) % ICON_CYCLE.length],
      role: 'support',
      emphasis: 0.82 + bestCandidate.priority * 0.08,
      phase: 1.4 + chosen.length * 0.37,
    });
  }

  return chosen;
}

function buildNetwork() {
  const nodes = [...createHubNodes()];
  const supportNodes = selectSupportNodes(nodes);
  nodes.push(...supportNodes);

  const byId = new Map(nodes.map((node) => [node.id, node]));
  const byCluster = new Map<number, GlobeNode[]>();
  const degrees = new Map(nodes.map((node) => [node.id, 0]));
  const seen = new Set<string>();
  const links: GlobeLink[] = [];

  for (const node of nodes) {
    if (node.role === 'hub' && typeof node.clusterId === 'number') {
      const clusterNodes = byCluster.get(node.clusterId) ?? [];
      clusterNodes.push(node);
      byCluster.set(node.clusterId, clusterNodes);
    }
  }

  function addLink(from: string, to: string, tier: LinkTier, emphasis: number) {
    if (from === to) {
      return false;
    }

    const key = [from, to].sort().join('::');
    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    links.push({
      from,
      to,
      tier,
      emphasis,
      phase: seededNoise(links.length * 9.7 + emphasis * 13.1) * Math.PI * 2,
    });
    degrees.set(from, (degrees.get(from) ?? 0) + 1);
    degrees.set(to, (degrees.get(to) ?? 0) + 1);
    return true;
  }

  function nodeById(id: string) {
    const node = byId.get(id);
    if (!node) {
      throw new Error(`Missing globe node: ${id}`);
    }
    return node;
  }

  for (const [clusterId, clusterNodes] of byCluster.entries()) {
    if (!clusterNodes.length) {
      continue;
    }

    const center = HUB_REGIONS[clusterId];
    clusterNodes.sort(
      (a, b) => angularDistance(a, center) - angularDistance(b, center)
    );

    if (clusterNodes.length > 2) {
      for (let index = 0; index < clusterNodes.length; index += 1) {
        const current = clusterNodes[index];
        const next = clusterNodes[(index + 1) % clusterNodes.length];
        addLink(current.id, next.id, 'cluster', 1.02);
      }
    }

    for (const node of clusterNodes) {
      const neighbors = nearestNodes(node, clusterNodes, INTRA_CLUSTER_LINKS + 1, node.id).slice(0, INTRA_CLUSTER_LINKS);
      neighbors.forEach(({ point }, index) => {
        addLink(node.id, point.id, 'cluster', 1.0 - index * 0.08);
      });
    }
  }

  const hubs = nodes.filter((node) => node.role === 'hub');
  const supports = nodes.filter((node) => node.role === 'support');

  const hubRepresentatives = HUB_REGIONS.slice(0, HUB_REGION_COUNT).map((center, clusterId) => {
    const clusterNodes = byCluster.get(clusterId) ?? [];
    return (
      clusterNodes
        .map((node) => ({ node, distance: angularDistance(node, center) }))
        .sort((a, b) => a.distance - b.distance)[0]?.node ?? clusterNodes[0]
    );
  });

  for (const support of supports) {
    const nearestHubs = nearestNodes(support, hubs, 2, support.id);
    nearestHubs.forEach(({ point }, index) => {
      addLink(support.id, point.id, 'support', 0.92 - index * 0.08);
    });

    const nearestSupport = nearestNodes(support, supports, SUPPORT_LINKS, support.id)
      .filter(({ distance }) => distance > 8 && distance < 60)
      .slice(0, 2);
    nearestSupport.forEach(({ point }, index) => {
      addLink(support.id, point.id, 'support', 0.76 - index * 0.06);
    });
  }

  hubRepresentatives.forEach((representative, clusterId) => {
    if (!representative) {
      return;
    }

    const nearbySupports = nearestNodes(HUB_REGIONS[clusterId], supports, 2)
      .filter(({ distance }) => distance < 64);
    nearbySupports.forEach(({ point }, index) => {
      addLink(representative.id, point.id, 'support', 0.84 - index * 0.08);
    });
  });

  BACKBONE_PAIRS.slice(0, BACKBONE_LINKS).forEach(([fromCluster, toCluster], index) => {
    const fromNode = hubRepresentatives[fromCluster];
    const toNode = hubRepresentatives[toCluster];
    if (fromNode && toNode) {
      addLink(fromNode.id, toNode.id, 'backbone', 1.14 - index * 0.03);
    }
  });

  const sortedSupports = [...supports].sort((a, b) => (degrees.get(a.id) ?? 0) - (degrees.get(b.id) ?? 0));
  for (const support of sortedSupports) {
    while ((degrees.get(support.id) ?? 0) < SUPPORT_LINKS) {
      const candidates = nearestNodes(support, nodes, 8, support.id)
        .filter(({ point, distance }) => {
          const key = [support.id, (point as GlobeNode).id].sort().join('::');
          return !seen.has(key) && distance > 10 && distance < 95;
        });

      const next = candidates[0];
      if (!next) {
        break;
      }

      addLink(
        support.id,
        (next.point as GlobeNode).id,
        'support',
        next.point.role === 'hub' ? 0.82 : 0.72
      );
    }
  }

  // Identify any remaining sparse regions and attach them with a quiet support arc.
  const sparseAuditPoints = createFibonacciCandidates(84)
    .filter((candidate) => minAngularDistance(candidate, nodes) > MIN_COVERAGE_SPACING_DEG * 0.92)
    .slice(0, 8);

  sparseAuditPoints.forEach((candidate, index) => {
    const nearestSupport = nearestNodes(candidate, supports, 2)[0]?.point;
    const nearestHub = nearestNodes(candidate, hubs, 2)[0]?.point;
    if (nearestSupport && nearestHub) {
      addLink(nearestSupport.id, nearestHub.id, 'support', 0.64 - index * 0.02);
    }
  });

  return { nodes, links, nodeById };
}

function drawMarkerIcon(
  ctx: CanvasRenderingContext2D,
  type: IconType,
  x: number,
  y: number,
  size: number,
  color: string
) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = Math.max(1.05, size * 0.075);
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  const cx = x + size * 0.5;
  const cy = y + size * 0.5;

  switch (type) {
    case 'person':
      ctx.beginPath();
      ctx.arc(cx, cy, size * 0.5, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx, cy - size * 0.14, size * 0.14, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx, cy + size * 0.42, size * 0.26, Math.PI * 1.12, Math.PI * 1.88);
      ctx.stroke();
      break;

    case 'cloud': {
      const drawCloud = (cloudX: number, cloudY: number, width: number, height: number) => {
        ctx.beginPath();
        ctx.moveTo(cloudX - width * 0.42, cloudY + height * 0.25);
        ctx.bezierCurveTo(cloudX - width * 0.52, cloudY + height * 0.25, cloudX - width * 0.52, cloudY - height * 0.02, cloudX - width * 0.36, cloudY - height * 0.02);
        ctx.bezierCurveTo(cloudX - width * 0.4, cloudY - height * 0.48, cloudX - width * 0.08, cloudY - height * 0.52, cloudX - width * 0.04, cloudY - height * 0.16);
        ctx.bezierCurveTo(cloudX - width * 0.06, cloudY - height * 0.62, cloudX + width * 0.24, cloudY - height * 0.62, cloudX + width * 0.2, cloudY - height * 0.18);
        ctx.bezierCurveTo(cloudX + width * 0.26, cloudY - height * 0.54, cloudX + width * 0.52, cloudY - height * 0.28, cloudX + width * 0.42, cloudY - height * 0.02);
        ctx.bezierCurveTo(cloudX + width * 0.54, cloudY - height * 0.02, cloudX + width * 0.52, cloudY + height * 0.25, cloudX + width * 0.42, cloudY + height * 0.25);
        ctx.closePath();
        ctx.stroke();
      };

      const baseAlpha = ctx.globalAlpha;
      ctx.globalAlpha = baseAlpha * 0.42;
      drawCloud(cx + size * 0.14, cy - size * 0.12, size * 0.82, size * 0.6);
      ctx.globalAlpha = baseAlpha;
      drawCloud(cx - size * 0.04, cy + size * 0.08, size * 0.9, size * 0.62);
      break;
    }

    case 'building': {
      const width = size * 0.72;
      const height = size * 0.9;
      const bx = cx - width / 2;
      const by = cy - height / 2;
      ctx.beginPath();
      ctx.rect(bx, by, width, height);
      ctx.stroke();

      const windowWidth = width * 0.26;
      const windowHeight = height * 0.13;
      const gapX = (width - 2 * windowWidth) / 3;
      const gapY = (height * 0.78 - 4 * windowHeight) / 5;
      ctx.lineWidth = Math.max(0.85, size * 0.042);
      for (let row = 0; row < 4; row += 1) {
        for (let column = 0; column < 2; column += 1) {
          ctx.beginPath();
          ctx.rect(
            bx + gapX + column * (windowWidth + gapX),
            by + height * 0.06 + gapY + row * (windowHeight + gapY),
            windowWidth,
            windowHeight
          );
          ctx.stroke();
        }
      }
      break;
    }

    case 'globe':
      ctx.beginPath();
      ctx.arc(cx, cy, size * 0.48, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(cx, cy, size * 0.22, size * 0.48, 0, 0, Math.PI * 2);
      ctx.lineWidth = Math.max(0.95, size * 0.052);
      ctx.stroke();
      ctx.lineWidth = Math.max(0.9, size * 0.04);
      [-0.26, 0, 0.26].forEach((offsetY) => {
        const halfWidth = Math.sqrt(0.48 * 0.48 - offsetY * offsetY) * size;
        ctx.beginPath();
        ctx.moveTo(cx - halfWidth, cy + offsetY * size);
        ctx.lineTo(cx + halfWidth, cy + offsetY * size);
        ctx.stroke();
      });
      break;

    case 'home':
      ctx.beginPath();
      ctx.arc(cx, cy, size * 0.5, 0, Math.PI * 2);
      ctx.stroke();
      ctx.lineWidth = Math.max(1.0, size * 0.065);
      ctx.beginPath();
      ctx.moveTo(cx, cy - size * 0.32);
      ctx.lineTo(cx - size * 0.3, cy - size * 0.04);
      ctx.lineTo(cx + size * 0.3, cy - size * 0.04);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.rect(cx - size * 0.22, cy - size * 0.04, size * 0.44, size * 0.35);
      ctx.stroke();
      ctx.lineWidth = Math.max(0.85, size * 0.042);
      ctx.beginPath();
      ctx.rect(cx - size * 0.09, cy + size * 0.1, size * 0.18, size * 0.21);
      ctx.stroke();
      break;

    case 'monitor': {
      const monitorWidth = size * 0.9;
      const monitorHeight = size * 0.54;
      const monitorX = cx - monitorWidth / 2;
      const monitorY = cy - size * 0.42;
      ctx.beginPath();
      ctx.rect(monitorX, monitorY, monitorWidth, monitorHeight);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx, monitorY + monitorHeight);
      ctx.lineTo(cx, monitorY + monitorHeight + size * 0.1);
      ctx.moveTo(cx - size * 0.2, monitorY + monitorHeight + size * 0.1);
      ctx.lineTo(cx + size * 0.2, monitorY + monitorHeight + size * 0.1);
      ctx.stroke();

      const boxWidth = size * 0.46;
      const boxHeight = size * 0.34;
      const boxX = cx - boxWidth / 2;
      const boxY = monitorY + monitorHeight + size * 0.18;
      ctx.beginPath();
      ctx.rect(boxX, boxY, boxWidth, boxHeight);
      ctx.stroke();
      ctx.lineWidth = Math.max(0.85, size * 0.04);
      ctx.beginPath();
      ctx.moveTo(boxX + boxWidth * 0.15, boxY + boxHeight * 0.15);
      ctx.lineTo(boxX + boxWidth * 0.85, boxY + boxHeight * 0.85);
      ctx.moveTo(boxX + boxWidth * 0.85, boxY + boxHeight * 0.15);
      ctx.lineTo(boxX + boxWidth * 0.15, boxY + boxHeight * 0.85);
      ctx.stroke();
      break;
    }

    case 'cloud-box': {
      const cloudX = cx;
      const cloudY = cy - size * 0.22;
      const cloudWidth = size * 0.78;
      const cloudHeight = size * 0.48;
      ctx.beginPath();
      ctx.moveTo(cloudX - cloudWidth * 0.42, cloudY + cloudHeight * 0.25);
      ctx.bezierCurveTo(cloudX - cloudWidth * 0.52, cloudY + cloudHeight * 0.25, cloudX - cloudWidth * 0.52, cloudY - cloudHeight * 0.02, cloudX - cloudWidth * 0.36, cloudY - cloudHeight * 0.02);
      ctx.bezierCurveTo(cloudX - cloudWidth * 0.4, cloudY - cloudHeight * 0.48, cloudX - cloudWidth * 0.08, cloudY - cloudHeight * 0.52, cloudX - cloudWidth * 0.04, cloudY - cloudHeight * 0.16);
      ctx.bezierCurveTo(cloudX - cloudWidth * 0.06, cloudY - cloudHeight * 0.62, cloudX + cloudWidth * 0.24, cloudY - cloudHeight * 0.62, cloudX + cloudWidth * 0.2, cloudY - cloudHeight * 0.18);
      ctx.bezierCurveTo(cloudX + cloudWidth * 0.26, cloudY - cloudHeight * 0.54, cloudX + cloudWidth * 0.52, cloudY - cloudHeight * 0.28, cloudX + cloudWidth * 0.42, cloudY - cloudHeight * 0.02);
      ctx.bezierCurveTo(cloudX + cloudWidth * 0.54, cloudY - cloudHeight * 0.02, cloudX + cloudWidth * 0.52, cloudY + cloudHeight * 0.25, cloudX + cloudWidth * 0.42, cloudY + cloudHeight * 0.25);
      ctx.closePath();
      ctx.stroke();

      const boxX = cx - size * 0.28;
      const boxY = y + size * 0.52;
      const boxWidth = size * 0.56;
      const boxHeight = size * 0.42;
      ctx.beginPath();
      ctx.rect(boxX, boxY, boxWidth, boxHeight);
      ctx.stroke();
      ctx.lineWidth = Math.max(0.85, size * 0.04);
      ctx.beginPath();
      ctx.moveTo(cx, boxY);
      ctx.lineTo(cx, boxY + boxHeight);
      ctx.moveTo(boxX, boxY + boxHeight * 0.5);
      ctx.lineTo(boxX + boxWidth, boxY + boxHeight * 0.5);
      ctx.stroke();
      break;
    }

    case 'shield': {
      const width = size * 0.7;
      const height = size * 0.85;
      const shieldX = cx - width / 2;
      const shieldY = cy - height * 0.46;
      ctx.beginPath();
      ctx.moveTo(cx, shieldY);
      ctx.lineTo(shieldX + width, shieldY);
      ctx.lineTo(shieldX + width, shieldY + height * 0.5);
      ctx.quadraticCurveTo(shieldX + width, shieldY + height, cx, shieldY + height);
      ctx.quadraticCurveTo(shieldX, shieldY + height, shieldX, shieldY + height * 0.5);
      ctx.lineTo(shieldX, shieldY);
      ctx.closePath();
      ctx.stroke();
      ctx.lineWidth = Math.max(1.0, size * 0.06);
      ctx.beginPath();
      ctx.moveTo(cx - width * 0.22, cy + height * 0.04);
      ctx.lineTo(cx - width * 0.02, cy + height * 0.22);
      ctx.lineTo(cx + width * 0.26, cy - height * 0.14);
      ctx.stroke();
      break;
    }
  }

  ctx.restore();
}

export default function InteractiveGlobe({
  dotColor = 'rgba(38, 146, 255, ALPHA)',
  arcColor = 'rgba(64, 212, 255, ALPHA)',
  markerColor = 'rgba(92, 248, 255, 1)',
  autoRotateSpeed = ROTATION_SPEED,
  className = '',
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const effectiveRotateSpeed = prefersReducedMotion ? 0 : autoRotateSpeed;

    let rotationY = 0.45;
    let rotationX = 0.28;
    let time = 0;
    let dragging = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let dragStartRY = 0;
    let dragStartRX = 0;
    let animationFrame = 0;
    let canvasWidth = 0;
    let canvasHeight = 0;
    let canvasDpr = 1;
    let paused = false;

    function resizeCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      if (width === canvasWidth && height === canvasHeight && dpr === canvasDpr) {
        return;
      }

      canvasWidth = width;
      canvasHeight = height;
      canvasDpr = dpr;
      canvas.width = Math.max(1, width * dpr);
      canvas.height = Math.max(1, height * dpr);
    }

    function draw() {
      if (paused) {
        animationFrame = requestAnimationFrame(draw);
        return;
      }

      const dpr = canvasDpr;
      const width = canvasWidth;
      const height = canvasHeight;
      const cx = width / 2;
      const cy = height / 2;
      const radius = Math.min(width, height) * 0.385;
      const fov = 620;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      if (!dragging) {
        rotationY += effectiveRotateSpeed;
      }
      time += prefersReducedMotion ? 0 : 0.014;

      const glow = ctx.createRadialGradient(cx, cy, radius * 0.28, cx, cy, radius * 1.55);
      glow.addColorStop(0, 'rgba(10, 40, 78, 0.38)');
      glow.addColorStop(0.55, 'rgba(11, 64, 122, 0.12)');
      glow.addColorStop(1, 'rgba(4, 17, 34, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(74, 190, 255, 0.14)';
      ctx.lineWidth = 1;
      ctx.stroke();

      for (const dot of BACKGROUND_DOTS) {
        let [x, y, z] = [dot[0] * radius, dot[1] * radius, dot[2] * radius];
        [x, y, z] = rotX(x, y, z, rotationX);
        [x, y, z] = rotY(x, y, z, rotationY);

        if (z > 0) {
          continue;
        }

        const [sx, sy] = project(x, y, z, cx, cy, fov);
        const alpha = Math.max(0.07, 0.34 * (1 - (z + radius) / (2 * radius)));
        ctx.beginPath();
        ctx.arc(sx, sy, 0.9 + alpha * 2.1, 0, Math.PI * 2);
        ctx.fillStyle = colorWithAlpha(dotColor, alpha, DEFAULT_DOT_RGB);
        ctx.fill();
      }

      const transformedLinks = NETWORK.links
        .map((link) => {
          const fromNode = NETWORK.nodeById(link.from);
          const toNode = NETWORK.nodeById(link.to);

          let [x1, y1, z1] = latLngToXYZ(fromNode.lat, fromNode.lng, radius);
          let [x2, y2, z2] = latLngToXYZ(toNode.lat, toNode.lng, radius);
          [x1, y1, z1] = rotX(x1, y1, z1, rotationX);
          [x1, y1, z1] = rotY(x1, y1, z1, rotationY);
          [x2, y2, z2] = rotX(x2, y2, z2, rotationX);
          [x2, y2, z2] = rotY(x2, y2, z2, rotationY);

          const averageZ = (z1 + z2) / 2;
          const angleDeg = angularDistance(fromNode, toNode);
          const midpointX = (x1 + x2) / 2;
          const midpointY = (y1 + y2) / 2;
          const midpointZ = (z1 + z2) / 2;
          const midpointLength = Math.sqrt(midpointX * midpointX + midpointY * midpointY + midpointZ * midpointZ);
          const arcBase =
            link.tier === 'backbone'
              ? 1.2
              : link.tier === 'support'
                ? 1.1
                : 1.055;
          const arcBoost =
            link.tier === 'backbone'
              ? Math.min(0.26, angleDeg / 180 * 0.28)
              : link.tier === 'support'
                ? Math.min(0.18, angleDeg / 180 * 0.2)
                : Math.min(0.12, angleDeg / 180 * 0.14);
          const arcHeight = radius * (arcBase + arcBoost);

          return {
            ...link,
            averageZ,
            fromNode,
            toNode,
            start: project(x1, y1, z1, cx, cy, fov),
            end: project(x2, y2, z2, cx, cy, fov),
            control: project(
              (midpointX / midpointLength) * arcHeight,
              (midpointY / midpointLength) * arcHeight,
              (midpointZ / midpointLength) * arcHeight,
              cx,
              cy,
              fov
            ),
          };
        })
        .filter((link) => link.averageZ <= radius * 0.78)
        .sort((a, b) => b.averageZ - a.averageZ);

      for (const link of transformedLinks) {
        const depth = (link.averageZ + radius) / (2 * radius);
        const frontFactor = 1 - depth;
        const alphaBase =
          link.tier === 'backbone'
            ? ARC_OPACITY_MAX * 0.95
            : link.tier === 'cluster'
              ? ARC_OPACITY_MAX * 0.78
              : ARC_OPACITY_MAX * 0.64;
        const alpha = Math.max(
          0.055,
          alphaBase * (0.24 + frontFactor * 0.9) * link.emphasis
        );
        const lineWidth =
          (link.tier === 'backbone' ? 1.65 : link.tier === 'cluster' ? 1.12 : 0.88) *
          (link.averageZ < 0 ? 1.08 : 0.82);

        ctx.beginPath();
        ctx.moveTo(link.start[0], link.start[1]);
        ctx.quadraticCurveTo(link.control[0], link.control[1], link.end[0], link.end[1]);
        ctx.strokeStyle = colorWithAlpha(arcColor, alpha, DEFAULT_ARC_RGB);
        ctx.lineWidth = lineWidth;
        ctx.shadowColor = colorWithAlpha(markerColor, alpha * 0.55, DEFAULT_MARKER_RGB);
        ctx.shadowBlur = link.tier === 'backbone' ? 10 : link.tier === 'cluster' ? 6 : 4;
        ctx.stroke();
        ctx.shadowBlur = 0;

        if (!prefersReducedMotion && link.averageZ <= 0.1 * radius) {
          const particleT =
            (Math.sin(time * (link.tier === 'backbone' ? 0.8 : 1.05) + link.phase) + 1) / 2;
          const px =
            (1 - particleT) * (1 - particleT) * link.start[0] +
            2 * (1 - particleT) * particleT * link.control[0] +
            particleT * particleT * link.end[0];
          const py =
            (1 - particleT) * (1 - particleT) * link.start[1] +
            2 * (1 - particleT) * particleT * link.control[1] +
            particleT * particleT * link.end[1];
          const particleSize = link.tier === 'backbone' ? 2.2 : link.tier === 'cluster' ? 1.8 : 1.4;

          ctx.beginPath();
          ctx.arc(px, py, particleSize, 0, Math.PI * 2);
          ctx.fillStyle = colorWithAlpha(markerColor, 0.82, DEFAULT_MARKER_RGB);
          ctx.shadowColor = colorWithAlpha(markerColor, 0.55, DEFAULT_MARKER_RGB);
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      const transformedNodes = NETWORK.nodes
        .map((node) => {
          let [x, y, z] = latLngToXYZ(node.lat, node.lng, radius);
          [x, y, z] = rotX(x, y, z, rotationX);
          [x, y, z] = rotY(x, y, z, rotationY);

          return {
            ...node,
            x,
            y,
            z,
            screen: project(x, y, z, cx, cy, fov),
          };
        })
        .sort((a, b) => b.z - a.z);

      for (const node of transformedNodes) {
        const [sx, sy] = node.screen;
        const depth = (node.z + radius) / (2 * radius);
        const sizeScale = Math.max(0.44, 1 - depth * 0.56);
        const depthAlpha = Math.max(
          BACK_OPACITY_MIN,
          (node.role === 'hub' ? 1.0 : 0.88) - depth * (node.role === 'hub' ? 0.72 : 0.62)
        );
        const iconSize =
          (node.role === 'hub' ? HUB_ICON_SIZE : SUPPORT_ICON_SIZE) *
          sizeScale *
          node.emphasis;
        const diamondSize =
          (node.role === 'hub' ? HUB_DIAMOND_SIZE : SUPPORT_DIAMOND_SIZE) *
          sizeScale *
          node.emphasis;
        const pulse =
          !prefersReducedMotion && depth < 0.52
            ? (Math.sin(time * (node.role === 'hub' ? 2.2 : 1.55) + node.phase) * 0.5 + 0.5) *
              (node.role === 'hub' ? 1 : 0.55)
            : 0;

        ctx.save();
        ctx.globalAlpha = depthAlpha;
        ctx.translate(sx, sy);
        ctx.rotate(Math.PI / 4);

        const pulseSize = diamondSize + pulse * (node.role === 'hub' ? 2.7 : 1.8);
        ctx.beginPath();
        ctx.rect(-pulseSize, -pulseSize, pulseSize * 2, pulseSize * 2);
        ctx.strokeStyle = colorWithAlpha(markerColor, 0.14 + pulse * 0.22, DEFAULT_MARKER_RGB);
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.rect(-diamondSize, -diamondSize, diamondSize * 2, diamondSize * 2);
        ctx.fillStyle = colorWithAlpha(markerColor, node.role === 'hub' ? 0.14 : 0.08, DEFAULT_MARKER_RGB);
        ctx.fill();
        ctx.strokeStyle = colorWithAlpha(markerColor, node.role === 'hub' ? 0.96 : 0.72, DEFAULT_MARKER_RGB);
        ctx.lineWidth = node.role === 'hub' ? 1.4 : 1.1;
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.globalAlpha = depthAlpha;
        drawMarkerIcon(
          ctx,
          node.icon,
          sx - iconSize * 0.5,
          sy - iconSize * 0.5,
          iconSize,
          colorWithAlpha(markerColor, node.role === 'hub' ? 0.98 : 0.78, DEFAULT_MARKER_RGB)
        );
        ctx.restore();
      }

      animationFrame = requestAnimationFrame(draw);
    }

    function onPointerDown(event: PointerEvent) {
      dragging = true;
      dragStartX = event.clientX;
      dragStartY = event.clientY;
      dragStartRY = rotationY;
      dragStartRX = rotationX;
      canvas.setPointerCapture(event.pointerId);
    }

    function onPointerMove(event: PointerEvent) {
      if (!dragging) {
        return;
      }

      rotationY = dragStartRY + (event.clientX - dragStartX) * 0.005;
      rotationX = clamp(dragStartRX + (event.clientY - dragStartY) * 0.005, -1.02, 1.02);
    }

    function releaseDrag() {
      dragging = false;
    }

    function onVisibilityChange() {
      paused = document.hidden;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        paused = !entry.isIntersecting || document.hidden;
      },
      { threshold: 0.01 }
    );

    const resizeObserver = new ResizeObserver(resizeCanvas);

    observer.observe(canvas);
    resizeObserver.observe(canvas);
    resizeCanvas();

    canvas.addEventListener('pointerdown', onPointerDown);
    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerup', releaseDrag);
    canvas.addEventListener('pointercancel', releaseDrag);
    canvas.addEventListener('lostpointercapture', releaseDrag);
    document.addEventListener('visibilitychange', onVisibilityChange);

    animationFrame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrame);
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerup', releaseDrag);
      canvas.removeEventListener('pointercancel', releaseDrag);
      canvas.removeEventListener('lostpointercapture', releaseDrag);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      observer.disconnect();
      resizeObserver.disconnect();
    };
  }, [arcColor, autoRotateSpeed, dotColor, markerColor]);

  return (
    <canvas
      ref={canvasRef}
      className={`cursor-grab active:cursor-grabbing ${className}`}
    />
  );
}
