import { ArrowRight, BadgeCheck, Building2, Globe, Shield } from 'lucide-react'
import Link from 'next/link'
import { PublicPageShell } from '@/app/components/landing/PublicPageShell'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

export const metadata = {
  title: 'About CyfroSec — Enterprise Vulnerability Assessment Platform',
  description:
    'CyfroSec is building the AI-powered vulnerability assessment platform that helps operations and security teams close the gap between finding risks and fixing them.',
}

export default function AboutPage() {
  return (
    <PublicPageShell>
      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 lg:px-6 lg:pt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[400px]
            bg-[radial-gradient(circle_at_20%_20%,rgba(3,155,224,0.16),transparent_40%)]"
        />
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand">About CyfroSec</p>
          <h1
            className="text-4xl font-extrabold tracking-tight sm:text-5xl cy-text-primary"
            style={{ fontFamily: HEADING_FONT }}
          >
            We built the security platform we wished we had.
          </h1>
          <p className="mt-5 text-base leading-relaxed cy-text-secondary max-w-2xl">
            CyfroSec was created because existing vulnerability tools were either too complex for the teams
            that needed them or too shallow for the threats they were trying to address. We set out to build
            something different — an AI-powered Vulnerability Assessment as a Service platform that works for
            everyone on the team, not just the CISO.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="border-t cy-border-default py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid gap-10 lg:grid-cols-3">
            {[
              {
                icon: Shield,
                title: 'Mission',
                text: 'Make enterprise-grade vulnerability assessment accessible to every organisation — from global enterprises to growing SMBs — without sacrificing depth or accuracy.',
              },
              {
                icon: Globe,
                title: 'Vision',
                text: 'A world where organisations know their full attack surface in real time, understand what matters most, and can act on it without waiting for specialist availability.',
              },
              {
                icon: Building2,
                title: 'Values',
                text: 'Clarity over complexity. Actionability over noise. Built for the whole team — not only for the security specialists.',
              },
            ].map((item) => (
              <article key={item.title} className="cy-card rounded-2xl p-6">
                <div className="mb-4 inline-flex rounded-xl cy-bg-brand-soft p-2.5">
                  <item.icon className="size-5 cy-text-brand" />
                </div>
                <h2
                  className="text-xl font-bold cy-text-primary"
                  style={{ fontFamily: HEADING_FONT }}
                >
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed cy-text-secondary">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance commitments */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand mb-3">Our commitments</p>
          <h2
            className="text-2xl font-bold tracking-tight cy-text-primary mb-8"
            style={{ fontFamily: HEADING_FONT }}
          >
            Built for trust, from the ground up.
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              'GDPR-aligned privacy controls',
              'ISO readiness support built-in',
              'Audit-ready reporting',
              'Made in the EU',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border cy-border-default cy-bg-elevated px-4 py-3"
              >
                <BadgeCheck className="size-5 text-success-500 shrink-0" />
                <span className="text-sm cy-text-secondary">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t cy-border-default py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6 text-center">
          <h2
            className="text-3xl font-bold tracking-tight cy-text-primary"
            style={{ fontFamily: HEADING_FONT }}
          >
            Ready to see CyfroSec in action?
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/get-started" className="cy-btn cy-btn-primary cy-btn-lg gap-2">
              Get Started Free
              <ArrowRight className="size-4" />
            </Link>
            <Link href="/contact" className="cy-btn cy-btn-secondary cy-btn-lg">
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </PublicPageShell>
  )
}
