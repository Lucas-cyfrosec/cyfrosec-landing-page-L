'use client';

import { Bot, Radar, MessageSquare, Network, ShieldCheck, Brain, Scale, Code2 } from 'lucide-react';
import RadialOrbitalTimeline, { type TimelineItem } from '../RadialOrbitalTimeline';

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    title: 'CyfroAgent',
    date: 'Agent',
    content: 'Lightweight agent that acts as your infrastructure\'s eyes and ears, executing scans, collecting host telemetry, and inventorying assets with outbound-only connectivity.',
    capabilities: [
      'Executes Network Discovery, Asset Discovery, and Service Fingerprinting scans',
      'Collects local host inventory including processes, services, routes, and ARP cache data',
      'Provides minimal-footprint telemetry and scan orchestration from monitored hosts',
      'Uses outbound-only connections so no inbound firewall openings are required',
    ],
    keyBenefits: [
      { title: 'Lightweight by design', description: 'Minimal CPU and memory overhead makes it safe to run continuously on production hosts.' },
      { title: 'Secure transport', description: 'Outbound-only connectivity keeps your firewall closed while the platform still receives scan data.' },
      { title: 'Central to every scan', description: 'Agents provide the execution layer for discovery, fingerprinting, and downstream AI analysis.' },
    ],
    category: 'Agent',
    icon: Bot,
    relatedIds: [3, 6, 7],
    status: 'completed',
    energy: 95
  },
  {
    id: 2,
    title: 'CyfroAI Insights',
    date: 'AI Insights',
    content: 'Automated post-scan analysis that produces an executive summary, re-ranks findings by effective risk, and recommends the next remediation action.',
    capabilities: [
      'Executive summaries generated automatically after scan intervals complete',
      'Prioritized risk lists that factor in exposure, reachability, and correlation',
      'Per-finding reasoning, report links, and recommended actions',
      'OS remediation commands where available',
    ],
    keyBenefits: [
      { title: 'Less noise, faster triage', description: 'High-volume findings are condensed into the issues most likely to reduce real risk first.' },
      { title: 'Reachability-aware prioritization', description: 'Effective risk accounts for exposure and network context, not just base CVSS severity.' },
      { title: 'Actionable output', description: 'Engineers get a clear summary, prioritized risks, and remediation guidance without manual analysis.' },
    ],
    category: 'AI',
    icon: Brain,
    relatedIds: [4, 6, 7],
    status: 'completed',
    energy: 90
  },
  {
    id: 3,
    title: 'Asset Discovery',
    date: 'Discovery',
    content: 'Discovers hosts and devices with ARP sweeps, local inventory, and MAC vendor resolution to build an enriched picture of assets across your environment.',
    capabilities: [
      'ARP sweeps to identify active hosts on local networks',
      'Local process, service, route, and connection enumeration on agent hosts',
      'MAC vendor lookup for device classification and anomaly detection',
      'SMB/NetBIOS plus DHCP or LDAP enrichment where available',
    ],
    keyBenefits: [
      { title: 'Inventory that reflects reality', description: 'Compare documented assets against what the network and hosts actually reveal.' },
      { title: 'Low-impact collection', description: 'Discovery reads host and network signals with minimal overhead on monitored systems.' },
      { title: 'Unexpected device detection', description: 'Unrecognized hosts and anomalous MAC vendors surface quickly for follow-up.' },
    ],
    category: 'Discovery',
    icon: Radar,
    relatedIds: [1, 5, 7],
    status: 'completed',
    energy: 85
  },
  {
    id: 4,
    title: 'CyfroAssistant',
    date: 'Assistant',
    content: 'AI-powered security analyst that answers natural-language questions about your scans, agents, vulnerabilities, and platform workflows.',
    capabilities: [
      'Natural-language queries over scan results, agents, findings, and AI insights',
      'Answers grounded in your actual account-group data and product documentation',
      'Conversational help for triage, summaries, and platform how-to questions',
      'Human-in-the-loop approvals for higher-risk actions',
    ],
    keyBenefits: [
      { title: '24/7 analyst access', description: 'Teams can ask questions at any time without waiting for a specialist to respond.' },
      { title: 'Faster investigations', description: 'Get answers across agents, scans, and findings without hopping between pages and filters.' },
      { title: 'Useful across roles', description: 'Engineers, operators, and managers all get explanations in language they can act on.' },
    ],
    category: 'AI',
    icon: MessageSquare,
    relatedIds: [2, 6, 7],
    status: 'completed',
    energy: 75
  },
  {
    id: 5,
    title: 'Network Discovery',
    date: 'Network',
    content: 'Identifies open ports and services to drive downstream vulnerability detection and analysis across the infrastructure each agent can reach.',
    capabilities: [
      'Open port scanning in quick or full modes',
      'Service identification and TLS metadata collection',
      'Scheduled execution with support for multiple agents per test',
      'Feeds service and exposure data into fingerprinting and AI insight pipelines',
    ],
    keyBenefits: [
      { title: 'Continuous visibility', description: 'Recurring scans surface newly opened ports and services as your environment changes.' },
      { title: 'Service-level context', description: 'Port data is enriched with protocol and TLS details to improve downstream analysis.' },
      { title: 'Useful across segments', description: 'Multi-agent execution helps validate reachability and firewall behavior from different vantage points.' },
    ],
    category: 'Network',
    icon: Network,
    relatedIds: [3, 1, 7],
    status: 'completed',
    energy: 88
  },
  {
    id: 6,
    title: 'Service Fingerprinting',
    date: 'Fingerprint',
    content: 'Assesses security posture by identifying known CVEs in installed packages and services, detecting common misconfigurations, and scanning for exposed secrets.',
    capabilities: [
      'Known CVE mapping for installed packages and detected services',
      'Misconfiguration checks covering TLS, storage, permissions, and default credentials',
      'Targeted secret scanning for API keys, private keys, tokens, and configuration leaks',
      'Evidence-backed findings with clear remediation guidance',
    ],
    keyBenefits: [
      { title: 'Broad security coverage', description: 'One scan surfaces vulnerabilities, misconfigurations, and exposed secrets together.' },
      { title: 'Evidence with every finding', description: 'Results include package details, file paths, or command output to support verification.' },
      { title: 'Remediation-ready guidance', description: 'Teams get the next patch, configuration, or credential-rotation action to take.' },
    ],
    category: 'Assessment',
    icon: ShieldCheck,
    relatedIds: [1, 2, 7],
    status: 'completed',
    energy: 92
  },
  {
    id: 7,
    title: 'GDPR Compliance',
    date: 'Compliance',
    content: 'Automated GDPR-oriented reporting that evaluates recent scan evidence against a versioned control catalog and summarizes your compliance posture by account group.',
    capabilities: [
      'Builds account-group compliance reports from recent Network Discovery, Asset Discovery, and Service Fingerprinting submissions',
      'Scores GDPR categories with finding counts, severity breakdowns, and evidence coverage',
      'Shows report metadata such as catalog provenance, evaluation mode, and scan data window',
      'Supports manual refresh and deeper drill-down from the full compliance page',
    ],
    keyBenefits: [
      { title: 'Audit-ready visibility', description: 'Category-level findings and catalog provenance make compliance reviews easier to verify and explain.' },
      { title: 'Prioritized remediation', description: 'Critical and high-severity issues surface clearly so teams can work from the most urgent compliance gaps first.' },
      { title: 'Transparent scoring', description: 'Evidence coverage and not-evaluable controls help distinguish real gaps from missing scan evidence.' },
    ],
    category: 'Compliance',
    icon: Scale,
    relatedIds: [2, 3, 5, 6],
    status: 'completed',
    energy: 84
  },
  {
    id: 8,
    title: 'CyfroCode',
    date: 'Code Security',
    content: 'Embedded code security workspace that connects your GitHub repositories, runs automated vulnerability scans, and generates AI-driven remediation patches ready for pull request review.',
    capabilities: [
      'GitHub App integration to sync repositories with auto-detected languages, frameworks, and tech indicators',
      'Queued scans per default branch with real-time status tracking from queued through completed',
      'Grouped issues and raw matches views with severity filters from Critical to Low',
      'One-click patch generation that exports an approved code change directly to a new GitHub branch',
    ],
    keyBenefits: [
      { title: 'Fix code without leaving the platform', description: 'Scan, review, and push remediation patches to GitHub from a single embedded workspace.' },
      { title: 'AI context on every finding', description: 'CyfroAssistant explains each vulnerability in plain language so any team member can understand and act on it.' },
      { title: 'Precise, reviewable patches', description: 'Generated diffs are scoped to the affected lines and land on a dedicated branch, ready for a standard pull request review.' },
    ],
    category: 'Code Security',
    icon: Code2,
    relatedIds: [4, 2, 6],
    status: 'completed',
    energy: 88
  },
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
            The <span className="text-primary-500">CyfroSec</span> Platform
          </h2>
          <p className="text-base sm:text-lg 3xl:text-xl text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
            A complete VaaS platform covering AI servers, networks, and infrastructure with AI-driven remediation.
          </p>
        </div>

        {/* Orbital Timeline */}
        <RadialOrbitalTimeline items={timelineItems} />
        <p className="text-center text-sm text-surface-300 dark:text-surface-300 mt-4 mb-4">Tap any node to explore.</p>
      </div>
    </section>
  );
}
