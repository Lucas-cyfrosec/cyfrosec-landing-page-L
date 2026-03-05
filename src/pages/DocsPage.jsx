import {
  Search, Book, Zap, Server, Cpu, Plug, Shield, Code2,
  ChevronRight, ArrowRight, Terminal, FileText, Cloud,
  GitBranch, Lock, LifeBuoy, ExternalLink, Clock, Star
} from 'lucide-react';

const categories = [
  {
    icon: Zap,
    color: 'text-[#fe904d]',
    bg: 'bg-[#fe904d]/10 dark:bg-[#fe904d]/15',
    title: 'Getting Started',
    description: 'Deploy CyfroSec and run your first scan in minutes.',
    articles: [
      { title: 'Quick Start Guide', badge: '5 min', badgeColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400' },
      { title: 'System Requirements' },
      { title: 'SaaS vs On-Premises' },
      { title: 'Inviting Your Team' },
    ]
  },
  {
    icon: Server,
    color: 'text-primary-500',
    bg: 'bg-primary-500/10 dark:bg-primary-500/15',
    title: 'CyfroAgent',
    description: 'Lightweight agent for endpoints, servers, and containers.',
    articles: [
      { title: 'Installing CyfroAgent', badge: 'Popular', badgeColor: 'bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-400' },
      { title: 'Supported OS & Platforms' },
      { title: 'Agent Configuration' },
      { title: 'Agentless Scanning' },
    ]
  },
  {
    icon: Cpu,
    color: 'text-violet-500',
    bg: 'bg-violet-500/10 dark:bg-violet-500/15',
    title: 'Cyfro AI Engine',
    description: 'AI-powered analysis, prioritization, and remediation plans.',
    articles: [
      { title: 'How AI Prioritization Works' },
      { title: 'CyfroAssistant (AI Chat)' },
      { title: 'Remediation Plans' },
      { title: 'Risk Scoring Explained' },
    ]
  },
  {
    icon: Plug,
    color: 'text-[#fe904d]',
    bg: 'bg-[#fe904d]/10 dark:bg-[#fe904d]/15',
    title: 'Integrations',
    description: '100+ integrations with SIEM, ticketing, cloud, and CI/CD.',
    articles: [
      { title: 'Splunk Integration' },
      { title: 'Jira & ServiceNow' },
      { title: 'AWS / Azure / GCP' },
      { title: 'GitHub Actions & GitLab CI' },
    ]
  },
  {
    icon: Cloud,
    color: 'text-sky-500',
    bg: 'bg-sky-500/10 dark:bg-sky-500/15',
    title: 'Deployment',
    description: 'SaaS, on-premises, hybrid, and air-gapped deployment options.',
    articles: [
      { title: 'SaaS Deployment (Default)' },
      { title: 'On-Premises with Docker' },
      { title: 'Hybrid Deployment' },
      { title: 'Air-Gapped Environments' },
    ]
  },
  {
    icon: Code2,
    color: 'text-primary-500',
    bg: 'bg-primary-500/10 dark:bg-primary-500/15',
    title: 'API Reference',
    description: 'REST API, webhooks, authentication, and SDKs.',
    articles: [
      { title: 'Authentication & API Keys', badge: 'Start here', badgeColor: 'bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-400' },
      { title: 'Vulnerabilities API' },
      { title: 'Assets API' },
      { title: 'Webhooks & Events' },
    ]
  },
  {
    icon: Shield,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10 dark:bg-emerald-500/15',
    title: 'Security & Compliance',
    description: 'SOC 2, GDPR, ISO 27001, SSO, RBAC, and encryption.',
    articles: [
      { title: 'SSO / SAML / OIDC Setup' },
      { title: 'Role-Based Access Control' },
      { title: 'Data Residency Options' },
      { title: 'Compliance Reports' },
    ]
  },
  {
    icon: LifeBuoy,
    color: 'text-rose-500',
    bg: 'bg-rose-500/10 dark:bg-rose-500/15',
    title: 'Troubleshooting',
    description: 'Common issues, diagnostics, and support resources.',
    articles: [
      { title: 'Agent Not Reporting' },
      { title: 'Reducing False Positives' },
      { title: 'Scan Performance Tuning' },
      { title: 'Contact Support' },
    ]
  }
];

const quickstartPaths = [
  {
    icon: Zap,
    color: 'text-[#fe904d]',
    bg: 'bg-[#fe904d]/10',
    title: 'SaaS Quick Start',
    description: 'Connect your infrastructure and get your first scan in under 10 minutes.',
    time: '10 min',
    steps: ['Create account', 'Install CyfroAgent', 'Run first scan']
  },
  {
    icon: Server,
    color: 'text-primary-500',
    bg: 'bg-primary-500/10',
    title: 'On-Premises Setup',
    description: 'Deploy CyfroSec entirely within your own infrastructure using Docker.',
    time: '< 1 hour',
    steps: ['Download installer', 'Configure Docker', 'Deploy agents']
  },
  {
    icon: Code2,
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
    title: 'API Integration',
    description: 'Integrate CyfroSec data into your own dashboards and workflows.',
    time: '15 min',
    steps: ['Generate API key', 'Authenticate', 'Query endpoints']
  }
];

const popularArticles = [
  { icon: Terminal, title: 'Installing CyfroAgent on Linux', category: 'CyfroAgent', time: '4 min read' },
  { icon: Cpu, title: 'Understanding AI Risk Prioritization', category: 'AI Engine', time: '6 min read' },
  { icon: Plug, title: 'Connecting Jira for Auto-Ticketing', category: 'Integrations', time: '3 min read' },
  { icon: Lock, title: 'Configuring SSO with Okta', category: 'Security', time: '5 min read' },
  { icon: GitBranch, title: 'Shift-Left with GitHub Actions', category: 'CI/CD', time: '7 min read' },
  { icon: FileText, title: 'Executive Dashboard & Reports', category: 'Platform', time: '3 min read' },
];

export default function DocsPage({ navigate }) {
  return (
    <div className="min-h-screen bg-surface-50 dark:bg-surface-950">

      {/* Hero */}
      <div className="relative overflow-hidden bg-surface-50 dark:bg-surface-950 border-b border-surface-200 dark:border-surface-800">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-[#fe904d]/10 dark:from-primary-950/30 dark:via-transparent dark:to-[#fe904d]/5 pointer-events-none" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl py-14 sm:py-20 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-100/80 dark:bg-primary-900/40 border border-primary-200/50 dark:border-primary-800/50 mb-5">
              <Book className="w-3.5 h-3.5 text-primary-700 dark:text-primary-300" />
              <span className="text-primary-700 dark:text-primary-300 text-xs font-medium tracking-wide uppercase">Documentation</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 dark:text-surface-50 mb-4">
              How can we help you?
            </h1>
            <p className="text-base sm:text-lg text-surface-600 dark:text-surface-400 mb-8">
              Guides, references, and tutorials for every part of the CyfroSec platform.
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-surface-400" />
              <input
                type="text"
                placeholder="Search documentation…"
                className="w-full pl-12 pr-16 py-3.5 sm:py-4 rounded-xl bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 text-surface-900 dark:text-surface-50 placeholder:text-surface-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400 dark:focus:border-primary-500 transition-all shadow-sm"
              />
              <kbd className="absolute right-4 top-1/2 -translate-y-1/2 hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded bg-surface-100 dark:bg-surface-700 border border-surface-200 dark:border-surface-600 text-surface-400 text-xs">
                ⌘K
              </kbd>
            </div>

            {/* Quick links */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
              {['Quick Start', 'CyfroAgent Install', 'API Reference', 'Integrations', 'On-Premises'].map(tag => (
                <button
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 text-surface-600 dark:text-surface-400 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-300 dark:hover:border-primary-600 text-xs font-medium transition-all shadow-sm"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl py-12 sm:py-16 space-y-16">

        {/* Quick Start Paths */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-surface-900 dark:text-surface-50">
              Start here
            </h2>
            <span className="text-sm text-surface-500">Choose your path</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {quickstartPaths.map((path) => {
              const Icon = path.icon;
              return (
                <button
                  key={path.title}
                  className="group text-left p-5 sm:p-6 bg-white dark:bg-surface-800 rounded-xl border border-surface-200 dark:border-surface-700 hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-10 h-10 ${path.bg} rounded-lg flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${path.color}`} />
                    </div>
                    <div className="flex items-center gap-1 text-xs text-surface-500">
                      <Clock className="w-3.5 h-3.5" />
                      {path.time}
                    </div>
                  </div>
                  <h3 className="font-semibold text-surface-900 dark:text-surface-50 mb-1.5 group-hover:text-primary-500 transition-colors">
                    {path.title}
                  </h3>
                  <p className="text-sm text-surface-500 dark:text-surface-400 mb-4 leading-relaxed">
                    {path.description}
                  </p>
                  <div className="flex items-center gap-2">
                    {path.steps.map((step, i) => (
                      <div key={step} className="flex items-center gap-2">
                        {i > 0 && <ChevronRight className="w-3 h-3 text-surface-400" />}
                        <span className="text-xs text-surface-500 font-medium">{step}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 text-primary-500 text-sm font-medium">
                    Get started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Browse by Category */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-surface-900 dark:text-surface-50">
              Browse by category
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="group bg-white dark:bg-surface-800 rounded-xl border border-surface-200 dark:border-surface-700 hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-md transition-all duration-200 overflow-hidden"
                >
                  <div className="p-5">
                    <div className={`w-10 h-10 ${cat.bg} rounded-lg flex items-center justify-center mb-3`}>
                      <Icon className={`w-5 h-5 ${cat.color}`} />
                    </div>
                    <h3 className="font-semibold text-surface-900 dark:text-surface-50 mb-1 group-hover:text-primary-500 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-surface-500 dark:text-surface-400 mb-4 leading-relaxed">
                      {cat.description}
                    </p>
                    <ul className="space-y-1.5">
                      {cat.articles.map((article) => (
                        <li key={article.title}>
                          <button className="group/link flex items-center justify-between w-full text-left py-1 gap-2">
                            <span className="text-xs text-surface-600 dark:text-surface-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors leading-snug">
                              {article.title}
                            </span>
                            <div className="flex items-center gap-1.5 flex-shrink-0">
                              {article.badge && (
                                <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-medium ${article.badgeColor}`}>
                                  {article.badge}
                                </span>
                              )}
                              <ChevronRight className="w-3 h-3 text-surface-400 group-hover/link:text-primary-500 group-hover/link:translate-x-0.5 transition-all flex-shrink-0" />
                            </div>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-surface-100 dark:border-surface-700 px-5 py-2.5">
                    <button className="flex items-center gap-1 text-xs text-primary-500 font-medium hover:text-primary-400 transition-colors">
                      View all
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Popular Articles */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-surface-900 dark:text-surface-50">
              Popular articles
            </h2>
            <button className="flex items-center gap-1.5 text-sm text-primary-500 hover:text-primary-400 font-medium transition-colors">
              View all
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {popularArticles.map((article) => {
              const Icon = article.icon;
              return (
                <button
                  key={article.title}
                  className="group flex items-center gap-4 p-4 bg-white dark:bg-surface-800 rounded-xl border border-surface-200 dark:border-surface-700 hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-md transition-all duration-200 text-left"
                >
                  <div className="w-9 h-9 bg-surface-100 dark:bg-surface-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-surface-500 dark:text-surface-400 group-hover:text-primary-500 transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-surface-800 dark:text-surface-200 group-hover:text-primary-500 transition-colors leading-snug truncate">
                      {article.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-surface-400">{article.category}</span>
                      <span className="text-surface-300 dark:text-surface-600">·</span>
                      <span className="text-xs text-surface-400">{article.time}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-surface-400 group-hover:text-primary-500 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </button>
              );
            })}
          </div>
        </section>

        {/* API + Community banner */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* API Reference card */}
          <div className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-6 sm:p-8">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
            <div className="relative">
              <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center mb-4">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">API Reference</h3>
              <p className="text-primary-200 text-sm leading-relaxed mb-5">
                Full REST API documentation with examples, authentication guides, and webhook event schemas.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {['REST API', 'Webhooks', 'SDKs', 'OAuth 2.0'].map(tag => (
                  <span key={tag} className="px-2.5 py-1 bg-white/15 rounded-full text-xs text-white font-medium">{tag}</span>
                ))}
              </div>
              <button className="flex items-center gap-2 px-4 py-2.5 bg-white text-primary-700 text-sm font-semibold rounded-xl hover:bg-primary-50 transition-colors">
                Explore API
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Support card */}
          <div className="relative overflow-hidden bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 rounded-2xl p-6 sm:p-8">
            <div className="absolute top-0 right-0 w-40 h-40 bg-surface-50 dark:bg-surface-700/30 rounded-full -translate-y-1/2 translate-x-1/4" />
            <div className="relative">
              <div className="w-10 h-10 bg-[#fe904d]/10 rounded-xl flex items-center justify-center mb-4">
                <LifeBuoy className="w-5 h-5 text-[#fe904d]" />
              </div>
              <h3 className="text-xl font-bold text-surface-900 dark:text-surface-50 mb-2">Need help?</h3>
              <p className="text-surface-500 dark:text-surface-400 text-sm leading-relaxed mb-5">
                Can't find what you need? Our team is here. Reach out via email or join the community forum.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href="mailto:support@cyfrosec.com"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-surface-900 dark:bg-surface-700 text-white text-sm font-semibold rounded-xl hover:bg-surface-700 dark:hover:bg-surface-600 transition-colors"
                >
                  Email Support
                </a>
                <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-surface-200 dark:border-surface-600 text-surface-700 dark:text-surface-300 text-sm font-medium rounded-xl hover:bg-surface-50 dark:hover:bg-surface-700 transition-colors">
                  <Star className="w-4 h-4" />
                  Community
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Footer strip */}
      <div className="border-t border-surface-200 dark:border-surface-700 mt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-surface-500">
            Can't find what you're looking for? <a href="mailto:support@cyfrosec.com" className="text-primary-500 hover:text-primary-400">Contact support</a>
          </p>
          <button
            onClick={() => navigate('home')}
            className="flex items-center gap-1.5 text-sm text-surface-500 hover:text-primary-500 transition-colors"
          >
            ← Back to cyfrosec.com
          </button>
        </div>
      </div>
    </div>
  );
}
