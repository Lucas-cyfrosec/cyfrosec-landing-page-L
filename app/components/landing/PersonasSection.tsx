'use client'

import { motion } from 'framer-motion'
import { Building2, LayoutDashboard, Network, ShieldCheck } from 'lucide-react'
import { PERSONAS } from './content'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const ICON_MAP = {
  Network,
  LayoutDashboard,
  ShieldCheck,
  Building2,
} as const

type IconKey = keyof typeof ICON_MAP

export function PersonasSection() {
  return (
    <section id="who" className="mx-auto max-w-7xl px-4 lg:px-6 py-20 lg:py-24">
      <div className="mb-14 text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] cy-text-brand mb-4">Empowering Teams</p>
        <h2
          className="text-4xl md:text-5xl font-bold tracking-tight cy-text-primary"
          style={{ fontFamily: HEADING_FONT }}
        >
          Democratizing security.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg cy-text-secondary font-medium">
          Whether you are defending the perimeter or writing the code, CyfroSec speaks your language and integrates into your workflow.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PERSONAS.map((item, i) => {
          const Icon = ICON_MAP[item.icon as IconKey]
          return (
            <motion.article
              key={item.persona}
              className="group relative rounded-3xl border cy-border-default cy-glass-elevated p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            >
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="mb-6 size-14 rounded-2xl cy-bg-muted border cy-border-default flex items-center justify-center group-hover:bg-primary-500/10 group-hover:border-primary-500/30 transition-colors">
                {Icon && <Icon className="size-7 cy-text-secondary group-hover:text-primary-500 transition-colors" />}
              </div>
              <h3
                className="text-xl font-bold cy-text-primary tracking-tight mb-3"
                style={{ fontFamily: HEADING_FONT }}
              >
                {item.persona}
              </h3>
              <p className="text-[15px] leading-relaxed cy-text-secondary font-medium">{item.value}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
