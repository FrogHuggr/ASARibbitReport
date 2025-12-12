import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getMythBusterById } from '../data/mythbusters';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Footer } from '../components/layout/Footer';

export function MythBusterDetail() {
  const { id } = useParams<{ id: string }>();
  const myth = id ? getMythBusterById(id) : undefined;

  if (!myth) {
    return (
      <div className="container-app px-4 py-8 text-center">
        <p className="text-[#6B7280] dark:text-[#9CA3AF]">Myth not found</p>
        <Link to="/myths" className="text-[#2D5A3D] dark:text-[#81C784] mt-4 inline-block">
          ← Back to Myth Busters
        </Link>
      </div>
    );
  }

  return (
    <div className="container-app px-4 py-6">
      {/* Back Button */}
      <Link
        to="/myths"
        className="inline-flex items-center gap-2 text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#2D2D2D] dark:hover:text-white transition-colors mb-6"
      >
        <ArrowLeft size={20} />
        <span>Back</span>
      </Link>

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#F4B942] to-[#C67B4E] rounded-2xl p-8 text-center mb-8">
        <span className="text-6xl block mb-4">🐸 vs 🐸</span>
        <h1 className="font-display text-3xl font-bold text-white">
          {myth.title}
        </h1>
        <p className="text-white/90 mt-2 text-lg">
          {myth.question}
        </p>
      </div>

      {/* The Myth */}
      <section className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">❌</span>
          <h2 className="font-display text-2xl font-bold text-[#D32F2F]">
            The Myth
          </h2>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 border-l-4 border-[#D32F2F]">
          <p className="text-[#2D2D2D] dark:text-[#E5E5E5] leading-relaxed">
            {myth.myth}
          </p>
        </div>
      </section>

      {/* The Truth */}
      <section className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">✅</span>
          <h2 className="font-display text-2xl font-bold text-[#43A047]">
            The Truth
          </h2>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 border-l-4 border-[#43A047]">
          <p className="text-[#2D2D2D] dark:text-[#E5E5E5] leading-relaxed">
            {myth.truth}
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-[#E5E7EB] dark:border-[#374151] my-8" />

      {/* Comparison Table */}
      <section className="mb-8">
        <SectionHeader title="Key Differences" />
        <div className="overflow-hidden rounded-xl border border-[#E5E7EB] dark:border-[#374151]">
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-[#F5F5F5] dark:bg-[#2D2D2D]">
            <div className="p-3 font-display font-bold text-sm text-[#6B7280] dark:text-[#9CA3AF]">
              Feature
            </div>
            <div className="p-3 font-display font-bold text-sm text-center text-[#2E6A8E]">
              Frogs
            </div>
            <div className="p-3 font-display font-bold text-sm text-center text-[#C67B4E]">
              Toads
            </div>
          </div>

          {/* Table Rows */}
          {myth.details.map((detail, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 ${
                index % 2 === 0
                  ? 'bg-white dark:bg-[#1A1A1A]'
                  : 'bg-[#FAFAFA] dark:bg-[#242424]'
              }`}
            >
              <div className="p-3 font-semibold text-sm text-[#2D2D2D] dark:text-white">
                {detail.category}
              </div>
              <div className="p-3 text-sm text-center text-[#2D2D2D] dark:text-[#E5E5E5]">
                {detail.frog}
              </div>
              <div className="p-3 text-sm text-center text-[#2D2D2D] dark:text-[#E5E5E5]">
                {detail.toad}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <hr className="border-[#E5E7EB] dark:border-[#374151] my-8" />

      {/* Why It Matters */}
      <section className="mb-8">
        <SectionHeader title="Why It Matters" />
        <p className="text-[#2D2D2D] dark:text-[#E5E5E5] leading-relaxed">
          {myth.whyItMatters}
        </p>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
