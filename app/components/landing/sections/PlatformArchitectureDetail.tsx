'use client';

import { useTranslation } from '@/src/i18n';

interface ProcessingStepStyle {
  desktopCardClassName: string;
  desktopTitleClassName: string;
  desktopSubtitleClassName: string;
  mobileCardClassName: string;
  mobileTitleClassName: string;
  mobileSubtitleClassName: string;
}

const PROCESSING_STEP_STYLES: ProcessingStepStyle[] = [
  {
    desktopCardClassName: 'p-5 bg-primary-50 dark:bg-primary-900/30 rounded-xl border-2 border-primary-300 dark:border-primary-700 text-center',
    desktopTitleClassName: 'font-bold text-primary-700 dark:text-primary-300',
    desktopSubtitleClassName: 'text-xs text-primary-600 dark:text-primary-400 mt-1',
    mobileCardClassName: 'w-full p-4 bg-primary-50 dark:bg-primary-900/40 rounded-xl border-2 border-primary-300 dark:border-primary-600/60 text-center',
    mobileTitleClassName: 'font-bold text-primary-700 dark:text-primary-300 text-sm',
    mobileSubtitleClassName: 'text-[11px] text-primary-600 dark:text-primary-400 mt-1',
  },
  {
    desktopCardClassName: 'p-5 bg-white dark:bg-surface-800 rounded-xl border border-surface-200 dark:border-surface-700 text-center',
    desktopTitleClassName: 'font-semibold text-surface-900 dark:text-surface-50',
    desktopSubtitleClassName: 'text-xs text-surface-500 mt-1',
    mobileCardClassName: 'w-full p-4 bg-white dark:bg-surface-800 rounded-xl border border-surface-200 dark:border-surface-700 text-center',
    mobileTitleClassName: 'font-semibold text-surface-900 dark:text-surface-50 text-sm',
    mobileSubtitleClassName: 'text-[11px] text-surface-500 dark:text-surface-400 mt-1',
  },
  {
    desktopCardClassName: 'p-5 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl text-center shadow-lg shadow-primary-500/20',
    desktopTitleClassName: 'font-bold text-white',
    desktopSubtitleClassName: 'text-xs text-primary-100 mt-1',
    mobileCardClassName: 'w-full p-4 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl text-center shadow-lg shadow-primary-500/20',
    mobileTitleClassName: 'font-bold text-white text-sm',
    mobileSubtitleClassName: 'text-[11px] text-primary-100 mt-1',
  },
];

function DownArrow() {
  return (
    <div className="flex items-center justify-center py-2">
      <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  );
}

function MobileConnector() {
  return (
    <div className="flex flex-col items-center py-1">
      <div className="w-px h-4 bg-primary-500/40" />
      <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
      <div className="w-px h-4 bg-primary-500/40" />
    </div>
  );
}

export default function PlatformArchitectureDetail() {
  const { t } = useTranslation();
  const arch = t.archDetail;

  function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
      <div className="text-center mb-3">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-surface-500">{children}</span>
      </div>
    );
  }

  return (
    <section
      id="architecture-detail"
      className="py-12 sm:py-16 lg:py-24 3xl:py-32 bg-surface-50 dark:bg-surface-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl 3xl:max-w-screen-2xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-bold text-surface-900 dark:text-surface-50 mb-3 sm:mb-4">
            {arch.titlePre}{' '}
            <span className="text-primary-500">{arch.titleHighlight}</span>
          </h2>
          <p className="text-base sm:text-lg 3xl:text-xl text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
            {arch.subtitle}
          </p>
        </div>

        <div className="max-w-5xl 3xl:max-w-6xl mx-auto">

          {/* ── Desktop layout (md+): 3 columns side by side ── */}
          <div className="hidden md:grid md:grid-cols-3 gap-4 lg:gap-6">

            {/* Column 1: Data Sources */}
            <div className="space-y-4">
              <SectionLabel>{arch.sourceLabel}</SectionLabel>
              {arch.dataSources.map((source) => (
                <div key={source.label} className="p-4 bg-white dark:bg-surface-800 rounded-xl border border-surface-200 dark:border-surface-700 text-center">
                  <div className="font-semibold text-surface-900 dark:text-surface-50 text-sm">{source.label}</div>
                  <div className="text-xs text-surface-500 mt-1">{source.sub}</div>
                </div>
              ))}
            </div>

            {/* Column 2: Processing */}
            <div className="space-y-4 flex flex-col">
              <SectionLabel>{arch.processingLabel}</SectionLabel>
              {arch.processingSteps.map((step, idx) => {
                const style = PROCESSING_STEP_STYLES[idx];
                return (
                  <div key={step.title}>
                    <div className={style.desktopCardClassName}>
                      <div className={style.desktopTitleClassName}>{step.title}</div>
                      <div className={style.desktopSubtitleClassName}>{step.subtitle}</div>
                    </div>
                    {idx < arch.processingSteps.length - 1 && <DownArrow />}
                  </div>
                );
              })}
            </div>

            {/* Column 3: Outputs */}
            <div className="space-y-4">
              <SectionLabel>{arch.outputLabel}</SectionLabel>
              {arch.outputs.map((output) => (
                <div key={output.label} className="p-4 bg-white dark:bg-surface-800 rounded-xl border border-surface-200 dark:border-surface-700 text-center">
                  <div className="font-semibold text-surface-900 dark:text-surface-50 text-sm">{output.label}</div>
                  <div className="text-xs text-surface-500 mt-1">{output.sub}</div>
                </div>
              ))}
            </div>

          </div>

          {/* ── Mobile layout (<md): vertical pipeline ── */}
          <div className="md:hidden flex flex-col gap-0">

            {/* Stage 1: Data Sources */}
            <div className="rounded-2xl border border-surface-200 dark:border-surface-700/60 bg-white/80 dark:bg-surface-800/40 p-4">
              <SectionLabel>{arch.sourceLabel}</SectionLabel>
              <div className="grid grid-cols-2 gap-3">
                {arch.dataSources.map((source) => (
                  <div key={source.label} className="p-3 bg-white dark:bg-surface-800 rounded-xl border border-surface-200 dark:border-surface-700 text-center">
                    <div className="font-semibold text-surface-900 dark:text-surface-50 text-xs leading-tight">{source.label}</div>
                    <div className="text-[11px] text-surface-500 dark:text-surface-400 mt-1 leading-tight">{source.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            <MobileConnector />

            {/* Stage 2: Processing */}
            <div className="rounded-2xl border border-primary-200 dark:border-primary-700/50 bg-primary-50/70 dark:bg-primary-900/20 p-4">
              <div className="flex flex-col items-center gap-0">
                <SectionLabel>{arch.processingLabel}</SectionLabel>
                {arch.processingSteps.map((step, idx) => {
                  const style = PROCESSING_STEP_STYLES[idx];
                  return (
                    <div key={step.title}>
                      <div className={style.mobileCardClassName}>
                        <div className={style.mobileTitleClassName}>{step.title}</div>
                        <div className={style.mobileSubtitleClassName}>{step.subtitle}</div>
                      </div>
                      {idx < arch.processingSteps.length - 1 && <DownArrow />}
                    </div>
                  );
                })}
              </div>
            </div>

            <MobileConnector />

            {/* Stage 3: Outputs */}
            <div className="rounded-2xl border border-surface-200 dark:border-surface-700/60 bg-white/80 dark:bg-surface-800/40 p-4">
              <SectionLabel>{arch.outputLabel}</SectionLabel>
              <div className="grid grid-cols-2 gap-3">
                {arch.outputs.map((output) => (
                  <div key={output.label} className="p-3 bg-white dark:bg-surface-800 rounded-xl border border-surface-200 dark:border-surface-700 text-center">
                    <div className="font-semibold text-surface-900 dark:text-surface-50 text-xs leading-tight">{output.label}</div>
                    <div className="text-[11px] text-surface-500 dark:text-surface-400 mt-1 leading-tight">{output.sub}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
