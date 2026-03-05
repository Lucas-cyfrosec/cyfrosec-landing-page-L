import { Eye, Target, Zap } from 'lucide-react';
import { FeatureGrid } from '../components/ui/modern-feature-grid';

const outcomes = [
  {
    Icon: Eye,
    title: 'See Everything',
    description: 'Get complete visibility across your attack surface. Discover assets, vulnerabilities, and exposures across cloud, on-prem, hybrid, and AI server infrastructure.'
  },
  {
    Icon: Target,
    title: 'Prioritize What Matters',
    description: 'Focus on the vulnerabilities that actually pose risk. Context-aware prioritization based on exploitability and business impact — not just CVSS scores.'
  },
  {
    Icon: Zap,
    title: 'Remediate Faster',
    description: 'Accelerate your response with AI-powered remediation guidance, agentic AI that executes fixes, and seamless ticketing integrations.'
  }
];

export default function Outcomes() {
  return (
    <FeatureGrid
      id="outcomes"
      sectionTitle="Security outcomes that matter"
      sectionDescription="Stop chasing every vulnerability. Start fixing the ones that actually put your business at risk."
      features={outcomes}
      className="min-h-screen flex flex-col justify-center bg-white dark:bg-surface-900"
    />
  );
}
