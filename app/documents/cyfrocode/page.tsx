'use client'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const CONTENT = {
  en: {
    category: 'Code Security',
    title: 'CyfroCode',
    overview1: 'CyfroCode provides a comprehensive SAST code-security workspace embedded directly within CyfroSec. Designed for developers and security teams alike, it allows you to connect your code repositories, automatically run security scans, and generate actionable remediation patches, all without leaving the platform.',
    overview2: 'CyfroCode supports 6 programming languages for SAST code-security scanning, plus 5 infrastructure/configuration surfaces, dead-code detection, and Logic Map / Mind Map views for understanding architecture faster.',
    languagesTitle: 'Programming Languages',
    languagesHeaders: ['Language', 'Extensions'],
    languages: [
      ['Python', '.py'],
      ['JavaScript', '.js'],
      ['TypeScript', '.ts'],
      ['Java', '.java'],
      ['Go', '.go'],
      ['C#', '.cs'],
    ] as [string, string][],
    infraTitle: 'Infrastructure / Configuration Surfaces',
    infraItems: [
      'Container (Dockerfile)',
      'Terraform (IaC)',
      'Kubernetes (manifests)',
      'YAML (generic config)',
      'CI (GitHub Actions workflows)',
    ],
    githubTitle: 'Connecting GitHub',
    githubIntro: 'To get started with CyfroCode, you need to connect your organization\'s GitHub account:',
    githubSteps: [
      'Navigate to CyfroCode via the main navigation menu.',
      'Click the Connect GitHub App button.',
      'You will be redirected to GitHub to authorize and install the CyfroSec GitHub App.',
      'Once installed, CyfroSec will automatically sync your repositories and display them on the CyfroCode dashboard.',
    ],
    githubNoteLabel: 'Note:',
    githubNote: 'You must be an administrator in both GitHub and CyfroSec to complete this setup.',
    reposTitle: 'Managing Synced Repositories',
    reposIntro: 'On the CyfroCode dashboard, your synced repositories are listed with helpful metadata:',
    reposHeaders: ['Field', 'Description'],
    reposRows: [
      ['Default Branch', 'The primary branch monitored for changes.'],
      ['Languages & Frameworks', 'Auto-detected technologies in your codebase.'],
      ['Tech Indicators', 'Badges indicate if the repository uses Docker, Terraform, or GitHub Actions.'],
      ['Sync Status', 'Real-time status of the connection with GitHub.'],
    ] as [string, string][],
    scansTitle: 'Running Scans',
    scansIntro: 'To analyze a repository for security vulnerabilities:',
    scansSteps: [
      'Locate the repository in the Synced Repositories list.',
      'Click the Queue Scan button.',
      'The scan will be queued for the default branch and transition through various states (queued, running, completed, or failed).',
    ],
    scansNote: 'You can monitor actively queued and historical scans in the Recent Scans section on the main CyfroCode dashboard.',
    scansNoteStrong: 'Recent Scans',
    findingsTitle: 'Reviewing Findings & AI Explanations',
    findingsIntro: 'Once a scan concludes, you can click on it to view a detailed breakdown of the findings. The scan detail page offers:',
    findingsItems: [
      'Metrics Overview: A snapshot of total findings, risk scores, and duration of the scan.',
      'Grouped Issues vs. Raw Matches: Toggle between grouped issues (deduplicated by vulnerability type) or raw matches (every specific line of code affected).',
      'Severity Filters: Quickly filter findings from Critical to Low severity.',
    ],
    findingsCardIntro: 'Each finding card provides deep context:',
    findingsHeaders: ['Section', 'Details'],
    findingsRows: [
      ['Source Information', 'Includes the primary file path and the specific lines of code.'],
      ['AI Explanation', 'CyfroAssistant automatically summarizes the vulnerability, explaining why it is an issue in plain, contextual language.'],
      ['Remediation Guidance', 'Expand the guidance section to learn how to mitigate the risk manually.'],
    ] as [string, string][],
    deadCodeTitle: 'Dead-Code Detection',
    deadCodeIntro: 'CyfroCode also highlights code-health blind spots that often sit outside classic SAST results. Dead-code detection helps teams find unused files, functions, and code paths that increase maintenance overhead and can hide stale risk.',
    deadCodeItems: [
      'Flags unused or unreachable code paths during repository analysis.',
      'Helps teams reduce attack surface and remove stale logic safely.',
      'Complements vulnerability findings with broader code-health context.',
    ],
    mapsTitle: 'Logic Map & Mind Map',
    mapsIntro: 'CyfroCode includes architecture-aware views so teams can understand how a repository is connected before making changes.',
    mapsItems: [
      'Logic Map shows relationships across files, functions, classes, endpoints, workflows, and application layers.',
      'Mind Map layers AI-authored endpoint explanations on top of deterministic endpoint signatures.',
      'Both views help developers review architecture, trace impact, and understand where fixes belong.',
    ],
    patchTitle: 'Automated Patch Proposals',
    patchIntro: 'For supported vulnerabilities, CyfroCode goes beyond reporting by offering automated, AI-driven patches:',
    patchSteps: [
      'Click Generate Patch on a specific finding.',
      'CyfroSec\'s AI models will analyze the vulnerability context and generate a safe, functional code change.',
      'Review the proposed diff directly within the UI.',
      'If correct, click Approve to export the remediation patch directly to a new branch in your GitHub repository, ready for an easy Pull Request review.',
      'If a finding turns out to be a false positive or an accepted risk, you can use the Suppress option to hide it from future scans.',
    ],
    tocTitle: 'On this page',
    tocItems: [
      { id: 'overview',           label: 'Overview' },
      { id: 'languages',          label: 'Supported Languages' },
      { id: 'infra-surfaces',     label: 'Infrastructure Surfaces' },
      { id: 'connecting-github',  label: 'Connecting GitHub' },
      { id: 'managing-repos',     label: 'Managing Synced Repositories' },
      { id: 'running-scans',      label: 'Running Scans' },
      { id: 'reviewing-findings', label: 'Reviewing Findings & AI Explanations' },
      { id: 'dead-code',          label: 'Dead-Code Detection' },
      { id: 'logic-maps',         label: 'Logic Map & Mind Map' },
      { id: 'patch-proposals',    label: 'Automated Patch Proposals' },
    ],
    contactSupport: 'Contact support',
  },
}

export default function CyfroCodePage() {
  const c = CONTENT.en

  return (
    <div className="flex gap-0 w-full max-w-[1600px] mx-auto">

      {/* ── Article ──────────────────────────────────────────────────── */}
      <article className="flex-1 min-w-0 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 w-full max-w-5xl mx-auto">

        <p className="text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand mb-4">
          {c.category}
        </p>

        <h1
          id="overview"
          className="text-2xl sm:text-3xl lg:text-4xl font-bold cy-text-primary mb-4 sm:mb-6 leading-tight scroll-mt-20"
          style={{ fontFamily: HEADING_FONT }}
          lang="en"
        >
          {c.title}
        </h1>

        <p className="cy-text-secondary leading-relaxed mb-4">
          {c.overview1}
        </p>
        <p className="cy-text-secondary leading-relaxed mb-10">
          {c.overview2}
        </p>

        <hr className="cy-border-default mb-10" />

        {/* Supported Languages */}
        <section id="languages" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.languagesTitle}
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.languagesHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.languages.map(([lang, ext]) => (
                  <tr key={lang} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold" lang="en">{lang}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary font-mono text-xs" lang="en">{ext}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Infrastructure Surfaces */}
        <section id="infra-surfaces" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.infraTitle}
          </h2>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.infraItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
        </section>

        <hr className="cy-border-default mb-10" />

        {/* Connecting GitHub */}
        <section id="connecting-github" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.githubTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-5">{c.githubIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-6">
            {c.githubSteps.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
          <div className="rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary">
            <strong className="cy-text-primary">{c.githubNoteLabel}</strong>{' '}
            <span>{c.githubNote}</span>
          </div>
        </section>

        {/* Managing Synced Repositories */}
        <section id="managing-repos" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.reposTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-5">{c.reposIntro}</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.reposHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.reposRows.map(([field, desc]) => (
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
            {c.scansTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-5">{c.scansIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-6">
            {c.scansSteps.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm">
            <>You can monitor actively queued and historical scans in the <strong className="cy-text-primary">Recent Scans</strong> section on the main CyfroCode dashboard.</>
          </p>
        </section>

        {/* Reviewing Findings */}
        <section id="reviewing-findings" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.findingsTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-5">{c.findingsIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-6">
            {c.findingsItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm mb-4">{c.findingsCardIntro}</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.findingsHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.findingsRows.map(([section, details]) => (
                  <tr key={section} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold">{section}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary">{details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Dead-Code Detection */}
        <section id="dead-code" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            {c.deadCodeTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-5">{c.deadCodeIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.deadCodeItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Logic Map & Mind Map */}
        <section id="logic-maps" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            {c.mapsTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-5">{c.mapsIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.mapsItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Automated Patch Proposals */}
        <section id="patch-proposals" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.patchTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-5">{c.patchIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.patchSteps.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
        </section>

      </article>

      {/* ── Right TOC ─────────────────────────────────────────────────── */}
      <aside className="hidden 2xl:block w-56 shrink-0 px-6 pt-10 pb-10">
        <div className="sticky top-10">
          <p className="text-[10px] font-bold uppercase tracking-widest cy-text-muted mb-3">
            {c.tocTitle}
          </p>
          <ul className="space-y-2">
            {c.tocItems.map(({ id, label }) => (
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
              <span>{c.contactSupport}</span>
            </Link>
          </div>
        </div>
      </aside>

    </div>
  )
}
