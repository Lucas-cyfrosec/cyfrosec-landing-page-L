'use client'

import { useState, useMemo, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowLeft, ChevronRight, Menu, Search, X } from 'lucide-react'
import Fuse from 'fuse.js'
import { LandingHeader } from '@/app/components/landing/LandingHeader'
import styles from '@/app/landing-theme.module.css'
import { DOCS_HEADING_FONT, DOCS_NAV_SECTIONS, DOCS_SEARCH_INDEX, type DocsNavSection } from './docs-data'
import { recordDocsInteraction } from './docs-analytics'
import { useTranslation } from '@/src/i18n'

function SidebarSection({
  section,
  translatedTitle,
  linkLabelMap,
}: {
  section: DocsNavSection
  translatedTitle?: string
  linkLabelMap?: Record<string, string>
}) {
  const pathname = usePathname()
  const hasActiveItem = section.items.some((item) => pathname === item.href)
  const [manualOpen, setManualOpen] = useState(() => section.defaultOpen ?? false)
  const open = hasActiveItem || manualOpen

  return (
    <div>
      <button
        onClick={() => setManualOpen((v) => !v)}
        className="flex w-full items-center justify-between py-1.5 text-[10px] font-bold uppercase tracking-widest cy-text-muted transition-colors hover:cy-text-primary 3xl:py-2 3xl:text-[11px]"
      >
        {translatedTitle ?? section.title}
        <ChevronRight
          className={`h-3.5 w-3.5 transition-transform duration-200 3xl:h-4 3xl:w-4 ${open ? 'rotate-90' : ''}`}
        />
      </button>

      {open && (
        <ul className="mt-1 space-y-0.5 border-l border-[color-mix(in_srgb,var(--border-default)_60%,transparent)] ml-1 pl-3">
          {section.items.map((item) => {
            const active = pathname === item.href
            const label = linkLabelMap?.[item.href] ?? item.label
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => recordDocsInteraction(item.href)}
                  className={`block py-1.5 text-sm transition-colors 3xl:py-2 3xl:text-[15px] ${
                    active
                      ? 'cy-text-brand font-medium'
                      : 'cy-text-secondary hover:cy-text-primary'
                  }`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

function DocsSidebar() {
  const { t } = useTranslation()
  const sb = t.pages.documentsFull.sidebar

  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const fuse = useMemo(
    () => new Fuse(DOCS_SEARCH_INDEX, { keys: ['label', 'section'], threshold: 0.35 }),
    []
  )

  const results = query.trim().length > 0 ? fuse.search(query.trim()).slice(0, 8) : []

  // Map English section titles → translated titles
  const sectionTitleMap: Record<string, string> = {
    'GETTING STARTED': sb.sections.gettingStarted,
    'PLATFORM GUIDE': sb.sections.platformGuide,
    'CYFROAI ENGINE': sb.sections.cyfroAiEngine,
    'CYFROAGENT': sb.sections.cyfroAgent,
    'SCANS': sb.sections.scans,
    'SECURITY & COMPLIANCE': sb.sections.securityCompliance,
    'ADMIN PANEL': sb.sections.adminPanel,
  }

  // Map hrefs → translated link labels
  const linkLabelMap: Record<string, string> = {
    '/documents/full': sb.links.platformOverview,
    '/documents/rbac': sb.links.roleBasedAccessControl,
    '/documents/support': sb.links.support,
    '/documents/dashboard': sb.links.dashboard,
    '/documents/notifications': sb.links.notifications,
    '/documents/reports': sb.links.report,
    '/documents/topology': sb.links.topology,
    '/documents/deploy-agent': sb.links.deployAgent,
    '/documents/docker-scanning': sb.links.dockerScanning,
    '/documents/delete-agent': sb.links.deleteAgent,
    '/documents/first-scan': sb.links.firstScan,
    '/documents/network-discovery': sb.links.networkDiscovery,
    '/documents/asset-discovery': sb.links.assetDiscovery,
    '/documents/service-fingerprinting': sb.links.serviceFingerprinting,
    '/documents/gdpr': sb.links.gdpr,
    '/documents/audit': sb.links.audit,
    '/documents/admin': sb.links.admin,
  }

  // Close dropdown on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (
        dropdownRef.current && !dropdownRef.current.contains(e.target as Node) &&
        inputRef.current && !inputRef.current.contains(e.target as Node)
      ) {
        setFocused(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const showDropdown = focused && query.trim().length > 0

  return (
    <nav className="flex h-full flex-col">
      {/* ── Sticky header ───────────────────────────────────────────── */}
      <div className="sticky top-0 z-10 space-y-3 px-4 pt-5 pb-3 3xl:px-5 3xl:pt-6 3xl:pb-4 3xl:space-y-4" style={{ background: 'var(--bg-elevated)' }}>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs cy-text-muted transition-colors hover:cy-text-brand 3xl:text-[13px]"
        >
          <ArrowLeft className="h-3.5 w-3.5 3xl:h-4 3xl:w-4" />
          <span>{sb.backToSite}</span>
        </Link>

        <Link
          href="/documents"
          className="block text-sm font-semibold cy-text-primary transition-colors hover:cy-text-brand 3xl:text-[16px]"
          style={{ fontFamily: DOCS_HEADING_FONT }}
        >
          <span>{sb.title}</span>
        </Link>

        {/* Search */}
        <div className="relative">
          <Search className="pointer-events-none absolute left-2.5 top-1/2 z-10 h-3.5 w-3.5 -translate-y-1/2 cy-text-muted 3xl:left-3 3xl:h-4 3xl:w-4" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            placeholder={sb.searchPlaceholder}
           
            className="w-full rounded-lg border cy-border-default cy-bg-canvas pl-8 pr-3 py-2 text-xs cy-text-primary placeholder:cy-text-muted transition focus:outline-none focus:ring-2 focus:ring-primary-500/30 3xl:pl-10 3xl:pr-4 3xl:py-2.5 3xl:text-[13px]"
          />

          {/* Results dropdown */}
          {showDropdown && (
            <div
              ref={dropdownRef}
              className="absolute left-0 right-0 top-full mt-1 z-50 rounded-xl border cy-border-default shadow-xl overflow-hidden"
              style={{ background: 'var(--bg-elevated)' }}
            >
              {results.length === 0 ? (
                <p className="px-3 py-3 text-xs cy-text-muted 3xl:px-4 3xl:py-3.5 3xl:text-[13px]">
                  {sb.noResults} &ldquo;{query}&rdquo;
                </p>
              ) : (
                <ul>
                  {results.map(({ item }) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => {
                          recordDocsInteraction(item.href)
                          setQuery('')
                          setFocused(false)
                        }}
                        className="flex flex-col px-3 py-2.5 transition-colors hover:bg-primary-500/8 3xl:px-4 3xl:py-3"
                      >
                        <span className="text-xs font-medium cy-text-primary 3xl:text-[13px]">{item.label}</span>
                        <span className="mt-0.5 text-[10px] cy-text-muted 3xl:text-[11px]">{item.section}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── Scrollable nav sections ──────────────────────────────────── */}
      <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4 3xl:px-5 3xl:py-5 3xl:space-y-5">
        {!query.trim() && DOCS_NAV_SECTIONS.map((section) => (
          <SidebarSection
            key={section.title}
            section={section}
            translatedTitle={sectionTitleMap[section.title]}
            linkLabelMap={linkLabelMap}
          />
        ))}
      </div>
    </nav>
  )
}

export default function DocumentsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const normalisedPath = pathname?.replace(/\/$/, '') ?? ''
  const isDocsGateway = normalisedPath === '/documents' || normalisedPath === '/documents/landing'

  return (
    <div className={`${styles.wrapper} cy-docs-shell flex h-screen flex-col overflow-hidden cy-bg-canvas cy-text-primary`}>
      <LandingHeader />

      {/* ── Docs body (below navbar) ──────────────────────────────────── */}
      <div className="flex flex-1 pt-20 xl:pt-22 3xl:pt-24 overflow-hidden" dir="ltr">

        {/* Mobile sidebar toggle (floating) */}
        {!isDocsGateway ? (
          <button
            className="fixed bottom-6 right-6 z-40 flex lg:hidden h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-white shadow-lg"
            onClick={() => setSidebarOpen((v) => !v)}
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        ) : null}

        {/* Mobile overlay */}
        {!isDocsGateway && sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* ── Left sidebar ───────────────────────────────────────────── */}
        {!isDocsGateway ? (
          <aside
            className={`cy-docs-sidebar fixed top-0 z-30 h-full w-64 shrink-0 overflow-y-auto border-r cy-border-default transition-transform duration-300 lg:sticky lg:translate-x-0 3xl:w-72 4xl:w-80 ${
              sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
            style={{ background: 'var(--bg-elevated)' }}
          >
            <DocsSidebar />
          </aside>
        ) : null}

        {/* ── Main content ───────────────────────────────────────────── */}
        <main className="cy-docs-main flex-1 min-w-0 overflow-y-auto">
          {children}
        </main>

      </div>
    </div>
  )
}
