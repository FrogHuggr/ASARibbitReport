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
    <div className="space-y-4">
      {/* Category indicator */}
      <div className="flex items-center justify-center gap-2">
        {comparisons.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              idx === currentIndex
                ? 'bg-[#2D5A3D] dark:bg-[#81C784] w-6'
                : 'bg-[#D1D5DB] dark:bg-[#4B5563]'
            }`}
            aria-label={`Go to ${comparisons[idx].category}`}
          />
        ))}
      </div>

      {/* Category title */}
      <h4 className="text-center font-display font-bold text-xl text-[#2D2D2D] dark:text-white">
        {comparison.category}
      </h4>

      {/* VS Cards */}
      <div className="relative">
        {/* Navigation arrows */}
        <button
          onClick={goPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 w-10 h-10 rounded-full bg-white dark:bg-[#2D2D2D] shadow-lg flex items-center justify-center text-[#6B7280] hover:text-[#2D2D2D] dark:hover:text-white transition-colors"
          aria-label="Previous comparison"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={goNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 w-10 h-10 rounded-full bg-white dark:bg-[#2D2D2D] shadow-lg flex items-center justify-center text-[#6B7280] hover:text-[#2D2D2D] dark:hover:text-white transition-colors"
          aria-label="Next comparison"
        >
          <ChevronRight size={24} />
        </button>

        <div className="grid grid-cols-2 gap-3 px-6">
          {/* Frog Card */}
          <div
            className="rounded-2xl p-4 text-center"
            style={{ backgroundColor: `${frogColor.primary}15` }}
          >
            <div
              className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
              style={{ backgroundColor: frogColor.primary }}
            >
              <FrogIcon size={24} className="text-white" />
            </div>
            <h5
              className="font-display font-bold text-sm mb-2"
              style={{ color: frogColor.primary }}
            >
              {comparison.frog.title}
            </h5>
            <p className="text-xs text-[#4B5563] dark:text-[#D1D5DB] leading-relaxed">
              {comparison.frog.description}
            </p>
          </div>

          {/* Toad Card */}
          <div
            className="rounded-2xl p-4 text-center"
            style={{ backgroundColor: `${toadColor.primary}15` }}
          >
            <div
              className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
              style={{ backgroundColor: toadColor.primary }}
            >
              <ToadIcon size={24} className="text-white" />
            </div>
            <h5
              className="font-display font-bold text-sm mb-2"
              style={{ color: toadColor.primary }}
            >
              {comparison.toad.title}
            </h5>
            <p className="text-xs text-[#4B5563] dark:text-[#D1D5DB] leading-relaxed">
              {comparison.toad.description}
            </p>
          </div>
        </div>
      </div>

      {/* Swipe hint */}
      <p className="text-center text-xs text-[#9CA3AF]">
        {currentIndex + 1} of {comparisons.length} - Tap arrows to compare
      </p>
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
          to="/"
          className="inline-flex items-center gap-2 text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#2D2D2D] dark:hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </Link>
      </header>

      {/* Hero Section */}
      <section className="container-app px-4 mb-8">
        <div className="bg-gradient-to-br from-[#E8F5E9] to-[#FFF8E1] dark:from-[#1B3D2F] dark:to-[#3D3520] rounded-2xl p-6 text-center">
          {/* VS Images */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-white dark:bg-[#2D2D2D] shadow-lg p-2">
              <img
                src={`${story.images.frog.path}${story.images.frog.file}`}
                alt={story.images.frog.alt}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-display font-bold text-2xl text-[#6B7280] dark:text-[#9CA3AF]">
              VS
            </span>
            <div className="w-24 h-24 rounded-full overflow-hidden bg-white dark:bg-[#2D2D2D] shadow-lg p-2">
              <img
                src={`${story.images.toad.path}${story.images.toad.file}`}
                alt={story.images.toad.alt}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <p className="text-xs font-medium text-[#6B7280] dark:text-[#9CA3AF] uppercase tracking-wider mb-1">
            The Real Story
          </p>
          <h1 className="font-display text-2xl font-bold text-[#2D2D2D] dark:text-white">
            {story.title}
          </h1>
          <p className="text-[#6B7280] dark:text-[#9CA3AF] mt-1">{story.subtitle}</p>
        </div>
      </section>

      {/* Sections */}
      <div className="container-app px-4 space-y-8">
        {story.sections.map((section, index) => {
          if (section.type === 'question') {
            return (
              <section key={index} className="flex gap-4">
                <img
                  src={`${story.images[section.image].path}${story.images[section.image].file}`}
                  alt={story.images[section.image].alt}
                  className="w-16 h-16 flex-shrink-0"
                />
                <div className="flex-1 bg-[#F3F4F6] dark:bg-[#2D2D2D] rounded-2xl rounded-tl-sm p-4">
                  <p className="text-xs font-medium text-[#6B7280] dark:text-[#9CA3AF] mb-1">
                    {section.speaker} asks...
                  </p>
                  <p className="text-[#2D2D2D] dark:text-white font-medium italic">
                    "{section.content}"
                  </p>
                </div>
              </section>
            );
          }

          if (section.type === 'answer') {
            return (
              <section key={index}>
                <h2 className="font-display text-lg font-bold text-[#2D5A3D] dark:text-[#81C784] mb-3">
                  {section.title}
                </h2>
                <div className="bg-[#E8F5E9] dark:bg-[#1B3D2F] rounded-2xl p-5">
                  <p className="font-display font-bold text-xl text-[#2D2D2D] dark:text-white mb-3">
                    {section.headline}
                  </p>
                  <p className="text-[#4B5563] dark:text-[#D1D5DB] leading-relaxed">
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
                <h2 className="font-display text-lg font-bold text-[#2D2D2D] dark:text-white mb-4 text-center">
                  {faceOff.title}
                </h2>
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
              <section key={index}>
                <h2 className="font-display text-lg font-bold text-[#2D2D2D] dark:text-white mb-3">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  <p className="text-[#4B5563] dark:text-[#D1D5DB] leading-relaxed">
                    {section.content}
                  </p>
                  <div className="bg-[#FFF8E1] dark:bg-[#3D3520] rounded-xl p-4 border-l-4 border-[#F4B942]">
                    <p className="text-sm text-[#4B5563] dark:text-[#D1D5DB] leading-relaxed">
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
                className="bg-gradient-to-r from-[#4CAF50] to-[#2D5A3D] rounded-2xl p-5 text-center"
              >
                <p className="text-xs font-medium text-white/80 uppercase tracking-wider mb-2">
                  {section.speaker}'s Takeaway
                </p>
                <p className="font-display font-bold text-lg text-white">
                  "{section.content}"
                </p>
              </section>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}
