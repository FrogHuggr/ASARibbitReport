import type { ReactNode } from 'react';
import { GlossaryTerm } from './GlossaryTerm';
import { glossaryTerms } from '../data/glossary';

interface GlossaryTextProps {
  children: string;
  className?: string;
}

// Sort terms by length (longest first) to match multi-word terms before single words
const sortedTerms = [...glossaryTerms].sort((a, b) => b.term.length - a.term.length);

// Build a regex pattern that matches any glossary term (case-insensitive, whole words)
const termPattern = sortedTerms
  .map(t => t.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) // Escape regex special chars
  .join('|');

const glossaryRegex = new RegExp(`\\b(${termPattern})\\b`, 'gi');

/**
 * Automatically wraps glossary terms in text with interactive tooltips.
 * Only wraps the first occurrence of each term to avoid cluttering the text.
 */
export function GlossaryText({ children, className }: GlossaryTextProps) {
  if (!children || typeof children !== 'string') {
    return <span className={className}>{children}</span>;
  }

  const matchedTerms = new Set<string>();
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  // Reset regex state
  glossaryRegex.lastIndex = 0;

  while ((match = glossaryRegex.exec(children)) !== null) {
    const matchedTerm = match[1];
    const lowerTerm = matchedTerm.toLowerCase();

    // Only wrap the first occurrence of each term
    if (matchedTerms.has(lowerTerm)) {
      continue;
    }

    matchedTerms.add(lowerTerm);

    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(children.slice(lastIndex, match.index));
    }

    // Add the glossary term component
    parts.push(
      <GlossaryTerm key={`${lowerTerm}-${match.index}`} term={lowerTerm}>
        {matchedTerm}
      </GlossaryTerm>
    );

    lastIndex = match.index + matchedTerm.length;
  }

  // Add remaining text after the last match
  if (lastIndex < children.length) {
    parts.push(children.slice(lastIndex));
  }

  // If no matches found, return original text
  if (parts.length === 0) {
    return <span className={className}>{children}</span>;
  }

  return <span className={className}>{parts}</span>;
}
