// Unified search index for all searchable content
// Adding new content types is as simple as adding entries to this index

import { dispatches } from '../data/dispatches';
import { glossaryTerms } from '../data/glossary';
import { mythBusterCards } from '../data/mythbusters';
import { realStories } from '../data/realStory';
import { dilemmas } from '../data/wildDecisions';

export type SearchResultType =
  | 'dispatch'
  | 'glossary'
  | 'mythbuster'
  | 'realstory'
  | 'wilddecision';

export interface SearchResult {
  id: string;
  type: SearchResultType;
  title: string;
  subtitle: string;
  searchText: string; // Combined text for searching
  route: string;
  icon: string; // Lucide icon name
}

// Build the search index from all content sources
function buildSearchIndex(): SearchResult[] {
  const results: SearchResult[] = [];

  // Add Dispatches
  dispatches.forEach(dispatch => {
    results.push({
      id: `dispatch-${dispatch.id}`,
      type: 'dispatch',
      title: dispatch.species.commonName,
      subtitle: `${dispatch.location.country} - ${dispatch.title}`,
      searchText: [
        dispatch.species.commonName,
        dispatch.species.scientificName,
        dispatch.location.country,
        dispatch.location.region,
        dispatch.title,
        dispatch.researcher?.name || '',
        // Include section content for deeper search
        ...dispatch.sections
          .filter(s => 'content' in s)
          .map(s => (s as { content: string }).content)
      ].join(' ').toLowerCase(),
      route: `/dispatches/${dispatch.id}`,
      icon: 'map-pin',
    });
  });

  // Add Glossary Terms
  glossaryTerms.forEach(term => {
    results.push({
      id: `glossary-${term.term}`,
      type: 'glossary',
      title: term.term,
      subtitle: term.definition.slice(0, 60) + '...',
      searchText: [
        term.term,
        term.definition,
        term.category,
        term.pronunciation || ''
      ].join(' ').toLowerCase(),
      route: `/glossary#${term.term}`, // Future glossary page
      icon: 'book-open',
    });
  });

  // Add Myth Busters
  mythBusterCards.forEach(myth => {
    results.push({
      id: `myth-${myth.id}`,
      type: 'mythbuster',
      title: myth.claim,
      subtitle: myth.reveal.slice(0, 60) + '...',
      searchText: [
        myth.claim,
        myth.reveal,
        myth.answer
      ].join(' ').toLowerCase(),
      route: '/myth-busters',
      icon: 'zap',
    });
  });

  // Add Real Stories
  realStories.forEach(story => {
    results.push({
      id: `realstory-${story.id}`,
      type: 'realstory',
      title: story.title,
      subtitle: story.subtitle,
      searchText: [
        story.title,
        story.subtitle,
        // Include section content
        ...story.sections
          .filter(s => 'content' in s)
          .map(s => (s as { content: string }).content)
      ].join(' ').toLowerCase(),
      route: `/real-story/${story.id}`,
      icon: 'lightbulb',
    });
  });

  // Add Wild Decisions
  dilemmas.forEach(dilemma => {
    results.push({
      id: `wilddecision-${dilemma.id}`,
      type: 'wilddecision',
      title: dilemma.title,
      subtitle: dilemma.paragraphs[0].slice(0, 60) + '...',
      searchText: [
        dilemma.title,
        dilemma.label,
        dilemma.prompt,
        ...dilemma.paragraphs
      ].join(' ').toLowerCase(),
      route: `/wild-decisions/${dilemma.slug}`,
      icon: 'git-branch',
    });
  });

  return results;
}

// Cached search index
let searchIndex: SearchResult[] | null = null;

export function getSearchIndex(): SearchResult[] {
  if (!searchIndex) {
    searchIndex = buildSearchIndex();
  }
  return searchIndex;
}

// Search function with fuzzy matching
export function search(query: string, limit = 20): SearchResult[] {
  if (!query.trim()) {
    return [];
  }

  const index = getSearchIndex();
  const lowerQuery = query.toLowerCase().trim();
  const queryWords = lowerQuery.split(/\s+/);

  // Score each result based on match quality
  const scored = index.map(item => {
    let score = 0;

    // Exact title match = highest score
    if (item.title.toLowerCase() === lowerQuery) {
      score += 100;
    }
    // Title starts with query
    else if (item.title.toLowerCase().startsWith(lowerQuery)) {
      score += 50;
    }
    // Title contains query
    else if (item.title.toLowerCase().includes(lowerQuery)) {
      score += 30;
    }

    // Check each query word
    queryWords.forEach(word => {
      if (item.searchText.includes(word)) {
        score += 10;
      }
      if (item.title.toLowerCase().includes(word)) {
        score += 5;
      }
    });

    return { item, score };
  });

  // Filter out zero scores and sort by score
  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(s => s.item);
}

// Get popular/suggested searches
export function getPopularSearches(): string[] {
  return [
    'endangered',
    'frog',
    'toad',
    'tadpole',
    'habitat',
    'conservation',
    'India',
    'Panama',
  ];
}

// Get type display info
export function getTypeInfo(type: SearchResultType): { label: string; color: string } {
  switch (type) {
    case 'dispatch':
      return { label: 'Dispatch', color: '#2D5A3D' };
    case 'glossary':
      return { label: 'Glossary', color: '#7C3AED' };
    case 'mythbuster':
      return { label: 'Myth Buster', color: '#F97316' };
    case 'realstory':
      return { label: 'The Real Story', color: '#0EA5E9' };
    case 'wilddecision':
      return { label: 'Wild Decision', color: '#EC4899' };
    default:
      return { label: 'Content', color: '#6B7280' };
  }
}
