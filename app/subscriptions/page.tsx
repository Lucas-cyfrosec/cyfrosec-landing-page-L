import { PublicPageShell } from '@/app/components/landing/PublicPageShell'
import { SectionReveal } from '@/app/components/landing/SectionReveal'
import PricingTabs from '../pricing/PricingTabs'

export const metadata = {
  title: 'Subscriptions | CyfroSec',
  description: 'Secure, Secure+, Pro, and Enterprise subscriptions for CyfroSec coverage, CyfroCode SAST security, AI capabilities, compliance checks, and dedicated support.',
}

export default function SubscriptionsPage() {
  return (
    <PublicPageShell>
      <SectionReveal>
        <section className="pt-10 pb-20" style={{ background: 'var(--bg-canvas)' }}>
          <PricingTabs />
        </section>
      </SectionReveal>
    </PublicPageShell>
  )
}
