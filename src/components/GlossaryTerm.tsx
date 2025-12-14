import { useState, useRef, useEffect } from 'react';
import { findGlossaryTerm } from '../data/glossary';

interface GlossaryTermProps {
  term: string;
  children?: React.ReactNode;
}

export function GlossaryTerm({ term, children }: GlossaryTermProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<'above' | 'below'>('above');
  const [horizontalAlign, setHorizontalAlign] = useState<'center' | 'left' | 'right'>('center');
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
    const tooltipHeight = 150; // Approximate height
    const tooltipWidth = 288; // w-72 = 18rem = 288px
    const screenWidth = window.innerWidth;
    const padding = 16; // Keep 16px from edges

    // Vertical positioning
    setPosition(spaceAbove > tooltipHeight ? 'above' : 'below');

    // Horizontal positioning - check if tooltip would go off screen
    const triggerCenter = rect.left + rect.width / 2;
    const halfTooltip = tooltipWidth / 2;

    if (triggerCenter - halfTooltip < padding) {
      // Would go off left edge - align left
      setHorizontalAlign('left');
    } else if (triggerCenter + halfTooltip > screenWidth - padding) {
      // Would go off right edge - align right
      setHorizontalAlign('right');
    } else {
      // Centered is fine
      setHorizontalAlign('center');
    }
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

  // Get horizontal position classes
  const getHorizontalClasses = () => {
    switch (horizontalAlign) {
      case 'left':
        return 'left-0';
      case 'right':
        return 'right-0';
      default:
        return 'left-1/2 -translate-x-1/2';
    }
  };

  // Get arrow position classes
  const getArrowClasses = () => {
    const baseClasses = `absolute w-3 h-3 bg-white dark:bg-[#2D2D2D] border-[#E5E7EB] dark:border-[#404040] transform rotate-45 ${
      position === 'above'
        ? 'bottom-0 translate-y-1/2 border-r border-b'
        : 'top-0 -translate-y-1/2 border-l border-t'
    }`;

    switch (horizontalAlign) {
      case 'left':
        return `${baseClasses} left-4`;
      case 'right':
        return `${baseClasses} right-4`;
      default:
        return `${baseClasses} left-1/2 -translate-x-1/2`;
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
          className={`absolute z-50 w-72 max-w-[calc(100vw-32px)] p-3 bg-white dark:bg-[#2D2D2D] rounded-lg shadow-lg border border-[#E5E7EB] dark:border-[#404040] text-left ${
            position === 'above'
              ? 'bottom-full mb-2'
              : 'top-full mt-2'
          } ${getHorizontalClasses()}`}
        >
          {/* Arrow */}
          <div className={getArrowClasses()} />

          {/* Content */}
          <div className="relative">
            <div className="flex items-baseline gap-2 mb-1 flex-wrap">
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
