'use client'

import { Plus } from 'lucide-react'
import PricingV1 from './PricingV1'
import { PricingSection } from '@/components/ui/pricing'
import { pricingPlans } from './pricing-data'

const HF = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

function SectionHeading({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-12">
      <span
        className="cy-text-brand mb-3 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest"
        style={{ background: 'rgba(3,155,224,0.1)', border: '1px solid rgba(3,155,224,0.25)' }}
      >
        {label}
      </span>
      <h2
        className="cy-text-primary mt-3 text-2xl font-bold md:text-3xl"
        style={{ fontFamily: HF }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="cy-text-secondary mt-2 max-w-xl text-sm leading-relaxed md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  )
}

function AddonCard({ name, desc, note }: { name: string; desc: string; note?: string }) {
  return (
    <div
      className="group flex flex-col rounded-2xl border cy-border-default px-7 py-7 gap-5 transition-all duration-200 hover:border-[rgba(3,155,224,0.35)] hover:shadow-[0_4px_24px_rgba(3,155,224,0.08)]"
      style={{ background: 'var(--bg-canvas)' }}
    >
      <div className="flex items-center gap-3">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-200 group-hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, rgba(3,155,224,0.18) 0%, rgba(99,102,241,0.12) 100%)',
            border: '1px solid rgba(3,155,224,0.25)',
          }}
        >
          <Plus className="h-5 w-5 cy-text-brand" />
        </div>
        <h4
          className="cy-text-primary font-semibold text-base"
          style={{ fontFamily: HF }}
        >
          {name}
        </h4>
      </div>
      <p className="cy-text-secondary text-sm leading-relaxed">{desc}</p>
      {note && (
        <p
          className="cy-text-muted text-xs italic border-t pt-4"
          style={{ borderColor: 'var(--border-default)' }}
        >
          {note}
        </p>
      )}
    </div>
  )
}

export default function PricingV2() {
  return (
    <div className="w-full">

      {/* Paid Plans */}
      <section className="py-20" style={{ background: 'var(--bg-canvas)' }}>
        <PricingSection
          plans={pricingPlans}
          heading="Plans that Scale with You"
          description="Scale your security program with the coverage, SAST code security, AI capabilities, and support model your team needs."
        />
      </section>

      {/* Detailed Comparison */}
      <section
        className="py-20"
        style={{ background: 'var(--bg-canvas)' }}
      >
        <div className="mx-auto max-w-screen-xl px-4 lg:px-8">
          <SectionHeading
            label="Detailed Comparison"
            title="Full feature breakdown"
            subtitle="Feature-by-feature comparison across all plans."
          />
          <div
            className="rounded-2xl overflow-hidden border cy-border-default shadow-lg"
          >
            <PricingV1 />
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20" style={{ background: 'var(--bg-canvas)' }}>
        <div className="mx-auto max-w-screen-xl px-4 lg:px-8">
          <SectionHeading
            label="Add-ons"
            title="Extend your plan"
            subtitle="Bolt on extra capabilities or scan capacity on top of any existing subscription."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <AddonCard
              name="CyfroCode Add-on"
              desc="Full CyfroCode access for complete code security scanning."
              note="Must be added on top of another existing subscription."
            />
            <AddonCard
              name="Starter Scan Pack"
              desc="Adds 50 scans to your current plan."
            />
            <AddonCard
              name="Growth Scan Pack"
              desc="Adds 100 scans to your current plan."
            />
            <AddonCard
              name="Scale Scan Pack"
              desc="Adds 200 scans to your current plan."
            />
          </div>
        </div>
      </section>

    </div>
  )
}
