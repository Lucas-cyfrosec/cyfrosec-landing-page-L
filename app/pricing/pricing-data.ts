export type PricingFeature = {
  text: string
  tooltip?: string
}

export type PricingPlan = {
  name: string
  info: string
  price: {
    monthly: number
    yearly: number
  }
  features: PricingFeature[]
  btn: {
    text: string
    href: string
  }
  badge?: string
  highlighted?: boolean
}

export type FeatureValue = boolean | string

export interface FeatureRow {
  label: string
  values: FeatureValue[]
}

export interface FeatureCategory {
  category: string
  rows: FeatureRow[]
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Secure',
    badge: 'Core Security',
    info: 'Essential exposure discovery and vulnerability visibility for teams starting their security program.',
    price: { monthly: 0, yearly: 0 },
    features: [
      { text: '14-Day Free Trial' },
      { text: 'Up to 120 scans' },
      { text: 'Network vulnerability and asset discovery scanning' },
      { text: 'Service fingerprinting: misconfigurations, secrets, and system vulnerabilities detection' },
      { text: 'Limited dashboard elements' },
      { text: 'Limited asset topology features' },
      { text: 'Extend your plan with add-ons' },
    ],
    btn: { text: 'Contact Sales', href: '/contact' },
  },
  {
    name: 'Secure+',
    badge: 'Popular',
    highlighted: true,
    info: 'Expanded security visibility with AI-guided remediation and richer reporting.',
    price: { monthly: 0, yearly: 0 },
    features: [
      { text: 'Everything in Secure' },
      { text: 'Up to 220 scans' },
      { text: 'CyfroAI Insights for remediation guidance', tooltip: 'AI-powered vulnerability analysis and fix suggestions' },
      { text: '3x more CyfroAI usage' },
      { text: 'Asset topology and rich dashboard elements' },
      { text: 'CyfroAssistant access without task execution and plan mode' },
      { text: 'GDPR compliance tool access: 1 deep analysis every 30 days' },
      { text: 'CyfroCode access: 1 repository scan every 30 days' },
      { text: 'Extend your plan with add-ons' },
    ],
    btn: { text: 'Contact Sales', href: '/contact' },
  },
  {
    name: 'Pro',
    info: 'Full CyfroSec platform access for teams that need advanced security workflows, AI guidance, and priority support.',
    price: { monthly: 0, yearly: 0 },
    features: [
      { text: 'Contact Sales for Free Trial' },
      { text: 'Everything in Secure and Secure+' },
      { text: 'Up to 450 scans' },
      { text: '3x more AI credits than Secure+' },
      { text: 'Full access to CyfroAI' },
      { text: 'Full compliance tooling' },
      { text: 'Rich topology and dashboard' },
      { text: 'CyfroAssistant with task execution and plan mode' },
      { text: 'CyfroCode' },
      { text: 'Priority Support', tooltip: 'Dedicated support with guaranteed response times' },
      { text: 'Extend your plan with add-ons' },
    ],
    btn: { text: 'Contact Sales', href: '/contact' },
  },
  {
    name: 'Enterprise',
    info: 'A fully customizable plan, unlimited scanning and AI capabilities, integrated compliance checks and dedicated support - designed around your business needs.',
    price: { monthly: 0, yearly: 0 },
    features: [
      { text: 'Everything in Pro' },
      { text: 'Unlimited scans' },
      { text: 'Unlimited AI capabilities' },
      { text: 'Integrated compliance checks' },
      { text: 'Dedicated support' },
      { text: 'Custom deployment and workflow design' },
      { text: 'Tailored commercial terms' },
    ],
    btn: { text: 'Contact Sales', href: '/contact' },
  },
]

export const pricingComparisonPlans = pricingPlans.map((plan) => ({
  name: plan.name,
  highlight: Boolean(plan.highlighted),
}))

export const pricingFeatureMatrix: FeatureCategory[] = [
  {
    category: 'Free Trial',
    rows: [
      {
        label: '14-Day free trial available',
        values: [true, false, 'Please Contact Sales', 'Please Contact Sales'],
      },
    ],
  },
  {
    category: 'Core Scanning',
    rows: [
      { label: 'Network vulnerability & asset discovery scanning', values: [true, true, true, true] },
      { label: 'Service fingerprinting (misconfigurations, secrets, system vulnerabilities)', values: [true, true, true, true] },
      { label: 'CyfroCode SAST code security', values: [false, '1 scan / 30 days', true, true] },
    ],
  },
  {
    category: 'Capacity',
    rows: [
      { label: 'CyfroAgents', values: ['Flexible', 'Flexible', 'Flexible', 'Flexible'] },
      { label: 'Scans included', values: ['120 Scans', '220 Scans', '450 Scans', 'Unlimited'] },
      { label: 'Account groups', values: ['Flexible', 'Flexible', 'Flexible', 'Flexible'] },
      { label: 'Scan configurations', values: ['Flexible', 'Flexible', 'Flexible', 'Flexible'] },
    ],
  },
  {
    category: 'Dashboard & Reporting',
    rows: [
      { label: 'Dashboard elements', values: ['Limited', 'Full', 'Full', 'Full'] },
      { label: 'Asset topology', values: ['Limited', 'Full', 'Full', 'Full'] },
      { label: 'Scan reporting & spreadsheet export', values: [true, true, true, true] },
      { label: 'Risk prioritization', values: [false, true, true, true] },
    ],
  },
  {
    category: 'AI & Intelligence',
    rows: [
      { label: 'CyfroAI Engine & Insights', values: [false, true, true, true] },
      { label: 'CyfroAI usage', values: [false, '3x more', '3x more than Secure+', 'Unlimited'] },
      { label: 'CyfroAssistant', values: [false, 'Without task execution & plan mode', 'Full access', 'Full access'] },
    ],
  },
  {
    category: 'Compliance',
    rows: [
      { label: 'GDPR Compliance tool', values: [false, '1 analysis / 30 days', true, true] },
      { label: 'Integrated compliance checks', values: [false, false, true, true] },
    ],
  },
  {
    category: 'Support',
    rows: [
      { label: 'Guided onboarding & email support', values: [true, true, true, true] },
      { label: 'Guided review session with CyfroSec team', values: [false, false, true, true] },
      { label: 'Priority Support', values: [false, false, true, true] },
      { label: 'Dedicated support', values: [false, false, false, true] },
    ],
  },
]
