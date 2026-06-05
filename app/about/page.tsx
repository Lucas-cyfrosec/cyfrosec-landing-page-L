import { PublicPageShell } from '@/app/components/landing/PublicPageShell'
import Learning from '@/app/components/landing/sections/Learning'

export const metadata = {
  title: 'About CyfroSec — Enterprise Security Platform',
  description:
    'Learn about CyfroSec — our mission, team, and AI-native approach to cybersecurity.',
}

export default function AboutPage() {
  return (
    <PublicPageShell>
      <Learning />
    </PublicPageShell>
  )
}
