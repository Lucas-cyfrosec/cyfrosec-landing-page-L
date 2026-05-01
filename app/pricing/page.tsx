import Link from 'next/link'
import { Cloud, Server, Sliders, ArrowRight, CheckCircle, MessageSquare } from 'lucide-react'

import { PublicPageShell } from '@/app/components/landing/PublicPageShell'
import { SectionReveal } from '@/app/components/landing/SectionReveal'
import { DEPLOYMENT_OPTIONS } from '@/app/components/landing/content'

export const metadata = {
  title: 'Pricing | CyfroSec',
  description: 'Flexible licensing aligned with your team size and environment. SaaS, on-premises, and usage-based options available.',
}

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const ICON_MAP = {
  Cloud,
  Server,
  Sliders,
} as const
type IconKey = keyof typeof ICON_MAP

const FAQS = [
  {
    q: 'Do you publish pricing publicly?',
    a: "CyfroSec is an enterprise B2B platform. Pricing depends on your deployment model, number of assets, team size, and additional modules. We don't publish a fixed price list to ensure every customer gets a plan that actually fits their environment. Contact our sales team for a tailored quote.",
  },
  {
    q: 'Is there a free trial or evaluation period?',
    a: 'Yes. We offer a guided evaluation — contact sales and we will set up a scoped trial environment matched to your infrastructure so you can assess real value before any commitment.',
  },
  {
    q: 'How is usage measured?',
    a: 'Our flexible licensing model is aligned to token units and asset inventory, not named-user seat counts. This means growing your team does not automatically increase your bill.',
  },
  {
    q: 'Can I switch between SaaS and on-premises?',
    a: 'Yes, subject to contract. Customers who start on SaaS and later require on-premises deployment due to data governance requirements can migrate with support from our team.',
  },
  {
    q: 'Are there additional costs for AI features?',
    a: 'AI Insights and CyfroAssistant are available as modules. Depending on your plan tier, they may be included or licensed separately. Our sales team will clarify this during scoping.',
  },
] as const

const INCLUDED_IN_ALL = [
  'CyfroAgent deployment',
  'Asset Discovery',
  'Network Discovery',
  'Dashboards and reporting',
  'Audit trails and activity logs',
  'GDPR-aligned data handling',
  'Email and portal support',
] as const

export default function PricingPage() {
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
              'radial-gradient(ellipse 70% 50% at 70% -10%, var(--brand-primary) 0%, transparent 65%)',
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 py-24 text-center lg:px-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand">
            Pricing
          </p>
          <h1
            className="text-4xl font-extrabold tracking-tight lg:text-6xl cy-text-primary mb-6"
            style={{ fontFamily: HEADING_FONT }}
          >
            Flexible licensing that
            <br />
            <span className="cy-text-brand">scales with you.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg cy-text-secondary mb-10">
            No per-seat penalties for team growth. No opaque pricing that favours large enterprises. 
            CyfroSec licensing is built around your assets and actual usage.
          </p>
          <Link href="/contact" className="cy-btn cy-btn-primary cy-btn-lg inline-flex items-center gap-2">
            Get a quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ── Deployment tiers ─────────────────────────────────────────── */}
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
              Choose your deployment
            </h2>
            <p className="text-center cy-text-secondary mb-12 max-w-xl mx-auto">
              All plans include core platform capabilities. Select the deployment model that fits your 
              infrastructure and data governance requirements.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {DEPLOYMENT_OPTIONS.map((opt) => {
                const Icon = ICON_MAP[opt.icon as IconKey]
                return (
                  <div
                    key={opt.title}
                    className="cy-card rounded-2xl p-6 flex flex-col"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl cy-bg-brand-soft">
                      <Icon className="h-6 w-6 cy-text-brand" />
                    </div>
                    <h3
                      className="text-lg font-semibold cy-text-primary mb-2"
                      style={{ fontFamily: HEADING_FONT }}
                    >
                      {opt.title}
                    </h3>
                    <p className="text-sm cy-text-secondary leading-relaxed mb-6 flex-1">
                      {opt.description}
                    </p>
                    <Link
                      href="/contact"
                      className="cy-btn cy-btn-secondary text-sm inline-flex items-center justify-center gap-1.5"
                    >
                      Get a quote <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ── What's included ────────────────────────────────────────────── */}
      <SectionReveal>
        <section className="mx-auto max-w-5xl px-4 py-20 lg:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2
                className="text-3xl font-bold cy-text-primary mb-4"
                style={{ fontFamily: HEADING_FONT }}
              >
                What&apos;s included in every plan
              </h2>
              <p className="cy-text-secondary mb-8">
                Core security capabilities are available regardless of deployment model. Advanced modules 
                such as AI Insights and CyfroAssistant are available as add-ons.
              </p>
              <ul className="space-y-3">
                {INCLUDED_IN_ALL.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm cy-text-secondary">
                    <CheckCircle className="h-4 w-4 shrink-0 cy-text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="cy-card rounded-2xl p-8 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl cy-bg-brand-soft">
                <MessageSquare className="h-7 w-7 cy-text-brand" />
              </div>
              <h3
                className="text-xl font-bold cy-text-primary mb-3"
                style={{ fontFamily: HEADING_FONT }}
              >
                Talk to our team
              </h3>
              <p className="text-sm cy-text-secondary mb-6">
                We&apos;ll scope a plan based on your asset inventory, team size, and feature requirements — 
                no automated calculator, no guesswork.
              </p>
              <Link
                href="/contact"
                className="cy-btn cy-btn-primary inline-flex items-center gap-2 w-full justify-center"
              >
                Contact sales <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="mt-4 text-xs cy-text-muted">
                Typically respond within 1 business day
              </p>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <SectionReveal>
        <section
          className="py-20"
          style={{ background: 'var(--bg-elevated)' }}
        >
          <div className="mx-auto max-w-3xl px-4 lg:px-6">
            <h2
              className="text-3xl font-bold cy-text-primary mb-3 text-center"
              style={{ fontFamily: HEADING_FONT }}
            >
              Common questions
            </h2>
            <p className="text-center cy-text-secondary mb-12">
              Everything you need to know before having a pricing conversation.
            </p>
            <div className="space-y-6">
              {FAQS.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-2xl border cy-border-default cy-bg-canvas p-6"
                >
                  <h3
                    className="text-base font-semibold cy-text-primary mb-2"
                    style={{ fontFamily: HEADING_FONT }}
                  >
                    {faq.q}
                  </h3>
                  <p className="text-sm cy-text-secondary leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ── Final CTA ─────────────────────────────────────────────────── */}
      <section
        className="py-24 text-center"
        style={{ background: 'var(--bg-canvas)' }}
      >
        <h2
          className="text-3xl font-extrabold cy-text-primary mb-4"
          style={{ fontFamily: HEADING_FONT }}
        >
          Ready to get started?
        </h2>
        <p className="cy-text-secondary mb-8 max-w-md mx-auto">
          Start your free evaluation or talk to our sales team to find the right plan.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/get-started" className="cy-btn cy-btn-primary cy-btn-lg">
            Get started free
          </Link>
          <Link href="/contact" className="cy-btn cy-btn-secondary cy-btn-lg inline-flex items-center gap-2">
            Talk to sales <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PublicPageShell>
  )
}
