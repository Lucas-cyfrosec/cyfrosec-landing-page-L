import { PublicPageShell } from '@/app/components/landing/PublicPageShell'
import FinalCTA from '@/app/components/landing/sections/FinalCTA'
import AIChatbot from '@/app/components/landing/AIChatbot'
import { ScanSearch, ShieldAlert, KeyRound, Settings, FileSearch, Eye, AlertTriangle, RefreshCw, Code } from 'lucide-react'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

export const metadata = { title: 'Service Fingerprinting | CyfroSec' }


const whatIsChecked = [
  { icon: ShieldAlert, title: 'Known CVEs', description: 'Maps installed package and service versions against vulnerability databases and advisories to surface known exposures with CVSS scores and remediation guidance.' },
  { icon: Settings, title: 'Misconfigurations', description: 'Detects weak TLS ciphers, overly permissive storage buckets, default credentials, and other infrastructure configuration issues that expose risk.' },
  { icon: KeyRound, title: 'Exposed Secrets', description: 'Scans code and configuration files for hardcoded API keys, private keys, tokens, and other sensitive credentials using targeted detectors and regex patterns.' },
  { icon: Code, title: 'Package Inventory', description: 'Collects a complete software bill of materials (SBOM) from hosts and images which are the foundation for accurate CVE mapping and dependency tracking.' },
  { icon: Eye, title: 'TLS & Certificate Checks', description: 'Validates certificate expiry, cipher strength, and protocol version across all detected HTTPS and TLS-secured services.' },
  { icon: FileSearch, title: 'Configuration Audits', description: 'Runs structured configuration checks against common services such as databases, web servers, SSH to identify insecure default settings.' },
]

const detectionSteps = [
  { step: '01', title: 'Fingerprinting', body: 'Collects package lists, service versions, and signatures from hosts and container images to build a complete software inventory.' },
  { step: '02', title: 'Vulnerability Mapping', body: 'Matches every package and service version against CVE databases and security advisories. Each match produces a finding with CVSS score and description when available.' },
  { step: '03', title: 'Misconfiguration Checks', body: 'Runs configuration audits and TLS/certificate checks. Findings cover cipher suites, certificate expiry, permission settings, and default credentials.' },
  { step: '04', title: 'Secrets Scanning', body: 'Runs targeted detectors and regex checks across code and configuration artifacts. Matches are reported with the file path and surrounding context as evidence.' },
  { step: '05', title: 'Evidence & Remediation', body: 'Every finding includes clear evidence llike file path, package details, or command output alongside actionable remediation steps like patch, config change, or credential rotation etc...' },
  { step: '06', title: 'AI Prioritization', body: 'Cyfro AI Insights re-ranks findings by effective risk using exposure correlation and reachability — so your team focuses on what matters most, not just the highest CVSS score.' },
]

const useCases = [
  { icon: ShieldAlert, title: 'Vulnerability Management', body: 'Get a continuous, up-to-date view of CVEs in your installed packages and services — mapped to real assets, not just a theoretical software list.' },
  { icon: KeyRound, title: 'Secret Sprawl Detection', body: 'Find hardcoded credentials before attackers do. Service Fingerprinting scans configuration files, environment files, and code artifacts across your fleet.' },
  { icon: Settings, title: 'Compliance Hardening', body: 'Identify configuration drift against security baselines — weak TLS, default credentials, overly permissive settings — and produce evidence for compliance audits.' },
  { icon: RefreshCw, title: 'Patch Prioritization', body: 'Know which CVEs are exploitable and reachable from outside your network, so patch schedules are driven by actual risk rather than scanner severity alone.' },
]


export default function ServiceFingerprintingPage() {
  return (
    <PublicPageShell>
      {/* Hero */}
      <section className="relative bg-white dark:bg-surface-900 pt-24 pb-20 px-4">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(3,155,224,0.14),transparent)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex size-16 items-center justify-center rounded-2xl bg-primary-500/10 ring-1 ring-primary-500/20">
            <ScanSearch className="size-8 text-primary-400" />
          </div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">Solutions</p>
          <h1 className="text-4xl font-extrabold tracking-tight cy-text-primary sm:text-5xl lg:text-6xl" style={{ fontFamily: HEADING_FONT }}>
            Service Fingerprinting
          </h1>
          <p className="mt-5 text-lg leading-relaxed cy-text-secondary max-w-2xl mx-auto">
            Assesses your security posture by identifying known CVEs in installed packages and services, detecting common misconfigurations, and scanning for exposed secrets along with evidence and actionable remediation steps for every finding.
          </p>
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-surface-50 dark:bg-surface-950 py-20 px-4">
        <div className="mx-auto max-w-5xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-400 mb-3">The problem</p>
            <h2 className="text-2xl font-bold cy-text-primary sm:text-3xl mb-5" style={{ fontFamily: HEADING_FONT }}>
              Open ports don&apos;t tell the whole story
            </h2>
            <p className="text-sm cy-text-secondary leading-relaxed mb-4">
              Knowing that port 443 is open tells you almost nothing about your actual risk. The real questions are: What version is running? Is it patched? Are there secrets in the config? Are the TLS settings secure?
            </p>
            <p className="text-sm cy-text-secondary leading-relaxed">
              Service Fingerprinting goes beneath the network layer to assess what is actually installed and configured on your hosts — turning raw port data into actionable vulnerability intelligence.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { label: 'Outdated package with known CVE', impact: 'Mapped to CVSS score and remediation step' },
              { label: 'Hardcoded API key in config file', impact: 'Detected with file path as evidence' },
              { label: 'Weak TLS cipher on HTTPS service', impact: 'Flagged in misconfiguration audit' },
            ].map((row) => (
              <div key={row.label} className="rounded-xl border cy-border-default cy-bg-elevated p-4">
                <p className="text-sm font-semibold cy-text-primary">{row.label}</p>
                <p className="mt-1 text-xs text-primary-400">{row.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is checked */}
      <section className="bg-white dark:bg-surface-900 py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-400 mb-3">Coverage</p>
          <h2 className="text-2xl font-bold cy-text-primary sm:text-3xl mb-10" style={{ fontFamily: HEADING_FONT }}>What gets checked</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whatIsChecked.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-2xl border cy-border-default cy-bg-muted p-5">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-primary-500/10">
                    <Icon className="size-5 text-primary-400" />
                  </div>
                  <h3 className="mb-2 text-sm font-semibold cy-text-primary">{item.title}</h3>
                  <p className="text-sm cy-text-secondary leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detection process */}
      <section className="bg-surface-50 dark:bg-surface-950 py-20 px-4">
        <div className="mx-auto max-w-5xl grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-400 mb-3">Detection Process</p>
            <h2 className="text-2xl font-bold cy-text-primary sm:text-3xl mb-4" style={{ fontFamily: HEADING_FONT }}>From collection to prioritized finding</h2>
            <p className="text-sm cy-text-secondary leading-relaxed">
              Every Service Fingerprinting scan follows a structured pipeline from collecting raw software inventory through vulnerability mapping and misconfiguration checks, all the way to AI-prioritized findings your team can act on immediately.
            </p>
          </div>
          <ol className="relative space-y-0 list-none">
            {detectionSteps.map((item, i, arr) => (
              <li key={item.step} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-500/10 text-xs font-bold text-primary-400 ring-1 ring-primary-500/20">{item.step}</span>
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
          <h2 className="text-2xl font-bold cy-text-primary sm:text-3xl mb-10" style={{ fontFamily: HEADING_FONT }}>When teams rely on Service Fingerprinting</h2>
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
