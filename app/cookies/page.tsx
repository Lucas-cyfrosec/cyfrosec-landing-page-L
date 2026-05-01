import { PublicPageShell } from '@/app/components/landing/PublicPageShell'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

export const metadata = {
  title: 'Cookie Policy | CyfroSec',
  description: 'How CyfroSec uses cookies and similar technologies on our platform and website.',
}

const COOKIE_TYPES = [
  {
    name: 'Strictly necessary',
    required: true,
    examples: ['Session authentication tokens', 'CSRF protection cookies', 'Load balancer affinity'],
    description: 'Essential for the platform to operate. These cannot be disabled.',
  },
  {
    name: 'Functional',
    required: false,
    examples: ['Theme preference (light/dark)', 'Language preference', 'Last-visited page'],
    description: 'Remember your settings and preferences to improve your experience.',
  },
  {
    name: 'Analytics',
    required: false,
    examples: ['Page view counts', 'Feature usage heatmaps', 'Error tracking'],
    description: 'Help us understand how the platform is used so we can improve it. All data is aggregated and anonymised.',
  },
  {
    name: 'Marketing',
    required: false,
    examples: ['Marketing campaign attribution', 'Retargeting pixels (website only, not in platform)'],
    description: 'Used only on the public marketing website and only with your consent.',
  },
] as const

export default function CookiesPage() {
  return (
    <PublicPageShell>
      <article className="mx-auto max-w-3xl px-4 py-16 lg:px-6 lg:py-20">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand">Legal</p>
        <h1
          className="text-4xl font-extrabold tracking-tight cy-text-primary mb-2"
          style={{ fontFamily: HEADING_FONT }}
        >
          Cookie Policy
        </h1>
        <p className="text-sm cy-text-muted mb-10">Last updated: February 2026</p>

        <div className="space-y-6 text-sm leading-relaxed cy-text-secondary
          [&_h2]:text-xl [&_h2]:font-bold [&_h2]:cy-text-primary [&_h2]:mt-10 [&_h2]:mb-3
          [&_p]:my-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ul]:my-3"
        >
          <p>
            CyfroSec uses cookies and similar technologies (&quot;cookies&quot;) on our website and platform. 
            This policy explains what cookies we use, why we use them, and how you can manage your preferences.
          </p>

          <h2>What Are Cookies?</h2>
          <p>
            Cookies are small text files placed on your device when you visit a website or use a web application. 
            They help the service remember information about your visit, such as your authentication state or 
            display preferences.
          </p>

          <h2>Types of Cookies We Use</h2>

          <div className="mt-6 space-y-5">
            {COOKIE_TYPES.map((type) => (
              <div
                key={type.name}
                className="rounded-2xl border cy-border-default cy-bg-elevated p-5"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3
                    className="text-base font-semibold cy-text-primary"
                    style={{ fontFamily: HEADING_FONT }}
                  >
                    {type.name}
                  </h3>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${
                      type.required
                        ? 'bg-success-500/15 text-success-600 dark:text-success-400'
                        : 'cy-bg-muted cy-text-muted'
                    }`}
                  >
                    {type.required ? 'Always active' : 'Optional'}
                  </span>
                </div>
                <p className="text-sm cy-text-secondary">{type.description}</p>
                <ul className="mt-3 list-disc pl-5 space-y-1 text-xs cy-text-muted">
                  {type.examples.map((ex) => (
                    <li key={ex}>{ex}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2>Managing Your Cookie Preferences</h2>
          <p>
            You can control optional cookies through your browser settings or by contacting us. Note that 
            disabling strictly necessary cookies will prevent the platform from functioning correctly.
          </p>
          <ul>
            <li>
              <strong>Browser settings:</strong> Most browsers allow you to block or delete cookies via 
              settings &rarr; privacy controls
            </li>
            <li>
              <strong>Opt-out links:</strong> For analytics tools, you may use opt-out mechanisms provided 
              by individual vendors
            </li>
            <li>
              <strong>Contact us:</strong> Email <strong>privacy@cyfrosec.com</strong> to request changes 
              to your cookie preferences
            </li>
          </ul>

          <h2>Third-Party Cookies</h2>
          <p>
            Some cookies on the public website are set by third-party services such as analytics providers. 
            These third parties have their own privacy policies governing how they use data. We do not use 
            third-party advertising cookies inside the authenticated platform.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this cookie policy from time to time. We will notify you of material changes 
            through the platform or by email.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about our use of cookies? Contact us at <strong>privacy@cyfrosec.com</strong>.
          </p>
        </div>
      </article>
    </PublicPageShell>
  )
}
