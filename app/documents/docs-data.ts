export const DOCS_HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

// The full documentation now lives on the dedicated docs site. The gateway
// hub on the marketing site links out to it rather than hosting articles.
const DOCS = 'https://docs.cyfrosec.com/docs'

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
      { label: 'Platform Overview', href: `${DOCS}/getting-started/platform-overview` },
      { label: 'Role Based Access Control', href: `${DOCS}/getting-started/role-based-access-control` },
      { label: 'Support', href: `${DOCS}/getting-started/support` },
    ],
  },
  {
    title: 'PLATFORM GUIDE',
    items: [
      { label: 'Dashboard', href: `${DOCS}/platform-guide/dashboard` },
      { label: 'Notifications', href: `${DOCS}/platform-guide/notifications` },
      { label: 'Report', href: `${DOCS}/platform-guide/reports` },
      { label: 'Asset Topology Diagram', href: `${DOCS}/platform-guide/topology` },
    ],
  },
  {
    title: 'CYFROAI ENGINE',
    items: [
      { label: 'CyfroAI Insights', href: `${DOCS}/cyfroai-engine/cyfroai-insights` },
      { label: 'CyfroAssistant', href: `${DOCS}/cyfroai-engine/cyfroassistant` },
      { label: 'CyfroCode', href: `${DOCS}/cyfroai-engine/cyfrocode` },
    ],
  },
  {
    title: 'CYFROAGENT',
    items: [
      { label: 'CyfroAgent and Setup', href: `${DOCS}/cyfroagent/setup` },
      { label: 'Multi Container Scanning (Apps, Services)', href: `${DOCS}/cyfroagent/multi-container-scanning` },
      { label: 'Deleting CyfroAgent', href: `${DOCS}/cyfroagent/delete-agent` },
    ],
  },
  {
    title: 'SCANS',
    items: [
      { label: 'Creating Scans', href: `${DOCS}/scans/creating-scans` },
      { label: 'Network Discovery Scan', href: `${DOCS}/scans/network-discovery` },
      { label: 'Asset Discovery Scan', href: `${DOCS}/scans/asset-discovery` },
      { label: 'Service Fingerprinting Scan', href: `${DOCS}/scans/service-fingerprinting` },
    ],
  },
  {
    title: 'SECURITY & COMPLIANCE',
    items: [
      { label: 'GDPR Compliance Tool', href: `${DOCS}/security-compliance/gdpr-compliance` },
      { label: 'Audit', href: `${DOCS}/security-compliance/audit` },
    ],
  },
  {
    title: 'ADMIN PANEL',
    items: [
      { label: 'Admin Panel', href: `${DOCS}/admin-panel/admin-panel` },
    ],
  },
]

export const DOCS_SEARCH_INDEX = DOCS_NAV_SECTIONS.flatMap((section) =>
  section.items.map((item) => ({ ...item, section: section.title })),
)

export const DOCS_ARTICLE_SUMMARIES: Record<string, string> = {
  [`${DOCS}/getting-started/platform-overview`]: 'Platform overview covering core capabilities, getting started in five steps, RBAC, and dashboard metric semantics.',
  [`${DOCS}/getting-started/support`]: 'Submit support tickets via the CyfroSec portal — issue type, scan name, description, and optional attachments.',
  [`${DOCS}/getting-started/role-based-access-control`]: 'Three-role hierarchy — Organization Admin, Account Group Admin, and User — with a full permission matrix.',
  [`${DOCS}/platform-guide/dashboard`]: 'Seven customizable widgets covering vulnerability summary, agent status, GDPR compliance, AI insights, and scan status.',
  [`${DOCS}/platform-guide/notifications`]: 'Real-time toast notifications, bell indicator priority states, and session-scoped notification history.',
  [`${DOCS}/platform-guide/reports`]: 'Exportable CSV reports covering Network Discovery, Service Fingerprinting (misconfigs, CVEs, secrets), and Asset Discovery.',
  [`${DOCS}/cyfroai-engine/cyfrocode`]: 'Connect GitHub, queue scans, review findings by severity, generate AI patches, and export fixes as pull requests.',
  [`${DOCS}/platform-guide/topology`]: 'Interactive network diagram combining discovered assets, port evidence, fingerprint summaries, and AI risk highlights.',
  [`${DOCS}/cyfroagent/setup`]: 'Register CyfroAgent with a one-time token, run via Docker, and verify registration — covering single hosts and multi-container environments.',
  [`${DOCS}/cyfroagent/delete-agent`]: 'Fully remove CyfroAgent in three steps — stop and delete the container, remove the data volume, and optionally delete the image.',
  [`${DOCS}/scans/creating-scans`]: 'Create a scan with scan type, target host or subnet, agent selection, and a recurring interval (hourly to daily).',
  [`${DOCS}/scans/network-discovery`]: 'Identifies open ports and services using fast scanning to drive vulnerability detection and data correlation.',
  [`${DOCS}/scans/asset-discovery`]: 'ARP sweeps, local process enumeration, MAC vendor lookup, and SMB/NetBIOS enumeration for full host inventory.',
  [`${DOCS}/scans/service-fingerprinting`]: 'CVE mapping, misconfiguration detection, TLS checks, and secrets scanning with actionable remediation steps.',
  [`${DOCS}/cyfroai-engine/cyfroai-insights`]: 'Executive summaries and prioritized risk lists generated automatically after each scan interval completes.',
  [`${DOCS}/cyfroai-engine/cyfroassistant`]: 'Natural language security analyst with human-in-the-loop approvals, workspace panel, and live streaming responses.',
  [`${DOCS}/security-compliance/gdpr-compliance`]: 'Evidence-based GDPR compliance scoring by article category, with trend deltas and catalog provenance.',
  [`${DOCS}/security-compliance/audit`]: 'Searchable activity trail with action type, resource, endpoint, IP, status code, and date range filters.',
  [`${DOCS}/admin-panel/admin-panel`]: 'Organization, account group, user, audit, subscription, and usage statistics management — restricted to admin roles.',
}
