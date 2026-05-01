import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'CyfroCode | CyfroSec Documentation',
  description: 'CyfroCode — connecting GitHub, managing repositories, running scans, reviewing findings, and generating AI-driven remediation patches.',
  alternates: { canonical: '/documents/cyfrocode' },
}

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const TOC = [
  { id: 'overview',          label: 'Overview' },
  { id: 'connecting-github', label: 'Connecting GitHub' },
  { id: 'managing-repos',    label: 'Managing Synced Repositories' },
  { id: 'running-scans',     label: 'Running Scans' },
  { id: 'reviewing-findings',label: 'Reviewing Findings & AI Explanations' },
  { id: 'patch-proposals',   label: 'Automated Patch Proposals' },
]

export default function CyfroCodePage() {
  return (
    <div className="flex gap-0 w-full max-w-[1600px] mx-auto">

      {/* ── Article ──────────────────────────────────────────────────── */}
      <article className="flex-1 min-w-0 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 w-full max-w-5xl mx-auto">

        <p className="text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand mb-4">
          Code Security
        </p>

        <h1
          id="overview"
          className="text-2xl sm:text-3xl lg:text-4xl font-bold cy-text-primary mb-4 sm:mb-6 leading-tight scroll-mt-20"
          style={{ fontFamily: HEADING_FONT }}
        >
          CyfroCode
        </h1>

        <p className="cy-text-secondary leading-relaxed mb-10">
          CyfroCode provides a comprehensive code security workspace embedded directly within CyfroSec.
          Designed for developers and security teams alike, it allows you to connect your code repositories,
          automatically run security scans, and generate actionable remediation patches, all without leaving
          the platform.
        </p>

        <hr className="cy-border-default mb-10" />

        {/* Connecting GitHub */}
        <section id="connecting-github" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Connecting GitHub
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-5">
            To get started with CyfroCode, you need to connect your organization&apos;s GitHub account:
          </p>

          <ol className="space-y-4 cy-text-secondary text-sm mb-6">
            {[
              'Navigate to CyfroCode via the main navigation menu.',
              'Click the Connect GitHub App button.',
              'You will be redirected to GitHub to authorize and install the CyfroSec GitHub App.',
              'Once installed, CyfroSec will automatically sync your repositories and display them in the CyfroCode workspace under the Repositories tab.',
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>

          <div className="rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary">
            <strong className="cy-text-primary">Note:</strong> You must be an administrator in both GitHub and CyfroSec to complete this setup.
          </div>
        </section>

        {/* Managing Synced Repositories */}
        <section id="managing-repos" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Managing Synced Repositories
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-5">
            In the CyfroCode workspace, your synced repositories are listed with helpful metadata:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Field</th>
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Default Branch', 'The primary branch monitored for changes.'],
                  ['Languages & Frameworks', 'Auto-detected technologies in your codebase.'],
                  ['Tech Indicators', 'Badges indicate if the repository uses Docker, Terraform, or GitHub Actions.'],
                  ['Sync Status', 'Real-time status of the connection with GitHub.'],
                ].map(([field, desc]) => (
                  <tr key={field} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold">{field}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Running Scans */}
        <section id="running-scans" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Running Scans
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-5">
            To analyze a repository for security vulnerabilities:
          </p>

          <ol className="space-y-4 cy-text-secondary text-sm mb-6">
            {[
              'Locate the repository in the Synced Repositories list.',
              'Click Run Scan to open the scan drawer.',
              'Use the branch picker to run scans against any branch (default branch is pre-selected).',
              'The scan will be queued and transition through various states (queued, running, completed, or failed).',
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
            You can monitor actively queued and historical scans in the <strong className="cy-text-primary">Scans</strong> tab. Active runs refresh automatically.
          </p>
        </section>

        {/* Reviewing Findings */}
        <section id="reviewing-findings" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Reviewing Findings &amp; AI Explanations
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-5">
            Once a scan concludes, you can click on it to view a detailed breakdown of the findings. The scan detail page offers:
          </p>

          <ul className="space-y-2 cy-text-secondary text-sm mb-6">
            {[
              'Metrics Overview: A snapshot of total findings, risk scores, and duration of the scan.',
              'Grouped Issues vs. Raw Matches: Toggle between grouped issues (deduplicated by vulnerability type) or raw matches (every specific line of code affected).',
              'Severity Filters: Quickly filter findings from Critical to Low severity.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <p className="cy-text-secondary text-sm mb-4">
            Each finding card provides deep context:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Section</th>
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Details</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Source Information', 'Includes the primary file path and the specific lines of code.'],
                  ['AI Explanation', 'CyfroAssistant automatically summarizes the vulnerability, explaining why it is an issue in plain, contextual language.'],
                  ['Remediation Guidance', 'Expand the guidance section to learn how to mitigate the risk manually.'],
                ].map(([section, details]) => (
                  <tr key={section} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold">{section}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary">{details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Automated Patch Proposals */}
        <section id="patch-proposals" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Automated Patch Proposals
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-5">
            For supported vulnerabilities, CyfroCode goes beyond reporting by offering automated, AI-driven patches:
          </p>

          <ol className="space-y-4 cy-text-secondary text-sm">
            {[
              'Click Generate Patch on a specific finding.',
              "CyfroSec's AI models will analyze the vulnerability context and generate a safe, functional code change.",
              'Review the proposed diff directly within the UI.',
              'If correct, click Approve to export the remediation patch directly to a new branch in your GitHub repository, ready for an easy Pull Request review.',
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                5
              </span>
              <span className="mt-0.5">
                If a finding turns out to be a false positive or an accepted risk, you can use the Suppress option to hide it from future scans.
              </span>
            </li>
          </ol>
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
