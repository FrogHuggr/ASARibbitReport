import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Notebook } from 'lucide-react';
import { dispatches } from '../data/dispatches';
import { dilemmas } from '../data/wildDecisions';
import { mythBusterCards } from '../data/mythbusters';
import { triggerHaptic } from '../utils/haptics';

export function Explore() {
  const navigate = useNavigate();

  // Navigate to a random dispatch
  const handleSurpriseMe = () => {
    triggerHaptic('medium');
    const randomIndex = Math.floor(Math.random() * dispatches.length);
    const randomDispatch = dispatches[randomIndex];
    navigate(`/dispatches/${randomDispatch.id}`);
  };

  return (
    <div className="pb-10">
      {/* Header with MarshMellow */}
      <header className="px-4 pt-6 pb-6">
        <div className="flex items-center gap-4">
          <img
            src="/images/marshmellow/marshmellow-thinking4.png"
            alt="MarshMellow thinking"
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
        {/* MEET MARSHMELLOW - Full width, adventure map theme */}
        <Link to="/meet-marshmellow" className="block group">
          <div
            className="relative h-44 rounded-2xl overflow-hidden transition-all duration-200 ease-out group-hover:-translate-y-1 group-active:scale-[0.98]"
            style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}
          >
            {/* Background image - Adventures of MarshMellow */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(/images/explore/adventuresofmarshmellow.jpg)',
              }}
            />
            {/* Minimal gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-white/70 text-xs font-medium uppercase tracking-wider mb-0.5">
                    Your Guide
                  </p>
                  <h3 className="font-display text-xl font-bold text-white mb-0.5">
                    Meet MarshMellow
                  </h3>
                  <p className="text-white/90 text-sm">
                    The adventurer behind The Ribbit Report
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
            {/* Dark gradient for text */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

            {/* Passport MarshMellow - positioned right */}
            <div className="absolute right-1 bottom-0 w-28 h-28 z-10">
              <img
                src="/images/marshmellow/marshmellow-stampcollecting.png"
                alt="MarshMellow with passport"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              <div className="max-w-[60%]">
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
            </div>

            {/* Arrow */}
            <div className="absolute right-3 bottom-3 z-10">
              <ChevronRight
                size={24}
                className="text-white/60 group-hover:translate-x-1 transition-transform"
              />
            </div>
          </div>
        </Link>

        {/* Row 1: Wild Decisions + Myth Busters */}
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

          {/* MYTH BUSTERS - Field journal background with investigator MarshMellow */}
          <Link to="/myths" className="block group">
            <div
              className="relative h-40 rounded-2xl overflow-hidden transition-all duration-200 ease-out group-hover:-translate-y-1 group-active:scale-[0.98]"
              style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}
            >
              {/* Field journal background */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/images/mythbusters/mythbusters.jpg)',
                }}
              />


              {/* Investigator MarshMellow - positioned right */}
              <div className="absolute right-0 bottom-0 w-24 h-24 z-10">
                <img
                  src="/images/marshmellow/marshmellow-thinking5.png"
                  alt="MarshMellow investigating"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Dark gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-3 flex flex-col justify-end">
                <p className="text-[#D4A574] text-[10px] font-semibold uppercase tracking-wider mb-0.5">
                  Investigate
                </p>
                <h3 className="font-display text-lg font-bold text-white leading-tight">
                  Myth Busters
                </h3>
                <p className="text-white/80 text-xs mt-0.5">
                  {mythBusterCards.length} myths to bust
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* FIELD NOTES - Full width, map background with MarshMellow */}
        <Link to="/field-notes/glass-half-full" className="block group">
          <div
            className="relative h-40 rounded-2xl overflow-hidden transition-all duration-200 ease-out group-hover:-translate-y-1 group-active:scale-[0.98]"
            style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}
          >
            {/* Map background */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(/images/fieldnotes/glasshalffull/glasshalffullmap.jpg)',
              }}
            />


            {/* NEW badge */}
            <div className="absolute top-3 left-3 bg-[#2D5A3D] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full flex items-center gap-1 z-10">
              <Notebook size={12} />
              New
            </div>

            {/* Philosophical MarshMellow - positioned right */}
            <div className="absolute right-2 bottom-0 w-28 h-28 z-10">
              <img
                src="/images/fieldnotes/glasshalffull/glasshalffullmarshmellow.png"
                alt="MarshMellow looking philosophical"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Dark gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              <div className="max-w-[55%]">
                <p className="text-[#D4A574] text-xs font-semibold uppercase tracking-wider mb-1">
                  Field Notes
                </p>
                <h3 className="font-display text-xl font-bold text-white mb-0.5">
                  Glass Half Full
                </h3>
                <p className="text-white/80 text-sm">
                  Day 58: A frog with nothing to hide
                </p>
              </div>
            </div>

            {/* Arrow */}
            <div className="absolute right-3 bottom-3 z-10">
              <ChevronRight
                size={24}
                className="text-white/60 group-hover:translate-x-1 transition-transform"
              />
            </div>
          </div>
        </Link>

        {/* Row 2: Surprise Me + The Real Story */}
        <div className="grid grid-cols-2 gap-4">
          {/* SURPRISE ME - Photo collage from dispatches */}
          <button
            onClick={handleSurpriseMe}
            className="block group w-full text-left"
          >
            <div
              className="relative h-40 rounded-2xl overflow-hidden transition-all duration-200 ease-out group-hover:-translate-y-1 group-active:scale-[0.98]"
              style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}
            >
              {/* Photo collage grid */}
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                <div className="relative overflow-hidden">
                  <img
                    src="/images/dispatches/ghana-afiabirago-puddle-frog/detail.jpeg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="relative overflow-hidden">
                  <img
                    src="/images/dispatches/india-resplendent-grass-frog/detail.jpg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="relative overflow-hidden">
                  <img
                    src="/images/dispatches/nepal-mahabharat-torrent-frog/detail.jpeg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="relative overflow-hidden">
                  <img
                    src="/images/dispatches/panama-spiny-headed-treefrog/detail.jpg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>


              {/* Dark gradient for text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

              {/* MarshMellow pointing */}
              <div className="absolute right-0 bottom-0 w-28 h-28 z-10 group-hover:scale-105 transition-transform">
                <img
                  src="/images/marshmellow/marshmellow-map-pointing.png"
                  alt="MarshMellow pointing the way"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-3 flex flex-col justify-end">
                <div className="max-w-[55%]">
                  <h3 className="font-display text-lg font-bold text-white leading-tight">
                    Surprise Me!
                  </h3>
                  <p className="text-white/80 text-xs mt-0.5">
                    Random adventure
                  </p>
                </div>
              </div>
            </div>
          </button>

          {/* THE REAL STORY - Bold VS battle style */}
          <Link to="/real-story/frogs-vs-toads" className="block group">
            <div
              className="relative h-40 rounded-2xl overflow-hidden transition-all duration-200 ease-out group-hover:-translate-y-1 group-active:scale-[0.98]"
              style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}
            >
              {/* Split background with zoomed specimens */}
              <div className="absolute inset-0 flex">
                {/* Frog side */}
                <div className="flex-1 relative overflow-hidden">
                  <img
                    src="/images/realstory/realstoryfrog.png"
                    alt="Frog"
                    className="absolute inset-0 w-full h-full object-cover object-[70%_30%] scale-[1.8]"
                  />
                </div>
                {/* Toad side */}
                <div className="flex-1 relative overflow-hidden">
                  <img
                    src="/images/realstory/realstorytoad.png"
                    alt="Toad"
                    className="absolute inset-0 w-full h-full object-cover object-[70%_30%] scale-[1.8]"
                  />
                </div>
              </div>

              {/* Diagonal divider with VS */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-9 h-9 rounded-full bg-[#8B6914] flex items-center justify-center z-20 shadow-lg"
                >
                  <span className="font-display font-extrabold text-xs text-white">VS</span>
                </div>
              </div>

              {/* Dark gradient for text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

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
        </div>

        {/* CONSERVATION STATUS - Full width, photo background */}
        <Link to="/conservation-status" className="block group">
          <div
            className="relative h-36 rounded-2xl overflow-hidden transition-all duration-200 ease-out group-hover:-translate-y-1 group-active:scale-[0.98]"
            style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}
          >
            {/* Background image - Glass frog */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(/images/explore/conservationstatus-explore.jpg)',
              }}
            />
            {/* Subtle gradient - just at the bottom for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-0.5">
                    Conservation Status
                  </h3>
                  <p className="text-white/90 text-sm">
                    Understanding the IUCN Red List
                  </p>
                  <p className="text-white/80 text-xs mt-1">
                    41% of amphibians at risk
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

        {/* Row 3: Coming Soon - Species Files + Conservation Toolkit */}
        <div className="grid grid-cols-2 gap-4">
          {/* SPECIES FILES - Coming Soon - Classified dossier aesthetic */}
          <div
            className="relative h-40 rounded-2xl overflow-hidden"
            style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
          >
            {/* Aged paper/manila folder background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F5E6D3] via-[#E8D5B7] to-[#D4C4A8] dark:from-[#3D3528] dark:via-[#32291E] dark:to-[#2A2318]" />

            {/* Subtle paper texture lines */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-3 right-3 h-px bg-[#8B7355]" />
              <div className="absolute top-8 left-3 right-3 h-px bg-[#8B7355]" />
              <div className="absolute top-12 left-3 w-16 h-px bg-[#8B7355]" />
            </div>

            {/* Classified stamp effect */}
            <div className="absolute top-3 right-3 -rotate-12">
              <div className="border-2 border-[#8B4513] dark:border-[#D97706]/50 rounded px-2 py-0.5">
                <span className="text-[8px] font-bold uppercase tracking-wider text-[#8B4513] dark:text-[#D97706]/70">
                  Coming Soon
                </span>
              </div>
            </div>

            {/* Detective MarshMellow - positioned right */}
            <div className="absolute right-0 bottom-0 w-24 h-24 z-10">
              <img
                src="/images/marshmellow/marshmellow-detective.png"
                alt="MarshMellow detective"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-3 flex flex-col justify-end">
              <div className="max-w-[55%]">
                <h3 className="font-display text-lg font-bold text-[#5D4E37] dark:text-[#D4C4A8] leading-tight">
                  Species Files
                </h3>
                <p className="text-[#8B7355] dark:text-[#A89880] text-xs mt-0.5">
                  Classified dossiers
                </p>
              </div>
            </div>
          </div>

          {/* CONSERVATION TOOLKIT - Coming Soon - Blueprint aesthetic */}
          <div
            className="relative h-40 rounded-2xl overflow-hidden"
            style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
          >
            {/* Blueprint background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A5F] via-[#1A3352] to-[#152945] dark:from-[#0F1F33] dark:via-[#0D1A2B] dark:to-[#0A1422]" />

            {/* Blueprint grid pattern */}
            <div className="absolute inset-0 opacity-20">
              {/* Vertical lines */}
              <div className="absolute top-0 bottom-0 left-4 w-px bg-[#60A5FA]" />
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[#60A5FA]" />
              <div className="absolute top-0 bottom-0 right-4 w-px bg-[#60A5FA]" />
              {/* Horizontal lines */}
              <div className="absolute left-0 right-0 top-4 h-px bg-[#60A5FA]" />
              <div className="absolute left-0 right-0 top-1/2 h-px bg-[#60A5FA]" />
              <div className="absolute left-0 right-0 bottom-12 h-px bg-[#60A5FA]" />
            </div>

            {/* Coming Soon stamp */}
            <div className="absolute top-3 right-3 -rotate-12">
              <div className="border-2 border-[#60A5FA]/60 rounded px-2 py-0.5">
                <span className="text-[8px] font-bold uppercase tracking-wider text-[#60A5FA]/80">
                  Coming Soon
                </span>
              </div>
            </div>

            {/* Scientist MarshMellow - positioned right */}
            <div className="absolute right-0 bottom-0 w-24 h-24 z-10">
              <img
                src="/images/marshmellow/marshmellow-scientist.png"
                alt="MarshMellow scientist"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-3 flex flex-col justify-end">
              <div className="max-w-[55%]">
                <h3 className="font-display text-lg font-bold text-white leading-tight">
                  Conservation Toolkit
                </h3>
                <p className="text-[#93C5FD] text-xs mt-0.5">
                  How scientists save species
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
