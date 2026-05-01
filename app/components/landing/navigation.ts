import {
  Bot,
  Brain,
  Code2,
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
            label: 'Cyfro Assistant',
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
  { id: 5, label: 'About', link: '#learning' },
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
    { label: 'Cyfro Assistant', href: '/solutions/cyfro-assistant', isNav: true },
  ],
  resources: [{ label: 'Documentation', href: '/documents', isNav: true }],
  company: [
    { label: 'About Us', href: '#learning' },
    { label: 'Contact', href: '/contact', isNav: true },
  ],
};
