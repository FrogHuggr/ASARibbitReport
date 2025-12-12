import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown, X } from 'lucide-react';
import { dispatches } from '../data/dispatches';

// MarshMellow welcome content
const welcomeContent = {
  short: {
    greeting: "Hello, explorers!",
    body: "I'm MarshMellow — your travel buddy through the wide, wonderful world of amphibians! This issue, we're meeting young conservationists protecting frogs across the globe. Ready to hop in?",
    signature: "— MarshMellow",
  },
  full: {
    greeting: "Hello, explorers!",
    paragraphs: [
      "It's me, MarshMellow — your travel buddy through the wide, wonderful world of amphibians! This issue, we're hopping across borders, continents, and cultures to find out just how many stories amphibians can tell.",
      "From ancient myths that made them rain-bringers to scientists studying their secret superpowers, amphibians have always had a way of connecting people and places. And now, through our Postcards from the Field, you'll meet the next generation of explorers — young conservationists who are protecting amphibians in their own countries and proving that passion for wildlife has no borders!",
      "But adventure isn't just out there — it's right where you are. Even your backyard or neighborhood pond holds mysteries waiting to be discovered! Maybe you'll hear a new chorus after rain, or spot tiny tadpoles swimming in the shallows. Every sound, splash, and shadow is part of a much bigger story — one that connects your home to wetlands, forests, and habitats all around the globe.",
      "So grab your explorer's notebook, open your ears, and get ready to experience the world the way an amphibian does — connected, curious, and full of surprises. The adventure starts here, and it starts with you!"
    ],
    signOff: "Hop on,",
    signature: "MarshMellow"
  }
};

// Bottom sheet modal for full letter
function WelcomeModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Scrim */}
      <div
        className="fixed inset-0 bg-black/50 z-50 animate-fade-in"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#1A1A1A] rounded-t-3xl max-h-[85vh] overflow-y-auto animate-slide-up">
        {/* Close button */}
        <div className="sticky top-0 bg-white dark:bg-[#1A1A1A] p-4 flex justify-end border-b border-gray-100 dark:border-gray-800">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 pt-4">
          {/* MarshMellow image */}
          <div className="flex justify-center mb-6">
            <img
              src="/images/marshmellow/marshmellow-wave.png"
              alt="MarshMellow the frog explorer waving hello"
              className="w-28 h-28 object-contain"
            />
          </div>

          {/* Letter content */}
          <h2 className="font-display text-2xl font-bold text-[#2D5A3D] dark:text-[#81C784] mb-4">
            {welcomeContent.full.greeting}
          </h2>

          <div className="space-y-4 text-[#374151] dark:text-[#D1D5DB] leading-relaxed">
            {welcomeContent.full.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Sign off */}
          <div className="mt-6 pt-4">
            <p className="text-[#374151] dark:text-[#D1D5DB] italic">
              {welcomeContent.full.signOff}
            </p>
            <p className="font-display text-lg font-semibold text-[#2D5A3D] dark:text-[#81C784] italic">
              {welcomeContent.full.signature}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export function Home() {
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(false);

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
        <button
          onClick={() => setIsWelcomeOpen(true)}
          className="w-full text-left bg-[#E8F5E9] dark:bg-[#1B3D2F] rounded-2xl p-5 flex gap-4 items-start transition-transform active:scale-[0.99]"
          style={{
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          }}
        >
          <img
            src="/images/marshmellow/marshmellow-wave.png"
            alt="MarshMellow the frog explorer waving hello"
            className="w-20 h-20 flex-shrink-0 object-contain"
          />
          <div className="flex-1 pt-1">
            <p className="font-display font-bold text-lg text-[#2D5A3D] dark:text-[#81C784] mb-1">
              {welcomeContent.short.greeting}
            </p>
            <p className="text-[#374151] dark:text-[#D1D5DB] text-sm leading-relaxed">
              {welcomeContent.short.body}
            </p>
            <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] italic mt-2">
              {welcomeContent.short.signature}
            </p>
            {/* Read more link */}
            <p className="text-sm font-medium text-[#4A7B5C] dark:text-[#81C784] mt-3 flex items-center gap-1">
              Read more <ChevronDown size={16} />
            </p>
          </div>
        </button>
      </section>

      {/* Welcome Modal */}
      <WelcomeModal isOpen={isWelcomeOpen} onClose={() => setIsWelcomeOpen(false)} />

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
