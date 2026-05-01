import { PublicPageShell } from '@/app/components/landing/PublicPageShell'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

export const metadata = {
  title: 'Privacy Policy | CyfroSec',
  description: 'How CyfroSec collects, processes, and protects your personal data in accordance with GDPR and applicable privacy laws.',
}

export default function PrivacyPage() {
  return (
    <PublicPageShell>
      <article className="mx-auto max-w-3xl px-4 py-16 lg:px-6 lg:py-20">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand">Legal</p>
        <h1
          className="text-4xl font-extrabold tracking-tight cy-text-primary mb-2"
          style={{ fontFamily: HEADING_FONT }}
        >
          Privacy Policy
        </h1>
        <p className="text-sm cy-text-muted mb-10">Last updated: February 2026</p>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-[var(--text-secondary)]
          [&_h2]:font-bold [&_h2]:cy-text-primary [&_h2]:text-xl [&_h2]:mt-10 [&_h2]:mb-3
          [&_h3]:font-semibold [&_h3]:cy-text-primary [&_h3]:text-base [&_h3]:mt-6 [&_h3]:mb-2
          [&_p]:text-sm [&_p]:leading-relaxed [&_p]:my-3
          [&_ul]:text-sm [&_ul]:space-y-1.5 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:my-3"
        >
          <h2>1. Who We Are</h2>
          <p>
            CyfroSec operates an AI-powered Vulnerability Assessment as a Service (VaaS) platform. This policy
            explains how we collect, use, share, and protect personal data when you use our services, visit our
            website, or communicate with our team.
          </p>
          <p>
            <strong>Data controller:</strong> CyfroSec Ltd<br />
            <strong>Contact:</strong> privacy@cyfrosec.com
          </p>

          <h2>2. Data We Collect</h2>
          <h3>Account and identity data</h3>
          <ul>
            <li>Name, email address, job title, company name</li>
            <li>Authentication credentials (managed via Keycloak; passwords are never stored in plaintext)</li>
            <li>Organisation and account group membership</li>
          </ul>
          <h3>Usage and product data</h3>
          <ul>
            <li>Platform activity logs and feature usage metrics</li>
            <li>Scan configurations, vulnerability findings, and remediation records</li>
            <li>AI Assistant conversation history (retained per retention policy)</li>
          </ul>
          <h3>Technical data</h3>
          <ul>
            <li>IP addresses, browser user-agent strings, and session tokens</li>
            <li>API request logs for security and audit purposes</li>
          </ul>
          <h3>Marketing and contact data</h3>
          <ul>
            <li>Data you submit via contact or sales enquiry forms</li>
            <li>Email communication history</li>
          </ul>

          <h2>3. Legal Basis for Processing</h2>
          <p>We process personal data on the following legal bases under GDPR Article 6:</p>
          <ul>
            <li><strong>Contract:</strong> To provide the platform services you have signed up for</li>
            <li><strong>Legitimate interests:</strong> Security monitoring, fraud prevention, and product improvement</li>
            <li><strong>Consent:</strong> For marketing communications (you can withdraw at any time)</li>
            <li><strong>Legal obligation:</strong> Where required by applicable law or regulation</li>
          </ul>

          <h2>4. How We Use Your Data</h2>
          <ul>
            <li>Delivering and operating the CyfroSec platform</li>
            <li>Providing customer support and onboarding assistance</li>
            <li>Sending service-related notifications and security alerts</li>
            <li>Improving product features using aggregated, anonymised analytics</li>
            <li>Complying with legal and regulatory obligations</li>
            <li>Marketing communications (only with your explicit consent)</li>
          </ul>

          <h2>5. Data Sharing</h2>
          <p>We do not sell your personal data. We share data only with:</p>
          <ul>
            <li><strong>Sub-processors:</strong> Cloud infrastructure providers, authentication providers, and analytics tools — all bound by data processing agreements</li>
            <li><strong>Legal authorities:</strong> When required by law, court order, or to protect the rights and safety of CyfroSec or others</li>
            <li><strong>Business transfers:</strong> In the event of a merger or acquisition, subject to confidentiality obligations</li>
          </ul>

          <h2>6. Data Retention</h2>
          <p>
            We retain personal data for as long as your account is active or as required to provide services. 
            Scan results and vulnerability data are retained according to your organisation&apos;s configured 
            retention policy. Activity logs are retained for a minimum of 90 days for security and audit purposes.
          </p>
          <p>
            Upon account deletion, personal data is anonymised or deleted within 30 days, except where retention 
            is required by law.
          </p>

          <h2>7. Your Rights</h2>
          <p>Under GDPR, you have the right to:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
            <li><strong>Rectification:</strong> Ask us to correct inaccurate data</li>
            <li><strong>Erasure:</strong> Request deletion of your personal data (right to be forgotten)</li>
            <li><strong>Restriction:</strong> Ask us to limit how we process your data</li>
            <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
            <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
            <li><strong>Withdraw consent:</strong> For any processing based on consent</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at <strong>privacy@cyfrosec.com</strong>. We will respond 
            within 30 days.
          </p>

          <h2>8. International Transfers</h2>
          <p>
            CyfroSec is based in the EU. Where data is transferred outside the European Economic Area, we ensure 
            appropriate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission.
          </p>

          <h2>9. Security</h2>
          <p>
            We implement industry-standard technical and organisational security measures including encryption at 
            rest and in transit, access controls, and regular security assessments. No transmission method is 100% 
            secure; however, we strive to protect your personal data using commercially reasonable measures.
          </p>

          <h2>10. Cookies</h2>
          <p>
            We use cookies and similar technologies to operate the platform and improve your experience. See our{' '}
            <a href="/cookies" className="cy-text-brand hover:underline">Cookie Policy</a> for details.
          </p>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. We will notify you of material changes by email or 
            by posting a notice on the platform. Continued use of CyfroSec after such notice constitutes 
            acceptance of the updated policy.
          </p>

          <h2>12. Contact Us</h2>
          <p>
            For privacy-related questions or to exercise your rights, contact us at{' '}
            <strong>privacy@cyfrosec.com</strong> or via our{' '}
            <a href="/contact" className="cy-text-brand hover:underline">contact form</a>.
          </p>
        </div>
      </article>
    </PublicPageShell>
  )
}
