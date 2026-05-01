'use client'

import { useMemo, useRef, useState } from 'react'
import { submitBookDemoApiV1SupportBookDemoPost } from '@/src/client'
import type { DemoDeploymentModel, DemoPrimaryUseCase } from '@/src/client'

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
            `Country/Region: ${form.country}.`,
            form.message ? `Notes: ${form.message}` : null,
          ].filter(Boolean).join(' ') || undefined,
          source_url: typeof window !== 'undefined' ? window.location.href : undefined,
          consent_to_contact: true,
          website: form.website,
          form_started_at: formStartedAt.current,
        },
      })

      if (response.error) {
        throw new Error(getErrorMessage(response.error, 'Failed to submit book demo request'))
      }
      if (!response.data?.success) {
        throw new Error(getErrorMessage(response.data, 'Failed to submit book demo request'))
      }

      setSuccess(true)
      setForm(INITIAL_STATE)
      formStartedAt.current = new Date().toISOString()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit book demo request')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full rounded-xl border cy-border-default cy-bg-elevated px-3 py-2.5 text-sm cy-text-primary placeholder:cy-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500/30'

  const labelClass = 'mb-1.5 block text-xs font-semibold uppercase tracking-wide cy-text-muted'

  if (success) {
    return (
      <div className="rounded-2xl border border-primary-500/20 bg-primary-500/10 px-6 py-10 text-center">
        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary-500/20">
          <svg className="size-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-base font-semibold text-white">Request received!</p>
        <p className="mt-2 text-sm text-white/70">
          Thank you for your interest! A CyfroSec security specialist will contact you shortly to schedule your demo.
        </p>
      </div>
    )
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={labelClass}>Full name</label>
          <input id="fullName" name="fullName" autoComplete="name" className={inputClass} value={form.fullName} onChange={(e) => setForm((prev) => ({ ...prev, fullName: e.target.value }))} required />
        </div>

        <div>
          <label htmlFor="workEmail" className={labelClass}>Work email</label>
          <input id="workEmail" name="workEmail" autoComplete="email" className={inputClass} type="email" value={form.workEmail} onChange={(e) => setForm((prev) => ({ ...prev, workEmail: e.target.value }))} required />
        </div>

        <div>
          <label htmlFor="companyName" className={labelClass}>Company</label>
          <input id="companyName" name="companyName" autoComplete="organization" className={inputClass} value={form.companyName} onChange={(e) => setForm((prev) => ({ ...prev, companyName: e.target.value }))} required />
        </div>

        <div>
          <label htmlFor="roleTitle" className={labelClass}>Role</label>
          <input id="roleTitle" name="roleTitle" autoComplete="organization-title" className={inputClass} value={form.roleTitle} onChange={(e) => setForm((prev) => ({ ...prev, roleTitle: e.target.value }))} required />
        </div>
      </div>

      <div>
        <label htmlFor="country" className={labelClass}>Country / Region</label>
        <input id="country" name="country" autoComplete="country-name" className={inputClass} value={form.country} onChange={(e) => setForm((prev) => ({ ...prev, country: e.target.value }))} required />
      </div>

      <div>
        <label htmlFor="companySize" className={labelClass}>Company size</label>
        <select id="companySize" name="companySize" autoComplete="off" className={inputClass} value={form.companySize} onChange={(e) => setForm((prev) => ({ ...prev, companySize: e.target.value }))}>
          <option value="">Select size</option>
          <option value="1-10">1–10 employees</option>
          <option value="11-50">11–50 employees</option>
          <option value="51-200">51–200 employees</option>
          <option value="201-1000">201–1,000 employees</option>
          <option value="1000+">1,000+ employees</option>
        </select>
      </div>

      <div>
        <label htmlFor="deploymentModel" className={labelClass}>Deployment model</label>
        <select id="deploymentModel" name="deploymentModel" autoComplete="off" className={inputClass} value={form.deploymentModel} onChange={(e) => setForm((prev) => ({ ...prev, deploymentModel: e.target.value as DemoDeploymentModel | '' }))} required>
          <option value="">Select deployment model</option>
          <option value="SaaS">SaaS</option>
          <option value="On-Prem">On-Prem</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Not Sure">Not Sure</option>
        </select>
      </div>

      <div>
        <label htmlFor="primaryUseCase" className={labelClass}>Primary use case</label>
        <select id="primaryUseCase" name="primaryUseCase" autoComplete="off" className={inputClass} value={form.primaryUseCase} onChange={(e) => setForm((prev) => ({ ...prev, primaryUseCase: e.target.value as DemoPrimaryUseCase | '' }))} required>
          <option value="">Select primary use case</option>
          <option value="Attack Surface Management">Attack Surface Management</option>
          <option value="Vulnerability Management">Vulnerability Management</option>
          <option value="Agent-Based Scanning">Agent-Based Scanning</option>
          <option value="Compliance & Reporting">Compliance &amp; Reporting</option>
          <option value="AI-Guided Remediation">AI-Guided Remediation</option>
          <option value="Platform Overview">Platform Overview</option>
          <option value="Not Sure">Not Sure</option>
        </select>
      </div>

      <div>
        <label htmlFor="environmentSummary" className={labelClass}>Environment summary</label>
        <textarea
          id="environmentSummary"
          name="environmentSummary"
          autoComplete="off"
          className={`${inputClass} min-h-24 ${form.environmentSummary.length > 0 && form.environmentSummary.trim().length < 20 ? 'border-amber-500/60 focus:ring-amber-500/30' : ''}`}
          placeholder="Brief description of your environment or the risks you'd like the demo to cover (min 20 characters)"
          value={form.environmentSummary}
          onChange={(e) => setForm((prev) => ({ ...prev, environmentSummary: e.target.value }))}
          required
        />
        {form.environmentSummary.length > 0 && form.environmentSummary.trim().length < 20 && (
          <p className="mt-1 text-xs text-amber-400 font-medium">
            {form.environmentSummary.trim().length}/20 characters minimum — please add a few more details
          </p>
        )}
      </div>

      <div>
        <label htmlFor="preferredContactWindow" className={labelClass}>Preferred contact window (optional)</label>
        <input id="preferredContactWindow" name="preferredContactWindow" autoComplete="off" className={inputClass} placeholder="e.g. Weekdays after 14:00 CET" value={form.preferredContactWindow} onChange={(e) => setForm((prev) => ({ ...prev, preferredContactWindow: e.target.value }))} />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Anything else you&apos;d like us to know? (optional)</label>
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
        {loading ? 'Submitting…' : 'Book My Demo'}
      </button>

      <p className="text-center text-xs cy-text-muted">
        By submitting this form you agree to be contacted by CyfroSec regarding your demo request.
      </p>
    </form>
  )
}
