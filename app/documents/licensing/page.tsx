import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Licensing | CyfroSec Documentation',
  description: 'CyfroSec on-premise licensing — how startup verification works, license fields, and renewal.',
  alternates: { canonical: '/documents/licensing' },
}

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const TOC = [
  { id: 'overview',             label: 'Overview' },
  { id: 'how-it-works',         label: 'How Licensing Works' },
  { id: 'startup-verification', label: '1. Startup Verification' },
  { id: 'license-fields',       label: '2. License Fields' },
  { id: 'renewal',              label: '3. Renewal' },
]

export default function LicensingPage() {
  return (
    <div className="flex gap-0 w-full max-w-[1600px] mx-auto">

      {/* ── Article ──────────────────────────────────────────────────── */}
      <article className="flex-1 min-w-0 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 w-full max-w-5xl mx-auto">

        <p className="text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand mb-4">
          Deployment
        </p>

        <h1
          className="text-2xl sm:text-3xl lg:text-4xl font-bold cy-text-primary mb-4 sm:mb-6 leading-tight"
          style={{ fontFamily: HEADING_FONT }}
        >
          Licensing
        </h1>

        <div className="mt-2 rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary mb-8">
          For On Premise Deployments only
        </div>

        <p className="cy-text-secondary leading-relaxed mb-4" id="overview">
          Licensing in the current implementation is on-premise license-file based (Keygen signed key verification).
        </p>
        <p className="cy-text-secondary leading-relaxed mb-3">
          Your signed license file is the source of truth for:
        </p>
        <ul className="space-y-2 cy-text-secondary text-sm mb-10">
          {[
            'Organization licensing identity',
            'Plan name',
            'Limits and features (when included in the file metadata)',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <hr className="cy-border-default mb-10" />

        {/* How Licensing Works */}
        <section id="how-it-works" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-6"
            style={{ fontFamily: HEADING_FONT }}
          >
            How Licensing Works
          </h2>

          {/* 1. Startup verification */}
          <section id="startup-verification" className="mb-8 scroll-mt-20">
            <h3 className="text-base font-semibold cy-text-primary mb-2" style={{ fontFamily: HEADING_FONT }}>
              1. Startup verification (required)
            </h3>
            <p className="cy-text-secondary text-sm">
              When the CyfroSec server starts, it reads and verifies the license file. If the license is invalid or missing, the server will not start.
            </p>
          </section>

          {/* 2. License fields */}
          <section id="license-fields" className="mb-8 scroll-mt-20">
            <h3 className="text-base font-semibold cy-text-primary mb-3" style={{ fontFamily: HEADING_FONT }}>
              2. License fields
            </h3>
            <p className="cy-text-secondary text-sm mb-3">
              The license file contains:
            </p>
            <ul className="space-y-2 cy-text-secondary text-sm">
              {[
                'Organization name',
                'Plan name',
                'Expiry date (if applicable)',
                'Feature flags (if applicable)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* 3. Renewal */}
          <section id="renewal" className="mb-8 scroll-mt-20">
            <h3 className="text-base font-semibold cy-text-primary mb-2" style={{ fontFamily: HEADING_FONT }}>
              3. Renewal
            </h3>
            <p className="cy-text-secondary text-sm mb-5">
              Contact your CyfroSec account manager to obtain a renewed license file. Replace the existing file and restart the server.
            </p>
            <div className="rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary">
              Contact your account manager at{' '}
              <a href="mailto:sales@cyfrosec.com" className="cy-text-brand hover:underline">sales@cyfrosec.com</a>{' '}
              for licensing inquiries.
            </div>
          </section>
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
