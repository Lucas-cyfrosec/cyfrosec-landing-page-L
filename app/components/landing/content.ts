// ─── Navigation ─────────────────────────────────────────────────────────────

export const NAV_PRODUCTS = [
  { label: 'CyfroAgent', href: '/products/cyfroagent', description: 'Lightweight endpoint & network scanning' },
  { label: 'AI Insights', href: '/products/ai-insights', description: 'Explainable risk scoring and prioritization' },
  { label: 'CyfroAssistant', href: '/products/ai-assistant', description: 'Human-friendly remediation guidance' },
  { label: 'Asset Discovery', href: '/products/asset-discovery', description: 'Continuous cloud & endpoint inventory' },
  { label: 'Network Discovery', href: '/products/network-discovery', description: 'Internal network surface mapping' },
  { label: 'CyfroCode', href: '/solutions/cyfrocode', description: 'SAST code security scanning and AI-driven patches' },
] as const

export const NAV_ITEMS = [
  { label: 'Products', href: '/products/cyfroagent', hasDropdown: true },
  { label: 'Platform', href: '/platform', hasDropdown: false },
  { label: 'Solutions', href: '/solutions', hasDropdown: false },
  { label: 'Subscriptions', href: '/subscriptions', hasDropdown: false },
  { label: 'Resources', href: '/resources', hasDropdown: false },
] as const

// ─── Hero ────────────────────────────────────────────────────────────────────

export const HERO_METRICS = [
  { value: '100%', label: 'Asset visibility' },
  { value: '90%', label: 'Noise reduction' },
  { value: '3×', label: 'Faster MTTR' },
] as const

// ─── Threat Reality (urgency section) ────────────────────────────────────────

export const THREAT_STATS = [
  {
    value: '$4.8M',
    label: 'Average cost of a data breach',
    sub: 'IBM Cost of a Data Breach Report 2024',
    highlight: true,
  },
  {
    value: '~84 sec',
    label: 'Median attacker lateral movement window',
    sub: 'After initial access is established',
    highlight: false,
  },
  {
    value: '~42%',
    label: 'Detection rate by internal security teams',
    sub: 'Most breaches are first found externally',
    highlight: false,
  },
] as const

// ─── Pain Points ─────────────────────────────────────────────────────────────

export const PAIN_POINTS = [
  {
    title: 'Blind spots everywhere',
    description:
      'Cloud, endpoint, and network exposures are tracked in disconnected dashboards. No single team sees the full picture.',
    icon: 'EyeOff',
  },
  {
    title: 'Too much noise, too little action',
    description:
      'Security teams drown in endless CVE lists while critical remediation is buried and deadlines slip.',
    icon: 'AlertTriangle',
  },
  {
    title: 'Tooling that excludes operations',
    description:
      'Complex interfaces force non-specialists to wait for analysts before progress can be made. Every hour counts.',
    icon: 'Lock',
  },
  {
    title: 'Rigid and expensive licensing',
    description:
      'Traditional pricing models slow adoption, penalize growth, and make scaling your security program harder.',
    icon: 'Receipt',
  },
] as const

// ─── Solutions overview ───────────────────────────────────────────────────────

export const SOLUTIONS = [
  {
    title: 'Cyfro AI Insights',
    description:
      'Explainable risk scoring that prioritizes what to fix first across vulnerabilities, secrets, and misconfigurations.',
    href: '/products/ai-insights',
  },
  {
    title: 'Asset and Network Discovery',
    description:
      'Continuous visibility across endpoints, cloud assets, and internal network surfaces — always up to date.',
    href: '/products/asset-discovery',
  },
  {
    title: 'CyfroAssistant',
    description:
      'Human-friendly guidance that turns findings into practical remediation plans for mixed-skill teams.',
    href: '/products/ai-assistant',
  },
  {
    title: 'Code-to-Cloud Coverage',
    description:
      'One platform that ties application, infrastructure, and runtime exposures into a unified risk view.',
    href: '/solutions',
  },
] as const

// ─── Products (for grid / cards) ─────────────────────────────────────────────

export const PRODUCTS = [
  {
    slug: 'cyfroagent',
    name: 'CyfroAgent',
    tagline: 'Lightweight agent. Enterprise-grade scanning.',
    description:
      'A minimal-footprint agent deployable across endpoints, servers, and containers. Continuously collects vulnerability and configuration data without impacting performance.',
    icon: 'Cpu',
    href: '/products/cyfroagent',
    capabilities: [
      'Endpoint and server vulnerability scanning',
      'Container and cloud workload coverage',
      'Configuration and secrets detection',
      'Near real-time data collection with minimal footprint',
    ],
    benefits: [
      { title: 'Zero disruption', description: 'Deploy without impacting live workloads or performance SLAs.' },
      { title: 'Universal coverage', description: 'Supports Linux, Windows, macOS, and major container runtimes.' },
      { title: 'Continuous data', description: 'Streams findings to the Cyfro AI Engine as they are detected.' },
    ],
  },
  {
    slug: 'ai-insights',
    name: 'Cyfro AI Insights',
    tagline: 'Stop guessing. Start fixing the right things first.',
    description:
      'AI-powered risk scoring that converts raw findings into prioritized remediation queues. Every insight includes context, business impact, and a clear next step.',
    icon: 'BrainCircuit',
    href: '/products/ai-insights',
    capabilities: [
      'AI-ranked vulnerability prioritization',
      'Business-impact-aware risk scoring',
      'Secrets and misconfiguration triage',
      'Trend dashboards and executive reports',
    ],
    benefits: [
      { title: 'No more backlogs', description: 'Know exactly what to fix next, every time your team opens the dashboard.' },
      { title: 'Context, not just data', description: 'Every finding includes an explanation of why it matters and what to do.' },
      { title: 'Measurable outcomes', description: 'Track noise reduction, MTTR, and remediation velocity over time.' },
    ],
  },
  {
    slug: 'ai-assistant',
    name: 'CyfroAssistant',
    tagline: 'Your AI security advisor, available 24/7.',
    description:
      'An interactive AI assistant that answers security questions, explains findings in plain language, and generates step-by-step remediation plans for any skill level.',
    icon: 'MessageSquare',
    href: '/products/ai-assistant',
    capabilities: [
      'Natural language security Q&A',
      'Finding explanations for non-specialists',
      'Step-by-step remediation generation',
      'MCP-powered tool integrations',
    ],
    benefits: [
      { title: 'Team-wide access', description: 'Engineers, managers, and operators all get answers suited to their role.' },
      { title: 'Always available', description: 'No waiting for analyst availability — guidance is instant and accurate.' },
      { title: 'Powered by MCP', description: 'Integrates directly with your toolchain via Model Context Protocol.' },
    ],
  },
  {
    slug: 'asset-discovery',
    name: 'Asset Discovery',
    tagline: 'Know every asset before attackers do.',
    description:
      'Continuous and automated inventory of cloud instances, endpoints, containers, and SaaS integrations. No manual spreadsheets, no blind spots.',
    icon: 'ScanSearch',
    href: '/products/asset-discovery',
    capabilities: [
      'Cloud provider asset enumeration (AWS, Azure, GCP)',
      'Endpoint and server inventory',
      'SaaS and API surface mapping',
      'Change detection and alerting',
    ],
    benefits: [
      { title: '100% visibility', description: 'Every asset in your environment is tracked and classified automatically.' },
      { title: 'Real-time changes', description: 'New assets are detected within minutes of provisioning.' },
      { title: 'Risk-tagged inventory', description: 'Each asset is tagged with its current exposure and business context.' },
    ],
  },
  {
    slug: 'network-discovery',
    name: 'Network Discovery',
    tagline: 'Map your internal attack surface continuously.',
    description:
      'Passively and actively maps internal network topology, open services, and lateral movement paths without requiring credentials or agents on every host.',
    icon: 'Network',
    href: '/products/network-discovery',
    capabilities: [
      'Internal network topology mapping',
      'Open port and service enumeration',
      'Lateral movement path analysis',
      'Credential-free host fingerprinting',
    ],
    benefits: [
      { title: 'No agents required', description: 'Works agentlessly across flat and segmented networks.' },
      { title: 'Lateral path awareness', description: 'Visualize how an attacker could move through your environment.' },
      { title: 'Always current', description: 'Continuous scans catch new services and topology changes automatically.' },
    ],
  },
  {
    slug: 'cyfrocode',
    name: 'CyfroCode',
    tagline: 'Scan, explain, and patch your code — without leaving CyfroSec.',
    description:
      'A SAST code-security workspace embedded in CyfroSec. Connect GitHub repositories, run automated vulnerability scans, and generate AI-driven remediation patches ready for a Pull Request.',
    icon: 'Code2',
    href: '/solutions/cyfrocode',
    capabilities: [
      'GitHub App integration and repository sync',
      'Automated security scanning per branch',
      'AI-explained findings with severity filters',
      'One-click AI patch generation to GitHub branch',
    ],
    benefits: [
      { title: 'Shift-left security', description: 'Catch vulnerabilities during development, not after deployment.' },
      { title: 'AI-powered fixes', description: 'Generate and review safe code patches directly in the browser.' },
      { title: 'Zero context-switching', description: 'Code security lives alongside your infrastructure and endpoint coverage.' },
    ],
  },
] as const

// ─── Platform architecture ────────────────────────────────────────────────────

export const ARCHITECTURE_FLOW = [
  'Data Sources (Endpoints, Network, Cloud)',
  'CyfroAgent Collection Layer',
  'Data Ingestion and SIEM Layer',
  'Cyfro AI Engine',
  'Cyfro AI Insights and Prioritization',
  'AI-based Remediation Guidance',
  'CyfroAssistant',
  'SOAR and Response Actions',
  'Dashboards, APIs, Alerts, and Reports',
] as const

// ─── Personas ────────────────────────────────────────────────────────────────

export const PERSONAS = [
  {
    persona: 'Network & IT Engineers',
    value: 'Simple vulnerability guidance and clear remediation paths — no specialist overhead required.',
    icon: 'Network',
  },
  {
    persona: 'IT Managers',
    value: 'Executive-ready summaries, trend reports, and measurable operational outcomes.',
    icon: 'LayoutDashboard',
  },
  {
    persona: 'Security Teams',
    value: 'Robust technical depth across agents, coverage domains, and response workflows.',
    icon: 'ShieldCheck',
  },
  {
    persona: 'SMB Decision Makers',
    value: 'Flexible licensing and faster time-to-value without enterprise complexity or cost.',
    icon: 'Building2',
  },
] as const

// ─── Business impact metrics ──────────────────────────────────────────────────

export const IMPACT_METRICS = [
  { label: 'Asset visibility', value: '100%', animated: true },
  { label: 'Noise reduction', value: '90%', animated: true },
  { label: 'Faster MTTR', value: '3×', animated: true },
  { label: 'Avg breach cost', value: '$4.8M', animated: false },
  { label: 'Lateral movement window', value: '~84 sec', animated: false },
  { label: 'Typical team detection rate', value: '~42%', animated: false },
] as const

// ─── Feature comparison ───────────────────────────────────────────────────────

export const FEATURE_COMPARISON = [
  {
    focus: 'Risk prioritization',
    traditional: 'Large vulnerability backlog with limited context',
    cyfrosec: 'AI-ranked remediation queue tied to business impact',
  },
  {
    focus: 'Audience fit',
    traditional: 'Optimized mainly for security specialists',
    cyfrosec: 'Designed for both technical and non-technical operators',
  },
  {
    focus: 'Coverage',
    traditional: 'Siloed coverage by product category',
    cyfrosec: 'Unified code-to-cloud and infrastructure visibility',
  },
  {
    focus: 'Operational output',
    traditional: 'Raw findings and export-heavy workflows',
    cyfrosec: 'Action plans, dashboards, and response-ready outputs',
  },
] as const

// ─── Deployment & licensing ───────────────────────────────────────────────────

export const DEPLOYMENT_OPTIONS = [
  {
    title: 'SaaS Deployment',
    description: 'Fast onboarding with managed updates and rapid feature delivery.',
    icon: 'Cloud',
  },
  {
    title: 'On-Prem Deployment',
    description: 'Enterprise-controlled deployment for strict network and data governance requirements.',
    icon: 'Server',
  },
  {
    title: 'Flexible Licensing',
    description: 'Usage and token-unit aligned plans that scale with team and environment growth.',
    icon: 'Sliders',
  },
] as const

// ─── Compliance & trust ───────────────────────────────────────────────────────

export const COMPLIANCE_ITEMS = [
  'Multi-framework compliance: GDPR, CCPA, and more',
  'ISO readiness support for structured control programs',
  'Audit-friendly reporting for risk and remediation tracking',
  'Compliance dashboard foundations for regulated teams',
] as const

// ─── Footer links ─────────────────────────────────────────────────────────────

export const FOOTER_LINKS = {
  products: [
    { label: 'CyfroAgent', href: '/products/cyfroagent' },
    { label: 'AI Insights', href: '/products/ai-insights' },
    { label: 'CyfroAssistant', href: '/products/ai-assistant' },
    { label: 'Asset Discovery', href: '/products/asset-discovery' },
    { label: 'Network Discovery', href: '/products/network-discovery' },
  ],
  platform: [
    { label: 'Platform Overview', href: '/platform' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Subscriptions', href: '/subscriptions' },
  ],
  resources: [
    { label: 'Resources', href: '/resources' },
    { label: 'Support Center', href: '/support' },
    { label: 'Contact Sales', href: '/contact' },
  ],
  company: [
    { label: 'About CyfroSec', href: '/about' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
} as const
