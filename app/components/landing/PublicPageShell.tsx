import { LandingHeader } from '@/app/components/landing/LandingHeader'
import MegaFooter from '@/app/components/landing/sections/MegaFooter'
import styles from '@/app/landing-theme.module.css'

interface PublicPageShellProps {
  children: React.ReactNode
}

export function PublicPageShell({ children }: PublicPageShellProps) {
  return (
    <div className={`scroll-smooth ${styles.wrapper} cy-bg-canvas cy-text-primary`}>
      <LandingHeader />
      <main className="bg-white dark:bg-surface-900 min-h-screen">{children}</main>
      <MegaFooter />
    </div>
  )
}
