import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleDark: () => void;
  glossaryEnabled: boolean;
  toggleGlossary: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Default to dark mode - only use light if explicitly saved as false
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('ribbit-dark-mode');
    // If no preference saved, default to dark (true)
    // If saved, parse the value
    return saved !== null ? JSON.parse(saved) : true;
  });

  // Glossary highlighting - default to enabled (true)
  const [glossaryEnabled, setGlossaryEnabled] = useState(() => {
    const saved = localStorage.getItem('ribbit-glossary-enabled');
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('ribbit-dark-mode', JSON.stringify(isDark));
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem('ribbit-glossary-enabled', JSON.stringify(glossaryEnabled));
  }, [glossaryEnabled]);

  const toggleDark = () => setIsDark((prev: boolean) => !prev);
  const toggleGlossary = () => setGlossaryEnabled((prev: boolean) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleDark, glossaryEnabled, toggleGlossary }}>
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
