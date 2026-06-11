'use client'

import { useMemo, useRef, useState } from 'react'
import { submitContactSalesApiV1SupportContactSalesPost } from '@/src/client'
import { ThankYouDocLinks } from '@/app/components/landing/ThankYouDocLinks'
type ContactSalesFormState = {
  fullName: string
  workEmail: string
  companyName: string
  roleTitle: string
  companySize: string
  message: string
  consentToContact: boolean
  website: string
}

const INITIAL_STATE: ContactSalesFormState = {
  fullName: '',
  workEmail: '',
  companyName: '',
  roleTitle: '',
  companySize: '',
  message: '',
  consentToContact: false,
  website: '',
}

function getErrorMessage(errorPayload: unknown, fallback: string): string {
  if (!errorPayload || typeof errorPayload !== 'object') return fallback

  const data = errorPayload as { message?: string; detail?: unknown; errors?: unknown }

  if (typeof data.message === 'string' && data.message.trim()) {
    return data.message
  }

  if (Array.isArray(data.detail) && data.detail.length > 0) {
    const first = data.detail[0] as { msg?: string }
    if (first && typeof first.msg === 'string') return first.msg
  }

  if (typeof data.detail === 'string') {
    return data.detail
  }

  if (Array.isArray(data.errors) && data.errors.length > 0) {
    const firstError = data.errors[0]
    if (typeof firstError === 'string') return firstError
  }

  return fallback
}

export function ContactSalesForm() {
  const [form, setForm] = useState<ContactSalesFormState>(INITIAL_STATE)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const formStartedAt = useRef(new Date().toISOString())

  const copy = {
    successTitle: 'Message received!',
    successBody: 'Thanks for reaching out. Our sales team will contact you shortly.',
    fullName: 'Full name',
    workEmail: 'Work email',
    company: 'Company',
    role: 'Role',
    companySize: 'Company size (optional)',
    companySizePlaceholder: '1-10, 11-50, 51-200, 201-1000, 1000+',
    help: 'How can we help?',
    minChars: 'characters minimum',
    consent: 'I consent to CyfroSec contacting me.',
    submitting: 'Submitting...',
    submit: 'Submit to Sales',
    submitError: 'Failed to submit contact request',
  }

  const isValid = useMemo(() => {
    return (
      form.fullName.trim().length > 1
      && form.workEmail.trim().length > 4
      && form.companyName.trim().length > 1
      && form.roleTitle.trim().length > 1
      && form.message.trim().length >= 20
      && form.consentToContact
    )
  }, [form])

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!isValid) return

    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const response = await submitContactSalesApiV1SupportContactSalesPost({
        body: {
          full_name: form.fullName,
          work_email: form.workEmail,
          company_name: form.companyName,
          role_title: form.roleTitle,
          company_size: form.companySize || undefined,
          message: form.message,
          source_url: typeof window !== 'undefined' ? window.location.href : undefined,
          consent_to_contact: form.consentToContact,
          website: form.website,
          form_started_at: formStartedAt.current,
        },
      })

      if (response.error) {
        throw new Error(getErrorMessage(response.error, copy.submitError))
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

  const inputClass = 'w-full rounded-xl border cy-border-default cy-bg-elevated px-3 py-2.5 text-sm cy-text-primary placeholder:cy-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500/30 3xl:px-4 3xl:py-3 3xl:text-[15px]'

  if (success) {
    return (
      <div>
        <div className="rounded-2xl border border-primary-500/20 bg-primary-500/10 px-6 py-10 text-center">
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary-500/20">
            <svg className="size-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-base font-semibold text-white">{copy.successTitle}</p>
          <p className="mt-2 text-sm text-white/70">
            {copy.successBody}
          </p>
        </div>
        <ThankYouDocLinks />
      </div>
    )
  }

  return (
    <form className="space-y-4 3xl:space-y-5" onSubmit={onSubmit}>
      <div className="grid gap-4 md:grid-cols-2 3xl:gap-5">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide cy-text-muted 3xl:text-[13px]">{copy.fullName}</label>
          <input
            className={inputClass}
            value={form.fullName}
            onChange={(event) => setForm((prev) => ({ ...prev, fullName: event.target.value }))}
            required
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide cy-text-muted 3xl:text-[13px]">{copy.workEmail}</label>
          <input
            className={inputClass}
            type="email"
            value={form.workEmail}
            onChange={(event) => setForm((prev) => ({ ...prev, workEmail: event.target.value }))}
            required
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide cy-text-muted 3xl:text-[13px]">{copy.company}</label>
          <input
            className={inputClass}
            value={form.companyName}
            onChange={(event) => setForm((prev) => ({ ...prev, companyName: event.target.value }))}
            required
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide cy-text-muted 3xl:text-[13px]">{copy.role}</label>
          <input
            className={inputClass}
            value={form.roleTitle}
            onChange={(event) => setForm((prev) => ({ ...prev, roleTitle: event.target.value }))}
            required
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide cy-text-muted 3xl:text-[13px]">{copy.companySize}</label>
        <input
          className={inputClass}
          placeholder={copy.companySizePlaceholder}
         
          value={form.companySize}
          onChange={(event) => setForm((prev) => ({ ...prev, companySize: event.target.value }))}
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide cy-text-muted 3xl:text-[13px]">{copy.help}</label>
        <textarea
          className={`${inputClass} min-h-32 3xl:min-h-40`}
         
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          minLength={20}
          required
        />
        <p className={`mt-1 text-xs 3xl:text-[13px] ${form.message.trim().length > 0 && form.message.trim().length < 20 ? 'text-error-500' : 'cy-text-muted'}`}>
          {form.message.trim().length}/20 {copy.minChars}
        </p>
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(event) => setForm((prev) => ({ ...prev, website: event.target.value }))}
        />
      </div>

      <label className="flex items-start gap-3 rounded-xl border cy-border-default cy-bg-elevated px-3 py-2.5 text-sm cy-text-secondary 3xl:px-4 3xl:py-3 3xl:text-[15px]">
        <input
          type="checkbox"
          checked={form.consentToContact}
          onChange={(event) => setForm((prev) => ({ ...prev, consentToContact: event.target.checked }))}
          className="mt-0.5"
        />
        <span>
          {copy.consent}
        </span>
      </label>

      {error ? <p className="rounded-lg border border-error-500/20 bg-error-500/10 px-3 py-2 text-sm text-error-500 3xl:px-4 3xl:py-3 3xl:text-[15px]">{error}</p> : null}

      <button className="cy-btn cy-btn-primary 3xl:px-6 3xl:py-3 3xl:text-[15px]" type="submit" disabled={!isValid || loading}>
        {loading ? copy.submitting : copy.submit}
      </button>

    </form>
  )
}
