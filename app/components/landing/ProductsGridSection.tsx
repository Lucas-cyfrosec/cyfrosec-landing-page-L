'use client'

import { motion } from 'framer-motion'
import { BrainCircuit, Cpu, MessageSquare, Network, ScanSearch, ShieldCheck } from 'lucide-react'
import { PRODUCTS } from './content'
import Link from 'next/link'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const ICON_MAP = {
  Cpu,
  BrainCircuit,
  MessageSquare,
  ScanSearch,
  Network,
} as const

type IconKey = keyof typeof ICON_MAP

export function ProductsGridSection() {
  return (
    <section id="products" className="mx-auto max-w-7xl px-4 lg:px-6 py-12">
      <div className="mb-12">
        <h2
          className="text-3xl md:text-5xl font-bold tracking-tight cy-text-primary mb-4"
          style={{ fontFamily: HEADING_FONT }}
        >
          Comprehensive security.<br />Modular deployment.
        </h2>
        <p className="max-w-xl text-lg cy-text-secondary font-medium">
          Deploy what you need today. Our modules work independently but share a unified data layer for compound intelligence.
        </p>
      </div>

      {/* Bento Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[280px]">

        {/* Large Feature Card (Col span 2, Row span 2) */}
        <motion.div
          className="md:col-span-2 lg:col-span-2 md:row-span-2 relative cy-glass-elevated rounded-3xl p-8 overflow-hidden group border cy-border-default hover:border-primary-500/50 transition-colors"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-[60px] group-hover:bg-primary-500/20 transition-colors" />
          <BrainCircuit className="size-10 text-primary-500 mb-6" />
          <h3 className="text-3xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>Cyfro Agent AI</h3>
          <p className="text-lg cy-text-secondary mb-8 pr-12">Our flagship AI assistant connects to your entire SIEM and vulnerability stack to answer natural language questions about your security posture instantly.</p>

          <div className="absolute bottom-8 left-8 right-8 h-32 rounded-xl bg-[color-mix(in_srgb,var(--bg-canvas)_80%,transparent)] border cy-border-default p-4 shadow-inner">
            <div className="flex gap-3 items-center mb-3">
              <div className="size-6 rounded-full bg-primary-500/20 flex items-center justify-center">
                <MessageSquare className="size-3 text-primary-500" />
              </div>
              <p className="text-xs cy-text-primary font-mono">&quot;Are we vulnerable to the latest OpenSSL CVE?&quot;</p>
            </div>
            <div className="flex gap-3 items-start opacity-70">
              <div className="size-6 rounded-full bg-success-500/20 flex items-center justify-center mt-1">
                <ShieldCheck className="size-3 text-success-500" />
              </div>
              <p className="text-xs cy-text-primary font-mono leading-relaxed">Analyzing infrastructure...<br />2 assets found with outdated OpenSSL. Generated patch deployment script.</p>
            </div>
          </div>
        </motion.div>

        {/* Medium Cards */}
        {PRODUCTS.slice(1, 4).map((product, i) => {
          const Icon = ICON_MAP[product.icon as IconKey]
          return (
            <motion.div
              key={product.slug}
              className="relative cy-glass-elevated rounded-3xl p-6 overflow-hidden group border cy-border-default hover:bg-[color-mix(in_srgb,var(--bg-elevated)_40%,transparent)] transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <div className="size-12 rounded-2xl bg-[var(--bg-muted)] border cy-border-default flex items-center justify-center mb-6 group-hover:bg-primary-500/10 group-hover:border-primary-500/30 transition-colors">
                {Icon && <Icon className="size-6 cy-text-secondary group-hover:text-primary-500 transition-colors" />}
              </div>
              <h3 className="text-xl font-bold cy-text-primary mb-2" style={{ fontFamily: HEADING_FONT }}>{product.name}</h3>
              <p className="text-sm cy-text-secondary mb-4">{product.tagline}</p>

              <Link href={product.href} className="absolute bottom-6 left-6 text-sm font-bold text-primary-500 hover:text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more &rarr;
              </Link>
            </motion.div>
          )
        })}

        {/* Wide bottom card */}
        <motion.div
          className="md:col-span-3 lg:col-span-2 relative cy-glass-elevated rounded-3xl p-6 overflow-hidden flex flex-col justify-end group border cy-border-default"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="absolute inset-x-0 -top-24 h-48 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, var(--text-brand) 1px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
          <Network className="size-8 cy-text-brand mb-4 relative z-10" />
          <h3 className="text-xl font-bold cy-text-primary mb-2 relative z-10" style={{ fontFamily: HEADING_FONT }}>Cloud Configuration Audits</h3>
          <p className="text-sm cy-text-secondary relative z-10 max-w-sm">Automatically verify your AWS, GCP, and Azure environments against CIS benchmarks and custom policies.</p>
        </motion.div>

      </div>
    </section>
  )
}
