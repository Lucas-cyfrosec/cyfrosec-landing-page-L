'use client'

import { useEffect, useState } from 'react'
import { resolveThemeMode, THEME_STORAGE_KEY, type ThemeMode } from '@/app/lib/theme-mode'

export type { ThemeMode } from '@/app/lib/theme-mode'

function resolveInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'light'

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme
  }

  if (document.documentElement.classList.contains('dark')) {
    return 'dark'
  }

  return resolveThemeMode(storedTheme, window.matchMedia('(prefers-color-scheme: dark)').matches)
}

function applyTheme(theme: ThemeMode): void {
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

export function useThemeMode() {
  const [theme, setTheme] = useState<ThemeMode>(resolveInitialTheme)

  useEffect(() => {
    applyTheme(theme)
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return { theme, setTheme, toggleTheme }
}
