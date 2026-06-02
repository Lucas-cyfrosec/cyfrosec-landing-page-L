'use client'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import DocsCodeBlock from '../_components/DocsCodeBlock'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const CONTENT = {
  en: {
    category: 'CyfroAgent',
    title: 'CyfroAgent and Setup',
    overview1: 'CyfroAgent is a lightweight daemon that performs asset inventory (processes, filesystems, local SBOM collection), exposes host telemetry and executes targeted scans and fetches secrets and misconfigurations during scheduled discovery.',
    overview2: 'This guide explains how to prepare, register, deploy, and verify CyfroAgent.',
    accessingTitle: 'Accessing CyfroAgent',
    accessingIntro: 'The page includes:',
    accessingItems: [
      'Setup prerequisites',
      'One-time token generation',
      'Install command template',
      'Registered agent health list',
    ],
    prereqTitle: 'Prerequisites',
    prereqIntro: 'Before deployment, ensure all of the following are ready:',
    prereqItems: [
      'Active CyfroSec account and organization access.',
      'At least one Account Group created.',
      'Admin rights on the host where CyfroAgent will run.',
      'Docker available on the target host (Docker Engine or Docker Desktop).',
      'Outbound network access from the host to your CyfroSec deployment endpoints.',
    ],
    prereqRecTitle: 'Recommended preparation:',
    prereqRecItems: [
      'Identify a clear agent name convention (for example: Linux_Prod_Server_2).',
      'Decide on location labels used by your team.',
      'Validate that the intended scan target path is readable when mounted.',
    ],
    step1Title: 'Step 1: Select Account Group Scope',
    step1Intro: 'CyfroAgent registration is account-group scoped.',
    step1Items: [
      'In the portal, select the target account group.',
      'Open the CyfroAgent page.',
      'Confirm that you are in the correct environment before generating tokens.',
    ],
    step2Title: 'Step 2: Generate a Registration Token',
    step2Intro: 'From the CyfroAgent page:',
    step2Items: [
      'Click Generate Token.',
      'Copy the token immediately.',
      'Use one token per agent deployment.',
    ],
    tokenBehaviorTitle: 'Token behavior:',
    tokenBehaviorItems: [
      'Single-use by design.',
      'Time-limited (the UI shows expiration).',
      'Regenerate for each additional host.',
    ],
    tokenNoteLabel: 'Note:',
    tokenNote: 'If token generation fails with permission errors, ensure you are using an administrator role with access to token creation.',
    fernetTitle: 'Step 3: Generate a Fernet Key',
    fernetIntro: 'From the CyfroAgent page:',
    fernetItems: [
      'Click Generate Token.',
      'Copy the token immediately.',
      'Use one token per agent deployment.',
    ],
    step3Title: 'Step 4: Run CyfroAgent (Docker)',
    step3Intro: 'Copy the docker command from the CyfroAgent tab of the CyfroSec portal after entering values for the requested parameters. A sample command has been provided below for which the parameter values have to be replaced:',
    paramLabel: 'Parameter',
    paramHeaders: ['Parameter', 'Description'],
    paramRows: [
      ['--fernet-key', 'Encryption key provided by CyfroSec (must remain the same across restarts)'],
      ['--agentName', 'Display name for your agent in the CyfroSec platform'],
      ['--token', 'One-time registration token provided by CyfroSec'],
      ['--location', 'Label for the agent\'s location (e.g. Production, Office-NYC)'],
    ] as [string, string][],
    step4Title: 'Step 5: Verify Agent Registration',
    step4SuccessIntro: 'A successful startup looks like:',
    manageTitle: 'Managing the Agent',
    logsLabel: 'View logs',
    stopLabel: 'Stop the agent',
    restartLabel: 'Restart the agent',
    startAfterRebootLabel: 'Start the agent after a reboot (already registered)',
    startAfterRebootText: 'If the server reboots and the container is stopped, no re-registration is needed:',
    reregisterLabel: 'Re-register the agent',
    reregisterText: 'If you need to start fresh, remove the container and its data volume, then run again with a new token:',
    thenRepeatText: 'Then repeat Step 2 with a new registration token.',
    updateTitle: 'Updating to a New Image Version',
    updateIntro: 'If you already have the agent running with an older image and want to update to the latest version, follow these steps. Your credentials are preserved in the volume, so no re-registration is needed.',
    updateStep1Title: 'Step 1: Stop and remove the old container',
    updateStep1Note: 'volume. It holds your agent credentials.',
    updateStep1NoteBefore: 'Do not remove the ',
    updateStep2Title: 'Step 2: Pull the latest image',
    updateStep3Title: 'Step 3: Run the agent with the new image',
    updateStep3Detect: 'The agent will detect the existing credentials in the volume and skip registration automatically.',
    updateStep3LinuxLabel: 'On a Linux server:',
    updateStep3MacLabel: 'On macOS (local development):',
    updateStep3MacNoteBefore: 'Note: macOS does not support ',
    updateStep3MacNoteAfter: '. The agent will use Docker\'s default bridge network instead.',
    updateStep4Title: 'Step 4: Verify the update',
    updateStep4Note: 'You should see:',
    importantTitle: 'Important Notes',
    importantItems: [
      'Do not delete the cyfro-agent-data volume unless you intend to re-register. It contains the agent\'s encrypted credentials.',
      'The CYFRO_FERNET_KEY must remain the same across restarts. Changing it will require re-registration.',
      'Registration tokens are one-time use. Contact CyfroSec for a new token if needed.',
      'The agent runs scans periodically in the background. No manual intervention is required after setup.',
    ],
    afterStartupIntro: 'After Agent startup:',
    afterStartupItems: [
      'Return to the CyfroAgent page.',
      'Check the Registered Agents panel.',
      'Confirm the agent appears with recent last-seen timestamp.',
    ],
    typicalStatusTitle: 'Typical status behavior:',
    statusHeaders: ['Status', 'Meaning'],
    statusRows: [
      ['Online', 'Recent heartbeat'],
      ['Idle', 'Stale heartbeat but not fully offline'],
      ['Offline', 'No recent heartbeat or disconnected'],
    ] as [string, string][],
    notAppearTitle: 'If agent does not appear:',
    notAppearItems: [
      'Verify token was unused and not expired',
      'Confirm container started successfully',
      'Check outbound network reachability',
      'Generate a new token and redeploy',
    ],
    notAppearSupport: 'If you are still facing issues, please contact us at',
    integrationTitle: 'Integration with Scans',
    integrationText1: 'CyfroAgent is required for scheduled scan execution.',
    integrationText2: 'Before creating scans, ensure at least one agent is registered in the target account group.',
    troubleshootTitle: 'Verification Checklist',
    troubleshootItems: [
      'Docker running on host.',
      'Token copied exactly and still valid.',
      'Correct account group context selected before token generation.',
      'Host can reach CyfroSec endpoints.',
      'Container logs show successful startup and registration.',
      'Agent appears in CyfroAgent page and then in Agent Status widgets.',
    ],
    faqTitle: 'Frequently Asked Questions about CyfroAgent',
    faqs: [
      { q: 'Can one token register multiple agents?', a: 'No. Tokens are single-use.' },
      { q: 'Can I regenerate tokens any time?', a: 'Yes. Generate a fresh token for each new deployment.' },
      { q: 'Why is my agent listed as Offline?', a: 'Most commonly heartbeat delay, network interruption, or container stop/crash.' },
      { q: 'Do I need an account group before deploying?', a: 'Yes. Registration is scoped to an account group.' },
    ],
    tocTitle: 'On this page',
    tocItems: [
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
    ],
    contactSupport: 'Contact support',
  },
}

export default function DeployAgentPage() {
  const c = CONTENT.en

  return (
    <div className="flex gap-0 w-full max-w-[1600px] mx-auto">

      {/* ── Article ──────────────────────────────────────────────────── */}
      <article className="flex-1 min-w-0 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 w-full max-w-5xl mx-auto">

        <p className="text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand mb-4" lang="en">
          {c.category}
        </p>

        <h1
          className="text-2xl sm:text-3xl lg:text-4xl font-bold cy-text-primary mb-4 sm:mb-6 leading-tight"
          style={{ fontFamily: HEADING_FONT }}
          lang="en"
        >
          {c.title}
        </h1>

        <p className="cy-text-secondary leading-relaxed mb-4" id="overview">
          {c.overview1}
        </p>
        <p className="cy-text-secondary leading-relaxed mb-10">
          {c.overview2}
        </p>

        <hr className="cy-border-default mb-10" />

        {/* Accessing */}
        <section id="accessing" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.accessingTitle}
          </h2>
          <p className="cy-text-secondary text-sm mb-3">{c.accessingIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.accessingItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
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
            {c.prereqTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4">{c.prereqIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-6">
            {c.prereqItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm mb-3 font-semibold cy-text-primary">{c.prereqRecTitle}</p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.prereqRecItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
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
            {c.step1Title}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-3">{c.step1Intro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.step1Items.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
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
            {c.step2Title}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4">{c.step2Intro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-5">
            {c.step2Items.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm mb-3 font-semibold cy-text-primary">{c.tokenBehaviorTitle}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-5">
            {c.tokenBehaviorItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
          <div className="mt-5 rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary">
            <strong className="cy-text-primary">{c.tokenNoteLabel}</strong>{' '}
            <span>{c.tokenNote}</span>
          </div>
        </section>

        {/* Fernet Key */}
        <section id="fernet-key" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.fernetTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4">{c.fernetIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.fernetItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Step 3 (Run) */}
        <section id="step3" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.step3Title}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4">{c.step3Intro}</p>
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

          <p className="cy-text-secondary text-sm mb-3 font-semibold cy-text-primary">{c.paramLabel}</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.paramHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.paramRows.map(([field, desc]) => (
                  <tr key={field} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-mono text-xs">{field}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Step 4 (Verify) */}
        <section id="step4" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.step4Title}
          </h2>
          <DocsCodeBlock label="Shell" code={`docker logs -f cyfro-agent`} />
          <p className="cy-text-secondary text-sm mb-3">{c.step4SuccessIntro}</p>
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
            {c.manageTitle}
          </h3>

          <p className="cy-text-secondary text-sm font-semibold cy-text-primary mb-2">{c.logsLabel}</p>
          <DocsCodeBlock className="mb-4" code={`docker logs -f cyfro-agent`} />

          <p className="cy-text-secondary text-sm font-semibold cy-text-primary mb-2">{c.stopLabel}</p>
          <DocsCodeBlock className="mb-4" code={`docker stop cyfro-agent`} />

          <p className="cy-text-secondary text-sm font-semibold cy-text-primary mb-2">{c.restartLabel}</p>
          <DocsCodeBlock className="mb-4" code={`docker restart cyfro-agent`} />

          <p className="cy-text-secondary text-sm font-semibold cy-text-primary mb-2">{c.startAfterRebootLabel}</p>
          <p className="cy-text-secondary text-sm mb-2">{c.startAfterRebootText}</p>
          <DocsCodeBlock className="mb-4" code={`docker start cyfro-agent`} />

          <p className="cy-text-secondary text-sm font-semibold cy-text-primary mb-2">{c.reregisterLabel}</p>
          <p className="cy-text-secondary text-sm mb-2">{c.reregisterText}</p>
          <DocsCodeBlock
            className="mb-4"
            code={`docker stop cyfro-agent && docker rm cyfro-agent
docker volume rm cyfro-agent-data`}
          />
          <p className="cy-text-secondary text-sm mb-6">{c.thenRepeatText}</p>
        </section>

        {/* Update Image */}
        <section id="update-image" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.updateTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4">{c.updateIntro}</p>

          <h3 className="text-base font-semibold cy-text-primary mb-3" style={{ fontFamily: HEADING_FONT }}>{c.updateStep1Title}</h3>
          <DocsCodeBlock className="mb-2" code={`docker stop cyfro-agent && docker rm cyfro-agent`} />
          <p className="cy-text-secondary text-sm mb-5">
            {c.updateStep1NoteBefore}<code className="rounded px-1.5 py-0.5 text-xs font-mono bg-primary-500/10 cy-text-brand">cyfro-agent-data</code>{c.updateStep1Note}
          </p>

          <h3 className="text-base font-semibold cy-text-primary mb-3" style={{ fontFamily: HEADING_FONT }}>{c.updateStep2Title}</h3>
          <DocsCodeBlock className="mb-5" code={`docker pull cyfrosec/cyfro-agent:latest`} />

          <h3 className="text-base font-semibold cy-text-primary mb-3" style={{ fontFamily: HEADING_FONT }}>{c.updateStep3Title}</h3>
          <p className="cy-text-secondary text-sm mb-4">{c.updateStep3Detect}</p>
          <p className="cy-text-secondary text-sm font-semibold cy-text-primary mb-2">{c.updateStep3LinuxLabel}</p>
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
          <p className="cy-text-secondary text-sm font-semibold cy-text-primary mb-2">{c.updateStep3MacLabel}</p>
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
            {c.updateStep3MacNoteBefore}<code className="rounded px-1.5 py-0.5 text-xs font-mono bg-primary-500/10 cy-text-brand">--network host</code>{c.updateStep3MacNoteAfter}
          </p>

          <h3 className="text-base font-semibold cy-text-primary mb-3" style={{ fontFamily: HEADING_FONT }}>{c.updateStep4Title}</h3>
          <DocsCodeBlock className="mb-3" code={`docker logs -f cyfro-agent`} />
          <p className="cy-text-secondary text-sm mb-3">{c.updateStep4Note}</p>
          <DocsCodeBlock
            className="mb-6"
            code={`Agent already registered. Skipping registration.
Starting agent.
Performing initial backend synchronization...
Scheduler started with APScheduler`}
          />

          <h3 className="text-base font-semibold cy-text-primary mb-3" style={{ fontFamily: HEADING_FONT }}>{c.importantTitle}</h3>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.importantItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* After startup */}
        <section className="mb-10 scroll-mt-20">
          <p className="cy-text-secondary leading-relaxed mb-4">{c.afterStartupIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-5">
            {c.afterStartupItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>

          <p className="cy-text-secondary text-sm mb-3 font-semibold cy-text-primary">{c.typicalStatusTitle}</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.statusHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.statusRows.map(([status, meaning]) => (
                  <tr key={status} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold">{status}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary">{meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="cy-text-secondary text-sm mb-3 font-semibold cy-text-primary">{c.notAppearTitle}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-5">
            {c.notAppearItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm">
            {c.notAppearSupport}{' '}
            <a href="mailto:support@cyfrosec.com" className="cy-text-brand hover:underline">support@cyfrosec.com</a>
          </p>
        </section>

        {/* Integration with Scans */}
        <section id="integration" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.integrationTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-3">{c.integrationText1}</p>
          <p className="cy-text-secondary leading-relaxed">{c.integrationText2}</p>
        </section>

        {/* Troubleshooting */}
        <section id="troubleshooting" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.troubleshootTitle}
          </h2>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.troubleshootItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
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
            {c.faqTitle}
          </h2>
          <div className="space-y-5">
            {c.faqs.map(({ q, a }) => (
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
            {c.tocTitle}
          </p>
          <ul className="space-y-2">
            {c.tocItems.map(({ id, label }) => (
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
              <span>{c.contactSupport}</span>
            </Link>
          </div>
        </div>
      </aside>

    </div>
  )
}
