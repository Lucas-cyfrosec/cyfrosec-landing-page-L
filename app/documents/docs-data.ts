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
      { label: 'Support', href: '/documents/support' },
    ],
  },
  {
    title: 'PLATFORM GUIDE',
    items: [
      { label: 'Dashboard', href: '/documents/dashboard' },
      { label: 'Notifications', href: '/documents/notifications' },
      { label: 'Report', href: '/documents/reports' },
      { label: 'Asset Topology Diagram', href: '/documents/topology' },
    ],
  },
  {
    title: 'CYFROAI ENGINE',
    items: [
      { label: 'CyfroAI Insights', href: '/documents/ai-insights' },
      { label: 'CyfroAssistant', href: '/documents/ai-assistant' },
      { label: 'CyfroCode', href: '/documents/cyfrocode' },
    ],
  },
  {
    title: 'CYFROAGENT',
    items: [
      { label: 'CyfroAgent and Setup', href: '/documents/deploy-agent' },
      { label: 'Multi Container Scanning (Apps, Services)', href: '/documents/docker-scanning' },
      { label: 'Deleting CyfroAgent', href: '/documents/delete-agent' },
    ],
  },
  {
    title: 'SCANS',
    items: [
      { label: 'Creating Scans', href: '/documents/first-scan' },
      { label: 'Network Discovery Scan', href: '/documents/network-discovery' },
      { label: 'Asset Discovery Scan', href: '/documents/asset-discovery' },
      { label: 'Service Fingerprinting Scan', href: '/documents/service-fingerprinting' },
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
]

export const DOCS_SEARCH_INDEX = DOCS_NAV_SECTIONS.flatMap((section) =>
  section.items.map((item) => ({ ...item, section: section.title })),
)

export const DOCS_ARTICLE_SUMMARIES: Record<string, string> = {
  '/documents/full': 'Platform overview covering core capabilities, getting started in five steps, RBAC, and dashboard metric semantics.',
  '/documents/support': 'Submit support tickets via the CyfroSec portal — issue type, scan name, description, and optional attachments.',
  '/documents/rbac': 'Three-role hierarchy — Organization Admin, Account Group Admin, and User — with a full permission matrix.',
  '/documents/dashboard': 'Seven customizable widgets covering vulnerability summary, agent status, GDPR compliance, AI insights, and scan status.',
  '/documents/notifications': 'Real-time toast notifications, bell indicator priority states, and session-scoped notification history.',
  '/documents/reports': 'Exportable CSV reports covering Network Discovery, Service Fingerprinting (misconfigs, CVEs, secrets), and Asset Discovery.',
  '/documents/cyfrocode': 'Connect GitHub, queue scans, review findings by severity, generate AI patches, and export fixes as pull requests.',
  '/documents/topology': 'Interactive network diagram combining discovered assets, port evidence, fingerprint summaries, and AI risk highlights.',
  '/documents/deploy-agent': 'Register CyfroAgent with a one-time token, run via Docker, and verify registration — covering single hosts and multi-container environments.',
  '/documents/delete-agent': 'Fully remove CyfroAgent in three steps — stop and delete the container, remove the data volume, and optionally delete the image.',
  '/documents/first-scan': 'Create a scan with scan type, target host or subnet, agent selection, and a recurring interval (hourly to daily).',
  '/documents/network-discovery': 'Identifies open ports and services using fast scanning to drive vulnerability detection and data correlation.',
  '/documents/asset-discovery': 'ARP sweeps, local process enumeration, MAC vendor lookup, and SMB/NetBIOS enumeration for full host inventory.',
  '/documents/service-fingerprinting': 'CVE mapping, misconfiguration detection, TLS checks, and secrets scanning with actionable remediation steps.',
  '/documents/ai-insights': 'Executive summaries and prioritized risk lists generated automatically after each scan interval completes.',
  '/documents/ai-assistant': 'Natural language security analyst with human-in-the-loop approvals, workspace panel, and live streaming responses.',
  '/documents/gdpr': 'Evidence-based GDPR compliance scoring by article category, with trend deltas and catalog provenance.',
  '/documents/audit': 'Searchable activity trail with action type, resource, endpoint, IP, status code, and date range filters.',
  '/documents/admin': 'Organization, account group, user, audit, subscription, and usage statistics management — restricted to admin roles.',
}
