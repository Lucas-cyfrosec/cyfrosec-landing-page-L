import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

interface Benefit {
  title: string
  description: string
}

interface ProductPageTemplateProps {
  name: string
  tagline: string
  description: string
  icon: LucideIcon
  capabilities: readonly string[]
  benefits: readonly Benefit[]
}

export function ProductPageTemplate({
  name,
  tagline,
  description,
  icon: Icon,
  capabilities,
  benefits,
}: ProductPageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px]
            bg-[radial-gradient(circle_at_20%_20%,rgba(3,155,224,0.18),transparent_40%),
                radial-gradient(circle_at_80%_10%,rgba(254,144,77,0.14),transparent_36%)]"
        />
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-16 lg:px-6 lg:pt-20">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex rounded-xl cy-bg-brand-soft p-3">
              <Icon className="size-6 cy-text-brand" />
            </div>
            <h1
              className="text-4xl font-extrabold tracking-tight sm:text-5xl cy-text-primary"
              style={{ fontFamily: HEADING_FONT }}
            >
              {name}
            </h1>
            <p
              className="mt-3 text-xl font-medium cy-text-brand"
              style={{ fontFamily: HEADING_FONT }}
            >
              {tagline}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed cy-text-secondary">{description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`${process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.cyfrosec.com'}/get-started`} className="cy-btn cy-btn-primary cy-btn-lg gap-2">
                Get Started Free
                <ArrowRight className="size-4" />
              </Link>
              <Link href="/contact" className="cy-btn cy-btn-secondary cy-btn-lg">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] cy-text-brand mb-3">Capabilities</p>
              <h2
                className="text-2xl font-bold tracking-tight sm:text-3xl cy-text-primary mb-6"
                style={{ fontFamily: HEADING_FONT }}
              >
                What {name} does
              </h2>
              <ul className="space-y-3">
                {capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-3 text-sm cy-text-secondary">
                    <Check className="mt-0.5 size-4 shrink-0 text-success-500" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] cy-text-brand mb-3">Key benefits</p>
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="rounded-2xl border cy-border-default cy-bg-elevated p-5"
                >
                  <h3
                    className="text-base font-semibold cy-text-primary"
                    style={{ fontFamily: HEADING_FONT }}
                  >
                    {b.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed cy-text-secondary">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform fit */}
      <section className="border-t cy-border-default py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="rounded-3xl bg-[linear-gradient(135deg,color-mix(in_srgb,var(--color-primary-500)_12%,var(--bg-elevated)),color-mix(in_srgb,var(--brand-accent-orange)_10%,var(--bg-elevated)))] p-7 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] cy-text-brand mb-2">Part of the CyfroSec platform</p>
            <h3
              className="text-2xl font-bold tracking-tight cy-text-primary"
              style={{ fontFamily: HEADING_FONT }}
            >
              {name} is stronger with the full platform.
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed cy-text-secondary">
              Combine {name} with Cyfro AI Insights, CyfroAssistant, and continuous discovery to get a
              complete picture of your risk surface and a clear path to remediation.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/platform" className="cy-btn cy-btn-primary gap-2">
                View Platform
                <ArrowRight className="size-4" />
              </Link>
              <Link href={`${process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.cyfrosec.com'}/get-started`} className="cy-btn cy-btn-secondary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
