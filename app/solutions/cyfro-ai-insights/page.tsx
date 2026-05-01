import { PublicPageShell } from '@/app/components/landing/PublicPageShell'
import FinalCTA from '@/app/components/landing/sections/FinalCTA'
import AIChatbot from '@/app/components/landing/AIChatbot'
import { Brain, ListOrdered, FileText, Network, Radar, ScanSearch, AlertTriangle, BarChart2, Eye, Zap } from 'lucide-react'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

export const metadata = { title: 'Cyfro AI Insights | CyfroSec' }


const outputs = [
  {
    icon: FileText,
    title: 'Executive Summary',
    description: 'An easily understandable overview of the most important findings from each scan run — written for both engineers and executives.',
    details: [
      'Overall security posture in plain language',
      'Most significant findings and their real-world impact',
      'Patterns and correlations across multiple findings',
      'CVE IDs linked directly to the full report entry',
    ],
  },
  {
    icon: ListOrdered,
    title: 'Prioritized Risk List',
    description: 'Vulnerabilities re-ranked using exposure correlation and network reachability and not just raw CVSS score, so your team always knows what to fix first.',
    details: [
      'AI-assigned priority rank per finding (1 = highest)',
      'Effective risk adjusted for exposure and reachability',
      'Reachability confidence score shown as 0–100% bar',
      'OS-specific remediation commands ready to run',
    ],
  },
]

const riskCardFields = [
  { field: 'Rank', desc: 'AI-assigned priority order: 1 is the highest risk finding in this scan.' },
  { field: 'Base Severity', desc: 'Original scanner severity: Critical / High / Medium / Low.' },
  { field: 'Effective Risk', desc: 'AI-adjusted severity after factoring in network exposure and reachability.' },
  { field: 'Reachable badge', desc: 'Animated badge shown when the finding is confirmed reachable from outside your local network.' },
  { field: 'Exposure status', desc: 'Exposed (red), Local Only (amber), or Unconfirmed (blue).' },
  { field: 'Reasoning & Context', desc: 'AI explanation of why this finding was prioritized, including infrastructure-specific context.' },
  { field: 'Recommended Action', desc: 'The single most important remediation step, in plain language.' },
  { field: 'OS Remediation Commands', desc: 'Ready-to-run shell commands for patching, broken out by OS where available.' },
]

const sources = [
  { icon: Network, type: 'Network Discovery', description: 'Insights on exposed services, open ports, and CVEs mapped to detected service versions and network topology.' },
  { icon: Radar, type: 'Asset Discovery', description: 'Insights from host and device discovery: unrecognized devices, MAC vendor anomalies, and unexpected hosts on the network.' },
  { icon: ScanSearch, type: 'Service Fingerprinting', description: 'Insights from package versions, host-level CVEs, misconfigurations, TLS issues, and detected secrets.' },
]

const useCases = [
  { icon: AlertTriangle, title: 'Triage Without the Noise', body: 'Instead of reviewing hundreds of raw scan findings, start with the AI-ranked top risks. The most impactful, reachable issues surface immediately.' },
  { icon: Eye, title: 'Executive Reporting', body: 'The Executive Summary gives non-technical stakeholders a clear picture of security posture after every scan with no manual report writing required.' },
  { icon: BarChart2, title: 'Reachability-Aware Patching', body: 'Know which CVEs are actually reachable from outside your network before scheduling patch windows. Focus engineering time where it reduces real exposure.' },
  { icon: Zap, title: 'Faster MTTR', body: 'OS-specific remediation commands are included with every prioritized finding so that engineers can act immediately without research or context switching.' },
]


export default function CyfroAIInsightsPage() {
  return (
    <PublicPageShell>
      {/* Hero */}
      <section className="relative bg-white dark:bg-surface-900 pt-24 pb-20 px-4">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(3,155,224,0.14),transparent)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex size-16 items-center justify-center rounded-2xl bg-primary-500/10 ring-1 ring-primary-500/20">
            <Brain className="size-8 text-primary-400" />
          </div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">Solutions</p>
          <h1 className="text-4xl font-extrabold tracking-tight cy-text-primary sm:text-5xl lg:text-6xl" style={{ fontFamily: HEADING_FONT }}>
            Cyfro AI Insights
          </h1>
          <p className="mt-5 text-lg leading-relaxed cy-text-secondary max-w-2xl mx-auto">
            The Cyfro AI Engine receives raw findings alongside network topology context to produce prioritized, actionable security intelligence your team can act on immediately.
          </p>
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-surface-50 dark:bg-surface-950 py-20 px-4">
        <div className="mx-auto max-w-5xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-400 mb-3">The problem</p>
            <h2 className="text-2xl font-bold cy-text-primary sm:text-3xl mb-5" style={{ fontFamily: HEADING_FONT }}>
              CVSS scores don&apos;t reflect your environment
            </h2>
            <p className="text-sm cy-text-secondary leading-relaxed mb-4">
              Traditional security tools produce long lists of findings sorted by CVSS, a static score that knows nothing about your network topology, which services are actually reachable, or which assets are business-critical.
            </p>
            <p className="text-sm cy-text-secondary leading-relaxed">
              Cyfro AI Insights re-ranks every finding using your actual infrastructure context like exposure, reachability, correlation — so engineers spend time on what genuinely reduces risk, not what scores highest on paper.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { label: 'High CVSS score on isolated internal server', impact: 'Effective Risk downgraded, not reachable' },
              { label: 'Medium CVSS score on internet-facing service', impact: 'Effective Risk elevated, confirmed exposed' },
              { label: '200+ raw findings from service fingerprinting scan', impact: 'AI surfaces top 5 that actually matter' },
            ].map((row) => (
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
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-400 mb-3">What you get</p>
          <h2 className="text-2xl font-bold cy-text-primary sm:text-3xl mb-10" style={{ fontFamily: HEADING_FONT }}>Two outputs, every scan</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {outputs.map((output) => {
              const Icon = output.icon
              return (
                <div key={output.title} className="rounded-2xl border cy-border-default cy-bg-muted p-6">
                  <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-primary-500/10">
                    <Icon className="size-6 text-primary-400" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold cy-text-primary" style={{ fontFamily: HEADING_FONT }}>{output.title}</h3>
                  <p className="text-sm cy-text-secondary leading-relaxed mb-4">{output.description}</p>
                  <ul className="space-y-2">
                    {output.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm cy-text-secondary">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary-400" />
                        {d}
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
          <h2 className="text-2xl font-bold cy-text-primary sm:text-3xl mb-4" style={{ fontFamily: HEADING_FONT }}>Every finding, fully explained</h2>
          <p className="text-sm cy-text-secondary mb-8 max-w-2xl">Each prioritized risk card gives you complete context, not just a severity badge. </p>
          <div className="divide-y cy-border-default rounded-2xl border cy-border-default overflow-hidden">
            {riskCardFields.map((row, i) => (
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
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-400 mb-3">Source Types</p>
          <h2 className="text-2xl font-bold cy-text-primary sm:text-3xl mb-10" style={{ fontFamily: HEADING_FONT }}>Insights across all scan types</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {sources.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.type} className="rounded-2xl border cy-border-default cy-bg-muted p-5">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-primary-500/10">
                    <Icon className="size-5 text-primary-400" />
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
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-400 mb-3">Use Cases</p>
          <h2 className="text-2xl font-bold cy-text-primary sm:text-3xl mb-10" style={{ fontFamily: HEADING_FONT }}>When teams rely on Cyfro AI Insights</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {useCases.map((uc) => {
              const Icon = uc.icon
              return (
                <div key={uc.title} className="flex gap-4 rounded-2xl border cy-border-default cy-bg-elevated p-6">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-500/10">
                    <Icon className="size-5 text-primary-400" />
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
