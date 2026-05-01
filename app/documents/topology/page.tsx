import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Asset Topology Diagram | CyfroSec Documentation',
  description: 'Using the Asset Topology Diagram in CyfroSec — filters, graph controls, asset detail panel, and correlation behavior.',
  alternates: { canonical: '/documents/topology' },
}

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const TOC = [
  { id: 'overview',            label: 'Overview' },
  { id: 'accessing',           label: 'Accessing the Topology View' },
  { id: 'desktop',             label: 'Desktop Experience' },
  { id: 'toolbar',             label: 'Toolbar Summary Chips' },
  { id: 'filters',             label: 'Filters' },
  { id: 'graph-controls',      label: 'Graph Controls' },
  { id: 'asset-detail',        label: 'Asset Detail Panel' },
  { id: 'port-evidence',       label: 'Port Evidence' },
  { id: 'fingerprint-summary', label: 'Fingerprint Summary' },
  { id: 'ai-insights-panel',   label: 'AI Insights' },
  { id: 'top-risks',           label: 'Top Risks' },
  { id: 'correlation',         label: 'Correlation Behavior' },
]

export default function TopologyPage() {
  return (
    <div className="flex gap-0 w-full max-w-[1600px] mx-auto">

      {/* ── Article ──────────────────────────────────────────────────── */}
      <article className="flex-1 min-w-0 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 w-full max-w-5xl mx-auto">

        <p className="text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand mb-4">
          Platform Guide
        </p>

        <h1
          className="text-2xl sm:text-3xl lg:text-4xl font-bold cy-text-primary mb-4 sm:mb-6 leading-tight"
          style={{ fontFamily: HEADING_FONT }}
        >
          Asset Topology Diagram
        </h1>

        <p className="cy-text-secondary leading-relaxed mb-4" id="overview">
          The Asset Topology Diagram gives you a unified network view of discovered assets and their correlated
          security context.
        </p>
        <p className="cy-text-secondary leading-relaxed mb-4">
          It combines:
        </p>
        <ul className="space-y-2 cy-text-secondary text-sm mb-10">
          {[
            'Discovered topology relationships',
            'Open-port evidence',
            'Fingerprint summaries',
            'CyfroAI insight highlights',
            'Ranked risk context',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <hr className="cy-border-default mb-10" />

        {/* Accessing */}
        <section id="accessing" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Accessing the Topology View
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-3 text-sm">
            Route(on-premise):
          </p>
          <div className="rounded-xl border cy-border-default overflow-hidden mb-4">
            <pre
              className="p-4 text-sm font-mono cy-text-primary overflow-x-auto leading-relaxed"
              style={{ background: 'var(--bg-canvas)' }}
            >
              app.localhost:8080/topology
            </pre>
          </div>
          <p className="cy-text-secondary leading-relaxed mb-2">
            The page loads topology data for the currently selected account group.
          </p>
          <p className="cy-text-secondary leading-relaxed">
            If no topology data exists yet, the page shows an empty state with guidance to run discovery/scanning first.
          </p>
        </section>

        {/* Desktop */}
        <section id="desktop" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Desktop Experience
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-3">
            On desktop, topology renders as an interactive workspace with:
          </p>
          <ul className="space-y-2 cy-text-secondary text-sm">
            {[
              'Toolbar and filters',
              'Interactive graph canvas',
              'Integrated asset detail drawer',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Toolbar */}
        <section id="toolbar" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Toolbar Summary Chips
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-3">
            The top summary row shows current snapshot counts:
          </p>
          <ul className="space-y-2 cy-text-secondary text-sm mb-4">
            {[
              'Assets',
              'Subnets',
              'Ports',
              'Fingerprint',
              'CyfroAI Insights',
              'Critical',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="cy-text-secondary text-sm">
            It also shows the snapshot generation timestamp and a <strong className="cy-text-primary">Refresh</strong> action.
          </p>
        </section>

        {/* Filters */}
        <section id="filters" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Filters
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-3">
            The filter toolbar supports:
          </p>
          <ul className="space-y-2 cy-text-secondary text-sm">
            {[
              'Search (IP, hostname, service, CVE, vendor, AI text)',
              'Subnet selector',
              'Risk only toggle',
              'Time window selector (7d, 14d, 30d, 90d)',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Graph Controls */}
        <section id="graph-controls" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Graph Controls
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-3">
            The canvas includes:
          </p>
          <ul className="space-y-2 cy-text-secondary text-sm">
            {[
              'Fit (fit graph to viewport)',
              'Reflow (re-run layout)',
              'Zoom controls',
              'Fullscreen toggle',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Asset Detail Panel */}
        <section id="asset-detail" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Asset Detail Panel
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-3">
            Selecting an asset opens a detail panel with structured sections:
          </p>
          <ul className="space-y-2 cy-text-secondary text-sm mb-6">
            {[
              'Asset metadata',
              'Port Evidence',
              'Fingerprint Summary',
              'AI Insights',
              'Top Risks',
              'Correlation Notes',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <h3 id="port-evidence" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>
            Port Evidence
          </h3>
          <p className="cy-text-secondary text-sm mb-3">
            Shows correlated service observations such as:
          </p>
          <ul className="space-y-2 cy-text-secondary text-sm mb-6">
            {[
              'Port/protocol',
              'Service or product hints',
              'State and severity context',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <h3 id="fingerprint-summary" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>
            Fingerprint Summary
          </h3>
          <p className="cy-text-secondary text-sm mb-3">
            Shows fingerprint correlation details including:
          </p>
          <ul className="space-y-2 cy-text-secondary text-sm mb-6">
            {[
              'Target identity',
              'Highest severity',
              'Vulnerability count',
              'Misconfiguration/secret counts',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <h3 id="ai-insights-panel" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>
            AI Insights
          </h3>
          <p className="cy-text-secondary text-sm mb-3">
            Shows asset-linked AI summaries with:
          </p>
          <ul className="space-y-2 cy-text-secondary text-sm mb-4">
            {[
              'Source type',
              'Timestamp',
              'Highest risk badge',
              'Short summary lines',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="cy-text-secondary text-sm mb-6">
            The panel includes a direct link to the full AI page for deeper review.
          </p>

          <h3 id="top-risks" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>
            Top Risks
          </h3>
          <p className="cy-text-secondary text-sm mb-3">
            Lists prioritized risks with:
          </p>
          <ul className="space-y-2 cy-text-secondary text-sm">
            {[
              'Title',
              'Vulnerability/package/target context',
              'Effective risk level',
              'AI-provided reasoning',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Correlation */}
        <section id="correlation" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Correlation Behavior
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4">
            CyfroSec uses conservative correlation rules. Evidence is attached to an asset only when identity mapping is reliable.
          </p>
          <p className="cy-text-secondary leading-relaxed mb-4">
            If a finding cannot be safely matched, it is kept separate from direct asset attribution to avoid false linkage.
          </p>
          <p className="cy-text-secondary text-sm mb-3">
            Examples that commonly require additional context:
          </p>
          <ul className="space-y-2 cy-text-secondary text-sm">
            {[
              'Generic or filesystem fingerprint targets',
              'Scan artifacts without host identity metadata',
              'Ambiguous multi-host correlation paths',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
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
