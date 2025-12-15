import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, TrendingUp } from 'lucide-react';
import { dispatches } from '../data/dispatches';
import { realStories } from '../data/realStory';
import type { ResearcherSection } from '../data/dispatches';

// Manually curated "popular" content with rankings
const popularContent = [
  { type: 'dispatch' as const, id: 'panama-crowned-tree-frog', rank: 1 },
  { type: 'realstory' as const, id: 'frogs-vs-toads', rank: 2 },
  { type: 'fieldnote' as const, id: 'glass-half-full', rank: 3 },
  { type: 'dispatch' as const, id: 'nepal-himalayan-torrent-frog', rank: 4 },
  { type: 'dispatch' as const, id: 'india-western-ghats', rank: 5 },
];

// Helper to get researcher from dispatch sections
function getResearcher(dispatch: (typeof dispatches)[0]) {
  const researcherSection = dispatch.sections.find(
    (s): s is ResearcherSection => s.type === 'researcher'
  );
  return researcherSection?.researcher;
}

export function MostPopular() {
  return (
    <div className="pb-6">
      {/* Header */}
      <header className="container-app px-4 pt-4 pb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#2D2D2D] dark:hover:text-white transition-colors mb-4"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </Link>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#E8F5E9] dark:bg-[#1B3D2F] flex items-center justify-center">
            <TrendingUp size={20} className="text-[#2D5A3D] dark:text-[#81C784]" />
          </div>
          <div>
            <h1 className="font-display text-2xl font-bold text-[#2D2D2D] dark:text-white">
              Most Popular
            </h1>
            <p className="text-[#6B7280] dark:text-[#9CA3AF] text-sm">
              What everyone's exploring
            </p>
          </div>
        </div>
      </header>

      {/* Ranked List */}
      <div className="container-app px-4 space-y-3">
        {popularContent.map((item) => {
          if (item.type === 'dispatch') {
            const dispatch = dispatches.find((d) => d.id === item.id);
            if (!dispatch) return null;
            const researcher = getResearcher(dispatch);

            return (
              <Link
                key={item.id}
                to={`/dispatches/${dispatch.id}`}
                className="flex gap-4 bg-white dark:bg-[#242424] rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Rank Badge */}
                <div className="w-8 h-8 rounded-full bg-[#2D5A3D] flex items-center justify-center flex-shrink-0 self-center">
                  <span className="font-display font-bold text-white text-sm">
                    {item.rank}
                  </span>
                </div>

                {/* Thumbnail */}
                <img
                  src={dispatch.heroImage.src}
                  alt={dispatch.heroImage.alt}
                  className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                />

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 text-xs text-[#6B7280] dark:text-[#9CA3AF] mb-1">
                    <MapPin size={12} />
                    <span>{dispatch.location.country}</span>
                  </div>
                  <h3 className="font-display font-bold text-[#2D2D2D] dark:text-white leading-tight">
                    {dispatch.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mt-0.5">
                    {researcher ? `with ${researcher.name}` : dispatch.species.commonName}
                  </p>
                </div>
              </Link>
            );
          }

          if (item.type === 'realstory') {
            const story = realStories.find((s) => s.id === item.id);
            if (!story) return null;

            return (
              <Link
                key={item.id}
                to={`/real-story/${story.id}`}
                className="flex gap-4 bg-white dark:bg-[#242424] rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Rank Badge */}
                <div className="w-8 h-8 rounded-full bg-[#2D5A3D] flex items-center justify-center flex-shrink-0 self-center">
                  <span className="font-display font-bold text-white text-sm">
                    {item.rank}
                  </span>
                </div>

                {/* Thumbnail - split circles for frog vs toad */}
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-[#4A7B5C] to-[#8B7355] flex items-center justify-center flex-shrink-0">
                  <div className="flex items-center">
                    <div className="w-7 h-7 rounded-full bg-[#E8F5E9] border-2 border-white overflow-hidden -mr-1.5">
                      <img
                        src={`${story.images.frog.path}${story.images.frog.file}`}
                        alt="Frog"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="w-7 h-7 rounded-full bg-[#F5E6D3] border-2 border-white overflow-hidden">
                      <img
                        src={`${story.images.toad.path}${story.images.toad.file}`}
                        alt="Toad"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] mb-1">
                    The Real Story
                  </p>
                  <h3 className="font-display font-bold text-[#2D2D2D] dark:text-white leading-tight">
                    {story.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mt-0.5">
                    {story.subtitle}
                  </p>
                </div>
              </Link>
            );
          }

          if (item.type === 'fieldnote') {
            return (
              <Link
                key={item.id}
                to="/field-notes/glass-half-full"
                className="flex gap-4 bg-white dark:bg-[#242424] rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Rank Badge */}
                <div className="w-8 h-8 rounded-full bg-[#2D5A3D] flex items-center justify-center flex-shrink-0 self-center">
                  <span className="font-display font-bold text-white text-sm">
                    {item.rank}
                  </span>
                </div>

                {/* Thumbnail - MarshMellow with green background */}
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#2D5A3D] to-[#4A7B5C] flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img
                    src="/images/fieldnotes/glasshalffull/glasshalffullmarshmellow.png"
                    alt="MarshMellow"
                    className="w-14 h-14 object-contain"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] mb-1">
                    Field Notes • Day 47
                  </p>
                  <h3 className="font-display font-bold text-[#2D2D2D] dark:text-white leading-tight">
                    Glass Half Full
                  </h3>
                  <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mt-0.5">
                    A frog with nothing to hide
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
