'use client'

import { Fragment } from 'react'
import { Check, Minus } from 'lucide-react'
import {
  pricingComparisonPlans as PLANS,
  pricingFeatureMatrix as FEATURES,
  type FeatureValue,
} from './pricing-data'

const HF = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

// ── Cell renderer ─────────────────────────────────────────────────────────────

function CellValue({ value }: { value: FeatureValue }) {
  if (value === true)
    return <Check className="mx-auto h-5 w-5 text-emerald-400" strokeWidth={2.5} />
  if (value === false)
    return <Minus className="mx-auto h-5 w-5 text-white/20" strokeWidth={2} />
  return <span className="text-sm cy-text-secondary leading-snug">{value}</span>
}

// ── Main component ────────────────────────────────────────────────────────────

export default function PricingV1() {
  return (
    <div className="w-full space-y-16">

      {/* ── Pricing Table ── */}
      <div
        className="overflow-x-auto rounded-2xl border cy-border-default"
        style={{ background: 'var(--bg-canvas)' }}
      >
        <table className="w-full text-sm border-collapse table-fixed">

          {/* Plan header row */}
          <thead>
            <tr>
              <th className="w-[28%] p-6 text-left align-middle border-b cy-border-default border-r cy-border-default">
                <span className="text-xs font-bold uppercase tracking-widest cy-text-muted">Features</span>
              </th>
              {PLANS.map((plan, i) => (
                <th
                  key={plan.name}
                  className={`p-6 text-center align-middle border-b cy-border-default relative ${
                    i < PLANS.length - 1 ? 'border-r cy-border-default' : ''
                  }`}
                  style={{
                    width: `${72 / PLANS.length}%`,
                    ...(plan.highlight ? { background: 'rgba(14,165,233,0.05)' } : {}),
                  }}
                >
                  {plan.highlight && (
                    <div
                      className="absolute inset-x-0 top-0 h-0.5 rounded-t-2xl"
                      style={{ background: 'linear-gradient(90deg, var(--brand-primary), #6366f1)' }}
                    />
                  )}
                  <span className="text-base font-bold cy-text-primary" style={{ fontFamily: HF }}>
                    {plan.name}
                  </span>
                </th>
              ))}
            </tr>
          </thead>

          {/* Feature rows */}
          <tbody>
            {FEATURES.map((category, ci) => (
              <Fragment key={category.category}>
                <tr>
                  <td
                    colSpan={PLANS.length + 1}
                    className="px-6 py-3 text-xs font-bold uppercase tracking-widest cy-text-brand border-b cy-border-default"
                    style={{ background: 'rgba(14,165,233,0.05)' }}
                  >
                    {category.category}
                  </td>
                </tr>
                {category.rows.map((row, ri) => (
                  <tr
                    key={`${ci}-${ri}`}
                    className="border-b cy-border-default last:border-b-0 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="px-6 py-5 cy-text-secondary border-r cy-border-default leading-snug text-sm">
                      {row.label}
                    </td>
                    {row.values.map((val, pi) => (
                      <td
                        key={pi}
                        className={`px-4 py-5 text-center align-middle ${
                          pi < PLANS.length - 1 ? 'border-r cy-border-default' : ''
                        }`}
                        style={PLANS[pi].highlight ? { background: 'rgba(14,165,233,0.03)' } : undefined}
                      >
                        <CellValue value={val} />
                      </td>
                    ))}
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}
