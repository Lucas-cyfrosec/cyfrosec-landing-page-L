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
    { lat: 37.78, lng: -122.42, icon: 'building' },
    { lat: 51.51, lng: -0.13,   icon: 'globe' },
    { lat: 35.68, lng: 139.69,  icon: 'monitor' },
    { lat: -33.87, lng: 151.21, icon: 'cloud' },
    { lat: 1.35, lng: 103.82,   icon: 'cloud-box' },
    { lat: 55.76, lng: 37.62,   icon: 'person' },
    { lat: -23.55, lng: -46.63, icon: 'home' },
    { lat: 19.43, lng: -99.13,  icon: 'cloud' },
    { lat: 28.61, lng: 77.21,   icon: 'person' },
    { lat: 36.19, lng: 44.01,   icon: 'monitor' }
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

  function drawMarkerIcon(ctx, type, x, y, s, color) {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 1.8;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    const cx = x + s * 0.5, cy = y + s * 0.5;
    switch (type) {

      case 'person':
        ctx.beginPath();
        ctx.arc(cx, cy, s * 0.5, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(cx, cy - s * 0.14, s * 0.14, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(cx, cy + s * 0.42, s * 0.26, Math.PI * 1.12, Math.PI * 1.88);
        ctx.stroke();
        break;

      case 'cloud': {
        const drawCloud = (ccx, ccy, w, h) => {
          ctx.beginPath();
          ctx.moveTo(ccx - w * 0.42, ccy + h * 0.25);
          ctx.bezierCurveTo(ccx - w * 0.52, ccy + h * 0.25, ccx - w * 0.52, ccy - h * 0.02, ccx - w * 0.36, ccy - h * 0.02);
          ctx.bezierCurveTo(ccx - w * 0.4,  ccy - h * 0.48, ccx - w * 0.08, ccy - h * 0.52, ccx - w * 0.04, ccy - h * 0.16);
          ctx.bezierCurveTo(ccx - w * 0.06, ccy - h * 0.62, ccx + w * 0.24, ccy - h * 0.62, ccx + w * 0.2,  ccy - h * 0.18);
          ctx.bezierCurveTo(ccx + w * 0.26, ccy - h * 0.54, ccx + w * 0.52, ccy - h * 0.28, ccx + w * 0.42, ccy - h * 0.02);
          ctx.bezierCurveTo(ccx + w * 0.54, ccy - h * 0.02, ccx + w * 0.52, ccy + h * 0.25, ccx + w * 0.42, ccy + h * 0.25);
          ctx.closePath();
          ctx.stroke();
        };
        ctx.globalAlpha = 0.4;
        drawCloud(cx + s * 0.14, cy - s * 0.12, s * 0.82, s * 0.6);
        ctx.globalAlpha = 1;
        drawCloud(cx - s * 0.04, cy + s * 0.08, s * 0.9, s * 0.62);
        break;
      }

      case 'building': {
        const bw = s * 0.72, bh = s * 0.9;
        const bx = cx - bw / 2, by = cy - bh / 2;
        ctx.beginPath();
        ctx.rect(bx, by, bw, bh);
        ctx.stroke();
        const ww = bw * 0.26, wh = bh * 0.13;
        const gx = (bw - 2 * ww) / 3, gy = (bh * 0.78 - 4 * wh) / 5;
        ctx.lineWidth = 1;
        for (let r = 0; r < 4; r++) {
          for (let c = 0; c < 2; c++) {
            ctx.beginPath();
            ctx.rect(bx + gx + c * (ww + gx), by + bh * 0.06 + gy + r * (wh + gy), ww, wh);
            ctx.stroke();
          }
        }
        break;
      }

      case 'globe':
        ctx.beginPath();
        ctx.arc(cx, cy, s * 0.48, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.ellipse(cx, cy, s * 0.22, s * 0.48, 0, 0, Math.PI * 2);
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.lineWidth = 1;
        [-0.26, 0, 0.26].forEach(dy => {
          const hw = Math.sqrt(0.48 * 0.48 - dy * dy) * s;
          ctx.beginPath();
          ctx.moveTo(cx - hw, cy + dy * s);
          ctx.lineTo(cx + hw, cy + dy * s);
          ctx.stroke();
        });
        break;

      case 'home':
        ctx.beginPath();
        ctx.arc(cx, cy, s * 0.5, 0, Math.PI * 2);
        ctx.stroke();
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(cx, cy - s * 0.32);
        ctx.lineTo(cx - s * 0.3, cy - s * 0.04);
        ctx.lineTo(cx + s * 0.3, cy - s * 0.04);
        ctx.closePath();
        ctx.stroke();
        ctx.beginPath();
        ctx.rect(cx - s * 0.22, cy - s * 0.04, s * 0.44, s * 0.35);
        ctx.stroke();
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.rect(cx - s * 0.09, cy + s * 0.1, s * 0.18, s * 0.21);
        ctx.stroke();
        break;

      case 'monitor': {
        const mw = s * 0.9, mh = s * 0.54;
        const mx = cx - mw / 2, my = cy - s * 0.42;
        ctx.beginPath();
        ctx.rect(mx, my, mw, mh);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(cx, my + mh);
        ctx.lineTo(cx, my + mh + s * 0.1);
        ctx.moveTo(cx - s * 0.2, my + mh + s * 0.1);
        ctx.lineTo(cx + s * 0.2, my + mh + s * 0.1);
        ctx.stroke();
        const bw2 = s * 0.46, bh2 = s * 0.34;
        const bx2 = cx - bw2 / 2, by2 = my + mh + s * 0.18;
        ctx.beginPath();
        ctx.rect(bx2, by2, bw2, bh2);
        ctx.stroke();
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(bx2 + bw2 * 0.15, by2 + bh2 * 0.15);
        ctx.lineTo(bx2 + bw2 * 0.85, by2 + bh2 * 0.85);
        ctx.moveTo(bx2 + bw2 * 0.85, by2 + bh2 * 0.15);
        ctx.lineTo(bx2 + bw2 * 0.15, by2 + bh2 * 0.85);
        ctx.stroke();
        break;
      }

      case 'cloud-box': {
        const mcx = cx, mcy = cy - s * 0.22;
        const mw = s * 0.78, mh = s * 0.48;
        ctx.beginPath();
        ctx.moveTo(mcx - mw * 0.42, mcy + mh * 0.25);
        ctx.bezierCurveTo(mcx - mw * 0.52, mcy + mh * 0.25, mcx - mw * 0.52, mcy - mh * 0.02, mcx - mw * 0.36, mcy - mh * 0.02);
        ctx.bezierCurveTo(mcx - mw * 0.4,  mcy - mh * 0.48, mcx - mw * 0.08, mcy - mh * 0.52, mcx - mw * 0.04, mcy - mh * 0.16);
        ctx.bezierCurveTo(mcx - mw * 0.06, mcy - mh * 0.62, mcx + mw * 0.24, mcy - mh * 0.62, mcx + mw * 0.2,  mcy - mh * 0.18);
        ctx.bezierCurveTo(mcx + mw * 0.26, mcy - mh * 0.54, mcx + mw * 0.52, mcy - mh * 0.28, mcx + mw * 0.42, mcy - mh * 0.02);
        ctx.bezierCurveTo(mcx + mw * 0.54, mcy - mh * 0.02, mcx + mw * 0.52, mcy + mh * 0.25, mcx + mw * 0.42, mcy + mh * 0.25);
        ctx.closePath();
        ctx.stroke();
        const bx3 = cx - s * 0.28, by3 = y + s * 0.52;
        const bw3 = s * 0.56, bh3 = s * 0.42;
        ctx.beginPath();
        ctx.rect(bx3, by3, bw3, bh3);
        ctx.stroke();
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(cx, by3); ctx.lineTo(cx, by3 + bh3);
        ctx.moveTo(bx3, by3 + bh3 * 0.5); ctx.lineTo(bx3 + bw3, by3 + bh3 * 0.5);
        ctx.stroke();
        break;
      }

      default:
        break;
    }
    ctx.restore();
  }

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
    // Store canvas dimensions to avoid resizing every frame
    let canvasW = 0, canvasH = 0, canvasDpr = 1;
    let paused = false;

    function resizeCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (w === canvasW && h === canvasH && dpr === canvasDpr) return;
      canvasW = w;
      canvasH = h;
      canvasDpr = dpr;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
    }

    function draw() {
      if (paused) {
        animId = requestAnimationFrame(draw);
        return;
      }

      // Use stored dimensions — no resize here
      const dpr = canvasDpr;
      const w = canvasW;
      const h = canvasH;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.min(w, h) * 0.38;
      const fov = 600;

      if (!dragging) ry += autoRotateSpeed;
      time += 0.015;

      ctx.clearRect(0, 0, w, h);

      const glow = ctx.createRadialGradient(cx, cy, radius * 0.8, cx, cy, radius * 1.5);
      glow.addColorStop(0, 'rgba(3, 155, 224, 0.04)');
      glow.addColorStop(1, 'rgba(3, 155, 224, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(3, 155, 224, 0.08)';
      ctx.lineWidth = 1;
      ctx.stroke();

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

        const t = (Math.sin(time * 1.2 + conn.from[0] * 0.1) + 1) / 2;
        const tx = (1 - t) * (1 - t) * sx1 + 2 * (1 - t) * t * scx + t * t * sx2;
        const ty = (1 - t) * (1 - t) * sy1 + 2 * (1 - t) * t * scy + t * t * sy2;
        ctx.beginPath();
        ctx.arc(tx, ty, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = markerColor;
        ctx.fill();
      }

      for (const m of markers) {
        let [x, y, z] = latLngToXYZ(m.lat, m.lng, radius);
        [x, y, z] = rotX(x, y, z, rx);
        [x, y, z] = rotY(x, y, z, ry);
        if (z > radius * 0.1) continue;
        const [sx, sy] = proj(x, y, z, cx, cy, fov);

        const ds = 5;
        ctx.save();
        ctx.translate(sx, sy);
        ctx.rotate(Math.PI / 4);
        const pulse = Math.sin(time * 2 + m.lat) * 0.5 + 0.5;
        const pr = ds + pulse * 5;
        ctx.beginPath();
        ctx.rect(-pr, -pr, pr * 2, pr * 2);
        ctx.strokeStyle = markerColor.replace('1)', `${(0.12 + pulse * 0.18).toFixed(2)})`);
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.beginPath();
        ctx.rect(-ds, -ds, ds * 2, ds * 2);
        ctx.fillStyle = markerColor.replace('1)', '0.15)');
        ctx.fill();
        ctx.strokeStyle = markerColor;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();

        drawMarkerIcon(ctx, m.icon, sx + 10, sy - 16, 32, markerColor);
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

    // Pause when tab is hidden
    function onVisibilityChange() {
      paused = document.hidden;
    }

    // Pause when scrolled out of view
    const observer = new IntersectionObserver(
      ([entry]) => { paused = !entry.isIntersecting || document.hidden; },
      { threshold: 0.01 }
    );
    observer.observe(canvas);

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(canvas);
    resizeCanvas();

    canvas.addEventListener('pointerdown', onDown);
    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerup', onUp);
    document.addEventListener('visibilitychange', onVisibilityChange);

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('pointerdown', onDown);
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerup', onUp);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      observer.disconnect();
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`cursor-grab active:cursor-grabbing ${className}`}
    />
  );
}
