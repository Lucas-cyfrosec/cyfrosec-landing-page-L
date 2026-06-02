'use client'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const CONTENT = {
  en: {
    category: 'Platform Guide',
    title: 'Notifications',
    overview: 'CyfroSec delivers real-time security notifications as events happen across your infrastructure - scans completing, vulnerabilities detected, assets discovered, and more. Notifications arrive instantly via a live connection to the platform without needing to refresh the page.',
    whereTitle: 'Where Notifications Appear',
    whereDesc: 'The bell icon in the top-right header toolbar is the primary notification indicator.',
    bellTableHeaders: ['State', 'Appearance'],
    bellTableRows: [
      ['No unread notifications', 'Muted grey bell, no badge'],
      ['Unread (Low/Normal priority)', 'Blue bell with count badge'],
      ['Unread (High priority)', 'Amber bell with count badge'],
      ['Unread (Critical priority)', 'Red pulsing bell with count badge'],
    ],
    bellNote: 'The badge shows the number of unread notifications, capped at 99+. Click the bell to go to the full notification history page.',
    toastTitle: 'Toast Notifications',
    toastDesc: 'New notifications appear as toast cards in the top-right corner of the screen as they arrive. Up to 3 toasts are shown at once. Each toast shows:',
    toastItems: [
      'Priority badge (Critical / High / Normal / Low)',
      'Notification title and message (up to 3 lines)',
      'Which account group the event came from',
      'A 5-second countdown progress bar before auto-dismiss',
      'An × button to dismiss immediately',
    ],
    toastNote: 'Toast Notifications are ephemeral — dismissing one does not remove the notification from the history page, and auto-dismissed notifications are not automatically marked as read.',
    notificationsPageTitle: 'The Notifications Page',
    notificationsPageDesc: 'Navigate to the full history by clicking the bell icon or going to Notifications in your user menu.',
    tableViewTitle: 'Table View',
    tableViewDesc: 'The notifications table shows all notifications received in your current session with the following columns:',
    tableHeaders: ['Column', 'Description'],
    tableRows: [
      ['Priority', 'Critical / High / Normal / Low badge'],
      ['Title', 'Notification title with a type icon'],
      ['Type', 'Event type (e.g., "Scan Completed")'],
      ['Source', 'The account group or agent that produced the event'],
      ['Time', 'Relative timestamp (e.g., "2 minutes ago")'],
      ['Status', 'New (unread) or Read badge'],
    ],
    tableNote: 'Click any notification row to open the detail drawer for that notification and mark it as read.',
    detailTitle: 'Notification Detail Drawer',
    detailDesc: 'Clicking a notification row opens a drawer with the full event detail:',
    detailItems: [
      'Full message text',
      'Status flags: Severity level, whether attention is required',
      'Event type and exact timestamp',
      'Account group and organisation context',
      'Scan context: scan name, scan ID, scan type, agent name, agent ID',
      'Severity summary: Breakdown of finding counts by severity (Critical, High, Medium, Low)',
      'Top findings: Up to 5 vulnerability findings from the event, each showing host, port, protocol, service, severity, CVE ID, and CVSS score',
      'View Full Details button links to the full results detail page if available',
    ],
    filteringTitle: 'Filtering',
    filteringDesc: 'Priority tabs (above the table): Filter by All, Critical, High, Normal, or Low. Each tab shows a count of matching notifications.',
    emailTitle: 'Email Notifications',
    emailDesc: 'For certain high-priority events, CyfroSec also sends an email notification to the account group admins. Email notification delivery is configured server-side. There is no feature available currently to configure which events trigger emails.',
    faqTitle: 'Frequently Asked Questions on Notifications',
    faqItems: [
      {
        q: 'I dismissed a toast notification but the entry is still in the notification list, is that expected?',
        a: 'Yes. Dismissing a toast notification removes it from the toast overlay but does not delete or read the underlying notification. Navigate to the Notifications page to mark it as read or clear it.',
      },
      {
        q: "Why does the bell show red even after I've read some notifications?",
        a: "The bell reflects your highest unread priority. If any Critical or High priority notification remains unread, the bell stays in that state. Use Mark all read on the Notifications page to reset it.",
      },
      {
        q: "I'm in multiple account groups, will I see notifications from all of them?",
        a: 'Yes. The notification system subscribes to all account groups you belong to. Each notification is labelled with the source account group so you can identify which environment it came from.',
      },
    ],
    tocTitle: 'On this page',
    tocItems: [
      { id: 'overview',           label: 'Overview' },
      { id: 'where-appear',       label: 'Where Notifications Appear' },
      { id: 'state-table',        label: 'Bell State Table' },
      { id: 'toast',              label: 'Toast Notifications' },
      { id: 'notifications-page', label: 'The Notifications Page' },
      { id: 'table-view',         label: 'Table View' },
      { id: 'detail-drawer',      label: 'Notification Detail Drawer' },
      { id: 'filtering',          label: 'Filtering' },
      { id: 'email',              label: 'Email Notifications' },
      { id: 'faq',                label: 'FAQ' },
    ],
    contactSupport: 'Contact support',
  },
}

export default function NotificationsPage() {
  const c = CONTENT.en

  return (
    <div className="flex gap-0 w-full max-w-[1600px] mx-auto">

      {/* ── Article ──────────────────────────────────────────────────── */}
      <article className="flex-1 min-w-0 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 w-full max-w-5xl mx-auto">

        <p className="text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand mb-4">
          {c.category}
        </p>

        <h1
          className="text-2xl sm:text-3xl lg:text-4xl font-bold cy-text-primary mb-4 sm:mb-6 leading-tight"
          style={{ fontFamily: HEADING_FONT }}
         
        >
          {c.title}
        </h1>

        <p className="cy-text-secondary leading-relaxed mb-10" id="overview">
          {c.overview}
        </p>

        <hr className="cy-border-default mb-10" />

        {/* Where Notifications Appear */}
        <section id="where-appear" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.whereTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4">
            {c.whereDesc}
          </p>

          <div className="overflow-x-auto mb-4" id="state-table">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.bellTableHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.bellTableRows.map(([state, appearance]) => (
                  <tr key={state} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold">{state}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary">{appearance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cy-text-secondary text-sm">
            {c.bellNote}
          </p>
        </section>

        {/* Toast Notifications */}
        <section id="toast" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.toastTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4">
            {c.toastDesc}
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-5">
            {c.toastItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm">
            {c.toastNote}
          </p>
        </section>

        {/* The Notifications Page */}
        <section id="notifications-page" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.notificationsPageTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-5">
            {c.notificationsPageDesc}
          </p>

          <h3 id="table-view" className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>
            {c.tableViewTitle}
          </h3>
          <p className="cy-text-secondary text-sm mb-4">
            {c.tableViewDesc}
          </p>
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.tableHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.tableRows.map(([col, desc]) => (
                  <tr key={col} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold">{col}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cy-text-secondary text-sm mb-6">
            {c.tableNote}
          </p>

          <h3 id="detail-drawer" className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>
            {c.detailTitle}
          </h3>
          <p className="cy-text-secondary text-sm mb-3">
            {c.detailDesc}
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-6">
            {c.detailItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>

          <h3 id="filtering" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>
            {c.filteringTitle}
          </h3>
          <p className="cy-text-secondary text-sm">
            {c.filteringDesc}
          </p>
        </section>

        {/* Email Notifications */}
        <section id="email" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.emailTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-3">
            {c.emailDesc}
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.faqTitle}
          </h2>
          <div className="space-y-5">
            {c.faqItems.map(({ q, a }) => (
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
