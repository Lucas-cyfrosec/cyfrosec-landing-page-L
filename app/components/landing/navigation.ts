import {
  Bot,
  Brain,
  Building2,
  Code2,
  CreditCard,
  LayoutDashboard,
  Layers,
  MessageSquare,
  Network,
  Radar,
  ScanSearch,
  Shield,
  ShieldCheck,
} from 'lucide-react';

import type { NavItem } from './ui/dropdown-navigation';

export interface FooterLink {
  label: string;
  href: string;
  isNav?: boolean;
}

export const LANDING_NAV_ITEMS: NavItem[] = [
  { id: 0, label: 'Home', link: '/', isNav: true },
  {
    id: 1,
    label: 'Product',
    link: '#',
    subMenus: [
      {
        title: 'Product',
        items: [
          {
            label: 'Overview',
            href: '/products/overview',
            description: 'What CyfroSec is and how it works',
            icon: LayoutDashboard,
            isNav: true,
          },
          {
            label: 'Features',
            href: '#solutions',
            description: 'Discover, assess, prioritize, remediate',
            icon: Shield,
          },
          {
            label: 'CyfroAI Engine',
            href: '#ai-engine',
            description: 'AI-powered detection & remediation',
            icon: Bot,
          },
          {
            label: 'Architecture',
            href: '#architecture-detail',
            description: 'Platform overview',
            icon: Layers,
          },
          {
            label: 'Compliance & Security',
            href: '#security',
            description: 'GDPR Compliance tool & Data Residency',
            icon: ShieldCheck,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: 'Solutions',
    link: '#',
    subMenus: [
      {
        title: 'Solutions',
        items: [
          {
            label: 'Network Discovery',
            href: '/solutions/network-discovery',
            description: 'Map your network topology',
            isNav: true,
            icon: Network,
          },
          {
            label: 'Asset Discovery',
            href: '/solutions/asset-discovery',
            description: 'Find every asset in your environment',
            isNav: true,
            icon: Radar,
          },
          {
            label: 'Service Fingerprinting',
            href: '/solutions/service-fingerprinting',
            description: 'Identify exposed services & versions',
            isNav: true,
            icon: ScanSearch,
          },
          {
            label: 'CyfroAI Insights',
            href: '/solutions/cyfro-ai-insights',
            description: 'AI-powered risk prioritization',
            isNav: true,
            icon: Brain,
          },
          {
            label: 'CyfroAssistant',
            href: '/solutions/cyfro-assistant',
            description: 'Conversational security guidance',
            isNav: true,
            icon: MessageSquare,
          },
          {
            label: 'CyfroCode',
            href: '/solutions/cyfrocode',
            description: 'Code scanning & AI-driven patches',
            isNav: true,
            icon: Code2,
          },
        ],
      },
    ],
  },
  { id: 4, label: 'Documentation', link: '/documents', isNav: true },
  { id: 6, label: 'Subscriptions', link: '/subscriptions', isNav: true },
  { id: 5, label: 'About', link: '/about', isNav: true },
];

// Scrolled (compact) navbar — collapses About + Subscriptions into a Company dropdown
export const LANDING_NAV_ITEMS_SCROLLED: NavItem[] = [
  ...LANDING_NAV_ITEMS.slice(0, 5).filter((item) => item.id !== 5 && item.id !== 6),
  {
    id: 5,
    label: 'Company',
    link: '#',
    subMenus: [
      {
        title: 'Company',
        items: [
          { label: 'About Us', href: '/about', description: 'Our mission, team, and values', icon: Building2, isNav: true },
          { label: 'Subscription Tiers', href: '/subscriptions', description: 'Plans, pricing, and feature comparison', icon: CreditCard, isNav: true },
        ],
      },
    ],
  },
];

export const LANDING_FOOTER_LINKS: Record<string, FooterLink[]> = {
  product: [
    { label: 'Overview', href: '/products/overview', isNav: true },
    { label: 'Features', href: '#solutions' },
    { label: 'CyfroAI Engine', href: '#ai-engine' },
    { label: 'Architecture', href: '#architecture-detail' },
    { label: 'Compliance & Security', href: '#security' },
  ],
  solutions: [
    { label: 'Network Discovery', href: '/solutions/network-discovery', isNav: true },
    { label: 'Asset Discovery', href: '/solutions/asset-discovery', isNav: true },
    { label: 'Service Fingerprinting', href: '/solutions/service-fingerprinting', isNav: true },
    { label: 'CyfroAI Insights', href: '/solutions/cyfro-ai-insights', isNav: true },
    { label: 'CyfroAssistant', href: '/solutions/cyfro-assistant', isNav: true },
    { label: 'CyfroCode', href: '/solutions/cyfrocode', isNav: true },
  ],
  resources: [
    { label: 'Documentation', href: '/documents', isNav: true },
    { label: 'Subscription tiers', href: '/subscriptions', isNav: true },
  ],
  company: [
    { label: 'About Us', href: '/about', isNav: true },
    { label: 'Contact', href: '/contact', isNav: true },
  ],
};
