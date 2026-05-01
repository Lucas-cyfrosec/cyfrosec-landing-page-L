'use client'

import { motion } from 'framer-motion'
import { THREAT_STATS } from './content'
import { AlertCircle } from 'lucide-react'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

export function ThreatRealitySection() {
  return (
    <section className="relative overflow-hidden w-full">
      {/* High Contrast Danger Zone */}
      <div className="relative py-24 lg:py-32 bg-[var(--bg-canvas)] border-y border-error-500/10 dark:bg-[color-mix(in_srgb,var(--bg-canvas)_95%,#3a0a0a)]">

        {/* Abstract warning background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-error-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-warning-500/5 blur-[100px] pointer-events-none" />

        {/* Angled scanline overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, var(--text-primary) 0, var(--text-primary) 1px, transparent 1px, transparent 8px)' }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">

            {/* Left side: Stark Messaging */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-error-500/30 bg-error-500/10 px-3 py-1.5 mb-8">
                <AlertCircle className="size-4 text-error-500 animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-error-600 dark:text-error-400">
                  Global Threat Landscape
                </span>
              </div>

              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight cy-text-primary leading-[1.1] mb-6"
                style={{ fontFamily: HEADING_FONT }}
              >
                Inaction is <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-error-500 to-warning-500">
                  not an option.
                </span>
              </h2>

              <p className="text-lg font-medium cy-text-secondary leading-relaxed max-w-md">
                Every second your attack surface remains exposed, the compounding risk outpaces human ability to manually patch.
              </p>

              <div className="mt-8 pt-8 border-t border-error-500/20">
                <p className="text-sm font-semibold cy-text-primary">
                  The consequence: <span className="font-normal cy-text-muted">Most organizations won&apos;t know they are breached until data is already exfiltrated.</span>
                </p>
              </div>
            </motion.div>

            {/* Right side: Massive Stats */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8 lg:gap-12">
              {THREAT_STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group"
                >
                  {/* Decorative glowing accent line */}
                  <div className={`absolute -left-4 top-2 bottom-2 w-1 rounded-full opacity-50 transition-opacity group-hover:opacity-100 ${stat.highlight ? 'bg-error-500 shadow-[0_0_12px_var(--color-error-500)]' : 'bg-surface-300 dark:bg-surface-700'
                    }`} />

                  <p
                    className={`text-5xl md:text-6xl lg:text-[5rem] font-black tracking-tighter tabular-nums mb-3 ${stat.highlight ? 'text-transparent bg-clip-text bg-gradient-to-b from-error-400 to-error-600' : 'cy-text-primary'
                      }`}
                    style={{ fontFamily: HEADING_FONT, lineHeight: 1 }}
                  >
                    {stat.value}
                  </p>

                  <p className="text-base font-bold cy-text-primary uppercase tracking-wide mb-1">
                    {stat.label}
                  </p>
                  <p className="text-sm font-medium cy-text-muted">
                    {stat.sub}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
