'use client'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { DOCS_HEADING_FONT } from '../docs-data'
import { useTranslation } from '@/src/i18n'

export default function PlatformOverviewArticle() {
  const { t, lang } = useTranslation()
  const isAr = lang === 'ar'
  const toc = t.pages.documentsFull.pageToc
  const c = t.pages.documentsFull.content

  const tocItems = [
    { id: 'platform-overview',  label: toc.platformOverview },
    { id: 'core-capabilities',  label: toc.coreCapabilities },
    { id: 'dashboard-metrics',  label: toc.dashboardMetricSemantics },
    { id: 'getting-started',    label: toc.gettingStartedGuide },
    { id: 'step1',              label: toc.step1 },
    { id: 'step2',              label: toc.step2 },
    { id: 'step3',              label: toc.step3 },
    { id: 'step4',              label: toc.step4 },
    { id: 'step5',              label: toc.step5 },
    { id: 'provisioning-note',  label: toc.provisioningNote },
  ]

  return (
    <div className="flex gap-0 w-full max-w-[1600px] mx-auto">

      {/* ── Article ──────────────────────────────────────────────────── */}
      <article className="flex-1 min-w-0 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 w-full max-w-5xl mx-auto">

        <p
          lang={isAr ? 'ar' : 'en'}
          dir={isAr ? 'rtl' : 'ltr'}
          className="text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand mb-4"
        >
          {c.category}
        </p>

        <h1
          id="platform-overview"
          lang={isAr ? 'ar' : 'en'}
          dir={isAr ? 'rtl' : 'ltr'}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold cy-text-primary mb-4 sm:mb-6 leading-tight scroll-mt-20"
          style={{ fontFamily: DOCS_HEADING_FONT }}
        >
          {c.title}
        </h1>

        <p
          lang={isAr ? 'ar' : 'en'}
          dir={isAr ? 'rtl' : 'ltr'}
          className="cy-text-secondary leading-relaxed mb-10"
        >
          {c.intro}
        </p>

        <hr className="cy-border-default mb-10" />

        {/* Core Capabilities */}
        <section id="core-capabilities" className="mb-10 scroll-mt-20">
          <h2
            lang={isAr ? 'ar' : 'en'}
            dir={isAr ? 'rtl' : 'ltr'}
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: DOCS_HEADING_FONT }}
          >
            {c.coreCapabilitiesTitle}
          </h2>

          {/* 1. Agents */}
          <h3
            lang={isAr ? 'ar' : 'en'}
            dir={isAr ? 'rtl' : 'ltr'}
            className="text-base font-semibold cy-text-primary mb-2"
            style={{ fontFamily: DOCS_HEADING_FONT }}
          >
            {c.agentsTitle}
          </h3>
          <p
            lang={isAr ? 'ar' : 'en'}
            dir={isAr ? 'rtl' : 'ltr'}
            className="cy-text-secondary leading-relaxed mb-3"
          >
            {c.agentsDescription}
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-8">
            {c.agentsItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span
                  lang={isAr ? 'ar' : 'en'}
                  dir={isAr ? 'rtl' : 'ltr'}
                  className="mt-0.5"
                >
                  {text}
                </span>
              </li>
            ))}
          </ol>

          {/* 2. Scans */}
          <h3
            lang={isAr ? 'ar' : 'en'}
            dir={isAr ? 'rtl' : 'ltr'}
            className="text-base font-semibold cy-text-primary mb-2"
            style={{ fontFamily: DOCS_HEADING_FONT }}
          >
            {c.scansTitle}
          </h3>
          <p
            lang={isAr ? 'ar' : 'en'}
            dir={isAr ? 'rtl' : 'ltr'}
            className="cy-text-secondary leading-relaxed mb-3"
          >
            {c.scansDescription}
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-8">
            {c.scansItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span
                  lang={isAr ? 'ar' : 'en'}
                  dir={isAr ? 'rtl' : 'ltr'}
                  className="mt-0.5"
                >
                  {text}
                </span>
              </li>
            ))}
          </ol>

          {/* Dashboard Metric Semantics */}
          <h3
            id="dashboard-metrics"
            lang={isAr ? 'ar' : 'en'}
            dir={isAr ? 'rtl' : 'ltr'}
            className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20"
            style={{ fontFamily: DOCS_HEADING_FONT }}
          >
            {c.dashboardMetricSemanticsTitle}
          </h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  <th
                    lang={isAr ? 'ar' : 'en'}
                    dir={isAr ? 'rtl' : 'ltr'}
                    className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted"
                  >
                    {c.metricTable.metric}
                  </th>
                  <th
                    lang={isAr ? 'ar' : 'en'}
                    dir={isAr ? 'rtl' : 'ltr'}
                    className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted"
                  >
                    {c.metricTable.meaning}
                  </th>
                </tr>
              </thead>
              <tbody>
                {c.metricRows.map(([metric, meaning]) => (
                  <tr key={metric} className="border-b cy-border-default">
                    <td
                      lang={isAr ? 'ar' : 'en'}
                      dir={isAr ? 'rtl' : 'ltr'}
                      className="py-2.5 pr-4 cy-text-secondary font-mono text-xs"
                    >
                      {metric}
                    </td>
                    <td
                      lang={isAr ? 'ar' : 'en'}
                      dir={isAr ? 'rtl' : 'ltr'}
                      className="py-2.5 pr-4 cy-text-secondary"
                    >
                      {meaning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 3. CyfroAssistant */}
          <h3
            className="text-base font-semibold cy-text-primary mb-2"
            style={{ fontFamily: DOCS_HEADING_FONT }}
          >
            {c.cyfroAssistantTitle}
          </h3>
          <p
            lang={isAr ? 'ar' : 'en'}
            dir={isAr ? 'rtl' : 'ltr'}
            className="cy-text-secondary leading-relaxed mb-3"
          >
            {c.cyfroAssistantDescription}
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-6">
            {c.cyfroAssistantItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span
                  lang={isAr ? 'ar' : 'en'}
                  dir={isAr ? 'rtl' : 'ltr'}
                  className="mt-0.5"
                >
                  {text}
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* Getting Started Guide */}
        <section id="getting-started" className="mb-10 scroll-mt-20">
          <h2
            lang={isAr ? 'ar' : 'en'}
            dir={isAr ? 'rtl' : 'ltr'}
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: DOCS_HEADING_FONT }}
          >
            {c.gettingStartedTitle}
          </h2>
          <p
            lang={isAr ? 'ar' : 'en'}
            dir={isAr ? 'rtl' : 'ltr'}
            className="cy-text-secondary leading-relaxed mb-5"
          >
            {c.gettingStartedIntro}
          </p>

          <h3
            lang={isAr ? 'ar' : 'en'}
            dir={isAr ? 'rtl' : 'ltr'}
            className="text-base font-semibold cy-text-primary mb-3"
            style={{ fontFamily: DOCS_HEADING_FONT }}
          >
            {c.prerequisitesTitle}
          </h3>
          <ol className="space-y-4 cy-text-secondary text-sm mb-5">
            {c.prerequisitesItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span
                  lang={isAr ? 'ar' : 'en'}
                  dir={isAr ? 'rtl' : 'ltr'}
                  className="mt-0.5"
                >
                  {text}
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-5 rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary mb-6">
            <span
              lang={isAr ? 'ar' : 'en'}
              dir={isAr ? 'rtl' : 'ltr'}
            >
              {c.needHelpText}
            </span>{' '}
            <a href="mailto:support@cyfrosec.com" className="cy-text-brand hover:underline">support@cyfrosec.com</a>
          </div>

          {/* Step 1 */}
          <h3
            id="step1"
            lang={isAr ? 'ar' : 'en'}
            dir={isAr ? 'rtl' : 'ltr'}
            className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20"
            style={{ fontFamily: DOCS_HEADING_FONT }}
          >
            {c.step1Title}
          </h3>

          <p className="cy-text-secondary text-sm mb-3">
            <strong className="cy-text-primary">{c.step1Saas}</strong>
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-5">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                1
              </span>
              <span className="mt-0.5">
                <span
                  lang={isAr ? 'ar' : 'en'}
                  dir={isAr ? 'rtl' : 'ltr'}
                >
                  {c.step1GoTo}
                </span>{' '}
                <a href="https://www.app.cyfrosec.com" target="_blank" rel="noreferrer" className="cy-text-brand hover:underline">https://www.app.cyfrosec.com</a>{' '}
                <span
                  lang={isAr ? 'ar' : 'en'}
                  dir={isAr ? 'rtl' : 'ltr'}
                >
                  {c.step1SignUpPage}
                </span>
              </span>
            </li>
            {c.step1RestItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 2}
                </span>
                <span
                  lang={isAr ? 'ar' : 'en'}
                  dir={isAr ? 'rtl' : 'ltr'}
                  className="mt-0.5"
                >
                  {text}
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-2 rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary mb-5">
            <span
              lang={isAr ? 'ar' : 'en'}
              dir={isAr ? 'rtl' : 'ltr'}
            >
              {c.importantNote}
            </span>
          </div>

          {/* Step 2 */}
          <h3
            id="step2"
            lang={isAr ? 'ar' : 'en'}
            dir={isAr ? 'rtl' : 'ltr'}
            className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20"
            style={{ fontFamily: DOCS_HEADING_FONT }}
          >
            {c.step2Title}
          </h3>
          <p
            lang={isAr ? 'ar' : 'en'}
            dir={isAr ? 'rtl' : 'ltr'}
            className="cy-text-secondary leading-relaxed mb-3 text-sm"
          >
            {c.step2Description}
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-8">
            {c.step2Items.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span
                  lang={isAr ? 'ar' : 'en'}
                  dir={isAr ? 'rtl' : 'ltr'}
                  className="mt-0.5"
                >
                  {text}
                </span>
              </li>
            ))}
          </ol>

          {/* Step 3 */}
          <h3
            id="step3"
            lang={isAr ? 'ar' : 'en'}
            dir={isAr ? 'rtl' : 'ltr'}
            className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20"
            style={{ fontFamily: DOCS_HEADING_FONT }}
          >
            {c.step3Title}
          </h3>
          <p
            lang={isAr ? 'ar' : 'en'}
            dir={isAr ? 'rtl' : 'ltr'}
            className="cy-text-secondary leading-relaxed mb-3 text-sm"
          >
            {c.step3Description}
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-8">
            {c.step3Items.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span
                  lang={isAr ? 'ar' : 'en'}
                  dir={isAr ? 'rtl' : 'ltr'}
                  className="mt-0.5"
                >
                  {text}
                </span>
              </li>
            ))}
          </ol>

          {/* Step 4 */}
          <h3
            id="step4"
            lang={isAr ? 'ar' : 'en'}
            dir={isAr ? 'rtl' : 'ltr'}
            className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20"
            style={{ fontFamily: DOCS_HEADING_FONT }}
          >
            {c.step4Title}
          </h3>
          <p className="cy-text-secondary text-sm mb-8">
            <span lang={isAr ? 'ar' : 'en'} dir={isAr ? 'rtl' : 'ltr'}>{c.step4Text}</span>{' '}
            <Link href="/documents/deploy-agent" className="cy-text-brand hover:underline">
              {c.step4LinkText}
            </Link>{' '}
            <span lang={isAr ? 'ar' : 'en'} dir={isAr ? 'rtl' : 'ltr'}>{c.step4TextSuffix}</span>
          </p>

          {/* Step 5 */}
          <h3
            id="step5"
            lang={isAr ? 'ar' : 'en'}
            dir={isAr ? 'rtl' : 'ltr'}
            className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20"
            style={{ fontFamily: DOCS_HEADING_FONT }}
          >
            {c.step5Title}
          </h3>
          <ol className="space-y-4 cy-text-secondary text-sm mb-8">
            {c.step5Items.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span
                  lang={isAr ? 'ar' : 'en'}
                  dir={isAr ? 'rtl' : 'ltr'}
                  className="mt-0.5"
                >
                  {text}
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* Provisioning Consistency Note */}
        <section id="provisioning-note" className="mb-10 scroll-mt-20">
          <h3
            lang={isAr ? 'ar' : 'en'}
            dir={isAr ? 'rtl' : 'ltr'}
            className="text-base font-semibold cy-text-primary mb-3"
            style={{ fontFamily: DOCS_HEADING_FONT }}
          >
            {c.provisioningNoteTitle}
          </h3>
          <p
            lang={isAr ? 'ar' : 'en'}
            dir={isAr ? 'rtl' : 'ltr'}
            className="cy-text-secondary leading-relaxed mb-3"
          >
            {c.provisioningNoteDescription}
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.provisioningNoteItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span
                  lang={isAr ? 'ar' : 'en'}
                  dir={isAr ? 'rtl' : 'ltr'}
                  className="mt-0.5"
                >
                  {text}
                </span>
              </li>
            ))}
          </ol>
        </section>

      </article>

      {/* ── Right TOC ─────────────────────────────────────────────────── */}
      <aside className="hidden 2xl:block w-56 shrink-0 px-6 pt-10 pb-10">
        <div className="sticky top-10">
          <p
            lang={isAr ? 'ar' : 'en'}
            dir={isAr ? 'rtl' : 'ltr'}
            className="text-[10px] font-bold uppercase tracking-widest cy-text-muted mb-3"
          >
            {toc.title}
          </p>
          <ul className="space-y-2">
            {tocItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  lang={isAr ? 'ar' : 'en'}
                  dir={isAr ? 'rtl' : 'ltr'}
                  className="text-sm cy-text-secondary hover:cy-text-brand transition-colors block"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-6 border-t cy-border-default">
            <Link
              href="/contact"
              className="flex items-center gap-1.5 text-xs cy-text-muted hover:cy-text-brand transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span lang={isAr ? 'ar' : 'en'}>{toc.contactSupport}</span>
            </Link>
          </div>
        </div>
      </aside>

    </div>
  )
}
