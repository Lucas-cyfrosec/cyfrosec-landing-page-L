import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import DocsCodeBlock from '../_components/DocsCodeBlock'

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
  { id: 'fernet-key',      label: 'Step 3: Generate a Fernet Key' },
  { id: 'step3',           label: 'Step 4: Run CyfroAgent' },
  { id: 'step4',           label: 'Step 5: Verify Registration' },
  { id: 'update-image',    label: 'Updating Image Version' },
  { id: 'integration',     label: 'Integration with Scans' },
  { id: 'troubleshooting', label: 'Verification Checklist' },
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
          <p className="cy-text-secondary text-sm mb-3">The page includes:</p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {[
              'Setup prerequisites',
              'One-time token generation',
              'Install command template',
              'Registered agent health list',
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
          <ol className="space-y-4 cy-text-secondary text-sm mb-6">
            {[
              'Active CyfroSec account and organization access.',
              'At least one Account Group created.',
              'Admin rights on the host where CyfroAgent will run.',
              'Docker available on the target host (Docker Engine or Docker Desktop).',
              'Outbound network access from the host to your CyfroSec deployment endpoints.',
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>

          <p className="cy-text-secondary text-sm mb-3 font-semibold cy-text-primary">Recommended preparation:</p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {[
              'Identify a clear agent name convention (for example: Linux_Prod_Server_2).',
              'Decide on location labels used by your team.',
              'Validate that the intended scan target path is readable when mounted.',
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
          <ol className="space-y-4 cy-text-secondary text-sm mb-5">
            {[
              'Single-use by design.',
              'Time-limited (the UI shows expiration).',
              'Regenerate for each additional host.',
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
          <div className="mt-5 rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary">
            <strong className="cy-text-primary">Note:</strong> If token generation fails with permission errors, ensure you are using an administrator role with access to token creation.
          </div>
        </section>

        <section id="fernet-key" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Step 3: Generate a Fernet Key
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4">
            From the CyfroAgent page:
          </p>
          <ol className="space-y-4 cy-text-secondary text-sm">
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
        </section>

        {/* Step 3 */}
        <section id="step3" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Step 4: Run CyfroAgent (Docker)
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4">
            Copy the docker command from the CyfroAgent tab of the CyfroSec portal after entering values for the requested parameters. A sample command has been provided below for which the parameter values have to be replaced:
          </p>
          <DocsCodeBlock
            label="Shell"
            code={`docker run -d \\
  --name cyfro-agent \\
  --network host \\
  --cap-add=NET_RAW \\
  --cap-add=NET_ADMIN \\
  -v cyfro-agent-data:/data/agent \\
  -v /:/host:ro \\
  cyfrosec/cyfro-agent:latest \\
  --agentName "MyAgent" \\
  --token "your-registration-token" \\
  --fernet-key "your-fernet-key" \\
  --location "MyLocation"`}
          />

          <p className="cy-text-secondary text-sm mb-3 font-semibold cy-text-primary">Parameter</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Parameter</th>
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['--fernet-key', 'Encryption key provided by CyfroSec (must remain the same across restarts)'],
                  ['--agentName', 'Display name for your agent in the CyfroSec platform'],
                  ['--token', 'One-time registration token provided by CyfroSec'],
                  ['--location', 'Label for the agent\'s location (e.g. Production, Office-NYC)'],
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
            Step 5: Verify Agent Registration
          </h2>
          <DocsCodeBlock label="Shell" code={`docker logs -f cyfro-agent`} />

          <p className="cy-text-secondary text-sm mb-3">A successful startup looks like:</p>
          <DocsCodeBlock
            label="Logs"
            className="mb-6"
            code={`Agent not registered, registering now...
Agent registered successfully.
Starting agent.
Performing initial backend synchronization...
Scheduler started with APScheduler`}
          />

          <h3 className="text-base font-semibold cy-text-primary mb-3" style={{ fontFamily: HEADING_FONT }}>
            Managing the Agent
          </h3>

          <p className="cy-text-secondary text-sm font-semibold cy-text-primary mb-2">View logs</p>
          <DocsCodeBlock className="mb-4" code={`docker logs -f cyfro-agent`} />

          <p className="cy-text-secondary text-sm font-semibold cy-text-primary mb-2">Stop the agent</p>
          <DocsCodeBlock className="mb-4" code={`docker stop cyfro-agent`} />

          <p className="cy-text-secondary text-sm font-semibold cy-text-primary mb-2">Restart the agent</p>
          <DocsCodeBlock className="mb-4" code={`docker restart cyfro-agent`} />

          <p className="cy-text-secondary text-sm font-semibold cy-text-primary mb-2">Start the agent after a reboot (already registered)</p>
          <p className="cy-text-secondary text-sm mb-2">
            If the server reboots and the container is stopped, no re-registration is needed:
          </p>
          <DocsCodeBlock className="mb-4" code={`docker start cyfro-agent`} />

          <p className="cy-text-secondary text-sm font-semibold cy-text-primary mb-2">Re-register the agent</p>
          <p className="cy-text-secondary text-sm mb-2">
            If you need to start fresh, remove the container and its data volume, then run again with a new token:
          </p>
          <DocsCodeBlock
            className="mb-4"
            code={`docker stop cyfro-agent && docker rm cyfro-agent
docker volume rm cyfro-agent-data`}
          />
          <p className="cy-text-secondary text-sm mb-6">
            Then repeat Step 2 with a new registration token.
          </p>

        </section>

        <section id="update-image" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Updating to a New Image Version
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4">
            If you already have the agent running with an older image and want to update to the latest version, follow these steps. Your credentials are preserved in the volume, so no re-registration is needed.
          </p>

          <h3 className="text-base font-semibold cy-text-primary mb-3" style={{ fontFamily: HEADING_FONT }}>
            Step 1: Stop and remove the old container
          </h3>
          <DocsCodeBlock className="mb-2" code={`docker stop cyfro-agent && docker rm cyfro-agent`} />
          <p className="cy-text-secondary text-sm mb-5">
            Do not remove the <code className="rounded px-1.5 py-0.5 text-xs font-mono bg-primary-500/10 cy-text-brand">cyfro-agent-data</code> volume. It holds your agent credentials.
          </p>

          <h3 className="text-base font-semibold cy-text-primary mb-3" style={{ fontFamily: HEADING_FONT }}>
            Step 2: Pull the latest image
          </h3>
          <DocsCodeBlock className="mb-5" code={`docker pull cyfrosec/cyfro-agent:latest`} />

          <h3 className="text-base font-semibold cy-text-primary mb-3" style={{ fontFamily: HEADING_FONT }}>
            Step 3: Run the agent with the new image
          </h3>
          <p className="cy-text-secondary text-sm mb-4">
            The agent will detect the existing credentials in the volume and skip registration automatically.
          </p>
          <p className="cy-text-secondary text-sm font-semibold cy-text-primary mb-2">On a Linux server:</p>
          <DocsCodeBlock
            className="mb-4"
            code={`docker run -d \\
  --name cyfro-agent \\
  --network host \\
  --cap-add=NET_RAW \\
  --cap-add=NET_ADMIN \\
  -v cyfro-agent-data:/data/agent \\
  -v /path/to/your/code:/scan-target:ro \\
  cyfrosec/cyfro-agent:latest`}
          />
          <p className="cy-text-secondary text-sm font-semibold cy-text-primary mb-2">On macOS (local development):</p>
          <DocsCodeBlock
            className="mb-2"
            code={`docker run -d \\
  --name cyfro-agent \\
  --cap-add=NET_RAW \\
  --cap-add=NET_ADMIN \\
  -v cyfro-agent-data:/data/agent \\
  -v /path/to/your/code:/scan-target:ro \\
  cyfrosec/cyfro-agent:latest`}
          />
          <p className="cy-text-secondary text-sm mb-5">
            Note: macOS does not support <code className="rounded px-1.5 py-0.5 text-xs font-mono bg-primary-500/10 cy-text-brand">--network host</code>. The agent will use Docker&apos;s default bridge network instead.
          </p>

          <h3 className="text-base font-semibold cy-text-primary mb-3" style={{ fontFamily: HEADING_FONT }}>
            Step 4: Verify the update
          </h3>
          <DocsCodeBlock className="mb-3" code={`docker logs -f cyfro-agent`} />
          <p className="cy-text-secondary text-sm mb-3">You should see:</p>
          <DocsCodeBlock
            className="mb-6"
            code={`Agent already registered. Skipping registration.
Starting agent.
Performing initial backend synchronization...
Scheduler started with APScheduler`}
          />

          <h3 className="text-base font-semibold cy-text-primary mb-3" style={{ fontFamily: HEADING_FONT }}>
            Important Notes
          </h3>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {[
              'Do not delete the cyfro-agent-data volume unless you intend to re-register. It contains the agent\'s encrypted credentials.',
              'The CYFRO_FERNET_KEY must remain the same across restarts. Changing it will require re-registration.',
              'Registration tokens are one-time use. Contact CyfroSec for a new token if needed.',
              'The agent runs scans periodically in the background. No manual intervention is required after setup.',
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

        <section className="mb-10 scroll-mt-20">
          <p className="cy-text-secondary leading-relaxed mb-4">
            After Agent startup:
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
          <ol className="space-y-4 cy-text-secondary text-sm mb-5">
            {[
              'Verify token was unused and not expired',
              'Confirm container started successfully',
              'Check outbound network reachability',
              'Generate a new token and redeploy',
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm">
            If you are still facing issues, please contact us at <a href="mailto:support@cyfrosec.com" className="cy-text-brand hover:underline">support@cyfrosec.com</a>
          </p>
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
            Verification Checklist
          </h2>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {[
              'Docker running on host.',
              'Token copied exactly and still valid.',
              'Correct account group context selected before token generation.',
              'Host can reach CyfroSec endpoints.',
              'Container logs show successful startup and registration.',
              'Agent appears in CyfroAgent page and then in Agent Status widgets.',
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
