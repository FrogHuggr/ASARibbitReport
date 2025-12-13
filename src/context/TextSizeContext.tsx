import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type TextSize = 'small' | 'medium' | 'large';

interface TextSizeContextType {
  textSize: TextSize;
  setTextSize: (size: TextSize) => void;
}

const TextSizeContext = createContext<TextSizeContextType | undefined>(undefined);

export function TextSizeProvider({ children }: { children: ReactNode }) {
  const [textSize, setTextSizeState] = useState<TextSize>(() => {
    const saved = localStorage.getItem('ribbit-text-size');
    return (saved as TextSize) || 'medium';
  });

  useEffect(() => {
    localStorage.setItem('ribbit-text-size', textSize);

    // Remove all size classes first
    document.documentElement.classList.remove('text-size-small', 'text-size-medium', 'text-size-large');
    // Add the current size class
    document.documentElement.classList.add(`text-size-${textSize}`);
  }, [textSize]);

  const setTextSize = (size: TextSize) => setTextSizeState(size);

  return (
    <TextSizeContext.Provider value={{ textSize, setTextSize }}>
      {children}
    </TextSizeContext.Provider>
  );
}

export function useTextSize() {
  const context = useContext(TextSizeContext);
  if (context === undefined) {
    throw new Error('useTextSize must be used within a TextSizeProvider');
  }
  return context;
}
