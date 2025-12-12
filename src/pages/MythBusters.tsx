import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { mythbusters } from '../data/mythbusters';
import { Footer } from '../components/layout/Footer';

export function MythBusters() {
  return (
    <div className="container-app px-4 py-6">
      {/* Header */}
      <header className="mb-6">
        <h1 className="font-display text-3xl font-bold text-[#2D2D2D] dark:text-white">
          Myth Busters
        </h1>
        <p className="text-[#6B7280] dark:text-[#9CA3AF] mt-1">
          Separating fact from fiction about amphibians
        </p>
      </header>

      {/* Myth Cards */}
      <div className="space-y-4 mb-8">
        {mythbusters.map((myth) => (
          <Link
            key={myth.id}
            to={`/myths/${myth.id}`}
            className="block group"
          >
            <div className="card hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-display text-xl font-bold text-[#2D2D2D] dark:text-white">
                    {myth.title}
                  </h2>
                  <p className="text-[#6B7280] dark:text-[#9CA3AF] mt-1">
                    {myth.question}
                  </p>
                </div>
                <ChevronRight
                  size={24}
                  className="text-[#6B7280] dark:text-[#9CA3AF] group-hover:translate-x-1 transition-transform flex-shrink-0"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Coming Soon */}
      <div className="text-center py-8">
        <p className="text-4xl mb-3">🔍</p>
        <p className="text-[#6B7280] dark:text-[#9CA3AF]">
          More myths coming in future issues!
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
