import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cloud,
  Cpu,
  Layers,
  Server,
  Shield
} from 'lucide-react';

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif';

const architectureFlow = [
  'Data Sources (Endpoints, Network, Cloud)',
  'CyfroAgent Collection Layer',
  'Data Ingestion and SIEM Layer',
  'Cyfro AI Engine',
  'Cyfro AI Insights and Prioritization',
  'AI-based Remediation Guidance',
  'CyfroAssistant',
  'SOAR and Response Actions',
  'Dashboards, APIs, Alerts, and Reports'
];

const capabilities = [
  {
    heading: 'Code-to-Cloud Coverage',
    body:
      'From application dependencies and container images to cloud infrastructure and network services, CyfroSec inventories, monitors, and assesses your entire attack surface in one place.'
  },
  {
    heading: 'AI-Powered Risk Prioritisation',
    body:
      'Our AI Engine ingests raw findings and converts them into ranked remediation queues, reducing noise by up to 90% and surfacing only what requires immediate attention.'
  },
  {
    heading: 'SIEM and Response Integration',
    body:
      'CyfroSec sits on top of your existing SIEM layer, enriching events with vulnerability context and enabling SOAR-ready response actions without replacing existing tooling.'
  },
  {
    heading: 'Guided Remediation for Every Team',
    body:
      'CyfroAssistant translates technical findings into plain-language guidance and step-by-step action plans, making remediation accessible to IT ops, DevOps, and management alike.'
  }
];

const deploymentOptions = [
  {
    title: 'SaaS Deployment',
    description: 'Fast onboarding with managed updates and rapid feature delivery.',
    icon: Cloud
  },
  {
    title: 'On-Prem Deployment',
    description: 'Enterprise-controlled deployment for strict network and data governance requirements.',
    icon: Server
  },
  {
    title: 'Flexible Licensing',
    description: 'Usage and token-unit aligned plans that scale with team and environment growth.',
    icon: Layers
  }
];

const complianceItems = [
  'GDPR-aligned privacy handling and audit trails',
  'ISO readiness support for structured control programs',
  'Audit-friendly reporting for risk and remediation tracking',
  'Compliance dashboard foundations for regulated teams'
];

const platformZones = [
  {
    label: 'Inputs',
    title: 'Telemetry from every environment',
    items: ['Endpoints and servers', 'Internal networks and services', 'Cloud workloads and infrastructure']
  },
  {
    label: 'Core',
    title: 'Collection, ingestion, and intelligence',
    items: ['CyfroAgent collection layer', 'Data ingestion and SIEM enrichment', 'Cyfro AI Engine prioritisation']
  },
  {
    label: 'Outputs',
    title: 'Actionable outcomes for every team',
    items: ['AI Insights and guided remediation', 'CyfroAssistant and SOAR actions', 'Dashboards, alerts, APIs, and reports']
  }
];

const heroHighlights = [
  'Code-to-cloud visibility',
  'AI-driven prioritisation',
  'Guided remediation',
  'SaaS and on-prem deployment'
];

function SectionHeading({ eyebrow, title, body, light = false }) {
  return (
    <div className="max-w-3xl">
      <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${light ? 'text-primary-300' : 'text-primary-500'}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${light ? 'text-white' : 'text-surface-900 dark:text-surface-50'}`}
        style={{ fontFamily: HEADING_FONT }}
      >
        {title}
      </h2>
      <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-surface-300' : 'text-surface-600 dark:text-surface-400'}`}>
        {body}
      </p>
    </div>
  );
}

export default function PlatformPage({ navigate }) {
  return (
    <main className="min-h-screen bg-surface-50 dark:bg-surface-950">
      <section className="relative overflow-hidden bg-surface-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(3,155,224,0.28),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(254,144,77,0.22),transparent_28%),linear-gradient(180deg,rgba(7,16,27,0.98),rgba(7,16,27,0.92))]" />
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '72px 72px' }} />

        <div className="relative container mx-auto max-w-screen-xl px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
          <button
            onClick={() => navigate?.('home')}
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-surface-300 transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4" />
            Back to landing page
          </button>

          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <p className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-200">
                Platform Overview
              </p>
              <h1
                className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
                style={{ fontFamily: HEADING_FONT }}
              >
                One platform.
                <br />
                <span className="text-gradient">Complete security visibility.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-surface-300">
                CyfroSec connects vulnerability discovery, intelligent prioritisation, and guided remediation from code to cloud, designed for teams of every size and skill level.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {heroHighlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-1.5 text-sm text-surface-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <button
                  onClick={() => navigate?.('get-started')}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary-500 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-600 hover:-translate-y-0.5"
                >
                  Get started free
                  <ArrowRight className="size-4" />
                </button>
                <a
                  href="mailto:sales@cyfrosec.com"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-white/[0.08]"
                >
                  Talk to sales
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-[28px] border border-white/12 bg-white/[0.05] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur"
            >
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="mb-3 flex size-11 items-center justify-center rounded-2xl bg-primary-500/12 text-primary-300">
                    <Server className="size-5" />
                  </div>
                  <p className="text-sm font-semibold text-white">Continuous discovery</p>
                  <p className="mt-2 text-sm leading-relaxed text-surface-300">
                    Ingest asset, network, and cloud telemetry across your environment with one connected workflow.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="mb-3 flex size-11 items-center justify-center rounded-2xl bg-[#fe904d]/12 text-[#feb080]">
                    <Cpu className="size-5" />
                  </div>
                  <p className="text-sm font-semibold text-white">Cyfro AI Engine</p>
                  <p className="mt-2 text-sm leading-relaxed text-surface-300">
                    Convert raw findings into ranked remediation queues with exploitability and business context.
                  </p>
                </div>
              </div>

              <div className="my-4 rounded-[24px] border border-white/12 bg-[linear-gradient(135deg,rgba(3,155,224,0.18),rgba(255,255,255,0.04))] p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-200">Core platform flow</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white" style={{ fontFamily: HEADING_FONT }}>
                      Discover, prioritise, respond.
                    </h3>
                  </div>
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                    <Shield className="size-5" />
                  </div>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {['Data collection', 'AI prioritisation', 'Guided remediation'].map((stage) => (
                    <div key={stage} className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-surface-100">
                      {stage}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="mb-3 flex size-11 items-center justify-center rounded-2xl bg-white/8 text-white">
                    <Layers className="size-5" />
                  </div>
                  <p className="text-sm font-semibold text-white">Deployment flexibility</p>
                  <p className="mt-2 text-sm leading-relaxed text-surface-300">
                    Run CyfroSec as SaaS or on-premises without fragmenting your operating model.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="mb-3 flex size-11 items-center justify-center rounded-2xl bg-emerald-500/12 text-emerald-300">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <p className="text-sm font-semibold text-white">Audit-ready outputs</p>
                  <p className="mt-2 text-sm leading-relaxed text-surface-300">
                    Deliver dashboards, reports, and remediation tracking that support regulated teams.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title="Every layer feeds the next."
            body="Each stage of the platform is purpose-built, from telemetry collection through to the outputs your teams use to fix what matters first."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="rounded-[28px] border border-surface-200 bg-white p-6 shadow-sm dark:border-surface-700 dark:bg-surface-900"
            >
              <ol className="space-y-4">
                {architectureFlow.map((step, index) => (
                  <li key={step} className="flex gap-4 rounded-2xl border border-surface-200/80 bg-surface-50/80 p-4 dark:border-surface-700 dark:bg-surface-800/70">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-500 text-sm font-semibold text-white">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-surface-900 dark:text-surface-50">{step}</p>
                      {index < architectureFlow.length - 1 ? (
                        <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                          Structured output flows directly into the next platform layer.
                        </p>
                      ) : (
                        <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                          The final output is decision-ready visibility for engineering, IT, and security teams.
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </motion.div>

            <div className="space-y-4">
              {platformZones.map((zone, index) => (
                <motion.div
                  key={zone.label}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-[24px] border border-surface-200 bg-white p-6 shadow-sm dark:border-surface-700 dark:bg-surface-900"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-500">{zone.label}</p>
                  <h3 className="mt-2 text-xl font-semibold text-surface-900 dark:text-surface-50" style={{ fontFamily: HEADING_FONT }}>
                    {zone.title}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {zone.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-surface-600 dark:text-surface-400">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-100 py-16 dark:bg-surface-900/40 sm:py-20 lg:py-24">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="Platform capabilities built around real operations."
            body="The same platform supports analysts, IT teams, and leadership without forcing each team into a different tool or workflow."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.heading}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[24px] border border-surface-200 bg-white p-6 shadow-sm dark:border-surface-700 dark:bg-surface-900"
              >
                <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-50" style={{ fontFamily: HEADING_FONT }}>
                  {capability.heading}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-surface-600 dark:text-surface-400">
                  {capability.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Deployment"
            title="CyfroSec fits your infrastructure."
            body="Choose the operational model that matches your environment without giving up coverage, context, or product velocity."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {deploymentOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-[24px] border border-surface-200 bg-white p-6 shadow-sm dark:border-surface-700 dark:bg-surface-900"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-surface-900 dark:text-surface-50" style={{ fontFamily: HEADING_FONT }}>
                    {option.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-surface-600 dark:text-surface-400">
                    {option.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface-100 py-16 dark:bg-surface-900/40 sm:py-20 lg:py-24">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <SectionHeading
              eyebrow="Compliance & Trust"
              title="Built for auditability from day one."
              body="The platform includes the reporting foundations, privacy handling, and structured control support that regulated teams expect."
            />

            <div className="rounded-[28px] border border-surface-200 bg-white p-6 shadow-sm dark:border-surface-700 dark:bg-surface-900">
              <ul className="space-y-4">
                {complianceItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl border border-surface-200/80 bg-surface-50/80 p-4 dark:border-surface-700 dark:bg-surface-800/70">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary-500" />
                    <span className="text-sm leading-relaxed text-surface-600 dark:text-surface-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t cy-border-strong">
        <div className="relative bg-[var(--bg-overlay)] py-16 dark:bg-[#020610] sm:py-20 lg:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-1/2 h-[80%] w-[120%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_bottom,rgba(3,155,224,0.23),transparent_62%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-1/2 h-[42%] w-[62%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_bottom,rgba(3,155,224,0.34),transparent_60%)] mix-blend-screen"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.055]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.78) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.78) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />

          <div className="relative container mx-auto max-w-screen-xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-300">
              Next Step
            </p>
            <h2
              className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
              style={{ fontFamily: HEADING_FONT }}
            >
              Ready to see it in action?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg lg:text-xl">
              Book a demo or start your free evaluation. The platform is designed to get you from visibility to action without adding another fragmented tool.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href="mailto:sales@cyfrosec.com"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-50 hover:shadow-[0_0_38px_rgba(3,155,224,0.3)] sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                Talk to sales
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" />
              </a>
              <button
                onClick={() => navigate?.('get-started')}
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/35 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/8 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                Get started free
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
