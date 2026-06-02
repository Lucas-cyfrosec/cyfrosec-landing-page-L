'use client'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const CONTENT = {
  en: {
    category: 'Scans',
    title: 'Creating Scans',
    createSteps: [
      'From the Scans Setup page, click Create New Scan in the top-right corner.',
      'Fill in the form fields described below.',
      'Click Create Scan to save. You will be returned to the scan list once it is created.',
    ],
    formTitle: '1. Form Fields',
    formIntro: 'Choose the scan intensity:',
    formHeaders: ['Value', 'Description'],
    formRows: [
      ['Full', 'Performs a comprehensive port scan across all common ports for the target. No protocol selection required. It takes more time since it performs deep assessments. Well suited for periodic assessments.'],
      ['Quick', 'Performs a faster, targeted scan. Requires selecting a specific protocol (see below). Best for frequent monitoring with lower overhead.'],
    ] as [string, string][],
    testNameTitle: '2. Scan Name',
    testNameText: 'A logical label for this scan (e.g., "Production Web Server — Full Scan"). This name appears in the scan list, dashboard widgets, reports, and CyfroAssistant responses.',
    hostTitle: '3. Host or Subnet',
    hostIntro: 'The IP address or CIDR range to scan. Examples:',
    hostExamples: [
      ['Single host', '192.168.1.50/32'],
      ['Full subnet', '10.0.0.0/24'],
    ] as [string, string][],
    hostNote: 'The Agent running the scan will direct its scan probes to this target. Ensure the target is reachable from the machines where your Agents are installed.',
    protocolTitle: '4. Protocol (Quick scans only)',
    protocolIntro: 'Visible only when Type is set to Quick. Select the transport protocol to scan:',
    protocolHeaders: ['Protocol', 'Use case'],
    protocolRows: [
      ['TCP', 'Standard web servers, SSH, databases - most services use TCP.'],
      ['UDP', 'DNS, SNMP, syslog, and other UDP-based services.'],
    ] as [string, string][],
    agentsTitle: '5. Agents',
    agentsText1: 'Select one or more CyfroAgents to run this scan. The scrollable list shows all Agents currently online in your Account Group. Use the Check all toggle to select every available Agent at once.',
    agentsText2: 'Assigning multiple Agents to a single scan is useful for:',
    agentsItems: [
      'Scanning the same target from different network segments to detect firewall asymmetry.',
      'Providing redundancy if one Agent goes offline.',
    ],
    intervalTitle: '6. Interval',
    intervalIntro: 'How often the scan runs automatically:',
    intervalHeaders: ['Option', 'Interval'],
    intervalRows: [
      ['1 hour', 'Every 60 minutes'],
      ['6 hours', 'Every 6 hours'],
      ['12 hours', 'Every 12 hours'],
      ['24 hours', 'Once per day'],
    ] as [string, string][],
    intervalNote1: 'Scans run on a recurring schedule starting from when they are created. There is no one-time or manual trigger option yet currently to schedule the scan and let the platform run it.',
    intervalNoteLabel: 'Note:',
    intervalNoteText: 'In instances where the chosen file path/filesystem is large, the scans may take longer than the interval.',
    editingTitle: 'Editing Existing Scans',
    editingSteps: [
      'From the Scans Setup page, click the pencil (edit) icon next to the scan you want to update.',
      'The edit form is pre-populated with the current values.',
      'Modify the fields as needed (all fields are editable, including the scan type, target, agents, and interval).',
      'Click Update Scan to save. You will be returned to the scan list on success.',
    ],
    editingNote1Label: 'Note:',
    editingNote1: 'Changing the Interval on an existing scan takes effect immediately — the next scheduled run will use the new interval.',
    systemDefaultLabel: 'System Default Scans:',
    systemDefaultText: 'Scans marked with the System badge were auto-provisioned when your Account Group was created (a default port-scan probe). You can edit these scans to adjust the target, agents, or schedule, but you cannot delete them.',
    tocTitle: 'On this page',
    tocItems: [
      { id: 'create',         label: 'Creating a Scan' },
      { id: 'form-fields',    label: '1. Form Fields' },
      { id: 'test-name',      label: '2. Scan Name' },
      { id: 'host-subnet',    label: '3. Host or Subnet' },
      { id: 'protocol',       label: '4. Protocol' },
      { id: 'agents',         label: '5. Agents' },
      { id: 'interval',       label: '6. Interval' },
      { id: 'editing',        label: 'Editing Existing Scans' },
      { id: 'system-default', label: 'System Default Scans' },
    ],
    contactSupport: 'Contact support',
  },
}

export default function FirstScanPage() {
  const c = CONTENT.en

  return (
    <div className="flex gap-0 w-full max-w-[1600px] mx-auto">

      {/* ── Article ──────────────────────────────────────────────────── */}
      <article className="flex-1 min-w-0 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 w-full max-w-5xl mx-auto">

        <p className="text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand mb-4">
          {c.category}
        </p>

        <h1
          className="text-2xl sm:text-3xl lg:text-4xl font-bold cy-text-primary mb-4 sm:mb-6 leading-tight"
          style={{ fontFamily: HEADING_FONT }}
         
        >
          {c.title}
        </h1>

        <ol className="space-y-4 cy-text-secondary text-sm mb-10" id="create">
          {c.createSteps.map((text, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
              <span className="mt-0.5">{text}</span>
            </li>
          ))}
        </ol>

        <hr className="cy-border-default mb-10" />

        {/* Form Fields */}
        <section id="form-fields" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.formTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4">{c.formIntro}</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.formHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.formRows.map(([val, desc]) => (
                  <tr key={val} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold">{val}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Test Name */}
        <section id="test-name" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.testNameTitle}
          </h2>
          <p className="cy-text-secondary text-sm">{c.testNameText}</p>
        </section>

        {/* Host or Subnet */}
        <section id="host-subnet" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.hostTitle}
          </h2>
          <p className="cy-text-secondary text-sm mb-3">{c.hostIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-4">
            {c.hostExamples.map(([label, code], i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">
                  {label}: <code className="rounded px-1.5 py-0.5 text-xs font-mono bg-primary-500/10 cy-text-brand">{code}</code>
                </span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm">{c.hostNote}</p>
        </section>

        {/* Protocol */}
        <section id="protocol" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.protocolTitle}
          </h2>
          <p className="cy-text-secondary text-sm mb-4">{c.protocolIntro}</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.protocolHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.protocolRows.map(([proto, use]) => (
                  <tr key={proto} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-mono text-xs">{proto}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Agents */}
        <section id="agents" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.agentsTitle}
          </h2>
          <p className="cy-text-secondary text-sm mb-4">{c.agentsText1}</p>
          <p className="cy-text-secondary text-sm mb-3">{c.agentsText2}</p>
          <ol className="space-y-4 cy-text-secondary text-sm">
            {c.agentsItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Interval */}
        <section id="interval" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.intervalTitle}
          </h2>
          <p className="cy-text-secondary text-sm mb-4">{c.intervalIntro}</p>
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.intervalHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.intervalRows.map(([opt, interval]) => (
                  <tr key={opt} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary">{opt}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary">{interval}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cy-text-secondary text-sm mb-3">{c.intervalNote1}</p>
          <div className="rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary">
            <strong className="cy-text-primary">{c.intervalNoteLabel}</strong>{' '}
            <span>{c.intervalNoteText}</span>
          </div>
        </section>

        {/* Editing */}
        <section id="editing" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.editingTitle}
          </h2>
          <ol className="space-y-4 cy-text-secondary text-sm mb-5">
            {c.editingSteps.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
          <div className="mt-5 rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary mb-4">
            <strong className="cy-text-primary">{c.editingNote1Label}</strong>{' '}
            <span>{c.editingNote1}</span>
          </div>
          <div id="system-default" className="mt-2 rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary scroll-mt-20">
            <strong className="cy-text-primary">{c.systemDefaultLabel}</strong>{' '}
            <span>{c.systemDefaultText}</span>
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
