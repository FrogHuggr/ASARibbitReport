import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { dispatches } from '../data/dispatches';
import { dilemmas } from '../data/wildDecisions';
import { mythBusterCards } from '../data/mythbusters';

export function Explore() {
  return (
    <div className="pb-10">
      {/* Header with MarshMellow */}
      <header className="px-4 pt-6 pb-6">
        <div className="flex items-center gap-4">
          <img
            src="/images/marshmellow/marshmellow-wave.png"
            alt="MarshMellow waving"
            className="w-20 h-20 object-contain flex-shrink-0"
          />
          <div>
            <h1 className="font-display text-2xl font-bold text-[#2D2D2D] dark:text-white">
              Explore
            </h1>
            <p className="text-[#6B7280] dark:text-[#9CA3AF] text-sm mt-1">
              Where should we go today?
            </p>
          </div>
        </div>
      </header>

      {/* Visual Card Grid */}
      <section className="px-4 space-y-4">
        {/* DISPATCHES - Full width, photo background */}
        <Link to="/dispatches" className="block group">
          <div
            className="relative h-36 rounded-2xl overflow-hidden transition-all duration-200 ease-out group-hover:-translate-y-1 group-active:scale-[0.98]"
            style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}
          >
            {/* Background image - Ghana field work */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(/images/dispatches/ghana-afiabirago-puddle-frog/field1.jpeg)',
              }}
            />
            {/* Green tint overlay */}
            <div className="absolute inset-0 bg-[#2D5A3D]/60" />
            {/* Dark gradient for text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-0.5">
                    Dispatches
                  </h3>
                  <p className="text-white/90 text-sm">
                    Field reports from Future Leaders
                  </p>
                  <p className="text-white/70 text-xs mt-1">
                    {dispatches.length} stories
                  </p>
                </div>
                <ChevronRight
                  size={24}
                  className="text-white/80 group-hover:translate-x-1 transition-transform flex-shrink-0"
                />
              </div>
            </div>
          </div>
        </Link>

        {/* 2x2 Grid for main content types */}
        <div className="grid grid-cols-2 gap-4">
          {/* WILD DECISIONS - Amber/Orange */}
          <Link to="/wild-decisions" className="block group">
            <div
              className="relative h-40 rounded-2xl overflow-hidden transition-all duration-200 ease-out group-hover:-translate-y-1 group-active:scale-[0.98]"
              style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}
            >
              {/* Background with illustration - salamander under log */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/images/wilddecision/wilddecision3.jpg)',
                }}
              />
              {/* Amber tint overlay */}
              <div className="absolute inset-0 bg-[#D97706]/50" />
              {/* Dark gradient for text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-3 flex flex-col justify-end">
                <h3 className="font-display text-lg font-bold text-white leading-tight">
                  Wild Decisions
                </h3>
                <p className="text-white/80 text-xs mt-0.5">
                  {dilemmas.length} dilemmas
                </p>
              </div>
            </div>
          </Link>

          {/* MYTH BUSTERS - Purple */}
          <Link to="/myths" className="block group">
            <div
              className="relative h-40 rounded-2xl overflow-hidden transition-all duration-200 ease-out group-hover:-translate-y-1 group-active:scale-[0.98]"
              style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}
            >
              {/* Purple gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6]" />

              {/* Question mark pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-2 left-3 text-4xl font-bold text-white">?</div>
                <div className="absolute top-8 right-4 text-2xl font-bold text-white rotate-12">?</div>
                <div className="absolute bottom-12 left-6 text-3xl font-bold text-white -rotate-6">?</div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-3 flex flex-col justify-end">
                <h3 className="font-display text-lg font-bold text-white leading-tight">
                  Myth Busters
                </h3>
                <p className="text-white/80 text-xs mt-0.5">
                  {mythBusterCards.length} myths to bust
                </p>
              </div>
            </div>
          </Link>

          {/* THE REAL STORY - Teal */}
          <Link to="/real-story/frogs-vs-toads" className="block group">
            <div
              className="relative h-40 rounded-2xl overflow-hidden transition-all duration-200 ease-out group-hover:-translate-y-1 group-active:scale-[0.98]"
              style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}
            >
              {/* Split background */}
              <div className="absolute inset-0 flex">
                <div className="flex-1 bg-[#4A7B5C]" />
                <div className="flex-1 bg-[#8B7355]" />
              </div>

              {/* Frog and Toad mini illustrations */}
              <div className="absolute inset-0 flex items-center justify-center -mt-4">
                <div className="w-14 h-14 rounded-full bg-[#E8F5E9] flex items-center justify-center overflow-hidden border-2 border-white/60 -mr-2 z-10">
                  <img
                    src="/images/realstory/frog.png"
                    alt="Frog"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="w-8 h-8 rounded-full bg-[#E85D4C] flex items-center justify-center z-20">
                  <span className="font-display font-extrabold text-xs text-white">VS</span>
                </div>
                <div className="w-14 h-14 rounded-full bg-[#F5E6D3] flex items-center justify-center overflow-hidden border-2 border-white/60 -ml-2 z-10">
                  <img
                    src="/images/realstory/toad.png"
                    alt="Toad"
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>

              {/* Dark gradient for text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-3 flex flex-col justify-end">
                <h3 className="font-display text-lg font-bold text-white leading-tight">
                  The Real Story
                </h3>
                <p className="text-white/80 text-xs mt-0.5">
                  Frogs vs. Toads
                </p>
              </div>
            </div>
          </Link>

          {/* SPECIES SPOTLIGHT - Coming Soon */}
          <div
            className="relative h-40 rounded-2xl overflow-hidden opacity-60"
            style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.05)' }}
          >
            {/* Blue-gray gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#64748B] to-[#475569]" />

            {/* Content */}
            <div className="absolute inset-0 p-3 flex flex-col justify-between">
              <span className="self-start text-[10px] font-semibold uppercase tracking-wider text-white/70 bg-white/20 px-2 py-0.5 rounded">
                Coming Soon
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-white leading-tight">
                  Species Spotlight
                </h3>
                <p className="text-white/70 text-xs mt-0.5">
                  Meet amazing amphibians
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-4 pt-6">
        <hr className="border-[#E5E5E5] dark:border-[#374151]" />
      </div>

      {/* Quick tip or encouragement */}
      <section className="px-4 pt-6">
        <div className="bg-[#F7F5F0] dark:bg-[#1a1a1a] rounded-xl p-4 text-center">
          <p className="text-[#6B7280] dark:text-[#9CA3AF] text-sm">
            New content added regularly. Check back soon!
          </p>
        </div>
      </section>
    </div>
  );
}
