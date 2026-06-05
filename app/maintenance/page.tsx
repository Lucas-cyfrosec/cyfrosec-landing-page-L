import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import WrenchOrb from './WrenchOrb';

export const metadata = {
  title: 'Maintenance | CyfroSec',
};

const LIGHT_STROKE = '#7dd3fc';
const LIGHT_NODE = '#38bdf8';
const DARK_STROKE = '#039be0';

function CircuitSVG({ side }: { side: 'left' | 'right' }) {
  const mirror = side === 'right' ? { transform: 'scaleX(-1)' as const } : undefined;
  const align = side === 'left' ? 'xMinYMid' : 'xMaxYMid';
  const pos = side === 'left' ? 'left-0' : 'right-0';

  return (
    <>
      {/* Light-mode circuit traces */}
      <svg
        aria-hidden="true"
        className={`pointer-events-none absolute ${pos} top-0 h-full w-[220px] dark:hidden sm:w-[320px] md:w-[420px]`}
        viewBox="0 0 420 900"
        fill="none"
        preserveAspectRatio={`${align} slice`}
        style={mirror}
      >
        <path d="M0 60h80v40h60v-20h40" stroke={LIGHT_STROKE} strokeWidth="1.2" opacity="0.35" />
        <path d="M0 100h40v60h100" stroke={LIGHT_STROKE} strokeWidth="1" opacity="0.3" />
        <path d="M140 160v40h-60v30h80" stroke={LIGHT_STROKE} strokeWidth="1" opacity="0.28" />
        <path d="M0 180h60v-20h30v50h50" stroke={LIGHT_STROKE} strokeWidth="1.1" opacity="0.32" />
        <path d="M160 230v50h60v-30h40" stroke={LIGHT_STROKE} strokeWidth="0.9" opacity="0.25" />
        <path d="M0 280h100v30h-40v40h80" stroke={LIGHT_STROKE} strokeWidth="1.2" opacity="0.35" />
        <path d="M140 350v60h-50v20h70" stroke={LIGHT_STROKE} strokeWidth="1" opacity="0.3" />
        <path d="M0 370h50v40h40v-20h60" stroke={LIGHT_STROKE} strokeWidth="1" opacity="0.28" />
        <path d="M160 430v40h80" stroke={LIGHT_STROKE} strokeWidth="0.9" opacity="0.22" />
        <path d="M0 480h70v30h50v-20h40" stroke={LIGHT_STROKE} strokeWidth="1.2" opacity="0.35" />
        <path d="M0 530h30v50h80v-30h50" stroke={LIGHT_STROKE} strokeWidth="1" opacity="0.3" />
        <path d="M160 550v60h-40v30h60" stroke={LIGHT_STROKE} strokeWidth="1" opacity="0.28" />
        <path d="M0 650h90v-20h50v40" stroke={LIGHT_STROKE} strokeWidth="1.1" opacity="0.32" />
        <path d="M140 670v50h60" stroke={LIGHT_STROKE} strokeWidth="0.9" opacity="0.25" />
        <path d="M0 740h60v40h80v-30h40" stroke={LIGHT_STROKE} strokeWidth="1.2" opacity="0.35" />
        <path d="M180 750v60h-50v40h90" stroke={LIGHT_STROKE} strokeWidth="0.9" opacity="0.22" />
        <path d="M0 840h40v40h70" stroke={LIGHT_STROKE} strokeWidth="1" opacity="0.28" />
        <path d="M200 120h80v50h60" stroke={LIGHT_STROKE} strokeWidth="0.8" opacity="0.18" />
        <path d="M240 300h60v40h-30v50" stroke={LIGHT_STROKE} strokeWidth="0.8" opacity="0.18" />
        <path d="M200 490h100v-30h50" stroke={LIGHT_STROKE} strokeWidth="0.8" opacity="0.15" />
        <circle cx="80" cy="60" r="3.5" fill={LIGHT_NODE} opacity="0.4" />
        <circle cx="140" cy="100" r="3" fill={LIGHT_NODE} opacity="0.35" />
        <circle cx="60" cy="180" r="3.5" fill={LIGHT_NODE} opacity="0.4" />
        <circle cx="140" cy="210" r="3" fill={LIGHT_NODE} opacity="0.35" />
        <circle cx="100" cy="280" r="3.5" fill={LIGHT_NODE} opacity="0.4" />
        <circle cx="140" cy="350" r="3" fill={LIGHT_NODE} opacity="0.35" />
        <circle cx="70" cy="480" r="3.5" fill={LIGHT_NODE} opacity="0.4" />
        <circle cx="160" cy="550" r="3" fill={LIGHT_NODE} opacity="0.35" />
        <circle cx="90" cy="650" r="3.5" fill={LIGHT_NODE} opacity="0.4" />
        <circle cx="60" cy="740" r="3.5" fill={LIGHT_NODE} opacity="0.4" />
      </svg>

      {/* Dark-mode circuit traces (hexagonal) */}
      <svg
        aria-hidden="true"
        className={`pointer-events-none absolute ${pos} top-0 hidden h-full w-48 opacity-[0.12] dark:block sm:w-64 md:w-80`}
        viewBox="0 0 320 900"
        fill="none"
        preserveAspectRatio={`${align} slice`}
        style={mirror}
      >
        <path d="M60 80l20-12 20 12v24l-20 12-20-12z" stroke={DARK_STROKE} strokeWidth="0.8" />
        <path d="M100 104v40h50" stroke={DARK_STROKE} strokeWidth="0.8" />
        <path d="M150 144l15-9 15 9v18l-15 9-15-9z" stroke={DARK_STROKE} strokeWidth="0.8" />
        <path d="M180 153v60" stroke={DARK_STROKE} strokeWidth="0.6" />
        <path d="M30 200l25-15 25 15v30l-25 15-25-15z" stroke={DARK_STROKE} strokeWidth="0.8" />
        <path d="M80 215h40l20-20" stroke={DARK_STROKE} strokeWidth="0.6" />
        <path d="M140 195l12-7 12 7v14l-12 7-12-7z" stroke={DARK_STROKE} strokeWidth="0.7" />
        <path d="M200 100v80h-30v50h50v30" stroke={DARK_STROKE} strokeWidth="0.5" />
        <path d="M220 260l18-10 18 10v20l-18 10-18-10z" stroke={DARK_STROKE} strokeWidth="0.7" />
        <path d="M256 270v60h-40" stroke={DARK_STROKE} strokeWidth="0.5" />
        <path d="M90 320l20-12 20 12v24l-20 12-20-12z" stroke={DARK_STROKE} strokeWidth="0.8" />
        <path d="M130 332h50v-30" stroke={DARK_STROKE} strokeWidth="0.5" />
        <path d="M50 400v60h30l20-20h40" stroke={DARK_STROKE} strokeWidth="0.6" />
        <path d="M140 440l15-9 15 9v18l-15 9-15-9z" stroke={DARK_STROKE} strokeWidth="0.7" />
        <path d="M170 449v50h40" stroke={DARK_STROKE} strokeWidth="0.5" />
        <path d="M210 499l12-7 12 7v14l-12 7-12-7z" stroke={DARK_STROKE} strokeWidth="0.6" />
        <path d="M70 560l20-12 20 12v24l-20 12-20-12z" stroke={DARK_STROKE} strokeWidth="0.8" />
        <path d="M110 572h60" stroke={DARK_STROKE} strokeWidth="0.5" />
        <path d="M170 572l15-9 15 9v18l-15 9-15-9z" stroke={DARK_STROKE} strokeWidth="0.7" />
        <path d="M40 660v40h70v-20h40" stroke={DARK_STROKE} strokeWidth="0.6" />
        <path d="M150 680l18-10 18 10v20l-18 10-18-10z" stroke={DARK_STROKE} strokeWidth="0.7" />
        <path d="M120 750l20-12 20 12v24l-20 12-20-12z" stroke={DARK_STROKE} strokeWidth="0.6" />
        <circle cx="80" cy="92" r="2.5" fill={DARK_STROKE} />
        <circle cx="165" cy="153" r="2" fill={DARK_STROKE} />
        <circle cx="55" cy="215" r="2.5" fill={DARK_STROKE} />
        <circle cx="152" cy="202" r="2" fill={DARK_STROKE} />
        <circle cx="238" cy="270" r="2" fill={DARK_STROKE} />
        <circle cx="110" cy="332" r="2.5" fill={DARK_STROKE} />
        <circle cx="155" cy="449" r="2" fill={DARK_STROKE} />
        <circle cx="90" cy="572" r="2.5" fill={DARK_STROKE} />
        <circle cx="168" cy="690" r="2" fill={DARK_STROKE} />
        <circle cx="140" cy="762" r="2" fill={DARK_STROKE} />
      </svg>
    </>
  );
}

export default function MaintenancePage() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-[#f8fbff] text-[#0f172a] dark:bg-surface-950 dark:text-surface-50">
      {/* ── Background layers ─────────────────────────────────────────── */}

      {/* Top glow — light: soft sky / dark: stronger brand blue */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 65% 45% at 50% 0%, rgba(56,189,248,0.18) 0%, rgba(56,189,248,0.04) 50%, transparent 75%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden dark:block"
        style={{
          background:
            'radial-gradient(ellipse 50% 35% at 50% 0%, rgba(3,155,224,0.35) 0%, rgba(3,155,224,0.08) 40%, transparent 70%)',
        }}
      />

      {/* Gradient overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 dark:hidden"
        style={{
          background:
            'radial-gradient(circle at 80% 20%, rgba(254,144,77,0.04) 0%, transparent 40%),' +
            'radial-gradient(ellipse 40% 35% at 50% 50%, rgba(56,189,248,0.06) 0%, transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden bg-gradient-to-br from-primary-950/30 via-transparent to-[#fe904d]/5 dark:block"
      />

      {/* Circuit traces both sides */}
      <CircuitSVG side="left" />
      <CircuitSVG side="right" />

      {/* Floating dots — light mode */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 dark:hidden">
        {[
          { x: '14%', y: '14%', s: 4, o: 0.45, c: '#7dd3fc' },
          { x: '21%', y: '32%', s: 3, o: 0.35, c: '#38bdf8' },
          { x: '7%',  y: '48%', s: 4, o: 0.4,  c: '#7dd3fc' },
          { x: '19%', y: '62%', s: 3, o: 0.3,  c: '#67e8f9' },
          { x: '11%', y: '76%', s: 5, o: 0.4,  c: '#38bdf8' },
          { x: '26%', y: '88%', s: 3, o: 0.3,  c: '#7dd3fc' },
          { x: '86%', y: '16%', s: 4, o: 0.4,  c: '#38bdf8' },
          { x: '91%', y: '36%', s: 3, o: 0.35, c: '#7dd3fc' },
          { x: '81%', y: '54%', s: 4, o: 0.4,  c: '#67e8f9' },
          { x: '89%', y: '70%', s: 5, o: 0.4,  c: '#38bdf8' },
          { x: '77%', y: '82%', s: 3, o: 0.3,  c: '#7dd3fc' },
          { x: '93%', y: '90%', s: 4, o: 0.35, c: '#38bdf8' },
          { x: '34%', y: '6%',  s: 3, o: 0.25, c: '#7dd3fc' },
          { x: '66%', y: '8%',  s: 3, o: 0.25, c: '#7dd3fc' },
          { x: '40%', y: '92%', s: 4, o: 0.3,  c: '#38bdf8' },
          { x: '60%', y: '94%', s: 3, o: 0.25, c: '#67e8f9' },
          { x: '4%',  y: '26%', s: 3, o: 0.3,  c: '#38bdf8' },
          { x: '96%', y: '58%', s: 3, o: 0.3,  c: '#38bdf8' },
        ].map((d, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: d.x, top: d.y, width: d.s, height: d.s,
              backgroundColor: d.c, opacity: d.o,
              boxShadow: `0 0 ${d.s * 2}px ${d.s}px ${d.c}40`,
            }}
          />
        ))}
      </div>

      {/* Floating dots — dark mode */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden dark:block">
        {[
          { x: '15%', y: '15%', s: 4, o: 0.5 },
          { x: '8%',  y: '42%', s: 4, o: 0.3 },
          { x: '12%', y: '70%', s: 5, o: 0.35 },
          { x: '85%', y: '18%', s: 4, o: 0.35 },
          { x: '82%', y: '50%', s: 4, o: 0.3 },
          { x: '88%', y: '65%', s: 5, o: 0.35 },
          { x: '92%', y: '85%', s: 4, o: 0.3 },
          { x: '35%', y: '10%', s: 3, o: 0.2 },
          { x: '65%', y: '12%', s: 3, o: 0.2 },
          { x: '42%', y: '88%', s: 4, o: 0.25 },
          { x: '58%', y: '90%', s: 3, o: 0.2 },
        ].map((d, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: d.x, top: d.y, width: d.s, height: d.s,
              backgroundColor: '#039be0', opacity: d.o,
              boxShadow: `0 0 ${d.s * 3}px ${d.s}px rgba(3,155,224,${d.o * 0.6})`,
            }}
          />
        ))}
      </div>

      {/* Dotted grid — light: visible / dark: subtle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #94a3b8 0.7px, transparent 0.7px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Bottom radar rings — light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[42%] dark:hidden"
        style={{ width: 750, height: 750 }}
      >
        {[1, 0.8, 0.6, 0.42, 0.26].map((scale, i) => (
          <span
            key={i}
            className="absolute inset-0 rounded-full border"
            style={{
              borderColor: `rgba(56,189,248,${0.22 - i * 0.035})`,
              transform: `scale(${scale})`,
            }}
          />
        ))}
        <span
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Bottom radar rings — dark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 hidden -translate-x-1/2 translate-y-[45%] dark:block"
        style={{ width: 700, height: 700 }}
      >
        {[1, 0.78, 0.56, 0.38, 0.22].map((scale, i) => (
          <span
            key={i}
            className="absolute inset-0 rounded-full border"
            style={{
              borderColor: `rgba(3,155,224,${0.12 - i * 0.02})`,
              transform: `scale(${scale})`,
            }}
          />
        ))}
        <span
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(3,155,224,0.08) 0%, transparent 65%)',
          }}
        />
      </div>

      {/* ── Content ───────────────────────────────────────────────────── */}
      <div className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-6">
        {/* Logo */}
        <div className="mb-10">
          <Image
            src="/logo.png"
            alt="CyfroSec"
            width={360}
            height={90}
            priority
            className="h-20 w-auto sm:h-24"
          />
        </div>

        {/* Card — light mode */}
        <div className="relative w-full max-w-[680px]">
          {/* Top edge glow — light */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-px left-1/2 h-px w-4/5 -translate-x-1/2 dark:hidden"
            style={{
              background:
                'linear-gradient(90deg, transparent 10%, rgba(56,189,248,0.35) 35%, rgba(56,189,248,0.5) 50%, rgba(56,189,248,0.35) 65%, transparent 90%)',
            }}
          />
          {/* Top edge glow — dark */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-px left-1/2 hidden h-[2px] w-4/5 -translate-x-1/2 dark:block"
            style={{
              background:
                'linear-gradient(90deg, transparent 5%, rgba(3,155,224,0.6) 30%, rgba(34,211,238,0.8) 50%, rgba(3,155,224,0.6) 70%, transparent 95%)',
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-3 left-1/2 hidden h-6 w-3/5 -translate-x-1/2 dark:block"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(3,155,224,0.15) 0%, transparent 70%)',
            }}
          />

          {/* Card surface */}
          <div
            className="rounded-2xl border px-8 py-10 text-center backdrop-blur-xl sm:px-12 sm:py-12"
            style={{
              borderColor: 'var(--maint-card-border)',
              backgroundColor: 'var(--maint-card-bg)',
              boxShadow: 'var(--maint-card-shadow)',
            }}
          >
            <style dangerouslySetInnerHTML={{ __html: `
              :root {
                --maint-card-bg: rgba(255,255,255,0.75);
                --maint-card-border: rgba(186,214,235,0.8);
                --maint-card-shadow: 0 24px 80px rgba(15,23,42,0.06), 0 0 0 1px rgba(255,255,255,0.5) inset;
                --maint-badge-bg: rgba(255,255,255,0.85);
                --maint-badge-border: rgba(186,214,235,0.9);
                --maint-badge-color: #334155;
                --maint-badge-dot: #38bdf8;
                --maint-badge-glow: rgba(56,189,248,0.4);
                --maint-heading: #020617;
                --maint-desc: #475569;
                --maint-btn-bg: rgba(255,255,255,0.7);
                --maint-btn-border: rgba(186,214,235,0.9);
                --maint-btn-color: #0278ae;
              }
              .dark {
                --maint-card-bg: rgba(10,25,47,0.75);
                --maint-card-border: rgba(51,65,85,0.35);
                --maint-card-shadow: 0 0 60px rgba(3,155,224,0.05), 0 20px 50px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03);
                --maint-badge-bg: rgba(3,155,224,0.08);
                --maint-badge-border: rgba(3,155,224,0.25);
                --maint-badge-color: #99d7ef;
                --maint-badge-dot: #039be0;
                --maint-badge-glow: rgba(3,155,224,0.5);
                --maint-heading: #f8fafc;
                --maint-desc: #94a3b8;
                --maint-btn-bg: rgba(3,155,224,0.06);
                --maint-btn-border: rgba(3,155,224,0.25);
                --maint-btn-color: #99d7ef;
              }
            `}} />

            {/* Badge pill */}
            <span
              className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] shadow-sm"
              style={{
                borderColor: 'var(--maint-badge-border)',
                backgroundColor: 'var(--maint-badge-bg)',
                color: 'var(--maint-badge-color)',
              }}
            >
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{
                  backgroundColor: 'var(--maint-badge-dot)',
                  boxShadow: `0 0 6px 2px var(--maint-badge-glow)`,
                }}
              />
              Scheduled Maintenance
            </span>

            {/* Icon orb — heartbeat animation */}
            <WrenchOrb />

            {/* Heading */}
            <h1
              className="text-3xl font-bold tracking-tight md:text-4xl"
              style={{ color: 'var(--maint-heading)' }}
            >
              Currently under maintenance
            </h1>

            {/* Orange accent divider */}
            <div className="mx-auto mt-5 flex items-center justify-center gap-1.5">
              <span
                className="h-px w-10"
                style={{ background: 'linear-gradient(90deg, transparent, #fe904d)' }}
              />
              <span className="h-1 w-1 rounded-full" style={{ backgroundColor: '#fe904d' }} />
              <span
                className="h-px w-10"
                style={{ background: 'linear-gradient(90deg, #fe904d, transparent)' }}
              />
            </div>

            {/* Description */}
            <p
              className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed"
              style={{ color: 'var(--maint-desc)' }}
            >
              We are performing scheduled maintenance.
              <br />
              Please check back later.
            </p>
          </div>
        </div>

        {/* Home button */}
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-medium transition-colors"
          style={{
            borderColor: 'var(--maint-btn-border)',
            backgroundColor: 'var(--maint-btn-bg)',
            color: 'var(--maint-btn-color)',
          }}
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Home
        </Link>
      </div>
    </main>
  );
}
