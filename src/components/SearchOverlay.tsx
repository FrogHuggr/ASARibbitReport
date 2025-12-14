import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  X,
  MapPin,
  BookOpen,
  Zap,
  Lightbulb,
  GitBranch,
  ArrowRight
} from 'lucide-react';
import {
  search,
  getPopularSearches,
  getTypeInfo,
  type SearchResult,
  type SearchResultType
} from '../utils/searchIndex';
import { triggerHaptic } from '../utils/haptics';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

// Icon component map
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  'map-pin': MapPin,
  'book-open': BookOpen,
  'zap': Zap,
  'lightbulb': Lightbulb,
  'git-branch': GitBranch,
};

function getIcon(iconName: string) {
  return iconMap[iconName] || Search;
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Focus input when overlay opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Clear state when closing
  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  // Search as user types
  useEffect(() => {
    const searchResults = search(query);
    setResults(searchResults);
  }, [query]);

  // Handle result click
  const handleResultClick = (result: SearchResult) => {
    triggerHaptic('light');

    // For glossary items, we'll just close for now (until glossary page exists)
    if (result.type === 'glossary') {
      // Future: navigate to glossary page
      onClose();
      return;
    }

    navigate(result.route);
    onClose();
  };

  // Handle popular search click
  const handlePopularClick = (term: string) => {
    triggerHaptic('light');
    setQuery(term);
  };

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Group results by type
  const groupedResults = results.reduce((acc, result) => {
    if (!acc[result.type]) {
      acc[result.type] = [];
    }
    acc[result.type].push(result);
    return acc;
  }, {} as Record<SearchResultType, SearchResult[]>);

  const popularSearches = getPopularSearches();

  return (
    <div className="fixed inset-0 z-[100] bg-white dark:bg-[#1a1a1a]">
      {/* Header with search input */}
      <div className="sticky top-0 bg-white dark:bg-[#1a1a1a] border-b border-[#E5E7EB] dark:border-[#374151] safe-top">
        <div className="flex items-center gap-3 px-4 py-3">
          {/* Search icon */}
          <Search size={20} className="text-[#6B7280] dark:text-[#9CA3AF] flex-shrink-0" />

          {/* Input */}
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search species, locations, terms..."
            className="flex-1 bg-transparent text-[#2D2D2D] dark:text-white placeholder-[#9CA3AF] text-lg outline-none"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
          />

          {/* Clear/Close button */}
          <button
            onClick={() => {
              if (query) {
                setQuery('');
              } else {
                onClose();
              }
            }}
            className="p-2 -mr-2 text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#2D2D2D] dark:hover:text-white transition-colors"
            aria-label={query ? 'Clear search' : 'Close search'}
          >
            <X size={24} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="overflow-y-auto h-[calc(100vh-60px)] pb-safe">
        {/* No query - show popular searches */}
        {!query && (
          <div className="px-4 py-6">
            <p className="text-sm font-medium text-[#6B7280] dark:text-[#9CA3AF] uppercase tracking-wider mb-4">
              Popular Searches
            </p>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => handlePopularClick(term)}
                  className="px-4 py-2 bg-[#F3F4F6] dark:bg-[#2D2D2D] text-[#4B5563] dark:text-[#D1D5DB] rounded-full text-sm font-medium hover:bg-[#E5E7EB] dark:hover:bg-[#374151] transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>

            {/* Helpful hint */}
            <div className="mt-8 flex items-start gap-3 p-4 bg-[#F0F7F1] dark:bg-[#1B3D2F] rounded-xl">
              <img
                src="/images/marshmellow/marshmellow-searching.png"
                alt="MarshMellow searching"
                className="w-16 h-16 object-contain flex-shrink-0"
              />
              <div>
                <p className="font-medium text-[#2D5A3D] dark:text-[#81C784] mb-1">
                  Search Tip!
                </p>
                <p className="text-sm text-[#4B5563] dark:text-[#9CA3AF]">
                  Try searching for a species name, country, or a word you want to learn about!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Has query but no results */}
        {query && results.length === 0 && (
          <div className="px-4 py-12 text-center">
            <img
              src="/images/marshmellow/marshmellow-thinking.png"
              alt="MarshMellow thinking"
              className="w-24 h-24 object-contain mx-auto mb-4"
            />
            <p className="text-[#6B7280] dark:text-[#9CA3AF] mb-2">
              No results found for "<span className="font-medium text-[#2D2D2D] dark:text-white">{query}</span>"
            </p>
            <p className="text-sm text-[#9CA3AF] dark:text-[#6B7280]">
              Try a different search term
            </p>
          </div>
        )}

        {/* Results */}
        {query && results.length > 0 && (
          <div className="pb-8">
            {Object.entries(groupedResults).map(([type, typeResults]) => {
              const typeInfo = getTypeInfo(type as SearchResultType);
              return (
                <div key={type} className="mb-4">
                  {/* Type header */}
                  <div className="px-4 py-2 bg-[#F9FAFB] dark:bg-[#242424] sticky top-0">
                    <p
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: typeInfo.color }}
                    >
                      {typeInfo.label} ({typeResults.length})
                    </p>
                  </div>

                  {/* Results list */}
                  <div>
                    {typeResults.map((result) => {
                      const IconComponent = getIcon(result.icon);
                      const typeColor = getTypeInfo(result.type).color;

                      return (
                        <button
                          key={result.id}
                          onClick={() => handleResultClick(result)}
                          className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-[#F3F4F6] dark:hover:bg-[#2D2D2D] transition-colors border-b border-[#F3F4F6] dark:border-[#2D2D2D] last:border-b-0"
                        >
                          {/* Icon */}
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: `${typeColor}20`, color: typeColor }}
                          >
                            <IconComponent size={20} />
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-[#2D2D2D] dark:text-white truncate capitalize">
                              {result.title}
                            </p>
                            <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] truncate">
                              {result.subtitle}
                            </p>
                          </div>

                          {/* Arrow */}
                          <ArrowRight size={16} className="text-[#9CA3AF] flex-shrink-0" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
