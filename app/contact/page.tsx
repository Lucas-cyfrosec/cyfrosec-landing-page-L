'use client'

import { ContactSalesForm } from '@/app/components/landing/ContactSalesForm'
import { PublicPageShell } from '@/app/components/landing/PublicPageShell'
import { Mail } from 'lucide-react'
import { useTranslation } from '@/src/i18n'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

export default function ContactPage() {
  const { t } = useTranslation()
  const pg = t.pages.contact

  return (
    <PublicPageShell>
      {/* Header */}
      <section className="relative mx-auto max-w-7xl px-4 pb-12 pt-16 lg:px-6 lg:pt-20 3xl:max-w-[1700px] 3xl:px-8 3xl:pb-16 3xl:pt-24 4xl:max-w-[2000px] bg-white dark:bg-surface-900">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[380px]
            bg-[radial-gradient(circle_at_20%_20%,rgba(3,155,224,0.16),transparent_40%)]"
        />
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand 3xl:text-[13px]">{pg.contactLabel}</p>
        <h1
         
          className="text-4xl font-extrabold tracking-tight sm:text-5xl cy-text-primary 3xl:max-w-4xl 3xl:text-6xl 4xl:text-[4.5rem]"
          style={{ fontFamily: HEADING_FONT }}
        >
          {pg.heroTitle}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed cy-text-secondary 3xl:max-w-2xl 3xl:text-lg 3xl:leading-8">
          {pg.heroSubtitle}
        </p>
      </section>

      {/* Form + FAQ */}
      <section className="pb-20 lg:pb-24 bg-white dark:bg-surface-900">
        <div className="mx-auto max-w-7xl px-4 lg:px-6 3xl:max-w-[1700px] 3xl:px-8 4xl:max-w-[2000px]">
          <div className="grid gap-10 lg:grid-cols-12 3xl:gap-14">
            {/* Form */}
            <div className="lg:col-span-8 lg:order-1">
              <div className="cy-card rounded-2xl p-6 3xl:rounded-[1.75rem] 3xl:p-8 4xl:p-10">
                <ContactSalesForm />
              </div>
            </div>

            {/* FAQ / context */}
            <aside className="lg:col-span-4 lg:order-2 space-y-8 3xl:space-y-10">
              {/* Steps */}
              <div>
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] cy-text-brand 3xl:text-[13px]">
                  {pg.whatHappensNext}
                </p>
                <ol className="relative space-y-0 list-none">
                  {pg.steps.map((step, i, arr) => (
                    <li key={step.title} className="flex gap-4 3xl:gap-5">
                      <div className="flex flex-col items-center">
                        <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-[11px] font-bold text-primary-400 ring-1 ring-primary-500/30 3xl:size-8 3xl:text-[12px]">
                          {i + 1}
                        </span>
                        {i < arr.length - 1 && (
                          <span className="mt-1 mb-1 w-px flex-1 bg-primary-500/15 3xl:mt-1.5" style={{ minHeight: '28px' }} />
                        )}
                      </div>
                      <div className="pb-6 3xl:pb-7">
                        <p className="text-sm font-semibold cy-text-primary 3xl:text-[15px]">{step.title}</p>
                        <p className="mt-0.5 text-sm leading-relaxed cy-text-secondary 3xl:text-[15px] 3xl:leading-7">{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Contact methods */}
              <div className="space-y-3">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] cy-text-muted 3xl:text-[13px]">{pg.otherWays}</p>
                <div className="flex items-center gap-3 rounded-xl border cy-border-default p-3 cy-bg-muted 3xl:gap-4 3xl:p-4">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary-500/10 3xl:size-10">
                    <Mail className="size-4 text-primary-400 3xl:size-[18px]" />
                  </div>
                  <div>
                    <p className="text-xs cy-text-muted 3xl:text-[13px]">{pg.emailLabel}</p>
                    <p className="text-sm font-medium cy-text-primary 3xl:text-[15px]">sales@cyfrosec.com</p>
                  </div>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </PublicPageShell>
  )
}
