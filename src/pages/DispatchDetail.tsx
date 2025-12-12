import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, AlertTriangle, Egg, Footprints, EyeOff, Volume2, Droplets, Ruler, Moon, Mountain, Zap, Layers, Heart, User } from 'lucide-react';
import { getDispatchById, type Dispatch, type DispatchSection, type StorySection, type FactsSection, type AlertSection, type ResearcherSection, type OrganizationSection } from '../data/dispatches';
import { CountryStamp } from '../components/ui/CountryStamp';
import { StatusBadge } from '../components/ui/StatusBadge';
import { Footer } from '../components/layout/Footer';

// Map icon names to Lucide components
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  egg: Egg,
  footprints: Footprints,
  'eye-off': EyeOff,
  'volume-2': Volume2,
  droplets: Droplets,
  ruler: Ruler,
  moon: Moon,
  mountain: Mountain,
  zap: Zap,
  layers: Layers,
  heart: Heart,
  'alert-triangle': AlertTriangle,
  user: User,
};

// Get icon component or return null for emoji fallback
function getIconComponent(iconName: string) {
  return iconMap[iconName.toLowerCase()] || null;
}

// Section renderers
function StoryBlock({ section, colors }: { section: StorySection; colors: Dispatch['colors'] }) {
  return (
    <section className="bg-white dark:bg-[#242424] rounded-xl p-5 shadow-sm mb-6">
      <h2
        className="font-display text-2xl font-bold mb-1"
        style={{ color: section.titleColor || colors.primary }}
      >
        {section.title}
      </h2>
      <div
        className="w-16 h-[3px] mb-4"
        style={{ backgroundColor: colors.secondary }}
      />
      <p className="text-[#2D2D2D] dark:text-[#E5E5E5] leading-relaxed mb-4">
        {section.content}
      </p>
      {section.attribution && (
        <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] italic">
          — {section.attribution}
        </p>
      )}
      {section.image && (
        <div className="mt-4 rounded-lg overflow-hidden">
          <img
            src={section.image.src}
            alt={section.image.alt}
            className="w-full h-auto"
          />
          {(section.image.caption || section.image.credit) && (
            <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mt-2 italic">
              {section.image.caption}
              {section.image.credit && <span> Photo: {section.image.credit}</span>}
            </p>
          )}
        </div>
      )}
    </section>
  );
}

// Rotating background colors for fact cards
const factCardColors = [
  '#FDF8E8', // warm cream
  '#F0F7F1', // soft sage
  '#FFF8F0', // soft peach
  '#F0F4F8', // soft blue
];

function FactsBlock({ section, colors }: { section: FactsSection; colors: Dispatch['colors'] }) {
  return (
    <section className="mb-6">
      <h2
        className="font-display text-2xl font-bold mb-1 px-0"
        style={{ color: section.titleColor || colors.primary }}
      >
        {section.title}
      </h2>
      <div
        className="w-16 h-[3px] mb-4"
        style={{ backgroundColor: colors.secondary }}
      />

      {/* Horizontal scroll container */}
      <div
        className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {section.facts.map((fact, index) => {
          const IconComponent = fact.iconLibrary !== 'emoji' ? getIconComponent(fact.icon) : null;
          const bgColor = fact.cardColor || factCardColors[index % factCardColors.length];

          return (
            <div
              key={fact.id}
              className="flex-shrink-0 w-40 min-h-[180px] rounded-xl p-4 flex flex-col items-center text-center shadow-sm"
              style={{
                backgroundColor: bgColor,
                scrollSnapAlign: 'start',
              }}
            >
              {/* Icon */}
              <div className="mb-3">
                {IconComponent ? (
                  <IconComponent size={32} style={{ color: fact.accentColor || colors.accent }} />
                ) : (
                  <span className="text-3xl">{fact.icon}</span>
                )}
              </div>

              {/* Fact text */}
              <p className="text-sm text-[#2D2D2D] leading-relaxed">
                {fact.text}
              </p>
            </div>
          );
        })}
      </div>
      <p className="text-xs text-center mt-2" style={{ color: colors.secondary }}>← swipe for more →</p>
    </section>
  );
}

function AlertBlock({ section, colors }: { section: AlertSection; colors: Dispatch['colors'] }) {
  // Determine status color based on context (default to endangered red)
  const statusColor = section.stats?.[0]?.color || '#D32F2F';

  return (
    <section
      className="bg-white dark:bg-[#242424] rounded-xl rounded-l-none p-5 shadow-sm mb-6"
      style={{ borderLeft: `4px solid ${statusColor}` }}
    >
      <div className="flex items-start justify-between mb-4">
        <h2
          className="font-display text-2xl font-bold"
          style={{ color: section.titleColor || colors.primary }}
        >
          {section.title}
        </h2>
        <AlertTriangle size={24} style={{ color: statusColor }} />
      </div>

      {section.stats && section.stats.length > 0 && (
        <div className="text-center mb-4">
          {section.stats.map((stat, idx) => (
            <div key={idx} className="mb-2">
              <span
                className="font-display text-5xl font-bold block"
                style={{ color: stat.color || '#D32F2F' }}
              >
                {stat.value}
              </span>
              <span className="text-[#2D2D2D] dark:text-[#E5E5E5]">
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

  return (
    <section
      className="rounded-xl rounded-l-none p-5 mb-6"
      style={{
        backgroundColor: section.cardColor || colors.cardBackground || '#F7F5F0',
        borderLeft: `5px solid ${section.borderColor || colors.secondary}`,
      }}
    >
      <h2
        className="font-display text-2xl font-bold mb-1"
        style={{ color: section.titleColor || colors.primary }}
      >
        {section.title}
      </h2>
      <div
        className="w-16 h-[3px] mb-4"
        style={{ backgroundColor: colors.secondary }}
      />

      <div className="flex items-start gap-4 mb-4">
        {researcher.photo ? (
          <img
            src={researcher.photo.src}
            alt={researcher.photo.alt}
            className="w-20 h-20 rounded-full flex-shrink-0 object-cover"
          />
        ) : (
          <div
            className="w-20 h-20 rounded-full flex-shrink-0 flex items-center justify-center"
            style={{ backgroundColor: colors.secondary + '40' }}
          >
            <User size={32} style={{ color: colors.primary }} />
          </div>
        )}
        <div className="pt-2">
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
          className="bg-white dark:bg-[#1A1A1A] rounded-r-lg p-4 pl-4 border-l-4 italic text-[#2D2D2D] dark:text-[#E5E5E5]"
          style={{ borderColor: researcher.quote.borderColor || colors.primary }}
        >
          "{researcher.quote.text}"
        </blockquote>
      )}

      {researcher.photo?.credit && (
        <p className="text-xs text-[#9CA3AF] mt-3">
          Photo: {researcher.photo.credit}
        </p>
      )}
    </section>
  );
}

function OrganizationBlock({ section, colors }: { section: OrganizationSection; colors: Dispatch['colors'] }) {
  return (
    <section className="bg-white dark:bg-[#242424] rounded-xl p-5 shadow-sm mb-6">
      <h2
        className="font-display text-2xl font-bold mb-1"
        style={{ color: section.titleColor || colors.primary }}
      >
        {section.title}
      </h2>
      <div
        className="w-16 h-[3px] mb-4"
        style={{ backgroundColor: colors.secondary }}
      />
      <p className="text-[#2D2D2D] dark:text-[#E5E5E5] leading-relaxed mb-4">
        {section.content}
      </p>
      {section.image && (
        <div className="rounded-lg overflow-hidden">
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

        {/* Dynamic Sections */}
        <div className="mt-8">
          {dispatch.sections.map((section) => (
            <SectionRenderer key={section.id} section={section} colors={dispatch.colors} />
          ))}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
