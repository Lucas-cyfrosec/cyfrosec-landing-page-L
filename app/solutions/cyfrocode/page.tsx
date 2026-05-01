import { PublicPageShell } from '@/app/components/landing/PublicPageShell'
import FinalCTA from '@/app/components/landing/sections/FinalCTA'
import AIChatbot from '@/app/components/landing/AIChatbot'
import {
  Code2,
  Github,
  RefreshCw,
  ScanLine,
  AlertTriangle,
  Sparkles,
  GitPullRequest,
  EyeOff,
  ShieldCheck,
  Layers,
  Filter,
  GitBranch,
} from 'lucide-react'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

export const metadata = { title: 'CyfroCode | CyfroSec' }

const capabilities = [
  {
    icon: Github,
    title: 'GitHub App Integration',
    description:
      'Connect your organisation\'s GitHub account in a single authorisation flow. CyfroSec installs as a GitHub App and automatically syncs every repository you grant access to.',
  },
  {
    icon: Layers,
    title: 'Rich Repository Metadata',
    description:
      'Each synced repository surfaces its default branch, auto-detected languages and frameworks, and tech indicators for Docker, Terraform, and GitHub Actions — no manual tagging required.',
  },
  {
    icon: ScanLine,
    title: 'One-Click Security Scans',
    description:
      'Queue a scan against any repository\'s default branch with a single click. Scans progress through queued → running → completed states and are tracked in the Recent Scans panel.',
  },
  {
    icon: Filter,
    title: 'Grouped Issues & Raw Matches',
    description:
      'View findings as deduplicated grouped issues by vulnerability type, or switch to raw matches to inspect every affected line of code individually — both views are available side by side.',
  },
  {
    icon: Sparkles,
    title: 'AI Explanations & Remediation',
    description:
      'CyfroAssistant automatically explains each vulnerability in plain language, providing contextual reasoning for why it is a risk and step-by-step remediation guidance on demand.',
  },
  {
    icon: GitPullRequest,
    title: 'Automated Patch Proposals',
    description:
      'For supported vulnerabilities, generate an AI-driven code patch, review the diff in-browser, and approve it to push a ready-to-merge branch directly back to GitHub.',
  },
]

const pipeline = [
  {
    step: '01',
    title: 'Connect GitHub',
    body: 'Authorise the CyfroSec GitHub App from the CyfroCode dashboard. Repositories are synced automatically once the app is installed on your organisation.',
  },
  {
    step: '02',
    title: 'Sync Repositories',
    body: 'CyfroSec reads your repository list and enriches each entry with language detection, framework identification, and tech stack badges — Docker, Terraform, GitHub Actions.',
  },
  {
    step: '03',
    title: 'Queue a Scan',
    body: 'Select any repository and click Queue Scan. The scan targets the default branch and is processed by the CyfroSec analysis engine, which checks for known vulnerability patterns.',
  },
  {
    step: '04',
    title: 'Review Findings',
    body: 'Once complete, open the scan detail page to explore metrics, apply severity filters, and drill into individual findings with source file, affected lines, and AI-generated context.',
  },
  {
    step: '05',
    title: 'Generate & Approve a Patch',
    body: 'Click Generate Patch on any supported finding. Review the proposed diff, approve to push a remediation branch to GitHub, or suppress false positives to keep your results clean.',
  },
]

const useCases = [
  {
    icon: ShieldCheck,
    title: 'Shift-Left Security',
    body: 'Surface vulnerabilities during development rather than post-deployment. Developers get actionable findings and AI-generated fixes without leaving the CyfroSec portal.',
  },
  {
    icon: RefreshCw,
    title: 'Continuous Repository Audits',
    body: 'Re-queue scans after every major merge or release to maintain a continuously updated picture of your code security posture across all connected repositories.',
  },
  {
    icon: GitBranch,
    title: 'Friction-Free Remediation',
    body: 'Approved patches are pushed directly to a new GitHub branch, ready for a Pull Request review. No context-switching, no manual patch authoring, no copy-pasting diffs.',
  },
  {
    icon: EyeOff,
    title: 'False Positive Management',
    body: 'Suppress findings that represent accepted risk or known false positives. Suppressed issues are excluded from future scan results to keep noise low and signal high.',
  },
]


export default function CyfroCodePage() {
  return (
    <PublicPageShell>
      {/* Hero */}
      <section className="relative bg-white dark:bg-surface-900 pt-24 pb-20 px-4">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(3,155,224,0.14),transparent)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex size-16 items-center justify-center rounded-2xl bg-primary-500/10 ring-1 ring-primary-500/20">
            <Code2 className="size-8 text-primary-400" />
          </div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">Solutions</p>
          <h1 className="text-4xl font-extrabold tracking-tight cy-text-primary sm:text-5xl lg:text-6xl" style={{ fontFamily: HEADING_FONT }}>
            CyfroCode
          </h1>
          <p className="mt-5 text-lg leading-relaxed cy-text-secondary max-w-2xl mx-auto">
            A comprehensive code security workspace embedded directly within CyfroSec. Connect your GitHub repositories, run automated security scans, and generate AI-driven remediation patches — all without leaving the platform.
          </p>
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-surface-50 dark:bg-surface-950 py-20 px-4">
        <div className="mx-auto max-w-5xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-400 mb-3">The problem</p>
            <h2 className="text-2xl font-bold cy-text-primary sm:text-3xl mb-5" style={{ fontFamily: HEADING_FONT }}>
              Code vulnerabilities found late cost the most to fix
            </h2>
            <p className="text-sm cy-text-secondary leading-relaxed mb-4">
              Most teams scan code in separate, disconnected tools — or not at all. Findings are emailed in reports, triaged in spreadsheets, and patched weeks after introduction. By then, the code is in production.
            </p>
            <p className="text-sm cy-text-secondary leading-relaxed mb-4">
              CyfroCode brings repository scanning, AI-powered analysis, and patch generation into the same platform you already use for infrastructure and endpoint security. One platform, one workflow, zero context-switching.
            </p>
            <p className="text-sm cy-text-secondary leading-relaxed">
              Developers and security teams share a single source of truth — from the moment a vulnerability is detected to the moment a fix is merged.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { label: 'Vulnerability introduced in a dependency update', impact: 'Detected on next queued scan' },
              { label: 'Critical finding buried in a long report', impact: 'Surfaced with AI context and severity filter' },
              { label: 'Dev needs a fix but lacks security expertise', impact: 'AI patch generated and pushed to GitHub branch' },
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
            Everything from repository to remediation
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
              From GitHub connection to merged fix
            </h2>
            <p className="text-sm cy-text-secondary leading-relaxed">
              CyfroCode handles the entire lifecycle — connecting your repositories, running scans, surfacing AI-explained findings, and pushing approved patches back to GitHub — through a single, unified workflow inside CyfroSec.
            </p>
          </div>
          <ol className="relative space-y-0 list-none">
            {pipeline.map((item, i, arr) => (
              <li key={item.step} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-500/10 text-xs font-bold text-primary-400 ring-1 ring-primary-500/20">
                    {item.step}
                  </span>
                  {i < arr.length - 1 && (
                    <span className="mt-1 w-px flex-1 bg-primary-500/15 mb-1" style={{ minHeight: 28 }} />
                  )}
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

      {/* Findings detail */}
      <section className="bg-white dark:bg-surface-900 py-20 px-4">
        <div className="mx-auto max-w-5xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-400 mb-3">Findings & AI Explanations</p>
            <h2 className="text-2xl font-bold cy-text-primary sm:text-3xl mb-5" style={{ fontFamily: HEADING_FONT }}>
              Deep context for every vulnerability
            </h2>
            <p className="text-sm cy-text-secondary leading-relaxed mb-4">
              Each scan result goes beyond a list of CVEs. CyfroCode presents findings in two complementary views: grouped issues deduplicated by vulnerability type, and raw matches showing every specific line of code affected.
            </p>
            <p className="text-sm cy-text-secondary leading-relaxed">
              Severity filters let you focus on what matters. Every finding card includes the source file and line reference, an AI-generated explanation of the vulnerability in plain language, and expandable remediation guidance for manual mitigation.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { label: 'Metrics Overview', desc: 'Total findings, risk scores, and scan duration at a glance' },
              { label: 'Grouped Issues', desc: 'Deduplicated by vulnerability type for efficient triage' },
              { label: 'Raw Matches', desc: 'Every affected file and line, unfiltered' },
              { label: 'Severity Filters', desc: 'Narrow from Critical to Low in one click' },
              { label: 'AI Explanation', desc: 'Plain-language summary of why each issue is a risk' },
              { label: 'Remediation Guidance', desc: 'Expandable manual mitigation steps per finding' },
            ].map((row) => (
              <div key={row.label} className="flex items-start gap-3 rounded-xl border cy-border-default cy-bg-elevated p-4">
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-500/10">
                  <span className="size-1.5 rounded-full bg-primary-400" />
                </span>
                <div>
                  <p className="text-sm font-semibold cy-text-primary">{row.label}</p>
                  <p className="mt-0.5 text-xs cy-text-muted">{row.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-surface-50 dark:bg-surface-950 py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-400 mb-3">Use Cases</p>
          <h2 className="text-2xl font-bold cy-text-primary sm:text-3xl mb-10" style={{ fontFamily: HEADING_FONT }}>
            When teams rely on CyfroCode
          </h2>
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
