import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Quote, ChevronRight, Calendar } from 'lucide-react';
import { dispatches } from '../data/dispatches';
import type { ResearcherSection } from '../data/dispatches';

// Field notes data (could be moved to a data file later)
const fieldNotes = [
  {
    id: 'salamander-older-than-dinosaurs',
    title: "The Salamander That's Older Than Dinosaurs",
    subtitle: "Some rocks have legs",
    day: 52,
    location: "Yangtze River Basin, China",
    thumbnail: "/images/fieldnotes/salamanderolderthandinosaur/salamanderolderthandinosaursmarshmellow.png",
    mapBackground: "/images/fieldnotes/salamanderolderthandinosaur/salamanderolderthandinosaursmap.jpg",
  },
];

// Curated picks with MarshMellow's comments
const marshmellowPicks = [
  {
    type: 'dispatch' as const,
    id: 'india-western-ghats',
    pickQuote: "The most colorful frog we've featured!",
  },
  {
    type: 'fieldnote' as const,
    id: 'salamander-older-than-dinosaurs',
    pickQuote: "I SCREAMED. Diego asked if I screamed. I hung up on him.",
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

      {/* Meet MarshMellow Card */}
      <div className="container-app px-4 mb-6">
        <Link to="/meet-marshmellow" className="block group">
          <div
            className="relative h-32 rounded-2xl overflow-hidden transition-all duration-200 ease-out group-hover:-translate-y-1 group-active:scale-[0.98]"
            style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(/images/explore/adventuresofmarshmellow.jpg)',
              }}
            />
            {/* Gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-white/70 text-xs font-medium uppercase tracking-wider mb-0.5">
                    Your Guide
                  </p>
                  <h3 className="font-display text-lg font-bold text-white">
                    Meet MarshMellow
                  </h3>
                  <p className="text-white/80 text-xs">
                    The adventurer behind The Ribbit Report
                  </p>
                </div>
                <ChevronRight
                  size={22}
                  className="text-white/80 group-hover:translate-x-1 transition-transform flex-shrink-0"
                />
              </div>
            </div>
          </div>
        </Link>
      </div>

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

          if (pick.type === 'fieldnote') {
            const fieldNote = fieldNotes.find((f) => f.id === pick.id);
            if (!fieldNote) return null;

            return (
              <Link
                key={pick.id}
                to={`/field-notes/${fieldNote.id}`}
                className="block bg-white dark:bg-[#242424] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Card content */}
                <div className="flex gap-4 p-4">
                  {/* Thumbnail - MarshMellow with map background */}
                  <div className="w-24 h-24 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden relative">
                    <img
                      src={fieldNote.mapBackground}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <img
                      src={fieldNote.thumbnail}
                      alt="MarshMellow"
                      className="w-20 h-20 object-contain relative z-10"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 text-xs text-[#6B7280] dark:text-[#9CA3AF] mb-1">
                      <Calendar size={12} />
                      <span>Field Notes • Day {fieldNote.day}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-[#2D2D2D] dark:text-white leading-tight">
                      {fieldNote.title}
                    </h3>
                    <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mt-1">
                      {fieldNote.subtitle}
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
