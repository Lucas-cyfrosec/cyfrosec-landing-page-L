'use client'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const CONTENT = {
  en: {
    category: 'Scans',
    title: 'Asset Discovery Scan',
    overview: 'Asset Discovery Scan does ARP sweeps, local process enumeration and MAC vendor lookup. It runs via the managed CyfroAgent with concurrency, retries, rate limits and robust error handling.',
    items: [
      'Crafted probes for ARP discovery.',
      'Local host inventory: process and service enumeration.',
      'MAC-address vendor resolution for device classification.',
      'SMB/NetBIOS enumeration for hostnames and share metadata.',
      'Enrichment from DHCP logs and Active Directory / LDAP.',
      'Read local connections, running services, routing tables and ARP caches for low-impact inventory.',
    ],
    item7: 'Asset Discovery findings are fed into CyfroAI Engine for deep assessments with the other scans to enhance data correlation.',
    tocTitle: 'On this page',
    tocItems: [{ id: 'overview', label: 'Overview' }],
    contactSupport: 'Contact support',
  },
}

export default function AssetDiscoveryPage() {
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

        <p className="cy-text-secondary leading-relaxed mb-4" id="overview">
          {c.overview}
        </p>

        <ol className="space-y-4 cy-text-secondary text-sm mb-6">
          {c.items.map((text, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                {i + 1}
              </span>
              <span className="mt-0.5">{text}</span>
            </li>
          ))}
        </ol>

        <div className="flex items-start gap-3 mt-4 cy-text-secondary text-sm mb-10">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
            7
          </span>
          <span className="mt-0.5">{c.item7}</span>
        </div>

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
