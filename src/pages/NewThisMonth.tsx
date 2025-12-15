import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Sparkles } from 'lucide-react';
import { dispatches } from '../data/dispatches';
import { realStories } from '../data/realStory';
import type { ResearcherSection } from '../data/dispatches';

// Get current month/year for display
const now = new Date();
const currentMonth = now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

// Helper to get researcher from dispatch sections
function getResearcher(dispatch: (typeof dispatches)[0]) {
  const researcherSection = dispatch.sections.find(
    (s): s is ResearcherSection => s.type === 'researcher'
  );
  return researcherSection?.researcher;
}

export function NewThisMonth() {
  // For now, show all dispatches as "new" - later we can filter by dateAdded
  const newDispatches = dispatches.slice(0, 4); // Show latest 4

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

        <h1 className="font-display text-3xl font-bold text-[#2D2D2D] dark:text-white">
          New This Month
        </h1>
        <p className="text-[#6B7280] dark:text-[#9CA3AF] mt-1">
          {currentMonth}
        </p>
      </header>

      {/* Content Sections */}
      <div className="container-app px-4 space-y-8">
        {/* Dispatches Section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={18} className="text-[#F4B942]" />
            <h2 className="font-display text-lg font-bold text-[#2D2D2D] dark:text-white uppercase tracking-wide">
              Dispatches
            </h2>
          </div>

          <div className="space-y-3">
            {newDispatches.map((dispatch) => {
              const researcher = getResearcher(dispatch);
              return (
                <Link
                  key={dispatch.id}
                  to={`/dispatches/${dispatch.id}`}
                  className="flex gap-4 bg-white dark:bg-[#242424] rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Thumbnail */}
                  <img
                    src={dispatch.heroImage.src}
                    alt={dispatch.heroImage.alt}
                    className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
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
                    <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mt-1">
                      {researcher ? `with ${researcher.name}` : dispatch.species.commonName}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Field Notes Section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={18} className="text-[#F4B942]" />
            <h2 className="font-display text-lg font-bold text-[#2D2D2D] dark:text-white uppercase tracking-wide">
              Field Notes
            </h2>
          </div>

          <div className="space-y-3">
            <Link
              to="/field-notes/glass-half-full"
              className="flex gap-4 bg-white dark:bg-[#242424] rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Thumbnail - MarshMellow with green background */}
              <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-[#2D5A3D] to-[#4A7B5C] flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img
                  src="/images/fieldnotes/glasshalffull/glasshalffullmarshmellow.png"
                  alt="MarshMellow"
                  className="w-16 h-16 object-contain"
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
                <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mt-1">
                  A frog with nothing to hide
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* The Real Story Section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={18} className="text-[#F4B942]" />
            <h2 className="font-display text-lg font-bold text-[#2D2D2D] dark:text-white uppercase tracking-wide">
              The Real Story
            </h2>
          </div>

          <div className="space-y-3">
            {realStories.map((story) => (
              <Link
                key={story.id}
                to={`/real-story/${story.id}`}
                className="flex gap-4 bg-white dark:bg-[#242424] rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Thumbnail - split circles for frog vs toad */}
                <div className="w-20 h-20 rounded-lg bg-gradient-to-r from-[#4A7B5C] to-[#8B7355] flex items-center justify-center flex-shrink-0">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#E8F5E9] border-2 border-white overflow-hidden -mr-2">
                      <img
                        src={`${story.images.frog.path}${story.images.frog.file}`}
                        alt="Frog"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#F5E6D3] border-2 border-white overflow-hidden">
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
                  <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mt-1">
                    {story.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Coming Soon Sections */}
        <section className="opacity-60">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="font-display text-lg font-bold text-[#9CA3AF] dark:text-[#6B7280] uppercase tracking-wide">
              More Coming Soon
            </h2>
          </div>
          <p className="text-sm text-[#9CA3AF] dark:text-[#6B7280]">
            Species Spotlight content will appear here as it's added.
          </p>
        </section>
      </div>
    </div>
  );
}
