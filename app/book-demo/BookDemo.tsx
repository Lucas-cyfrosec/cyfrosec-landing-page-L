'use client'

import { BookDemoForm } from '@/app/components/landing/BookDemoForm'
import { PublicPageShell } from '@/app/components/landing/PublicPageShell'
import { MorphingCardStack } from '@/app/components/ui/morphing-card-stack'
import { ScreenshotShowcase } from '@/app/components/ui/screenshot-showcase'
import { Eye, Shield, Zap } from 'lucide-react'
const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

export default function BookDemo() {
  const copy = {
    eyebrow: 'Security insights for engineers. Strategic visibility for executives.',
    heroTitle: 'Discover Your Attack Surface',
    heroAccent: 'in Minutes',
    headerTitle: 'Discover and Secure Your Infrastructure with Advanced AI',
    tagline: 'Advanced AI. Simple Cybersecurity.',
    p1: 'See your infrastructure the way attackers do.',
    p2: 'CyfroSec continuously discovers assets, analyzes vulnerabilities, and provides AI-driven remediation guidance across your infrastructure.',
    formTitle: 'Ready to see your attack surface?',
    cards: [
      {
        id: 'visibility',
        icon: <Eye className="size-4 text-primary-400" />,
        title: 'Visibility',
        points: [
          'Continuous discovery of assets, vulnerabilities, secrets, and misconfigurations.',
          'AI-powered asset topology and deep infrastructure insights.',
        ],
      },
      {
        id: 'risk',
        icon: <Shield className="size-4 text-primary-400" />,
        title: 'Risk & Compliance',
        points: [
          'AI-powered risk prioritization based on exposure and exploitability.',
          'Compliance-ready reports including GDPR and security frameworks.',
        ],
      },
      {
        id: 'remediation',
        icon: <Zap className="size-4 text-primary-400" />,
        title: 'AI-Driven Remediation',
        points: [
          'AI-driven remediation prioritization based on exposure and exploitability.',
          'Plain-language remediation guidance that any engineer can understand.',
        ],
      },
    ],
    screenshotLabel: 'See CyfroSec in Action',
  }

  return (
    <PublicPageShell>
      {/* Page header */}
      <section className="relative bg-[#050d1a] pt-28 pb-14 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(3,155,224,0.18),transparent)]"
        />
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">
          {copy.eyebrow}
        </p>
        <h1
          className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          style={{ fontFamily: HEADING_FONT }}
         
        >
          {copy.heroTitle}
          <br className="hidden sm:block" />
          <span className="text-primary-400"> {copy.heroAccent}</span>
        </h1>
      </section>

      {/* Two-column body */}
      <section className="bg-[#050d1a] pb-24">
        <div className="mx-auto max-w-[96rem] px-4 sm:px-6 lg:px-10 2xl:px-14">

          {/* Header text — above both columns */}
          <div className="mb-10">
            <h2
              className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl leading-tight"
              style={{ fontFamily: HEADING_FONT }}
             
            >
              {copy.headerTitle}
            </h2>
            <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-primary-400">
              {copy.tagline}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/60 max-w-4xl">
              {copy.p1}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/60 max-w-4xl">
              {copy.p2}
            </p>
          </div>

          <div className="grid gap-12 xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] xl:gap-14 2xl:gap-20 items-start">

            {/* ── Left: Form + What happens next ── */}
            <div className="space-y-6 order-2 xl:order-1">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 xl:p-9 2xl:p-10">
                <h2
                  className="mb-6 text-2xl font-bold text-white"
                  style={{ fontFamily: HEADING_FONT }}
                 
                >
                  {copy.formTitle}
                </h2>
                <BookDemoForm />
              </div>

            </div>

            {/* ── Right: Marketing ── */}
            <div className="space-y-10 order-1 xl:order-2 xl:sticky xl:top-8 xl:self-start">

              {/* Value cards — MorphingCardStack */}
              <MorphingCardStack
                defaultLayout="list"
                cards={copy.cards}
                className="2xl:pl-2"
              />

              {/* Screenshot showcase */}
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-400">
                  {copy.screenshotLabel}
                </p>
                <ScreenshotShowcase />
              </div>

            </div>

          </div>
        </div>
      </section>
    </PublicPageShell>
  )
}
