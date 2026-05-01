'use client'

import { PublicPageShell } from '@/app/components/landing/PublicPageShell'
import Image from 'next/image'
import FinalCTA from '@/app/components/landing/sections/FinalCTA'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Bot, ScanSearch, MessageSquare, Network, Radar, BarChart2, Wifi, Maximize2, X } from 'lucide-react'
import { useState } from 'react'
import AIChatbot from '@/app/components/landing/AIChatbot'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'


const scanTypes = [
  {
    icon: Wifi,
    title: 'Network Discovery',
    description: 'Identifies open ports and services to drive vulnerability detection and analysis.',
    href: '/solutions/network-discovery',
  },
  {
    icon: ScanSearch,
    title: 'Service Fingerprinting',
    description: 'Assesses security posture by identifying known CVEs in installed packages and services, detecting common misconfigurations and scanning for exposed secrets.',
    href: '/solutions/service-fingerprinting',
  },
  {
    icon: Radar,
    title: 'Asset Discovery',
    description: 'Does ARP sweeps, local process enumeration and MAC vendor lookup to build a complete, enriched inventory of every device across your environment.',
    href: '/solutions/asset-discovery',
  },
]

export default function ProductOverviewPage() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <PublicPageShell>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface-50 dark:bg-surface-950 min-h-[80vh] flex flex-col justify-center py-24 px-4">
        <div aria-hidden className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary-50/50 via-transparent to-[#fe904d]/10 dark:from-primary-950/30 dark:via-transparent dark:to-[#fe904d]/5" />
        <div aria-hidden className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-primary-500/5 blur-3xl pointer-events-none" />

        <div className="relative container mx-auto max-w-screen-xl sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-500 mb-4">Platform Overview</p>
            <h1 className="text-4xl font-bold tracking-tight text-surface-900 dark:text-surface-50 sm:text-5xl lg:text-6xl" style={{ fontFamily: HEADING_FONT }}>
              One platform.<br />
              <span className="text-primary-500">Complete security visibility.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-surface-600 dark:text-surface-400">
              CyfroSec continuously discovers assets, analyzes vulnerabilities, misconfigurations, and secrets — and provides AI-driven remediation guidance across your infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-white dark:bg-surface-900 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-500 mb-4">Core Capabilities</p>
          <h2 className="text-2xl font-bold tracking-tight text-surface-900 dark:text-surface-50 sm:text-3xl md:text-4xl mb-4" style={{ fontFamily: HEADING_FONT }}>
            Four pillars of the platform.
          </h2>
          <p className="text-base text-surface-600 dark:text-surface-400 mb-12 max-w-2xl">
            Agents collect, Scans assess, and CyfroAssistant answers — each layer designed to work independently and better together.
          </p>

          <div className="grid gap-6 lg:grid-cols-4">
            {/* Agents */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="rounded-[24px] border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800 p-6"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-primary-100 dark:bg-primary-900/50 text-primary-500 mb-5">
                <Bot className="size-6" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-500 mb-2">01 — Agents</p>
              <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-50 mb-3" style={{ fontFamily: HEADING_FONT }}>
                Your infrastructure&apos;s eyes and ears.
              </h3>
              <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed mb-5">
                Lightweight agents run on your hosts and perform all scan operations.
              </p>
              <ul className="space-y-3">
                {[
                  { label: 'Lightweight', detail: 'Minimal CPU and memory usage — safe to run continuously on production hosts.' },
                  { label: 'Secure', detail: 'Outbound-only connections, ensuring your firewall stays closed.' },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-900 p-3">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary-500" />
                    <div>
                      <span className="text-sm font-semibold text-surface-900 dark:text-surface-50">{item.label}: </span>
                      <span className="text-sm text-surface-600 dark:text-surface-400">{item.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Scans */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="rounded-[24px] border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800 p-6"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-[#fe904d]/10 dark:bg-[#fe904d]/20 text-[#fe701a] dark:text-[#feb080] mb-5">
                <Network className="size-6" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-500 mb-2">02 — Scans</p>
              <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-50 mb-3" style={{ fontFamily: HEADING_FONT }}>
                Automated security checks by agents.
              </h3>
              <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed mb-5">
                Three scan types cover your full attack surface from open ports to installed packages, device inventory, and hidden secrets.
              </p>
              <ul className="space-y-2">
                {['Network Discovery', 'Service Fingerprinting', 'Asset Discovery'].map((scan) => (
                  <li key={scan} className="flex items-center gap-2 text-sm text-surface-600 dark:text-surface-400">
                    <span className="size-1.5 rounded-full bg-primary-500 shrink-0" />
                    {scan}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CyfroAI Insights */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="rounded-[24px] border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800 p-6"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 mb-5">
                <BarChart2 className="size-6" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-500 mb-2">03 — CyfroAI Insights</p>
              <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-50 mb-3" style={{ fontFamily: HEADING_FONT }}>
                Risk ranked by what actually matters.
              </h3>
              <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed mb-5">
                AI re-ranks every finding using network exposure and reachability — not just raw CVSS score — so your team always knows what to fix first.
              </p>
              <ul className="space-y-2">
                {['Exposure-aware prioritization', 'Executive summaries', 'OS-specific remediation'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-surface-600 dark:text-surface-400">
                    <span className="size-1.5 rounded-full bg-primary-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CyfroAssistant */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.24 }}
              className="rounded-[24px] border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800 p-6"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 mb-5">
                <MessageSquare className="size-6" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-500 mb-2">04 — CyfroAssistant</p>
              <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-50 mb-3" style={{ fontFamily: HEADING_FONT }}>
                Your personal security analyst, 24/7.
              </h3>
              <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed mb-5">
                Ask questions in plain English and get instant answers grounded in your actual scan data, agent status, and vulnerability findings.
              </p>
              <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-900 p-3">
                <p className="text-xs text-surface-500 mb-1">Example query</p>
                <p className="text-sm italic text-surface-900 dark:text-surface-50">&ldquo;Show me all servers with open SSH ports&rdquo;</p>
                <p className="mt-1 text-xs text-primary-500">→ Queries your entire fleet in seconds</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scan Types */}
      <section className="bg-surface-50 dark:bg-surface-950 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-500 mb-4">Scan Types</p>
          <h2 className="text-2xl font-bold tracking-tight text-surface-900 dark:text-surface-50 sm:text-3xl md:text-4xl mb-4" style={{ fontFamily: HEADING_FONT }}>
            Three scans. Full coverage.
          </h2>
          <p className="text-base text-surface-600 dark:text-surface-400 mb-12 max-w-2xl">
            Each scan type targets a different layer of your infrastructure. Together they give you a complete picture of exposure, risk, and asset inventory.
          </p>

          <div className="grid gap-5 lg:grid-cols-3">
            {scanTypes.map((scan, index) => {
              const Icon = scan.icon
              return (
                <motion.div
                  key={scan.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-[24px] border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 flex flex-col"
                >
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/50 text-primary-500 mb-4">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-base font-semibold text-surface-900 dark:text-surface-50 mb-2" style={{ fontFamily: HEADING_FONT }}>{scan.title}</h3>
                  <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed flex-1">{scan.description}</p>
                  <Link href={scan.href} className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary-500 hover:text-primary-400 transition-colors">
                    Learn more <ArrowRight className="size-3.5" />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CyfroAI Insights */}
      <section className="bg-white dark:bg-surface-900 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[4fr_2fr] lg:items-center">
            <div className="relative rounded-3xl border border-surface-200 dark:border-[#24374a] overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-surface-100 dark:bg-[#0c1724] border-b border-surface-200 dark:border-[#24374a]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="h-5 max-w-xs mx-auto bg-surface-200 dark:bg-[#24374a] rounded-md" />
                </div>
              </div>
              <div className="group relative cursor-zoom-in" onClick={() => setLightbox('/screenshots/ai-insight-1.png')}>
                <Image
                  src="/screenshots/ai-insight-1.png"
                  alt="CyfroAI Insights"
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
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-500 mb-4">CyfroAI Insights</p>
              <h2 className="text-2xl font-bold tracking-tight text-surface-900 dark:text-surface-50 sm:text-3xl md:text-4xl mb-4" style={{ fontFamily: HEADING_FONT }}>
                Triage Without the Noise.
              </h2>
              <p className="text-base text-surface-600 dark:text-surface-400 leading-relaxed mb-6">
                Cyfro AI Engine receives raw findings alongside network topology context to produce prioritized, actionable security intelligence your team can act on immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Metric Semantics */}
      <section className="bg-surface-50 dark:bg-surface-950 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[2fr_4fr] lg:items-start">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-500 mb-4">Dashboard</p>
              <h2 className="text-2xl font-bold tracking-tight text-surface-900 dark:text-surface-50 sm:text-3xl mb-4" style={{ fontFamily: HEADING_FONT }}>
                Central view of your infrastructure&apos;s security health.
              </h2>
              <p className="text-base text-surface-600 dark:text-surface-400 leading-relaxed">
                Dashboard brings together scan status, vulnerability findings, agent health, asset discovery, GDPR compliance, and a snapshot of AI-generated insights into a single, customisable page.
              </p>
            </div>

            <div className="relative rounded-3xl border border-[#24374a] overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#0c1724] border-b border-[#24374a]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="h-5 max-w-xs mx-auto bg-[#24374a] rounded-md" />
                </div>
              </div>
              <div className="group relative cursor-zoom-in" onClick={() => setLightbox('/screenshots/dashboard1.png')}>
                <Image
                  src="/screenshots/dashboard1.png"
                  alt="Dashboard"
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
          </div>
        </div>
      </section>

      <FinalCTA />
      <AIChatbot />

      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 flex items-center justify-center size-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors" onClick={() => setLightbox(null)}>
            <X className="size-5 text-white" />
          </button>
          <div className="relative max-w-6xl w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <Image src={lightbox} alt="Screenshot" width={1920} height={1080} className="w-full h-auto object-contain" priority />
          </div>
        </div>
      )}
    </PublicPageShell>
  )
}
