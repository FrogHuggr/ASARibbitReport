import { Link } from 'react-router-dom';
import { dispatches } from '../data/dispatches';
import { DispatchCard } from '../components/ui/DispatchCard';
import { Footer } from '../components/layout/Footer';

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

      {/* Horizontal Scroll Section */}
      <section className="mb-8">
        <div className="overflow-x-auto hide-scrollbar">
          <div className="flex gap-4 px-4 pb-4" style={{ width: 'max-content' }}>
            {dispatches.map((dispatch) => (
              <DispatchCard key={dispatch.id} dispatch={dispatch} />
            ))}
          </div>
        </div>
        <p className="text-center text-sm text-[#6B7280] dark:text-[#9CA3AF] mt-2">
          ← swipe for more →
        </p>
      </section>

      {/* List View */}
      <section className="container-app px-4">
        <h2 className="font-display text-xl font-bold text-[#2D2D2D] dark:text-white mb-4">
          All Dispatches
        </h2>
        <div className="space-y-3">
          {dispatches.map((dispatch) => (
            <Link
              key={dispatch.id}
              to={`/dispatches/${dispatch.id}`}
              className="flex items-center gap-4 p-3 rounded-xl bg-white dark:bg-[#242424] shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Color indicator or image */}
              {dispatch.heroImage?.src ? (
                <img
                  src={dispatch.heroImage.src}
                  alt={dispatch.heroImage.alt}
                  className="w-12 h-12 rounded-lg flex-shrink-0 object-cover"
                />
              ) : (
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ backgroundColor: dispatch.colors.primary }}
                >
                  🐸
                </div>
              )}

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="font-display font-bold text-[#2D2D2D] dark:text-white truncate">
                  {dispatch.title}
                </p>
                <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] truncate">
                  {dispatch.species.commonName}
                </p>
                <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">
                  {dispatch.location.displayLocation || `${dispatch.location.region}, ${dispatch.location.country}`}
                </p>
              </div>

              {/* Arrow */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#6B7280] dark:text-[#9CA3AF] flex-shrink-0"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <div className="container-app px-4 mt-8">
        <Footer />
      </div>
    </div>
  );
}
