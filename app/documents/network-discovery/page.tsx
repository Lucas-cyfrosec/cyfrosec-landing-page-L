import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Network Discovery Scan | CyfroSec Documentation',
  description: 'How the Network Discovery scan identifies open ports and services to drive vulnerability detection and analysis.',
  alternates: { canonical: '/documents/network-discovery' },
}

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const TOC = [
  { id: 'overview', label: 'Overview' },
]

export default function NetworkDiscoveryPage() {
  return (
    <div className="flex gap-0 w-full max-w-[1600px] mx-auto">

      {/* ── Article ──────────────────────────────────────────────────── */}
      <article className="flex-1 min-w-0 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 w-full max-w-5xl mx-auto">

        <p className="text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand mb-4">
          Scans
        </p>

        <h1
          className="text-2xl sm:text-3xl lg:text-4xl font-bold cy-text-primary mb-4 sm:mb-6 leading-tight"
          style={{ fontFamily: HEADING_FONT }}
        >
          Network Discovery Scan
        </h1>

        <p className="cy-text-secondary leading-relaxed mb-4" id="overview">
          Network Discovery scan identifies open ports and services to drive vulnerability detection and analysis.
        </p>

        <ul className="space-y-2 cy-text-secondary text-sm mb-10">
          {[
            'Run during scheduled scanning jobs or on agent request.',
            'Fast scanning for performance and reduced noise.',
            'Helps discover vulnerabilities and exposed ports.',
            'Collect extra metadata (e.g., TLS certificate info).',
            'Feed discovered insight into the fingerprinting and vulnerability pipelines.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

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
