import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Dashboard | CyfroSec Documentation',
  description: 'Understanding the CyfroSec dashboard — widgets, stats, layout customisation, and navigation shortcuts.',
  alternates: { canonical: '/documents/dashboard' },
}

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const TOC = [
  { id: 'overview',               label: 'Overview' },
  { id: 'stats-row',              label: 'The Stats Row' },
  { id: 'widgets',                label: 'Dashboard Widgets' },
  { id: 'default-layout',         label: 'Default Widget Layout' },
  { id: 'ai-insights-widget',     label: 'CyfroAI Insights' },
  { id: 'vulnerability-summary',  label: 'Vulnerability Summary' },
  { id: 'top-vulnerabilities',    label: 'Top Vulnerabilities' },
  { id: 'gdpr-widget',            label: 'GDPR Compliance' },
  { id: 'scan-status',            label: 'Scan Status' },
  { id: 'agent-status',           label: 'Agent Status' },
  { id: 'asset-discovery-widget', label: 'Asset Discovery' },
  { id: 'customising',            label: 'Customising the Layout' },
  { id: 'entering',               label: 'Entering Customise Mode' },
  { id: 'moving',                 label: 'Moving Widgets' },
  { id: 'resizing',               label: 'Resizing Widgets' },
  { id: 'saving',                 label: 'Saving, Resetting, Cancelling' },
  { id: 'switching',              label: 'Switching Account Groups' },
  { id: 'refreshing',             label: 'Refreshing Data' },
  { id: 'navigation-shortcuts',   label: 'Widget Navigation Shortcuts' },
  { id: 'faq',                    label: 'FAQ' },
]

export default function DashboardPage() {
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
          Dashboard
        </h1>

        <p className="cy-text-secondary leading-relaxed mb-10" id="overview">
          The Dashboard is your central view of the security health of your infrastructure. It brings together
          scan status, vulnerability findings, agent health, asset discovery, GDPR compliance, and a snapshot
          of AI-generated insights into a single, customisable page that updates when you switch between account groups.
        </p>

        <hr className="cy-border-default mb-10" />

        {/* Stats Row */}
        <section id="stats-row" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            The Stats Row
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4">
            A pinned row at the top of the Dashboard always shows three high-level metrics for the current account group:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Metric</th>
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Completed Scans', 'Number of tests currently in a completed state'],
                  ['Active Tests', 'Number of tests currently running or pending execution'],
                  ['Failed Tests', 'Number of tests currently in a failed state'],
                ].map(([metric, desc]) => (
                  <tr key={metric} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold">{metric}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cy-text-secondary text-sm">These are point-in-time counts, not cumulative historical totals.</p>
        </section>

        {/* Widgets */}
        <section id="widgets" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Dashboard Widgets
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-6">
            Below the stats row, seven widgets are arranged in a grid. Each widget independently fetches its own data for the current account group.
          </p>

          <h3 id="default-layout" className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>
            Default Widget Layout
          </h3>
          <p className="cy-text-secondary text-sm mb-3">
            The default layout is a 12-column grid with one pinned full-width row, followed by resizable cards:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Row</th>
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Default cards (left to right)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Pinned top row', 'Dashboard Stats (full width)'],
                  ['Row 1', 'CyfroAI Insights (large), Vulnerability Summary (small)'],
                  ['Row 2', 'GDPR Compliance (small), Top Vulnerabilities (large)'],
                  ['Row 3', 'Scan Status (small), Agent Status (small), Asset Discovery (small)'],
                ].map(([row, cards]) => (
                  <tr key={row} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold">{row}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary">{cards}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cy-text-secondary text-sm">
            Small cards use one-third width, large cards use two-thirds width, and the pinned stats row is always full width.
          </p>
        </section>

        {/* CyfroAI Insights Widget */}
        <section id="ai-insights-widget" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            CyfroAI Insights
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-3">
            A compact view of the most recent AI-generated scan analyses.
          </p>
          <p className="cy-text-secondary text-sm mb-3">
            Lists up to 4 recent insights, each showing the source type (Port Scan, Asset Discovery, or Service Fingerprinting), a relative timestamp, and a plain-text preview of the executive summary.
          </p>
          <p className="cy-text-secondary text-sm mb-3">
            A +N more indicator appears when an insight contains additional findings beyond the preview.
          </p>
          <p className="cy-text-secondary text-sm mb-3">
            Click <strong className="cy-text-primary">View All</strong> to open the full CyfroAI Insights page.
          </p>
          <p className="cy-text-secondary text-sm">
            Empty state: &quot;No AI insights yet — Run scans to generate AI analysis.&quot;
          </p>
        </section>

        {/* Vulnerability Summary */}
        <section id="vulnerability-summary" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Vulnerability Summary
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-3">
            A breakdown of vulnerability findings from the most recent scan.
          </p>
          <p className="cy-text-secondary text-sm mb-2">
            Quick stats: Targets scanned, total vulnerabilities, misconfiguration count, and secrets count.
          </p>
          <p className="cy-text-secondary text-sm mb-2">
            Severity distribution: A proportional bar chart showing counts across Critical, High, Medium, Low, and Info severity levels.
          </p>
          <p className="cy-text-secondary text-sm mb-3">
            Top findings: Up to 6 of the most significant vulnerability entries, each showing a severity badge, identifier or package name, and occurrence count.
          </p>
          <p className="cy-text-secondary text-sm mb-3">
            The header shows the timestamp of the last scan the data is drawn from.
          </p>
          <p className="cy-text-secondary text-sm">
            Empty state: &quot;No vulnerabilities found.&quot;
          </p>
        </section>

        {/* Top Vulnerabilities */}
        <section id="top-vulnerabilities" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Top Vulnerabilities
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-3">
            A detailed table of the highest-priority vulnerabilities across your infrastructure.
          </p>
          <p className="cy-text-secondary text-sm mb-3">
            Shows up to 8 findings, prioritised by severity (Critical first, then High, then Medium).
          </p>
          <p className="cy-text-secondary text-sm mb-3">
            Each row shows: vulnerability ID, package name, affected target, severity badge, description, and first-detected date.
          </p>
          <p className="cy-text-secondary text-sm mb-3">
            Click any row to jump to the corresponding entry in the Report page, pre-filtered to that specific finding.
          </p>
          <p className="cy-text-secondary text-sm mb-3">
            Click <strong className="cy-text-primary">View All</strong> in the header to open the Report page filtered to the full vulnerabilities list.
          </p>
          <p className="cy-text-secondary text-sm">
            Empty state: &quot;No high or medium vulnerabilities found.&quot;
          </p>
        </section>

        {/* GDPR Widget */}
        <section id="gdpr-widget" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            GDPR Compliance
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-3">
            A summary of your organisation&apos;s GDPR compliance posture based on the latest automated report.
          </p>
          <p className="cy-text-secondary text-sm mb-2">
            Overall score: A donut chart displaying the compliance score (0–100), colour-coded green (≥ 80), amber (≥ 60), or red (&lt; 60).
          </p>
          <p className="cy-text-secondary text-sm mb-2">
            Trend indicator: An up or down arrow showing whether the score has improved or declined since the previous report.
          </p>
          <p className="cy-text-secondary text-sm mb-2">
            Quick stats: Critical findings, High findings, and total findings counts.
          </p>
          <p className="cy-text-secondary text-sm mb-3">
            Category breakdown: Each GDPR category listed with its finding count, a proportional fill bar, and individual score. Categories are sorted by finding count.
          </p>
          <p className="cy-text-secondary text-sm mb-3">
            The refresh button (↺ icon in the header) manually triggers a new compliance report and reloads the data.
          </p>
          <p className="cy-text-secondary text-sm mb-3">
            Pending state: If no report has been generated yet, a &quot;GDPR report pending&quot; message is shown with a refresh button to trigger the first run.
          </p>
          <p className="cy-text-secondary text-sm">
            GDPR Compliance is a feature-flagged capability. Contact your administrator if this widget is not visible.
          </p>
        </section>

        {/* Scan Status */}
        <section id="scan-status" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Scan Status
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-3">
            A live view of your configured tests and their current execution state.
          </p>
          <p className="cy-text-secondary text-sm mb-3">
            Summary bar: Running, Done, Failed, and Pending counts across all tests.
          </p>
          <p className="cy-text-secondary text-sm mb-3">
            Status normalisation: The status of scans are mapped into common labels:
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-4">
            {['Completed', 'Running', 'Pending', 'Failed'].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm mb-3">
            Test list: Up to 4 tests, each showing:
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-4">
            {[
              'Status indicator (colour coded dot)',
              'Test name and category',
              'Current status label (In Progress, Completed, Failed, Pending)',
              'Number of assigned agents',
              'Last run time (relative time)',
              'Inactive label is displayed if the test is currently paused',
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm mb-3">
            Click <strong className="cy-text-primary">View All Scans</strong> to go to the Scans Setup page.
          </p>
          <p className="cy-text-secondary text-sm">
            Empty state: &quot;No active scans — Start a new scan to see status.&quot;
          </p>
        </section>

        {/* Agent Status */}
        <section id="agent-status" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Agent Status
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-3">
            A health summary of all CyfroAgents registered to the current account group.
          </p>
          <p className="cy-text-secondary text-sm mb-3">
            Health summary bar: Healthy, Warning, and Offline agent counts.
          </p>
          <p className="cy-text-secondary text-sm mb-3">
            Agent list: One row per agent showing:
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-4">
            {[
              'Health status dot (green = healthy, amber = warning/degraded, red = offline/unhealthy)',
              'Agent name and location (if set during registration)',
              'Status label pill',
              'Last heartbeat time (relative)',
              'Test counts: running, failed, and total',
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm mb-3">
            Click <strong className="cy-text-primary">View All Agents</strong> to go to the CyfroAgent management page.
          </p>
          <p className="cy-text-secondary text-sm">
            Empty state: &quot;No agents found — No agents registered for this group.&quot;
          </p>
        </section>

        {/* Asset Discovery Widget */}
        <section id="asset-discovery-widget" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Asset Discovery
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-3">
            An overview of the most recent asset discovery scan results.
          </p>
          <p className="cy-text-secondary text-sm mb-3">
            Quick stats: Total assets found, subnets observed, open ports detected, and IPv6 hosts.
          </p>
          <p className="cy-text-secondary text-sm mb-3">
            Top discovered hosts: Up to 2 recently found hosts with hostname, IP address, and discovery timestamp.
          </p>
          <p className="cy-text-secondary text-sm mb-3">
            Top open ports: Up to 5 most common open ports with the number of hosts they were found on. Common service names (for example, 22 SSH, 443 HTTPS, 3389 RDP) are shown inline.
          </p>
          <p className="cy-text-secondary text-sm mb-3">
            Management protocols and storage services detected are listed as labelled badges.
          </p>
          <p className="cy-text-secondary text-sm mb-3">
            Click <strong className="cy-text-primary">View Asset Discovery</strong> to open the full asset report in the Report page.
          </p>
          <p className="cy-text-secondary text-sm">
            Empty state: &quot;No discovery data — Run a scan to discover network assets.&quot;
          </p>
        </section>

        {/* Customising */}
        <section id="customising" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Customising the Layout
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-6">
            The dashboard layout is fully customisable. Your arrangement is saved per browser and persists across sessions.
          </p>

          <h3 id="entering" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>
            Entering Customise Mode
          </h3>
          <p className="cy-text-secondary text-sm mb-6">
            Click <strong className="cy-text-primary">Customize Layout</strong> (grid-edit icon in the top-right toolbar). A blue banner confirms you are in customise mode.
          </p>

          <h3 id="moving" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>
            Moving Widgets
          </h3>
          <p className="cy-text-secondary text-sm mb-6">
            Click and drag any widget by its grip handle (the ⠿ icon that appears in customise mode) to reposition it. Widgets automatically pack upward to fill gaps.
          </p>

          <h3 id="resizing" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>
            Resizing Widgets
          </h3>
          <p className="cy-text-secondary text-sm mb-3">
            Each widget has a − and + button in customise mode:
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-4">
            {[
              '− shrinks the widget to a small size (one-third of the page width).',
              '+ expands the widget to a large size (two-thirds of the page width).',
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm mb-6">
            The stats row at the top is always full-width and cannot be moved or resized.
          </p>

          <h3 id="saving" className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>
            Saving, Resetting, and Cancelling
          </h3>
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Button</th>
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Behaviour</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Save Layout', 'Saves your current arrangement to the browser. It will be restored the next time you open the Dashboard.'],
                  ['Reset', 'Reverts the layout to the factory default arrangement in the draft view, without saving.'],
                  ['Cancel', 'Discards all unsaved changes and exits customise mode.'],
                ].map(([btn, behaviour]) => (
                  <tr key={btn} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold">{btn}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary">{behaviour}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="cy-text-secondary text-sm mb-6">
            Layout is saved to your browser&apos;s local storage. If you clear your browser data or use a different browser, the layout will revert to the factory default. Each user&apos;s layout is independent.
          </p>

          <h3 id="switching" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>
            Switching Account Groups
          </h3>
          <p className="cy-text-secondary text-sm mb-6">
            Use the account group selector in the sidebar to switch between groups. Every widget on the Dashboard automatically reloads its data for the newly selected group. The layout arrangement stays the same; only the data changes.
          </p>

          <h3 id="refreshing" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>
            Refreshing Data
          </h3>
          <p className="cy-text-secondary text-sm mb-3">
            Most widgets load their data once when the page opens. To get the latest data:
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {[
              'For all widgets: Reload the page.',
              'For GDPR Compliance only: Use the ↺ refresh button in the widget header to trigger a new report without reloading the page.',
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Navigation Shortcuts */}
        <section id="navigation-shortcuts" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Widget Navigation Shortcuts
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4">
            Each dashboard card provides direct navigation into deeper workflows:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Widget</th>
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Action</th>
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Destination</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['CyfroAI Insights', 'View All', 'CyfroAI Insights page'],
                  ['Top Vulnerabilities', 'View All', 'Report page (vulnerabilities tab)'],
                  ['Scan Status', 'View All Scans', 'Scans Setup page'],
                  ['Agent Status', 'View All Agents', 'CyfroAgent page'],
                  ['Asset Discovery', 'View Asset Discovery', 'Report page (asset discovery tab)'],
                ].map(([widget, action, dest]) => (
                  <tr key={widget} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold">{widget}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary">{action}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary">{dest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cy-text-secondary text-sm">
            This allows triage to begin in the dashboard and continue directly in task-specific pages.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Frequently Asked Questions on Dashboards
          </h2>
          <div className="space-y-5">
            {[
              {
                q: 'Why are some widgets showing "No data" or empty states?',
                a: 'Each widget needs the relevant scans or agents to have run at least once. For example, Vulnerability Summary needs a completed vulnerability scan, and Asset Discovery needs a completed asset discovery scan. Set up tests in Scans Setup tab to start populating the dashboard.',
              },
              {
                q: 'My layout reset after I cleared my browser. Can I restore it?',
                a: 'Dashboard layouts are stored in local browser storage. Clearing browser data removes the saved layout and reverts to the factory default. Reconfigure the layout in Customise mode and save it again.',
              },
              {
                q: 'Can different users have different dashboard layouts?',
                a: "Yes. Each user's layout is stored independently in their own browser. Changing your layout does not affect other users.",
              },
              {
                q: 'The stats numbers look different from what I expected. Why?',
                a: 'Dashboard stats reflect current states, not historical counts. For example, "Completed Scans" is the number of tests in a completed state right now. It is not a cumulative total of every scan that has ever finished.',
              },
              {
                q: 'Can I add or remove widgets entirely?',
                a: 'The current layout customisation allows repositioning and resizing. Hiding or removing individual widgets from the grid is not yet supported.',
              },
            ].map(({ q, a }) => (
              <div key={q}>
                <p className="text-sm font-semibold cy-text-primary mb-1">{q}</p>
                <p className="text-sm cy-text-secondary">{a}</p>
              </div>
            ))}
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
