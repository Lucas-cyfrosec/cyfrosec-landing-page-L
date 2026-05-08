import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { DOCS_HEADING_FONT } from '../docs-data'
import DocsCodeBlock from './DocsCodeBlock'

const TOC = [
  { id: 'platform-overview',  label: 'Platform Overview' },
  { id: 'core-capabilities',  label: 'Core Capabilities' },
  { id: 'dashboard-metrics',  label: 'Dashboard Metric Semantics' },
  { id: 'getting-started',    label: 'Getting Started Guide' },
  { id: 'step1',              label: 'Step 1: Sign Up' },
  { id: 'step2',              label: 'Step 2: Account Group' },
  { id: 'step3',              label: 'Step 3: Register Agent' },
  { id: 'step4',              label: 'Step 4: Install Agent' },
  { id: 'step5',              label: 'Step 5: Verify' },
  { id: 'provisioning-note',  label: 'Provisioning Note' },
]

export default function PlatformOverviewArticle() {
  return (
    <div className="flex gap-0 w-full max-w-[1600px] mx-auto">

      {/* ── Article ──────────────────────────────────────────────────── */}
      <article className="flex-1 min-w-0 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 w-full max-w-5xl mx-auto">

        <p className="text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand mb-4">
          Getting Started
        </p>

        <h1
          id="platform-overview"
          className="text-2xl sm:text-3xl lg:text-4xl font-bold cy-text-primary mb-4 sm:mb-6 leading-tight scroll-mt-20"
          style={{ fontFamily: DOCS_HEADING_FONT }}
        >
          Platform Overview
        </h1>

        <p className="cy-text-secondary leading-relaxed mb-10">
          CyfroSec continuously discovers assets, analyzes vulnerabilities, misconfigurations, secrets
          and provides AI-driven remediation guidance across your infrastructure.
        </p>

        <hr className="cy-border-default mb-10" />

        {/* Core Capabilities */}
        <section id="core-capabilities" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: DOCS_HEADING_FONT }}
          >
            Core Capabilities
          </h2>

          {/* 1. Agents */}
          <h3 className="text-base font-semibold cy-text-primary mb-2" style={{ fontFamily: DOCS_HEADING_FONT }}>
            1. Agents
          </h3>
          <p className="cy-text-secondary leading-relaxed mb-3">
            Agents act as your infrastructure&apos;s &quot;eyes and ears&quot;.
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-8">
            {[
              'Lightweight: Minimal resource usage.',
              'Secure: Outbound-only connections.',
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>

          {/* 2. Scans */}
          <h3 className="text-base font-semibold cy-text-primary mb-2" style={{ fontFamily: DOCS_HEADING_FONT }}>
            2. Scans
          </h3>
          <p className="cy-text-secondary leading-relaxed mb-3">
            They are automated security checks performed by Agents.
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-8">
            {[
              'Network Discovery: Identifies open ports and services in your server, network, or infrastructure to drive vulnerability detection and analysis.',
              'Service Fingerprinting: Assesses security posture by signature matching of CVEs in installed packages and services, detecting common misconfigurations and scanning for exposed secrets.',
              'Asset Discovery: Does ARP sweeps, local process enumeration and MAC vendor lookup.',
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>

          {/* Dashboard Metric Semantics */}
          <h3 id="dashboard-metrics" className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20" style={{ fontFamily: DOCS_HEADING_FONT }}>
            Dashboard Metric Semantics
          </h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Metric</th>
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Meaning</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Completed Scans', 'Tests currently in completed state (not a historical event count).'],
                  ['Active Tests', 'Tests currently running or pending.'],
                  ['Failed Tests', 'Tests currently in failed state.'],
                  ['Scan Progress', 'Based on terminal states: (completed + failed) / total tests.'],
                ].map(([metric, meaning]) => (
                  <tr key={metric} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-mono text-xs">{metric}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary">{meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 3. CyfroAssistant */}
          <h3 className="text-base font-semibold cy-text-primary mb-2" style={{ fontFamily: DOCS_HEADING_FONT }}>
            3. CyfroAssistant
          </h3>
          <p className="cy-text-secondary leading-relaxed mb-3">
            Your personal security analyst, available 24/7.
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-6">
            {[
              'Natural Language Queries: Ask queries like "Summarise the findings from yesterday\'s scan." or "List active agents" effectively querying your entire fleet in seconds.',
              'Accessibility: Helps to explain, understand, analyze and take action on your data, designed for not just Cybersecurity experts but also for non-Cybersecurity teams and Executives.',
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Getting Started Guide */}
        <section id="getting-started" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: DOCS_HEADING_FONT }}
          >
            Getting Started Guide
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-5">
            Follow these steps to get your first Agent up and running in minutes.
          </p>

          <h3 className="text-base font-semibold cy-text-primary mb-3" style={{ fontFamily: DOCS_HEADING_FONT }}>
            Prerequisites
          </h3>
          <ol className="space-y-4 cy-text-secondary text-sm mb-5">
            {[
              'An active CyfroSec user account.',
              'Admin access to the machine you wish to monitor.',
              'Docker',
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>

          <div className="mt-5 rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary mb-6">
            Need Help? Contact our Support Team at{' '}
            <a href="mailto:support@cyfrosec.com" className="cy-text-brand hover:underline">support@cyfrosec.com</a>
          </div>

          {/* Step 1 */}
          <h3 id="step1" className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20" style={{ fontFamily: DOCS_HEADING_FONT }}>
            Step 1: Sign Up and Create Organization
          </h3>

          <p className="cy-text-secondary text-sm mb-3">
            <strong className="cy-text-primary">SaaS (Cloud-Hosted)</strong>
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-5">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                1
              </span>
              <span className="mt-0.5">
                Go to the CyfroSec Portal - <a href="https://www.app.cyfrosec.com" target="_blank" rel="noreferrer" className="cy-text-brand hover:underline">https://www.app.cyfrosec.com</a> sign-up page.
              </span>
            </li>
            {[
              'Enter your email and password.',
              'Fill in your Organization Details (Company Name, etc.) when prompted.',
              'Complete the email verification process.',
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 2}
                </span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>

          <div className="mt-2 rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary mb-5">
            <strong className="cy-text-primary">Important:</strong> The first user in a new organization/account group must be an admin (Organization admin or Account group admin). Other users can use non-admin roles.
          </div>

          {/* Step 2 */}
          <h3 id="step2" className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20" style={{ fontFamily: DOCS_HEADING_FONT }}>
            Step 2: Create an Account Group
          </h3>
          <p className="cy-text-secondary leading-relaxed mb-3 text-sm">
            Agents are organized into Account Groups (e.g., &quot;DevOps&quot;, &quot;AI Datacenter&quot;, &quot;Production&quot;, &quot;Staging&quot;). You must have at least one group to register an agent.
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-8">
            {[
              'Go to Settings > Account Groups.',
              'Click Create Group.',
              'Name it logically (e.g., "Web App Production Server").',
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>

          {/* Step 3 */}
          <h3 id="step3" className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20" style={{ fontFamily: DOCS_HEADING_FONT }}>
            Step 3: Register an Agent
          </h3>
          <p className="cy-text-secondary leading-relaxed mb-3 text-sm">
            We use a secure One-Time Token to link your server to the cloud.
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-8">
            {[
              'Navigate to CyfroAgent in the sidebar.',
              'Ensure you are assigned an Account Group.',
              'Click Generate Registration Token. You\'ll need this token in the next step.',
              'Copy the token string immediately (it is only shown once).',
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>

          {/* Step 4 */}
          <h3 id="step4" className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20" style={{ fontFamily: DOCS_HEADING_FONT }}>
            Step 4: Install the Agent
          </h3>
          <p className="cy-text-secondary text-sm mb-3">Run the installation command on your server (Docker required):</p>
          <DocsCodeBlock
            label="Shell"
            className="mb-8"
            code={`docker run \\
  --network host \\
  -v cyfro-agent-data:/data/agent \\
  cyfrosec/cyfro-prod:latest \\
  --agentName "MyFirstAgent" \\
  --token "<YOUR_TOKEN_HERE>" \\
  --location "AWS-East-1"`}
          />

          {/* Step 5 */}
          <h3 id="step5" className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20" style={{ fontFamily: DOCS_HEADING_FONT }}>
            Step 5: Verify
          </h3>
          <ol className="space-y-4 cy-text-secondary text-sm mb-8">
            {[
              'Wait about 30 seconds for the Agent to initialize.',
              'Refresh the Agents page in the Portal.',
              'You should see your new Agent listed as Online.',
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Provisioning Consistency Note */}
        <section id="provisioning-note" className="mb-10 scroll-mt-20">
          <h3 className="text-base font-semibold cy-text-primary mb-3" style={{ fontFamily: DOCS_HEADING_FONT }}>
            Provisioning Consistency Note
          </h3>
          <p className="cy-text-secondary leading-relaxed mb-3">
            When organizations, account groups, or users are created from the main admin backend, provisioning behavior is aligned:
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {[
              'Account group creation bootstraps a default Network Discovery scan.',
              'User creation triggers onboarding notification flows.',
              'Plan quotas are enforced consistently.',
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
        </section>

      </article>

      {/* ── Right TOC ─────────────────────────────────────────────────── */}
      <aside className="hidden 2xl:block w-56 shrink-0 px-6 pt-10 pb-10">
        <div className="sticky top-10">
          <p className="text-[10px] font-bold uppercase tracking-widest cy-text-muted mb-3">
            On this page
          </p>
          <ul className="space-y-2">
            {TOC.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-sm cy-text-secondary hover:cy-text-brand transition-colors block"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-6 border-t cy-border-default">
            <Link
              href="/contact"
              className="flex items-center gap-1.5 text-xs cy-text-muted hover:cy-text-brand transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Contact support
            </Link>
          </div>
        </div>
      </aside>

    </div>
  )
}
