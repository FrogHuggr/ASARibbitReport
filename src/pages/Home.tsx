import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MapPin, Lightbulb } from 'lucide-react';
import { dispatches } from '../data/dispatches';
import { mythBusterCards } from '../data/mythbusters';
import { dilemmas } from '../data/wildDecisions';
import { getRandomHeroImage } from '../data/heroImages';
import { getRandomFact } from '../data/didYouKnowFacts';

export function Home() {
  // Random hero image selection on each mount
  const [heroImage] = useState(() => getRandomHeroImage());
  // Random fact selection on each mount
  const [fact] = useState(() => getRandomFact());

  return (
    <div className="pb-10">
      {/* HERO SECTION - Full bleed magazine cover with random rotation */}
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
        {/* Background image with Ken Burns animation */}
        <div
          className="absolute inset-0 bg-cover bg-center animate-kenburns"
          style={{
            backgroundImage: `url(${heroImage.src})`,
          }}
        />
        {/* Dark gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Species caption - bottom left of image */}
        <div className="absolute bottom-24 left-4">
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-white text-sm font-medium"
            style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
          >
            <MapPin size={14} className="text-[#F97316]" />
            <span>
              {heroImage.species} | {heroImage.location}
            </span>
          </div>
        </div>

        {/* Text overlay - positioned bottom-left */}
        <div className="absolute bottom-6 left-4 right-4 text-white">
          <p
            className="text-xs font-medium uppercase tracking-widest mb-1"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
          >
            The Ribbit Report
          </p>
          <h1
            className="font-display text-2xl font-bold leading-tight"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}
          >
            The amphibian world, up close.
          </h1>
        </div>
      </section>

      {/* CONTENT CARDS */}
      <section className="px-4 pt-6 space-y-4">
        {/* DISPATCHES CARD - 3-face collage background */}
        <Link to="/dispatches" className="block group">
          <div
            className="relative h-44 rounded-2xl overflow-hidden transition-all duration-200 ease-out group-hover:-translate-y-1 group-active:scale-[0.98]"
            style={{
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
            }}
          >
            {/* 3-face collage background - colorful species different from hero */}
            <div className="absolute inset-0 flex">
              <div
                className="flex-1 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/images/dispatches/panama-spiny-headed-treefrog/hero.jpeg)',
                }}
              />
              <div
                className="flex-1 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/images/dispatches/india-indigo-bush-frog/hero.jpeg)',
                }}
              />
              <div
                className="flex-1 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/images/dispatches/nepal-mahabharat-torrent-frog/hero.jpg)',
                }}
              />
            </div>

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 p-5 flex flex-col justify-end">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-1">
                    Dispatches
                  </h3>
                  <p className="text-white/90 text-sm">
                    {dispatches.length} adventures and counting...
                  </p>
                </div>
                <ChevronRight
                  size={28}
                  className="text-white/80 group-hover:translate-x-1 transition-transform flex-shrink-0"
                />
              </div>
            </div>

            {/* Hover shadow enhancement */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl"
              style={{
                boxShadow: '0 12px 32px rgba(0,0,0,0.2)',
              }}
            />
          </div>
        </Link>

        {/* WILD DECISIONS CARD - Illustrated map background */}
        <Link to="/wild-decisions" className="block group">
          <div
            className="relative h-48 rounded-2xl overflow-hidden transition-all duration-200 ease-out group-hover:-translate-y-1 group-active:scale-[0.98]"
            style={{
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
            }}
          >
            {/* Salamander under log illustration */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(/images/wilddecision/wilddecision3.jpg)',
              }}
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

            {/* Content */}
            <div className="absolute inset-0 p-5 flex flex-col justify-end">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-1">
                    Wild Decisions
                  </h3>
                  <p className="text-white/90 text-sm">
                    Tiny dilemmas. Big thinking.
                  </p>
                  <p className="text-white/70 text-xs mt-1">
                    {dilemmas.length} scenarios to explore
                  </p>
                </div>
                <ChevronRight
                  size={28}
                  className="text-white/80 group-hover:translate-x-1 transition-transform flex-shrink-0"
                />
              </div>
            </div>

            {/* Hover shadow enhancement */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl"
              style={{
                boxShadow: '0 12px 32px rgba(0,0,0,0.2)',
              }}
            />
          </div>
        </Link>

        {/* MYTH BUSTERS CARD - MarshMellow with speech bubble */}
        <Link to="/myths" className="block group">
          <div
            className="relative h-48 rounded-2xl overflow-hidden transition-all duration-200 ease-out group-hover:-translate-y-1 group-active:scale-[0.98]"
            style={{
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
            }}
          >
            {/* Gradient background with playful colors */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED] via-[#EC4899] to-[#F59E0B]" />

            {/* Question mark pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-2 left-4 text-5xl font-bold text-white rotate-12">?</div>
              <div className="absolute top-16 left-12 text-3xl font-bold text-white -rotate-6">?</div>
              <div className="absolute bottom-20 left-6 text-4xl font-bold text-white rotate-3">?</div>
            </div>

            {/* MarshMellow with speech bubble */}
            <div className="absolute right-4 top-2 flex items-start gap-2">
              {/* Speech bubble */}
              <div className="relative bg-white rounded-xl px-3 py-2 mt-4 shadow-lg">
                <p className="text-[#7C3AED] font-bold text-sm whitespace-nowrap">
                  Myth or Fact?
                </p>
                {/* Bubble tail */}
                <div
                  className="absolute -right-2 top-3 w-0 h-0"
                  style={{
                    borderTop: '6px solid transparent',
                    borderBottom: '6px solid transparent',
                    borderLeft: '8px solid white',
                  }}
                />
              </div>
              {/* MarshMellow */}
              <img
                src="/images/marshmellow/marshmellow-thinking.png"
                alt="MarshMellow wondering"
                className="w-20 h-20 object-contain"
              />
            </div>

            {/* Dark gradient overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 p-5 flex flex-col justify-end">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-1">
                    Myth Busters
                  </h3>
                  <p className="text-white/90 text-sm">
                    {mythBusterCards.length} myths to bust
                  </p>
                </div>
                <ChevronRight
                  size={28}
                  className="text-white/80 group-hover:translate-x-1 transition-transform flex-shrink-0"
                />
              </div>
            </div>

            {/* Hover shadow enhancement */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl"
              style={{
                boxShadow: '0 12px 32px rgba(0,0,0,0.2)',
              }}
            />
          </div>
        </Link>

        {/* THE REAL STORY CARD - Split with illustrated frog/toad in circles */}
        <Link to="/real-story/frogs-vs-toads" className="block group">
          <div
            className="relative h-48 rounded-2xl overflow-hidden transition-all duration-200 ease-out group-hover:-translate-y-1 group-active:scale-[0.98]"
            style={{
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
            }}
          >
            {/* Split color background */}
            <div className="absolute inset-0 flex">
              {/* Left - Green */}
              <div className="flex-1 bg-[#4A7B5C]" />
              {/* Right - Brown */}
              <div className="flex-1 bg-[#8B7355]" />
            </div>

            {/* Frog and Toad illustrations in circles - positioned higher to avoid text overlap */}
            <div className="absolute inset-0 flex items-center justify-center -mt-12">
              {/* Frog circle - left side */}
              <div
                className="w-28 h-28 rounded-full bg-[#E8F5E9] flex items-center justify-center overflow-hidden border-4 border-white/60 -mr-4 z-10"
                style={{ boxShadow: '0 6px 16px rgba(0,0,0,0.25)' }}
              >
                <img
                  src="/images/realstory/frog.png"
                  alt="Frog"
                  className="w-24 h-24 object-contain"
                />
              </div>

              {/* VS badge in center */}
              <div
                className="w-14 h-14 rounded-full bg-[#E85D4C] flex items-center justify-center transform rotate-3 z-20"
                style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
              >
                <span className="font-display font-extrabold text-xl text-white">
                  VS
                </span>
              </div>

              {/* Toad circle - right side */}
              <div
                className="w-28 h-28 rounded-full bg-[#F5E6D3] flex items-center justify-center overflow-hidden border-4 border-white/60 -ml-4 z-10"
                style={{ boxShadow: '0 6px 16px rgba(0,0,0,0.25)' }}
              >
                <img
                  src="/images/realstory/toad.png"
                  alt="Toad"
                  className="w-24 h-24 object-contain"
                />
              </div>
            </div>

            {/* Dark gradient overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 p-5 flex flex-col justify-end">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-1">
                    The Real Story
                  </h3>
                  <p className="text-white/90 text-sm">
                    Frogs vs. Toads
                  </p>
                </div>
                <ChevronRight
                  size={28}
                  className="text-white/80 group-hover:translate-x-1 transition-transform flex-shrink-0"
                />
              </div>
            </div>

            {/* Hover shadow enhancement */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl"
              style={{
                boxShadow: '0 12px 32px rgba(0,0,0,0.2)',
              }}
            />
          </div>
        </Link>
      </section>

      {/* DID YOU KNOW? Section */}
      <section className="px-4 pt-8 pb-4">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb size={16} className="text-[#F59E0B] flex-shrink-0" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] dark:text-[#9CA3AF]">
              Did you know?
            </span>
          </div>
          <p className="text-[#4B5563] dark:text-[#D1D5DB] text-sm leading-relaxed max-w-xs sm:max-w-md">
            {fact.text}
          </p>
        </div>
      </section>
    </div>
  );
}
