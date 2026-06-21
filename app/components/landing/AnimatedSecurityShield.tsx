'use client';

/**
 * AnimatedSecurityShield — soft 3D glossy "secure" shield (GREEN / secure state only).
 *
 * A friendly-but-premium rounded shield (reference-style: thick pale-mint beveled border,
 * glossy emerald body, big clean white check mark) adapted to the neon-green cyber HUD with
 * a faint inner highlight, tiny circuit nodes, a glass reflection, sparkles and a soft green
 * rim glow. Pure SVG + CSS — no deps, no canvas access.
 *
 * Entry: fades in from the bottom-right and floats up into place, the bevel glows once, the
 * check mark pops in, and a green pulse expands behind it. Idle: gentle float, breathing
 * glow, soft sparkle twinkle. Rendered only while secured (never in the blue/scanning
 * state). Decorative: aria-hidden + pointer-events:none — never blocks or touches the HUD.
 */
// Plump, rounded shield (reference style).
const SHIELD_D =
  'M60 14 C78 14 92 17 100 21 C106 24 107 27 107 36 C107 60 106 74 101 87 ' +
  'C95 104 80 114 60 122 C40 114 25 104 19 87 C14 74 13 60 13 36 ' +
  'C13 27 14 24 20 21 C28 17 42 14 60 14 Z';
// inner green body, inset from the border (scaled about the shield centre)
const INNER = 'translate(60 68) scale(0.82) translate(-60 -68)';
const STAR = 'M0 -7 C0.7 -2.4 2.4 -0.7 7 0 C2.4 0.7 0.7 2.4 0 7 C-0.7 2.4 -2.4 0.7 -7 0 C-2.4 -0.7 -0.7 -2.4 0 -7 Z';

export default function AnimatedSecurityShield() {
  return (
    <div className="ass-root" aria-hidden="true">
      {/* pulse that expands once the shield appears */}
      <span className="ass-ping" />
      {/* stage docks at the bottom-right; entry fades it in; float idles */}
      <div className="ass-stage">
        <div className="ass-deploy">
          <div className="ass-float">
            <svg className="ass-svg" viewBox="-14 -12 148 162" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* pale-mint beveled border */}
              <linearGradient id="ass-border" x1="60" y1="10" x2="60" y2="124" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#ffffff" />
                <stop offset="1" stopColor="#cdfbe4" />
              </linearGradient>
              {/* glossy emerald body */}
              <linearGradient id="ass-body" x1="48" y1="22" x2="72" y2="118" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#7df0b4" />
                <stop offset="0.5" stopColor="#32cf86" />
                <stop offset="1" stopColor="#129a5d" />
              </linearGradient>
              {/* upper gloss reflection */}
              <linearGradient id="ass-gloss" x1="60" y1="24" x2="60" y2="78" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#ffffff" stopOpacity="0.55" />
                <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
              {/* green pulse behind, drawn via CSS ping */}
              <radialGradient id="ass-spark" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0" stopColor="#ffffff" />
                <stop offset="1" stopColor="#8effc6" />
              </radialGradient>
              <clipPath id="ass-clip">
                <path d={SHIELD_D} transform={INNER} />
              </clipPath>
            </defs>

            {/* soft contact shadow */}
            <ellipse className="ass-shadow" cx="60" cy="120" rx="40" ry="9" fill="#04150d" />

            {/* shield assembly */}
            <g className="ass-shield">
              {/* thick pale-mint beveled border */}
              <path className="ass-border" d={SHIELD_D} fill="url(#ass-border)" />
              {/* glossy green body */}
              <path d={SHIELD_D} transform={INNER} fill="url(#ass-body)" />

              {/* surface detail, clipped to the body */}
              <g clipPath="url(#ass-clip)">
                {/* gloss reflection */}
                <ellipse className="ass-gloss" cx="54" cy="44" rx="30" ry="20" fill="url(#ass-gloss)" />
                {/* faint inner highlight ring */}
                <path d={SHIELD_D} transform="translate(60 68) scale(0.7) translate(-60 -68)" stroke="#eafff4" strokeOpacity="0.18" strokeWidth="1.4" fill="none" />
                {/* tiny circuit traces + glowing nodes */}
                <g stroke="#dafff0" strokeOpacity="0.22" fill="#f0fff8" fillOpacity="0.55">
                  <path d="M38 98 H58 V106 M62 106 H82 V98" fill="none" strokeWidth="1" />
                  <circle cx="38" cy="98" r="1.7" />
                  <circle cx="60" cy="106" r="1.7" />
                  <circle cx="82" cy="98" r="1.7" />
                </g>
              </g>

              {/* big clean white check mark */}
              <g className="ass-check">
                <path d="M42 66 L55 81 L84 46" stroke="#0c5e3a" strokeOpacity="0.30" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" transform="translate(0 2.5)" />
                <path d="M42 66 L55 81 L84 46" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </g>

            {/* sparkles */}
            <path className="ass-spark ass-spark1" d={STAR} transform="translate(112 18) scale(1.1)" fill="url(#ass-spark)" />
            <path className="ass-spark ass-spark2" d={STAR} transform="translate(116 70) scale(0.8)" fill="url(#ass-spark)" />
            <path className="ass-spark ass-spark3" d={STAR} transform="translate(8 30) scale(0.7)" fill="url(#ass-spark)" />
          </svg>
          </div>
        </div>
      </div>

      <style>{`
        /* full HUD box, so centre (50%) = eye/orb and 82% = dock — both size-independent */
        .ass-root { position: absolute; inset: 0; pointer-events: none; z-index: 2; }

        /* dock pulse, expands once on appearance then idles */
        .ass-ping {
          position: absolute; left: 82%; top: 82%; width: 20%; aspect-ratio: 1 / 1;
          transform: translate(-50%, -50%) scale(0.4);
          border-radius: 50%; border: 2px solid rgba(70, 235, 150, 0.55);
          opacity: 0; animation: ass-ping 4.5s ease-out 0.45s infinite;
        }

        /* stage holds the dock position (bottom-right) */
        .ass-stage {
          position: absolute; left: 82%; top: 82%;
          width: 28%; aspect-ratio: 148 / 162; transform: translate(-50%, -50%);
        }
        /* simple in-place fade/scale-in at the dock — no flight */
        .ass-deploy {
          width: 100%; height: 100%; transform-origin: center;
          animation: ass-deploy 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0s both;
        }
        /* idle float starts after entry */
        .ass-float { width: 100%; height: 100%; animation: ass-float 5.5s ease-in-out 0.6s infinite; }
        .ass-svg {
          width: 100%; height: 100%; display: block;
          filter: drop-shadow(0 6px 10px rgba(0,0,0,0.4)) drop-shadow(0 0 7px rgba(56, 220, 130, 0.55));
          animation: ass-breathe 4s ease-in-out 0.4s infinite;
        }

        .ass-shadow { opacity: 0; animation: ass-fade-to 0.6s ease 0.3s forwards; --to: 0.4; }
        /* check rides in with the shield, then micro-pulses while idle */
        .ass-check {
          transform-box: fill-box; transform-origin: center;
          animation: ass-check-pulse 4s ease-in-out 1.2s infinite;
        }
        .ass-gloss { transform-box: fill-box; transform-origin: center; animation: ass-shine 6s ease-in-out 1s infinite; }
        .ass-spark { opacity: 0; transform-box: fill-box; transform-origin: center; }
        .ass-spark1 { animation: ass-twinkle 3.6s ease-in-out 0.8s infinite; }
        .ass-spark2 { animation: ass-twinkle 3.6s ease-in-out 1.4s infinite; }
        .ass-spark3 { animation: ass-twinkle 3.6s ease-in-out 2s infinite; }

        /* gentle fade + scale-in, in place at the dock */
        @keyframes ass-deploy {
          0%   { opacity: 0; transform: translateY(8%) scale(0.86); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes ass-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4%); } }
        @keyframes ass-fade-to { to { opacity: var(--to, 1); } }
        @keyframes ass-check-pulse { 0%, 90%, 100% { transform: scale(1); } 95% { transform: scale(1.08); } }
        @keyframes ass-shine { 0%, 100% { opacity: 0.85; } 50% { opacity: 1; } }
        @keyframes ass-twinkle {
          0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
          50% { opacity: 0.9; transform: scale(1) rotate(45deg); }
        }
        /* first peak (at 2.0s delay) doubles as the landing bevel glow, then breathes */
        @keyframes ass-breathe {
          0%, 100% { filter: drop-shadow(0 6px 10px rgba(0,0,0,0.4)) drop-shadow(0 0 16px rgba(80, 255, 160, 0.9)); }
          50%      { filter: drop-shadow(0 6px 10px rgba(0,0,0,0.4)) drop-shadow(0 0 6px rgba(56, 220, 130, 0.45)); }
        }
        @keyframes ass-ping {
          0%   { opacity: 0.5; transform: translate(-50%, -50%) scale(0.45); }
          65%  { opacity: 0; transform: translate(-50%, -50%) scale(1.5); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(1.5); }
        }

        @media (prefers-reduced-motion: reduce) {
          .ass-deploy, .ass-float, .ass-svg, .ass-check, .ass-gloss { animation: none; }
          .ass-deploy { transform: none; }
          .ass-shadow { opacity: 0.4; animation: none; }
          .ass-spark, .ass-ping { display: none; }
        }
      `}</style>
    </div>
  );
}
