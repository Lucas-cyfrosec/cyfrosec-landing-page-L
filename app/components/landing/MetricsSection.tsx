'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { IMPACT_METRICS } from './content'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect() } },
      { threshold: 0.2 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])
  return inView
}

function AnimatedStat({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref as React.RefObject<HTMLElement>)

  // Basic animation for the numbers
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {inView ? value : '0'}
    </motion.span>
  )
}

export function MetricsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 lg:px-6 py-24 lg:py-32">
      <div className="mb-20 text-center max-w-3xl mx-auto">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] cy-text-brand mb-4">Business impact</p>
        <h2
          className="text-4xl md:text-5xl font-bold tracking-tight cy-text-primary"
          style={{ fontFamily: HEADING_FONT }}
        >
          Security that moves the needle.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-default)]">
        {IMPACT_METRICS.map((metric) => (
          <div
            key={metric.label}
            className="flex flex-col items-center text-center pt-8 sm:pt-0"
          >
            <p
              className="text-6xl md:text-7xl lg:text-[6rem] font-black tracking-tighter tabular-nums mb-4 text-transparent bg-clip-text bg-gradient-to-b from-primary-400 to-primary-700"
              style={{ fontFamily: HEADING_FONT, lineHeight: 1 }}
            >
              <AnimatedStat value={metric.value} />
            </p>
            <p className="text-lg font-bold cy-text-primary uppercase tracking-wide">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
