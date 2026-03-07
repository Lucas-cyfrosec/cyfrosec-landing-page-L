import { ArrowRight } from 'lucide-react';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const BentoGrid = ({ children, className }) => (
  <div className={cn('grid w-full auto-rows-[17rem] grid-cols-3 gap-4', className)}>
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
  const accentTint = `rgb(${accent} / 0.14)`;
  const accentSoft = `rgb(${accent} / 0.08)`;
  const accentBorder = `rgb(${accent} / 0.16)`;
  const accentStrong = `rgb(${accent} / 0.92)`;

  return (
    <article
      className={cn(
        'group relative col-span-3 overflow-hidden rounded-[24px] border border-surface-200/80 bg-white/95',
        'shadow-[0_18px_50px_-34px_rgba(15,31,47,0.25)] transition-all duration-300',
        'hover:-translate-y-0.5 hover:shadow-[0_26px_70px_-38px_rgba(15,31,47,0.38)]',
        'dark:border-surface-700/80 dark:bg-surface-900/92',
        className,
      )}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.86),rgba(255,255,255,0.28)_42%,transparent_82%)] dark:bg-[linear-gradient(145deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01)_42%,transparent_82%)]" />
        <div
          className="absolute -right-16 -top-12 h-52 w-52 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundColor: accentTint }}
        />
        <div
          className="absolute bottom-0 left-10 h-28 w-28 rounded-full blur-2xl"
          style={{ backgroundColor: accentSoft }}
        />
        <div className="absolute inset-0 opacity-[0.06] dark:opacity-[0.07]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                'linear-gradient(rgba(15,23,42,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.14) 1px, transparent 1px)',
              backgroundSize: '34px 34px',
            }}
          />
        </div>
        <div
          className="absolute inset-x-6 bottom-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, rgb(${accent} / 0.55), transparent)` }}
        />
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: `radial-gradient(circle at 82% 2%, rgb(${accent} / 0.12), transparent 34%)` }}
        />
      </div>

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/85 to-transparent dark:via-white/20" />

      <div className="relative z-10 flex h-full flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <span
            className="inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]"
            style={{
              borderColor: accentBorder,
              backgroundColor: accentSoft,
              color: accentStrong,
            }}
          >
            {eyebrow}
          </span>

          <div
            className="flex size-10 items-center justify-center rounded-xl border backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-0.5"
            style={{
              borderColor: accentBorder,
              background: `linear-gradient(180deg, rgb(${accent} / 0.16), rgb(${accent} / 0.06))`,
              color: accentStrong,
            }}
          >
            <Icon className="size-4.5" />
          </div>
        </div>

        <div className="mt-5">
          <h3 className="max-w-[18ch] text-[1.45rem] font-semibold leading-tight text-surface-900 dark:text-surface-50">
            {name}
          </h3>
          <p className="mt-2.5 max-w-[56ch] text-sm leading-6 text-surface-600 dark:text-surface-400">
            {description}
          </p>
          <p className="mt-3 border-l-2 pl-3 text-sm leading-6 text-surface-700 dark:text-surface-300" style={{ borderColor: accentBorder }}>
            {impact}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-surface-200/80 pt-4 dark:border-surface-700/80">
          <div
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm"
            style={{
              borderColor: accentBorder,
              background: `linear-gradient(180deg, rgb(${accent} / 0.12), rgb(${accent} / 0.04))`,
            }}
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-surface-500 dark:text-surface-400">
              {metricLabel}
            </span>
            <span className="font-semibold text-surface-900 dark:text-surface-50">
              {metricValue}
            </span>
          </div>

          <a
            href={href}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-surface-900 transition-colors hover:text-primary-500 dark:text-surface-50"
          >
            {cta}
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </article>
  );
};
