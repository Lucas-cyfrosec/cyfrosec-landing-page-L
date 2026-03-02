import { Bot, Radar, MessageSquare, Network, ShieldCheck, Scan } from 'lucide-react';
import RadialOrbitalTimeline from '../components/RadialOrbitalTimeline';

const timelineItems = [
  {
    id: 1,
    title: 'CyfroAgent',
    date: 'Core',
    content: 'Lightweight agent scanning for endpoints, servers, and containers. Minimal resource usage with maximum visibility.',
    category: 'Agent',
    icon: Scan,
    relatedIds: [3, 6],
    status: 'completed',
    energy: 95
  },
  {
    id: 2,
    title: 'Cyfro AI Insights',
    date: 'AI Engine',
    content: 'AI-driven vulnerability analysis that explains the risk, recommends what to fix first, and generates remediation plans.',
    category: 'AI',
    icon: Bot,
    relatedIds: [4, 6],
    status: 'completed',
    energy: 90
  },
  {
    id: 3,
    title: 'Asset Discovery',
    date: 'Discovery',
    content: 'Automatically discover and classify every asset across your environment. Cloud, on-prem, and hybrid — nothing goes unseen.',
    category: 'Discovery',
    icon: Radar,
    relatedIds: [1, 5],
    status: 'completed',
    energy: 85
  },
  {
    id: 4,
    title: 'CyfroAssistant',
    date: 'AI',
    content: 'Conversational AI that answers security questions, generates reports, and walks you through remediation steps.',
    category: 'AI',
    icon: MessageSquare,
    relatedIds: [2, 6],
    status: 'in-progress',
    energy: 75
  },
  {
    id: 5,
    title: 'Network Discovery',
    date: 'Network',
    content: 'Map your network topology, identify exposed services, and detect misconfigurations across subnets and zones.',
    category: 'Network',
    icon: Network,
    relatedIds: [3, 1],
    status: 'completed',
    energy: 88
  },
  {
    id: 6,
    title: 'Vuln & Misconfig',
    date: 'Assessment',
    content: 'Comprehensive scanning for vulnerabilities, hardcoded secrets, and infrastructure misconfigurations across your stack.',
    category: 'Assessment',
    icon: ShieldCheck,
    relatedIds: [1, 2],
    status: 'completed',
    energy: 92
  }
];

export default function SolutionOverview() {
  return (
    <section id="solutions" className="py-12 sm:py-16 lg:py-24 3xl:py-32 relative overflow-hidden bg-white dark:bg-surface-900 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl 3xl:max-w-screen-2xl">
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Vulnerability Assessment as a Service
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-bold text-surface-900 dark:text-surface-50 mb-3 sm:mb-4">
            The CyfroSec <span className="text-primary-500">Platform</span>
          </h2>
          <p className="text-base sm:text-lg 3xl:text-xl text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
            A complete VaaS platform covering endpoints, networks, cloud, and emerging technologies with AI-driven remediation. Click any node to explore.
          </p>
        </div>

        {/* Orbital Timeline */}
        <RadialOrbitalTimeline items={timelineItems} />

        {/* Fallback grid for small screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-6 lg:hidden">
          {timelineItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="p-3 sm:p-4 rounded-xl bg-surface-50 dark:bg-surface-800 border border-surface-200 dark:border-surface-700">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-500">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-medium text-primary-600 dark:text-primary-300">{item.date}</span>
                </div>
                <h3 className="text-sm font-bold text-surface-900 dark:text-surface-50 mb-1">{item.title}</h3>
                <p className="text-xs text-surface-600 dark:text-surface-400 leading-relaxed">{item.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
