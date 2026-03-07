import { ArrowRight } from 'lucide-react';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const BentoGrid = ({ children, className }) => (
  <div className={cn('grid w-full auto-rows-[18rem] grid-cols-3 gap-5', className)}>
    {children}
  </div>
);

export const BentoCard = ({
  name,
  className,
  Icon,
  description,
  href,
  cta,
  eyebrow,
  metricLabel,
  metricValue,
  impact,
  accent = '3 155 224',
}) => {
  const accentRgb = accent;
  const accentColor  = `rgb(${accentRgb})`;
  const accentTint   = `rgb(${accentRgb} / 0.12)`;
  const accentGlow   = `rgb(${accentRgb} / 0.18)`;
  const accentBorder = `rgb(${accentRgb} / 0.28)`;
  const accentStrong = `rgb(${accentRgb} / 0.95)`;

  return (
    <article
      className={cn(
        'group relative col-span-3 flex flex-col overflow-hidden rounded-2xl',
        'border border-surface-200 bg-white dark:border-surface-700 dark:bg-surface-800',
        'transition-all duration-300 ease-out',
        'hover:-translate-y-1',
        className,
      )}
      style={{
        borderColor: accentBorder,
        boxShadow: `0 0 0 0 transparent, 0 4px 32px -8px rgba(0,0,0,0.55)`,
        transition: 'transform 300ms ease-out, box-shadow 300ms ease-out, border-color 300ms ease-out',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = `0 0 28px -4px ${accentGlow}, 0 8px 40px -8px rgba(0,0,0,0.65)`;
        e.currentTarget.style.borderColor = `rgb(${accentRgb} / 0.55)`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = `0 0 0 0 transparent, 0 4px 32px -8px rgba(0,0,0,0.55)`;
        e.currentTarget.style.borderColor = accentBorder;
      }}
    >
      {/* Top accent bar */}
      <div
        className="absolute inset-x-0 top-0 h-[2px] z-20"
        style={{ background: `linear-gradient(90deg, transparent 0%, ${accentColor} 35%, ${accentColor} 65%, transparent 100%)` }}
      />

      {/* Radial background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 80% 0%, ${accentTint} 0%, transparent 60%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col p-5 sm:p-6">

        {/* Header row: icon left, eyebrow right */}
        <div className="flex items-start justify-between gap-3">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-xl border"
            style={{
              borderColor: accentBorder,
              background: `linear-gradient(145deg, ${accentTint}, transparent)`,
              boxShadow: `0 0 18px -4px ${accentGlow}`,
              color: accentColor,
            }}
          >
            <Icon className="size-5" strokeWidth={1.75} />
          </div>

          <span
            className="inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em]"
            style={{
              borderColor: accentBorder,
              backgroundColor: accentTint,
              color: accentStrong,
            }}
          >
            {eyebrow}
          </span>
        </div>

        {/* Body */}
        <div className="mt-4 flex-1 min-h-0">
          <h3 className="text-[1.2rem] font-bold leading-snug text-surface-900 dark:text-surface-50">
            {name}
          </h3>
          <p className="mt-2 text-[0.825rem] leading-relaxed text-surface-600 dark:text-surface-400">
            {description}
          </p>
          <p
            className="mt-3 border-l-[2px] pl-3 text-[0.825rem] leading-relaxed text-surface-700 dark:text-surface-300"
            style={{ borderColor: `rgb(${accentRgb} / 0.40)` }}
          >
            {impact}
          </p>
        </div>

        {/* Footer */}
        <div
          className="mt-4 flex items-center justify-between gap-3 border-t pt-3"
          style={{ borderColor: `rgb(${accentRgb} / 0.14)` }}
        >
          <div
            className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5"
            style={{
              borderColor: accentBorder,
              background: accentTint,
            }}
          >
            <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-surface-400">
              {metricLabel}
            </span>
            <span className="text-sm font-bold text-surface-900 dark:text-white">{metricValue}</span>
          </div>

          <a
            href={href}
            className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-surface-500 transition-colors duration-200 hover:text-primary-500 dark:text-surface-400 dark:hover:text-white dark:group-hover:text-surface-200"
          >
            {cta}
            <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </article>
  );
};
