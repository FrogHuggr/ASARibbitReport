import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  Map,
  Compass,
  Microscope,
  Eye,
  MessageCircle,
  Lightbulb,
  X,
  Check,
} from 'lucide-react';
import { mythBusterCards } from '../data/mythbusters';
import type { BonusChip, MythBusterCard } from '../data/mythbusters';
import { ShareButton } from '../components/ShareButton';

// Map icon names to Lucide components
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  map: Map,
  compass: Compass,
  microscope: Microscope,
  eye: Eye,
  'message-circle': MessageCircle,
  lightbulb: Lightbulb,
};

// Bonus chip colors based on type
const chipColors: Record<string, { bg: string; text: string; darkBg: string }> = {
  expedition: { bg: 'bg-[#E8F5E9]', text: 'text-[#2D5A3D]', darkBg: 'dark:bg-[#1B3D2F]' },
  science: { bg: 'bg-[#E3F2FD]', text: 'text-[#1565C0]', darkBg: 'dark:bg-[#1E3A5F]' },
  observe: { bg: 'bg-[#FFF3E0]', text: 'text-[#E65100]', darkBg: 'dark:bg-[#4A2C00]' },
  ask: { bg: 'bg-[#F3E5F5]', text: 'text-[#7B1FA2]', darkBg: 'dark:bg-[#3E1E47]' },
  try: { bg: 'bg-[#FFFDE7]', text: 'text-[#F9A825]', darkBg: 'dark:bg-[#4A4000]' },
};

// Landing page with MarshMellow intro - field journal theme
function MythBustersLanding({ onStart }: { onStart: () => void }) {
  return (
    <div className="min-h-[80vh] flex flex-col">
      {/* Hero with field journal background */}
      <div className="relative">
        {/* Background image */}
        <div
          className="h-56 sm:h-64 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/mythbusters/mythbusters.jpg)',
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F7F5F0] dark:from-[#1a1a1a] via-transparent to-black/30" />

        {/* Investigator MarshMellow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
          <img
            src="/images/marshmellow/marshmellow-thinking5.png"
            alt="MarshMellow investigating"
            className="w-36 h-36 object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-20 pb-8 bg-[#F7F5F0] dark:bg-[#1a1a1a]">
        {/* Title and intro */}
        <p className="text-[#8B6914] dark:text-[#D4A574] text-xs font-semibold uppercase tracking-wider mb-2">
          Investigate
        </p>
        <h1 className="font-display text-3xl font-bold text-[#2D2D2D] dark:text-white mb-4 text-center">
          Myth Busters
        </h1>
        <p className="text-[#4A3728] dark:text-[#E8D5B7] text-lg mb-2 text-center px-4">
          Think you know amphibians?
        </p>
        <p className="text-[#6B5344] dark:text-[#B8A082] text-base mb-6 text-center px-4">
          Let's find out!
        </p>
        <p className="text-[#6B7280] dark:text-[#9CA3AF] text-sm mb-8 text-center px-4">
          Swipe through our cards and test what you think you know.
        </p>

        {/* Start button - adventure gold/brown to match theme */}
        <button
          onClick={onStart}
          className="bg-gradient-to-r from-[#8B6914] to-[#6B5344] hover:from-[#7A5A10] hover:to-[#5A4636] active:scale-95 text-white font-bold py-5 px-12 rounded-full text-2xl transition-all shadow-xl border-2 border-[#D4A574]/30"
        >
          Let's Go!
        </button>
      </div>
    </div>
  );
}

// Bonus chip display component
function BonusChipDisplay({ chip }: { chip: BonusChip }) {
  const Icon = iconMap[chip.icon] || Lightbulb;
  const colors = chipColors[chip.type] || chipColors.try;

  const content = (
    <div
      className={`${colors.bg} ${colors.darkBg} rounded-xl p-4 mt-6 ${
        chip.linkTo ? 'hover:shadow-md transition-shadow cursor-pointer' : ''
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`w-10 h-10 rounded-full ${colors.bg} ${colors.darkBg} flex items-center justify-center flex-shrink-0 border-2 border-white/50 dark:border-white/20`}
        >
          <Icon size={20} className={`${colors.text} dark:text-white`} />
        </div>
        <p className={`${colors.text} dark:text-white/90 text-sm leading-relaxed flex-1`}>
          {chip.text}
        </p>
        {chip.linkTo && (
          <ChevronRight size={18} className={`${colors.text} dark:text-white/70 flex-shrink-0 mt-0.5`} />
        )}
      </div>
    </div>
  );

  if (chip.linkTo) {
    return <Link to={chip.linkTo}>{content}</Link>;
  }

  return content;
}

// Individual card view
function MythBusterCardView({
  card,
  isRevealed,
  onAnswer,
}: {
  card: MythBusterCard;
  isRevealed: boolean;
  onAnswer: (answer: 'myth' | 'fact') => void;
}) {
  return (
    <div className="flex flex-col h-full">
      {/* Card content */}
      <div className="flex-1 flex flex-col">
        {/* Claim - always visible */}
        <div className="bg-white dark:bg-[#242424] rounded-2xl p-6 shadow-lg border border-[#E5E5E5] dark:border-[#374151]">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] dark:text-[#9CA3AF] mb-3">
            Is this a myth or a fact?
          </p>
          <h2 className="font-display text-2xl font-bold text-[#2D2D2D] dark:text-white leading-tight">
            "{card.claim}"
          </h2>
        </div>

        {/* Answer buttons or reveal */}
        {!isRevealed ? (
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => onAnswer('myth')}
              className="flex-1 bg-[#E85D4C] hover:bg-[#D14D3D] active:scale-95 text-white font-bold py-5 rounded-2xl text-xl transition-all shadow-lg border-2 border-[#C94A3A] flex items-center justify-center gap-2"
            >
              <X size={24} strokeWidth={3} />
              Myth!
            </button>
            <button
              onClick={() => onAnswer('fact')}
              className="flex-1 bg-[#2D5A3D] hover:bg-[#234A31] active:scale-95 text-white font-bold py-5 rounded-2xl text-xl transition-all shadow-lg border-2 border-[#1E4A2D] flex items-center justify-center gap-2"
            >
              <Check size={24} strokeWidth={3} />
              Fact!
            </button>
          </div>
        ) : (
          <div className="mt-6 space-y-4 animate-fade-in">
            {/* Answer badge */}
            <div className="flex justify-center">
              <div
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-lg ${
                  card.answer === 'myth'
                    ? 'bg-[#E85D4C] text-white'
                    : 'bg-[#2D5A3D] text-white'
                }`}
              >
                {card.answer === 'myth' ? "That's a Myth!" : "That's a Fact!"}
              </div>
            </div>

            {/* Reveal explanation */}
            <div className="bg-[#F7F5F0] dark:bg-[#1a1a1a] rounded-xl p-5">
              <p className="text-[#2D2D2D] dark:text-white/90 leading-relaxed">
                {card.reveal}
              </p>

              {/* Bonus chip */}
              <BonusChipDisplay chip={card.bonusChip} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Progress dots component
function ProgressDots({
  total,
  current,
  viewedCards,
}: {
  total: number;
  current: number;
  viewedCards: Set<string>;
}) {
  return (
    <div className="flex justify-center gap-2 py-4">
      {Array.from({ length: total }).map((_, index) => {
        const cardId = mythBusterCards[index].id;
        const isViewed = viewedCards.has(cardId);
        const isCurrent = index === current;

        return (
          <div
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              isCurrent
                ? 'bg-[#2D5A3D] dark:bg-[#81C784] w-6'
                : isViewed
                  ? 'bg-[#2D5A3D]/50 dark:bg-[#81C784]/50'
                  : 'bg-[#E5E5E5] dark:bg-[#374151]'
            }`}
          />
        );
      })}
    </div>
  );
}

// Main component
export function MythBusters() {
  const [showLanding, setShowLanding] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealedCards, setRevealedCards] = useState<Set<string>>(new Set());
  const [viewedCards, setViewedCards] = useState<Set<string>>(new Set());

  // Load viewed cards from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('mythBustersViewed');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setViewedCards(new Set(parsed));
      } catch {
        // ignore parse errors
      }
    }
  }, []);

  // Save viewed cards to localStorage
  useEffect(() => {
    if (viewedCards.size > 0) {
      localStorage.setItem('mythBustersViewed', JSON.stringify([...viewedCards]));
    }
  }, [viewedCards]);

  const currentCard = mythBusterCards[currentIndex];
  const isCurrentRevealed = revealedCards.has(currentCard.id);

  const handleAnswer = () => {
    setRevealedCards((prev) => new Set([...prev, currentCard.id]));
    setViewedCards((prev) => new Set([...prev, currentCard.id]));
  };

  const goToNext = () => {
    if (currentIndex < mythBusterCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleStart = () => {
    setShowLanding(false);
  };

  if (showLanding) {
    return <MythBustersLanding onStart={handleStart} />;
  }

  return (
    <div className="min-h-[80vh] flex flex-col px-4 py-6">
      {/* Header with back to landing */}
      <header className="flex items-center justify-between mb-4">
        <button
          onClick={() => setShowLanding(true)}
          className="text-[#6B7280] dark:text-[#9CA3AF] text-sm hover:text-[#2D5A3D] dark:hover:text-[#81C784] transition-colors"
        >
          ← Back
        </button>
        <span className="text-sm font-medium text-[#6B7280] dark:text-[#9CA3AF]">
          {currentIndex + 1} of {mythBusterCards.length}
        </span>
      </header>

      {/* Card area */}
      <div className="flex-1 overflow-y-auto">
        <MythBusterCardView
          key={currentCard.id}
          card={currentCard}
          isRevealed={isCurrentRevealed}
          onAnswer={handleAnswer}
        />
      </div>

      {/* Navigation */}
      <div className="mt-4">
        <ProgressDots
          total={mythBusterCards.length}
          current={currentIndex}
          viewedCards={viewedCards}
        />

        <div className="flex items-center justify-between gap-4">
          <button
            onClick={goToPrev}
            disabled={currentIndex === 0}
            className={`flex items-center gap-1 px-4 py-3 rounded-xl font-medium transition-colors ${
              currentIndex === 0
                ? 'text-[#9CA3AF] dark:text-[#6B7280] cursor-not-allowed'
                : 'text-[#2D5A3D] dark:text-[#81C784] hover:bg-[#E8F5E9] dark:hover:bg-[#1B3D2F]'
            }`}
          >
            <ChevronLeft size={20} />
            Prev
          </button>

          <button
            onClick={goToNext}
            disabled={currentIndex === mythBusterCards.length - 1}
            className={`flex items-center gap-1 px-4 py-3 rounded-xl font-medium transition-colors ${
              currentIndex === mythBusterCards.length - 1
                ? 'text-[#9CA3AF] dark:text-[#6B7280] cursor-not-allowed'
                : 'text-[#2D5A3D] dark:text-[#81C784] hover:bg-[#E8F5E9] dark:hover:bg-[#1B3D2F]'
            }`}
          >
            Next
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Share button - show on last card when revealed */}
        {currentIndex === mythBusterCards.length - 1 && isCurrentRevealed && (
          <div className="flex justify-center mt-6 animate-fade-in">
            <ShareButton
              title="Myth Busters - The Ribbit Report"
              text={`I just busted ${mythBusterCards.length} amphibian myths! Test what you know on The Ribbit Report.`}
            />
          </div>
        )}
      </div>
    </div>
  );
}
