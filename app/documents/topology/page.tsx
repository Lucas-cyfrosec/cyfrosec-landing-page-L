'use client'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const CONTENT = {
  en: {
    category: 'Platform Guide',
    title: 'Asset Topology Diagram',
    overview1: 'The Asset Topology Diagram gives you a unified network view of discovered assets and their correlated security context.',
    overview2: 'It combines:',
    overviewItems: [
      'Discovered topology relationships',
      'Open-port evidence',
      'Fingerprint summaries',
      'CyfroAI insight highlights',
      'Ranked risk context',
    ],
    accessingTitle: 'Accessing the Topology View',
    accessingBody1: 'The page loads topology data for the currently selected account group.',
    accessingBody2: 'If no topology data exists yet, the page shows an empty state with guidance to run discovery/scanning first.',
    desktopTitle: 'Desktop Experience',
    desktopIntro: 'On desktop, topology renders as an interactive workspace with:',
    desktopItems: [
      'Toolbar and filters',
      'Interactive graph canvas',
      'Integrated asset detail drawer',
    ],
    toolbarTitle: 'Toolbar Summary Chips',
    toolbarIntro: 'The top summary row shows current snapshot counts:',
    toolbarItems: ['Assets', 'Subnets', 'Ports', 'Fingerprint', 'CyfroAI Insights', 'Critical'],
    toolbarNote: 'It also shows the snapshot generation timestamp and a Refresh action.',
    filtersTitle: 'Filters',
    filtersIntro: 'The filter toolbar supports:',
    filtersItems: [
      'Search (IP, hostname, service, CVE, vendor, AI text)',
      'Subnet selector',
      'Risk only toggle',
      'Time window selector (7d, 14d, 30d, 90d)',
    ],
    graphTitle: 'Graph Controls',
    graphIntro: 'The canvas includes:',
    graphItems: [
      'Fit (fit graph to viewport)',
      'Reflow (re-run layout)',
      'Zoom controls',
      'Fullscreen toggle',
    ],
    assetTitle: 'Asset Detail Panel',
    assetIntro: 'Selecting an asset opens a detail panel with structured sections:',
    assetItems: [
      'Asset metadata',
      'Port Evidence',
      'Fingerprint Summary',
      'AI Insights',
      'Top Risks',
      'Correlation Notes',
    ],
    portTitle: 'Port Evidence',
    portIntro: 'Shows correlated service observations such as:',
    portItems: [
      'Port/protocol',
      'Service or product hints',
      'State and severity context',
    ],
    fingerprintTitle: 'Fingerprint Summary',
    fingerprintIntro: 'Shows fingerprint correlation details including:',
    fingerprintItems: [
      'Target identity',
      'Highest severity',
      'Vulnerability count',
      'Misconfiguration/secret counts',
    ],
    aiTitle: 'AI Insights',
    aiIntro: 'Shows asset-linked AI summaries with:',
    aiItems: [
      'Source type',
      'Timestamp',
      'Highest risk badge',
      'Short summary lines',
    ],
    aiNote: 'The panel includes a direct link to the full AI page for deeper review.',
    risksTitle: 'Top Risks',
    risksIntro: 'Lists prioritized risks with:',
    risksItems: [
      'Title',
      'Vulnerability/package/target context',
      'Effective risk level',
      'AI-provided reasoning',
    ],
    correlationTitle: 'Correlation Behavior',
    correlationBody1: 'CyfroSec uses conservative correlation rules. Evidence is attached to an asset only when identity mapping is reliable.',
    correlationBody2: 'If a finding cannot be safely matched, it is kept separate from direct asset attribution to avoid false linkage.',
    correlationIntro: 'Examples that commonly require additional context:',
    correlationItems: [
      'Generic or filesystem fingerprint targets',
      'Scan artifacts without host identity metadata',
      'Ambiguous multi-host correlation paths',
    ],
    tocTitle: 'On this page',
    tocItems: [
      { id: 'overview', label: 'Overview' },
      { id: 'accessing', label: 'Accessing the Topology View' },
      { id: 'desktop', label: 'Desktop Experience' },
      { id: 'toolbar', label: 'Toolbar Summary Chips' },
      { id: 'filters', label: 'Filters' },
      { id: 'graph-controls', label: 'Graph Controls' },
      { id: 'asset-detail', label: 'Asset Detail Panel' },
      { id: 'port-evidence', label: 'Port Evidence' },
      { id: 'fingerprint-summary', label: 'Fingerprint Summary' },
      { id: 'ai-insights-panel', label: 'AI Insights' },
      { id: 'top-risks', label: 'Top Risks' },
      { id: 'correlation', label: 'Correlation Behavior' },
    ],
    contactSupport: 'Contact support',
  },
}

export default function TopologyPage() {
  const c = CONTENT.en

  return (
    <div className="flex gap-0 w-full max-w-[1600px] mx-auto">
      <article className="flex-1 min-w-0 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 w-full max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand mb-4">
          {c.category}
        </p>

        <h1
          className="text-2xl sm:text-3xl lg:text-4xl font-bold cy-text-primary mb-4 sm:mb-6 leading-tight"
          style={{ fontFamily: HEADING_FONT }}
         
        >
          {c.title}
        </h1>

        <p className="cy-text-secondary leading-relaxed mb-4" id="overview">
          {c.overview1}
        </p>
        <p className="cy-text-secondary leading-relaxed mb-4">
          {c.overview2}
        </p>
        <ol className="space-y-4 cy-text-secondary text-sm mb-10">
          {c.overviewItems.map((text, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
              <span className="mt-0.5">{text}</span>
            </li>
          ))}
        </ol>

        <hr className="cy-border-default mb-10" />

        <section id="accessing" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.accessingTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-2">{c.accessingBody1}</p>
          <p className="cy-text-secondary leading-relaxed">{c.accessingBody2}</p>
        </section>

        <section id="desktop" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.desktopTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-3">{c.desktopIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.desktopItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="toolbar" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.toolbarTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-3">{c.toolbarIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-4">
            {c.toolbarItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm">{c.toolbarNote}</p>
        </section>

        <section id="filters" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.filtersTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-3">{c.filtersIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.filtersItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="graph-controls" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.graphTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-3">{c.graphIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.graphItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="asset-detail" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.assetTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-3">{c.assetIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-6">
            {c.assetItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>

          <h3 id="port-evidence" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>{c.portTitle}</h3>
          <p className="cy-text-secondary text-sm mb-3">{c.portIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-6">
            {c.portItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>

          <h3 id="fingerprint-summary" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>{c.fingerprintTitle}</h3>
          <p className="cy-text-secondary text-sm mb-3">{c.fingerprintIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-6">
            {c.fingerprintItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>

          <h3 id="ai-insights-panel" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>{c.aiTitle}</h3>
          <p className="cy-text-secondary text-sm mb-3">{c.aiIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-4">
            {c.aiItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm mb-6">{c.aiNote}</p>

          <h3 id="top-risks" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>{c.risksTitle}</h3>
          <p className="cy-text-secondary text-sm mb-3">{c.risksIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.risksItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="correlation" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.correlationTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-4">{c.correlationBody1}</p>
          <p className="cy-text-secondary leading-relaxed mb-4">{c.correlationBody2}</p>
          <p className="cy-text-secondary text-sm mb-3">{c.correlationIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.correlationItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
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
