'use client'

import Link from 'next/link'
import { ArrowRight, Bot, BookOpen, LayoutDashboard, Layers, MessageSquare, Radar, Sparkles } from 'lucide-react'

const DOCS = [
  {
    icon: Layers,
    label: 'Platform Overview',
    href: '/documents/full',
    description: 'Understand what CyfroSec does and how to get started',
    color: 'from-sky-500/20 to-indigo-500/10',
    iconColor: 'text-sky-400',
    borderColor: 'hover:border-sky-500/40',
    glowColor: 'group-hover:shadow-sky-500/10',
  },
  {
    icon: Bot,
    label: 'Deploy Agent',
    href: '/documents/deploy-agent',
    description: 'Register and install your first CyfroAgent',
    color: 'from-primary-500/20 to-blue-500/10',
    iconColor: 'text-primary-400',
    borderColor: 'hover:border-primary-500/40',
    glowColor: 'group-hover:shadow-primary-500/10',
  },
  {
    icon: Radar,
    label: 'Creating Tests',
    href: '/documents/first-scan',
    description: 'Set up and schedule your first security scan',
    color: 'from-violet-500/20 to-purple-500/10',
    iconColor: 'text-violet-400',
    borderColor: 'hover:border-violet-500/40',
    glowColor: 'group-hover:shadow-violet-500/10',
  },
  {
    icon: LayoutDashboard,
    label: 'Dashboard Guide',
    href: '/documents/dashboard',
    description: 'Navigate widgets, metrics, and scan status',
    color: 'from-blue-500/20 to-cyan-500/10',
    iconColor: 'text-cyan-400',
    borderColor: 'hover:border-cyan-500/40',
    glowColor: 'group-hover:shadow-cyan-500/10',
  },
  {
    icon: Sparkles,
    label: 'CyfroAI Insights',
    href: '/documents/ai-insights',
    description: 'AI-generated risk summaries after every scan',
    color: 'from-emerald-500/20 to-teal-500/10',
    iconColor: 'text-emerald-400',
    borderColor: 'hover:border-emerald-500/40',
    glowColor: 'group-hover:shadow-emerald-500/10',
  },
  {
    icon: MessageSquare,
    label: 'CyfroAssistant',
    href: '/documents/ai-assistant',
    description: 'Query your infrastructure in natural language',
    color: 'from-amber-500/20 to-orange-500/10',
    iconColor: 'text-amber-400',
    borderColor: 'hover:border-amber-500/40',
    glowColor: 'group-hover:shadow-amber-500/10',
  },
  {
    icon: BookOpen,
    label: 'All Documentation',
    href: '/documents',
    description: 'Browse the full knowledge base',
    color: 'from-rose-500/20 to-pink-500/10',
    iconColor: 'text-rose-400',
    borderColor: 'hover:border-rose-500/40',
    glowColor: 'group-hover:shadow-rose-500/10',
  },
]

export function ThankYouDocLinks() {
  return (
    <div className="mt-8">
      {/* Header */}
      <div className="mb-5 flex items-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
          While you wait — explore the docs
        </p>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        {DOCS.map(({ icon: Icon, label, href, description, color, iconColor, borderColor, glowColor }) => (
          <Link
            key={href}
            href={href}
            className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 text-left transition-all duration-300 ${borderColor} hover:bg-white/[0.06] hover:shadow-lg ${glowColor}`}
          >
            {/* Gradient background that appears on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

            {/* Content */}
            <div className="relative">
              {/* Icon */}
              <div className={`mb-3 inline-flex size-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition-all duration-300 group-hover:ring-white/20`}>
                <Icon className={`size-4 ${iconColor}`} />
              </div>

              {/* Text */}
              <p className="text-[13px] font-semibold leading-tight text-white/90 group-hover:text-white">
                {label}
              </p>
              <p className="mt-1 text-[11px] leading-relaxed text-white/40 group-hover:text-white/60">
                {description}
              </p>

              {/* Arrow */}
              <div className="mt-3 flex items-center gap-1">
                <span className={`text-[11px] font-semibold ${iconColor} opacity-0 transition-all duration-200 group-hover:opacity-100`}>
                  Read guide
                </span>
                <ArrowRight className={`size-3 ${iconColor} translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100`} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
