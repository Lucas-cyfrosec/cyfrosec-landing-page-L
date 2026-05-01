'use client'

export const DOCS_POPULARITY_EVENT = 'cyfrosec:docs-popularity-changed'

const DOCS_POPULARITY_STORAGE_KEY = 'cyfrosec.docs.popularity'

export type DocsPopularityCounts = Record<string, number>

export function normalizeDocsHref(href: string) {
  const [pathWithoutHash] = href.split('#')
  const [pathWithoutQuery] = pathWithoutHash.split('?')

  if (!pathWithoutQuery || pathWithoutQuery === '/') {
    return pathWithoutQuery || '/'
  }

  return pathWithoutQuery.endsWith('/') ? pathWithoutQuery.slice(0, -1) : pathWithoutQuery
}

export function isTrackableDocsHref(href: string) {
  const normalizedHref = normalizeDocsHref(href)
  return normalizedHref.startsWith('/documents') &&
    normalizedHref !== '/documents' &&
    normalizedHref !== '/documents/landing'
}

export function getDocsPopularityCounts(): DocsPopularityCounts {
  if (typeof window === 'undefined') {
    return {}
  }

  try {
    const raw = window.localStorage.getItem(DOCS_POPULARITY_STORAGE_KEY)
    if (!raw) {
      return {}
    }

    const parsed = JSON.parse(raw) as DocsPopularityCounts
    return typeof parsed === 'object' && parsed !== null ? parsed : {}
  } catch {
    return {}
  }
}

export function recordDocsInteraction(href: string) {
  if (typeof window === 'undefined') {
    return
  }

  const normalizedHref = normalizeDocsHref(href)
  if (!isTrackableDocsHref(normalizedHref)) {
    return
  }

  const counts = getDocsPopularityCounts()
  counts[normalizedHref] = (counts[normalizedHref] ?? 0) + 1

  window.localStorage.setItem(DOCS_POPULARITY_STORAGE_KEY, JSON.stringify(counts))
  window.dispatchEvent(new CustomEvent(DOCS_POPULARITY_EVENT))
}
