import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'CyfroAI Insights | CyfroSec Documentation',
  description: 'Understanding CyfroAI Insights — executive summaries, prioritized risk lists, and source types.',
  alternates: { canonical: '/documents/ai-insights' },
}

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const TOC = [
  { id: 'overview',          label: 'Overview' },
  { id: 'executive-summary', label: 'Executive Summary' },
  { id: 'prioritized-risks', label: 'Prioritized Risks' },
  { id: 'collapsed-view',    label: 'Collapsed Card View' },
  { id: 'expanded-view',     label: 'Expanded Card View' },
  { id: 'source-types',      label: 'Source Types' },
]

export default function AiInsightsPage() {
  return (
    <div className="flex gap-0 w-full max-w-[1600px] mx-auto">

      {/* ── Article ──────────────────────────────────────────────────── */}
      <article className="flex-1 min-w-0 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 w-full max-w-5xl mx-auto">

        <p className="text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand mb-4">
          CyfroAI Engine
        </p>

        <h1
          className="text-2xl sm:text-3xl lg:text-4xl font-bold cy-text-primary mb-4 sm:mb-6 leading-tight"
          style={{ fontFamily: HEADING_FONT }}
        >
          CyfroAI Insights
        </h1>

        <p className="cy-text-secondary leading-relaxed mb-4" id="overview">
          CyfroAI Insights are generated automatically after a scan interval completes. You do not need to click
          anything to trigger analysis. As long as scans are running and vulnerabilities/misconfigurations/secrets are found, CyfroAI Insights will appear.
        </p>
        <p className="cy-text-secondary leading-relaxed mb-4">
          Our CyfroAI Engine receives the raw scan findings (open ports, detected CVEs, misconfigurations, exposed secrets)
          alongside network topology context (which hosts are reachable from where) and produces:
        </p>
        <ol className="space-y-4 cy-text-secondary text-sm mb-10">
          {[
            'An Executive Summary: An easily understandable overview of the most important security findings from that scan run.',
            'A Prioritized Risk List: Vulnerabilities re-ranked using exposure correlation, not just CVSS severity alone.',
          ].map((text, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                {i + 1}
              </span>
              <span className="mt-0.5">{text}</span>
            </li>
          ))}
        </ol>

        <hr className="cy-border-default mb-10" />

        {/* Executive Summary */}
        <section id="executive-summary" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Executive Summary
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4">
            An easily understandable summary of who is affected and what matters the most at a glance. A gradient card (Brain icon header) containing AI-generated paragraphs that describe:
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-5">
            {[
              'The overall security posture from this scan.',
              'The most significant findings in plain language.',
              'Any patterns or correlations across multiple findings.',
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm">
            CVE IDs mentioned in the summary are automatically linked to the corresponding entry in the Report page. Click any CVE ID to jump directly to its full detail.
          </p>
        </section>

        {/* Prioritized Risks */}
        <section id="prioritized-risks" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Prioritized Risks
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-5">
            A ranked list of the most important vulnerabilities from this scan, sorted by AI-assessed effective risk rather than raw CVSS score alone. Each risk card can be expanded for full detail.
          </p>

          <h3 id="collapsed-view" className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>
            Collapsed card view:
          </h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Element</th>
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Rank', 'AI-assigned priority order (1 = highest risk)'],
                  ['Base Severity', 'Original scanner severity: Critical / High / Medium / Low'],
                  ['Effective Risk', 'AI-adjusted severity after factoring in exposure and reachability'],
                  ['CVE / Finding ID', 'The vulnerability identifier (monospace)'],
                  ['Reachable badge', 'Animated badge shown when the finding is confirmed reachable from outside your local network'],
                  ['Exposure status', 'Exposed (red), Local Only (amber), or Unconfirmed (blue)'],
                  ['Title', 'Short description of the vulnerability'],
                  ['Open in Reports', 'Deep link to the Report page pre-filtered to this specific finding'],
                ].map(([el, desc]) => (
                  <tr key={el} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold">{el}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 id="expanded-view" className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>
            Expanded card view:
          </h3>
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Section</th>
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Target', 'The host or IP address affected'],
                  ['Package', 'The software package or service version where the vulnerability was found'],
                  ['CVSS Score', 'Numeric score from the vulnerability database'],
                  ['Reachability Confidence', 'A 0–100% bar showing how confident the AI is that this finding is network-reachable'],
                  ['Reasoning & Context', 'AI explanation of why this finding was prioritized, including infrastructure context'],
                  ['Recommended Action', 'The single most important remediation step in easily understandable language'],
                  ['OS Remediation Commands', 'Ready to run shell commands for patching, broken out by OS (Linux, macOS, Windows) where available'],
                  ['Correlation Evidence', 'Technical notes on how exposure was assessed (network path data, open port correlation, etc.)'],
                ].map(([section, desc]) => (
                  <tr key={section} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold">{section}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="cy-text-secondary text-sm">
            Use <strong className="cy-text-primary">Expand All</strong> / <strong className="cy-text-primary">Collapse All</strong> at the top of the section to open or close all cards at once.
          </p>
        </section>

        {/* Source Types */}
        <section id="source-types" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Source Types
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4">
            AI Insights can be generated from three types of scans:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Source Type</th>
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Network Discovery', 'Insights derived from network scanning results. Focus on exposed services, open ports, and CVEs mapped to detected service versions.'],
                  ['Asset Discovery', 'Insights from host and device discovery scans. Focus on unrecognized devices, MAC vendor anomalies, and unexpected hosts on the network.'],
                  ['System Vulnerability Findings', 'Insights from service fingerprinting and vulnerability assessment. Focus on package versions, host level CVEs, misconfigurations, TLS issues, and detected secrets.'],
                ].map(([source, desc]) => (
                  <tr key={source} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold">{source}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
