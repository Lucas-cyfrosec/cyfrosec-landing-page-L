'use client'

import { useMemo, useRef, useState } from 'react'
import { submitBookDemoApiV1SupportBookDemoPost } from '@/src/client'
import type { DemoDeploymentModel, DemoPrimaryUseCase } from '@/src/client'
import { ThankYouDocLinks } from '@/app/components/landing/ThankYouDocLinks'
type BookDemoFormState = {
  fullName: string
  workEmail: string
  companyName: string
  roleTitle: string
  country: string
  companySize: string
  deploymentModel: DemoDeploymentModel | ''
  primaryUseCase: DemoPrimaryUseCase | ''
  environmentSummary: string
  preferredContactWindow: string
  message: string
  website: string
}

const INITIAL_STATE: BookDemoFormState = {
  fullName: '',
  workEmail: '',
  companyName: '',
  roleTitle: '',
  country: '',
  companySize: '',
  deploymentModel: '',
  primaryUseCase: '',
  environmentSummary: '',
  preferredContactWindow: '',
  message: '',
  website: '',
}

function getErrorMessage(errorPayload: unknown, fallback: string): string {
  if (!errorPayload || typeof errorPayload !== 'object') return fallback
  const data = errorPayload as { message?: string; detail?: unknown; errors?: unknown }
  if (typeof data.message === 'string' && data.message.trim()) return data.message
  if (Array.isArray(data.detail) && data.detail.length > 0) {
    const first = data.detail[0] as { msg?: string }
    if (first && typeof first.msg === 'string') return first.msg
  }
  if (typeof data.detail === 'string') return data.detail
  if (Array.isArray(data.errors) && data.errors.length > 0) {
    const firstError = data.errors[0]
    if (typeof firstError === 'string') return firstError
  }
  return fallback
}

export function BookDemoForm() {
  const [form, setForm] = useState<BookDemoFormState>(INITIAL_STATE)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const formStartedAt = useRef(new Date().toISOString())

  const copy = {
    submitError: 'Failed to submit book demo request',
    successTitle: 'Request received!',
    successBody: 'Thank you for your interest! A CyfroSec security specialist will contact you shortly to schedule your demo.',
    fullName: 'Full name',
    workEmail: 'Work email',
    company: 'Company',
    role: 'Role',
    country: 'Country / Region',
    companySize: 'Company size',
    selectSize: 'Select size',
    sizeOptions: ['1–10 employees', '11–50 employees', '51–200 employees', '201–1,000 employees', '1,000+ employees'],
    deployment: 'Deployment model',
    selectDeployment: 'Select deployment model',
    deploymentOptions: ['SaaS', 'On-Prem', 'Hybrid', 'Not Sure'],
    useCase: 'Primary use case',
    selectUseCase: 'Select primary use case',
    useCaseOptions: [
      'Attack Surface Management',
      'Vulnerability Management',
      'Agent-Based Scanning',
      'Compliance & Reporting',
      'AI-Guided Remediation',
      'Platform Overview',
      'Not Sure',
    ],
    environment: 'Environment summary',
    environmentPlaceholder: "Brief description of your environment or the risks you'd like the demo to cover (min 20 characters)",
    minChars: 'characters minimum — please add a few more details',
    contactWindow: 'Preferred contact window (optional)',
    contactWindowPlaceholder: 'e.g. Weekdays after 14:00 CET',
    notes: "Anything else you'd like us to know? (optional)",
    submitting: 'Submitting…',
    submit: 'Book My Demo',
    footer: 'By submitting this form you agree to be contacted by CyfroSec regarding your demo request.',
    countryPrefix: 'Country/Region',
    notesPrefix: 'Notes',
  }

  const isValid = useMemo(
    () =>
      form.fullName.trim().length > 1 &&
      form.workEmail.trim().length > 4 &&
      form.companyName.trim().length > 1 &&
      form.roleTitle.trim().length > 1 &&
      form.country.trim().length > 1 &&
      form.companySize.trim().length > 0 &&
      form.deploymentModel !== '' &&
      form.primaryUseCase !== '' &&
      form.environmentSummary.trim().length >= 20,
    [form],
  )

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!isValid) return

    setLoading(true)
    setError(null)

    try {
      const response = await submitBookDemoApiV1SupportBookDemoPost({
        body: {
          full_name: form.fullName,
          work_email: form.workEmail,
          company_name: form.companyName,
          role_title: form.roleTitle,
          deployment_model: form.deploymentModel as DemoDeploymentModel,
          primary_use_case: form.primaryUseCase as DemoPrimaryUseCase,
          environment_summary: form.environmentSummary,
          client_timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          company_size: form.companySize || undefined,
          preferred_contact_window: form.preferredContactWindow || undefined,
          message: [
            `${copy.countryPrefix}: ${form.country}.`,
            form.message ? `${copy.notesPrefix}: ${form.message}` : null,
          ].filter(Boolean).join(' ') || undefined,
          source_url: typeof window !== 'undefined' ? window.location.href : undefined,
          consent_to_contact: true,
          website: form.website,
          form_started_at: formStartedAt.current,
        },
      })

      if (response.error) {
        throw new Error(getErrorMessage(response.error, copy.submitError))
      }
      if (!response.data?.success) {
        throw new Error(getErrorMessage(response.data, copy.submitError))
      }

      setSuccess(true)
      setForm(INITIAL_STATE)
      formStartedAt.current = new Date().toISOString()
    } catch (err) {
      setError(err instanceof Error ? err.message : copy.submitError)
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full rounded-xl border cy-border-default cy-bg-elevated px-3 py-2.5 text-sm cy-text-primary placeholder:cy-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500/30'

  const labelClass = 'mb-1.5 block text-xs font-semibold uppercase tracking-wide cy-text-muted'

  if (success) {
    return (
      <div>
        <div className="rounded-2xl border border-primary-500/20 bg-primary-500/10 px-6 py-10 text-center">
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary-500/20">
            <svg className="size-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-base font-semibold text-surface-900 dark:text-white">{copy.successTitle}</p>
          <p className="mt-2 text-sm text-surface-500 dark:text-white/70">
            {copy.successBody}
          </p>
        </div>
        <ThankYouDocLinks />
      </div>
    )
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={labelClass}>{copy.fullName}</label>
          <input id="fullName" name="fullName" autoComplete="name" className={inputClass} value={form.fullName} onChange={(e) => setForm((prev) => ({ ...prev, fullName: e.target.value }))} required />
        </div>

        <div>
          <label htmlFor="workEmail" className={labelClass}>{copy.workEmail}</label>
          <input id="workEmail" name="workEmail" autoComplete="email" className={inputClass} type="email" value={form.workEmail} onChange={(e) => setForm((prev) => ({ ...prev, workEmail: e.target.value }))} required />
        </div>

        <div>
          <label htmlFor="companyName" className={labelClass}>{copy.company}</label>
          <input id="companyName" name="companyName" autoComplete="organization" className={inputClass} value={form.companyName} onChange={(e) => setForm((prev) => ({ ...prev, companyName: e.target.value }))} required />
        </div>

        <div>
          <label htmlFor="roleTitle" className={labelClass}>{copy.role}</label>
          <input id="roleTitle" name="roleTitle" autoComplete="organization-title" className={inputClass} value={form.roleTitle} onChange={(e) => setForm((prev) => ({ ...prev, roleTitle: e.target.value }))} required />
        </div>
      </div>

      <div>
        <label htmlFor="country" className={labelClass}>{copy.country}</label>
        <input id="country" name="country" autoComplete="country-name" className={inputClass} value={form.country} onChange={(e) => setForm((prev) => ({ ...prev, country: e.target.value }))} required />
      </div>

      <div>
        <label htmlFor="companySize" className={labelClass}>{copy.companySize}</label>
        <select id="companySize" name="companySize" autoComplete="off" className={inputClass} value={form.companySize} onChange={(e) => setForm((prev) => ({ ...prev, companySize: e.target.value }))}>
          <option value="">{copy.selectSize}</option>
          <option value="1-10">{copy.sizeOptions[0]}</option>
          <option value="11-50">{copy.sizeOptions[1]}</option>
          <option value="51-200">{copy.sizeOptions[2]}</option>
          <option value="201-1000">{copy.sizeOptions[3]}</option>
          <option value="1000+">{copy.sizeOptions[4]}</option>
        </select>
      </div>

      <div>
        <label htmlFor="deploymentModel" className={labelClass}>{copy.deployment}</label>
        <select id="deploymentModel" name="deploymentModel" autoComplete="off" className={inputClass} value={form.deploymentModel} onChange={(e) => setForm((prev) => ({ ...prev, deploymentModel: e.target.value as DemoDeploymentModel | '' }))} required>
          <option value="">{copy.selectDeployment}</option>
          <option value="SaaS">{copy.deploymentOptions[0]}</option>
          <option value="On-Prem">{copy.deploymentOptions[1]}</option>
          <option value="Hybrid">{copy.deploymentOptions[2]}</option>
          <option value="Not Sure">{copy.deploymentOptions[3]}</option>
        </select>
      </div>

      <div>
        <label htmlFor="primaryUseCase" className={labelClass}>{copy.useCase}</label>
        <select id="primaryUseCase" name="primaryUseCase" autoComplete="off" className={inputClass} value={form.primaryUseCase} onChange={(e) => setForm((prev) => ({ ...prev, primaryUseCase: e.target.value as DemoPrimaryUseCase | '' }))} required>
          <option value="">{copy.selectUseCase}</option>
          <option value="Attack Surface Management">{copy.useCaseOptions[0]}</option>
          <option value="Vulnerability Management">{copy.useCaseOptions[1]}</option>
          <option value="Agent-Based Scanning">{copy.useCaseOptions[2]}</option>
          <option value="Compliance & Reporting">{copy.useCaseOptions[3]}</option>
          <option value="AI-Guided Remediation">{copy.useCaseOptions[4]}</option>
          <option value="Platform Overview">{copy.useCaseOptions[5]}</option>
          <option value="Not Sure">{copy.useCaseOptions[6]}</option>
        </select>
      </div>

      <div>
        <label htmlFor="environmentSummary" className={labelClass}>{copy.environment}</label>
        <textarea
          id="environmentSummary"
          name="environmentSummary"
          autoComplete="off"
          className={`${inputClass} min-h-24 ${form.environmentSummary.length > 0 && form.environmentSummary.trim().length < 20 ? 'border-amber-500/60 focus:ring-amber-500/30' : ''}`}
          placeholder={copy.environmentPlaceholder}
         
          value={form.environmentSummary}
          onChange={(e) => setForm((prev) => ({ ...prev, environmentSummary: e.target.value }))}
          required
        />
        {form.environmentSummary.length > 0 && form.environmentSummary.trim().length < 20 && (
          <p className="mt-1 text-xs text-amber-400 font-medium">
            {form.environmentSummary.trim().length}/20 {copy.minChars}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="preferredContactWindow" className={labelClass}>{copy.contactWindow}</label>
        <input id="preferredContactWindow" name="preferredContactWindow" autoComplete="off" className={inputClass} placeholder={copy.contactWindowPlaceholder} value={form.preferredContactWindow} onChange={(e) => setForm((prev) => ({ ...prev, preferredContactWindow: e.target.value }))} />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>{copy.notes}</label>
        <textarea id="message" name="message" autoComplete="off" className={`${inputClass} min-h-24`} value={form.message} onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))} />
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => setForm((prev) => ({ ...prev, website: e.target.value }))}
        />
      </div>

      {error ? <p className="rounded-lg border border-error-500/20 bg-error-500/10 px-3 py-2 text-sm text-error-500">{error}</p> : null}

      <button className="cy-btn cy-btn-primary w-full" type="submit" disabled={!isValid || loading}>
        {loading ? copy.submitting : copy.submit}
      </button>

      <p className="text-center text-xs cy-text-muted">
        {copy.footer}
      </p>

    </form>
  )
}
