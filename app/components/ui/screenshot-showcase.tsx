'use client'

import Image from 'next/image'
import { useState } from 'react'
import { X, Maximize2 } from 'lucide-react'

interface ScreenshotTab {
  id: string
  label: string
  description: string
  src: string
}

const TABS: ScreenshotTab[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    description: 'Real-time visibility across your infrastructure',
    src: '/screenshots/dashboard1.png',
  },
  {
    id: 'ai-insights',
    label: 'AI Insights',
    description: 'Correlated intelligence & prioritized risks',
    src: '/screenshots/ai-insight-1.png',
  },
]

export function ScreenshotShowcase() {
  const [active, setActive] = useState(TABS[0].id)
  const [lightbox, setLightbox] = useState(false)
  const tab = TABS.find((t) => t.id === active)!

  return (
    <>
      <div className="rounded-2xl border border-surface-200 dark:border-white/10 bg-surface-100 dark:bg-white/5 overflow-hidden">
        {/* Header — CLI dots */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-surface-200 dark:border-white/10">
          <span className="size-3 rounded-full bg-red-500/70" />
          <span className="size-3 rounded-full bg-yellow-400/70" />
          <span className="size-3 rounded-full bg-green-400/70" />
          <span className="ml-2 text-xs text-surface-400 dark:text-white/30 font-mono tracking-wide">cyfrosec ~ live-platform</span>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 px-6 pt-5">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={[
                'px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200',
                active === t.id
                  ? 'bg-primary-500/20 text-primary-500 dark:text-primary-300 border border-primary-500/40'
                  : 'text-surface-400 dark:text-white/40 hover:text-surface-600 dark:hover:text-white/70 border border-transparent',
              ].join(' ')}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Description */}
        <p className="px-6 pt-2 pb-4 text-sm text-surface-500 dark:text-white/45">{tab.description}</p>

        {/* Screenshot */}
        <div
          className="group relative mx-3 mb-3 rounded-xl overflow-hidden border border-surface-200 dark:border-white/10 shadow-2xl cursor-zoom-in lg:mx-4 lg:mb-4"
          onClick={() => setLightbox(true)}
        >
          <Image
            key={tab.id}
            src={tab.src}
            alt={tab.label}
            width={1680}
            height={1050}
            className="w-full h-auto object-cover object-top transition-opacity duration-300"
            priority
          />
          {/* Expand hint */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/60 rounded-lg px-3 py-2 flex items-center gap-2">
              <Maximize2 className="size-4 text-white" />
              <span className="text-xs text-white font-medium">Click to expand</span>
            </div>
          </div>
          {/* Fade overlay at bottom */}
          <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-surface-100/80 dark:from-[#050d1a]/80 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setLightbox(false)}
        >
          <button
            className="absolute top-4 right-4 flex items-center justify-center size-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setLightbox(false)}
          >
            <X className="size-5 text-white" />
          </button>
          <div
            className="relative max-w-[88rem] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={tab.src}
              alt={tab.label}
              width={1920}
              height={1080}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  )
}
