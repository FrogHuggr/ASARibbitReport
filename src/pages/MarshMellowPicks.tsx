import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Quote } from 'lucide-react';
import { dispatches } from '../data/dispatches';
import { realStories } from '../data/realStory';
import type { ResearcherSection } from '../data/dispatches';

// Curated picks with MarshMellow's comments
const marshmellowPicks = [
  {
    type: 'dispatch' as const,
    id: 'india-western-ghats',
    pickQuote: "The most colorful frog we've featured!",
  },
  {
    type: 'realstory' as const,
    id: 'frogs-vs-toads',
    pickQuote: "Everyone asks me this question!",
  },
  {
    type: 'dispatch' as const,
    id: 'peru-lake-junin-frog',
    pickQuote: "Snorkeling for frogs? Yes please!",
  },
  {
    type: 'dispatch' as const,
    id: 'nepal-himalayan-torrent-frog',
    pickQuote: "These little climbers are amazing!",
  },
];

// Helper to get researcher from dispatch sections
function getResearcher(dispatch: (typeof dispatches)[0]) {
  const researcherSection = dispatch.sections.find(
    (s): s is ResearcherSection => s.type === 'researcher'
  );
  return researcherSection?.researcher;
}

export function MarshMellowPicks() {
  return (
    <div className="pb-6">
      {/* Header with MarshMellow */}
      <header className="container-app px-4 pt-4 pb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#2D2D2D] dark:hover:text-white transition-colors mb-4"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </Link>

        {/* MarshMellow hero */}
        <div className="flex items-center gap-4 mb-4">
          <img
            src="/images/marshmellow/marshmellow-wave.png"
            alt="MarshMellow with compass"
            className="w-20 h-20 object-contain"
          />
          <div>
            <h1 className="font-display text-2xl font-bold text-[#2D2D2D] dark:text-white">
              MarshMellow's Picks
            </h1>
            <p className="text-[#6B7280] dark:text-[#9CA3AF] mt-1 italic">
              "These are some of my favorite adventures so far!"
            </p>
          </div>
        </div>
      </header>

      {/* Picks List */}
      <div className="container-app px-4 space-y-4">
        {marshmellowPicks.map((pick) => {
          if (pick.type === 'dispatch') {
            const dispatch = dispatches.find((d) => d.id === pick.id);
            if (!dispatch) return null;
            const researcher = getResearcher(dispatch);

            return (
              <Link
                key={pick.id}
                to={`/dispatches/${dispatch.id}`}
                className="block bg-white dark:bg-[#242424] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Card content */}
                <div className="flex gap-4 p-4">
                  {/* Thumbnail */}
                  <img
                    src={dispatch.heroImage.src}
                    alt={dispatch.heroImage.alt}
                    className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                  />

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 text-xs text-[#6B7280] dark:text-[#9CA3AF] mb-1">
                      <MapPin size={12} />
                      <span>{dispatch.location.country}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-[#2D2D2D] dark:text-white leading-tight">
                      {dispatch.title}
                    </h3>
                    <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mt-1">
                      {researcher ? `with ${researcher.name}` : dispatch.species.commonName}
                    </p>
                  </div>
                </div>

                {/* MarshMellow's comment */}
                <div className="bg-[#E8F5E9] dark:bg-[#1B3D2F] px-4 py-3 flex items-start gap-2">
                  <Quote size={14} className="text-[#2D5A3D] dark:text-[#81C784] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#2D5A3D] dark:text-[#81C784] italic">
                    {pick.pickQuote}
                  </p>
                </div>
              </Link>
            );
          }

          if (pick.type === 'realstory') {
            const story = realStories.find((s) => s.id === pick.id);
            if (!story) return null;

            return (
              <Link
                key={pick.id}
                to={`/real-story/${story.id}`}
                className="block bg-white dark:bg-[#242424] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Card content */}
                <div className="flex gap-4 p-4">
                  {/* Thumbnail - VS split style */}
                  <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 relative">
                    <div className="absolute inset-0 flex">
                      <div className="flex-1 relative overflow-hidden">
                        <img
                          src={`${story.images.frog.path}${story.images.frog.file}`}
                          alt="Frog"
                          className="absolute inset-0 w-full h-full object-cover scale-150"
                        />
                      </div>
                      <div className="flex-1 relative overflow-hidden">
                        <img
                          src={`${story.images.toad.path}${story.images.toad.file}`}
                          alt="Toad"
                          className="absolute inset-0 w-full h-full object-cover scale-150"
                        />
                      </div>
                    </div>
                    {/* VS badge */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-7 h-7 rounded-full bg-[#8B6914] flex items-center justify-center z-10 shadow-md">
                        <span className="font-display font-bold text-[10px] text-white">VS</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] mb-1">
                      The Real Story
                    </p>
                    <h3 className="font-display font-bold text-lg text-[#2D2D2D] dark:text-white leading-tight">
                      {story.title}
                    </h3>
                    <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mt-1">
                      {story.subtitle}
                    </p>
                  </div>
                </div>

                {/* MarshMellow's comment */}
                <div className="bg-[#E8F5E9] dark:bg-[#1B3D2F] px-4 py-3 flex items-start gap-2">
                  <Quote size={14} className="text-[#2D5A3D] dark:text-[#81C784] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#2D5A3D] dark:text-[#81C784] italic">
                    {pick.pickQuote}
                  </p>
                </div>
              </Link>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}
