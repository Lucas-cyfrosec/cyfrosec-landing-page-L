import { PublicPageShell } from '@/app/components/landing/PublicPageShell'
import FinalCTA from '@/app/components/landing/sections/FinalCTA'
import AIChatbot from '@/app/components/landing/AIChatbot'
import { Network, Wifi, ShieldCheck, Globe, GitBranch, AlertTriangle, Clock, Eye, Server } from 'lucide-react'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

export const metadata = { title: 'Network Discovery | CyfroSec' }


const capabilities = [
  { icon: Wifi, title: 'Open Port Detection', description: 'Fast scanning for open ports across your network with reduced noise and high performance. Choose Full mode for comprehensive coverage or Quick mode for targeted, low-overhead runs.' },
  { icon: Globe, title: 'Service Identification', description: 'Maps open ports to known services and protocols, providing the service layer context needed to drive downstream vulnerability detection and analysis.' },
  { icon: GitBranch, title: 'Pipeline Integration', description: 'Automatically feeds discovered port and service data into the Service Fingerprinting and Vulnerability pipelines so every finding is enriched without manual handoff.' },
  { icon: Clock, title: 'Scheduled Scanning', description: 'Runs on a configurable recurring schedule (hourly to daily) for detailed visibility.' },
  { icon: Server, title: 'Multi-Agent Support', description: 'Assign multiple CyfroAgents to a single scan to cover different network segments or provide redundancy if one agent goes offline.' },
]

const pipeline = [
  { step: '01', title: 'Scan Trigger', body: 'The scan fires on its configured schedule. One or more CyfroAgents can run the scan.' },
  { step: '02', title: 'Port Sweep', body: 'Agents sweep the target host or CIDR range across the selected port range. Full mode scans all common ports; Quick mode targets a specific protocol for faster results.' },
  { step: '03', title: 'Service Detection', body: 'Open ports are matched to known services. Protocol probing provide additional service context.' },
  { step: '04', title: 'Pipeline Feed', body: 'Enriched findings are passed automatically to the Service Fingerprinting and vulnerability analysis pipelines for deeper assessment.' },
  { step: '05', title: 'AI Insights', body: 'Cyfro AI Insights generates a prioritized risk summary from the scan results, highlighting the most impactful exposed services.' },
]

const useCases = [
  { icon: Eye, title: 'Continuous Attack Surface Monitoring', body: 'Run Network Discovery on a recurring schedule to detect new services the moment they appear — before attackers do.' },
  { icon: AlertTriangle, title: 'Change Detection', body: 'Compare scan snapshots over time to catch unauthorized port openings, newly exposed services, or unexpected topology changes.' },
  { icon: Server, title: 'Pre-Deployment Verification', body: 'Run a Quick scan after infrastructure changes to confirm that only intended ports and services are reachable from the network.' },
  { icon: ShieldCheck, title: 'Firewall Rule Validation', body: 'Assign agents across different network segments to verify that firewall rules are enforced — detect asymmetry between what should be blocked and what is reachable.' },
]


export default function NetworkDiscoveryPage() {
  return (
    <PublicPageShell>
      {/* Hero */}
      <section className="relative bg-white dark:bg-surface-900 pt-24 pb-20 px-4">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(3,155,224,0.14),transparent)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex size-16 items-center justify-center rounded-2xl bg-primary-500/10 ring-1 ring-primary-500/20">
            <Network className="size-8 text-primary-400" />
          </div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">Solutions</p>
          <h1 className="text-4xl font-extrabold tracking-tight cy-text-primary sm:text-5xl lg:text-6xl" style={{ fontFamily: HEADING_FONT }}>
            Network Discovery
          </h1>
          <p className="mt-5 text-lg leading-relaxed cy-text-secondary max-w-2xl mx-auto">
            Identifies open ports and services across your infrastructure to drive vulnerability detection and analysis.
          </p>
        </div>

      </section>

      {/* Why it matters */}
      <section className="bg-surface-50 dark:bg-surface-950 py-20 px-4">
        <div className="mx-auto max-w-5xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-400 mb-3">The problem</p>
            <h2 className="text-2xl font-bold cy-text-primary sm:text-3xl mb-5" style={{ fontFamily: HEADING_FONT }}>
              You can&apos;t secure what you can&apos;t see
            </h2>
            <p className="text-sm cy-text-secondary leading-relaxed mb-4">
              Most security teams have a partial picture of their network at best. Infrastructure changes constantly — new services are spun up, ports are opened, and configurations drift. By the time a quarterly scan runs, the attack surface has already changed.
            </p>
            <p className="text-sm cy-text-secondary leading-relaxed">
              CyfroSec Network Discovery runs continuously, so your port and service inventory is always current. Every new exposure is detected and fed into the vulnerability pipeline automatically, not weeks later.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { label: 'New port opened without a change ticket', impact: 'Detected within the next scan interval' },
              { label: 'Service version updated mid-cycle', impact: 'Fingerprinting pipeline re-evaluates automatically' },
              { label: 'Firewall rule misconfigured', impact: 'Multi-agent scans reveal the asymmetry' },
            ].map((row) => (
              <div key={row.label} className="rounded-xl border cy-border-default cy-bg-elevated p-4">
                <p className="text-sm font-semibold cy-text-primary">{row.label}</p>
                <p className="mt-1 text-xs text-primary-400">{row.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white dark:bg-surface-900 py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-400 mb-3">Capabilities</p>
          <h2 className="text-2xl font-bold cy-text-primary sm:text-3xl mb-10" style={{ fontFamily: HEADING_FONT }}>
            What Network Discovery does
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => {
              const Icon = cap.icon
              return (
                <div key={cap.title} className="rounded-2xl border cy-border-default cy-bg-muted p-5">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-primary-500/10">
                    <Icon className="size-5 text-primary-400" />
                  </div>
                  <h3 className="mb-2 text-sm font-semibold cy-text-primary">{cap.title}</h3>
                  <p className="text-sm cy-text-secondary leading-relaxed">{cap.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-surface-50 dark:bg-surface-950 py-20 px-4">
        <div className="mx-auto max-w-5xl grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-400 mb-3">How it works</p>
            <h2 className="text-2xl font-bold cy-text-primary sm:text-3xl mb-4" style={{ fontFamily: HEADING_FONT }}>
              From trigger to insight in one pipeline
            </h2>
            <p className="text-sm cy-text-secondary leading-relaxed">
              Every scan follows the same automated path from the initial trigger through port sweeping, service detection, and finally AI-powered prioritization. No manual steps required.
            </p>
          </div>
          <ol className="relative space-y-0 list-none">
            {pipeline.map((item, i, arr) => (
              <li key={item.step} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-500/10 text-xs font-bold text-primary-400 ring-1 ring-primary-500/20">
                    {item.step}
                  </span>
                  {i < arr.length - 1 && <span className="mt-1 w-px flex-1 bg-primary-500/15 mb-1" style={{ minHeight: 28 }} />}
                </div>
                <div className="pb-6">
                  <p className="text-sm font-semibold cy-text-primary">{item.title}</p>
                  <p className="mt-0.5 text-sm cy-text-secondary leading-relaxed">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-white dark:bg-surface-900 py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-400 mb-3">Use Cases</p>
          <h2 className="text-2xl font-bold cy-text-primary sm:text-3xl mb-10" style={{ fontFamily: HEADING_FONT }}>
            When teams rely on Network Discovery
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {useCases.map((uc) => {
              const Icon = uc.icon
              return (
                <div key={uc.title} className="flex gap-4 rounded-2xl border cy-border-default cy-bg-muted p-6">
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
