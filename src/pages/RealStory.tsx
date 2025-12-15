import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Droplet,
  Fingerprint,
  ArrowUp,
  Footprints,
  Grape,
  Link as LinkIcon,
  Waves,
  TreeDeciduous,
  Lightbulb,
  MapPin,
  Camera,
} from 'lucide-react';
import { getRealStoryById } from '../data/realStory';
import type { Comparison, FaceOffSection } from '../data/realStory';

// Icon mapping
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  droplet: Droplet,
  fingerprint: Fingerprint,
  'arrow-up': ArrowUp,
  footprints: Footprints,
  grape: Grape,
  link: LinkIcon,
  waves: Waves,
  'tree-deciduous': TreeDeciduous,
};

function getIcon(iconName: string) {
  return iconMap[iconName] || Droplet;
}

// Face-Off Card Component with swipe/tap navigation
function FaceOffCards({
  comparisons,
  frogColor,
  toadColor,
}: {
  comparisons: Comparison[];
  frogColor: { primary: string; secondary: string };
  toadColor: { primary: string; secondary: string };
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const comparison = comparisons[currentIndex];

  const goNext = () => {
    setCurrentIndex(i => (i + 1) % comparisons.length);
  };

  const goPrev = () => {
    setCurrentIndex(i => (i - 1 + comparisons.length) % comparisons.length);
  };

  const FrogIcon = getIcon(comparison.frog.icon);
  const ToadIcon = getIcon(comparison.toad.icon);

  return (
    <div className="space-y-5">
      {/* Category title */}
      <div className="text-center">
        <span className="inline-block px-4 py-1.5 bg-[#F3F4F6] dark:bg-[#2D2D2D] rounded-full font-display font-bold text-xl text-[#2D2D2D] dark:text-white">
          {comparison.category}
        </span>
      </div>

      {/* VS Cards */}
      <div className="relative">
        {/* Navigation arrows */}
        <button
          onClick={goPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 z-10 w-11 h-11 rounded-full bg-white dark:bg-[#2D2D2D] shadow-lg flex items-center justify-center text-[#6B7280] hover:text-[#2D2D2D] dark:hover:text-white hover:scale-110 transition-all"
          aria-label="Previous comparison"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={goNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 z-10 w-11 h-11 rounded-full bg-white dark:bg-[#2D2D2D] shadow-lg flex items-center justify-center text-[#6B7280] hover:text-[#2D2D2D] dark:hover:text-white hover:scale-110 transition-all"
          aria-label="Next comparison"
        >
          <ChevronRight size={28} />
        </button>

        <div className="grid grid-cols-2 gap-3 px-8">
          {/* Frog Card */}
          <div
            className="rounded-2xl p-4 text-center border-2 shadow-md"
            style={{
              backgroundColor: '#E8F5E9',
              borderColor: frogColor.primary,
            }}
          >
            {/* Label */}
            <p
              className="text-xs font-bold uppercase tracking-wider mb-3"
              style={{ color: frogColor.primary }}
            >
              Frog
            </p>
            {/* Icon */}
            <div
              className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center"
              style={{ backgroundColor: frogColor.primary }}
            >
              <FrogIcon size={28} className="text-white" />
            </div>
            {/* Title */}
            <h5
              className="font-display font-bold text-base mb-2"
              style={{ color: frogColor.primary }}
            >
              {comparison.frog.title}
            </h5>
            {/* Description */}
            <p className="text-sm text-[#374151] leading-relaxed">
              {comparison.frog.description}
            </p>
          </div>

          {/* Toad Card */}
          <div
            className="rounded-2xl p-4 text-center border-2 shadow-md"
            style={{
              backgroundColor: '#F5E6D3',
              borderColor: toadColor.primary,
            }}
          >
            {/* Label */}
            <p
              className="text-xs font-bold uppercase tracking-wider mb-3"
              style={{ color: '#6B5344' }}
            >
              Toad
            </p>
            {/* Icon */}
            <div
              className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center"
              style={{ backgroundColor: toadColor.primary }}
            >
              <ToadIcon size={28} className="text-white" />
            </div>
            {/* Title */}
            <h5
              className="font-display font-bold text-base mb-2"
              style={{ color: '#6B5344' }}
            >
              {comparison.toad.title}
            </h5>
            {/* Description */}
            <p className="text-sm text-[#374151] leading-relaxed">
              {comparison.toad.description}
            </p>
          </div>
        </div>
      </div>

      {/* Progress dots and count */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          {comparisons.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all ${
                idx === currentIndex
                  ? 'bg-[#2D5A3D] dark:bg-[#81C784] w-6'
                  : 'bg-[#D1D5DB] dark:bg-[#4B5563] w-2.5'
              }`}
              aria-label={`Go to ${comparisons[idx].category}`}
            />
          ))}
        </div>
        <p className="text-sm text-[#6B7280]">
          {currentIndex + 1} of {comparisons.length}
        </p>
      </div>
    </div>
  );
}

export function RealStory() {
  const { id } = useParams<{ id: string }>();
  const story = id ? getRealStoryById(id) : undefined;

  if (!story) {
    return (
      <div className="container-app px-4 py-8 text-center">
        <p className="text-[#6B7280] dark:text-[#9CA3AF]">Story not found</p>
        <Link to="/" className="text-[#2D5A3D] dark:text-[#81C784] mt-4 inline-block">
          Back to Home
        </Link>
      </div>
    );
  }

  const { frog: frogColor, toad: toadColor } = story.colorPalette;

  return (
    <div className="pb-6">
      {/* Header */}
      <header className="container-app px-4 py-4">
        <Link
          to="/explore"
          className="inline-flex items-center gap-2 text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#2D2D2D] dark:hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </Link>
      </header>

      {/* Hero Section */}
      <section className="container-app px-4 mb-8">
        {/* Title Card */}
        <div className="bg-gradient-to-br from-[#E8F5E9] to-[#FFF8E1] dark:from-[#1B3D2F] dark:to-[#3D3520] rounded-2xl p-6 text-center shadow-sm mb-4">
          <p className="text-sm font-semibold text-[#2D5A3D] dark:text-[#81C784] uppercase tracking-wider mb-2">
            The Real Story
          </p>
          <h1 className="font-display text-4xl font-extrabold text-[#2D2D2D] dark:text-white mb-2">
            {story.title}
          </h1>
          <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF]">{story.subtitle}</p>
        </div>

        {/* Naturalist Specimen Illustrations */}
        <div className="bg-[#F5E6D3] dark:bg-[#3D3528] rounded-2xl p-4 shadow-sm">
          {/* Field guide style header */}
          <p className="text-center text-xs font-semibold text-[#8B6914] dark:text-[#D4A574] uppercase tracking-wider mb-4">
            Meet the Contenders
          </p>

          {/* Specimens side by side */}
          <div className="flex items-start justify-center gap-2">
            {/* Frog specimen */}
            <div className="flex-1 flex flex-col items-center">
              <img
                src="/images/realstory/realstoryfrog.png"
                alt="Wood Frog - Lithobates sylvaticus"
                className="h-32 w-auto object-contain drop-shadow-md mb-3"
              />
              <div className="text-center">
                <p className="font-display font-bold text-sm text-[#2D5A3D] dark:text-[#81C784]">
                  Wood Frog
                </p>
                <p className="text-xs italic text-[#6B7280] dark:text-[#9CA3AF] mb-2">
                  Lithobates sylvaticus
                </p>
                <div className="flex items-center justify-center gap-1 text-[10px] text-[#8B7355] dark:text-[#B8A082]">
                  <MapPin size={10} />
                  <span>North America</span>
                </div>
                <div className="flex items-center justify-center gap-1 text-[10px] text-[#8B7355] dark:text-[#B8A082] mt-0.5">
                  <Camera size={10} />
                  <span>Yves Derry</span>
                </div>
              </div>
            </div>

            {/* VS Badge */}
            <div
              className="w-10 h-10 rounded-full bg-[#8B6914] flex items-center justify-center flex-shrink-0 z-10 mt-12"
              style={{ boxShadow: '0 4px 12px rgba(139, 105, 20, 0.4)' }}
            >
              <span className="font-display font-extrabold text-sm text-white">VS</span>
            </div>

            {/* Toad specimen */}
            <div className="flex-1 flex flex-col items-center">
              <img
                src="/images/realstory/realstorytoad.png"
                alt="Guttural Toad - Sclerophrys gutturalis"
                className="h-32 w-auto object-contain drop-shadow-md mb-3"
              />
              <div className="text-center">
                <p className="font-display font-bold text-sm text-[#6B5344] dark:text-[#D4A574]">
                  Guttural Toad
                </p>
                <p className="text-xs italic text-[#6B7280] dark:text-[#9CA3AF] mb-2">
                  Sclerophrys gutturalis
                </p>
                <div className="flex items-center justify-center gap-1 text-[10px] text-[#8B7355] dark:text-[#B8A082]">
                  <MapPin size={10} />
                  <span>Southern Africa</span>
                </div>
                <div className="flex items-center justify-center gap-1 text-[10px] text-[#8B7355] dark:text-[#B8A082] mt-0.5">
                  <Camera size={10} />
                  <span>Nico Smit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <div className="container-app px-4 space-y-10">
        {story.sections.map((section, index) => {
          if (section.type === 'question') {
            return (
              <section key={index} className="flex gap-3 items-start">
                <img
                  src={`${story.images[section.image].path}${story.images[section.image].file}`}
                  alt={story.images[section.image].alt}
                  className="w-20 h-20 flex-shrink-0"
                />
                <div className="flex-1 bg-[#F3F4F6] dark:bg-[#2D2D2D] rounded-2xl rounded-tl-sm p-4">
                  <p className="text-xs font-semibold text-[#6B7280] dark:text-[#9CA3AF] mb-1">
                    {section.speaker} asks...
                  </p>
                  <p className="text-[#2D2D2D] dark:text-white font-medium italic text-lg">
                    "{section.content}"
                  </p>
                </div>
              </section>
            );
          }

          if (section.type === 'answer') {
            return (
              <section key={index}>
                {/* Section Header with icon */}
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb size={24} className="text-[#2D5A3D] dark:text-[#81C784]" />
                  <h2 className="font-display text-2xl font-bold text-[#2D5A3D] dark:text-[#81C784]">
                    {section.title}
                  </h2>
                </div>
                <div
                  className="w-16 h-1 mb-4"
                  style={{ backgroundColor: frogColor.secondary }}
                />
                <div className="bg-[#E8F5E9] dark:bg-[#1B3D2F] rounded-2xl p-6">
                  {/* The Big Reveal */}
                  <p className="font-display font-bold text-2xl text-[#2D2D2D] dark:text-white mb-4 leading-tight">
                    {section.headline}
                  </p>
                  <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed text-base">
                    {section.content}
                  </p>
                </div>
              </section>
            );
          }

          if (section.type === 'faceOff') {
            const faceOff = section as FaceOffSection;
            return (
              <section key={index}>
                {/* Section Header */}
                <div className="text-center mb-6">
                  <h2 className="font-display text-3xl font-extrabold text-[#2D2D2D] dark:text-white inline-block">
                    {faceOff.title}
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#4A7B5C] to-[#8B7355] mx-auto mt-2 rounded-full" />
                </div>
                <FaceOffCards
                  comparisons={faceOff.comparisons}
                  frogColor={frogColor}
                  toadColor={toadColor}
                />
              </section>
            );
          }

          if (section.type === 'sameTeam') {
            return (
              <section key={index} className="pt-4">
                {/* Visual break - divider */}
                <hr className="border-[#E5E7EB] dark:border-[#374151] mb-8" />

                {/* Section Header */}
                <h2 className="font-display text-2xl font-bold text-[#2D2D2D] dark:text-white mb-1">
                  {section.title}
                </h2>
                <div
                  className="w-16 h-1 mb-4"
                  style={{ backgroundColor: frogColor.secondary }}
                />

                <div className="space-y-5">
                  <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed text-base">
                    {section.content}
                  </p>
                  {/* Conservation Callout */}
                  <div className="bg-[#FFF9E6] dark:bg-[#3D3520] rounded-xl p-5 border-l-4 border-[#F4B942]">
                    <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed">
                      {section.conservation}
                    </p>
                  </div>
                </div>
              </section>
            );
          }

          if (section.type === 'takeaway') {
            return (
              <section
                key={index}
                className="bg-[#F5E6D3] dark:bg-[#3D3528] rounded-2xl p-5 flex items-center gap-4 border border-[#E0C9A8] dark:border-[#5A4632]"
              >
                {/* MarshMellow avatar */}
                <div
                  className="w-24 h-24 rounded-full bg-white dark:bg-[#2D2D2D] flex-shrink-0 flex items-center justify-center overflow-hidden border-2 border-[#D4A574] dark:border-[#8B6914]"
                  style={{
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  }}
                >
                  <img
                    src="/images/marshmellow/marshmellow-thinking4.png"
                    alt="MarshMellow thinking"
                    className="w-20 h-20 object-contain"
                  />
                </div>
                {/* Quote */}
                <div className="flex-1">
                  <p className="text-xs font-semibold text-[#8B6914] dark:text-[#D4A574] uppercase tracking-wider mb-1">
                    {section.speaker}'s Takeaway
                  </p>
                  <p className="font-display font-bold text-lg text-[#4A3728] dark:text-[#E8D5B7] leading-snug">
                    "{section.content}"
                  </p>
                </div>
              </section>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}
