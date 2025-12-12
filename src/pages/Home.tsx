import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { MarshMellow } from '../components/ui/MarshMellow';
import { Footer } from '../components/layout/Footer';

export function Home() {
  return (
    <div className="container-app px-4 py-6">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="font-display text-4xl font-bold text-[#2D5A3D] dark:text-[#81C784]">
          The Ribbit Report
        </h1>
        <p className="text-[#6B7280] dark:text-[#9CA3AF] mt-1">
          Issue 1 • 2025
        </p>
      </header>

      {/* MarshMellow Welcome */}
      <section className="mb-8">
        <MarshMellow
          message="Welcome to The Ribbit Report! I'm so excited you're here. This issue, we're traveling the world to meet incredible frogs and the amazing researchers working to protect them. Ready to hop in?"
        />
      </section>

      {/* Dispatches Card */}
      <Link
        to="/dispatches"
        className="block mb-4 group"
      >
        <div className="card relative overflow-hidden hover:shadow-lg transition-shadow">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background: 'linear-gradient(135deg, #2D5A3D 0%, #6B3FA0 50%, #2E6A8E 100%)',
            }}
          />
          <div className="relative p-2">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-display text-2xl font-bold text-[#2D2D2D] dark:text-white">
                  Dispatches
                </h2>
                <p className="text-[#6B7280] dark:text-[#9CA3AF] mt-1">
                  6 researchers, 6 countries
                </p>
                <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                  Field reports from around the world
                </p>
              </div>
              <ChevronRight
                size={28}
                className="text-[#6B7280] dark:text-[#9CA3AF] group-hover:translate-x-1 transition-transform"
              />
            </div>
          </div>
        </div>
      </Link>

      {/* Myth Busters Card */}
      <Link
        to="/myths"
        className="block mb-8 group"
      >
        <div className="card relative overflow-hidden hover:shadow-lg transition-shadow">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background: 'linear-gradient(135deg, #F4B942 0%, #C67B4E 100%)',
            }}
          />
          <div className="relative p-2">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-display text-2xl font-bold text-[#2D2D2D] dark:text-white">
                  Myth Busters
                </h2>
                <p className="text-[#6B7280] dark:text-[#9CA3AF] mt-1">
                  Fact or fiction?
                </p>
                <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                  Bust common myths about frogs
                </p>
              </div>
              <ChevronRight
                size={28}
                className="text-[#6B7280] dark:text-[#9CA3AF] group-hover:translate-x-1 transition-transform"
              />
            </div>
          </div>
        </div>
      </Link>

      {/* Footer */}
      <Footer />
    </div>
  );
}
