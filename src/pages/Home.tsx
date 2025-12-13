import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { dispatches } from '../data/dispatches';

export function Home() {
  return (
    <div className="pb-10">
      {/* HERO SECTION - Full bleed magazine cover */}
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
        {/* Background image with Ken Burns animation */}
        <div
          className="absolute inset-0 bg-cover bg-center animate-kenburns"
          style={{
            backgroundImage: 'url(/images/dispatches/india-resplendent-grass-frog/hero.jpeg)',
          }}
        />
        {/* Dark gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Text overlay - positioned bottom-left */}
        <div className="absolute bottom-8 left-6 right-6 text-white">
          <p
            className="text-xs font-medium uppercase tracking-widest mb-2"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
          >
            The Ribbit Report
          </p>
          <h1
            className="font-display text-3xl font-bold leading-tight"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}
          >
            Your field guide to amphibian adventures
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

            {/* Frog and Toad illustrations in circles - BIGGER */}
            <div className="absolute inset-0 flex items-center justify-center -mt-4">
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
    </div>
  );
}
