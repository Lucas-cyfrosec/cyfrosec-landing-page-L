'use client'

import Link from 'next/link'
import { ArrowRight, Server, Cpu, ShieldAlert } from 'lucide-react'
import { motion } from 'framer-motion'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

export function PlatformOverviewSection() {
  return (
    <section id="platform" className="mx-auto max-w-7xl px-4 lg:px-6">
      <div className="mb-16 text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] cy-text-brand mb-4">Unified Architecture</p>
        <h2
          className="text-4xl md:text-5xl font-bold tracking-tight cy-text-primary mb-6"
          style={{ fontFamily: HEADING_FONT }}
        >
          One platform. Every layer.
        </h2>
        <p className="mx-auto max-w-2xl text-lg cy-text-secondary font-medium">
          Stop stitching together fragmented tools. CyfroSec ingests data from your entire environment, analyzes it with our proprietary AI engine, and outputs autonomous remediation.
        </p>
      </div>

      {/* Abstract Animated Data Pipeline */}
      <div className="relative rounded-3xl border cy-border-default cy-bg-elevated overflow-hidden p-8 lg:p-12 shadow-2xl">
        {/* Decorative background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-default)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-default)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

        <div className="relative z-10 grid lg:grid-cols-3 gap-8 items-center">

          {/* Step 1: Ingestion */}
          <motion.div
            className="flex flex-col items-center text-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative size-20 rounded-2xl bg-[color-mix(in_srgb,var(--bg-muted)_50%,transparent)] border cy-border-default flex items-center justify-center shadow-lg">
              <div className="absolute inset-0 bg-blue-500/10 rounded-2xl blur-xl" />
              <Server className="size-8 cy-text-primary" />
              {/* Pulsing data dots */}
              <motion.div
                className="absolute -right-2 top-1/2 size-2 rounded-full bg-blue-400"
                animate={{ x: [0, 40], opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              />
            </div>
            <div>
              <h3 className="text-lg font-bold cy-text-primary">Continuous Discovery</h3>
              <p className="text-sm cy-text-muted mt-2">Agentless scanning across cloud, endpoint, and network assets in real-time.</p>
            </div>
          </motion.div>

          {/* Step 2: AI Engine */}
          <motion.div
            className="flex flex-col items-center text-center gap-4 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="hidden lg:block absolute top-10 -left-[15%] w-[30%] h-[2px] bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50" />
            <div className="hidden lg:block absolute top-10 -right-[15%] w-[30%] h-[2px] bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50" />

            <div className="relative size-24 rounded-2xl bg-gradient-to-br from-primary-600 to-info-600 p-[1px] shadow-[0_0_40px_rgba(3,155,224,0.3)]">
              <div className="absolute inset-0 bg-primary-500/20 blur-2xl rounded-full" />
              <div className="w-full h-full bg-[var(--bg-elevated)] rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-500/10" />
                <Cpu className="size-10 text-primary-500" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold cy-text-primary">CyfroAI Engine</h3>
              <p className="text-sm cy-text-muted mt-2">Correlates CVEs with actual exploitability and asset criticality to prioritize risk.</p>
            </div>
          </motion.div>

          {/* Step 3: Auto-Remediation */}
          <motion.div
            className="flex flex-col items-center text-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative size-20 rounded-2xl bg-[color-mix(in_srgb,var(--bg-muted)_50%,transparent)] border cy-border-default flex items-center justify-center shadow-lg group">
              <div className="absolute inset-0 bg-success-500/10 rounded-2xl blur-xl" />
              <ShieldAlert className="size-8 text-success-500 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h3 className="text-lg font-bold cy-text-primary">Autonomous Defense</h3>
              <p className="text-sm cy-text-muted mt-2">Generates one-click patches and infrastructure-as-code updates to eliminate threats.</p>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <Link href="/platform" className="group flex items-center gap-2 text-sm font-bold cy-text-primary hover:text-primary-500 transition-colors">
          Explore the full technical architecture
          <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}
