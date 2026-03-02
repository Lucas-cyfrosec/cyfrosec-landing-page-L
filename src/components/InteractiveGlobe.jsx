import { useEffect, useRef } from 'react';

export default function InteractiveGlobe({
  dotColor = 'rgba(3, 155, 224, ALPHA)',
  arcColor = 'rgba(3, 155, 224, 0.4)',
  markerColor = 'rgba(3, 200, 240, 1)',
  autoRotateSpeed = 0.002,
  className = ''
}) {
  const canvasRef = useRef(null);

  const markers = [
    { lat: 37.78, lng: -122.42, label: 'San Francisco' },
    { lat: 51.51, lng: -0.13, label: 'London' },
    { lat: 35.68, lng: 139.69, label: 'Tokyo' },
    { lat: -33.87, lng: 151.21, label: 'Sydney' },
    { lat: 1.35, lng: 103.82, label: 'Singapore' },
    { lat: 55.76, lng: 37.62, label: 'Moscow' },
    { lat: -23.55, lng: -46.63, label: 'São Paulo' },
    { lat: 19.43, lng: -99.13, label: 'Mexico City' },
    { lat: 28.61, lng: 77.21, label: 'Delhi' },
    { lat: 36.19, lng: 44.01, label: 'Erbil' }
  ];

  const connections = [
    { from: [37.78, -122.42], to: [51.51, -0.13] },
    { from: [51.51, -0.13], to: [35.68, 139.69] },
    { from: [35.68, 139.69], to: [-33.87, 151.21] },
    { from: [37.78, -122.42], to: [1.35, 103.82] },
    { from: [51.51, -0.13], to: [28.61, 77.21] },
    { from: [37.78, -122.42], to: [-23.55, -46.63] },
    { from: [1.35, 103.82], to: [-33.87, 151.21] },
    { from: [28.61, 77.21], to: [36.19, 44.01] },
    { from: [51.51, -0.13], to: [36.19, 44.01] }
  ];

  function latLngToXYZ(lat, lng, r) {
    const phi = ((90 - lat) * Math.PI) / 180;
    const theta = ((lng + 180) * Math.PI) / 180;
    return [-(r * Math.sin(phi) * Math.cos(theta)), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(theta)];
  }

  function rotY(x, y, z, a) {
    const c = Math.cos(a), s = Math.sin(a);
    return [x * c + z * s, y, -x * s + z * c];
  }

  function rotX(x, y, z, a) {
    const c = Math.cos(a), s = Math.sin(a);
    return [x, y * c - z * s, y * s + z * c];
  }

  function proj(x, y, z, cx, cy, fov) {
    const scale = fov / (fov + z);
    return [x * scale + cx, y * scale + cy];
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Generate fibonacci sphere dots
    const dots = [];
    const numDots = 1200;
    const golden = (1 + Math.sqrt(5)) / 2;
    for (let i = 0; i < numDots; i++) {
      const theta = (2 * Math.PI * i) / golden;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / numDots);
      dots.push([Math.cos(theta) * Math.sin(phi), Math.cos(phi), Math.sin(theta) * Math.sin(phi)]);
    }

    let ry = 0.4;
    let rx = 0.3;
    let time = 0;
    let dragging = false;
    let dragStartX = 0, dragStartY = 0, dragStartRY = 0, dragStartRX = 0;
    let animId;

    function draw() {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);

      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.min(w, h) * 0.38;
      const fov = 600;

      if (!dragging) ry += autoRotateSpeed;
      time += 0.015;

      ctx.clearRect(0, 0, w, h);

      // Outer glow
      const glow = ctx.createRadialGradient(cx, cy, radius * 0.8, cx, cy, radius * 1.5);
      glow.addColorStop(0, 'rgba(3, 155, 224, 0.04)');
      glow.addColorStop(1, 'rgba(3, 155, 224, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      // Globe outline
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(3, 155, 224, 0.08)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Dots
      for (const d of dots) {
        let [x, y, z] = [d[0] * radius, d[1] * radius, d[2] * radius];
        [x, y, z] = rotX(x, y, z, rx);
        [x, y, z] = rotY(x, y, z, ry);
        if (z > 0) continue;
        const [sx, sy] = proj(x, y, z, cx, cy, fov);
        const alpha = Math.max(0.1, 1 - (z + radius) / (2 * radius));
        ctx.beginPath();
        ctx.arc(sx, sy, 1 + alpha * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = dotColor.replace('ALPHA', alpha.toFixed(2));
        ctx.fill();
      }

      // Arcs
      for (const conn of connections) {
        let [x1, y1, z1] = latLngToXYZ(conn.from[0], conn.from[1], radius);
        let [x2, y2, z2] = latLngToXYZ(conn.to[0], conn.to[1], radius);
        [x1, y1, z1] = rotX(x1, y1, z1, rx);
        [x1, y1, z1] = rotY(x1, y1, z1, ry);
        [x2, y2, z2] = rotX(x2, y2, z2, rx);
        [x2, y2, z2] = rotY(x2, y2, z2, ry);
        if (z1 > radius * 0.3 && z2 > radius * 0.3) continue;

        const [sx1, sy1] = proj(x1, y1, z1, cx, cy, fov);
        const [sx2, sy2] = proj(x2, y2, z2, cx, cy, fov);

        const midX = (x1 + x2) / 2, midY = (y1 + y2) / 2, midZ = (z1 + z2) / 2;
        const midLen = Math.sqrt(midX * midX + midY * midY + midZ * midZ);
        const ah = radius * 1.25;
        const [scx, scy] = proj((midX / midLen) * ah, (midY / midLen) * ah, (midZ / midLen) * ah, cx, cy, fov);

        ctx.beginPath();
        ctx.moveTo(sx1, sy1);
        ctx.quadraticCurveTo(scx, scy, sx2, sy2);
        ctx.strokeStyle = arcColor;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Traveling dot
        const t = (Math.sin(time * 1.2 + conn.from[0] * 0.1) + 1) / 2;
        const tx = (1 - t) * (1 - t) * sx1 + 2 * (1 - t) * t * scx + t * t * sx2;
        const ty = (1 - t) * (1 - t) * sy1 + 2 * (1 - t) * t * scy + t * t * sy2;
        ctx.beginPath();
        ctx.arc(tx, ty, 2, 0, Math.PI * 2);
        ctx.fillStyle = markerColor;
        ctx.fill();
      }

      // Markers
      for (const m of markers) {
        let [x, y, z] = latLngToXYZ(m.lat, m.lng, radius);
        [x, y, z] = rotX(x, y, z, rx);
        [x, y, z] = rotY(x, y, z, ry);
        if (z > radius * 0.1) continue;
        const [sx, sy] = proj(x, y, z, cx, cy, fov);

        // Pulse ring
        const pulse = Math.sin(time * 2 + m.lat) * 0.5 + 0.5;
        ctx.beginPath();
        ctx.arc(sx, sy, 4 + pulse * 4, 0, Math.PI * 2);
        ctx.strokeStyle = markerColor.replace('1)', `${(0.2 + pulse * 0.15).toFixed(2)})`);
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(sx, sy, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = markerColor;
        ctx.fill();

        if (m.label) {
          ctx.font = '10px system-ui, sans-serif';
          ctx.fillStyle = markerColor.replace('1)', '0.6)');
          ctx.fillText(m.label, sx + 8, sy + 3);
        }
      }

      animId = requestAnimationFrame(draw);
    }

    function onDown(e) {
      dragging = true;
      dragStartX = e.clientX;
      dragStartY = e.clientY;
      dragStartRY = ry;
      dragStartRX = rx;
      canvas.setPointerCapture(e.pointerId);
    }
    function onMove(e) {
      if (!dragging) return;
      ry = dragStartRY + (e.clientX - dragStartX) * 0.005;
      rx = Math.max(-1, Math.min(1, dragStartRX + (e.clientY - dragStartY) * 0.005));
    }
    function onUp() { dragging = false; }

    canvas.addEventListener('pointerdown', onDown);
    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerup', onUp);

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('pointerdown', onDown);
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerup', onUp);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`cursor-grab active:cursor-grabbing ${className}`}
    />
  );
}
