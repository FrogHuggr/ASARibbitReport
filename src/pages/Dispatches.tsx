import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { dispatches } from '../data/dispatches';
import type { ResearcherSection } from '../data/dispatches';

// Helper to get researcher from dispatch sections
function getResearcher(dispatch: (typeof dispatches)[0]) {
  const researcherSection = dispatch.sections.find(
    (s): s is ResearcherSection => s.type === 'researcher'
  );
  return researcherSection?.researcher;
}

export function Dispatches() {
  return (
    <div className="pb-6">
      {/* Header */}
      <header className="container-app px-4 pt-6 pb-8">
        <h1 className="font-display text-3xl font-bold text-[#2D2D2D] dark:text-white">
          Dispatches
        </h1>
        <p className="text-[#6B7280] dark:text-[#9CA3AF] mt-2">
          {dispatches.length} adventures and counting...
        </p>
      </header>

      {/* Grid of Cards */}
      <section className="container-app px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {dispatches.map((dispatch) => {
            const researcher = getResearcher(dispatch);
            return (
              <Link
                key={dispatch.id}
                to={`/dispatches/${dispatch.id}`}
                className="group block rounded-2xl overflow-hidden bg-white dark:bg-[#242424] shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Hero Image - 3:2 aspect ratio */}
                <div className="aspect-[3/2] overflow-hidden relative">
                  <img
                    src={dispatch.heroImage.src}
                    alt={dispatch.heroImage.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* IUCN Status Badge */}
                  <div
                    className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-bold text-white"
                    style={{
                      backgroundColor:
                        dispatch.iucnStatus.code === 'CR'
                          ? '#D32F2F'
                          : dispatch.iucnStatus.code === 'EN'
                            ? '#E65100'
                            : dispatch.iucnStatus.code === 'VU'
                              ? '#F9A825'
                              : dispatch.iucnStatus.code === 'NT'
                                ? '#7CB342'
                                : '#4CAF50',
                    }}
                  >
                    {dispatch.iucnStatus.code}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4">
                  {/* Country with pin */}
                  <div className="flex items-center gap-1.5 text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-2">
                    <MapPin size={14} className="flex-shrink-0" />
                    <span>{dispatch.location.country}</span>
                  </div>

                  {/* Species Name */}
                  <h3 className="font-display font-bold text-lg text-[#2D2D2D] dark:text-white leading-tight">
                    {dispatch.species.commonName}
                  </h3>
                  <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] italic mb-2">
                    {dispatch.species.scientificName}
                  </p>

                  {/* Fun Title */}
                  <p className="text-sm font-medium text-[#4B5563] dark:text-[#D1D5DB] mb-3">
                    "{dispatch.title}"
                  </p>

                  {/* Researcher */}
                  {researcher && (
                    <div className="flex items-center gap-2 pt-3 border-t border-gray-100 dark:border-gray-700">
                      {researcher.photo && (
                        <img
                          src={researcher.photo.src}
                          alt={researcher.name}
                          className="w-7 h-7 rounded-full object-cover flex-shrink-0"
                        />
                      )}
                      <span className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">
                        with <span className="font-medium">{researcher.name}</span>
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            );
          })}

          {/* Coming Soon Teaser Card */}
          <div className="group block rounded-2xl overflow-hidden bg-gradient-to-br from-[#E8F5E9] via-[#FFF8E1] to-[#E3F2FD] dark:from-[#1B3D2F] dark:via-[#3D3520] dark:to-[#1A3A4A] shadow-sm border-2 border-dashed border-[#4CAF50]/40 dark:border-[#8FBC8F]/40">
            {/* Placeholder Image Area */}
            <div className="aspect-[3/2] overflow-hidden relative flex items-center justify-center bg-gradient-to-br from-[#4CAF50]/10 to-[#2D5A3D]/10 dark:from-[#4CAF50]/5 dark:to-[#2D5A3D]/5">
              {/* Animated question marks */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl font-display font-bold text-[#4CAF50]/30 dark:text-[#8FBC8F]/30 animate-bounce">
                  ?
                </div>
              </div>
              {/* Mystery frog silhouette */}
              <div className="relative z-10 w-24 h-24 rounded-full bg-[#2D5A3D]/20 dark:bg-[#8FBC8F]/20 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-16 h-16 text-[#2D5A3D]/40 dark:text-[#8FBC8F]/40">
                  <ellipse cx="50" cy="55" rx="35" ry="30" fill="currentColor" />
                  <circle cx="35" cy="35" r="12" fill="currentColor" />
                  <circle cx="65" cy="35" r="12" fill="currentColor" />
                  <ellipse cx="30" cy="80" rx="10" ry="6" fill="currentColor" />
                  <ellipse cx="70" cy="80" rx="10" ry="6" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-4 text-center">
              <div className="inline-flex items-center gap-1.5 text-sm text-[#4CAF50] dark:text-[#8FBC8F] mb-2 font-medium">
                <MapPin size={14} className="flex-shrink-0 animate-pulse" />
                <span>Destination Unknown</span>
              </div>

              <h3 className="font-display font-bold text-lg text-[#2D2D2D] dark:text-white leading-tight">
                Coming Soon!
              </h3>
              <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] italic mb-2">
                A new adventure awaits...
              </p>

              <p className="text-sm font-medium text-[#4B5563] dark:text-[#D1D5DB] mb-3">
                "Which amphibian will we meet next?"
              </p>

              {/* Mystery researcher */}
              <div className="flex items-center justify-center gap-2 pt-3 border-t border-gray-100 dark:border-gray-700">
                <div className="w-7 h-7 rounded-full bg-[#2D5A3D]/20 dark:bg-[#8FBC8F]/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-[#2D5A3D] dark:text-[#8FBC8F]">?</span>
                </div>
                <span className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">
                  with <span className="font-medium">a new explorer</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
