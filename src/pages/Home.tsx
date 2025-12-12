import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { MarshMellow } from '../components/ui/MarshMellow';
import { dispatches } from '../data/dispatches';

export function Home() {
  return (
    <div className="container-app px-4 py-6">
      {/* Issue Header */}
      <header className="text-center mb-8">
        <p className="text-xs font-medium text-[#6B7280] dark:text-[#9CA3AF] uppercase tracking-wider mb-1">
          Issue 2 • 2025
        </p>
        <h1 className="font-display text-2xl font-bold text-[#2D2D2D] dark:text-white">
          Postcards from the Field
        </h1>
      </header>

      {/* MarshMellow Welcome */}
      <section className="mb-8">
        <MarshMellow
          message="Welcome to The Ribbit Report! I'm so excited you're here. This issue, we're traveling the world to meet incredible frogs and the amazing researchers working to protect them. Ready to hop in?"
        />
      </section>

      {/* Featured Content */}
      <section className="mb-6">
        <h2 className="font-display text-lg font-bold text-[#2D2D2D] dark:text-white mb-4">
          Featured
        </h2>

        {/* Dispatches Card */}
        <Link to="/dispatches" className="block mb-4 group">
          <div className="card relative overflow-hidden hover:shadow-lg transition-shadow">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                background:
                  'linear-gradient(135deg, #2D5A3D 0%, #6B3FA0 50%, #2E6A8E 100%)',
              }}
            />
            <div className="relative p-2">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-[#2D2D2D] dark:text-white">
                    Dispatches
                  </h3>
                  <p className="text-[#6B7280] dark:text-[#9CA3AF] mt-1">
                    {dispatches.length} adventures from around the world
                  </p>
                </div>
                <ChevronRight
                  size={24}
                  className="text-[#6B7280] dark:text-[#9CA3AF] group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          </div>
        </Link>

        {/* The Real Story Card */}
        <Link to="/real-story/frogs-vs-toads" className="block group">
          <div className="card relative overflow-hidden hover:shadow-lg transition-shadow">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                background: 'linear-gradient(135deg, #4A7B5C 0%, #8B7355 100%)',
              }}
            />
            <div className="relative p-2">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-[#2D2D2D] dark:text-white">
                    The Real Story
                  </h3>
                  <p className="text-[#6B7280] dark:text-[#9CA3AF] mt-1">
                    Frogs vs. Toads
                  </p>
                </div>
                <ChevronRight
                  size={24}
                  className="text-[#6B7280] dark:text-[#9CA3AF] group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}
