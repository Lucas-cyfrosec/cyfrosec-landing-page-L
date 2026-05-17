'use client'

import { PublicPageShell } from '@/app/components/landing/PublicPageShell'
import FinalCTA from '@/app/components/landing/sections/FinalCTA'
import AIChatbot from '@/app/components/landing/AIChatbot'
import { MessageSquare, Zap, ShieldCheck, BarChart2, HelpCircle, FileText, AlertTriangle, Search } from 'lucide-react'
import QueryExplorer from './QueryExplorer'
import { useTranslation } from '@/src/i18n'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const FEATURE_ICONS = [Zap, ShieldCheck, BarChart2]
const USE_CASE_ICONS = [Search, FileText, AlertTriangle, Zap]

export default function CyfroAssistantPage() {
  const { t, lang } = useTranslation()
  const isAr = lang === 'ar'
  const pg = t.pages.cyfroAssistant
  const labels = t.pages

  return (
    <PublicPageShell>
      {/* Hero */}
      <section className="relative bg-white dark:bg-surface-900 pt-24 pb-20 px-4">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(3,155,224,0.14),transparent)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex size-16 items-center justify-center rounded-2xl bg-primary-500/10 ring-1 ring-primary-500/20">
            <MessageSquare className="size-8 text-primary-400" />
          </div>
          <p dir={isAr ? 'rtl' : undefined} className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">{labels.solutionsLabel}</p>
          <h1 dir={isAr ? 'rtl' : undefined} className="text-4xl font-extrabold tracking-tight cy-text-primary sm:text-5xl lg:text-6xl" style={{ fontFamily: HEADING_FONT }}>
            {pg.heroTitle}
          </h1>
          <p dir={isAr ? 'rtl' : undefined} className="mt-5 text-lg leading-relaxed cy-text-secondary max-w-2xl mx-auto">
            {pg.heroSubtitle}
          </p>
          <div className="mt-5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400 ring-1 ring-amber-500/20">
              {pg.betaBadge}
            </span>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-surface-50 dark:bg-surface-950 py-20 px-4">
        <div className="mx-auto max-w-5xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p dir={isAr ? 'rtl' : undefined} className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-400 mb-3">{labels.problemLabel}</p>
            <h2 dir={isAr ? 'rtl' : undefined} className="text-2xl font-bold cy-text-primary sm:text-3xl mb-5" style={{ fontFamily: HEADING_FONT }}>
              {pg.problemTitle}
            </h2>
            <p dir={isAr ? 'rtl' : undefined} className="text-sm cy-text-secondary leading-relaxed mb-4">{pg.problemP1}</p>
            <p dir={isAr ? 'rtl' : undefined} className="text-sm cy-text-secondary leading-relaxed">{pg.problemP2}</p>
          </div>
          <div className="space-y-4">
            {pg.problemScenarios.map((row) => (
              <div key={row.label} className="rounded-xl border cy-border-default cy-bg-elevated p-4">
                <p dir={isAr ? 'rtl' : undefined} className="text-sm font-semibold cy-text-primary italic">{row.label}</p>
                <p dir={isAr ? 'rtl' : undefined} className="mt-1 text-xs text-primary-400">{row.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suggestion cards */}
      <section className="bg-white dark:bg-surface-900 py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <p dir={isAr ? 'rtl' : undefined} className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-400 mb-3">{labels.gettingStartedLabel}</p>
          <h2 dir={isAr ? 'rtl' : undefined} className="text-2xl font-bold cy-text-primary sm:text-3xl mb-3" style={{ fontFamily: HEADING_FONT }}>{pg.suggestionsTitle}</h2>
          <p dir={isAr ? 'rtl' : undefined} className="text-sm cy-text-secondary mb-8 max-w-2xl">{pg.suggestionsBody}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pg.suggestionCards.map((card) => (
              <div key={card.label} className="rounded-2xl border cy-border-default cy-bg-muted p-4">
                <p dir={isAr ? 'rtl' : undefined} className="text-sm font-semibold cy-text-primary mb-1">{card.label}</p>
                <p dir={isAr ? 'rtl' : undefined} className="text-xs cy-text-muted">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-surface-50 dark:bg-surface-950 py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <p dir={isAr ? 'rtl' : undefined} className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-400 mb-3">{labels.capabilitiesLabel}</p>
          <h2 dir={isAr ? 'rtl' : undefined} className="text-2xl font-bold cy-text-primary sm:text-3xl mb-10" style={{ fontFamily: HEADING_FONT }}>{pg.featuresTitle}</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pg.features.map((f, i) => {
              const Icon = FEATURE_ICONS[i]
              return (
                <div key={f.title} className="rounded-2xl border cy-border-default cy-bg-elevated p-5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-500/10 mb-4">
                    {Icon && <Icon className="size-5 text-primary-400" />}
                  </div>
                  <h3 dir={isAr ? 'rtl' : undefined} className="mb-1 text-sm font-semibold cy-text-primary">{f.title}</h3>
                  <p dir={isAr ? 'rtl' : undefined} className="text-sm cy-text-secondary leading-relaxed">{f.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <QueryExplorer />

      {/* Use cases */}
      <section className="bg-surface-50 dark:bg-surface-950 py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <p dir={isAr ? 'rtl' : undefined} className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-400 mb-3">{labels.useCasesLabel}</p>
          <h2 dir={isAr ? 'rtl' : undefined} className="text-2xl font-bold cy-text-primary sm:text-3xl mb-10" style={{ fontFamily: HEADING_FONT }}>{pg.useCasesTitle}</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {pg.useCases.map((uc, i) => {
              const Icon = USE_CASE_ICONS[i]
              return (
                <div key={uc.title} className="flex gap-4 rounded-2xl border cy-border-default cy-bg-elevated p-6">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-500/10">
                    {Icon && <Icon className="size-5 text-primary-400" />}
                  </div>
                  <div>
                    <h3 dir={isAr ? 'rtl' : undefined} className="mb-1 text-sm font-semibold cy-text-primary">{uc.title}</h3>
                    <p dir={isAr ? 'rtl' : undefined} className="text-sm cy-text-secondary leading-relaxed">{uc.body}</p>
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
