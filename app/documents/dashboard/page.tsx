'use client'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const CONTENT = {
  en: {
    category: 'Platform Guide',
    title: 'Dashboard',
    overview: 'The Dashboard is your central view of the security health of your infrastructure. It brings together scan status, vulnerability findings, agent health, asset discovery, GDPR compliance, and AI-generated insights into a single customisable page that updates when you switch between account groups.',
    statsTitle: 'The Stats Row',
    statsIntro: 'A pinned row at the top of the Dashboard always shows three high-level metrics for the current account group:',
    statsHeaders: ['Metric', 'Description'],
    statsRows: [
      ['Completed Scans', 'Number of scans currently in a completed state'],
      ['Active Scans', 'Number of scans currently running or pending execution'],
      ['Failed Scans', 'Number of scans currently in a failed state'],
    ] as [string, string][],
    statsNote: 'These are point-in-time counts, not cumulative historical totals.',
    widgetsTitle: 'Dashboard Widgets',
    widgetsIntro: 'Below the stats row, seven widgets are arranged in a grid. Each widget independently fetches its own data for the current account group.',
    layoutTitle: 'Default Widget Layout',
    layoutIntro: 'The default layout is a 12-column grid with one pinned full-width row, followed by resizable cards:',
    layoutHeaders: ['Row', 'Default cards (left to right)'],
    layoutRows: [
      ['Pinned top row', 'Dashboard Stats (full width)'],
      ['Row 1', 'CyfroAI Insights (large), Vulnerability Summary (small)'],
      ['Row 2', 'GDPR Compliance (small), Top Vulnerabilities (large)'],
      ['Row 3', 'Scan Status (small), Agent Status (small), Asset Discovery (small)'],
    ] as [string, string][],
    layoutNote: 'Small cards use one-third width, large cards use two-thirds width, and the pinned stats row is always full width.',
    aiTitle: 'CyfroAI Insights',
    aiItems: [
      'Shows up to 4 recent AI-generated insight summaries.',
      'Each card includes source type, relative timestamp, and a plain-text preview.',
      'A +N more indicator appears when more findings exist than fit in the preview.',
      'View All opens the full CyfroAI Insights page.',
      'Empty state: "No AI insights yet — Run scans to generate AI analysis."',
    ],
    vulnTitle: 'Vulnerability Summary',
    vulnItems: [
      'Quick stats for targets scanned, total vulnerabilities, misconfigurations, and secrets.',
      'Severity distribution across Critical, High, Medium, Low, and Info.',
      'Up to 6 top findings with severity badge, identifier, and occurrence count.',
      'Header timestamp shows the scan the data came from.',
      'Empty state: "No vulnerabilities found."',
    ],
    topVulnTitle: 'Top Vulnerabilities',
    topVulnItems: [
      'Shows up to 8 prioritised findings ordered by severity.',
      'Each row includes vulnerability ID, package, target, severity, description, and first-detected date.',
      'Clicking a row opens the matching report entry.',
      'View All opens the vulnerability report view.',
      'Empty state: "No high or medium vulnerabilities found."',
    ],
    gdprTitle: 'GDPR Compliance',
    gdprItems: [
      'Shows an overall score with colour-coded thresholding.',
      'Includes trend direction since the previous report when available.',
      'Displays critical, high, and total findings counts.',
      'Shows category breakdown with counts, proportional fill, and score.',
      'Refresh triggers a new compliance report without leaving the dashboard.',
      'Pending state appears if no report exists yet.',
    ],
    scanTitle: 'Scan Status',
    scanItems: [
      'Summary counts for Running, Done, Failed, and Pending scans.',
      'Normalised status labels such as Completed, Running, Pending, and Failed.',
      'Each listed scan shows status, category, assigned agents, and last run time.',
      'View All Scans opens the Scans Setup page.',
      'Empty state: "No active scans — Start a new scan to see status."',
    ],
    agentTitle: 'Agent Status',
    agentItems: [
      'Health summary for Healthy, Warning, and Offline agents.',
      'Each row shows agent name, location, status, last heartbeat, and scan counts.',
      'View All Agents opens the CyfroAgent management page.',
      'Empty state: "No agents found — No agents registered for this group."',
    ],
    assetTitle: 'Asset Discovery',
    assetItems: [
      'Quick stats for total assets, subnets, open ports, and IPv6 hosts.',
      'Recently discovered hosts with hostname, IP, and discovery time.',
      'Most common open ports with host counts and common service labels.',
      'Management protocols and storage services are shown as badges.',
      'View Asset Discovery opens the related report view.',
    ],
    customTitle: 'Customising the Layout',
    customIntro: 'The dashboard layout is fully customisable. Your arrangement is saved per browser and persists across sessions.',
    enteringTitle: 'Entering Customise Mode',
    enteringBody: 'Click Customize Layout in the top-right toolbar. A blue banner confirms you are in customise mode.',
    movingTitle: 'Moving Widgets',
    movingBody: 'Drag any widget by its grip handle to reposition it. Widgets automatically pack upward to fill gaps.',
    resizingTitle: 'Resizing Widgets',
    resizingItems: [
      'The minus button shrinks a widget to a small size.',
      'The plus button expands a widget to a large size.',
      'The top stats row is always full width and cannot be moved or resized.',
    ],
    savingTitle: 'Saving, Resetting, and Cancelling',
    savingHeaders: ['Button', 'Behaviour'],
    savingRows: [
      ['Save Layout', 'Saves the current arrangement to the browser and restores it next time.'],
      ['Reset', 'Restores the factory default arrangement in the draft view without saving.'],
      ['Cancel', 'Discards unsaved changes and exits customise mode.'],
    ] as [string, string][],
    savingNote: 'Layout is stored in local browser storage, so clearing browser data or switching browsers restores the factory default.',
    switchingTitle: 'Switching Account Groups',
    switchingBody: 'Use the account group selector in the sidebar to switch groups. Widgets reload their data for the new group while the saved layout stays the same.',
    refreshingTitle: 'Refreshing Data',
    refreshingItems: [
      'Reload the page to refresh all widgets.',
      'Use the GDPR widget refresh action to regenerate compliance data without a full reload.',
    ],
    shortcutsTitle: 'Widget Navigation Shortcuts',
    shortcutsIntro: 'Each dashboard card provides direct navigation into deeper workflows:',
    shortcutsHeaders: ['Widget', 'Action', 'Destination'],
    shortcutsRows: [
      ['CyfroAI Insights', 'View All', 'CyfroAI Insights page'],
      ['Top Vulnerabilities', 'View All', 'Report page (vulnerabilities tab)'],
      ['Scan Status', 'View All Scans', 'Scans Setup page'],
      ['Agent Status', 'View All Agents', 'CyfroAgent page'],
      ['Asset Discovery', 'View Asset Discovery', 'Report page (asset discovery tab)'],
    ] as [string, string, string][],
    shortcutsNote: 'This lets teams start triage from the dashboard and continue directly into task-specific pages.',
    faqTitle: 'Frequently Asked Questions on Dashboards',
    faqs: [
      {
        q: 'Why are some widgets showing no data or empty states?',
        a: 'Each widget needs the relevant scans or agents to have run at least once.',
      },
      {
        q: 'Can different users have different dashboard layouts?',
        a: 'Yes. Each user’s layout is stored independently in their own browser.',
      },
      {
        q: 'Why do the stats numbers differ from what I expected?',
        a: 'Dashboard stats reflect current states, not historical cumulative totals.',
      },
      {
        q: 'Can I add or remove widgets entirely?',
        a: 'The current experience supports repositioning and resizing, but not hiding widgets completely.',
      },
    ],
    tocTitle: 'On this page',
    tocItems: [
      { id: 'overview', label: 'Overview' },
      { id: 'stats-row', label: 'The Stats Row' },
      { id: 'widgets', label: 'Dashboard Widgets' },
      { id: 'default-layout', label: 'Default Widget Layout' },
      { id: 'ai-insights-widget', label: 'CyfroAI Insights' },
      { id: 'vulnerability-summary', label: 'Vulnerability Summary' },
      { id: 'top-vulnerabilities', label: 'Top Vulnerabilities' },
      { id: 'gdpr-widget', label: 'GDPR Compliance' },
      { id: 'scan-status', label: 'Scan Status' },
      { id: 'agent-status', label: 'Agent Status' },
      { id: 'asset-discovery-widget', label: 'Asset Discovery' },
      { id: 'customising', label: 'Customising the Layout' },
      { id: 'entering', label: 'Entering Customise Mode' },
      { id: 'moving', label: 'Moving Widgets' },
      { id: 'resizing', label: 'Resizing Widgets' },
      { id: 'saving', label: 'Saving, Resetting, Cancelling' },
      { id: 'switching', label: 'Switching Account Groups' },
      { id: 'refreshing', label: 'Refreshing Data' },
      { id: 'navigation-shortcuts', label: 'Widget Navigation Shortcuts' },
      { id: 'faq', label: 'FAQ' },
    ],
    contactSupport: 'Contact support',
  },
}

function List({ items }: { items: string[] }) {
  return (
    <ol className="space-y-4 cy-text-secondary text-sm">
      {items.map((text, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
          <span className="mt-0.5">{text}</span>
        </li>
      ))}
    </ol>
  )
}

export default function DashboardPage() {
  const c = CONTENT.en

  return (
    <div className="flex gap-0 w-full max-w-[1600px] mx-auto">
      <article className="flex-1 min-w-0 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 w-full max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand mb-4">{c.category}</p>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold cy-text-primary mb-4 sm:mb-6 leading-tight" style={{ fontFamily: HEADING_FONT }}>{c.title}</h1>
        <p className="cy-text-secondary leading-relaxed mb-10" id="overview">{c.overview}</p>

        <hr className="cy-border-default mb-10" />

        <section id="stats-row" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.statsTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-4">{c.statsIntro}</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.statsHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.statsRows.map(([metric, desc]) => (
                  <tr key={metric} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold">{metric}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cy-text-secondary text-sm">{c.statsNote}</p>
        </section>

        <section id="widgets" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.widgetsTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-6">{c.widgetsIntro}</p>

          <h3 id="default-layout" className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>{c.layoutTitle}</h3>
          <p className="cy-text-secondary text-sm mb-3">{c.layoutIntro}</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.layoutHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.layoutRows.map(([row, cards]) => (
                  <tr key={row} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold">{row}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary">{cards}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cy-text-secondary text-sm">{c.layoutNote}</p>
        </section>

        <section id="ai-insights-widget" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.aiTitle}</h2>
          <List items={c.aiItems} />
        </section>

        <section id="vulnerability-summary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.vulnTitle}</h2>
          <List items={c.vulnItems} />
        </section>

        <section id="top-vulnerabilities" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.topVulnTitle}</h2>
          <List items={c.topVulnItems} />
        </section>

        <section id="gdpr-widget" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.gdprTitle}</h2>
          <List items={c.gdprItems} />
        </section>

        <section id="scan-status" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.scanTitle}</h2>
          <List items={c.scanItems} />
        </section>

        <section id="agent-status" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.agentTitle}</h2>
          <List items={c.agentItems} />
        </section>

        <section id="asset-discovery-widget" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.assetTitle}</h2>
          <List items={c.assetItems} />
        </section>

        <section id="customising" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.customTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-6">{c.customIntro}</p>
          <h3 id="entering" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>{c.enteringTitle}</h3>
          <p className="cy-text-secondary text-sm mb-6">{c.enteringBody}</p>
          <h3 id="moving" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>{c.movingTitle}</h3>
          <p className="cy-text-secondary text-sm mb-6">{c.movingBody}</p>
          <h3 id="resizing" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>{c.resizingTitle}</h3>
          <List items={c.resizingItems} />

          <h3 id="saving" className="text-base font-semibold cy-text-primary mb-3 mt-8 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>{c.savingTitle}</h3>
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.savingHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.savingRows.map(([btn, behaviour]) => (
                  <tr key={btn} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold">{btn}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary">{behaviour}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cy-text-secondary text-sm mb-6">{c.savingNote}</p>

          <h3 id="switching" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>{c.switchingTitle}</h3>
          <p className="cy-text-secondary text-sm mb-6">{c.switchingBody}</p>
          <h3 id="refreshing" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>{c.refreshingTitle}</h3>
          <List items={c.refreshingItems} />
        </section>

        <section id="navigation-shortcuts" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.shortcutsTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-4">{c.shortcutsIntro}</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.shortcutsHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.shortcutsRows.map(([widget, action, dest]) => (
                  <tr key={widget} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold">{widget}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary">{action}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary">{dest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cy-text-secondary text-sm">{c.shortcutsNote}</p>
        </section>

        <section id="faq" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.faqTitle}</h2>
          <div className="space-y-5">
            {c.faqs.map(({ q, a }) => (
              <div key={q}>
                <p className="text-sm font-semibold cy-text-primary mb-1">{q}</p>
                <p className="text-sm cy-text-secondary">{a}</p>
              </div>
            ))}
          </div>
        </section>
      </article>

      <aside className="hidden 2xl:block w-56 shrink-0 px-6 pt-10 pb-10">
        <div className="sticky top-10">
          <p className="text-[10px] font-bold uppercase tracking-widest cy-text-muted mb-3">{c.tocTitle}</p>
          <ul className="space-y-2">
            {c.tocItems.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className="text-sm cy-text-secondary hover:cy-text-brand transition-colors block">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-6 border-t cy-border-default">
            <Link href="/contact" className="flex items-center gap-1.5 text-xs cy-text-muted hover:cy-text-brand transition-colors">
              <ExternalLink className="h-3.5 w-3.5" />
              <span>{c.contactSupport}</span>
            </Link>
          </div>
        </div>
      </aside>
    </div>
  )
}
