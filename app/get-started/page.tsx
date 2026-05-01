'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { AlertTriangle, ArrowLeft, ArrowRight, CheckCircle2, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { publicSelfSignupApiV1UsersSelfSignupPost } from '@/src/client'

type StepKey = 1 | 2 | 3 | 4

type SignupForm = {
  email: string
  name: string
  surname: string
  country: string
  jobTitle: string
  lineOfBusiness: string
  organizationName: string
  accountGroupName: string
  consent: boolean
}

type FieldErrors = Record<string, string>

const INITIAL_FORM: SignupForm = {
  email: '',
  name: '',
  surname: '',
  country: '',
  jobTitle: '',
  lineOfBusiness: '',
  organizationName: '',
  accountGroupName: '',
  consent: false,
}

const STEP_META = [
  { id: 1, title: 'User profile' },
  { id: 2, title: 'Organization' },
  { id: 3, title: 'Account group' },
  { id: 4, title: 'Review and consent' },
] as const

const BACKEND_TO_FORM_FIELD: Record<string, keyof SignupForm> = {
  email: 'email',
  name: 'name',
  surname: 'surname',
  country: 'country',
  job_title: 'jobTitle',
  line_of_business: 'lineOfBusiness',
  organization_name: 'organizationName',
  account_group_name: 'accountGroupName',
}

function validateStep(step: StepKey, form: SignupForm): FieldErrors {
  const errors: FieldErrors = {}

  if (step === 1) {
    if (!form.name.trim()) errors.name = 'First name is required'
    if (!form.surname.trim()) errors.surname = 'Last name is required'
    if (!form.country.trim()) errors.country = 'Country is required'
    if (!form.jobTitle.trim()) errors.jobTitle = 'Job title is required'
    if (!form.lineOfBusiness.trim()) errors.lineOfBusiness = 'Line of business is required'

    if (!form.email.trim()) {
      errors.email = 'Work email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errors.email = 'Enter a valid email address'
    }
  }

  if (step === 2 && !form.organizationName.trim()) {
    errors.organizationName = 'Organization name is required'
  }

  if (step === 3 && !form.accountGroupName.trim()) {
    errors.accountGroupName = 'Account group name is required'
  }

  if (step === 4 && !form.consent) {
    errors.consent = 'You must confirm consent to continue'
  }

  return errors
}

function parseSignupError(statusCode: number, payload: unknown): { message: string; fieldErrors: FieldErrors } {
  const fieldErrors: FieldErrors = {}

  if (payload && typeof payload === 'object') {
    const obj = payload as { message?: string; detail?: unknown; errors?: unknown }

    if (statusCode === 422 && Array.isArray(obj.detail)) {
      for (const issue of obj.detail) {
        const typedIssue = issue as { loc?: Array<string | number>; msg?: string }
        if (!typedIssue.loc || typeof typedIssue.msg !== 'string') continue
        const field = typedIssue.loc.at(-1)
        if (typeof field === 'string' && BACKEND_TO_FORM_FIELD[field]) {
          fieldErrors[BACKEND_TO_FORM_FIELD[field]] = typedIssue.msg
        }
      }
      return {
        message: 'Please review the highlighted fields and try again.',
        fieldErrors,
      }
    }

    if (typeof obj.message === 'string' && obj.message.trim()) {
      return { message: obj.message, fieldErrors }
    }

    if (typeof obj.detail === 'string' && obj.detail.trim()) {
      return { message: obj.detail, fieldErrors }
    }

    if (Array.isArray(obj.errors) && obj.errors.length > 0) {
      const first = obj.errors[0]
      if (typeof first === 'string' && first.trim()) {
        return { message: first, fieldErrors }
      }
    }
  }

  if (statusCode === 403) {
    return {
      message: 'Self-signup is currently disabled for this environment. Please contact sales to continue onboarding.',
      fieldErrors,
    }
  }

  if (statusCode === 409) {
    return {
      message: 'This organization or email already exists. Contact your administrator or choose a different value.',
      fieldErrors,
    }
  }

  return { message: 'Unable to complete signup at the moment. Please try again.', fieldErrors }
}

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }))

  return (
    <div className="pointer-events-none absolute inset-0">
      <svg className="h-full w-full text-primary-400" viewBox="0 0 696 316" fill="none">
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.25 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.8 }}
            animate={{
              pathLength: 1,
              opacity: [0.5, 0.9, 0.5],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + (path.id % 10),
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default function GetStartedPage() {
  const [step, setStep] = useState<StepKey>(1)
  const [form, setForm] = useState<SignupForm>(INITIAL_FORM)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [requestError, setRequestError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [completed, setCompleted] = useState(false)

  const progressPercent = useMemo(() => Math.round((step / 4) * 100), [step])

  const goNext = () => {
    const errors = validateStep(step, form)
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      return
    }
    setFieldErrors({})
    setRequestError(null)
    setStep((prev) => Math.min(4, prev + 1) as StepKey)
  }

  const goBack = () => {
    setFieldErrors({})
    setRequestError(null)
    setStep((prev) => Math.max(1, prev - 1) as StepKey)
  }

  const submit = async () => {
    const errors = validateStep(4, form)
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      return
    }

    setSubmitting(true)
    setRequestError(null)
    setFieldErrors({})

    try {
      const response = await publicSelfSignupApiV1UsersSelfSignupPost({
        body: {
          email: form.email.trim(),
          name: form.name.trim(),
          surname: form.surname.trim(),
          country: form.country.trim(),
          job_title: form.jobTitle.trim(),
          line_of_business: form.lineOfBusiness.trim(),
          organization_name: form.organizationName.trim(),
          account_group_name: form.accountGroupName.trim(),
          plan_slug: 'free',
        },
      })

      if (response.error) {
        const parsed = parseSignupError(response.response.status, response.error)
        setRequestError(parsed.message)
        setFieldErrors(parsed.fieldErrors)
        return
      }

      if (!response.data?.success) {
        const parsed = parseSignupError(response.response.status, response.data)
        setRequestError(parsed.message)
        return
      }

      setCompleted(true)
    } catch (error) {
      setRequestError(error instanceof Error ? error.message : 'Unable to complete signup at the moment.')
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass = 'w-full rounded-xl border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800 px-3 py-2.5 text-sm text-surface-900 dark:text-surface-50 placeholder:text-surface-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 3xl:px-4 3xl:py-3 3xl:text-[15px]'
  const errorClass = 'mt-1.5 text-xs text-error-500 3xl:text-[13px]'

  return (
    <div className="dark">
      <main className="relative min-h-screen lg:grid lg:grid-cols-2 lg:overflow-hidden bg-surface-900">

        {/* ── Left panel ── */}
        <div className="relative hidden lg:flex flex-col border-r border-surface-700 bg-surface-800 p-10 3xl:p-14">
          <div className="absolute inset-0 overflow-hidden">
            <FloatingPaths position={1} />
            <FloatingPaths position={-1} />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-900/80 to-transparent" />

          {/* Logo */}
          <div className="relative z-10">
            <img src="/logo.png" alt="CyfroSec" className="h-14 w-auto 3xl:h-16" />
          </div>

          {/* Mid content */}
          <div className="relative z-10 my-auto max-w-xl space-y-6 3xl:max-w-2xl 3xl:space-y-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-400 3xl:text-[13px]">Get Started</p>
            <h2 className="text-3xl font-bold leading-snug text-white 3xl:text-[3.35rem] 3xl:leading-[1.08]">
              Discover your attack surface.<br />
              <span className="text-primary-400">Secure it in minutes.</span>
            </h2>
            <p className="text-sm leading-relaxed text-surface-400 max-w-xs 3xl:max-w-md 3xl:text-[16px] 3xl:leading-8">
              Provision your organization, invite your team, and get AI-powered vulnerability insights across your entire infrastructure.
            </p>

            {/* Steps indicator */}
            <div className="space-y-2 pt-2">
              {STEP_META.map((item) => (
                <div key={item.id} className={`flex items-center gap-3 text-sm transition-colors 3xl:text-[15px] ${item.id === step ? 'text-white' : item.id < step ? 'text-primary-400' : 'text-surface-500'}`}>
                  <div className={`flex size-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold transition-colors 3xl:size-7 3xl:text-[13px] ${item.id === step ? 'border-primary-500 bg-primary-500 text-white' : item.id < step ? 'border-primary-400 bg-primary-400/20 text-primary-400' : 'border-surface-600 text-surface-500'}`}>
                    {item.id < step ? '✓' : item.id}
                  </div>
                  {item.title}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── Right panel (form) ── */}
        <div className="relative flex min-h-screen flex-col justify-center p-4 lg:p-10 3xl:p-14 overflow-y-auto">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px] bg-[radial-gradient(circle_at_20%_18%,rgba(3,155,224,0.12),transparent_36%),radial-gradient(circle_at_82%_8%,rgba(254,144,77,0.12),transparent_34%)]" />

          <div className="mx-auto w-full max-w-lg 3xl:max-w-2xl 4xl:max-w-[48rem]">
            <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-surface-400 hover:text-primary-400 3xl:mb-8 3xl:text-[15px]">
              <ArrowLeft className="size-4 3xl:size-[18px]" />
              Back to landing page
            </Link>

            {/* Mobile logo */}
            <div className="mb-6 lg:hidden">
              <img src="/logo.png" alt="CyfroSec" className="h-14 w-auto 3xl:h-16" />
            </div>

            <div className="rounded-3xl border border-surface-700 bg-surface-800 p-6 sm:p-8 3xl:p-10 4xl:p-12">
              {!completed ? (
                <>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-400 3xl:text-[13px]">Get Started</p>
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-surface-50 3xl:text-[3rem] 3xl:leading-[1.08]">Create your CyfroSec organization</h1>
                  <p className="mt-2 text-sm text-surface-400 3xl:text-[15px] 3xl:leading-7">
                    Complete this guided setup to provision your organization, account group, and primary administrator.
                  </p>

                  <div className="mt-5 3xl:mt-6">
                    <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-surface-500 3xl:text-[13px]">
                      <span>Step {step} of 4</span>
                      <span>{progressPercent}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-surface-700 3xl:h-2.5">
                      <div className="h-full rounded-full bg-primary-500 transition-all duration-300" style={{ width: `${progressPercent}%` }} />
                    </div>
                  </div>

                  <ol className="mt-4 grid gap-2 sm:grid-cols-2 lg:hidden">
                    {STEP_META.map((item) => (
                      <li
                        key={item.id}
                        className={`rounded-lg border px-3 py-2 text-sm ${item.id === step ? 'border-primary-500/40 bg-primary-500/10 text-surface-50' : 'border-surface-700 text-surface-400'}`}
                      >
                        {item.id}. {item.title}
                      </li>
                    ))}
                  </ol>

                  <div className="mt-6 space-y-4 3xl:mt-8 3xl:space-y-5">
                    {step === 1 ? (
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-surface-500 3xl:text-[13px]">First name</label>
                          <input className={inputClass} value={form.name} onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))} />
                          {fieldErrors.name ? <p className={errorClass}>{fieldErrors.name}</p> : null}
                        </div>
                        <div>
                          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-surface-500 3xl:text-[13px]">Last name</label>
                          <input className={inputClass} value={form.surname} onChange={(event) => setForm((prev) => ({ ...prev, surname: event.target.value }))} />
                          {fieldErrors.surname ? <p className={errorClass}>{fieldErrors.surname}</p> : null}
                        </div>
                        <div>
                          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-surface-500 3xl:text-[13px]">Work email</label>
                          <input className={inputClass} type="email" value={form.email} onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))} />
                          {fieldErrors.email ? <p className={errorClass}>{fieldErrors.email}</p> : null}
                        </div>
                        <div>
                          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-surface-500 3xl:text-[13px]">Country</label>
                          <input className={inputClass} value={form.country} onChange={(event) => setForm((prev) => ({ ...prev, country: event.target.value }))} />
                          {fieldErrors.country ? <p className={errorClass}>{fieldErrors.country}</p> : null}
                        </div>
                        <div>
                          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-surface-500 3xl:text-[13px]">Job title</label>
                          <input className={inputClass} value={form.jobTitle} onChange={(event) => setForm((prev) => ({ ...prev, jobTitle: event.target.value }))} />
                          {fieldErrors.jobTitle ? <p className={errorClass}>{fieldErrors.jobTitle}</p> : null}
                        </div>
                        <div>
                          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-surface-500 3xl:text-[13px]">Line of business</label>
                          <input className={inputClass} value={form.lineOfBusiness} onChange={(event) => setForm((prev) => ({ ...prev, lineOfBusiness: event.target.value }))} />
                          {fieldErrors.lineOfBusiness ? <p className={errorClass}>{fieldErrors.lineOfBusiness}</p> : null}
                        </div>
                      </div>
                    ) : null}

                    {step === 2 ? (
                      <>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-surface-500 3xl:text-[13px]">Organization name</label>
                        <input className={inputClass} value={form.organizationName} onChange={(event) => setForm((prev) => ({ ...prev, organizationName: event.target.value }))} />
                        {fieldErrors.organizationName ? <p className={errorClass}>{fieldErrors.organizationName}</p> : null}
                        <p className="text-sm text-surface-400 3xl:text-[15px]">This creates a new tenant for your company.</p>
                      </>
                    ) : null}

                    {step === 3 ? (
                      <>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-surface-500 3xl:text-[13px]">Account group name</label>
                        <input className={inputClass} value={form.accountGroupName} onChange={(event) => setForm((prev) => ({ ...prev, accountGroupName: event.target.value }))} />
                        {fieldErrors.accountGroupName ? <p className={errorClass}>{fieldErrors.accountGroupName}</p> : null}

                      </>
                    ) : null}

                    {step === 4 ? (
                      <>
                        <div className="rounded-xl border border-surface-700 bg-surface-800 p-4 text-sm 3xl:p-5 3xl:text-[15px]">
                          <h2 className="font-semibold text-surface-50 3xl:text-[16px]">Review your setup</h2>
                          <dl className="mt-3 grid gap-2 sm:grid-cols-2">
                            <div>
                              <dt className="text-xs uppercase tracking-wide text-surface-500 3xl:text-[13px]">User</dt>
                              <dd className="text-surface-400">{form.name} {form.surname} ({form.email})</dd>
                            </div>
                            <div>
                              <dt className="text-xs uppercase tracking-wide text-surface-500 3xl:text-[13px]">Organization</dt>
                              <dd className="text-surface-400">{form.organizationName}</dd>
                            </div>
                            <div>
                              <dt className="text-xs uppercase tracking-wide text-surface-500 3xl:text-[13px]">Account group</dt>
                              <dd className="text-surface-400">{form.accountGroupName}</dd>
                            </div>
                            <div>
                              <dt className="text-xs uppercase tracking-wide text-surface-500 3xl:text-[13px]">Role context</dt>
                              <dd className="text-surface-400">Organization Admin and Account Group Admin</dd>
                            </div>
                          </dl>
                        </div>

                        <label className="flex items-start gap-3 rounded-xl border border-surface-700 bg-surface-800 px-3 py-2.5 text-sm text-surface-400 3xl:px-4 3xl:py-3 3xl:text-[15px]">
                          <input
                            type="checkbox"
                            checked={form.consent}
                            onChange={(event) => setForm((prev) => ({ ...prev, consent: event.target.checked }))}
                            className="mt-0.5"
                          />
                          <span>I confirm these details are accurate and consent to CyfroSec provisioning this account setup.</span>
                        </label>
                        {fieldErrors.consent ? <p className={errorClass}>{fieldErrors.consent}</p> : null}
                      </>
                    ) : null}

                    {requestError ? (
                      <p className="rounded-lg border border-error-500/20 bg-error-500/10 px-3 py-2 text-sm text-error-500 3xl:px-4 3xl:py-3 3xl:text-[15px]">
                        {requestError}
                      </p>
                    ) : null}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-xl border border-surface-700 px-5 py-2.5 text-sm font-semibold text-surface-300 hover:bg-surface-700 disabled:opacity-40 3xl:px-6 3xl:py-3 3xl:text-[15px]"
                      onClick={goBack}
                      disabled={step === 1 || submitting}
                    >
                      Back
                    </button>

                    {step < 4 ? (
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-xl bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-600 3xl:px-6 3xl:py-3 3xl:text-[15px]"
                        onClick={goNext}
                      >
                        Continue
                        <ArrowRight className="size-4 3xl:size-[18px]" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-xl bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-600 disabled:opacity-60 3xl:px-6 3xl:py-3 3xl:text-[15px]"
                        onClick={submit}
                        disabled={submitting}
                      >
                        {submitting ? 'Provisioning...' : 'Create Organization'}
                      </button>
                    )}
                  </div>

                  <p className="mt-5 text-center text-sm text-surface-500 3xl:mt-6 3xl:text-[15px]">
                    Already have an account?{' '}
                    <Link href={`${process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.cyfrosec.com'}/dashboard`} className="font-semibold text-primary-400 hover:text-primary-300">
                      Sign In
                    </Link>
                  </p>
                </>
              ) : (
                <div className="space-y-5 py-6 text-center 3xl:space-y-6 3xl:py-8">
                  <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-success-500/15 3xl:size-16">
                    <CheckCircle2 className="size-8 text-success-600 3xl:size-9" />
                  </div>
                  <h1 className="text-3xl font-bold tracking-tight text-surface-50 3xl:text-[3rem] 3xl:leading-[1.08]">Check your email</h1>
                  <p className="mx-auto max-w-xl text-sm leading-relaxed text-surface-400 3xl:max-w-2xl 3xl:text-[15px] 3xl:leading-8">
                    We created your organization and sent onboarding emails to <span className="font-semibold text-surface-200">{form.email}</span>.
                    Check your inbox for the password setup link, then continue to the portal dashboard.
                  </p>
                  <div className="mx-auto max-w-xl rounded-2xl border border-amber-500/25 bg-amber-500/10 p-4 text-left 3xl:max-w-2xl 3xl:p-5">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-amber-500/15 3xl:size-10">
                        <Mail className="size-4 text-amber-300 3xl:size-[18px]" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="size-4 text-amber-300 3xl:size-[18px]" />
                          <p className="text-sm font-semibold text-amber-100 3xl:text-[15px]">Check spam or junk if you do not see the email</p>
                        </div>
                        <p className="text-sm leading-relaxed text-amber-50/85 3xl:text-[15px] 3xl:leading-7">
                          Some onboarding emails may land in Spam, Junk, Updates, or Promotions. If it does not arrive within a few minutes,
                          check those folders and mark the email as safe.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Link href={`${process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.cyfrosec.com'}/dashboard`} className="inline-flex items-center gap-2 rounded-xl bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-600 3xl:px-6 3xl:py-3 3xl:text-[15px]">Go to Dashboard</Link>
                    <Link href="/#contact-sales" className="inline-flex items-center gap-2 rounded-xl border border-surface-700 px-5 py-2.5 text-sm font-semibold text-surface-300 hover:bg-surface-700 3xl:px-6 3xl:py-3 3xl:text-[15px]">Contact Sales</Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}
