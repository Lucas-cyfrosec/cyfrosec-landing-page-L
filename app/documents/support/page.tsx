import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Support | CyfroSec Documentation',
  description: 'How to log a support ticket in the CyfroSec portal — what to include and how to reach the support team.',
  alternates: { canonical: '/documents/support' },
}

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const TOC = [
  { id: 'overview',        label: 'Overview' },
  { id: 'what-you-can-send', label: 'What You Can Send' },
  { id: 'helpful-details', label: 'Helpful Details to Include' },
]

export default function SupportPage() {
  return (
    <div className="flex gap-0 w-full max-w-[1600px] mx-auto">

      {/* ── Article ──────────────────────────────────────────────────── */}
      <article className="flex-1 min-w-0 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 w-full max-w-5xl mx-auto">

        <p className="text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand mb-4">
          Getting Started
        </p>

        <h1
          className="text-2xl sm:text-3xl lg:text-4xl font-bold cy-text-primary mb-4 sm:mb-6 leading-tight"
          style={{ fontFamily: HEADING_FONT }}
        >
          Logging Support Tickets
        </h1>

        <p className="cy-text-secondary leading-relaxed mb-6" id="overview">
          Use the support form in the CyfroSec portal to submit issues, attach logs or screenshots, and receive
          help from the support team. Tickets are delivered to our support inbox and are not stored in the
          product database.
        </p>

        <div className="rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary mb-10">
          Need Help? Contact our Support Team at{' '}
          <a href="mailto:support@cyfrosec.com" className="cy-text-brand hover:underline">support@cyfrosec.com</a>
        </div>

        <hr className="cy-border-default mb-10" />

        {/* What You Can Send */}
        <section id="what-you-can-send" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            What You Can Send
          </h2>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {[
              'Issue type (e.g., CyfroAssistant, Asset Discovery, Dashboard)',
              'Scan name for scan-related issues',
              'Description and frequency',
              'Optional files (logs, screenshots)',
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

        {/* Helpful Details */}
        <section id="helpful-details" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Helpful Details to Include
          </h2>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {[
              'What you expected vs what happened',
              'When the issue started',
              'Whether the issue is reproducible',
              'Links or screenshots, if available',
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
