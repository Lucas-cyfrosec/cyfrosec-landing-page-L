import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const HEADING_FONT = '"Sora", "Avenir Next", "Segoe UI", sans-serif'

interface ProductCardProps {
  name: string
  tagline: string
  href: string
  icon: LucideIcon
}

export function ProductCard({ name, tagline, href, icon: Icon }: ProductCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col justify-between cy-card overflow-hidden rounded-2xl p-5 transition-all hover:border-[var(--brand-primary)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(3,155,224,0.12)]"
    >
      {/* Top accent line on hover */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent-orange)] opacity-0 transition-opacity group-hover:opacity-100" />

      <div>
        <div className="mb-4 inline-flex rounded-xl cy-bg-brand-soft p-2.5">
          <Icon className="size-5 cy-text-brand" />
        </div>
        <h3
          className="text-base font-semibold cy-text-primary"
          style={{ fontFamily: HEADING_FONT }}
        >
          {name}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed cy-text-secondary">{tagline}</p>
      </div>

      <div className="mt-5 flex items-center gap-1 text-xs font-semibold cy-text-brand">
        Explore
        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  )
}
