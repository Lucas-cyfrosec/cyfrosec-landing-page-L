export const DOCS_HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

export interface DocsNavItem {
  label: string
  href: string
}

export interface DocsNavSection {
  title: string
  defaultOpen?: boolean
  items: DocsNavItem[]
}

export const DOCS_NAV_SECTIONS: DocsNavSection[] = [
  {
    title: 'GETTING STARTED',
    defaultOpen: true,
    items: [
      { label: 'Platform Overview', href: '/documents/full' },
      { label: 'Role Based Access Control', href: '/documents/rbac' },
    ],
  },
  {
    title: 'PLATFORM GUIDE',
    items: [
      { label: 'Dashboard', href: '/documents/dashboard' },
      { label: 'Notifications', href: '/documents/notifications' },
      { label: 'Report', href: '/documents/reports' },
      { label: 'CyfroCode', href: '/documents/cyfrocode' },
      { label: 'Asset Topology Diagram', href: '/documents/topology' },
    ],
  },
  {
    title: 'CYFROAGENT',
    items: [
      { label: 'CyfroAgent and Setup', href: '/documents/deploy-agent' },
    ],
  },
  {
    title: 'SCANS',
    items: [
      { label: 'Creating Tests', href: '/documents/first-scan' },
      { label: 'Network Discovery Scan', href: '/documents/network-discovery' },
      { label: 'Asset Discovery Scan', href: '/documents/asset-discovery' },
      { label: 'Service Fingerprinting Scan', href: '/documents/service-fingerprinting' },
    ],
  },
  {
    title: 'CYFROAI ENGINE',
    items: [
      { label: 'CyfroAI Insights', href: '/documents/ai-insights' },
      { label: 'CyfroAssistant', href: '/documents/ai-assistant' },
    ],
  },
  {
    title: 'SECURITY & COMPLIANCE',
    items: [
      { label: 'GDPR Compliance Tool', href: '/documents/gdpr' },
      { label: 'Audit', href: '/documents/audit' },
    ],
  },
  {
    title: 'ADMIN PANEL',
    items: [
      { label: 'Admin Panel', href: '/documents/admin' },
    ],
  },
  {
    title: 'DEPLOYMENT',
    items: [
      { label: 'Licensing', href: '/documents/licensing' },
    ],
  },
]

export const DOCS_SEARCH_INDEX = DOCS_NAV_SECTIONS.flatMap((section) =>
  section.items.map((item) => ({ ...item, section: section.title })),
)

export const DOCS_ARTICLE_SUMMARIES: Record<string, string> = {
  '/documents/full': 'The source-of-truth overview for agents, scans, AI insights, onboarding, and dashboard metrics.',
  '/documents/rbac': 'Learn how role boundaries, access scopes, and permission models are structured across the platform.',
  '/documents/dashboard': 'Understand the widgets, stats, layout customization, and top-level navigation shortcuts.',
  '/documents/notifications': 'Review how alerts, notification delivery, and status signals are surfaced across the product.',
  '/documents/reports': 'See how report generation, outputs, and reporting workflows are organized for teams and stakeholders.',
  '/documents/cyfrocode': 'Explore how CyfroCode helps teams inspect, understand, and act on code-related findings.',
  '/documents/topology': 'Understand the asset topology view and how infrastructure relationships are visualized in the platform.',
  '/documents/deploy-agent': 'Install, register, and validate agents for both cloud and on-prem environments.',
  '/documents/first-scan': 'Launch directly into the first-scan workflow and understand the initial validation path.',
  '/documents/network-discovery': 'Follow the network discovery workflow for identifying hosts, paths, and exposed services.',
  '/documents/asset-discovery': 'Review the asset discovery process for identifying managed and unmanaged infrastructure.',
  '/documents/service-fingerprinting': 'Review the vulnerability, misconfiguration, and secret-detection scan flow in detail.',
  '/documents/ai-insights': 'See how executive summaries and prioritized risk lists are generated and interpreted.',
  '/documents/ai-assistant': 'Learn the AI chat workflow, suggestion cards, streaming responses, and approval flow.',
  '/documents/gdpr': 'Explore the GDPR compliance workflow, evidence handling, and privacy-oriented operational guidance.',
  '/documents/audit': 'Understand audit trails, evidence records, and governance workflows for security teams.',
  '/documents/admin': 'Open the administrative controls for configuration, governance, and organization management.',
  '/documents/licensing': 'Review licensing, provisioning context, and deployment-oriented operational guidance.',
}
