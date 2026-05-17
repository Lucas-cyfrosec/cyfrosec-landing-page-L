'use client';

import Image from 'next/image';
import { useState } from 'react';
import { X, Maximize2 } from 'lucide-react';
import { useTranslation } from '@/src/i18n';

const SCREENSHOT_PATHS = [
  '/screenshots/prioritized-risk-1.png',
  '/screenshots/dashboard1.png',
  '/screenshots/ai-insight-1.png',
];

function BrowserChrome({ addressBarClassName }: { addressBarClassName: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-3 bg-surface-100 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-400"></div>
        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
        <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
      </div>
      <div className="flex-1 mx-4">
        <div className={addressBarClassName}></div>
      </div>
    </div>
  );
}

function ScreenshotHighlight({
  title,
  screenshot,
  clickLabel,
  onOpen,
}: {
  title: string;
  screenshot: string;
  clickLabel: string;
  onOpen: (screenshot: string) => void;
}) {
  return (
    <div className="relative rounded-2xl shadow-2xl shadow-surface-900/10 dark:shadow-black/30 border border-surface-200 dark:border-surface-700 overflow-hidden">
      <BrowserChrome addressBarClassName="h-5 max-w-xs mx-auto bg-surface-200 dark:bg-surface-700 rounded-md" />
      <div
        className="group relative cursor-zoom-in"
        onClick={() => onOpen(screenshot)}
      >
        <Image
          src={screenshot}
          alt={title}
          width={1400}
          height={900}
          className="w-full h-auto object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/60 rounded-lg px-3 py-2 flex items-center gap-2">
            <Maximize2 className="size-4 text-white" />
            <span className="text-xs text-white font-medium">{clickLabel}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScreenshotLightbox({
  screenshot,
  onClose,
}: {
  screenshot: string;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 flex items-center justify-center size-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        onClick={onClose}
      >
        <X className="size-5 text-white" />
      </button>
      <div
        className="relative max-w-6xl w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={screenshot}
          alt="Screenshot"
          width={1920}
          height={1080}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </div>
  );
}

export default function Highlights() {
  const { t, lang } = useTranslation();
  const isAr = lang === 'ar';
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="highlights" className="py-12 sm:py-16 lg:py-24 3xl:py-32 bg-surface-50 dark:bg-surface-950 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl 3xl:max-w-screen-2xl">
        <div className="text-center mb-10 sm:mb-16">
          <h2 dir={isAr ? 'rtl' : undefined} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-bold text-surface-900 dark:text-surface-50 mb-3 sm:mb-4">
            {t.highlights.titlePre}{' '}
            <span className="text-primary-500">{t.highlights.titleHighlight}</span>
          </h2>
          <p dir={isAr ? 'rtl' : undefined} className="text-base sm:text-lg 3xl:text-xl text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
            {t.highlights.subtitle}
          </p>
        </div>

        <div className="space-y-16 sm:space-y-24">
          {t.highlights.items.map((highlight, i) => (
            <div key={highlight.title} className="grid lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 3xl:gap-16 items-center">
              <div className={`lg:col-span-2 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <h3 dir={isAr ? 'rtl' : undefined} className="text-xl sm:text-2xl md:text-3xl 3xl:text-4xl font-bold text-surface-900 dark:text-surface-50 mb-3 sm:mb-4">{highlight.title}</h3>
                <p dir={isAr ? 'rtl' : undefined} className="text-base sm:text-lg 3xl:text-xl text-surface-600 dark:text-surface-400 leading-relaxed">{highlight.description}</p>
              </div>

              <div className={`relative lg:col-span-4 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <ScreenshotHighlight
                  title={highlight.title}
                  screenshot={SCREENSHOT_PATHS[i]}
                  clickLabel={t.highlights.clickToExpand}
                  onOpen={setLightbox}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && <ScreenshotLightbox screenshot={lightbox} onClose={() => setLightbox(null)} />}
    </section>
  );
}
