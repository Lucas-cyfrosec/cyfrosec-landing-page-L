import { PublicPageShell } from '@/app/components/landing/PublicPageShell'
import FinalCTA from '@/app/components/landing/sections/FinalCTA'
import AIChatbot from '@/app/components/landing/AIChatbot'
import { MessageSquare, Zap, ShieldCheck, BarChart2, HelpCircle, FileText, AlertTriangle, Search } from 'lucide-react'
import QueryExplorer from './QueryExplorer'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

export const metadata = { title: 'Cyfro Assistant | CyfroSec' }


const features = [
  { icon: Zap, title: 'Real-time Streaming', description: 'Responses stream token-by-token as the assistant thinks, works, and generates. Live status badges: Thinking, Working, Generating show exactly what is happening.' },
  { icon: ShieldCheck, title: 'Human-in-the-Loop Approvals', description: 'For higher-risk or write operations, the assistant pauses and presents an approval card with risk level, what will happen, and Approve / Deny controls before proceeding.' },
  { icon: BarChart2, title: 'Workspace Panel', description: 'A collapsible side panel shows live task progress, generated artifacts, and raw tool outputs. Full auditability of every action the assistant took in your conversation.' }
]

const suggestionCards = [
  { label: 'Analyze latest security scan', desc: 'Retrieves and summarises your most recent scan results' },
  { label: 'Show security insights', desc: 'Summarises AI-generated insights from recent scans' },
  { label: 'List active agents', desc: 'Shows all currently online CyfroAgents in your account group' },
  { label: 'Get scan summary', desc: 'Provides a high-level overview of scan coverage and findings' },
]


const useCases = [
  { icon: Search, title: 'Fleet-Wide Queries in Seconds', body: 'Ask "Show me all servers with open SSH ports" and get a result across your entire agent fleet no dashboards to navigate, no filters to configure.' },
  { icon: FileText, title: 'Instant Executive Summaries', body: 'Ask for a security posture summary and get a plain-language report suitable for stakeholders which are generated from your actual scan data, not a template.' },
  { icon: AlertTriangle, title: 'Guided Triage', body: 'Walk through your highest-risk findings interactively. Ask follow-up questions, drill into specific hosts, and get remediation steps without leaving the conversation.' },
  { icon: Zap, title: 'On-Demand How-To', body: 'Ask questions like how to create a test, what permissions a role has, how to register an agent and get accurate answers from the product instantly.' },
]


export default function CyfroAssistantPage() {
  return (
    <PublicPageShell>
      {/* Hero */}
      <section className="relative bg-white dark:bg-surface-900 pt-24 pb-20 px-4">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(3,155,224,0.14),transparent)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex size-16 items-center justify-center rounded-2xl bg-primary-500/10 ring-1 ring-primary-500/20">
            <MessageSquare className="size-8 text-primary-400" />
          </div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">Solutions</p>
          <h1 className="text-4xl font-extrabold tracking-tight cy-text-primary sm:text-5xl lg:text-6xl" style={{ fontFamily: HEADING_FONT }}>
            Cyfro Assistant
          </h1>
          <p className="mt-5 text-lg leading-relaxed cy-text-secondary max-w-2xl mx-auto">
            Your AI-powered security analyst, available 24/7 inside the CyfroSec Portal. Understands your specific infrastructure: agents, scan results, vulnerabilities, topology and lets you query it all in natural language.
          </p>
          <div className="mt-5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400 ring-1 ring-amber-500/20">
              Beta : Core functionality stable, actively expanding
            </span>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-surface-50 dark:bg-surface-950 py-20 px-4">
        <div className="mx-auto max-w-5xl grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-400 mb-3">The problem</p>
            <h2 className="text-2xl font-bold cy-text-primary sm:text-3xl mb-5" style={{ fontFamily: HEADING_FONT }}>
              Security data exists. Getting answers is hard.
            </h2>
            <p className="text-sm cy-text-secondary leading-relaxed mb-4">
              Your scan results, agent telemetry, and vulnerability findings are all there but getting a specific answer means navigating dashboards, applying filters, and cross-referencing reports. That takes time which most teams don&apos;t have.
            </p>
            <p className="text-sm cy-text-secondary leading-relaxed">
              CyfroAssistant turns your security data into a conversational interface. Ask any question in plain English and get an answer grounded in your actual infrastructure instantly.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { label: '"Which hosts have critical CVEs?"', impact: 'Answer in seconds from your scan data' },
              { label: '"Summarise this week\'s security posture"', impact: 'Executive summary generated automatically' },
              { label: '"How do I register a new agent?"', impact: 'Answered from product docs instantly' },
            ].map((row) => (
              <div key={row.label} className="rounded-xl border cy-border-default cy-bg-elevated p-4">
                <p className="text-sm font-semibold cy-text-primary italic">{row.label}</p>
                <p className="mt-1 text-xs text-primary-400">{row.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suggestion cards */}
      <section className="bg-white dark:bg-surface-900 py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-400 mb-3">Getting Started</p>
          <h2 className="text-2xl font-bold cy-text-primary sm:text-3xl mb-3" style={{ fontFamily: HEADING_FONT }}>Start with a suggestion or ask anything</h2>
          <p className="text-sm cy-text-secondary mb-8 max-w-2xl">When you open CyfroAssistant, four quick-start cards are ready to go. Click any card to start function immediately, or type your own question in the chat box.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {suggestionCards.map((card) => (
              <div key={card.label} className="rounded-2xl border cy-border-default cy-bg-muted p-4">
                <p className="text-sm font-semibold cy-text-primary mb-1">{card.label}</p>
                <p className="text-xs cy-text-muted">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-surface-50 dark:bg-surface-950 py-20 px-4">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-400 mb-3">Capabilities</p>
          <h2 className="text-2xl font-bold cy-text-primary sm:text-3xl mb-10" style={{ fontFamily: HEADING_FONT }}>Built for how security teams actually work</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className="rounded-2xl border cy-border-default cy-bg-elevated p-5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-500/10 mb-4">
                    <Icon className="size-5 text-primary-400" />
                  </div>
                  <h3 className="mb-1 text-sm font-semibold cy-text-primary">{f.title}</h3>
                  <p className="text-sm cy-text-secondary leading-relaxed">{f.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <QueryExplorer />

      {/* Use cases */}
      <section className="bg-surface-50 dark:bg-surface-950 py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-400 mb-3">Use Cases</p>
          <h2 className="text-2xl font-bold cy-text-primary sm:text-3xl mb-10" style={{ fontFamily: HEADING_FONT }}>When teams rely on Cyfro Assistant</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {useCases.map((uc) => {
              const Icon = uc.icon
              return (
                <div key={uc.title} className="flex gap-4 rounded-2xl border cy-border-default cy-bg-elevated p-6">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-500/10">
                    <Icon className="size-5 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-sm font-semibold cy-text-primary">{uc.title}</h3>
                    <p className="text-sm cy-text-secondary leading-relaxed">{uc.body}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <FinalCTA />
      <AIChatbot />
    </PublicPageShell>
  )
}
