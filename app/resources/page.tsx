import Link from 'next/link'
import { ArrowUpRight, BookOpen, Github, HelpCircle, MessageSquare } from 'lucide-react'
import { PublicPageShell } from '@/app/components/landing/PublicPageShell'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

export const metadata = {
  title: 'Resources — Documentation, Support & Guides | CyfroSec',
  description: 'Find platform documentation, implementation guides, support resources, and community links for CyfroSec.',
}

const RESOURCE_SECTIONS = [
  {
    icon: BookOpen,
    label: 'Documentation',
    title: 'Platform Documentation',
    description: 'Technical reference, API guides, and architecture walkthroughs for deploying and operating CyfroSec.',
    links: [
      { label: 'Getting Started Guide', href: '/support' },
      { label: 'Agent Deployment', href: '/support' },
      { label: 'API Reference', href: '/support' },
    ],
  },
  {
    icon: HelpCircle,
    label: 'Support',
    title: 'Support Center',
    description: 'Browse knowledge base articles, submit tickets, and track the status of open requests.',
    links: [
      { label: 'Knowledge Base', href: '/support' },
      { label: 'Submit a Ticket', href: '/support' },
      { label: 'System Status', href: '/support' },
    ],
  },
  {
    icon: Github,
    label: 'Open Source',
    title: 'GitHub',
    description: 'Explore agent source code, report issues, contribute improvements, and review changelogs.',
    links: [
      { label: 'CyfroAgent Repository', href: 'https://github.com', external: true },
      { label: 'Release Notes', href: 'https://github.com', external: true },
      { label: 'Contributing Guide', href: 'https://github.com', external: true },
    ],
  },
  {
    icon: MessageSquare,
    label: 'Community',
    title: 'Confluence & Community',
    description: 'Internal documentation, runbooks, integration guides, and best practices from the CyfroSec team.',
    links: [
      { label: 'Confluence Space', href: 'https://confluence.atlassian.com', external: true },
      { label: 'Implementation Playbooks', href: 'https://confluence.atlassian.com', external: true },
      { label: 'Integrations Guide', href: 'https://confluence.atlassian.com', external: true },
    ],
  },
] as const

export default function ResourcesPage() {
  return (
    <PublicPageShell>
      <section className="relative mx-auto max-w-7xl px-4 pb-12 pt-16 lg:px-6 lg:pt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[380px]
            bg-[radial-gradient(circle_at_20%_20%,rgba(3,155,224,0.16),transparent_40%)]"
        />
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] cy-text-brand">Resources</p>
        <h1
          className="text-4xl font-extrabold tracking-tight sm:text-5xl cy-text-primary"
          style={{ fontFamily: HEADING_FONT }}
        >
          Everything you need to deploy and operate CyfroSec.
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed cy-text-secondary">
          From first deployment to advanced platform configuration — documentation, guides, and community
          resources are all in one place.
        </p>
      </section>

      <section className="pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {RESOURCE_SECTIONS.map((section) => (
              <article
                key={section.title}
                className="cy-card rounded-2xl p-6"
              >
                <div className="mb-4 inline-flex rounded-xl cy-bg-brand-soft p-2.5">
                  <section.icon className="size-5 cy-text-brand" />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] cy-text-muted mb-1">{section.label}</p>
                <h2
                  className="text-xl font-bold cy-text-primary"
                  style={{ fontFamily: HEADING_FONT }}
                >
                  {section.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed cy-text-secondary">{section.description}</p>
                <ul className="mt-5 space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      {'external' in link && link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 text-sm font-medium cy-text-brand hover:underline"
                        >
                          {link.label}
                          <ArrowUpRight className="size-3.5" />
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="flex items-center gap-1.5 text-sm font-medium cy-text-brand hover:underline"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PublicPageShell>
  )
}
