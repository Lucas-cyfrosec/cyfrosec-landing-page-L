'use client';

import Image from 'next/image';
import { useState } from 'react';
import { X, Maximize2 } from 'lucide-react';

interface Callout {
  label: string;
  position: string;
}

interface Highlight {
  title: string;
  description: string;
  callouts: Callout[];
  screenshot?: string;
}

const highlights: Highlight[] = [
  {
    title: 'Contextual Findings & Prioritization',
    description: 'Every finding comes with context: exploitability, exposure, affected assets, and remediation guidance along with prioritization.',
    screenshot: '/screenshots/prioritized-risk-1.png',
    callouts: []
  },
  {
    title: 'Dashboard',
    description: 'Real-time visibility into security posture. Track your infrastructure security, and compliance status at a glance.',
    screenshot: '/screenshots/dashboard1.png',
    callouts: []
  },
  {
    title: 'Executive Summary',
    description: 'An easily understandable summary of who is affected and what matters the most at a glance.',
    screenshot: '/screenshots/ai-insight-1.png',
    callouts: []
  }
  
];

function calloutStyle(position: string): React.CSSProperties {
  const top = position.includes('top') ? '20%' : position.includes('bottom') ? '80%' : '50%';
  const left = position.includes('left') ? '20%' : position.includes('right') ? '80%' : '50%';
  return { top, left };
}

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
  onOpen,
}: {
  title: string;
  screenshot: string;
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
            <span className="text-xs text-white font-medium">Click to expand</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlaceholderHighlight({ callouts }: { callouts: Callout[] }) {
  return (
    <>
      <div className="relative aspect-[16/10] bg-white dark:bg-surface-800 rounded-2xl shadow-2xl shadow-surface-900/10 dark:shadow-black/30 border border-surface-200 dark:border-surface-700 overflow-hidden">
        <BrowserChrome addressBarClassName="h-6 max-w-xs mx-auto bg-surface-200 dark:bg-surface-700 rounded-md" />
        <div className="p-3 sm:p-6">
          <div className="flex gap-2 sm:gap-4 mb-4 sm:mb-6">
            <div className="h-8 w-24 bg-primary-100 dark:bg-primary-900/30 rounded"></div>
            <div className="h-8 w-20 bg-surface-100 dark:bg-surface-700 rounded"></div>
            <div className="h-8 w-28 bg-surface-100 dark:bg-surface-700 rounded"></div>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-20 bg-surface-100 dark:bg-surface-700 rounded-lg"></div>
            ))}
          </div>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="h-12 bg-surface-50 dark:bg-surface-700/50 rounded-lg border border-surface-200 dark:border-surface-600"></div>
            ))}
          </div>
        </div>
      </div>
      {callouts.map((callout) => (
        <div
          key={callout.label}
          className="absolute hidden sm:block px-2 sm:px-3 py-1 sm:py-1.5 bg-primary-500 text-white text-xs sm:text-sm font-medium rounded-full shadow-lg whitespace-nowrap transform -translate-x-1/2 -translate-y-1/2"
          style={calloutStyle(callout.position)}
        >
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
            {callout.label}
          </span>
        </div>
      ))}
    </>
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
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="highlights" className="py-12 sm:py-16 lg:py-24 3xl:py-32 bg-surface-50 dark:bg-surface-950 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl 3xl:max-w-screen-2xl">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-bold text-surface-900 dark:text-surface-50 mb-3 sm:mb-4">
            See the platform <span className="text-primary-500">in action</span>
          </h2>
          <p className="text-base sm:text-lg 3xl:text-xl text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
            Powerful, purpose-built tools that give you the right information at the right time which are easily understandable and actionable for both security teams and IT operators.
          </p>
        </div>

        <div className="space-y-16 sm:space-y-24">
          {highlights.map((highlight, i) => (
            <div key={highlight.title} className="grid lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 3xl:gap-16 items-center">
              <div className={`lg:col-span-2 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <h3 className="text-xl sm:text-2xl md:text-3xl 3xl:text-4xl font-bold text-surface-900 dark:text-surface-50 mb-3 sm:mb-4">{highlight.title}</h3>
                <p className="text-base sm:text-lg 3xl:text-xl text-surface-600 dark:text-surface-400 leading-relaxed">{highlight.description}</p>
              </div>

              <div className={`relative lg:col-span-4 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                {highlight.screenshot ? (
                  <ScreenshotHighlight
                    title={highlight.title}
                    screenshot={highlight.screenshot}
                    onOpen={setLightbox}
                  />
                ) : (
                  <PlaceholderHighlight callouts={highlight.callouts} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && <ScreenshotLightbox screenshot={lightbox} onClose={() => setLightbox(null)} />}
    </section>
  );
}
