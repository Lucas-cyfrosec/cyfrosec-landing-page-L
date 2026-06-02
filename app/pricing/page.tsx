import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Subscriptions | CyfroSec',
  description: 'CyfroSec subscriptions have moved to /subscriptions.',
}

export default function PricingPage() {
  redirect('/subscriptions')
}
