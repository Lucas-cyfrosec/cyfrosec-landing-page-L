'use client'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const CONTENT = {
  en: {
    category: 'Security & Compliance',
    title: 'GDPR Compliance Tool',
    overview1: 'The GDPR Compliance page provides an automated, evidence based assessment of your security posture against GDPR oriented control categories.',
    overview2: 'It combines scan evidence, category scoring, finding severity, control catalog provenance and coverage metadata so teams can track risk and remediation readiness.',
    accessingTitle: 'Accessing GDPR Compliance',
    accessingItems: [
      'Use the GDPR Compliance widget for a compact summary.',
      'Open the full GDPR Compliance page for category-level findings and catalog details.',
    ],
    scopeTitle: 'Data Scope and Source',
    scopeIntro: 'The GDPR report is generated from recent account-group scan submissions, including:',
    scopeItems: [
      'Network Discovery data',
      'Fingerprint/vulnerability scan data',
      'Asset Discovery data',
    ],
    scopeNote1: 'By default, the page shows account-group aggregate compliance posture.',
    scopeNote2: 'If no account group is selected, the page prompts you to select one.',
    pageTitle: 'Page Overview',
    pageIntro: 'The full page includes:',
    pageItems: [
      'Header and Controls',
      'Overall Score',
      'Scan Data and Catalog Metadata',
      'Category Breakdown with Drill-Down Findings',
    ],
    headerTitle: 'Header and Controls',
    headerIntro: 'Top actions:',
    headerItems: [
      'Refresh: Triggers report recalculation for the selected account group and reloads the page data.',
      'Refresh Catalog: Triggers a catalog refresh and reloads report/catalog status.',
    ],
    headerNote: 'The header also shows report timestamp and account-group context.',
    scoreTitle: 'Overall Score',
    scoreIntro: 'The top panel displays:',
    scoreItems: [
      'Overall score (0-100)',
      'Score label (for example: Excellent, Good, Needs Improvement, Poor, Critical)',
      'Trend delta when historical points are available',
      'Critical, High, and Total finding counts',
      'Evidence coverage percentage',
      'Not-evaluable control count',
    ],
    windowTitle: 'Scan Data Window',
    windowIntro: 'When available, the page displays the report\'s scan data time window:',
    windowItems: ['Window start timestamp', 'Window end timestamp'],
    windowNote: 'This helps confirm the evidence period used for evaluation.',
    categoryTitle: 'Category Breakdown',
    categoryIntro: 'Each category card shows:',
    categoryItems: [
      'Category name and GDPR article reference',
      'Category score',
      'Finding count',
      'Severity breakdown chips',
      'Expand/collapse interaction',
    ],
    categoryNote: 'Categories are sorted by score (lower scores first) on the full page to surface higher-priority gaps.',
    severityTitle: 'Severity Filter',
    severityIntro: 'You can filter visible findings by severity:',
    severityItems: ['All', 'Critical', 'High', 'Medium', 'Low', 'Info'],
    severityNote: 'Selecting a severity auto-expands categories that contain matching findings.',
    detailsTitle: 'Finding Details',
    detailsIntro: 'Expanded findings include:',
    detailsItems: [
      'Title and affected asset/resource',
      'Severity',
      'GDPR article reference',
      'Description',
      'Remediation guidance',
    ],
    catalogWrapTitle: 'Catalog Provenance and Health',
    catalogWrapIntro: 'The page includes a catalog section to show how controls were evaluated.',
    provenanceTitle: 'Catalog Provenance',
    provenanceIntro: 'Displays:',
    provenanceItems: [
      'Catalog version',
      'Catalog generation timestamp',
      'Source summary cards (display name, authority/type, status)',
      'Optional fallback badge and reason when seed fallback is active',
    ],
    healthTitle: 'Catalog Health',
    healthIntro: 'Displays:',
    healthItems: [
      'Control count',
      'Source count',
      'Evaluation mode (Official only or Hybrid)',
      'Sync status',
    ],
    healthNote: 'This metadata supports auditability and trust in control mapping.',
    widgetTitle: 'Widget vs Full Page',
    widgetSubTitle: 'Dashboard Widget',
    widgetIntro: 'The dashboard GDPR card provides a compact snapshot:',
    widgetItems: [
      'Donut score',
      'Trend delta',
      'Critical/High/Total quick counters',
      'Category score mini-bars',
      'Manual refresh button',
    ],
    fullSubTitle: 'Full GDPR Compliance Page',
    fullIntro: 'Use the full page for:',
    fullItems: [
      'Severity filtering',
      'Category-by-category finding drill-down',
      'Catalog provenance and health',
      'Evidence coverage and not-evaluable controls',
      'Scan data window review',
    ],
    statesTitle: 'Empty, Pending, and Error States',
    statesNoGroup: 'No Account Group Selected',
    statesNoGroupBody: 'Prompt shown to select an account group first.',
    statesNoReport: 'No Report Yet',
    statesNoReportBody: 'If no report exists yet, the page shows an empty state and allows manual generation via Refresh.',
    statesPending: 'Pending/Timeout Cases',
    statesPendingBody: 'If processing is still underway or times out, the UI may show a wait-style message indicating report generation is in progress.',
    statesError: 'Error State',
    statesErrorBody: 'If loading fails, an error panel appears with retry capability.',
    faqTitle: 'Frequently Asked Questions',
    faqs: [
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
    ],
    tocTitle: 'On this page',
    tocItems: [
      { id: 'overview', label: 'Overview' },
      { id: 'accessing', label: 'Accessing GDPR Compliance' },
      { id: 'data-scope', label: 'Data Scope and Source' },
      { id: 'page-overview', label: 'Page Overview' },
      { id: 'header-controls', label: 'Header and Controls' },
      { id: 'overall-score', label: 'Overall Score' },
      { id: 'scan-data-window', label: 'Scan Data Window' },
      { id: 'category-breakdown', label: 'Category Breakdown' },
      { id: 'severity-filter', label: 'Severity Filter' },
      { id: 'finding-details', label: 'Finding Details' },
      { id: 'catalog-provenance', label: 'Catalog Provenance' },
      { id: 'catalog-health', label: 'Catalog Health' },
      { id: 'widget-vs-page', label: 'Widget vs Full Page' },
      { id: 'empty-states', label: 'Empty, Pending, Error States' },
      { id: 'faq', label: 'FAQ' },
    ],
    contactSupport: 'Contact support',
  },
}

function NumberedList({
  items,
}: {
  items: string[]
}) {
  return (
    <ol className="space-y-4 cy-text-secondary text-sm">
      {items.map((text, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
          <span className="mt-0.5">{text}</span>
        </li>
      ))}
    </ol>
  )
}

export default function GdprPage() {
  const c = CONTENT.en

  return (
    <div className="flex gap-0 w-full max-w-[1600px] mx-auto">
      <article className="flex-1 min-w-0 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 w-full max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand mb-4">{c.category}</p>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold cy-text-primary mb-4 sm:mb-6 leading-tight" style={{ fontFamily: HEADING_FONT }}>
          {c.title}
        </h1>

        <p className="cy-text-secondary leading-relaxed mb-4" id="overview">{c.overview1}</p>
        <p className="cy-text-secondary leading-relaxed mb-10">{c.overview2}</p>

        <hr className="cy-border-default mb-10" />

        <section id="accessing" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.accessingTitle}</h2>
          <NumberedList items={c.accessingItems} />
        </section>

        <section id="data-scope" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.scopeTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-3">{c.scopeIntro}</p>
          <NumberedList items={c.scopeItems} />
          <p className="cy-text-secondary text-sm mb-2 mt-4">{c.scopeNote1}</p>
          <p className="cy-text-secondary text-sm">{c.scopeNote2}</p>
        </section>

        <section id="page-overview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.pageTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-3">{c.pageIntro}</p>
          <NumberedList items={c.pageItems} />

          <h3 id="header-controls" className="text-base font-semibold cy-text-primary mb-2 mt-8 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>{c.headerTitle}</h3>
          <p className="cy-text-secondary text-sm mb-3">{c.headerIntro}</p>
          <NumberedList items={c.headerItems} />
          <p className="cy-text-secondary text-sm mt-4">{c.headerNote}</p>
        </section>

        <section id="overall-score" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.scoreTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-3">{c.scoreIntro}</p>
          <NumberedList items={c.scoreItems} />

          <h3 id="scan-data-window" className="text-base font-semibold cy-text-primary mb-2 mt-8 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>{c.windowTitle}</h3>
          <p className="cy-text-secondary text-sm mb-3">{c.windowIntro}</p>
          <NumberedList items={c.windowItems} />
          <p className="cy-text-secondary text-sm mt-3">{c.windowNote}</p>
        </section>

        <section id="category-breakdown" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.categoryTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-3">{c.categoryIntro}</p>
          <NumberedList items={c.categoryItems} />
          <p className="cy-text-secondary text-sm mb-6 mt-4">{c.categoryNote}</p>

          <h3 id="severity-filter" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>{c.severityTitle}</h3>
          <p className="cy-text-secondary text-sm mb-3">{c.severityIntro}</p>
          <NumberedList items={c.severityItems} />
          <p className="cy-text-secondary text-sm mb-5 mt-4">{c.severityNote}</p>

          <h3 id="finding-details" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>{c.detailsTitle}</h3>
          <p className="cy-text-secondary text-sm mb-3">{c.detailsIntro}</p>
          <NumberedList items={c.detailsItems} />
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.catalogWrapTitle}</h2>
          <p className="cy-text-secondary text-sm mb-6">{c.catalogWrapIntro}</p>

          <h3 id="catalog-provenance" className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>{c.provenanceTitle}</h3>
          <p className="cy-text-secondary text-sm mb-3">{c.provenanceIntro}</p>
          <NumberedList items={c.provenanceItems} />

          <h3 id="catalog-health" className="text-base font-semibold cy-text-primary mb-3 mt-8 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>{c.healthTitle}</h3>
          <p className="cy-text-secondary text-sm mb-3">{c.healthIntro}</p>
          <NumberedList items={c.healthItems} />
          <p className="cy-text-secondary text-sm mt-4">{c.healthNote}</p>
        </section>

        <section id="widget-vs-page" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.widgetTitle}</h2>
          <h3 className="text-base font-semibold cy-text-primary mb-2" style={{ fontFamily: HEADING_FONT }}>{c.widgetSubTitle}</h3>
          <p className="cy-text-secondary text-sm mb-3">{c.widgetIntro}</p>
          <NumberedList items={c.widgetItems} />

          <h3 className="text-base font-semibold cy-text-primary mb-2 mt-8" style={{ fontFamily: HEADING_FONT }}>{c.fullSubTitle}</h3>
          <p className="cy-text-secondary text-sm mb-3">{c.fullIntro}</p>
          <NumberedList items={c.fullItems} />
        </section>

        <section id="empty-states" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.statesTitle}</h2>
          <h3 className="text-base font-semibold cy-text-primary mb-2" style={{ fontFamily: HEADING_FONT }}>{c.statesNoGroup}</h3>
          <p className="cy-text-secondary text-sm mb-5">{c.statesNoGroupBody}</p>
          <h3 className="text-base font-semibold cy-text-primary mb-2" style={{ fontFamily: HEADING_FONT }}>{c.statesNoReport}</h3>
          <p className="cy-text-secondary text-sm mb-5">{c.statesNoReportBody}</p>
          <h3 className="text-base font-semibold cy-text-primary mb-2" style={{ fontFamily: HEADING_FONT }}>{c.statesPending}</h3>
          <p className="cy-text-secondary text-sm mb-5">{c.statesPendingBody}</p>
          <h3 className="text-base font-semibold cy-text-primary mb-2" style={{ fontFamily: HEADING_FONT }}>{c.statesError}</h3>
          <p className="cy-text-secondary text-sm">{c.statesErrorBody}</p>
        </section>

        <section id="faq" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.faqTitle}</h2>
          <div className="space-y-5">
            {c.faqs.map(({ q, a }) => (
              <div key={q}>
                <p className="text-sm font-semibold cy-text-primary mb-1">{q}</p>
                <p className="text-sm cy-text-secondary">{a}</p>
              </div>
            ))}
          </div>
        </section>
      </article>

      <aside className="hidden 2xl:block w-56 shrink-0 px-6 pt-10 pb-10">
        <div className="sticky top-10">
          <p className="text-[10px] font-bold uppercase tracking-widest cy-text-muted mb-3">{c.tocTitle}</p>
          <ul className="space-y-2">
            {c.tocItems.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className="text-sm cy-text-secondary hover:cy-text-brand transition-colors block">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-6 border-t cy-border-default">
            <Link href="/contact" className="flex items-center gap-1.5 text-xs cy-text-muted hover:cy-text-brand transition-colors">
              <ExternalLink className="h-3.5 w-3.5" />
              <span>{c.contactSupport}</span>
            </Link>
          </div>
        </div>
      </aside>
    </div>
  )
}
