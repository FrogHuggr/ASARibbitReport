import { useState, useRef, useEffect } from 'react';
import { findGlossaryTerm } from '../data/glossary';

interface GlossaryTermProps {
  term: string;
  children?: React.ReactNode;
}

export function GlossaryTerm({ term, children }: GlossaryTermProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<'above' | 'below'>('above');
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const glossaryEntry = findGlossaryTerm(term);

  // Close tooltip when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node) &&
        tooltipRef.current &&
        !tooltipRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Determine tooltip position based on available space
  useEffect(() => {
    if (!isOpen || !triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();
    const spaceAbove = rect.top;
    const tooltipHeight = 120; // Approximate height

    setPosition(spaceAbove > tooltipHeight ? 'above' : 'below');
  }, [isOpen]);

  // If term not found in glossary, just render the text
  if (!glossaryEntry) {
    return <span>{children || term}</span>;
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <span className="relative inline">
      <span
        ref={triggerRef}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-expanded={isOpen}
        aria-describedby={isOpen ? `glossary-${term}` : undefined}
        className="glossary-term cursor-pointer border-b-2 border-dotted border-[#2D5A3D] dark:border-[#6ABF8A] text-[#2D5A3D] dark:text-[#6ABF8A] hover:border-solid focus:outline-none focus:ring-2 focus:ring-[#2D5A3D] dark:focus:ring-[#6ABF8A] focus:ring-offset-1 rounded-sm"
      >
        {children || term}
      </span>

      {isOpen && (
        <div
          ref={tooltipRef}
          id={`glossary-${term}`}
          role="tooltip"
          className={`absolute z-50 w-72 max-w-[90vw] p-3 bg-white dark:bg-[#2D2D2D] rounded-lg shadow-lg border border-[#E5E7EB] dark:border-[#404040] text-left ${
            position === 'above'
              ? 'bottom-full mb-2'
              : 'top-full mt-2'
          } left-1/2 -translate-x-1/2`}
        >
          {/* Arrow */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-white dark:bg-[#2D2D2D] border-[#E5E7EB] dark:border-[#404040] transform rotate-45 ${
              position === 'above'
                ? 'bottom-0 translate-y-1/2 border-r border-b'
                : 'top-0 -translate-y-1/2 border-l border-t'
            }`}
          />

          {/* Content */}
          <div className="relative">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-bold text-[#2D2D2D] dark:text-white capitalize">
                {glossaryEntry.term}
              </span>
              {glossaryEntry.pronunciation && (
                <span className="text-xs text-[#6B7280] dark:text-[#9CA3AF] italic">
                  ({glossaryEntry.pronunciation})
                </span>
              )}
            </div>
            <p className="text-sm text-[#4B5563] dark:text-[#D1D5DB] leading-relaxed">
              {glossaryEntry.definition}
            </p>
            <div className="mt-2 flex items-center gap-1">
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full ${
                  glossaryEntry.category === 'scientific'
                    ? 'bg-[#EDE9FE] text-[#7C3AED] dark:bg-[#4C1D95] dark:text-[#C4B5FD]'
                    : glossaryEntry.category === 'conservation'
                    ? 'bg-[#D1FAE5] text-[#059669] dark:bg-[#064E3B] dark:text-[#6EE7B7]'
                    : 'bg-[#FEF3C7] text-[#D97706] dark:bg-[#78350F] dark:text-[#FCD34D]'
                }`}
              >
                {glossaryEntry.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </span>
  );
}
