import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Creating Tests | CyfroSec Documentation',
  description: 'How to create, configure, and manage security scan tests in CyfroSec.',
  alternates: { canonical: '/documents/first-scan' },
}

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const TOC = [
  { id: 'create',         label: 'Creating a Test' },
  { id: 'form-fields',    label: '1. Form Fields' },
  { id: 'test-name',      label: '2. Test Name' },
  { id: 'host-subnet',    label: '3. Host or Subnet' },
  { id: 'protocol',       label: '4. Protocol' },
  { id: 'agents',         label: '5. Agents' },
  { id: 'interval',       label: '6. Interval' },
  { id: 'editing',        label: 'Editing Existing Tests' },
  { id: 'system-default', label: 'System Default Tests' },
]

export default function FirstScanPage() {
  return (
    <div className="flex gap-0 w-full max-w-[1600px] mx-auto">

      {/* ── Article ──────────────────────────────────────────────────── */}
      <article className="flex-1 min-w-0 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 w-full max-w-5xl mx-auto">

        <p className="text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand mb-4">
          Scans
        </p>

        <h1
          className="text-2xl sm:text-3xl lg:text-4xl font-bold cy-text-primary mb-4 sm:mb-6 leading-tight"
          style={{ fontFamily: HEADING_FONT }}
        >
          Creating Tests
        </h1>

        <ol className="space-y-4 cy-text-secondary text-sm mb-10" id="create">
          {[
            'From the Scans Setup page, click Create New Test in the top-right corner.',
            'Fill in the form fields described below.',
            'Click Create Test to save. You will be returned to the test list once it is created.',
          ].map((text, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                {i + 1}
              </span>
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
            1. Form Fields
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4">
            Choose the scan intensity:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Value</th>
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Full', 'Performs a comprehensive port scan across all common ports for the target. No protocol selection required. Best for periodic deep assessments.'],
                  ['Quick', 'Performs a faster, targeted scan. Requires selecting a specific protocol (see below). Best for frequent monitoring with lower overhead.'],
                ].map(([val, desc]) => (
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
            2. Test Name
          </h2>
          <p className="cy-text-secondary text-sm">
            A logical label for this test (e.g., &quot;Production Web Server — Full Scan&quot;). This name appears in the test list, dashboard widgets, reports, and CyfroAssistant responses.
          </p>
        </section>

        {/* Host or Subnet */}
        <section id="host-subnet" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            3. Host or Subnet
          </h2>
          <p className="cy-text-secondary text-sm mb-3">
            The IP address or CIDR range to scan. Examples:
          </p>
          <ul className="space-y-2 cy-text-secondary text-sm mb-4">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
              Single host: <code className="rounded px-1.5 py-0.5 text-xs font-mono bg-primary-500/10 cy-text-brand">192.168.1.50/32</code>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
              Full subnet: <code className="rounded px-1.5 py-0.5 text-xs font-mono bg-primary-500/10 cy-text-brand">10.0.0.0/24</code>
            </li>
          </ul>
          <p className="cy-text-secondary text-sm">
            The Agent running the test will direct its scan probes to this target. Ensure the target is reachable from the machines where your Agents are installed.
          </p>
        </section>

        {/* Protocol */}
        <section id="protocol" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            4. Protocol (Quick scans only)
          </h2>
          <p className="cy-text-secondary text-sm mb-4">
            Visible only when Type is set to Quick. Select the transport protocol to scan:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Protocol</th>
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Use case</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['TCP', 'Standard web servers, SSH, databases - most services use TCP.'],
                  ['UDP', 'DNS, SNMP, syslog, and other UDP-based services.'],
                ].map(([proto, use]) => (
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
            5. Agents
          </h2>
          <p className="cy-text-secondary text-sm mb-4">
            Select one or more CyfroAgents to run this test. The scrollable list shows all Agents currently online in your Account Group. Use the Check all toggle to select every available Agent at once.
          </p>
          <p className="cy-text-secondary text-sm mb-3">
            Assigning multiple Agents to a single test is useful for:
          </p>
          <ul className="space-y-2 cy-text-secondary text-sm">
            {[
              'Scanning the same target from different network segments to detect firewall asymmetry.',
              'Providing redundancy if one Agent goes offline.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Interval */}
        <section id="interval" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            6. Interval
          </h2>
          <p className="cy-text-secondary text-sm mb-4">
            How often the test runs automatically:
          </p>
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Option</th>
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Interval</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1 hour', 'Every 60 minutes'],
                  ['6 hours', 'Every 6 hours'],
                  ['12 hours', 'Every 12 hours'],
                  ['24 hours', 'Once per day'],
                ].map(([opt, interval]) => (
                  <tr key={opt} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary">{opt}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary">{interval}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cy-text-secondary text-sm">
            Tests run on a recurring schedule starting from when they are created. There is no one-time or manual trigger option yet currently to schedule the test and let the platform run it.
          </p>
        </section>

        {/* Editing */}
        <section id="editing" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Editing Existing Tests
          </h2>
          <ol className="space-y-4 cy-text-secondary text-sm mb-5">
            {[
              'From the Scans Setup page, click the pencil (edit) icon next to the test you want to update.',
              'The edit form is pre-populated with the current values.',
              'Modify the fields as needed (all fields are editable, including the test type, target, agents, and interval).',
              'Click Update Test to save. You will be returned to the test list on success.',
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">
                  {i + 1}
                </span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
          <div className="mt-5 rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary mb-4">
            <strong className="cy-text-primary">Note:</strong> Changing the Interval on an existing test takes effect immediately — the next scheduled run will use the new interval.
          </div>
          <div id="system-default" className="mt-2 rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary scroll-mt-20">
            <strong className="cy-text-primary">System Default Tests:</strong> Tests marked with the System badge were auto-provisioned when your Account Group was created (a default port-scan probe). You can edit these tests to adjust the target, agents, or schedule, but you cannot delete them.
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
