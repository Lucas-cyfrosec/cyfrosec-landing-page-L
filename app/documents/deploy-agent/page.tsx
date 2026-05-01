import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'CyfroAgent and Setup | CyfroSec Documentation',
  description: 'How to prepare, register, deploy, and verify CyfroAgent on your infrastructure.',
  alternates: { canonical: '/documents/deploy-agent' },
}

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const TOC = [
  { id: 'overview',        label: 'Overview' },
  { id: 'accessing',       label: 'Accessing CyfroAgent' },
  { id: 'prerequisites',   label: 'Prerequisites' },
  { id: 'step1',           label: 'Step 1: Select Account Group' },
  { id: 'step2',           label: 'Step 2: Generate Token' },
  { id: 'step3',           label: 'Step 3: Run CyfroAgent' },
  { id: 'step4',           label: 'Step 4: Verify Registration' },
  { id: 'integration',     label: 'Integration with Scans' },
  { id: 'troubleshooting', label: 'Troubleshooting Checklist' },
  { id: 'faq',             label: 'FAQ' },
]

export default function DeployAgentPage() {
  return (
    <div className="flex gap-0 w-full max-w-[1600px] mx-auto">

      {/* ── Article ──────────────────────────────────────────────────── */}
      <article className="flex-1 min-w-0 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 w-full max-w-5xl mx-auto">

        <p className="text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand mb-4">
          CyfroAgent
        </p>

        <h1
          className="text-2xl sm:text-3xl lg:text-4xl font-bold cy-text-primary mb-4 sm:mb-6 leading-tight"
          style={{ fontFamily: HEADING_FONT }}
        >
          CyfroAgent and Setup
        </h1>

        <p className="cy-text-secondary leading-relaxed mb-4" id="overview">
          CyfroAgent is a lightweight daemon that performs asset inventory (processes, filesystems, local SBOM
          collection), exposes host telemetry and executes targeted scans and fetches secrets and misconfigurations
          during scheduled discovery.
        </p>
        <p className="cy-text-secondary leading-relaxed mb-10">
          This guide explains how to prepare, register, deploy, and verify CyfroAgent.
        </p>

        <hr className="cy-border-default mb-10" />

        {/* Accessing */}
        <section id="accessing" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Accessing CyfroAgent
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-3 text-sm">
            Route (On premise):
          </p>
          <div className="rounded-xl border cy-border-default overflow-hidden mb-4">
            <pre
              className="p-4 text-sm font-mono cy-text-primary overflow-x-auto leading-relaxed"
              style={{ background: 'var(--bg-canvas)' }}
            >
              app.localhost:8080/cyfroagent
            </pre>
          </div>
          <p className="cy-text-secondary text-sm mb-3">The page includes:</p>
          <ul className="space-y-2 cy-text-secondary text-sm">
            {[
              'Setup prerequisites',
              'One-time token generation',
              'Install command template',
              'Registered agent health list',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Prerequisites */}
        <section id="prerequisites" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Prerequisites
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4">
            Before deployment, ensure all of the following are ready:
          </p>
          <ul className="space-y-2 cy-text-secondary text-sm mb-6">
            {[
              'Active CyfroSec account and organization access.',
              'At least one Account Group created.',
              'Admin rights on the host where CyfroAgent will run.',
              'Docker available on the target host (Docker Engine or Docker Desktop).',
              'Outbound network access from the host to your CyfroSec deployment endpoints.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <p className="cy-text-secondary text-sm mb-3 font-semibold cy-text-primary">Recommended preparation:</p>
          <ul className="space-y-2 cy-text-secondary text-sm">
            {[
              'Identify a clear agent name convention (for example: env-region-host).',
              'Decide on location labels used by your team.',
              'Validate that the intended scan target path is readable when mounted.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Step 1 */}
        <section id="step1" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Step 1: Select Account Group Scope
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-3">
            CyfroAgent registration is account-group scoped.
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {[
              'In the portal, select the target account group.',
              'Open the CyfroAgent page.',
              'Confirm that you are in the correct environment before generating tokens.',
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

        {/* Step 2 */}
        <section id="step2" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Step 2: Generate a Registration Token
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4">
            From the CyfroAgent page:
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-5">
            {[
              'Click Generate Token.',
              'Copy the token immediately.',
              'Use one token per agent deployment.',
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm mb-3 font-semibold cy-text-primary">Token behavior:</p>
          <ul className="space-y-2 cy-text-secondary text-sm mb-5">
            {[
              'Single-use by design.',
              'Time-limited (the UI shows expiration).',
              'Regenerate for each additional host.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-5 rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary">
            <strong className="cy-text-primary">Note:</strong> If token generation fails with permission errors, ensure you are using an administrator role with access to token creation.
          </div>
        </section>

        {/* Step 3 */}
        <section id="step3" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Step 3: Run CyfroAgent (Docker)
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4">
            Run on the target host:
          </p>
          <div className="rounded-xl border cy-border-default overflow-hidden mb-5">
            <div
              className="flex items-center justify-between px-4 py-2 border-b cy-border-default"
              style={{ background: 'var(--bg-canvas)' }}
            >
              <span className="text-xs font-mono cy-text-muted">Shell</span>
            </div>
            <pre
              className="p-4 text-sm font-mono cy-text-primary overflow-x-auto leading-relaxed"
              style={{ background: 'var(--bg-canvas)' }}
            >
{`docker run -d \\
  --name cyfro-agent \\
  --network host \\
  -v cyfro-agent-data:/data/agent \\
  -v /:/host:ro \\
  cyfrosec/cyfro-agent:latest \\
  --agentName "MyAgent" \\
  --token "your-registration-token" \\
  --fernet-key "your-fernet-key" \\
  --location "MyLocation"`}
            </pre>
          </div>

          <p className="cy-text-secondary text-sm mb-3 font-semibold cy-text-primary">Field guidance:</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Field</th>
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['AgentName', 'Human-readable asset identifier in the portal.'],
                  ['Token', 'One-time registration secret.'],
                  ['Fernet-key', 'Symmetric encryption key used by the agent for secure data handling.'],
                  ['Location', 'Optional but recommended for operational context.'],
                ].map(([field, desc]) => (
                  <tr key={field} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-mono text-xs">{field}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Step 4 */}
        <section id="step4" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Step 4: Verify Agent Registration
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4">
            After startup:
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-5">
            {[
              'Return to the CyfroAgent page.',
              'Check the Registered Agents panel.',
              'Confirm the agent appears with recent last-seen timestamp.',
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>

          <p className="cy-text-secondary text-sm mb-3 font-semibold cy-text-primary">Typical status behavior:</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Status</th>
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Meaning</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Online', 'Recent heartbeat'],
                  ['Idle', 'Stale heartbeat but not fully offline'],
                  ['Offline', 'No recent heartbeat or disconnected'],
                ].map(([status, meaning]) => (
                  <tr key={status} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold">{status}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary">{meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="cy-text-secondary text-sm mb-3 font-semibold cy-text-primary">If agent does not appear:</p>
          <ul className="space-y-2 cy-text-secondary text-sm mb-5">
            {[
              'Verify token was unused and not expired',
              'Confirm container started successfully',
              'Check outbound network reachability',
              'Generate a new token and redeploy',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Integration with Scans */}
        <section id="integration" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Integration with Scans
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-3">
            CyfroAgent is required for scheduled test execution.
          </p>
          <p className="cy-text-secondary leading-relaxed">
            Before creating tests, ensure at least one agent is registered in the target account group.
          </p>
        </section>

        {/* Troubleshooting */}
        <section id="troubleshooting" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Troubleshooting Checklist
          </h2>
          <ul className="space-y-2 cy-text-secondary text-sm">
            {[
              'Docker running on host.',
              'Token copied exactly and still valid.',
              'Correct account group context selected before token generation.',
              'Host can reach CyfroSec endpoints.',
              'Container logs show successful startup and registration.',
              'Agent appears in CyfroAgent page and then in Agent Status widgets.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Frequently Asked Questions about CyfroAgent
          </h2>
          <div className="space-y-5">
            {[
              {
                q: 'Can one token register multiple agents?',
                a: 'No. Tokens are single-use.',
              },
              {
                q: 'Can I regenerate tokens any time?',
                a: 'Yes. Generate a fresh token for each new deployment.',
              },
              {
                q: 'Why is my agent listed as Offline?',
                a: 'Most commonly heartbeat delay, network interruption, or container stop/crash.',
              },
              {
                q: 'Do I need an account group before deploying?',
                a: 'Yes. Registration is scoped to an account group.',
              },
            ].map(({ q, a }) => (
              <div key={q}>
                <p className="text-sm font-semibold cy-text-primary mb-1">{q}</p>
                <p className="text-sm cy-text-secondary">{a}</p>
              </div>
            ))}
          </div>
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
