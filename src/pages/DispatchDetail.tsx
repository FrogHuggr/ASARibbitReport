import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin } from 'lucide-react';
import { getDispatchById } from '../data/dispatches';
import { CountryStamp } from '../components/ui/CountryStamp';
import { StatusBadge } from '../components/ui/StatusBadge';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Footer } from '../components/layout/Footer';

export function DispatchDetail() {
  const { id } = useParams<{ id: string }>();
  const dispatch = id ? getDispatchById(id) : undefined;

  if (!dispatch) {
    return (
      <div className="container-app px-4 py-8 text-center">
        <p className="text-[#6B7280] dark:text-[#9CA3AF]">Dispatch not found</p>
        <Link to="/dispatches" className="text-[#2D5A3D] dark:text-[#81C784] mt-4 inline-block">
          ← Back to Dispatches
        </Link>
      </div>
    );
  }

  const hasHeroImage = !!dispatch.heroImage;
  const hasResearcherPhoto = !!dispatch.researcher.photo;

  return (
    <div className="pb-6">
      {/* Back Button */}
      <div className="container-app px-4 py-4">
        <Link
          to="/dispatches"
          className="inline-flex items-center gap-2 text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#2D2D2D] dark:hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </Link>
      </div>

      {/* Hero Image Area */}
      {hasHeroImage ? (
        <div className="w-full aspect-[4/3] overflow-hidden">
          <img
            src={dispatch.heroImage}
            alt={dispatch.commonName}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div
          className="w-full aspect-[4/3] flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${dispatch.palette.primary} 0%, ${dispatch.palette.secondary} 100%)`,
          }}
        >
          <span className="text-9xl opacity-50">🐸</span>
        </div>
      )}

      {/* Content */}
      <div className="container-app px-4">
        {/* Title Block */}
        <div className="flex items-start justify-between gap-4 mt-6 mb-4">
          <div>
            <h1
              className="font-display text-3xl font-bold leading-tight"
              style={{ color: dispatch.palette.primary }}
            >
              {dispatch.title}
            </h1>
            <p className="text-xl text-[#2D2D2D] dark:text-[#E5E5E5] mt-1">
              {dispatch.commonName}
            </p>
          </div>
          <CountryStamp country={dispatch.country} primaryColor={dispatch.palette.primary} />
        </div>

        {/* Location & Status */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="flex items-center gap-1.5 text-[#6B7280] dark:text-[#9CA3AF]">
            <MapPin size={18} />
            <span>{dispatch.region}, {dispatch.country}</span>
          </div>
          <StatusBadge status={dispatch.iucnStatus} label={dispatch.iucnLabel} />
        </div>

        {/* Divider */}
        <hr className="border-[#E5E7EB] dark:border-[#374151] my-6" />

        {/* Why It's Special */}
        <section className="mb-8">
          <SectionHeader title="Why It's Special" color={dispatch.palette.primary} />
          <p className="text-[#2D2D2D] dark:text-[#E5E5E5] leading-relaxed">
            {dispatch.whySpecial}
          </p>
        </section>

        {/* Detail Image (if available) */}
        {dispatch.detailImage && (
          <div className="mb-8 rounded-xl overflow-hidden">
            <img
              src={dispatch.detailImage}
              alt={`${dispatch.commonName} detail`}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Divider */}
        <hr className="border-[#E5E7EB] dark:border-[#374151] my-6" />

        {/* Fun Facts */}
        <section className="mb-8">
          <SectionHeader title="Fun Facts" color={dispatch.palette.primary} />
          <div className="space-y-4">
            {dispatch.funFacts.map((fact, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">{fact.icon}</span>
                <p className="text-[#2D2D2D] dark:text-[#E5E5E5]">{fact.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <hr className="border-[#E5E7EB] dark:border-[#374151] my-6" />

        {/* Meet the Researcher */}
        <section className="mb-8">
          <SectionHeader title="Meet the Researcher" color={dispatch.palette.primary} />
          <div className="flex items-start gap-4">
            {/* Researcher Photo */}
            {hasResearcherPhoto ? (
              <img
                src={dispatch.researcher.photo}
                alt={dispatch.researcher.name}
                className="w-20 h-20 rounded-xl flex-shrink-0 object-cover"
              />
            ) : (
              <div
                className="w-20 h-20 rounded-xl flex-shrink-0 flex items-center justify-center text-3xl"
                style={{ backgroundColor: dispatch.palette.secondary + '40' }}
              >
                👩‍🔬
              </div>
            )}
            <div>
              <p className="font-display font-bold text-lg text-[#2D2D2D] dark:text-white">
                {dispatch.researcher.name}
              </p>
              <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                {dispatch.researcher.organization}
              </p>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="mt-4 pl-4 border-l-4 italic text-[#6B7280] dark:text-[#9CA3AF]" style={{ borderColor: dispatch.palette.primary }}>
            "{dispatch.researcher.quote}"
          </blockquote>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
