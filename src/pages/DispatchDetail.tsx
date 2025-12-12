import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin } from 'lucide-react';
import { getDispatchById, type Dispatch, type DispatchSection, type StorySection, type FactsSection, type AlertSection, type ResearcherSection, type OrganizationSection } from '../data/dispatches';
import { CountryStamp } from '../components/ui/CountryStamp';
import { StatusBadge } from '../components/ui/StatusBadge';
import { Footer } from '../components/layout/Footer';

// Section renderers
function StoryBlock({ section, colors }: { section: StorySection; colors: Dispatch['colors'] }) {
  return (
    <section className="mb-8">
      <h2
        className="font-display text-2xl font-bold mb-4"
        style={{ color: section.titleColor || colors.primary }}
      >
        {section.title}
      </h2>
      <p className="text-[#2D2D2D] dark:text-[#E5E5E5] leading-relaxed mb-4">
        {section.content}
      </p>
      {section.attribution && (
        <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] italic">
          — {section.attribution}
        </p>
      )}
      {section.image && (
        <div className="mt-4 rounded-xl overflow-hidden">
          <img
            src={section.image.src}
            alt={section.image.alt}
            className="w-full h-auto"
          />
          {(section.image.caption || section.image.credit) && (
            <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mt-2">
              {section.image.caption}
              {section.image.credit && <span className="italic"> Photo: {section.image.credit}</span>}
            </p>
          )}
        </div>
      )}
    </section>
  );
}

function FactsBlock({ section, colors }: { section: FactsSection; colors: Dispatch['colors'] }) {
  const isCards = section.displayAs === 'cards';

  return (
    <section className="mb-8">
      <h2
        className="font-display text-2xl font-bold mb-4"
        style={{ color: section.titleColor || colors.primary }}
      >
        {section.title}
      </h2>
      <div className={isCards ? 'space-y-3' : 'space-y-4'}>
        {section.facts.map((fact) => (
          <div
            key={fact.id}
            className={isCards
              ? 'rounded-xl p-4 flex items-start gap-3'
              : 'flex items-start gap-3'
            }
            style={isCards ? {
              backgroundColor: fact.cardColor || colors.factCardBackground || '#F7F5F0',
              borderLeft: `4px solid ${fact.accentColor || colors.secondary}`,
            } : undefined}
          >
            <span className="text-2xl flex-shrink-0">{fact.icon}</span>
            <p className="text-[#2D2D2D] dark:text-[#E5E5E5]">{fact.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AlertBlock({ section, colors }: { section: AlertSection; colors: Dispatch['colors'] }) {
  return (
    <section className="mb-8">
      <h2
        className="font-display text-2xl font-bold mb-4 flex items-center gap-2"
        style={{ color: section.titleColor || colors.primary }}
      >
        {section.icon && <span>{section.icon}</span>}
        {section.title}
      </h2>

      {section.stats && section.stats.length > 0 && (
        <div className="mb-4">
          {section.stats.map((stat, idx) => (
            <div key={idx} className="mb-2">
              <span
                className="font-display text-4xl font-bold"
                style={{ color: stat.color || '#D32F2F' }}
              >
                {stat.value}
              </span>
              <span className="text-[#2D2D2D] dark:text-[#E5E5E5] ml-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      )}

      <p className="text-[#2D2D2D] dark:text-[#E5E5E5] leading-relaxed">
        {section.content}
      </p>
    </section>
  );
}

function ResearcherBlock({ section, colors }: { section: ResearcherSection; colors: Dispatch['colors'] }) {
  const { researcher } = section;
  const isCard = section.displayAs === 'card';

  return (
    <section className="mb-8">
      <h2
        className="font-display text-2xl font-bold mb-4"
        style={{ color: section.titleColor || colors.primary }}
      >
        {section.title}
      </h2>

      <div
        className={isCard ? 'rounded-xl p-4' : ''}
        style={isCard ? {
          backgroundColor: section.cardColor || colors.cardBackground || '#F7F5F0',
          borderLeft: `4px solid ${section.borderColor || colors.secondary}`,
        } : undefined}
      >
        <div className="flex items-start gap-4">
          {researcher.photo ? (
            <img
              src={researcher.photo.src}
              alt={researcher.photo.alt}
              className="w-20 h-20 rounded-xl flex-shrink-0 object-cover"
            />
          ) : (
            <div
              className="w-20 h-20 rounded-xl flex-shrink-0 flex items-center justify-center text-3xl"
              style={{ backgroundColor: colors.secondary + '40' }}
            >
              👩‍🔬
            </div>
          )}
          <div>
            <p className="font-display font-bold text-lg text-[#2D2D2D] dark:text-white">
              {researcher.name}
            </p>
            <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
              {researcher.organization}
            </p>
            {researcher.project && (
              <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                {researcher.project}
              </p>
            )}
          </div>
        </div>

        {researcher.quote && (
          <blockquote
            className="mt-4 pl-4 border-l-4 italic text-[#6B7280] dark:text-[#9CA3AF]"
            style={{ borderColor: researcher.quote.borderColor || colors.primary }}
          >
            "{researcher.quote.text}"
          </blockquote>
        )}

        {researcher.photo?.credit && (
          <p className="text-xs text-[#9CA3AF] mt-2">
            Photo: {researcher.photo.credit}
          </p>
        )}
      </div>
    </section>
  );
}

function OrganizationBlock({ section, colors }: { section: OrganizationSection; colors: Dispatch['colors'] }) {
  return (
    <section className="mb-8">
      <h2
        className="font-display text-2xl font-bold mb-4"
        style={{ color: section.titleColor || colors.primary }}
      >
        {section.title}
      </h2>
      <p className="text-[#2D2D2D] dark:text-[#E5E5E5] leading-relaxed mb-4">
        {section.content}
      </p>
      {section.image && (
        <div className="rounded-xl overflow-hidden">
          <img
            src={section.image.src}
            alt={section.image.alt}
            className="w-full h-auto"
          />
          {section.image.credit && (
            <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mt-2 italic">
              Photo: {section.image.credit}
            </p>
          )}
        </div>
      )}
    </section>
  );
}

function SectionRenderer({ section, colors }: { section: DispatchSection; colors: Dispatch['colors'] }) {
  switch (section.type) {
    case 'story':
      return <StoryBlock section={section} colors={colors} />;
    case 'facts':
      return <FactsBlock section={section} colors={colors} />;
    case 'alert':
      return <AlertBlock section={section} colors={colors} />;
    case 'researcher':
      return <ResearcherBlock section={section} colors={colors} />;
    case 'organization':
      return <OrganizationBlock section={section} colors={colors} />;
    default:
      return null;
  }
}

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

  const stampColor = dispatch.countryStamp?.backgroundColor || dispatch.colors.primary;
  const stampRotation = dispatch.countryStamp?.rotation || 3;

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

      {/* Hero Image */}
      {dispatch.heroImage?.src ? (
        <div className="w-full aspect-[4/3] overflow-hidden relative">
          <img
            src={dispatch.heroImage.src}
            alt={dispatch.heroImage.alt}
            className="w-full h-full object-cover"
          />
          {dispatch.heroImage.credit && (
            <p className="absolute bottom-2 right-2 text-xs text-white/80 bg-black/40 px-2 py-1 rounded">
              Photo: {dispatch.heroImage.credit}
            </p>
          )}
        </div>
      ) : (
        <div
          className="w-full aspect-[4/3] flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${dispatch.colors.primary} 0%, ${dispatch.colors.secondary} 100%)`,
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
              style={{ color: dispatch.colors.primary }}
            >
              {dispatch.title}
            </h1>
            <p className="text-xl text-[#2D2D2D] dark:text-[#E5E5E5] mt-1">
              {dispatch.subtitle || dispatch.species.commonName}
            </p>
            {dispatch.species.scientificName && (
              <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] italic mt-1">
                {dispatch.species.scientificName}
              </p>
            )}
          </div>
          <CountryStamp
            country={dispatch.countryStamp?.label || dispatch.location.country}
            primaryColor={stampColor}
            rotation={stampRotation}
          />
        </div>

        {/* Location & Status */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="flex items-center gap-1.5 text-[#6B7280] dark:text-[#9CA3AF]">
            <MapPin size={18} />
            <span>{dispatch.location.displayLocation || `${dispatch.location.region}, ${dispatch.location.country}`}</span>
          </div>
          <StatusBadge status={dispatch.iucnStatus.code} label={dispatch.iucnStatus.label} />
        </div>

        {/* Divider */}
        <hr className="border-[#E5E7EB] dark:border-[#374151] my-6" />

        {/* Dynamic Sections */}
        {dispatch.sections.map((section) => (
          <div key={section.id}>
            <SectionRenderer section={section} colors={dispatch.colors} />
            <hr className="border-[#E5E7EB] dark:border-[#374151] my-6" />
          </div>
        ))}

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
