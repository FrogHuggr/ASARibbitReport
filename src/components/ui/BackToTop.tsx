import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { triggerHaptic } from '../../utils/haptics';

interface BackToTopProps {
  threshold?: number;
  color?: string;
}

export function BackToTop({ threshold = 400, color = '#2D5A3D' }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility(); // Initial check

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [threshold]);

  const scrollToTop = () => {
    triggerHaptic('light');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-24 right-4 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 z-40"
      style={{ backgroundColor: color }}
      aria-label="Back to top"
    >
      <ChevronUp size={24} className="text-white" />
    </button>
  );
}
