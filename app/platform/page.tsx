import Link from 'next/link'
import { Cloud, Server, Sliders, ArrowRight, CheckCircle } from 'lucide-react'

import { PublicPageShell } from '@/app/components/landing/PublicPageShell'
import { SectionReveal } from '@/app/components/landing/SectionReveal'
import {
  ARCHITECTURE_FLOW,
  COMPLIANCE_ITEMS,
  DEPLOYMENT_OPTIONS,
} from '@/app/components/landing/content'

export const metadata = {
  title: 'Platform Overview | CyfroSec',
  description: 'Discover how CyfroSec unifies vulnerability discovery, AI-powered prioritization, and guided remediation into one connected security platform.',
}

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const ICON_MAP = {
  Cloud,
  Server,
  Sliders,
} as const
type IconKey = keyof typeof ICON_MAP

const CAPABILITIES = [
  {
    heading: 'Code-to-Cloud Coverage',
    body:
      'From application dependencies and container images to cloud infrastructure and network services — CyfroSec inventories, monitors, and assesses your entire attack surface in one place.',
  },
  {
    heading: 'AI-Powered Risk Prioritisation',
    body:
      'Our AI Engine ingests raw findings and converts them into ranked remediation queues, reducing noise by up to 90% and surfacing only what requires immediate attention.',
  },
  {
    heading: 'SIEM and Response Integration',
    body:
      'CyfroSec sits on top of your existing SIEM layer, enriching events with vulnerability context and enabling SOAR-ready response actions without replacing existing tooling.',
  },
  {
    heading: 'Guided Remediation for Every Team',
    body:
      'CyfroAssistant translates technical findings into plain-language guidance and step-by-step action plans, making remediation accessible to IT ops, DevOps, and management alike.',
  },
] as const

export default function PlatformPage() {
  return (
    <PublicPageShell>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'var(--bg-canvas)' }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% -10%, var(--brand-primary) 0%, transparent 70%)',
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 py-24 text-center lg:px-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand">
            Platform
          </p>
          <h1
            className="text-4xl font-extrabold tracking-tight lg:text-6xl cy-text-primary mb-6"
            style={{ fontFamily: HEADING_FONT }}
          >
            One platform.
            <br />
            <span className="cy-text-brand">Complete security visibility.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg cy-text-secondary mb-10">
            CyfroSec connects vulnerability discovery, intelligent prioritisation, and guided remediation from 
            code to cloud — designed for teams of every size and skill level.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-started" className="cy-btn cy-btn-primary cy-btn-lg">
              Get started free
            </Link>
            <Link href="/contact" className="cy-btn cy-btn-secondary cy-btn-lg">
              Talk to sales
            </Link>
          </div>
        </div>
      </section>

      {/* ── Architecture flow ─────────────────────────────────────────── */}
      <SectionReveal>
        <section className="mx-auto max-w-5xl px-4 py-20 lg:px-6">
          <h2
            className="text-3xl font-bold cy-text-primary mb-3 text-center"
            style={{ fontFamily: HEADING_FONT }}
          >
            How It Works
          </h2>
          <p className="text-center cy-text-secondary mb-12 max-w-xl mx-auto">
            Each layer of the CyfroSec platform is purpose-built and feeds into the next — from raw 
            data collection through to actionable outputs.
          </p>
          <ol className="relative border-l cy-border-default ml-4 space-y-0">
            {ARCHITECTURE_FLOW.map((step, i) => (
              <li key={step} className="relative pl-8 pb-8 last:pb-0">
                {/* connector dot */}
                <span
                  className="absolute -left-[11px] top-0.5 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold"
                  style={{
                    background: 'var(--brand-primary)',
                    color: '#fff',
                  }}
                >
                  {i + 1}
                </span>
                <p
                  className="text-sm font-semibold cy-text-primary"
                  style={{ fontFamily: HEADING_FONT }}
                >
                  {step}
                </p>
                {i < ARCHITECTURE_FLOW.length - 1 && (
                  <div
                    className="absolute left-[-1.5px] top-6 h-full w-px"
                    style={{ background: 'var(--border-default)' }}
                  />
                )}
              </li>
            ))}
          </ol>
        </section>
      </SectionReveal>

      {/* ── Capabilities ──────────────────────────────────────────────── */}
      <SectionReveal>
        <section
          className="py-20"
          style={{ background: 'var(--bg-elevated)' }}
        >
          <div className="mx-auto max-w-5xl px-4 lg:px-6">
            <h2
              className="text-3xl font-bold cy-text-primary mb-3 text-center"
              style={{ fontFamily: HEADING_FONT }}
            >
              Platform Capabilities
            </h2>
            <p className="text-center cy-text-secondary mb-12 max-w-xl mx-auto">
              Built around the real operational challenges security and IT teams face every day.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {CAPABILITIES.map((cap) => (
                <div key={cap.heading} className="cy-card rounded-2xl p-6">
                  <h3
                    className="text-lg font-semibold cy-text-primary mb-2"
                    style={{ fontFamily: HEADING_FONT }}
                  >
                    {cap.heading}
                  </h3>
                  <p className="text-sm cy-text-secondary leading-relaxed">{cap.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ── Deployment options ────────────────────────────────────────── */}
      <SectionReveal>
        <section className="mx-auto max-w-5xl px-4 py-20 lg:px-6">
          <h2
            className="text-3xl font-bold cy-text-primary mb-3 text-center"
            style={{ fontFamily: HEADING_FONT }}
          >
            Deployment options
          </h2>
          <p className="text-center cy-text-secondary mb-12 max-w-xl mx-auto">
            CyfroSec fits your infrastructure, not the other way around.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {DEPLOYMENT_OPTIONS.map((opt) => {
              const Icon = ICON_MAP[opt.icon as IconKey]
              return (
                <div key={opt.title} className="cy-card rounded-2xl p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl cy-bg-brand-soft">
                    <Icon className="h-6 w-6 cy-text-brand" />
                  </div>
                  <h3
                    className="text-base font-semibold cy-text-primary mb-2"
                    style={{ fontFamily: HEADING_FONT }}
                  >
                    {opt.title}
                  </h3>
                  <p className="text-sm cy-text-secondary">{opt.description}</p>
                </div>
              )
            })}
          </div>
        </section>
      </SectionReveal>

      {/* ── Compliance ────────────────────────────────────────────────── */}
      <SectionReveal>
        <section
          className="py-20"
          style={{ background: 'var(--bg-elevated)' }}
        >
          <div className="mx-auto max-w-5xl px-4 lg:px-6">
            <h2
              className="text-3xl font-bold cy-text-primary mb-3 text-center"
              style={{ fontFamily: HEADING_FONT }}
            >
              Compliance & Trust
            </h2>
            <p className="text-center cy-text-secondary mb-10 max-w-xl mx-auto">
              Built for European enterprise and regulatory requirements from day one.
            </p>
            <ul className="mx-auto max-w-xl space-y-4">
              {COMPLIANCE_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    className="mt-0.5 h-5 w-5 shrink-0 cy-text-brand"
                  />
                  <span className="text-sm cy-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </SectionReveal>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section
        className="py-24 text-center"
        style={{ background: 'var(--bg-canvas)' }}
      >
        <h2
          className="text-3xl font-extrabold cy-text-primary mb-4"
          style={{ fontFamily: HEADING_FONT }}
        >
          Ready to see it in action?
        </h2>
        <p className="cy-text-secondary mb-8 max-w-md mx-auto">
          Book a demo or start your free evaluation — no commitment required.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="cy-btn cy-btn-primary cy-btn-lg inline-flex items-center gap-2">
            Talk to sales <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/get-started" className="cy-btn cy-btn-secondary cy-btn-lg">
            Get started free
          </Link>
        </div>
      </section>
    </PublicPageShell>
  )
}
