'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { en } from './locales/en';
import { ar } from './locales/ar';
import type { Dictionary } from './locales/en';

export type Lang = 'en' | 'ar';

const STORAGE_KEY = 'cyfrosec.lang';
const dictionaries: Record<Lang, Dictionary> = { en, ar };

interface LangContextValue {
  lang: Lang;
  t: Dictionary;
  setLang: (lang: Lang) => void;
}

const LangContext = createContext<LangContextValue>({
  lang: 'en',
  t: en,
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  // Read persisted preference on first mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'ar') setLangState('ar');
    } catch {
      // localStorage unavailable (e.g. private mode with strict settings)
    }
  }, []);

  // Sync html[lang] and localStorage whenever lang changes.
  // dir is NEVER set on <html> — individual text elements carry dir="rtl" instead,
  // so layout containers (flex/grid) are never affected by directionality.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
    document.documentElement.lang = lang;
  }, [lang]);

  function setLang(next: Lang) {
    setLangState(next);
  }

  return (
    <LangContext.Provider value={{ lang, t: dictionaries[lang], setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LangContext);
}
