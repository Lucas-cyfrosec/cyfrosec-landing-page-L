'use client'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

const CONTENT = {
  en: {
    category: 'CyfroAI Engine',
    title: 'CyfroAssistant',
    overview: 'CyfroAssistant is your AI-powered security analyst, available directly inside the CyfroSec Portal. It understands your specific infrastructure — your agents, scan results, vulnerabilities, topology — and lets you query it all in natural language, without writing queries or complex terminologies. It can also take specific actions once permission is provided by the user.',
    betaLabel: 'Beta:',
    betaText: 'CyfroAssistant is currently in beta. The Core functionality is stable, but the feature set is actively expanding.',
    startingTitle: 'Starting a Conversation',
    startingIntro: 'When you open CyfroAssistant for the first time (or start a new conversation), you land on an empty canvas with four clickable suggestion cards/function calls:',
    suggestionHeaders: ['Suggestion', 'What it does'],
    suggestions: [
      ['Analyze latest security scan', 'Retrieves and summarises your most recent scan results'],
      ['Show security insights', 'Summarises AI-generated insights from recent scans'],
      ['List active agents', 'Shows all currently online CyfroAgents in your account group'],
      ['Get scan summary', 'Provides a high-level overview of scan coverage and findings'],
    ] as [string, string][],
    sendingText1: 'Click any card to send that query immediately, or type your own question in the input box at the bottom.',
    sendingText2: 'To send a message: Type in the text box and press Enter (or click the Send button).',
    sendingShiftBefore: 'Press ',
    sendingShiftAfter: ' to add a line break without sending.',
    sendingText4: 'A new conversation session is created automatically the first time you send a message, using the first 50 characters of your message as its title.',
    chatTitle: 'The Chat Interface',
    streamingTitle: '1. Message Streaming',
    streamingIntro: 'Responses stream token-by-token in real time. While the assistant is working, the header shows one of three status badges:',
    streamingItems: [
      'Thinking: The assistant is reasoning through your query',
      'Working: The assistant is executing tools or fetching data',
      'Generating: The assistant is writing its response',
    ],
    streamingNote: 'A Stop button appears in the input area while streaming. Clicking it cancels the current response immediately.',
    approvalsTitle: '2. Human-in-the-Loop Approvals',
    approvalsIntro: 'For certain actions, particularly those that write data or carry higher risk, the assistant will pause and present an approval card before proceeding. The card shows:',
    approvalsItems: [
      'What action is being requested',
      'The risk level (Low / Medium / High / Critical)',
      'AI-generated explanation of what will happen',
      'Approve and Deny buttons',
    ],
    approvalsNote: 'You must actively approve or deny before the assistant continues. Approvals are single-use and expire after a set period.',
    workspaceTitle: '3. Workspace Panel',
    workspaceIntro: 'A collapsible right panel (click the panel toggle in the chat header) provides three tabs for deeper inspection:',
    workspaceHeaders: ['Tab', 'Contents'],
    workspaceTabs: [
      ['Tasks', 'Checkbox-style progress list of the steps the assistant is executing in real time'],
      ['Artifacts', 'Any files, data exports, or generated content produced during the conversation'],
      ['Tool Output', 'Raw arguments and results from each tool call — useful for auditing what data the assistant read or wrote'],
    ] as [string, string][],
    whatTitle: 'What You Can Ask',
    whatIntro: 'CyfroAssistant is aware of your infrastructure context and can answer questions such as:',
    scanQueriesTitle: 'Scan and vulnerability queries:',
    scanQueries: ['"Which hosts have Critical CVEs?"'],
    agentQueriesTitle: 'Agent and asset queries:',
    agentQueries: ['"List all active agents."', '"Which agents haven\'t run a scan in the last 24 hours?"'],
    insightQueriesTitle: 'Insights and risk queries:',
    insightQueries: [
      '"What are my highest risk findings this week?"',
      '"Are any of my exposed services flagged as reachable?"',
      '"Give me an executive summary of my current security posture."',
    ],
    howtoQueriesTitle: 'Platform how-to questions:',
    howtoQueries: [
      '"How do I create a new scan?"',
      '"What does an Account Group Admin have access to?"',
      '"How do I register a new agent?"',
    ],
    multilingualTitle: 'Multi-language Support',
    multilingualText: 'CyfroAssistant can understand prompts and return guidance in the language your team prefers while keeping the same infrastructure context, scan awareness, and approval flow. This makes it easier for mixed technical and non-technical teams to collaborate without translating findings manually.',
    planTitle: 'Plan Mode',
    planText: 'Plan Mode lists a series of tasks to be executed in order to fulfill the user\'s request, ranging from changing configurations to applying fixes. The assistant presents the ordered plan first, then proceeds task by task based on the user\'s approval.',
    planContextText: 'The assistant uses your actual scan data, agent status, vulnerability findings, and AI insight records to answer infrastructure-specific questions, and references product documentation for how-to queries. It is designed help teams to fully understand their infrastructure and where possible risks might hide.',
    tocTitle: 'On this page',
    tocItems: [
      { id: 'overview',          label: 'Overview' },
      { id: 'starting',          label: 'Starting a Conversation' },
      { id: 'suggestions',       label: 'Suggestion Cards' },
      { id: 'sending',           label: 'Sending Messages' },
      { id: 'chat-interface',    label: 'The Chat Interface' },
      { id: 'streaming',         label: '1. Message Streaming' },
      { id: 'approvals',         label: '2. Human-in-the-Loop Approvals' },
      { id: 'workspace-panel',   label: '3. Workspace Panel' },
      { id: 'what-you-can-ask',  label: 'What You Can Ask' },
      { id: 'multi-language',    label: 'Multi-language Support' },
      { id: 'plan-mode',         label: 'Plan Mode' },
    ],
    contactSupport: 'Contact support',
  },
}

export default function AiAssistantPage() {
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
          lang="en"
        >
          {c.title}
        </h1>

        <p className="cy-text-secondary leading-relaxed mb-4" id="overview">
          {c.overview}
        </p>

        <div className="mt-5 rounded-xl border border-primary-500/20 bg-primary-500/5 p-4 text-sm cy-text-secondary mb-10">
          <strong className="cy-text-primary">{c.betaLabel}</strong>{' '}
          <span>{c.betaText}</span>
        </div>

        <hr className="cy-border-default mb-10" />

        {/* Starting a Conversation */}
        <section id="starting" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.startingTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4" id="suggestions">
            {c.startingIntro}
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.suggestionHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.suggestions.map(([suggestion, desc]) => (
                  <tr key={suggestion} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold">{suggestion}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cy-text-secondary text-sm mb-3" id="sending">{c.sendingText1}</p>
          <p className="cy-text-secondary text-sm mb-3">{c.sendingText2}</p>
          <p className="cy-text-secondary text-sm mb-3">
            {c.sendingShiftBefore}<kbd className="rounded px-1.5 py-0.5 text-xs font-mono bg-primary-500/10 cy-text-brand">Shift + Enter</kbd>{c.sendingShiftAfter}
          </p>
          <p className="cy-text-secondary text-sm">{c.sendingText4}</p>
        </section>

        {/* Chat Interface */}
        <section id="chat-interface" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.chatTitle}
          </h2>

          <h3 id="streaming" className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>
            {c.streamingTitle}
          </h3>
          <p className="cy-text-secondary text-sm mb-3">{c.streamingIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-5">
            {c.streamingItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm mb-6">{c.streamingNote}</p>

          <h3 id="approvals" className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>
            {c.approvalsTitle}
          </h3>
          <p className="cy-text-secondary text-sm mb-3">{c.approvalsIntro}</p>
          <ol className="space-y-4 cy-text-secondary text-sm mb-5">
            {c.approvalsItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>
          <p className="cy-text-secondary text-sm mb-6">{c.approvalsNote}</p>

          <h3 id="workspace-panel" className="text-base font-semibold cy-text-primary mb-3 scroll-mt-20" style={{ fontFamily: HEADING_FONT }}>
            {c.workspaceTitle}
          </h3>
          <p className="cy-text-secondary text-sm mb-3">{c.workspaceIntro}</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b cy-border-default">
                  {c.workspaceHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-4 text-xs font-bold uppercase tracking-wider cy-text-muted">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.workspaceTabs.map(([tab, contents]) => (
                  <tr key={tab} className="border-b cy-border-default">
                    <td className="py-2.5 pr-4 cy-text-secondary font-semibold">{tab}</td>
                    <td className="py-2.5 pr-4 cy-text-secondary">{contents}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* What You Can Ask */}
        <section id="what-you-can-ask" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.whatTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-5">{c.whatIntro}</p>

          <h3 className="text-base font-semibold cy-text-primary mb-3" style={{ fontFamily: HEADING_FONT }}>{c.scanQueriesTitle}</h3>
          <ol className="space-y-4 cy-text-secondary text-sm mb-6">
            {c.scanQueries.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>

          <h3 className="text-base font-semibold cy-text-primary mb-3" style={{ fontFamily: HEADING_FONT }}>{c.agentQueriesTitle}</h3>
          <ol className="space-y-4 cy-text-secondary text-sm mb-6">
            {c.agentQueries.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>

          <h3 className="text-base font-semibold cy-text-primary mb-3" style={{ fontFamily: HEADING_FONT }}>{c.insightQueriesTitle}</h3>
          <ol className="space-y-4 cy-text-secondary text-sm mb-6">
            {c.insightQueries.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>

          <h3 className="text-base font-semibold cy-text-primary mb-3" style={{ fontFamily: HEADING_FONT }}>{c.howtoQueriesTitle}</h3>
          <ol className="space-y-4 cy-text-secondary text-sm mb-5">
            {c.howtoQueries.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-xs font-bold cy-text-brand">{i + 1}</span>
                <span className="mt-0.5">{text}</span>
              </li>
            ))}
          </ol>

        </section>

        {/* Multi-language Support */}
        <section id="multi-language" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
          >
            {c.multilingualTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed">{c.multilingualText}</p>
        </section>

        {/* Plan Mode */}
        <section id="plan-mode" className="mb-10 scroll-mt-20">
          <h2
            className="text-xl font-bold cy-text-primary mb-4"
            style={{ fontFamily: HEADING_FONT }}
           
          >
            {c.planTitle}
          </h2>
          <p className="cy-text-secondary leading-relaxed mb-4">{c.planText}</p>
          <p className="cy-text-secondary leading-relaxed">{c.planContextText}</p>
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
