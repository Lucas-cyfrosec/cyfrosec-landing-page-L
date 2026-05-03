import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CyfroSec | Enterprise Security Platform',
  description: 'CyfroSec — Enterprise-grade security operations, vulnerability management, and compliance monitoring.',
}

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" data-theme="themecyfrosec" data-theme-redesign="enabled" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
      </head>
      <body className="antialiased cy-bg-canvas cy-text-primary">
        {children}
      </body>
    </html>
  )
}
