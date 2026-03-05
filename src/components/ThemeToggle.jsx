import { Moon, Sun } from 'lucide-react';
import { useThemeMode } from '../hooks/useThemeMode';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeMode();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex size-9 items-center justify-center rounded-lg border cy-border-sidebar cy-bg-sidebar hover:bg-[color-mix(in_srgb,var(--brand-primary)_8%,transparent)] hover:text-primary-400 cy-text-sidebar transition-colors"
    >
      {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}
