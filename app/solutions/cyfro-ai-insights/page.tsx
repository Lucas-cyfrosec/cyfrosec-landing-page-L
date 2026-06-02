'use client'

import { PublicPageShell } from '@/app/components/landing/PublicPageShell'
import FinalCTA from '@/app/components/landing/sections/FinalCTA'
import AIChatbot from '@/app/components/landing/AIChatbot'
import { Brain, ListOrdered, FileText, Network, Radar, ScanSearch, AlertTriangle, BarChart2, Eye, Zap } from 'lucide-react'
import { useTranslation } from '@/src/i18n'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const OUTPUT_ICONS = [FileText, ListOrdered]
const SOURCE_ICONS = [Network, Radar, ScanSearch]
const USE_CASE_ICONS = [AlertTriangle, Eye, BarChart2, Zap]

export default function CyfroAIInsightsPage() {
  const { t } = useTranslation()
  const pg = t.pages.cyfroAiInsights
  const labels = t.pages

  return (
    <PublicPageShell>
      {/* Hero */}
      <section className="relative bg-white dark:bg-surface-900 pt-24 pb-20 px-4">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(3,155,224,0.14),transparent)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex size-16 items-center justify-center rounded-2xl bg-primary-500/10 ring-1 ring-primary-500/20">
            <Brain className="size-8 text-primary-400" />
          </div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">{labels.solutionsLabel}</p>
          <h1 className="text-4xl font-extrabold tracking-tight cy-text-primary sm:text-5xl lg:text-6xl" style={{ fontFamily: HEADING_FONT }}>
            {pg.heroTitle}
          </h1>
          <p className="mt-5 text-lg leading-relaxed cy-text-secondary max-w-2xl mx-auto">
            {pg.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-surface-50 dark:bg-surface-950 py-20 px-4">
        <div className="mx-auto max-w-5xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-400 mb-3">{labels.problemLabel}</p>
            <h2 className="text-2xl font-bold cy-text-primary sm:text-3xl mb-5" style={{ fontFamily: HEADING_FONT }}>
              {pg.problemTitle}
            </h2>
            <p className="text-sm cy-text-secondary leading-relaxed mb-4">{pg.problemP1}</p>
            <p className="text-sm cy-text-secondary leading-relaxed">{pg.problemP2}</p>
          </div>
          <div className="space-y-4">
            {pg.problemScenarios.map((row) => (
              <div key={row.label} className="rounded-xl border cy-border-default cy-bg-elevated p-4">
                <p className="text-sm font-semibold cy-text-primary">{row.label}</p>
                <p className="mt-1 text-xs text-primary-400">{row.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outputs */}
      <section className="bg-white dark:bg-surface-900 py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-400 mb-3">{labels.whatYouGetLabel}</p>
          <h2 className="text-2xl font-bold cy-text-primary sm:text-3xl mb-10" style={{ fontFamily: HEADING_FONT }}>{pg.outputsTitle}</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {pg.outputs.map((output, i) => {
              const Icon = OUTPUT_ICONS[i]
              return (
                <div key={output.title} className="rounded-2xl border cy-border-default cy-bg-muted p-6">
                  <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-primary-500/10">
                    {Icon && <Icon className="size-6 text-primary-400" />}
                  </div>
                  <h3 className="mb-2 text-lg font-bold cy-text-primary" style={{ fontFamily: HEADING_FONT }}>{output.title}</h3>
                  <p className="text-sm cy-text-secondary leading-relaxed mb-4">{output.description}</p>
                  <ul className="space-y-2">
                    {output.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm cy-text-secondary">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary-400" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Risk card fields */}
      <section className="bg-surface-50 dark:bg-surface-950 py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold cy-text-primary sm:text-3xl mb-4" style={{ fontFamily: HEADING_FONT }}>{pg.riskCardTitle}</h2>
          <p className="text-sm cy-text-secondary mb-8 max-w-2xl">{pg.riskCardSubtitle}</p>
          <div className="divide-y cy-border-default rounded-2xl border cy-border-default overflow-hidden">
            {pg.riskCardFields.map((row, i) => (
              <div key={row.field} className={`flex gap-4 p-4 ${i % 2 === 0 ? 'cy-bg-elevated' : 'cy-bg-muted'}`}>
                <span className="w-48 shrink-0 text-sm font-semibold cy-text-primary">{row.field}</span>
                <span className="text-sm cy-text-secondary">{row.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Source types */}
      <section className="bg-white dark:bg-surface-900 py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-400 mb-3">{labels.sourceTypesLabel}</p>
          <h2 className="text-2xl font-bold cy-text-primary sm:text-3xl mb-10" style={{ fontFamily: HEADING_FONT }}>{pg.sourcesTitle}</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {pg.sources.map((s, i) => {
              const Icon = SOURCE_ICONS[i]
              return (
                <div key={s.type} className="rounded-2xl border cy-border-default cy-bg-muted p-5">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-primary-500/10">
                    {Icon && <Icon className="size-5 text-primary-400" />}
                  </div>
                  <h3 className="mb-2 text-sm font-semibold cy-text-primary">{s.type}</h3>
                  <p className="text-sm cy-text-secondary leading-relaxed">{s.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-surface-50 dark:bg-surface-950 py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-400 mb-3">{labels.useCasesLabel}</p>
          <h2 className="text-2xl font-bold cy-text-primary sm:text-3xl mb-10" style={{ fontFamily: HEADING_FONT }}>{pg.useCasesTitle}</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {pg.useCases.map((uc, i) => {
              const Icon = USE_CASE_ICONS[i]
              return (
                <div key={uc.title} className="flex gap-4 rounded-2xl border cy-border-default cy-bg-elevated p-6">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-500/10">
                    {Icon && <Icon className="size-5 text-primary-400" />}
                  </div>
                  <div>
                    <h3 className="mb-1 text-sm font-semibold cy-text-primary">{uc.title}</h3>
                    <p className="text-sm cy-text-secondary leading-relaxed">{uc.body}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <FinalCTA />
      <AIChatbot />
    </PublicPageShell>
  )
}
