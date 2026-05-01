import DocsLandingGateway from '../_components/DocsLandingGateway'

export const metadata = {
  title: 'Documentation Gateway | CyfroSec Documentation',
  description: 'A visual entry page into the existing CyfroSec documentation structure.',
  alternates: { canonical: '/documents/landing' },
}

export default function DocsLandingPage() {
  return <DocsLandingGateway />
}
