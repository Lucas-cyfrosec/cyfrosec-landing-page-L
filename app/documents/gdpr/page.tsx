import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'GDPR Compliance Tool | CyfroSec Documentation',
  description: 'Understanding the CyfroSec GDPR Compliance tool — scoring, category breakdown, catalog provenance, and FAQ.',
  alternates: { canonical: '/documents/gdpr' },
}

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const TOC = [
  { id: 'overview',           label: 'Overview' },
  { id: 'accessing',          label: 'Accessing GDPR Compliance' },
  { id: 'data-scope',         label: 'Data Scope and Source' },
  { id: 'page-overview',      label: 'Page Overview' },
  { id: 'header-controls',    label: 'Header and Controls' },
  { id: 'overall-score',      label: 'Overall Score' },
  { id: 'scan-data-window',   label: 'Scan Data Window' },
  { id: 'category-breakdown', label: 'Category Breakdown' },
  { id: 'severity-filter',    label: 'Severity Filter' },
  { id: 'finding-details',    label: 'Finding Details' },
  { id: 'catalog-provenance', label: 'Catalog Provenance' },
  { id: 'catalog-health',     label: 'Catalog Health' },
  { id: 'widget-vs-page',     label: 'Widget vs Full Page' },
  { id: 'empty-states',       label: 'Empty, Pending, Error States' },
  { id: 'faq',                label: 'FAQ' },
]

export default function GdprPage() {
  return (
    <div className="flex gap-0 w-full max-w-[1600px] mx-auto">

      {/* ── Article ──────────────────────────────────────────────────── */}
      <article className="flex-1 min-w-0 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 w-full max-w-5xl mx-auto">

        <p className="text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand mb-4">
          Security &amp; Compliance
        </p>

        <h1
          className="text-2xl sm:text-3xl lg:text-4xl font-bold cy-text-primary mb-4 sm:mb-6 leading-tight"
          style={{ fontFamily: HEADING_FONT }}
        >
          GDPR Compliance Tool
        </h1>

        <p className="cy-text-secondary leading-relaxed mb-4" id="overview">
          The GDPR Compliance page provides an automated, evidence based assessment of your security posture
          against GDPR oriented control categories.
        </p>
        <p className="cy-text-secondary leading-relaxed mb-10">
          It combines scan evidence, category scoring, finding severity, control catalog provenance and coverage
          metadata so teams can track risk and remediation readiness.
        </p>

        <hr className="cy-border-default mb-10" />

        {/* Accessing */}
        <section id="accessing" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Accessing GDPR Compliance
          </h2>
          <ul className="space-y-2 cy-text-secondary text-sm">
            {[
              'Use the GDPR Compliance widget for a compact summary.',
              'Open the full GDPR Compliance page for category-level findings and catalog details.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Data Scope */}
        <section id="data-scope" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Data Scope and Source
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-3">
            The GDPR report is generated from recent account-group scan submissions, including:
          </p>
          <ul className="space-y-2 cy-text-secondary text-sm mb-4">
            {[
              'Network Discovery data',
              'Fingerprint/vulnerability scan data',
              'Asset Discovery data',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="cy-text-secondary text-sm mb-2">
            By default, the page shows account-group aggregate compliance posture.
          </p>
          <p className="cy-text-secondary text-sm">
            If no account group is selected, the page prompts you to select one.
          </p>
        </section>

        {/* Page Overview */}
        <section id="page-overview" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Page Overview
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-3">
            The full page includes:
          </p>
          <ul className="space-y-2 cy-text-secondary text-sm mb-6">
            {[
              'Header and Controls',
              'Overall Score',
              'Scan Data and Catalog Metadata',
              'Category Breakdown with Drill-Down Findings',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <h3 id="header-controls" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>
            Header and Controls
          </h3>
          <p className="cy-text-secondary text-sm mb-3">
            Top actions:
          </p>
          <ul className="space-y-2 cy-text-secondary text-sm mb-4">
            {[
              'Refresh: Triggers report recalculation for the selected account group and reloads the page data.',
              'Refresh Catalog: Triggers a catalog refresh and reloads report/catalog status.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="cy-text-secondary text-sm">
            The header also shows report timestamp and account-group context.
          </p>
        </section>

        {/* Overall Score */}
        <section id="overall-score" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Overall Score
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-3">
            The top panel displays:
          </p>
          <ul className="space-y-2 cy-text-secondary text-sm mb-6">
            {[
              'Overall score (0-100)',
              'Score label (for example: Excellent, Good, Needs Improvement, Poor, Critical)',
              'Trend delta when historical points are available',
              'Critical, High, and Total finding counts',
              'Evidence coverage percentage',
              'Not-evaluable control count',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <h3 id="scan-data-window" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>
            Scan Data Window
          </h3>
          <p className="cy-text-secondary text-sm mb-3">
            When available, the page displays the report&apos;s scan data time window:
          </p>
          <ul className="space-y-2 cy-text-secondary text-sm">
            {[
              'Window start timestamp',
              'Window end timestamp',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="cy-text-secondary text-sm mt-3">
            This helps confirm the evidence period used for evaluation.
          </p>
        </section>

        {/* Category Breakdown */}
        <section id="category-breakdown" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Category Breakdown
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-3">
            Each category card shows:
          </p>
          <ul className="space-y-2 cy-text-secondary text-sm mb-5">
            {[
              'Category name and GDPR article reference',
              'Category score',
              'Finding count',
              'Severity breakdown chips',
              'Expand/collapse interaction',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="cy-text-secondary text-sm mb-6">
            Categories are sorted by score (lower scores first) on the full page to surface higher-priority gaps.
          </p>

          <h3 id="severity-filter" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>
            Severity Filter
          </h3>
          <p className="cy-text-secondary text-sm mb-3">
            You can filter visible findings by severity:
          </p>
          <ul className="space-y-2 cy-text-secondary text-sm mb-5">
            {['All', 'Critical', 'High', 'Medium', 'Low', 'Info'].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="cy-text-secondary text-sm mb-6">
            Selecting a severity auto-expands categories that contain matching findings.
          </p>

          <h3 id="finding-details" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>
            Finding Details
          </h3>
          <p className="cy-text-secondary text-sm mb-3">
            Expanded findings include:
          </p>
          <ul className="space-y-2 cy-text-secondary text-sm">
            {[
              'Title and affected asset/resource',
              'Severity',
              'GDPR article reference',
              'Description',
              'Remediation guidance',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Catalog Provenance and Health */}
        <section className="mb-10">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Catalog Provenance and Health
          </h2>
          <p className="cy-text-secondary text-sm mb-6">
            The page includes a catalog section to show how controls were evaluated.
          </p>

          <h3 id="catalog-provenance" className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>
            Catalog Provenance
          </h3>
          <p className="cy-text-secondary text-sm mb-3">
            Displays:
          </p>
          <ul className="space-y-2 cy-text-secondary text-sm mb-6">
            {[
              'Catalog version',
              'Catalog generation timestamp',
              'Source summary cards (display name, authority/type, status)',
              'Optional fallback badge and reason when seed fallback is active',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <h3 id="catalog-health" className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>
            Catalog Health
          </h3>
          <p className="cy-text-secondary text-sm mb-3">
            Displays:
          </p>
          <ul className="space-y-2 cy-text-secondary text-sm mb-4">
            {[
              'Control count',
              'Source count',
              'Evaluation mode (Official only or Hybrid)',
              'Sync status',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="cy-text-secondary text-sm">
            This metadata supports auditability and trust in control mapping.
          </p>
        </section>

        {/* Dashboard Widget vs Full Page */}
        <section id="widget-vs-page" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Dashboard Widget vs Full Page
          </h2>

          <h3 className="text-base font-semibold cy-text-primary mb-2" style={{ fontFamily: HEADING_FONT }}>
            Dashboard Widget
          </h3>
          <p className="cy-text-secondary text-sm mb-3">
            The dashboard GDPR card provides a compact snapshot:
          </p>
          <ul className="space-y-2 cy-text-secondary text-sm mb-6">
            {[
              'Donut score',
              'Trend delta',
              'Critical/High/Total quick counters',
              'Category score mini-bars',
              'Manual refresh button',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <h3 className="text-base font-semibold cy-text-primary mb-2" style={{ fontFamily: HEADING_FONT }}>
            Full GDPR Compliance Page
          </h3>
          <p className="cy-text-secondary text-sm mb-3">
            Use the full page for:
          </p>
          <ul className="space-y-2 cy-text-secondary text-sm">
            {[
              'Severity filtering',
              'Category-by-category finding drill-down',
              'Catalog provenance and health',
              'Evidence coverage and not-evaluable controls',
              'Scan data window review',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Empty, Pending, Error States */}
        <section id="empty-states" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Empty, Pending, and Error States
          </h2>

          <h3 className="text-base font-semibold cy-text-primary mb-2" style={{ fontFamily: HEADING_FONT }}>
            No Account Group Selected
          </h3>
          <p className="cy-text-secondary text-sm mb-5">
            Prompt shown to select an account group first.
          </p>

          <h3 className="text-base font-semibold cy-text-primary mb-2" style={{ fontFamily: HEADING_FONT }}>
            No Report Yet
          </h3>
          <p className="cy-text-secondary text-sm mb-5">
            If no report exists yet, the page shows an empty state and allows manual generation via Refresh.
          </p>

          <h3 className="text-base font-semibold cy-text-primary mb-2" style={{ fontFamily: HEADING_FONT }}>
            Pending/Timeout Cases
          </h3>
          <p className="cy-text-secondary text-sm mb-5">
            If processing is still underway or times out, the UI may show a wait-style message indicating report generation is in progress.
          </p>

          <h3 className="text-base font-semibold cy-text-primary mb-2" style={{ fontFamily: HEADING_FONT }}>
            Error State
          </h3>
          <p className="cy-text-secondary text-sm">
            If loading fails, an error panel appears with retry capability.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-5">
            {[
              {
                q: 'What does evidence coverage mean?',
                a: 'It indicates how much of the control set had sufficient scan evidence for evaluation.',
              },
              {
                q: 'What are not-evaluable controls?',
                a: 'Controls that could not be reliably evaluated from the available evidence window.',
              },
              {
                q: 'Why does score sometimes drop after new scans?',
                a: 'New evidence can surface additional findings or change control outcomes.',
              },
              {
                q: 'Why is a fallback catalog shown?',
                a: 'If upstream catalog sync is temporarily unavailable, CyfroSec can use a seed fallback snapshot to keep reporting available.',
              },
            ].map(({ q, a }) => (
              <div key={q}>
                <p className="text-sm font-semibold cy-text-primary mb-1">{q}</p>
                <p className="text-sm cy-text-secondary">{a}</p>
              </div>
            ))}
          </div>
        </section>
      </article>

      {/* ── Right TOC ─────────────────────────────────────────────────── */}
      <aside className="hidden 2xl:block w-56 shrink-0 px-6 pt-10 pb-10">
        <div className="sticky top-10">
          <p className="text-[10px] font-bold uppercase tracking-widest cy-text-muted mb-3">
            On this page
          </p>
          <ul className="space-y-2">
            {TOC.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
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
              Contact support
            </Link>
          </div>
        </div>
      </aside>

    </div>
  )
}
