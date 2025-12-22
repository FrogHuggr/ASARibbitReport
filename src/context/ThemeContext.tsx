import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Language = 'en' | 'es' | 'fr' | 'pt' | 'de';

export const languageLabels: Record<Language, string> = {
  en: 'English',
  es: 'Español (Beta)',
  fr: 'Français (Beta)',
  pt: 'Português (Beta)',
  de: 'Deutsch (Beta)',
};

interface ThemeContextType {
  isDark: boolean;
  toggleDark: () => void;
  glossaryEnabled: boolean;
  toggleGlossary: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Respect user's system preference for first-time visitors
function getDefaultTheme(): boolean {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Check for saved preference, otherwise use system preference
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('ribbit-dark-mode');
    // If user has manually set a preference, use it
    if (saved !== null) {
      return JSON.parse(saved);
    }
    // Otherwise, default to dark mode
    return getDefaultTheme();
  });

  // Glossary highlighting - default to disabled (false) to avoid distracting older readers
  const [glossaryEnabled, setGlossaryEnabled] = useState(() => {
    const saved = localStorage.getItem('ribbit-glossary-enabled');
    return saved !== null ? JSON.parse(saved) : false;
  });

  // Language preference - default to English
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('ribbit-language');
    return (saved as Language) || 'en';
  });

  // Track if user has manually set preference
  const [hasManualPreference, setHasManualPreference] = useState(() => {
    return localStorage.getItem('ribbit-dark-mode') !== null;
  });

  // Apply dark mode class
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Save preference when manually toggled
  useEffect(() => {
    if (hasManualPreference) {
      localStorage.setItem('ribbit-dark-mode', JSON.stringify(isDark));
    }
  }, [isDark, hasManualPreference]);


  useEffect(() => {
    localStorage.setItem('ribbit-glossary-enabled', JSON.stringify(glossaryEnabled));
  }, [glossaryEnabled]);

  // Save language preference and update document lang attribute
  useEffect(() => {
    localStorage.setItem('ribbit-language', language);
    document.documentElement.lang = language;
    // Set translate attribute - 'yes' enables browser translation for non-English
    if (language !== 'en') {
      document.documentElement.setAttribute('translate', 'yes');
    } else {
      document.documentElement.removeAttribute('translate');
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleDark = () => {
    setHasManualPreference(true);
    setIsDark((prev: boolean) => !prev);
  };
  const toggleGlossary = () => setGlossaryEnabled((prev: boolean) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleDark, glossaryEnabled, toggleGlossary, language, setLanguage }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
