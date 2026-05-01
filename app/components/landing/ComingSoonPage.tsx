import { PublicPageShell } from './PublicPageShell'
import { Clock } from 'lucide-react'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

interface ComingSoonPageProps {
  title: string
  description?: string
}

export function ComingSoonPage({ title, description }: ComingSoonPageProps) {
  return (
    <PublicPageShell>
      <section className="flex min-h-[70vh] flex-col items-center justify-center bg-white dark:bg-surface-900 px-4 text-center">
        <div className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-primary-500/10 ring-1 ring-primary-500/20">
          <Clock className="size-8 text-primary-400" />
        </div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">
          Coming Soon
        </p>
        <h1
          className="text-4xl font-extrabold tracking-tight cy-text-primary sm:text-5xl"
          style={{ fontFamily: HEADING_FONT }}
        >
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-md text-base leading-relaxed cy-text-secondary">
            {description}
          </p>
        )}
        <p className="mt-6 text-sm cy-text-muted">
          We&apos;re working on this. Check back soon.
        </p>
      </section>
    </PublicPageShell>
  )
}
