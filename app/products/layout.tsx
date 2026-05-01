import { LandingHeader } from '@/app/components/landing/LandingHeader'
import MegaFooter from '@/app/components/landing/sections/MegaFooter'
import { NAV_PRODUCTS } from '@/app/components/landing/content'
import Link from 'next/link'

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="scroll-smooth">
      <LandingHeader />
      <main>{children}</main>

      {/* Related products strip */}
      <section className="border-t cy-border-default cy-bg-muted py-10">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] cy-text-muted">Related Products</p>
          <div className="flex flex-wrap gap-3">
            {NAV_PRODUCTS.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="rounded-xl border cy-border-default cy-bg-elevated px-4 py-2.5 text-sm font-medium cy-text-secondary transition-colors hover:cy-text-brand hover:border-[var(--brand-primary)]/50"
              >
                {p.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <MegaFooter />
    </div>
  )
}
