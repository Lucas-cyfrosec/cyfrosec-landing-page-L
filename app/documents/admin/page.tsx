'use client'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const CONTENT = {
  en: {
    category: 'Admin Panel',
    title: 'Admin Panel',
    overview1: 'The Settings area is the administrative control center for customer workspaces. For Admins only.',
    overview2: 'It groups governance, access, compliance, and billing-related controls behind role-aware navigation.',
    accessingTitle: 'Accessing Settings',
    routeLabel: 'CyfroSec | Enterprise Security Platform',
    shellIntro: 'The settings shell includes:',
    shellItems: [
      'A settings header',
      'Searchable tab navigation',
      'Section pages for each administration domain',
    ],
    accessTitle: 'Access Control',
    accessIntro: 'Settings access is restricted to:',
    accessItems: ['Organization Admin', 'Account Group Admin'],
    accessNote: 'Users without access are redirected to the dashboard.',
    navTitle: 'Settings Navigation Areas',
    navIntro: 'Current settings tabs are grouped into these categories:',
    governanceLabel: 'Governance:',
    governanceItems: [['Organization', '/settings/organization']] as [string, string][],
    accessLabel: 'Access:',
    accessNavItems: [
      ['Account Groups', '/settings/account-groups'],
      ['Users', '/settings/users'],
    ] as [string, string][],
    complianceLabel: 'Compliance:',
    complianceItems: [['Audit Logs', '/settings/audit']] as [string, string][],
    billingLabel: 'Billing:',
    billingItems: [
      ['Subscription', '/settings/subscription'],
      ['Statistics', '/settings/statistics'],
    ] as [string, string][],
    navNote: 'You can search settings tabs directly from the settings header.',
    settingsTitle: 'Settings Overview Page',
    settingsIntro: 'The root settings page (/settings) includes:',
    settingsItems: [
      'High-level governance and control highlights',
      'Administration area cards',
      'Direct links to each settings section',
    ],
    orgTitle: 'Organization',
    orgIntro: 'The Organization page provides organization-level records and actions with:',
    orgItems: [
      'Search',
      'Pagination',
      'Create/edit/delete modals',
      'Table fields such as country, plan, users, account groups, agents, and created date',
    ],
    orgNote: 'Use this page to maintain organization metadata and inspect organizational scope metrics.',
    groupsTitle: 'Account Groups',
    groupsIntro: 'The Account Groups page provides scoped group administration with:',
    groupsItems: [
      'Search',
      'Organization filter',
      'Pagination',
      'Create/edit/delete actions',
      'Group-level user/agent counts',
    ],
    groupsNote: 'Use this page to manage group boundaries and operational ownership.',
    usersTitle: 'Users',
    usersIntro: 'The Users page is account-group scoped and provides:',
    usersItems: [
      'Search by name/email',
      'Pagination',
      'Create/edit/delete user workflows',
      'Role-in-group visibility',
      'Create flow includes organization and account-group assignment fields.',
    ],
    auditTitle: 'Audit Logs',
    auditIntro: 'The Audit Logs page (/settings/audit) provides activity traceability with:',
    auditItems: [
      'Search',
      'Structured filters (action type, resource type, endpoint, IP, status, dates)',
      'Status badges and duration',
      'Pagination',
    ],
    billingTitle: 'Subscription and Statistics',
    billingIntro: 'Billing-related settings include:',
    billingDetails: [
      'Subscription (/settings/subscription): Plan status, billing lifecycle actions, plan selection',
      'Statistics (/settings/statistics): Usage limits, utilization, period metrics',
    ],
    uxTitle: 'Common UX Patterns Across Settings',
    uxIntro: 'Most settings tables share:',
    uxItems: [
      'Debounced search inputs',
      'Active filter state chips',
      'Standard loading/empty/error states',
      'Page-based navigation controls',
      'Modal-based CRUD actions where applicable',
    ],
    uxNote: 'This keeps behavior predictable across administration pages.',
    faqTitle: 'Frequently Asked Questions',
    faqs: [
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
    ],
    tocTitle: 'On this page',
    tocItems: [
      { id: 'overview', label: 'Overview' },
      { id: 'accessing', label: 'Accessing Settings' },
      { id: 'access-control', label: 'Access Control' },
      { id: 'navigation-areas', label: 'Settings Navigation Areas' },
      { id: 'settings-overview', label: 'Settings Overview Page' },
      { id: 'organization', label: 'Organization' },
      { id: 'account-groups', label: 'Account Groups' },
      { id: 'users', label: 'Users' },
      { id: 'audit-logs', label: 'Audit Logs' },
      { id: 'subscription-statistics', label: 'Subscription and Statistics' },
      { id: 'ux-patterns', label: 'Common UX Patterns' },
      { id: 'faq', label: 'FAQ' },
    ],
    contactSupport: 'Contact support',
  },
}

export default function AdminPage() {
  const c = CONTENT.en

  const renderPathList = (items: [string, string][]) => (
    <ol className="space-y-4 cy-text-secondary text-sm mb-5">
      {items.map(([label, path], i) => (
        <li key={path} className="flex items-start gap-3">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
          <span className="mt-0.5">
            {label} (<code className="rounded px-1.5 py-0.5 text-xs font-mono bg-primary-500/10 cy-text-brand">{path}</code>)
          </span>
        </li>
      ))}
    </ol>
  )

  return (
    <div className="flex gap-0 w-full max-w-[1600px] mx-auto">
      <article className="flex-1 min-w-0 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 w-full max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand mb-4">{c.category}</p>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold cy-text-primary mb-4 sm:mb-6 leading-tight" style={{ fontFamily: HEADING_FONT }}>
          {c.title}
        </h1>

        <p className="cy-text-secondary leading-relaxed mb-4" id="overview">{c.overview1}</p>
        <p className="cy-text-secondary leading-relaxed mb-10">{c.overview2}</p>

        <hr className="cy-border-default mb-10" />

        <section id="accessing" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.accessingTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-5 text-sm">{c.routeLabel}</p>
          <p className="cy-text-secondary text-sm mb-3">{c.shellIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.shellItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="access-control" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.accessTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-3">{c.accessIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-4">
            {c.accessItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm">{c.accessNote}</p>
        </section>

        <section id="navigation-areas" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.navTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-4">{c.navIntro}</p>

          <p className="cy-text-secondary text-sm mb-2 font-semibold cy-text-primary">{c.governanceLabel}</p>
          {renderPathList(c.governanceItems)}

          <p className="cy-text-secondary text-sm mb-2 font-semibold cy-text-primary">{c.accessLabel}</p>
          {renderPathList(c.accessNavItems)}

          <p className="cy-text-secondary text-sm mb-2 font-semibold cy-text-primary">{c.complianceLabel}</p>
          {renderPathList(c.complianceItems)}

          <p className="cy-text-secondary text-sm mb-2 font-semibold cy-text-primary">{c.billingLabel}</p>
          {renderPathList(c.billingItems)}

          <p className="cy-text-secondary text-sm">{c.navNote}</p>
        </section>

        <section id="settings-overview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.settingsTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-3">
            <>The root settings page (<code className="rounded px-1.5 py-0.5 text-xs font-mono bg-primary-500/10 cy-text-brand">/settings</code>) includes:</>
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.settingsItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="organization" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.orgTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-3">{c.orgIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-4">
            {c.orgItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm">{c.orgNote}</p>
        </section>

        <section id="account-groups" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.groupsTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-3">{c.groupsIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-4">
            {c.groupsItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm">{c.groupsNote}</p>
        </section>

        <section id="users" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.usersTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-3">{c.usersIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-4">
            {c.usersItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="audit-logs" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.auditTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-3">{c.auditIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.auditItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="subscription-statistics" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.billingTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-3">{c.billingIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.billingDetails.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="ux-patterns" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold cy-text-primary mb-4" style={{ fontFamily: HEADING_FONT }}>{c.uxTitle}</h2>
          <p className="cy-text-secondary leading-relaxed mb-3">{c.uxIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-4">
            {c.uxItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm">{c.uxNote}</p>
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
