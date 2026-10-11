import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { LANGUAGES, TEXT } from './i18n';

const STORAGE_KEY = 'lang';

function initialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (LANGUAGES.includes(saved)) return saved;
  } catch {
    // storage unavailable (private mode etc.) — fall through to browser language
  }
  return navigator.language?.toLowerCase().startsWith('tr') ? 'tr' : 'en';
}

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = TEXT[lang].meta.title;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: TEXT[lang] }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  return useContext(LanguageContext);
}
