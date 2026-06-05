'use client';

import { Wrench } from 'lucide-react';

const keyframes = `
:root {
  --maint-orb-ring: rgba(56,189,248,0.3);
  --maint-orb-ring-mid: rgba(56,189,248,0.35);
  --maint-orb-ring-inner: rgba(56,189,248,0.25);
  --maint-orb-bg: rgba(56,189,248,0.1);
  --maint-orb-glow: rgba(56,189,248,0.12);
  --maint-orb-glow-strong: rgba(56,189,248,0.22);
  --maint-orb-icon: #0ea5e9;
  --maint-orb-icon-shadow: rgba(56,189,248,0.35);
}
.dark {
  --maint-orb-ring: rgba(3,155,224,0.2);
  --maint-orb-ring-mid: rgba(3,155,224,0.25);
  --maint-orb-ring-inner: rgba(3,155,224,0.15);
  --maint-orb-bg: rgba(3,155,224,0.15);
  --maint-orb-glow: rgba(3,155,224,0.15);
  --maint-orb-glow-strong: rgba(3,155,224,0.25);
  --maint-orb-icon: #38bdf8;
  --maint-orb-icon-shadow: rgba(3,155,224,0.5);
}

@keyframes maint-pulse-ring-outer {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.08); opacity: 0.5; }
}
@keyframes maint-pulse-ring-middle {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.12); opacity: 0.4; }
}
@keyframes maint-pulse-ring-inner {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.15); opacity: 0.35; }
}
@keyframes maint-pulse-icon {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.06); }
}
@keyframes maint-pulse-bg {
  0%, 100% { box-shadow: 0 0 40px var(--maint-orb-glow); }
  50% { box-shadow: 0 0 60px var(--maint-orb-glow-strong); }
}
`;

export default function WrenchOrb() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: keyframes }} />
      <div className="mx-auto mb-8 flex h-36 w-36 items-center justify-center sm:h-40 sm:w-40">
        <div
          className="relative flex h-full w-full items-center justify-center rounded-full"
          style={{
            background:
              'radial-gradient(circle, var(--maint-orb-bg) 0%, transparent 70%)',
            animation: 'maint-pulse-bg 3s ease-in-out infinite',
          }}
        >
          <div
            className="absolute inset-1 rounded-full border sm:inset-1.5"
            style={{
              borderColor: 'var(--maint-orb-ring)',
              animation: 'maint-pulse-ring-outer 3s ease-in-out infinite',
            }}
          />
          <div
            className="absolute inset-4 rounded-full border sm:inset-5"
            style={{
              borderColor: 'var(--maint-orb-ring-mid)',
              animation: 'maint-pulse-ring-middle 3s ease-in-out infinite',
            }}
          />
          <div
            className="absolute inset-7 rounded-full border sm:inset-8"
            style={{
              borderColor: 'var(--maint-orb-ring-inner)',
              animation: 'maint-pulse-ring-inner 3s ease-in-out infinite',
            }}
          />
          <Wrench
            size={44}
            className="relative sm:h-12 sm:w-12"
            style={{
              color: 'var(--maint-orb-icon)',
              filter: 'drop-shadow(0 0 8px var(--maint-orb-icon-shadow))',
              animation: 'maint-pulse-icon 3s ease-in-out infinite',
            }}
          />
        </div>
      </div>
    </>
  );
}
