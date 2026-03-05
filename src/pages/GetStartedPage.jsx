import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

const STEP_META = [
  { id: 1, title: 'User profile' },
  { id: 2, title: 'Organization' },
  { id: 3, title: 'Account group' },
  { id: 4, title: 'Review and consent' }
];

const INITIAL_FORM = {
  email: '',
  name: '',
  surname: '',
  country: '',
  jobTitle: '',
  lineOfBusiness: '',
  organizationName: '',
  accountGroupName: '',
  planSlug: '',
  consent: false
};

function validateStep(step, form) {
  const errors = {};

  if (step === 1) {
    if (!form.name.trim()) errors.name = 'First name is required';
    if (!form.surname.trim()) errors.surname = 'Last name is required';
    if (!form.country.trim()) errors.country = 'Country is required';
    if (!form.jobTitle.trim()) errors.jobTitle = 'Job title is required';
    if (!form.lineOfBusiness.trim()) errors.lineOfBusiness = 'Line of business is required';

    if (!form.email.trim()) {
      errors.email = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errors.email = 'Enter a valid email address';
    }
  }

  if (step === 2 && !form.organizationName.trim()) {
    errors.organizationName = 'Organization name is required';
  }

  if (step === 3 && !form.accountGroupName.trim()) {
    errors.accountGroupName = 'Account group name is required';
  }

  if (step === 4 && !form.consent) {
    errors.consent = 'You must confirm consent to continue';
  }

  return errors;
}

export default function GetStartedPage({ navigate }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(INITIAL_FORM);
  const [fieldErrors, setFieldErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [completed, setCompleted] = useState(false);

  const progressPercent = useMemo(() => Math.round((step / 4) * 100), [step]);

  const inputClass = 'w-full rounded-xl border border-surface-300 dark:border-surface-700 bg-white dark:bg-surface-900 px-3 py-2.5 text-sm text-surface-900 dark:text-surface-50 placeholder:text-surface-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30';
  const errorClass = 'mt-1.5 text-xs text-red-500';

  function goNext() {
    const errors = validateStep(step, form);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});
    setStep((prev) => Math.min(4, prev + 1));
  }

  function goBack() {
    setFieldErrors({});
    setStep((prev) => Math.max(1, prev - 1));
  }

  async function submit() {
    const errors = validateStep(4, form);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setSubmitting(true);
    setFieldErrors({});
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitting(false);
    setCompleted(true);
  }

  return (
    <main className="relative min-h-screen overflow-x-clip pb-16 pt-10 bg-surface-50 dark:bg-surface-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px] bg-[radial-gradient(circle_at_20%_18%,rgba(3,155,224,0.18),transparent_36%),radial-gradient(circle_at_82%_8%,rgba(254,144,77,0.2),transparent_34%)]" />

      <div className="mx-auto max-w-3xl px-4 lg:px-6">
        <button onClick={() => navigate?.('home')} className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-surface-600 hover:text-primary-500">
          <ArrowLeft className="size-4" />
          Back to landing page
        </button>

        <div className="rounded-3xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-900 p-6 sm:p-8 shadow-lg">
          {!completed ? (
            <>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-500">Get Started</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-surface-900 dark:text-surface-50">Create your CyfroSec organization</h1>
              <p className="mt-2 text-sm text-surface-600 dark:text-surface-400">
                Complete this guided setup to provision your organization, account group, and primary administrator.
              </p>

              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-surface-500">
                  <span>Step {step} of 4</span>
                  <span>{progressPercent}%</span>
                </div>
                <div className="h-2 rounded-full bg-surface-100 dark:bg-surface-800">
                  <div className="h-full rounded-full bg-primary-500 transition-all duration-300" style={{ width: `${progressPercent}%` }} />
                </div>
              </div>

              <ol className="mt-4 grid gap-2 sm:grid-cols-2">
                {STEP_META.map((item) => (
                  <li
                    key={item.id}
                    className={`rounded-lg border px-3 py-2 text-sm ${item.id === step ? 'border-primary-500/40 bg-primary-500/10 text-surface-900 dark:text-surface-50' : 'border-surface-200 dark:border-surface-700 text-surface-600 dark:text-surface-400'}`}
                  >
                    {item.id}. {item.title}
                  </li>
                ))}
              </ol>

              <div className="mt-6 space-y-4">
                {step === 1 && (
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-surface-500">First name</label>
                      <input className={inputClass} value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} />
                      {fieldErrors.name ? <p className={errorClass}>{fieldErrors.name}</p> : null}
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-surface-500">Last name</label>
                      <input className={inputClass} value={form.surname} onChange={(e) => setForm((p) => ({ ...p, surname: e.target.value }))} />
                      {fieldErrors.surname ? <p className={errorClass}>{fieldErrors.surname}</p> : null}
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-surface-500">Work email</label>
                      <input className={inputClass} type="email" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} />
                      {fieldErrors.email ? <p className={errorClass}>{fieldErrors.email}</p> : null}
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-surface-500">Country</label>
                      <input className={inputClass} value={form.country} onChange={(e) => setForm((p) => ({ ...p, country: e.target.value }))} />
                      {fieldErrors.country ? <p className={errorClass}>{fieldErrors.country}</p> : null}
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-surface-500">Job title</label>
                      <input className={inputClass} value={form.jobTitle} onChange={(e) => setForm((p) => ({ ...p, jobTitle: e.target.value }))} />
                      {fieldErrors.jobTitle ? <p className={errorClass}>{fieldErrors.jobTitle}</p> : null}
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-surface-500">Line of business</label>
                      <input className={inputClass} value={form.lineOfBusiness} onChange={(e) => setForm((p) => ({ ...p, lineOfBusiness: e.target.value }))} />
                      {fieldErrors.lineOfBusiness ? <p className={errorClass}>{fieldErrors.lineOfBusiness}</p> : null}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-surface-500">Organization name</label>
                    <input className={inputClass} value={form.organizationName} onChange={(e) => setForm((p) => ({ ...p, organizationName: e.target.value }))} />
                    {fieldErrors.organizationName ? <p className={errorClass}>{fieldErrors.organizationName}</p> : null}
                    <p className="text-sm text-surface-600 dark:text-surface-400">This creates a new tenant for your company.</p>
                  </>
                )}

                {step === 3 && (
                  <>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-surface-500">Account group name</label>
                    <input className={inputClass} value={form.accountGroupName} onChange={(e) => setForm((p) => ({ ...p, accountGroupName: e.target.value }))} />
                    {fieldErrors.accountGroupName ? <p className={errorClass}>{fieldErrors.accountGroupName}</p> : null}

                    <label className="mb-1.5 mt-4 block text-xs font-semibold uppercase tracking-wide text-surface-500">Plan slug (optional)</label>
                    <input className={inputClass} placeholder="trial, pro, enterprise" value={form.planSlug} onChange={(e) => setForm((p) => ({ ...p, planSlug: e.target.value }))} />
                    <p className="text-sm text-surface-600 dark:text-surface-400">Leave empty to use default provisioning behavior.</p>
                  </>
                )}

                {step === 4 && (
                  <>
                    <div className="rounded-xl border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800 p-4 text-sm">
                      <h2 className="font-semibold text-surface-900 dark:text-surface-50">Review your setup</h2>
                      <dl className="mt-3 grid gap-2 sm:grid-cols-2">
                        <div>
                          <dt className="text-xs uppercase tracking-wide text-surface-500">User</dt>
                          <dd className="text-surface-700 dark:text-surface-300">{form.name} {form.surname} ({form.email})</dd>
                        </div>
                        <div>
                          <dt className="text-xs uppercase tracking-wide text-surface-500">Organization</dt>
                          <dd className="text-surface-700 dark:text-surface-300">{form.organizationName}</dd>
                        </div>
                        <div>
                          <dt className="text-xs uppercase tracking-wide text-surface-500">Account group</dt>
                          <dd className="text-surface-700 dark:text-surface-300">{form.accountGroupName}</dd>
                        </div>
                        <div>
                          <dt className="text-xs uppercase tracking-wide text-surface-500">Role context</dt>
                          <dd className="text-surface-700 dark:text-surface-300">Organization Admin and Account Group Admin</dd>
                        </div>
                      </dl>
                    </div>

                    <label className="flex items-start gap-3 rounded-xl border border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800 px-3 py-2.5 text-sm text-surface-700 dark:text-surface-300">
                      <input type="checkbox" checked={form.consent} onChange={(e) => setForm((p) => ({ ...p, consent: e.target.checked }))} className="mt-0.5" />
                      <span>I confirm these details are accurate and consent to CyfroSec provisioning this account setup.</span>
                    </label>
                    {fieldErrors.consent ? <p className={errorClass}>{fieldErrors.consent}</p> : null}
                  </>
                )}
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <button type="button" className="px-4 py-2 text-sm font-semibold rounded-lg border border-surface-200 dark:border-surface-700 text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors" onClick={goBack} disabled={step === 1 || submitting}>
                  Back
                </button>

                {step < 4 ? (
                  <button type="button" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-primary-500 hover:bg-primary-600 text-white transition-colors" onClick={goNext}>
                    Continue
                    <ArrowRight className="size-4" />
                  </button>
                ) : (
                  <button type="button" className="px-4 py-2 text-sm font-semibold rounded-lg bg-primary-500 hover:bg-primary-600 text-white transition-colors disabled:opacity-70" onClick={submit} disabled={submitting}>
                    {submitting ? 'Provisioning...' : 'Create Organization'}
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="space-y-4 py-6 text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-emerald-500/15">
                <CheckCircle2 className="size-8 text-emerald-600" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-surface-900 dark:text-surface-50">Setup request submitted</h1>
              <p className="mx-auto max-w-xl text-sm leading-relaxed text-surface-600 dark:text-surface-400">
                We created your onboarding request and sent a confirmation message. Our team will follow up with next steps to activate your organization.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button onClick={() => navigate?.('home')} className="px-4 py-2 text-sm font-semibold rounded-lg bg-primary-500 hover:bg-primary-600 text-white transition-colors">Back to Home</button>
                <a href="mailto:sales@cyfrosec.com" className="px-4 py-2 text-sm font-semibold rounded-lg border border-surface-200 dark:border-surface-700 text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors">Contact Sales</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

