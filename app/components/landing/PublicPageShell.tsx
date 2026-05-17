import { LandingHeader } from '@/app/components/landing/LandingHeader'
import { AnnouncementBanner } from '@/app/components/landing/AnnouncementBanner'
import MegaFooter from '@/app/components/landing/sections/MegaFooter'
import styles from '@/app/landing-theme.module.css'

interface PublicPageShellProps {
  children: React.ReactNode
}

export function PublicPageShell({ children }: PublicPageShellProps) {
  return (
    <div className={`scroll-smooth ${styles.wrapper} cy-bg-canvas cy-text-primary`}>
      <AnnouncementBanner />
      <LandingHeader />
      {/* paddingTop compensates for the fixed announcement banner height */}
      <main
        dir="ltr"
        className="bg-white dark:bg-surface-900 min-h-screen"
        style={{ paddingTop: 'var(--banner-h, 0px)' }}
      >
        {children}
      </main>
      <MegaFooter />
    </div>
  )
}
