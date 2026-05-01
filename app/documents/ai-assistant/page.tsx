import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'CyfroAssistant | CyfroSec Documentation',
  description: 'Using CyfroAssistant — starting conversations, the chat interface, human-in-the-loop approvals, and example queries.',
  alternates: { canonical: '/documents/ai-assistant' },
}

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const TOC = [
  { id: 'overview',          label: 'Overview' },
  { id: 'starting',          label: 'Starting a Conversation' },
  { id: 'suggestions',       label: 'Suggestion Cards' },
  { id: 'sending',           label: 'Sending Messages' },
  { id: 'chat-interface',    label: 'The Chat Interface' },
  { id: 'streaming',         label: '1. Message Streaming' },
  { id: 'approvals',         label: '2. Human-in-the-Loop Approvals' },
  { id: 'workspace-panel',   label: '3. Workspace Panel' },
  { id: 'what-you-can-ask',  label: 'What You Can Ask' },
]

export default function AiAssistantPage() {
  return (
    <div className="flex gap-0 w-full max-w-[1600px] mx-auto">

      {/* ── Article ──────────────────────────────────────────────────── */}
      <article className="flex-1 min-w-0 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 w-full max-w-5xl mx-auto">

        <p className="text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand mb-4">
          CyfroAI Engine
        </p>

        <h1
          className="text-2xl sm:text-3xl lg:text-4xl font-bold cy-text-primary mb-4 sm:mb-6 leading-tight"
          style={{ fontFamily: HEADING_FONT }}
        >
          CyfroAssistant
        </h1>

        <p className="cy-text-secondary leading-relaxed mb-4" id="overview">
          CyfroAssistant is your AI-powered security analyst, available directly inside the CyfroSec Portal.
          It understands your specific infrastructure - your agents, scan results, vulnerabilities, topology
          and lets you query it all in natural language, without writing queries or complex terminoloigies.
        </p>

        <div className="mt-5 rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary mb-10">
          <strong className="cy-text-primary">Beta:</strong> CyfroAssistant is currently in beta. The Core functionality is stable, but the feature set is actively expanding.
        </div>

        <hr className="cy-border-default mb-10" />

        {/* Starting a Conversation */}
        <section id="starting" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            Starting a Conversation
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4" id="suggestions">
            When you open CyfroAssistant for the first time (or start a new conversation), you land on an empty canvas with four clickable suggestion cards/function calls:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Suggestion</th>
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">What it does</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Analyze latest security scan', 'Retrieves and summarises your most recent scan results'],
                  ['Show security insights', 'Summarises AI-generated insights from recent scans'],
                  ['List active agents', 'Shows all currently online CyfroAgents in your account group'],
                  ['Get scan summary', 'Provides a high-level overview of scan coverage and findings'],
                ].map(([suggestion, desc]) => (
                  <tr key={suggestion} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold">{suggestion}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cy-text-secondary text-sm mb-3" id="sending">
            Click any card to send that query immediately, or type your own question in the input box at the bottom.
          </p>
          <p className="cy-text-secondary text-sm mb-3">
            To send a message: Type in the text box and press Enter (or click the Send button).
          </p>
          <p className="cy-text-secondary text-sm mb-3">
            Press <kbd className="rounded px-1.5 py-0.5 text-xs font-mono bg-primary-500/10 cy-text-brand">Shift + Enter</kbd> to add a line break without sending.
          </p>
          <p className="cy-text-secondary text-sm">
            A new conversation session is created automatically the first time you send a message, using the first 50 characters of your message as its title.
          </p>
        </section>

        {/* Chat Interface */}
        <section id="chat-interface" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            The Chat Interface
          </h2>

          <h3 id="streaming" className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>
            1. Message Streaming
          </h3>
          <p className="cy-text-secondary text-sm mb-3">
            Responses stream in real time using LangGraph/Deep Agents. The conversation keeps a single coordinator reply visible while the assistant updates plan progress, tools, and subagents underneath it. While the assistant is working, the header shows one of three status badges:
          </p>
          <ul className="space-y-2 cy-text-secondary text-sm mb-5">
            {[
              'Thinking: The assistant is reasoning through your query',
              'Working: The assistant is executing tools or fetching data',
              'Generating: The assistant is writing its response',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="cy-text-secondary text-sm mb-6">
            When a run is resumable, the header also exposes a <strong className="cy-text-primary">Rejoin</strong> action so you can reconnect to the live stream if the page refreshes or the connection drops.
          </p>

          <h3 id="approvals" className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>
            2. Human-in-the-Loop Approvals
          </h3>
          <p className="cy-text-secondary text-sm mb-3">
            For certain actions, particularly those that write data or carry higher risk, the assistant will pause and present an approval card before proceeding. The card shows:
          </p>
          <ul className="space-y-2 cy-text-secondary text-sm mb-5">
            {[
              'What action is being requested',
              'The risk level (Low / Medium / High / Critical)',
              'AI-generated explanation of what will happen',
              'Approve and Deny buttons',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="cy-text-secondary text-sm mb-6">
            You must actively approve or deny before the assistant continues. Approvals are single-use and expire after a set period.
          </p>

          <h3 id="workspace-panel" className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>
            3. Workspace Panel
          </h3>
          <p className="cy-text-secondary text-sm mb-3">
            A collapsible right panel (click the panel toggle in the chat header) provides deeper inspection into the current Deep Agents run:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Tab</th>
                  <th className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">Contents</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Tasks', 'Live todo progress, tool execution, and subagent activity for the current run'],
                  ['Artifacts', 'Any files, data exports, or generated content produced during the conversation'],
                  ['Tool Output', 'Raw arguments and results from each tool call — useful for auditing what data the assistant read or wrote'],
                ].map(([tab, contents]) => (
                  <tr key={tab} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold">{tab}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary">{contents}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cy-text-secondary text-sm mb-6">
            If the agent delegates work, subordinate tasks appear as expandable <strong className="cy-text-primary">Subagent</strong> cards attached to the main assistant turn instead of cluttering the top-level chat.
          </p>
        </section>

        {/* What You Can Ask */}
        <section id="what-you-can-ask" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            What You Can Ask
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-5">
            CyfroAssistant is aware of your infrastructure context and can answer questions such as:
          </p>

          <h3 className="text-base font-semibold cy-text-primary mb-3" style={{ fontFamily: HEADING_FONT }}>
            Scan and vulnerability queries:
          </h3>
          <ul className="space-y-2 cy-text-secondary text-sm mb-6">
            {[
              '"Which hosts have Critical CVEs?"',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <h3 className="text-base font-semibold cy-text-primary mb-3" style={{ fontFamily: HEADING_FONT }}>
            Agent and asset queries:
          </h3>
          <ul className="space-y-2 cy-text-secondary text-sm mb-6">
            {[
              '"List all active agents."',
              '"Which agents haven\'t run a scan in the last 24 hours?"',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <h3 className="text-base font-semibold cy-text-primary mb-3" style={{ fontFamily: HEADING_FONT }}>
            Insights and risk queries:
          </h3>
          <ul className="space-y-2 cy-text-secondary text-sm mb-6">
            {[
              '"What are my highest risk findings this week?"',
              '"Are any of my exposed services flagged as reachable?"',
              '"Give me an executive summary of my current security posture."',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <h3 className="text-base font-semibold cy-text-primary mb-3" style={{ fontFamily: HEADING_FONT }}>
            Platform how-to questions:
          </h3>
          <ul className="space-y-2 cy-text-secondary text-sm mb-5">
            {[
              '"How do I create a new test?"',
              '"What does an Account Group Admin have access to?"',
              '"How do I register a new agent?"',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <p className="cy-text-secondary text-sm">
            The assistant uses your actual scan data, agent status, vulnerability findings, and AI insight records to answer infrastructure-specific questions, and references product documentation for how-to queries.
          </p>
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
