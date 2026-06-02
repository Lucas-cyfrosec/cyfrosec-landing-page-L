'use client'

import { useMemo, useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import Fuse from 'fuse.js'
import {
  ArrowRight,
  BookOpen,
  Brain,
  ChevronRight,
  LayoutDashboard,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  UsersRound,
} from 'lucide-react'
import type { ComponentType } from 'react'
import { DOCS_ARTICLE_SUMMARIES, DOCS_HEADING_FONT, DOCS_NAV_SECTIONS, DOCS_SEARCH_INDEX } from '../docs-data'
import {
  DOCS_POPULARITY_EVENT,
  getDocsPopularityCounts,
  normalizeDocsHref,
  recordDocsInteraction,
} from '../docs-analytics'
import { useTranslation } from '@/src/i18n'

type LinkItem = {
  label: string
  href: string
}

type PopularArticle = LinkItem & {
  description: string
}

type CategoryCard = {
  title: string
  href: string
  description: string
  Icon: ComponentType<{ className?: string }>
  items: LinkItem[]
}

const QUICK_CHIP_HREFS = [
  '/documents/full#getting-started',
  '/documents/deploy-agent',
  '/documents/ai-insights',
  '/documents/ai-assistant',
]

const START_CARD_HREFS = [
  '/documents/full#step1',
  '/documents/deploy-agent',
  '/documents/first-scan',
]

const START_CARD_ICONS: ComponentType<{ className?: string }>[] = [Sparkles, TerminalSquare, ShieldCheck]

const CATEGORY_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  'GETTING STARTED': BookOpen,
  'PLATFORM GUIDE': LayoutDashboard,
  'CYFROAGENT': TerminalSquare,
  'SCANS': Network,
  'CYFROAI ENGINE': Brain,
  'SECURITY & COMPLIANCE': ShieldCheck,
  'ADMIN PANEL': UsersRound,
}

const DEFAULT_POPULAR_ARTICLE_HREFS = [
  '/documents/full',
  '/documents/dashboard',
  '/documents/ai-insights',
  '/documents/ai-assistant',
  '/documents/deploy-agent',
  '/documents/service-fingerprinting',
]

function buildPopularArticle(href: string): PopularArticle | null {
  const normalizedHref = normalizeDocsHref(href)
  const docsItem = DOCS_SEARCH_INDEX.find((item) => item.href === normalizedHref)
  if (!docsItem) return null
  return {
    label: docsItem.label,
    href: docsItem.href,
    description: DOCS_ARTICLE_SUMMARIES[docsItem.href] ?? `Open the ${docsItem.label} guide.`,
  }
}

function getDefaultPopularArticles() {
  return DEFAULT_POPULAR_ARTICLE_HREFS
    .map((href) => buildPopularArticle(href))
    .filter((article): article is PopularArticle => article !== null)
}

function getPopularArticlesFromCounts() {
  const counts = getDocsPopularityCounts()
  const rankedArticles = Object.entries(counts)
    .sort((left, right) => right[1] - left[1])
    .map(([href]) => buildPopularArticle(href))
    .filter((article): article is PopularArticle => article !== null)

  const mergedArticles = [...rankedArticles, ...getDefaultPopularArticles()]
  const seen = new Set<string>()

  return mergedArticles.filter((article) => {
    if (seen.has(article.href)) return false
    seen.add(article.href)
    return true
  }).slice(0, 6)
}

export default function DocsLandingGateway() {
  const { t } = useTranslation()
  const dl = t.pages.documentsLanding

  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)
  const [popularArticles, setPopularArticles] = useState<PopularArticle[]>(() => getDefaultPopularArticles())
  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const fuse = useMemo(
    () => new Fuse(DOCS_SEARCH_INDEX, { keys: ['label', 'section'], threshold: 0.33 }),
    [],
  )

  const searchResults = query.trim() ? fuse.search(query.trim()).slice(0, 6) : []
  const showResults = focused && query.trim().length > 0

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setFocused(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  useEffect(() => {
    function syncPopularArticles() {
      setPopularArticles(getPopularArticlesFromCounts())
    }
    syncPopularArticles()
    window.addEventListener(DOCS_POPULARITY_EVENT, syncPopularArticles as EventListener)
    window.addEventListener('storage', syncPopularArticles)
    return () => {
      window.removeEventListener(DOCS_POPULARITY_EVENT, syncPopularArticles as EventListener)
      window.removeEventListener('storage', syncPopularArticles)
    }
  }, [])

  const quickChipLabels = [
    dl.tags.gettingStarted,
    dl.tags.cyfroAgentSetup,
    dl.tags.cyfroAiInsights,
    dl.tags.cyfroAssistant,
  ]

  const categoryMetaMap: Record<string, { title: string; description: string }> = {
    'GETTING STARTED': dl.categoryMeta.gettingStarted,
    'PLATFORM GUIDE': dl.categoryMeta.platformGuide,
    'CYFROAGENT': dl.categoryMeta.cyfroagent,
    'SCANS': dl.categoryMeta.scans,
    'CYFROAI ENGINE': dl.categoryMeta.cyfroaiEngine,
    'SECURITY & COMPLIANCE': dl.categoryMeta.securityCompliance,
    'ADMIN PANEL': dl.categoryMeta.adminPanel,
  }

  const categoryCards: CategoryCard[] = DOCS_NAV_SECTIONS
    .filter((section) => section.title in categoryMetaMap)
    .map((section) => ({
      ...categoryMetaMap[section.title],
      href: section.items[0]?.href ?? '',
      items: section.items,
      Icon: CATEGORY_ICONS[section.title] ?? BookOpen,
    }))

  return (
    <div className="w-full">
      <section className="relative border-b cy-border-default">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(3,155,224,0.14),transparent_32%),radial-gradient(circle_at_80%_18%,rgba(3,155,224,0.10),transparent_28%),radial-gradient(circle_at_bottom_center,rgba(254,144,77,0.10),transparent_34%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(3,155,224,0.16),transparent_32%),radial-gradient(circle_at_80%_18%,rgba(3,155,224,0.10),transparent_28%),radial-gradient(circle_at_bottom_center,rgba(254,144,77,0.08),transparent_34%)]"
        />
        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14 3xl:max-w-[1700px] 3xl:px-8 3xl:py-16 4xl:max-w-[2000px]">
          <div className="relative rounded-[2rem] border cy-border-default bg-white/70 px-5 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-xl dark:bg-surface-900/70 sm:px-8 sm:py-10 lg:px-10 lg:py-14 3xl:px-12 3xl:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.55),transparent_42%)] dark:bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.04),transparent_42%)]"
            />

            <div className="relative max-w-4xl 3xl:max-w-5xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/8 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-primary-300 3xl:px-4 3xl:py-2 3xl:text-[13px]">
                <BookOpen className="h-3.5 w-3.5 3xl:h-4 3xl:w-4" />
                <span>{dl.badge}</span>
              </div>

              <h1
               
               
                className="max-w-3xl text-4xl font-bold tracking-tight cy-text-primary sm:text-5xl lg:text-6xl 3xl:max-w-4xl 3xl:text-[4.15rem] 3xl:leading-[1.02]"
                style={{ fontFamily: DOCS_HEADING_FONT }}
              >
                {dl.title}
              </h1>

              <p
               
               
                className="mt-4 max-w-2xl text-base leading-relaxed cy-text-secondary sm:text-lg 3xl:max-w-3xl 3xl:text-[19px] 3xl:leading-8"
              >
                {dl.description}
              </p>

              <div className="relative mt-7 max-w-2xl 3xl:mt-8 3xl:max-w-3xl">
                <div className="relative overflow-hidden rounded-2xl border cy-border-default bg-white/90 dark:bg-surface-900/85 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                  <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 cy-text-muted 3xl:left-5 3xl:h-5 3xl:w-5" />
                  <input
                    ref={inputRef}
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    onFocus={() => setFocused(true)}
                    placeholder={dl.searchPlaceholder}
                   
                    className="h-14 w-full bg-transparent pl-11 pr-4 text-sm cy-text-primary placeholder:cy-text-muted focus:outline-none 3xl:h-16 3xl:pl-14 3xl:pr-5 3xl:text-[16px]"
                  />
                </div>

                {showResults ? (
                  <div
                    ref={dropdownRef}
                    className="absolute inset-x-0 top-full z-20 mt-2 overflow-hidden rounded-2xl border cy-border-default bg-white dark:bg-surface-900 shadow-2xl"
                  >
                    {searchResults.length === 0 ? (
                      <p className="px-4 py-4 text-sm cy-text-muted 3xl:px-5 3xl:py-5 3xl:text-[15px]">No matching docs yet. Try a broader term.</p>
                    ) : (
                      <ul className="divide-y divide-[color-mix(in_srgb,var(--border-default)_66%,transparent)]">
                        {searchResults.map(({ item }) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={() => {
                                recordDocsInteraction(item.href)
                                setFocused(false)
                                setQuery('')
                              }}
                              className="flex items-center justify-between gap-4 px-4 py-3 transition-colors hover:bg-primary-500/6 3xl:px-5 3xl:py-4"
                            >
                              <div>
                                <p className="text-sm font-semibold cy-text-primary 3xl:text-[15px]">{item.label}</p>
                                <p className="mt-0.5 text-[11px] uppercase tracking-[0.16em] cy-text-muted 3xl:text-[12px]">
                                  {item.section}
                                </p>
                              </div>
                              <ChevronRight className="h-4 w-4 cy-text-muted 3xl:h-5 3xl:w-5" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : null}
              </div>

              <div className="mt-5 flex flex-wrap gap-2.5 3xl:mt-6 3xl:gap-3">
                {quickChipLabels.map((label, i) => (
                  <Link
                    key={QUICK_CHIP_HREFS[i]}
                    href={QUICK_CHIP_HREFS[i]}
                    onClick={() => recordDocsInteraction(QUICK_CHIP_HREFS[i])}
                    className="inline-flex items-center rounded-full border cy-border-default bg-white/75 px-3.5 py-2 text-xs font-medium cy-text-secondary transition-colors hover:border-primary-500/35 hover:bg-primary-500/6 hover:cy-text-primary dark:bg-surface-900/75 3xl:px-4 3xl:py-2.5 3xl:text-[13px]"
                  >
                    <span>{label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-8 w-full rounded-[1.75rem] border cy-border-default bg-white/85 px-6 py-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] backdrop-blur-xl dark:bg-surface-900/85 sm:px-8 3xl:mt-10 3xl:px-10 3xl:py-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
                <div>
                  <p
                   
                   
                    className="text-[11px] font-semibold uppercase tracking-[0.18em] cy-text-brand 3xl:text-[13px]"
                  >
                    {dl.fullDocumentation.label}
                  </p>
                  <h3
                   
                   
                    className="mt-2 text-xl font-bold tracking-tight cy-text-primary 3xl:text-[1.8rem]"
                    style={{ fontFamily: DOCS_HEADING_FONT }}
                  >
                    {dl.fullDocumentation.title}
                  </h3>
                  <p
                   
                   
                    className="mt-2 max-w-2xl text-sm leading-relaxed cy-text-secondary 3xl:max-w-3xl 3xl:text-[16px] 3xl:leading-7"
                  >
                    {dl.fullDocumentation.description}
                  </p>
                </div>

                <div className="flex w-full justify-end lg:w-auto lg:shrink-0">
                  <Link
                    href="/documents/full"
                    onClick={() => recordDocsInteraction('/documents/full')}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary-500 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600 sm:w-auto sm:min-w-[220px] 3xl:min-w-[240px] 3xl:px-8 3xl:py-3.5 3xl:text-[15px]"
                  >
                    <span>{dl.fullDocumentation.button}</span>
                    <ArrowRight className="h-4 w-4 3xl:h-[18px] 3xl:w-[18px]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-50/70 dark:bg-surface-950/40">
        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14 3xl:max-w-[1700px] 3xl:px-8 3xl:py-16 4xl:max-w-[2000px]">
          <div className="mb-6 sm:mb-8 3xl:mb-10">
            <p
             
             
              className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] cy-text-brand 3xl:text-[13px]"
            >
              {dl.startHere.eyebrow}
            </p>
            <h2
             
             
              className="text-2xl font-bold tracking-tight cy-text-primary sm:text-3xl lg:text-4xl 3xl:text-[3rem]"
              style={{ fontFamily: DOCS_HEADING_FONT }}
            >
              {dl.startHere.title}
            </h2>
            <p
             
             
              className="mt-3 max-w-2xl text-sm leading-relaxed cy-text-secondary sm:text-base 3xl:max-w-3xl 3xl:text-[18px] 3xl:leading-8"
            >
              {dl.startHere.description}
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3 3xl:gap-5">
            {dl.startCards.map((card, i) => {
              const Icon = START_CARD_ICONS[i]
              return (
                <Link
                  key={START_CARD_HREFS[i]}
                  href={START_CARD_HREFS[i]}
                  onClick={() => recordDocsInteraction(START_CARD_HREFS[i])}
                  className="group relative overflow-hidden rounded-3xl border border-[color-mix(in_srgb,var(--border-default)_88%,rgba(3,155,224,0.18))] bg-white/98 px-5 py-5 shadow-[0_18px_44px_rgba(15,23,42,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-500/35 hover:shadow-[0_20px_50px_rgba(3,155,224,0.10)] dark:bg-[rgba(31,51,72,0.98)] 3xl:px-6 3xl:py-6"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary-500/8 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-primary-300 3xl:px-3 3xl:py-1.5 3xl:text-[11px]">
                      <span>{card.eyebrow}</span>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary-500/18 bg-primary-500/8 text-primary-600 dark:text-primary-300 3xl:h-12 3xl:w-12">
                      <Icon className="h-5 w-5 3xl:h-6 3xl:w-6" />
                    </div>
                  </div>
                  <h3
                   
                   
                    className="text-lg font-semibold tracking-tight cy-text-primary 3xl:text-[1.25rem]"
                  >
                    {card.label}
                  </h3>
                  <p
                   
                   
                    className="mt-2 text-sm leading-relaxed cy-text-secondary 3xl:text-[15px] 3xl:leading-7"
                  >
                    {card.description}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-300 3xl:text-[15px]">
                    <span>{dl.openArticle}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 3xl:h-[18px] 3xl:w-[18px]" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface-50/70 dark:bg-surface-950/40">
        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14 3xl:max-w-[1700px] 3xl:px-8 3xl:py-16 4xl:max-w-[2000px]">
          <div className="mb-6 sm:mb-8 3xl:mb-10">
            <p
             
             
              className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] cy-text-brand 3xl:text-[13px]"
            >
              {dl.popularArticles.eyebrow}
            </p>
            <h2
             
             
              className="text-2xl font-bold tracking-tight cy-text-primary sm:text-3xl lg:text-4xl 3xl:text-[3rem]"
              style={{ fontFamily: DOCS_HEADING_FONT }}
            >
              {dl.popularArticles.title}
            </h2>
            <p
             
             
              className="mt-3 max-w-2xl text-sm leading-relaxed cy-text-secondary sm:text-base 3xl:max-w-3xl 3xl:text-[18px] 3xl:leading-8"
            >
              {dl.popularArticles.description}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 3xl:gap-5">
            {popularArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                onClick={() => recordDocsInteraction(article.href)}
                className="group rounded-2xl border cy-border-default bg-white px-5 py-5 transition-all duration-200 hover:border-primary-500/30 hover:shadow-[0_18px_40px_rgba(15,23,42,0.06)] dark:bg-surface-900 3xl:px-6 3xl:py-6"
              >
                <h3 className="text-base font-semibold cy-text-primary 3xl:text-[18px]">{article.label}</h3>
                <p className="mt-2 text-sm leading-relaxed cy-text-secondary 3xl:text-[15px] 3xl:leading-7">{article.description}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 dark:text-primary-300 3xl:text-[15px]">
                  <span>{dl.readArticle}</span>
                  <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 3xl:h-[18px] 3xl:w-[18px]" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14 3xl:max-w-[1700px] 3xl:px-8 3xl:py-16 4xl:max-w-[2000px]">
        <div className="mb-6 sm:mb-8 3xl:mb-10">
          <p
           
           
            className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] cy-text-brand 3xl:text-[13px]"
          >
            {dl.browseCategory.eyebrow}
          </p>
          <h2
           
           
            className="text-2xl font-bold tracking-tight cy-text-primary sm:text-3xl lg:text-4xl 3xl:text-[3rem]"
            style={{ fontFamily: DOCS_HEADING_FONT }}
          >
            {dl.browseCategory.title}
          </h2>
          <p
           
           
            className="mt-3 max-w-2xl text-sm leading-relaxed cy-text-secondary sm:text-base 3xl:max-w-3xl 3xl:text-[18px] 3xl:leading-8"
          >
            {dl.browseCategory.description}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 3xl:gap-5">
          {categoryCards.map((category) => (
            <div
              key={category.title}
              className="group rounded-[1.5rem] border cy-border-default bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-500/30 hover:shadow-[0_18px_42px_rgba(15,23,42,0.06)] dark:bg-surface-900 3xl:p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl border border-primary-500/18 bg-primary-500/8 text-primary-600 dark:text-primary-300 3xl:h-12 3xl:w-12">
                <category.Icon className="h-5 w-5 3xl:h-6 3xl:w-6" />
              </div>
              <Link href={category.href} onClick={() => recordDocsInteraction(category.href)} className="inline-block">
                <h3
                 
                 
                  className="text-base font-semibold tracking-tight cy-text-primary transition-colors hover:cy-text-brand 3xl:text-[18px]"
                >
                  {category.title}
                </h3>
              </Link>
              <p
               
               
                className="mt-2 text-sm leading-relaxed cy-text-secondary 3xl:text-[15px] 3xl:leading-7"
              >
                {category.description}
              </p>
              <ul className="mt-4 space-y-2">
                {category.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => recordDocsInteraction(item.href)}
                      className="inline-flex items-center text-sm cy-text-secondary transition-colors hover:cy-text-brand 3xl:text-[15px]"
                    >
                      <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-primary-500" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={category.href}
                onClick={() => recordDocsInteraction(category.href)}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 transition-colors hover:text-primary-500 dark:text-primary-300 dark:hover:text-primary-200 3xl:text-[15px]"
              >
                <span>{dl.browseSection}</span>
                <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 3xl:h-[18px] 3xl:w-[18px]" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t cy-border-default">
        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12 3xl:max-w-[1700px] 3xl:px-8 3xl:py-14 4xl:max-w-[2000px]">
          <div className="rounded-[1.5rem] border cy-border-default bg-white/85 px-6 py-6 dark:bg-surface-900/85 sm:px-8 sm:py-8 3xl:px-10 3xl:py-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div>
                <p
                 
                 
                  className="text-[11px] font-semibold uppercase tracking-[0.18em] cy-text-brand 3xl:text-[13px]"
                >
                  {dl.support.eyebrow}
                </p>
                <h3
                 
                 
                  className="mt-2 text-xl font-bold tracking-tight cy-text-primary 3xl:text-[1.6rem]"
                  style={{ fontFamily: DOCS_HEADING_FONT }}
                >
                  {dl.support.title}
                </h3>
                <p
                 
                 
                  className="mt-2 max-w-xl text-sm leading-relaxed cy-text-secondary 3xl:max-w-2xl 3xl:text-[16px] 3xl:leading-7"
                >
                  {dl.support.description}
                </p>
              </div>
              <div className="shrink-0">
                <a
                  href="mailto:support@cyfrosec.com"
                  className="inline-flex items-center gap-2 rounded-xl border cy-border-default bg-white px-6 py-2.5 text-sm font-semibold cy-text-primary transition-colors hover:border-primary-500/40 hover:cy-text-brand dark:bg-surface-900 3xl:px-7 3xl:py-3 3xl:text-[15px]"
                >
                  <span>{dl.support.button}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
