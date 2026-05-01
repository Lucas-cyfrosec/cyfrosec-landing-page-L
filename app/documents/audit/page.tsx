import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Audit | CyfroSec Documentation',
  description: 'Using the CyfroSec Audit Logs page — search, filtering, pagination, and access control.',
  alternates: { canonical: '/documents/audit' },
}

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const TOC = [
  { id: 'overview',          label: 'Overview' },
  { id: 'accessing',         label: 'Accessing Audit Logs' },
  { id: 'what-you-can-see',  label: 'What You Can See' },
  { id: 'status-semantics',  label: 'Status Badge Semantics' },
  { id: 'search-filtering',  label: 'Search and Filtering' },
  { id: 'search',            label: 'Search' },
  { id: 'available-filters', label: 'Available Filters' },
  { id: 'pagination',        label: 'Refresh and Pagination' },
  { id: 'empty-error',       label: 'Empty and Error States' },
  { id: 'faq',               label: 'FAQ' },
]

export default function AuditPage() {
  return (
    <div className="flex gap-0 w-full max-w-[1600px] mx-auto">

      {/* ── Article ──────────────────────────────────────────────────── */}
      <article className="flex-1 min-w-0 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 w-full max-w-5xl mx-auto">

        <p className="text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand mb-4">
          Security &amp; Compliance
        </p>

        <h1
          className="text-2xl sm:text-3xl lg:text-4xl font-bold cy-text-primary mb-4 sm:mb-6 leading-tight"
          style={{ fontFamily: HEADING_FONT }}
        >
          Audit
        </h1>

        <p className="cy-text-secondary leading-relaxed mb-10" id="overview">
          The Audit Logs page gives you a searchable activity trail of user and system actions in your workspace.
          It is designed for compliance evidence, operational traceability, and incident investigation.
        </p>

        <hr className="cy-border-default mb-10" />

        {/* Accessing */}
        <section id="accessing" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Accessing Audit Logs
          </h2>
          <ol className="space-y-4 cy-text-secondary text-sm mb-5">
            {[
              'Open Settings in the CyfroSec portal.',
              'Select Audit Logs.',
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
            Audit Logs are available to:
          </p>
          <ul className="space-y-2 cy-text-secondary text-sm mb-4">
            {[
              'Organization Admin',
              'Account Group Admin',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="cy-text-secondary text-sm">
            Standard users without settings access are redirected to the dashboard.
          </p>
        </section>

        {/* What You Can See */}
        <section id="what-you-can-see" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            What You Can See
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4">
            The table shows one row per activity event with the following columns:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Column</th>
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Timestamp', 'When the action occurred (local browser time format)'],
                  ['User', 'Display name of the actor (or user ID / System)'],
                  ['Description', 'Natural language activity description (a fallback of this would be the action type if enough details are not available)'],
                  ['Status', 'HTTP response status badge (2xx, 4xx, 5xx, or N/A)'],
                  ['Duration', 'Request execution time in milliseconds'],
                ].map(([col, desc]) => (
                  <tr key={col} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold">{col}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 id="status-semantics" className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>
            Status Badge Semantics
          </h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Status range</th>
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Badge meaning</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['200-299', 'Success'],
                  ['400-499', 'Client-side issue / rejected request'],
                  ['500+', 'Server-side failure'],
                  ['Missing status', 'Not available (N/A)'],
                ].map(([range, meaning]) => (
                  <tr key={range} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-mono text-xs">{range}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary">{meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Search and Filtering */}
        <section id="search-filtering" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Search and Filtering
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4">
            The Audit Logs page supports both full-text search and structured filters.
          </p>

          <h3 id="search" className="text-base font-semibold cy-text-primary mb-2 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>
            Search
          </h3>
          <p className="cy-text-secondary text-sm mb-3">
            Use the search input to match:
          </p>
          <ul className="space-y-2 cy-text-secondary text-sm mb-5">
            {[
              'User display name (or user ID)',
              'Activity description',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="cy-text-secondary text-sm mb-5">
            Search is debounced to reduce request volume while typing.
          </p>

          <h3 id="available-filters" className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>
            Available Filters
          </h3>
          <p className="cy-text-secondary text-sm mb-3">
            Click Filters to open advanced filtering controls:
          </p>
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Filter</th>
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Example</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Action Type', 'api_request'],
                  ['Resource Type', 'user, scan, agent'],
                  ['Endpoint', '/api/v1/users'],
                  ['IP Address', '192.168.1.10'],
                  ['Status Code', '200, 404, 500'],
                  ['Start Date', 'Lower bound (datetime)'],
                  ['End Date', 'Upper bound (datetime)'],
                ].map(([filter, example]) => (
                  <tr key={filter} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold">{filter}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary font-mono text-xs">{example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cy-text-secondary text-sm">
            The page also scopes results to the currently selected account group when applicable.
          </p>
          <p className="cy-text-secondary text-sm mt-2">
            Use <strong className="cy-text-primary">Clear All</strong> to remove every active filter.
          </p>
        </section>

        {/* Pagination */}
        <section id="pagination" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Refresh and Pagination
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-3">
            Use <strong className="cy-text-primary">Refresh</strong> to request the newest log data.
          </p>
          <p className="cy-text-secondary text-sm mb-3">
            Results are paginated with:
          </p>
          <ul className="space-y-2 cy-text-secondary text-sm">
            {[
              '20 rows per page',
              'Previous/Next controls',
              'Footer count: "Showing X of Y logs"',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Empty and Error States */}
        <section id="empty-error" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Empty and Error States
          </h2>

          <h3 className="text-base font-semibold cy-text-primary mb-2" style={{ fontFamily: HEADING_FONT }}>
            Empty State
          </h3>
          <p className="cy-text-secondary text-sm mb-5">
            You may see No Audit Logs Found when:
          </p>
          <ul className="space-y-2 cy-text-secondary text-sm mb-6">
            {[
              'There are no events yet',
              'Current filters/search return zero matches',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <h3 className="text-base font-semibold cy-text-primary mb-2" style={{ fontFamily: HEADING_FONT }}>
            Error State
          </h3>
          <p className="cy-text-secondary text-sm mb-3">
            If loading fails, an error card appears with:
          </p>
          <ul className="space-y-2 cy-text-secondary text-sm">
            {[
              'Error summary',
              'Retry action',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-5">
            {[
              {
                q: 'Why do I see fewer rows than expected after searching?',
                a: 'Search is applied to the current page dataset after loading. Move through pages and/or refine structured filters to locate additional events.',
              },
              {
                q: 'Can non-admin users open Audit Logs?',
                a: 'No. Access is limited to Organization Admin and Account Group Admin roles.',
              },
              {
                q: 'Is the timestamp in UTC?',
                a: 'The UI renders timestamps in your browser locale/timezone for readability.',
              },
              {
                q: 'Can I filter by account group?',
                a: 'Yes. Audit queries are scoped by your current account-group context when present.',
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
