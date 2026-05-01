import { PublicPageShell } from '@/app/components/landing/PublicPageShell'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

export const metadata = {
  title: 'Terms of Service | CyfroSec',
  description: 'The terms and conditions governing your use of the CyfroSec platform and services.',
}

export default function TermsPage() {
  return (
    <PublicPageShell>
      <article className="mx-auto max-w-3xl px-4 py-16 lg:px-6 lg:py-20">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand">Legal</p>
        <h1
          className="text-4xl font-extrabold tracking-tight cy-text-primary mb-2"
          style={{ fontFamily: HEADING_FONT }}
        >
          Terms of Service
        </h1>
        <p className="text-sm cy-text-muted mb-10">Last updated: February 2026</p>

        <div className="space-y-8 text-sm leading-relaxed cy-text-secondary
          [&_h2]:text-xl [&_h2]:font-bold [&_h2]:cy-text-primary [&_h2]:mt-10 [&_h2]:mb-3
          [&_h3]:text-base [&_h3]:font-semibold [&_h3]:cy-text-primary [&_h3]:mt-6 [&_h3]:mb-2
          [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ul]:my-3
          [&_p]:my-3"
        >
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of the CyfroSec platform,
            including all associated products, APIs, and services (&quot;Services&quot;). By accessing or using
            the Services you agree to be bound by these Terms.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By creating an account or using the Services, you represent that you are authorised to enter into
            this agreement on behalf of yourself or your organisation.
          </p>

          <h2>2. Use of the Services</h2>
          <h3>Permitted use</h3>
          <p>You may use the Services only for lawful purposes and in accordance with these Terms. Permitted use includes:</p>
          <ul>
            <li>Vulnerability scanning of environments you own or are authorised to test</li>
            <li>Risk analysis, reporting, and remediation planning within your organisation</li>
            <li>Integration with your authorised toolchain via CyfroSec APIs</li>
          </ul>
          <h3>Prohibited use</h3>
          <p>You must not:</p>
          <ul>
            <li>Use the Services to scan systems you are not authorised to test</li>
            <li>Attempt to gain unauthorised access to the platform or third-party systems</li>
            <li>Reverse-engineer, decompile, or modify the platform software</li>
            <li>Sell, resell, or sublicense the Services without our written permission</li>
            <li>Use the Services in a way that violates applicable laws or regulations</li>
          </ul>

          <h2>3. Accounts and Security</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials. Notify us 
            immediately at <strong>security@cyfrosec.com</strong> if you suspect any unauthorised access to 
            your account. CyfroSec will not be liable for any loss arising from unauthorised use of your account.
          </p>

          <h2>4. Subscription and Payment</h2>
          <p>
            Access to paid tiers of the Services is subject to payment of applicable fees as described in your 
            order or subscription agreement. Fees are billed in advance and are non-refundable except as 
            expressly stated. We reserve the right to modify pricing with 30 days notice.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            CyfroSec retains all intellectual property rights in the platform, software, and content. You 
            retain ownership of all data you upload to the Services. You grant CyfroSec a limited licence to 
            process your data solely for the purpose of providing the Services.
          </p>

          <h2>6. Confidentiality</h2>
          <p>
            Each party agrees to protect the other&apos;s confidential information with at least the same degree of 
            care it uses for its own confidential information and not to disclose it to third parties without 
            prior written consent, except as required by law.
          </p>

          <h2>7. Data Processing</h2>
          <p>
            Our handling of personal data is described in our{' '}
            <a href="/privacy" className="cy-text-brand hover:underline">Privacy Policy</a>. Where CyfroSec 
            processes personal data on your behalf, the parties will execute a Data Processing Agreement as 
            required under applicable data protection law.
          </p>

          <h2>8. Disclaimers</h2>
          <p>
            The Services are provided &quot;as is&quot; without warranties of any kind, express or implied, 
            including but not limited to warranties of merchantability, fitness for a particular purpose, or 
            non-infringement. CyfroSec does not warrant that the Services will be uninterrupted or error-free.
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, CyfroSec will not be liable for any indirect, incidental, 
            special, consequential, or punitive damages arising from your use of the Services, even if CyfroSec 
            has been advised of the possibility of such damages. CyfroSec&apos;s total liability will not exceed 
            the fees paid by you in the 12 months preceding the claim.
          </p>

          <h2>10. Termination</h2>
          <p>
            Either party may terminate this agreement with 30 days written notice. CyfroSec may suspend or 
            terminate access immediately for material breach of these Terms, including unauthorised use of the 
            Services. Upon termination, your right to use the Services ceases and data will be handled per 
            our retention policy.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the European Union and the jurisdiction in which CyfroSec 
            is incorporated, without regard to conflict of law provisions.
          </p>

          <h2>12. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. We will provide at least 30 days notice of material 
            changes. Continued use of the Services after the effective date constitutes acceptance of the 
            updated Terms.
          </p>

          <h2>13. Contact</h2>
          <p>
            For questions about these Terms, contact us at <strong>legal@cyfrosec.com</strong> or via our{' '}
            <a href="/contact" className="cy-text-brand hover:underline">contact form</a>.
          </p>
        </div>
      </article>
    </PublicPageShell>
  )
}
