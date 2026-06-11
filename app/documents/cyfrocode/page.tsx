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
      'Click CyfroCode in the left sidebar to open the workspace.',
      'Click the Repositories tab at the top, then click Connect GitHub App.',
      'You will be redirected to GitHub. Authorize the CyfroSec GitHub App and select which organization to install it on.',
      'Choose the repositories to grant access to (all or selected), then confirm the installation.',
      'Return to CyfroSec. Your synced repositories appear as cards on the Repositories tab.',
    ],
    githubNoteLabel: 'Note:',
    githubNote: 'You must be an administrator in both GitHub and CyfroSec to complete this setup.',
    reposTitle: 'Managing Synced Repositories',
    reposIntro: 'On the Repositories tab, your synced repositories are listed as cards. Each card shows:',
    reposHeaders: ['Field', 'Description'],
    reposRows: [
      ['Default Branch', 'The primary branch monitored for changes.'],
      ['Languages & Frameworks', 'Auto-detected technologies in your codebase.'],
      ['Tech Indicators', 'Badges indicate if the repository uses Docker, Terraform, or GitHub Actions.'],
      ['Sync Status', 'Real-time status of the connection with GitHub.'],
    ] as [string, string][],
    reposDetailNote: 'Click a repository card to open its detail page, where you can see branch, health, sync history, and scan history.',
    scansTitle: 'Running Scans',
    scansIntro: 'To analyze a repository for security vulnerabilities:',
    scansSteps: [
      'Click the Scans tab at the top of the CyfroCode workspace, then click Queue Scan. Alternatively, open a repository detail page and click Queue Scan from there.',
      'Confirm the target repository and branch.',
      'The scan enters the Queued state and transitions through Running, then Completed (or Failed / Degraded if issues occur).',
      'Monitor progress from the Scans tab. Active and historical scans are listed with status, repository, branch, timing, and duration.',
    ],
    scansDetailNote: 'Once a scan completes, click it to open the scan detail page. The scan detail page contains seven tabs for reviewing results: Logic Map, Mind Map, Findings, Code Health, SBOM, Patches, and Intent.',
    scanDetailTabsTitle: 'Scan Detail Tabs',
    scanDetailTabsIntro: 'After clicking a completed scan, you see the scan detail page. The top shows context (repository, branch, commit, timing) and below it are seven tabs:',
    scanDetailTabsHeaders: ['Tab', 'What It Shows'],
    scanDetailTabsRows: [
      ['Logic Map', 'Interactive graph of relationships across files, functions, classes, endpoints, and application layers.'],
      ['Mind Map', 'Tree of endpoint cards with AI-authored explanations layered on deterministic endpoint signatures.'],
      ['Findings', 'Security findings as grouped issues or raw matches, with AI explanations and severity filters.'],
      ['Code Health', 'Dead-code signals, duplicate code clusters, and other code-health indicators beyond SAST.'],
      ['SBOM', 'Software Bill of Materials — a full dependency inventory of all discovered components.'],
      ['Patches', 'Remediation drafts generated for findings from this scan.'],
      ['Intent', 'Architecture intent versus implementation comparison with missing/extra component detection.'],
    ] as [string, string][],
    findingsTitle: 'Reviewing Findings & AI Explanations',
    findingsIntro: 'To review findings from the workspace level or from within a scan:',
    findingsSteps: [
      'Click the Findings tab at the top of the CyfroCode workspace for all findings, or click the Findings tab inside a scan detail page for scan-specific findings.',
      'Use severity filter pills (Critical, High, Medium, Low, Info) to narrow results.',
      'Use the status filter to show open, suppressed, or resolved findings.',
      'Search by keyword, file path, or CWE identifier using the search box.',
      'Toggle between Grouped Issues (deduplicated by vulnerability type) and Raw Matches (every specific line affected) using the toggle above the table.',
    ],
    findingsCardIntro: 'Click a finding row to open the finding detail page. Each detail page shows:',
    findingsHeaders: ['Section', 'Details'],
    findingsRows: [
      ['Source Information', 'The affected file path and specific line range where the vulnerability was detected.'],
      ['AI Explanation', 'A plain-language summary from CyfroAssistant explaining why the code is vulnerable and what the risk means.'],
      ['Remediation Guidance', 'Expand this section for step-by-step manual fix instructions.'],
      ['Linked Patches', 'If a remediation draft exists, a link appears at the bottom to go directly to the patch detail page.'],
    ] as [string, string][],
    logicMapTitle: 'Logic Map',
    logicMapIntro: 'The Logic Map visualizes code relationships as an interactive graph. To use it:',
    logicMapSteps: [
      'Open a completed scan from the Scans tab.',
      'Click the Logic Map tab (Network icon) in the scan detail page.',
      'The graph loads showing nodes (files, functions, classes, endpoints) and edges (relationships between them).',
      'Pan by clicking and dragging empty space. Zoom with scroll or pinch.',
      'Click any node to highlight its connections. A detail drawer opens on the right showing the node kind, file path, and relationships.',
    ],
    logicMapControlsTitle: 'Logic Map controls:',
    logicMapControlsHeaders: ['Control', 'What It Does'],
    logicMapControlsRows: [
      ['Layout (Force / Layered)', 'Switch between organic force-directed layout and hierarchical layered layout.'],
      ['View Mode (Logic / File / Layered)', 'Change how nodes are grouped — by logical structure, by file, or by application layer.'],
      ['Node Filter', 'Show or hide nodes by kind (function, class, endpoint, file, workflow) and status.'],
      ['Focus + Depth (0–5)', 'Select a node, then use Focus to show only nodes within that many hops. Isolates a subgraph around a specific component.'],
      ['Extract Flow', 'Generate a logical flow path from the selected node. A flow drawer shows the sequence of calls and data transformations.'],
      ['Full Screen', 'Expand the graph across the full viewport for detailed review.'],
      ['Export', 'Save the current graph view as an image or structured data.'],
    ] as [string, string][],
    logicMapEmptyNote: 'If the tab shows "Scan intelligence is still running," wait for analysis to complete and refresh. If it shows "Scan intelligence is unavailable," enable code-intelligence settings in the Policy tab and re-run the scan.',
    mindMapTitle: 'Mind Map',
    mindMapIntro: 'The Mind Map displays your API endpoints as a tree of cards with AI-generated explanations. To use it:',
    mindMapSteps: [
      'Open a completed scan from the Scans tab.',
      'Click the Mind Map tab (Brain icon) in the scan detail page.',
      'Endpoint cards appear in a tree layout. Each card shows the HTTP method, path, handler function, and a source badge (AI-generated or Deterministic).',
      'Filter by HTTP method (GET, POST, PUT, DELETE), status, or risk level using the toolbar filters.',
      'Use the search box to find endpoints by keyword or path fragment.',
      'Click any endpoint card to open a detail panel on the right.',
    ],
    mindMapDetailTitle: 'The endpoint detail panel shows:',
    mindMapDetailItems: [
      'Handler symbols — the functions or methods that handle this endpoint.',
      'HTTP path and method — the full route definition.',
      'Parameters (inputs) — query, path, body, and header parameters the endpoint accepts.',
      'Downstream calls — other services or functions this endpoint invokes.',
      'Security notes — authentication requirements, authorization checks, and risk observations.',
      'Linked findings — any security findings associated with this endpoint.',
      'Patch references — remediation drafts related to this endpoint.',
    ],
    mindMapEmptyNote: 'If the tab shows "Mind Map not yet generated," wait for analysis to complete and click Refresh in the toolbar.',
    deadCodeTitle: 'Code Health & Dead-Code Detection',
    deadCodeIntro: 'The Code Health tab surfaces signals that fall outside traditional SAST results — including dead code, duplicate code clusters, and maintenance concerns. To access it:',
    deadCodeSteps: [
      'Open a completed scan from the Scans tab.',
      'Click the Code Health tab (HeartPulse icon) in the scan detail page.',
      'A table of code-health signals appears, each with a signal type, severity, affected file, and description.',
      'Filter by signal type (dead code, duplicates, etc.) or severity (Critical, High, Medium, Low, Info).',
      'Search by keyword or file path to find specific signals.',
      'Click any signal row to open a detail drawer on the right showing the full description, affected lines, and recommended action.',
    ],
    deadCodeSignalsTitle: 'What dead-code signals detect:',
    deadCodeSignalItems: [
      'Unused functions — functions that are defined but never called anywhere in the codebase.',
      'Unreachable code paths — branches or blocks that can never execute due to control flow.',
      'Orphan files — files that are never imported or referenced by other modules.',
      'Duplicate clusters — groups of substantially similar code blocks across different files, shown with a similarity score.',
    ],
    deadCodeBenefitNote: 'Removing dead code reduces attack surface (stale code may contain unpatched vulnerabilities), lowers maintenance overhead, and improves clarity for active development.',
    sbomTitle: 'SBOM (Dependency Inventory)',
    sbomIntro: 'The SBOM tab provides a complete inventory of all third-party components discovered during the scan. To access it:',
    sbomSteps: [
      'Open a completed scan from the Scans tab.',
      'Click the SBOM tab (PackageSearch icon) in the scan detail page.',
      'A table of discovered packages appears with columns: Package, Version, Ecosystem, Type, License, Language, Location, Dependencies, and Indexed date.',
      'Filter by ecosystem (npm, PyPI, Maven, Go, NuGet, etc.), component type (library, framework, application), or license family.',
      'Search by package name using the search box.',
      'Click any column header to sort. Use pagination controls at the bottom (25, 50, or 100 rows per page).',
    ],
    sbomEmptyNote: 'If the tab shows "SBOM not requested," enable SBOM generation in the Policy tab and re-run the scan. Summary badges above the table show component counts by ecosystem and type.',
    intentTitle: 'Intent Analysis',
    intentIntro: 'The Intent tab compares the intended architecture of your repository against what the scan actually found. To access it:',
    intentSteps: [
      'Open a completed scan from the Scans tab.',
      'Click the Intent tab (Activity icon) in the scan detail page.',
      'Three sections appear: Missing Components (should exist but weren\'t found), Extra Components (exist but aren\'t in the profile), and Boundary Violations (code crossing architectural boundaries).',
      'If no intent data exists, click Generate Profile to create a project profile based on the scan results.',
      'Review each observation and mark it as Approved (correct, track in future scans) or Rejected (false positive or intentional deviation).',
    ],
    patchTitle: 'Automated Patch Proposals',
    patchIntro: 'For supported vulnerabilities, CyfroCode generates AI-driven remediation drafts. To use them:',
    patchSteps: [
      'Open a finding from the Findings tab (workspace-level or scan-level).',
      'Click Generate Patch on the finding detail page.',
      'CyfroSec\'s AI models analyze the vulnerability context and generate a code change. This may take a few moments.',
      'Once ready, click the patch link on the finding to open the patch detail page.',
      'Review the proposed diff in the side-by-side diff viewer. Confirm the change fixes the vulnerability without modifying unrelated behavior.',
      'If correct, click Approve, then Export to GitHub to create a new branch with the fix, ready for a Pull Request.',
      'If incorrect or unnecessary, click Reject and provide a clear reason for the review history.',
      'To hide a false positive from future scans instead, use the Suppress option on the finding detail page.',
    ],
    tocTitle: 'On this page',
    tocItems: [
      { id: 'overview',           label: 'Overview' },
      { id: 'languages',          label: 'Supported Languages' },
      { id: 'infra-surfaces',     label: 'Infrastructure Surfaces' },
      { id: 'connecting-github',  label: 'Connecting GitHub' },
      { id: 'managing-repos',     label: 'Managing Repositories' },
      { id: 'running-scans',      label: 'Running Scans' },
      { id: 'scan-detail-tabs',   label: 'Scan Detail Tabs' },
      { id: 'reviewing-findings', label: 'Reviewing Findings' },
      { id: 'logic-map',          label: 'Logic Map' },
      { id: 'mind-map',           label: 'Mind Map' },
      { id: 'dead-code',          label: 'Code Health & Dead Code' },
      { id: 'sbom',               label: 'SBOM' },
      { id: 'intent',             label: 'Intent Analysis' },
      { id: 'patch-proposals',    label: 'Automated Patches' },
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
          <p className="cy-text-secondary text-sm">{c.reposDetailNote}</p>
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
          <p className="cy-text-secondary text-sm">{c.scansDetailNote}</p>
        </section>

        <hr className="cy-border-default mb-10" />

        {/* Scan Detail Tabs */}
        <section id="scan-detail-tabs" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            {c.scanDetailTabsTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-5">{c.scanDetailTabsIntro}</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.scanDetailTabsHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.scanDetailTabsRows.map(([tab, desc]) => (
                  <tr key={tab} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold whitespace-nowrap">{tab}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
            {c.findingsSteps.map((text, i) => (
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

        {/* Logic Map */}
        <section id="logic-map" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            {c.logicMapTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-5">{c.logicMapIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-6">
            {c.logicMapSteps.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm mb-3 font-semibold cy-text-primary">{c.logicMapControlsTitle}</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.logicMapControlsHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.logicMapControlsRows.map(([control, desc]) => (
                  <tr key={control} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold whitespace-nowrap">{control}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary">
            {c.logicMapEmptyNote}
          </div>
        </section>

        {/* Mind Map */}
        <section id="mind-map" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            {c.mindMapTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-5">{c.mindMapIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-6">
            {c.mindMapSteps.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm mb-3 font-semibold cy-text-primary">{c.mindMapDetailTitle}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-6">
            {c.mindMapDetailItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
          <div className="rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary">
            {c.mindMapEmptyNote}
          </div>
        </section>

        {/* Code Health & Dead-Code Detection */}
        <section id="dead-code" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            {c.deadCodeTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-5">{c.deadCodeIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-6">
            {c.deadCodeSteps.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm mb-3 font-semibold cy-text-primary">{c.deadCodeSignalsTitle}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-6">
            {c.deadCodeSignalItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm">{c.deadCodeBenefitNote}</p>
        </section>

        {/* SBOM */}
        <section id="sbom" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            {c.sbomTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-5">{c.sbomIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-6">
            {c.sbomSteps.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
          <div className="rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary">
            {c.sbomEmptyNote}
          </div>
        </section>

        {/* Intent Analysis */}
        <section id="intent" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            {c.intentTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-5">{c.intentIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.intentSteps.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
        </section>

        <hr className="cy-border-default mb-10" />

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
