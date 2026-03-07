import { Moon, Sun } from 'lucide-react';
import { useThemeMode } from '../hooks/useThemeMode';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeMode();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex size-9 items-center justify-center rounded-lg border border-[var(--border-default)] dark:border-[var(--border-sidebar)] bg-[var(--bg-elevated)] dark:bg-[var(--bg-sidebar)] text-[var(--text-secondary)] dark:text-[var(--text-sidebar)] shadow-sm shadow-black/5 dark:shadow-none transition-colors hover:bg-[color-mix(in_srgb,var(--brand-primary)_8%,var(--bg-elevated))] hover:text-primary-500 dark:hover:bg-[color-mix(in_srgb,var(--brand-primary)_8%,transparent)] dark:hover:text-primary-400"
    >
      {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}
