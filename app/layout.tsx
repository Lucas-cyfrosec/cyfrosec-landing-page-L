import type { Metadata } from 'next'
import { Noto_Sans_Arabic } from 'next/font/google'
import './globals.css'
import { LangProvider } from '@/src/i18n'

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'CyfroSec | Enterprise Security Platform',
  description: 'CyfroSec — Enterprise-grade security operations, vulnerability management, and compliance monitoring.',
}

// Runs synchronously before React hydration so the initial dir/lang are
// correct without a flash when the user has previously chosen Arabic.
const themeBootstrapScript = `
(() => {
  try {
    const storageKey = 'cyfrosec.theme';
    const stored = window.localStorage.getItem(storageKey);
    const isDark = stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.setAttribute('data-theme-redesign', 'enabled');
  } catch (_err) {}
})();
`

const langBootstrapScript = `
(() => {
  try {
    const lang = localStorage.getItem('cyfrosec.lang');
    if (lang === 'ar') {
      document.documentElement.lang = 'ar';
    }
  } catch (_e) {}
})();
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`dark ${notoSansArabic.variable}`}
      data-theme="themecyfrosec"
      data-theme-redesign="enabled"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
        <script dangerouslySetInnerHTML={{ __html: langBootstrapScript }} />
      </head>
      <body className="antialiased cy-bg-canvas cy-text-primary">
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  )
}
