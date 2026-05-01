import Link from 'next/link'
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react'

import { PublicPageShell } from '@/app/components/landing/PublicPageShell'
import { SectionReveal } from '@/app/components/landing/SectionReveal'
import {
  SOLUTIONS,
  FEATURE_COMPARISON,
  PERSONAS,
  PRODUCTS,
} from '@/app/components/landing/content'

export const metadata = {
  title: 'Solutions | CyfroSec',
  description: 'One unified vulnerability assessment platform for every security use case — from endpoint scanning to AI-powered remediation.',
}

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

export default function SolutionsPage() {
  return (
    <PublicPageShell>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'var(--bg-canvas)' }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 30% -10%, var(--brand-primary) 0%, transparent 65%)',
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 py-24 lg:px-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand">
            Solutions
          </p>
          <h1
            className="text-4xl font-extrabold tracking-tight lg:text-6xl cy-text-primary mb-6 max-w-3xl"
            style={{ fontFamily: HEADING_FONT }}
          >
            One platform for every security use case.
          </h1>
          <p className="max-w-2xl text-lg cy-text-secondary mb-10">
            Whether you&apos;re an IT engineer reducing backlog, a manager tracking outcomes, or a security 
            team managing complex coverage — CyfroSec has the solution built for your workflow.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/get-started" className="cy-btn cy-btn-primary cy-btn-lg">
              Get started free
            </Link>
            <Link href="/contact" className="cy-btn cy-btn-secondary cy-btn-lg">
              Book a demo
            </Link>
          </div>
        </div>
      </section>

      {/* ── Solutions overview ────────────────────────────────────────── */}
      <SectionReveal>
        <section
          className="py-20"
          style={{ background: 'var(--bg-elevated)' }}
        >
          <div className="mx-auto max-w-5xl px-4 lg:px-6">
            <h2
              className="text-3xl font-bold cy-text-primary mb-3 text-center"
              style={{ fontFamily: HEADING_FONT }}
            >
              Core solutions
            </h2>
            <p className="text-center cy-text-secondary mb-12 max-w-xl mx-auto">
              Four problem areas. Four targeted solutions. One connected platform.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {SOLUTIONS.map((sol) => (
                <Link
                  key={sol.title}
                  href={sol.href}
                  className="cy-card group rounded-2xl p-6 transition-all hover:-translate-y-1"
                >
                  <h3
                    className="text-lg font-semibold cy-text-primary mb-2 group-hover:cy-text-brand transition-colors"
                    style={{ fontFamily: HEADING_FONT }}
                  >
                    {sol.title}
                  </h3>
                  <p className="text-sm cy-text-secondary leading-relaxed mb-4">{sol.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium cy-text-brand">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ── Products ─────────────────────────────────────────────────── */}
      <SectionReveal>
        <section className="mx-auto max-w-5xl px-4 py-20 lg:px-6">
          <h2
            className="text-3xl font-bold cy-text-primary mb-3 text-center"
            style={{ fontFamily: HEADING_FONT }}
          >
            Explore individual products
          </h2>
          <p className="text-center cy-text-secondary mb-12 max-w-xl mx-auto">
            Each product addresses a specific challenge while connecting seamlessly to the broader platform.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product) => (
              <Link
                key={product.slug}
                href={product.href}
                className="cy-card group rounded-2xl p-5 transition-all hover:-translate-y-1"
              >
                <p
                  className="text-base font-semibold cy-text-primary mb-1 group-hover:cy-text-brand transition-colors"
                  style={{ fontFamily: HEADING_FONT }}
                >
                  {product.name}
                </p>
                <p className="text-xs cy-text-muted mb-3 italic">{product.tagline}</p>
                <p className="text-sm cy-text-secondary leading-relaxed line-clamp-3">
                  {product.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium cy-text-brand">
                  Explore <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </SectionReveal>

      {/* ── Feature comparison ────────────────────────────────────────── */}
      <SectionReveal>
        <section
          className="py-20"
          style={{ background: 'var(--bg-elevated)' }}
        >
          <div className="mx-auto max-w-5xl px-4 lg:px-6">
            <h2
              className="text-3xl font-bold cy-text-primary mb-3 text-center"
              style={{ fontFamily: HEADING_FONT }}
            >
              CyfroSec vs. traditional tooling
            </h2>
            <p className="text-center cy-text-secondary mb-12 max-w-xl mx-auto">
              Most legacy tools were built for specialists. CyfroSec was built for outcomes.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr>
                    <th className="text-left py-3 px-4 text-xs font-semibold uppercase tracking-wide cy-text-muted w-1/3">
                      Focus area
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-semibold uppercase tracking-wide cy-text-muted w-1/3">
                      Traditional tools
                    </th>
                    <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wide cy-text-brand text-left w-1/3">
                      CyfroSec
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {FEATURE_COMPARISON.map((row, i) => (
                    <tr
                      key={row.focus}
                      className={`border-t cy-border-default ${i % 2 === 0 ? 'cy-bg-muted' : ''}`}
                    >
                      <td className="py-4 px-4 font-medium cy-text-primary align-top">
                        {row.focus}
                      </td>
                      <td className="py-4 px-4 cy-text-secondary align-top">
                        <span className="inline-flex items-start gap-2">
                          <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500/70" />
                          {row.traditional}
                        </span>
                      </td>
                      <td className="py-4 px-4 cy-text-secondary align-top">
                        <span className="inline-flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 cy-text-brand" />
                          {row.cyfrosec}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ── By persona ────────────────────────────────────────────────── */}
      <SectionReveal>
        <section className="mx-auto max-w-5xl px-4 py-20 lg:px-6">
          <h2
            className="text-3xl font-bold cy-text-primary mb-3 text-center"
            style={{ fontFamily: HEADING_FONT }}
          >
            Built for your team
          </h2>
          <p className="text-center cy-text-secondary mb-12 max-w-xl mx-auto">
            CyfroSec adapts its outputs and interfaces to match each team member&apos;s needs.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PERSONAS.map((p) => (
              <div key={p.persona} className="cy-card rounded-2xl p-5">
                <h3
                  className="text-sm font-semibold cy-text-primary mb-2"
                  style={{ fontFamily: HEADING_FONT }}
                >
                  {p.persona}
                </h3>
                <p className="text-xs cy-text-secondary leading-relaxed">{p.value}</p>
              </div>
            ))}
          </div>
        </section>
      </SectionReveal>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section
        className="py-24 text-center"
        style={{ background: 'var(--bg-canvas)' }}
      >
        <h2
          className="text-3xl font-extrabold cy-text-primary mb-4"
          style={{ fontFamily: HEADING_FONT }}
        >
          Find the right solution for your team
        </h2>
        <p className="cy-text-secondary mb-8 max-w-md mx-auto">
          Not sure where to start? Our team will identify the right approach for your environment.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="cy-btn cy-btn-primary cy-btn-lg inline-flex items-center gap-2">
            Talk to sales <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/platform" className="cy-btn cy-btn-secondary cy-btn-lg">
            Explore the platform
          </Link>
        </div>
      </section>
    </PublicPageShell>
  )
}
