'use client'

import { useState, useEffect, useRef } from 'react'
import { AlertTriangle, Search, BarChart2, HelpCircle, ChevronRight, Terminal } from 'lucide-react'

const categories = [
  {
    id: 'insights',
    label: 'Insights & Risk',
    icon: BarChart2,
    color: '#34d399',
    queries: [
      'What are my highest risk findings this week?',
      'Are any of my exposed services flagged as reachable?',
      'Give me an executive summary of my current security posture.',
    ],
  },
  {
    id: 'scans',
    label: 'Scan & Vulnerability',
    icon: AlertTriangle,
    color: '#f87171',
    queries: [
      'Which hosts have Critical CVEs?',
    ],
  },
  {
    id: 'agents',
    label: 'Agent & Asset',
    icon: Search,
    color: '#60a5fa',
    queries: [
      'List all active agents.',
      "Which agents haven't run a scan in the last 24 hours?",
    ],
  },
  {
    id: 'howto',
    label: 'Platform How-To',
    icon: HelpCircle,
    color: '#a78bfa',
    queries: [
      'How do I create a new test?',
      'What does an Account Group Admin have access to?',
      'How do I register a new agent?',
    ],
  },
]

function TypingQuery({ text, delay }: { text: string; delay: number }) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    setDisplayed('')
    setDone(false)
    let i = 0

    const start = setTimeout(() => {
      const tick = () => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1))
          i++
          timerRef.current = setTimeout(tick, 22)
        } else {
          setDone(true)
        }
      }
      tick()
    }, delay)

    return () => {
      clearTimeout(start)
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [text, delay])

  return (
    <span>
      {displayed}
      {!done && (
        <span
          className="inline-block w-1.5 h-4 ml-0.5 align-middle"
          style={{ backgroundColor: 'currentColor', animation: 'blink 1s step-end infinite' }}
        />
      )}
    </span>
  )
}

export default function QueryExplorer() {
  const [activeId, setActiveId] = useState('insights')
  const [animKey, setAnimKey] = useState(0)

  const active = categories.find((c) => c.id === activeId)!

  const handleSelect = (id: string) => {
    setActiveId(id)
    setAnimKey((k) => k + 1)
  }

  return (
    <section className="bg-white dark:bg-surface-900 py-20 px-4">
      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes fadeSlideIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
        .query-row { animation: fadeSlideIn 0.35s ease both; }
      `}</style>

      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-400 mb-3">What you can ask</p>
        <h2 className="text-2xl font-bold cy-text-primary sm:text-3xl mb-4" style={{ fontFamily: '"Sora","Avenir Next","Segoe UI",sans-serif' }}>
          Query your infrastructure in plain English
        </h2>
        <p className="text-sm cy-text-secondary mb-10">CyfroAssistant is aware of your infrastructure context and can answer questions such as:</p>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 rounded-2xl overflow-hidden cy-border-default border shadow-xl cy-bg-elevated">

          {/* Left: category tabs */}
          <div className="lg:w-64 shrink-0 border-b lg:border-b-0 lg:border-r cy-border-default p-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible bg-surface-100 dark:bg-surface-900/60">
            <div className="hidden lg:flex items-center gap-2 text-xs font-mono cy-text-muted mb-2 px-1">
              <Terminal className="w-3 h-3" />
              <span>cyfro-assistant</span>
            </div>
            {categories.map((cat) => {
              const Icon = cat.icon
              const isActive = cat.id === activeId
              return (
                <button
                  key={cat.id}
                  onClick={() => handleSelect(cat.id)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 shrink-0 lg:shrink lg:w-full"
                  style={{
                    backgroundColor: isActive ? `${cat.color}15` : 'transparent',
                    border: `1px solid ${isActive ? `${cat.color}50` : 'transparent'}`,
                  }}
                >
                  <Icon
                    className="w-4 h-4 shrink-0 transition-colors duration-200"
                    style={{ color: isActive ? cat.color : 'var(--text-muted, #6b7280)' }}
                  />
                  <span
                    className="text-xs font-medium transition-colors duration-200 whitespace-nowrap"
                    style={{ color: isActive ? cat.color : 'var(--text-secondary, #6b7280)' }}
                  >
                    {cat.label}
                  </span>
                  {isActive && <ChevronRight className="w-3 h-3 ml-auto hidden lg:block shrink-0" style={{ color: cat.color }} />}
                </button>
              )
            })}
          </div>

          {/* Right: terminal panel */}
          <div className="flex-1 p-6 lg:p-8 font-mono min-h-[260px] bg-white dark:bg-surface-950/80">
            {/* Terminal bar */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
              <span className="ml-3 text-xs cy-text-muted">
                cyfroassistant ~ {active.label.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}
              </span>
            </div>

            {/* Queries */}
            <ul key={animKey} className="space-y-4">
              {active.queries.map((q, i) => (
                <li
                  key={q}
                  className="query-row flex items-start gap-3"
                  style={{ animationDelay: `${i * 180}ms` }}
                >
                  <span className="text-xs mt-0.5 shrink-0" style={{ color: active.color }}>$</span>
                  <span className="text-sm leading-relaxed cy-text-primary">
                    <TypingQuery text={`"${q}"`} delay={i * 180} />
                  </span>
                </li>
              ))}
            </ul>

            {/* Blinking bottom cursor */}
            <div className="mt-6 flex items-center gap-2">
              <span className="text-xs" style={{ color: active.color }}>$</span>
              <span
                className="inline-block w-2 h-4"
                style={{ backgroundColor: active.color, animation: 'blink 1s step-end infinite', opacity: 0.6 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
