import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MapPin, Lightbulb, Camera, Notebook } from 'lucide-react';
import { SEO } from '../components/SEO';
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
      <SEO url="/" />

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

        {/* Species caption and photographer credit - bottom left of image */}
        <div className="absolute bottom-24 left-4 flex flex-col gap-1">
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-white text-sm font-medium"
            style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
          >
            <MapPin size={14} className="text-[#F97316]" />
            <span>
              {heroImage.species} | {heroImage.location}
            </span>
          </div>
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-white/90 text-xs"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          >
            <Camera size={12} className="text-white/70" />
            <span>{heroImage.photographer}</span>
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

        {/* FIELD NOTES CARD - Map background with MarshMellow */}
        <Link to="/field-notes/glass-half-full" className="block group">
          <div
            className="relative h-48 rounded-2xl overflow-hidden transition-all duration-200 ease-out group-hover:-translate-y-1 group-active:scale-[0.98]"
            style={{
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
            }}
          >
            {/* Map background */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(/images/fieldnotes/glasshalffull/glasshalffullmap.jpg)',
              }}
            />

            {/* Warm overlay for cohesion */}
            <div className="absolute inset-0 bg-[#3D2E1F]/30" />

            {/* NEW badge */}
            <div className="absolute top-4 left-4 bg-[#2D5A3D] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md z-10">
              <Notebook size={12} />
              New
            </div>

            {/* Philosophical MarshMellow - positioned right */}
            <div className="absolute right-2 bottom-0 w-36 h-36 z-10">
              <img
                src="/images/fieldnotes/glasshalffull/glasshalffullmarshmellow.png"
                alt="MarshMellow looking philosophical"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Dark gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 p-5 flex flex-col justify-end">
              <div className="max-w-[55%]">
                <p className="text-[#D4A574] text-xs font-semibold uppercase tracking-wider mb-1">
                  Field Notes
                </p>
                <h3 className="font-display text-2xl font-bold text-white mb-1">
                  Glass Half Full
                </h3>
                <p className="text-white/90 text-sm">
                  Day 47: A frog with nothing to hide
                </p>
              </div>
            </div>

            {/* Arrow */}
            <div className="absolute right-4 bottom-4 z-10">
              <ChevronRight
                size={28}
                className="text-white/60 group-hover:translate-x-1 transition-transform"
              />
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

        {/* FIELD NOTES - Coming Soon teaser */}
        <div className="bg-gradient-to-r from-[#3D2E1F] to-[#4A3728] rounded-2xl p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#5A4632] flex items-center justify-center flex-shrink-0">
            <Notebook size={22} className="text-[#D4A574]" />
          </div>
          <div className="flex-1">
            <p className="text-[#D4A574] text-[10px] font-bold uppercase tracking-wider mb-0.5">
              Next Field Note
            </p>
            <p className="text-[#E8D5B7] text-sm font-medium">
              The Salamander That's Older Than Dinosaurs
            </p>
            <p className="text-[#B8A082] text-xs mt-0.5">
              Coming soon
            </p>
          </div>
        </div>

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

        {/* MYTH BUSTERS CARD - Field journal background with investigator MarshMellow */}
        <Link to="/myths" className="block group">
          <div
            className="relative h-48 rounded-2xl overflow-hidden transition-all duration-200 ease-out group-hover:-translate-y-1 group-active:scale-[0.98]"
            style={{
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
            }}
          >
            {/* Field journal background */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(/images/mythbusters/mythbusters.jpg)',
              }}
            />

            {/* Warm overlay for cohesion */}
            <div className="absolute inset-0 bg-[#3D2E1F]/25" />

            {/* Investigator MarshMellow - positioned right */}
            <div className="absolute right-2 bottom-0 w-32 h-32 z-10">
              <img
                src="/images/marshmellow/marshmellow-thinking5.png"
                alt="MarshMellow investigating"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Dark gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 p-5 flex flex-col justify-end">
              <div className="max-w-[55%]">
                <p className="text-[#D4A574] text-xs font-semibold uppercase tracking-wider mb-1">
                  Investigate
                </p>
                <h3 className="font-display text-2xl font-bold text-white mb-1">
                  Myth Busters
                </h3>
                <p className="text-white/90 text-sm">
                  {mythBusterCards.length} myths to bust
                </p>
              </div>
            </div>

            {/* Arrow */}
            <div className="absolute right-4 bottom-4 z-10">
              <ChevronRight
                size={28}
                className="text-white/60 group-hover:translate-x-1 transition-transform"
              />
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

        {/* THE REAL STORY CARD - Bold VS battle style */}
        <Link to="/real-story/frogs-vs-toads" className="block group">
          <div
            className="relative h-48 rounded-2xl overflow-hidden transition-all duration-200 ease-out group-hover:-translate-y-1 group-active:scale-[0.98]"
            style={{
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
            }}
          >
            {/* Split background with zoomed specimens */}
            <div className="absolute inset-0 flex">
              {/* Frog side - green tint */}
              <div className="flex-1 relative overflow-hidden bg-[#2D5A3D]">
                <img
                  src="/images/realstory/realstoryfrog.PNG"
                  alt="Frog"
                  className="absolute inset-0 w-full h-full object-cover object-[30%_15%] scale-[2.2] opacity-80"
                />
                <div className="absolute inset-0 bg-[#2D5A3D]/40" />
              </div>
              {/* Toad side - brown tint */}
              <div className="flex-1 relative overflow-hidden bg-[#6B5344]">
                <img
                  src="/images/realstory/realstorytoad.jpg"
                  alt="Toad"
                  className="absolute inset-0 w-full h-full object-cover object-[70%_20%] scale-[2.2] opacity-80"
                />
                <div className="absolute inset-0 bg-[#6B5344]/40" />
              </div>
            </div>

            {/* VS badge in center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-14 h-14 rounded-full bg-[#8B6914] flex items-center justify-center z-20 shadow-xl"
              >
                <span className="font-display font-extrabold text-xl text-white">VS</span>
              </div>
            </div>

            {/* Dark gradient for text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

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
        <div className="text-center mx-auto" style={{ maxWidth: '400px' }}>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Lightbulb size={16} className="text-[#F59E0B]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] dark:text-[#9CA3AF]">
              Did you know?
            </span>
          </div>
          <p className="text-[#4B5563] dark:text-[#D1D5DB] text-sm leading-relaxed">
            {fact.text}
          </p>
        </div>
      </section>
    </div>
  );
}
