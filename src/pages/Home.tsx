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
        <div className="absolute bottom-24 left-6 right-6 text-white">
          <p
            className="text-xs font-medium uppercase tracking-widest mb-2"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
          >
            Issue 2 • 2025
          </p>
          <h1
            className="font-display text-3xl font-bold leading-tight"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}
          >
            Postcards from the Field
          </h1>
        </div>
      </section>

      {/* MARSHMELLOW WELCOME - Floating card overlapping hero */}
      <section className="px-4 -mt-16 relative z-10 mb-6">
        <div
          className="bg-[#E8F5E9] dark:bg-[#1B3D2F] rounded-2xl p-5 flex gap-4 items-start"
          style={{
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          }}
        >
          <img
            src="/images/marshmellow/marshmellow-wave.png"
            alt="MarshMellow waving"
            className="w-20 h-20 flex-shrink-0 object-contain"
          />
          <div className="flex-1 pt-1">
            <p className="font-display font-bold text-lg text-[#2D5A3D] dark:text-[#81C784] mb-1">
              Hey there, explorer!
            </p>
            <p className="text-[#374151] dark:text-[#D1D5DB] text-sm leading-relaxed">
              Welcome to The Ribbit Report! This issue, we're traveling the world to meet incredible frogs...
            </p>
            <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] italic mt-2">
              — MarshMellow
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT CARDS */}
      <section className="px-4 space-y-4">
        {/* DISPATCHES CARD - 3-face collage background */}
        <Link to="/dispatches" className="block group">
          <div
            className="relative h-44 rounded-2xl overflow-hidden transition-all duration-200 ease-out group-hover:-translate-y-1 group-active:scale-[0.98]"
            style={{
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
            }}
          >
            {/* 3-face collage background */}
            <div className="absolute inset-0 flex">
              <div
                className="flex-1 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/images/dispatches/india-resplendent-grass-frog/hero.jpeg)',
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
                  backgroundImage: 'url(/images/dispatches/panama-spiny-headed-treefrog/hero.jpeg)',
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
                    {dispatches.length} adventures from around the world
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
            className="relative h-44 rounded-2xl overflow-hidden transition-all duration-200 ease-out group-hover:-translate-y-1 group-active:scale-[0.98]"
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

            {/* Frog and Toad illustrations in circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Frog circle - left side */}
              <div
                className="w-24 h-24 rounded-full bg-[#E8F5E9] flex items-center justify-center overflow-hidden border-3 border-white/50 -mr-3 z-10"
                style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
              >
                <img
                  src="/images/realstory/frog.png"
                  alt="Frog"
                  className="w-20 h-20 object-contain"
                />
              </div>

              {/* VS badge in center */}
              <div
                className="w-12 h-12 rounded-full bg-[#E85D4C] flex items-center justify-center transform rotate-3 z-20"
                style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
              >
                <span className="font-display font-extrabold text-lg text-white">
                  VS
                </span>
              </div>

              {/* Toad circle - right side */}
              <div
                className="w-24 h-24 rounded-full bg-[#F5E6D3] flex items-center justify-center overflow-hidden border-3 border-white/50 -ml-3 z-10"
                style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
              >
                <img
                  src="/images/realstory/toad.png"
                  alt="Toad"
                  className="w-20 h-20 object-contain"
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
