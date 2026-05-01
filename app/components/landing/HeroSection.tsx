'use client'

import Link from 'next/link'
import { ArrowRight, TerminalSquare, ShieldCheck, Activity } from 'lucide-react'
import { motion } from 'framer-motion'
import { HERO_METRICS } from './content'

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-24 pb-16 lg:pb-24 lg:pt-32">
      {/* Background Deep Glow - Dark Premium Feel */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,color-mix(in_srgb,var(--color-primary-500)_15%,transparent),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-20 h-[800px] opacity-40 mix-blend-screen"
        style={{
          backgroundImage: 'linear-gradient(to right, color-mix(in srgb, var(--border-default) 40%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--border-default) 40%, transparent) 1px, transparent 1px)',
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(circle at 50% 20%, black, transparent 70%)'
        }}
      />

      <div className="mx-auto w-full max-w-7xl px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Copy Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border cy-border-default bg-[color-mix(in_srgb,var(--bg-elevated)_50%,transparent)] px-3 py-1.5 mb-8 backdrop-blur-md"
            >
              <div className="size-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-widest cy-text-primary">
                CyfroAI Agent 2.0 Live
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance !leading-[1.05] cy-text-primary">
              <span className="block mb-2">Enterprise</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-info-300">
                Security Posture
              </span>
              <span className="block mt-2">Perfected.</span>
            </h1>

            <p className="mt-6 text-lg tracking-wide cy-text-secondary leading-relaxed max-w-xl font-medium">
              CyfroSec automatically discovers assets, detects vulnerabilities via AI, and generates autonomous remediation patches across your multi-cloud environment.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/get-started" className="cy-btn cy-btn-primary cy-btn-lg gap-2 rounded-xl group relative overflow-hidden bg-primary-600 hover:bg-primary-500 text-white border-primary-500 shadow-[0_0_20px_rgba(3,155,224,0.3)]">
                <span className="relative z-10 flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              </Link>
              <Link href="/contact" className="cy-btn cy-btn-lg gap-2 rounded-xl border cy-border-default bg-[color-mix(in_srgb,var(--bg-elevated)_40%,transparent)] backdrop-blur-md hover:bg-[color-mix(in_srgb,var(--bg-elevated)_80%,transparent)] cy-text-primary">
                <TerminalSquare className="size-4 cy-text-muted" />
                Book a Demo
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-8 border-t cy-border-default pt-6">
              {HERO_METRICS.slice(0, 2).map((m, i) => (
                <div key={m.label} className={i !== 0 ? 'border-l cy-border-default pl-8' : ''}>
                  <p className="text-2xl font-bold cy-text-primary tracking-tight">{m.value}</p>
                  <p className="text-xs font-semibold uppercase tracking-wider cy-text-muted mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Data Density Card Side */}
          <motion.div
            className="relative lg:ml-auto w-full max-w-[540px] perspective-1000"
            initial={{ opacity: 0, x: 40, rotateY: 10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Glow Orbs behind standard card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-[120%] h-[120%] bg-primary-500/10 blur-[80px] -z-10 pointer-events-none" />

            <div className="cy-glass-elevated rounded-3xl overflow-hidden border cy-border-default shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] transform-gpu hover:-translate-y-1 transition-transform duration-500">
              {/* Fake Mac Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b cy-border-default bg-[color-mix(in_srgb,var(--bg-muted)_50%,transparent)]">
                <div className="flex gap-1.5">
                  <div className="size-2.5 rounded-full bg-error-500/80" />
                  <div className="size-2.5 rounded-full bg-warning-500/80" />
                  <div className="size-2.5 rounded-full bg-success-500/80" />
                </div>
                <div className="mx-auto text-[10px] font-mono cy-text-muted absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
                  <ShieldCheck className="size-3" /> cyfrosec-platform-agent
                </div>
              </div>

              {/* Code / Terminal Content */}
              <div className="p-5 font-mono text-[11px] leading-relaxed cy-text-secondary bg-[color-mix(in_srgb,var(--bg-canvas)_95%,transparent)]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Activity className="size-4 text-success-500 animate-pulse" />
                    <span className="text-success-500 font-bold uppercase tracking-widest">Live Analysis</span>
                  </div>
                  <span className="cy-badge cy-badge-critical">Critical Finding</span>
                </div>

                <div className="space-y-3">
                  <div className="rounded-lg border cy-border-default bg-[color-mix(in_srgb,var(--bg-elevated)_40%,transparent)] p-3">
                    <span className="text-info-400 font-semibold">[AGENT]</span> Initiating automated scan routing...<br />
                    <span className="text-info-400 font-semibold">[AGENT]</span> Analyzing docker container <span className="text-warning-400">`nginx:1.24`</span><br />
                    <span className="text-error-400 font-semibold mt-2 block">
                      <span className="animate-pulse mr-1">►</span>
                      CVE-2025-3842 FOUND: Remote Code Execution flaw.
                    </span>
                  </div>

                  <div className="flex items-start gap-3 mt-4">
                    <div className="flex-1 rounded-xl cy-border-default border p-3 flex items-center justify-between relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div>
                        <p className="text-xs cy-text-primary font-bold font-sans">AI Remediation Plan</p>
                        <p className="cy-text-muted mt-0.5 font-sans">Upgrade to 1.25.1</p>
                      </div>
                      <button className="cy-btn cy-btn-primary cy-btn-sm rounded-lg py-1 px-3 shadow-none">
                        Deploy Fix
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <motion.div
              className="absolute -bottom-6 -left-6 rounded-2xl cy-glass-elevated border cy-border-default p-4 flex items-center gap-4 shadow-xl pointer-events-none"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="size-10 rounded-full flex items-center justify-center bg-success-500/20 border border-success-500/30">
                <ShieldCheck className="size-5 text-success-500" />
              </div>
              <div>
                <p className="text-xs font-bold cy-text-primary uppercase tracking-widest font-sans">System Secured</p>
                <p className="text-[11px] cy-text-muted mt-0.5 font-sans">0 vulnerabilities remaining</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
