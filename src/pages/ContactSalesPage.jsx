import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

const STEP_META = [
  { id: 1, title: 'Contact details' },
  { id: 2, title: 'Your inquiry' },
];

const INITIAL_FORM = {
  name: '',
  surname: '',
  email: '',
  company: '',
  jobTitle: '',
  inquiryType: '',
  message: '',
};

const INQUIRY_TYPES = [
  'Product demo',
  'Enterprise pricing',
  'On-premises deployment',
  'Partnership or integration',
  'General question',
];

function validateStep(step, form) {
  const errors = {};

  if (step === 1) {
    if (!form.name.trim()) errors.name = 'First name is required';
    if (!form.surname.trim()) errors.surname = 'Last name is required';
    if (!form.company.trim()) errors.company = 'Company name is required';
    if (!form.jobTitle.trim()) errors.jobTitle = 'Job title is required';
    if (!form.email.trim()) {
      errors.email = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errors.email = 'Enter a valid email address';
    }
  }

  if (step === 2) {
    if (!form.inquiryType) errors.inquiryType = 'Please select an inquiry type';
    if (!form.message.trim()) errors.message = 'Please tell us a bit about your needs';
  }

  return errors;
}

export default function ContactSalesPage({ navigate }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(INITIAL_FORM);
  const [fieldErrors, setFieldErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [completed, setCompleted] = useState(false);

  const progressPercent = useMemo(() => Math.round((step / 2) * 100), [step]);

  const inputClass = 'w-full rounded-xl border border-surface-300 dark:border-surface-700 bg-white dark:bg-surface-900 px-3 py-2.5 text-sm text-surface-900 dark:text-surface-50 placeholder:text-surface-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30';
  const errorClass = 'mt-1.5 text-xs text-red-500';

  function goNext() {
    const errors = validateStep(step, form);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});
    setStep((prev) => Math.min(2, prev + 1));
  }

  function goBack() {
    setFieldErrors({});
    setStep((prev) => Math.max(1, prev - 1));
  }

  async function submit() {
    const errors = validateStep(2, form);
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
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-500">Contact Sales</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-surface-900 dark:text-surface-50">Talk to our sales team</h1>
              <p className="mt-2 text-sm text-surface-600 dark:text-surface-400">
                Tell us about your organization and what you're looking for. Our team will get back to you within one business day.
              </p>

              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-surface-500">
                  <span>Step {step} of 2</span>
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
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-surface-500">Company name</label>
                      <input className={inputClass} value={form.company} onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))} />
                      {fieldErrors.company ? <p className={errorClass}>{fieldErrors.company}</p> : null}
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-surface-500">Job title</label>
                      <input className={inputClass} value={form.jobTitle} onChange={(e) => setForm((p) => ({ ...p, jobTitle: e.target.value }))} />
                      {fieldErrors.jobTitle ? <p className={errorClass}>{fieldErrors.jobTitle}</p> : null}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-surface-500">What can we help you with?</label>
                      <select
                        className={inputClass}
                        value={form.inquiryType}
                        onChange={(e) => setForm((p) => ({ ...p, inquiryType: e.target.value }))}
                      >
                        <option value="">Select an inquiry type…</option>
                        {INQUIRY_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                      {fieldErrors.inquiryType ? <p className={errorClass}>{fieldErrors.inquiryType}</p> : null}
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-surface-500">Message</label>
                      <textarea
                        rows={5}
                        className={`${inputClass} resize-none`}
                        placeholder="Tell us about your environment, team size, and what you're trying to achieve…"
                        value={form.message}
                        onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                      />
                      {fieldErrors.message ? <p className={errorClass}>{fieldErrors.message}</p> : null}
                    </div>
                  </>
                )}
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <button type="button" className="px-4 py-2 text-sm font-semibold rounded-lg border border-surface-200 dark:border-surface-700 text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors" onClick={goBack} disabled={step === 1 || submitting}>
                  Back
                </button>

                {step < 2 ? (
                  <button type="button" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-primary-500 hover:bg-primary-600 text-white transition-colors" onClick={goNext}>
                    Continue
                    <ArrowRight className="size-4" />
                  </button>
                ) : (
                  <button type="button" className="px-4 py-2 text-sm font-semibold rounded-lg bg-primary-500 hover:bg-primary-600 text-white transition-colors disabled:opacity-70" onClick={submit} disabled={submitting}>
                    {submitting ? 'Sending…' : 'Send inquiry'}
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="space-y-4 py-6 text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-emerald-500/15">
                <CheckCircle2 className="size-8 text-emerald-600" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-surface-900 dark:text-surface-50">Message received!</h1>
              <p className="mx-auto max-w-xl text-sm leading-relaxed text-surface-600 dark:text-surface-400">
                Thanks for reaching out. Our sales team will review your inquiry and get back to you within one business day.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button onClick={() => navigate?.('home')} className="px-4 py-2 text-sm font-semibold rounded-lg bg-primary-500 hover:bg-primary-600 text-white transition-colors">Back to Home</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
