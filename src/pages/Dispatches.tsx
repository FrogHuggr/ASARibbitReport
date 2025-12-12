import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { dispatches } from '../data/dispatches';
import type { ResearcherSection } from '../data/dispatches';
import { Footer } from '../components/layout/Footer';

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
      <header className="container-app px-4 py-6">
        <h1 className="font-display text-3xl font-bold text-[#2D2D2D] dark:text-white">
          Dispatches
        </h1>
        <p className="text-[#6B7280] dark:text-[#9CA3AF] mt-1">
          Field reports from researchers around the world
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
                  <p
                    className="text-sm font-medium mb-3"
                    style={{ color: dispatch.colors.primary }}
                  >
                    {dispatch.title}
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
        </div>
      </section>

      {/* Footer */}
      <div className="container-app px-4 mt-8">
        <Footer />
      </div>
    </div>
  );
}
