'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, EyeOff, Lock, Receipt, ChevronRight } from 'lucide-react'
import { PAIN_POINTS } from './content'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const ICON_MAP = {
  EyeOff,
  AlertTriangle,
  Lock,
  Receipt,
} as const

type IconKey = keyof typeof ICON_MAP

export function ProblemSection() {
  return (
    <section id="problem" className="relative mx-auto max-w-7xl px-4 lg:px-6 py-20 lg:py-32">
      <div className="grid lg:grid-cols-12 gap-16">

        {/* Left Col: Static sticky header */}
        <div className="lg:col-span-5 relative">
          <div className="lg:sticky lg:top-32">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] cy-text-brand mb-4">
              The Security Gap
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight cy-text-primary leading-[1.1] mb-6"
              style={{ fontFamily: HEADING_FONT }}
            >
              Security tools fail when they create more work.
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-transparent rounded-full mb-8" />
            <p className="text-lg font-medium cy-text-secondary leading-relaxed">
              Traditional scanners generate endless PDFs and thousands of low-context alerts. They throw symptoms over the wall, leaving engineering teams paralyzed deciding what to fix first.
            </p>

            <div className="mt-10 hidden lg:block p-6 rounded-2xl border border-error-500/20 bg-error-500/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-error-500/10 blur-[40px]" />
              <div className="flex items-center gap-3 mb-2">
                <AlertTriangle className="size-5 text-error-500" />
                <span className="text-sm font-bold cy-text-primary uppercase tracking-wide">Legacy Vulnerability Scan</span>
              </div>
              <p className="text-2xl font-mono text-error-400 font-bold tracking-tight">
                12,408 <span className="text-sm cy-text-muted font-sans font-normal">Findings. 0 Context.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Col: Interactive list of pain points */}
        <div className="lg:col-span-7">
          <div className="flex flex-col gap-6">
            {PAIN_POINTS.map((item, i) => {
              const Icon = ICON_MAP[item.icon as IconKey]
              return (
                <motion.article
                  key={item.title}
                  className="group relative cy-glass-elevated rounded-2xl p-6 md:p-8 flex gap-6 md:gap-8 items-start transition-all duration-300 hover:bg-[color-mix(in_srgb,var(--bg-elevated)_40%,transparent)]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Subtle hover gradient indicator */}
                  <div className="absolute inset-y-0 left-0 w-1 bg-primary-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex-shrink-0 size-12 rounded-xl bg-[color-mix(in_srgb,var(--bg-muted)_50%,transparent)] border cy-border-default flex items-center justify-center group-hover:border-primary-500/30 group-hover:bg-primary-500/10 transition-colors">
                    {Icon && <Icon className="size-6 cy-text-secondary group-hover:text-primary-500 transition-colors" />}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold cy-text-primary mb-2 flex items-center justify-between" style={{ fontFamily: HEADING_FONT }}>
                      {item.title}
                      <ChevronRight className="size-4 cy-text-muted opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <p className="text-[15px] leading-relaxed cy-text-secondary font-medium">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
