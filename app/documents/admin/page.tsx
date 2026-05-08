import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import DocsCodeBlock from '../_components/DocsCodeBlock'

export const metadata = {
  title: 'Admin Panel | CyfroSec Documentation',
  description: 'Understanding the CyfroSec Settings/Admin Panel — access control, navigation areas, and administration workflows.',
  alternates: { canonical: '/documents/admin' },
}

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const TOC = [
  { id: 'overview',                label: 'Overview' },
  { id: 'accessing',               label: 'Accessing Settings' },
  { id: 'access-control',          label: 'Access Control' },
  { id: 'navigation-areas',        label: 'Settings Navigation Areas' },
  { id: 'settings-overview',       label: 'Settings Overview Page' },
  { id: 'organization',            label: 'Organization' },
  { id: 'account-groups',          label: 'Account Groups' },
  { id: 'users',                   label: 'Users' },
  { id: 'audit-logs',              label: 'Audit Logs' },
  { id: 'subscription-statistics', label: 'Subscription and Statistics' },
  { id: 'ux-patterns',             label: 'Common UX Patterns' },
  { id: 'faq',                     label: 'FAQ' },
]

export default function AdminPage() {
  return (
    <div className="flex gap-0 w-full max-w-[1600px] mx-auto">

      {/* ── Article ──────────────────────────────────────────────────── */}
      <article className="flex-1 min-w-0 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 w-full max-w-5xl mx-auto">

        <p className="text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand mb-4">
          Admin Panel
        </p>

        <h1
          className="text-2xl sm:text-3xl lg:text-4xl font-bold cy-text-primary mb-4 sm:mb-6 leading-tight"
          style={{ fontFamily: HEADING_FONT }}
        >
          Admin Panel
        </h1>

        <p className="cy-text-secondary leading-relaxed mb-4" id="overview">
          The Settings area is the administrative control center for customer workspaces. For Admins only.
        </p>
        <p className="cy-text-secondary leading-relaxed mb-10">
          It groups governance, access, compliance, and billing-related controls behind role-aware navigation.
        </p>

        <hr className="cy-border-default mb-10" />

        {/* Accessing Settings */}
        <section id="accessing" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Accessing Settings
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-3 text-sm">
            Route(on-premise):
          </p>
          <DocsCodeBlock className="mb-5" code={`app.localhost:8080/settings`} />
          <p className="cy-text-secondary text-sm mb-3">
            The settings shell includes:
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {[
              'a settings header',
              'searchable tab navigation',
              'section pages for each administration domain',
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

        {/* Access Control */}
        <section id="access-control" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Access Control
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-3">
            Settings access is restricted to:
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-4">
            {[
              'Organization Admin',
              'Account Group Admin',
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
            Users without access are redirected to the dashboard.
          </p>
        </section>

        {/* Navigation Areas */}
        <section id="navigation-areas" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Settings Navigation Areas
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4">
            Current settings tabs are grouped into these categories:
          </p>

          <p className="cy-text-secondary text-sm mb-2 font-semibold cy-text-primary">Governance:</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-5">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                1
              </span>
              <span className="mt-0.5">Organization (<code className="rounded px-1.5 py-0.5 text-xs font-mono bg-primary-500/10 cy-text-brand">/settings/organization</code>)</span>
            </li>
          </ol>

          <p className="cy-text-secondary text-sm mb-2 font-semibold cy-text-primary">Access:</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-5">
            {[
              ['Account Groups', '/settings/account-groups'],
              ['Users', '/settings/users'],
            ].map(([label, path], i) => (
              <li key={path} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5">{label} (<code className="rounded px-1.5 py-0.5 text-xs font-mono bg-primary-500/10 cy-text-brand">{path}</code>)</span>
              </li>
            ))}
          </ol>

          <p className="cy-text-secondary text-sm mb-2 font-semibold cy-text-primary">Compliance:</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-5">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                1
              </span>
              <span className="mt-0.5">Audit Logs (<code className="rounded px-1.5 py-0.5 text-xs font-mono bg-primary-500/10 cy-text-brand">/settings/audit</code>)</span>
            </li>
          </ol>

          <p className="cy-text-secondary text-sm mb-2 font-semibold cy-text-primary">Billing:</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-4">
            {[
              ['Subscription', '/settings/subscription'],
              ['Statistics', '/settings/statistics'],
            ].map(([label, path], i) => (
              <li key={path} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5">{label} (<code className="rounded px-1.5 py-0.5 text-xs font-mono bg-primary-500/10 cy-text-brand">{path}</code>)</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm">
            You can search settings tabs directly from the settings header.
          </p>
        </section>

        {/* Settings Overview Page */}
        <section id="settings-overview" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Settings Overview Page
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-3">
            The root settings page (<code className="rounded px-1.5 py-0.5 text-xs font-mono bg-primary-500/10 cy-text-brand">/settings</code>) includes:
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {[
              'High-level governance and control highlights',
              'Administration area cards',
              'Direct links to each settings section',
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

        {/* Organization */}
        <section id="organization" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Organization
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-3">
            The Organization page provides organization-level records and actions with:
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-4">
            {[
              'Search',
              'Pagination',
              'Create/edit/delete modals',
              'Table fields such as country, plan, users, account groups, agents, and created date',
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
            Use this page to maintain organization metadata and inspect organizational scope metrics.
          </p>
        </section>

        {/* Account Groups */}
        <section id="account-groups" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Account Groups
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-3">
            The Account Groups page provides scoped group administration with:
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-4">
            {[
              'Search',
              'Organization filter',
              'Pagination',
              'Create/edit/delete actions',
              'Group-level user/agent counts',
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
            Use this page to manage group boundaries and operational ownership.
          </p>
        </section>

        {/* Users */}
        <section id="users" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Users
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-3">
            The Users page is account-group scoped and provides:
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-4">
            {[
              'Search by name/email',
              'Pagination',
              'Create/edit/delete user workflows',
              'Role-in-group visibility',
              'Create flow includes organization and account-group assignment fields.',
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

        {/* Audit Logs */}
        <section id="audit-logs" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Audit Logs
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-3">
            The Audit Logs page (<code className="rounded px-1.5 py-0.5 text-xs font-mono bg-primary-500/10 cy-text-brand">/settings/audit</code>) provides activity traceability with:
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {[
              'Search',
              'Structured filters (action type, resource type, endpoint, IP, status, dates)',
              'Status badges and duration',
              'Pagination',
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

        {/* Subscription and Statistics */}
        <section id="subscription-statistics" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Subscription and Statistics
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-3">
            Billing-related settings include:
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {[
              'Subscription (/settings/subscription): Plan status, billing lifecycle actions, plan selection',
              'Statistics (/settings/statistics): Usage limits, utilization, period metrics',
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

        {/* Common UX Patterns */}
        <section id="ux-patterns" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Common UX Patterns Across Settings
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-3">
            Most settings tables share:
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-4">
            {[
              'Debounced search inputs',
              'Active filter state chips',
              'Standard loading/empty/error states',
              'Page-based navigation controls',
              'Modal-based CRUD actions where applicable',
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
            This keeps behavior predictable across administration pages.
          </p>
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
                q: 'Who can access the settings area?',
                a: 'Only Organization Admin and Account Group Admin roles.',
              },
              {
                q: 'Can I search the available settings tabs?',
                a: 'Yes, the settings header includes tab search.',
              },
              {
                q: 'Why is data different between account groups?',
                a: 'Several settings views are scoped by the current account-group context.',
              },
              {
                q: 'Where do I manage billing versus operational access?',
                a: 'Use Subscription/Statistics for billing and quotas. Use Organization/Account Groups/Users for governance and access.',
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
