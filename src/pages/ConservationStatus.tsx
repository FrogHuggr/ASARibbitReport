import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, X, ExternalLink, ClipboardList, Shield, TrendingUp, ChevronRight, Landmark, Coins, MapPin, BarChart3, Palette } from 'lucide-react';

// Status data with colors and descriptions
const statuses = [
  {
    code: 'EX',
    name: 'Extinct',
    color: '#1a1a1a',
    textColor: '#ffffff',
    description: 'Gone forever. No individuals left anywhere on Earth.',
    example: 'The gastric brooding frog of Australia. It gave birth through its mouth, and now it\'s gone.',
  },
  {
    code: 'EW',
    name: 'Extinct in the Wild',
    color: '#4a4a4a',
    textColor: '#ffffff',
    description: 'Only survives in captivity (zoos, aquariums, breeding programs). None left in nature.',
    example: 'The Kihansi spray toad was once extinct in the wild but is being bred in zoos with hopes of returning it to Tanzania.',
  },
  {
    code: 'CR',
    name: 'Critically Endangered',
    color: '#DC2626',
    textColor: '#ffffff',
    description: 'Extremely high risk of extinction. Needs urgent help.',
    note: 'This is a red alert. Without action, these species could disappear in our lifetime.',
  },
  {
    code: 'EN',
    name: 'Endangered',
    color: '#EA580C',
    textColor: '#ffffff',
    description: 'High risk of extinction. Populations are shrinking fast.',
    note: 'Many of the species in our Dispatches are Endangered. Scientists are racing to understand and protect them.',
  },
  {
    code: 'VU',
    name: 'Vulnerable',
    color: '#F59E0B',
    textColor: '#1a1a1a',
    description: 'At risk and needs monitoring. Not in immediate danger, but heading in the wrong direction.',
    note: 'Think of this as a warning sign. If threats continue, Vulnerable species can become Endangered.',
  },
  {
    code: 'NT',
    name: 'Near Threatened',
    color: '#84CC16',
    textColor: '#1a1a1a',
    description: 'Close to being at risk. Not quite Vulnerable yet, but conservationists are paying attention.',
    note: 'These species are on the watchlist.',
  },
  {
    code: 'LC',
    name: 'Least Concern',
    color: '#22C55E',
    textColor: '#1a1a1a',
    description: 'Doing okay for now. Populations are stable or healthy.',
    note: 'This doesn\'t mean we can ignore them. Habitats can change quickly.',
  },
  {
    code: 'DD',
    name: 'Data Deficient',
    color: '#9CA3AF',
    textColor: '#1a1a1a',
    description: 'We don\'t know enough to decide. More research needed.',
    note: 'Some species are so rare or hard to find that scientists haven\'t been able to count them.',
  },
  {
    code: 'NE',
    name: 'Not Evaluated',
    color: '#D1D5DB',
    textColor: '#1a1a1a',
    description: 'Hasn\'t been assessed yet.',
    note: 'There are thousands of species still waiting to be studied.',
  },
];

export function ConservationStatus() {
  return (
    <div className="pb-10">
      {/* Header with back button */}

      {/* Title section */}
      <section className="px-4 pt-4 pb-6">
        <h1 className="font-display text-2xl font-bold text-[#2D2D2D] dark:text-white mb-4">
          Understanding Conservation Status
        </h1>
        <div className="space-y-3 text-[15px] text-[#2D2D2D] dark:text-[#b3b3b3] leading-relaxed">
          <p>
            When scientists want to know how much trouble a species is in, they use a system called the <span className="font-semibold">IUCN Red List of Threatened Species™</span>. Think of it as a health check for all the world's wildlife.
          </p>
          <p>
            But it's much more than just a list. The Red List tells us where animals live, how many are left, what's threatening them, and what we can do to help. Governments, scientists, and conservation groups around the world use it to decide which species need the most urgent protection.
          </p>
          <p>
            Right now, over <span className="font-semibold">48,600 species</span> are threatened with extinction—including <span className="font-semibold">41% of all amphibians</span>. That's nearly half of all frogs, toads, and salamanders on Earth. The Red List helps us understand the problem so we can work to fix it.
          </p>
        </div>
      </section>

      {/* From Data to Action - Visual Flow */}
      <section className="px-4 pb-6">
        <div className="bg-white dark:bg-[#262626] rounded-2xl p-4 border border-[#E5E7EB] dark:border-[#374151]">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] dark:text-[#9CA3AF] mb-4 text-center">
            From Data to Action
          </p>
          <div className="flex items-center justify-between gap-2">
            {/* Step 1: Assess */}
            <div className="flex-1 text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-[#FEF3C7] dark:bg-[#78350F]/30 flex items-center justify-center">
                <ClipboardList size={22} className="text-[#D97706] dark:text-[#FBBF24]" />
              </div>
              <p className="text-xs font-semibold text-[#2D2D2D] dark:text-white">Assess</p>
              <p className="text-[10px] text-[#6B7280] dark:text-[#9CA3AF] mt-0.5">Scientists study species</p>
            </div>

            <ChevronRight size={16} className="text-[#D1D5DB] dark:text-[#4B5563] flex-shrink-0" />

            {/* Step 2: Protect */}
            <div className="flex-1 text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-[#DBEAFE] dark:bg-[#1E3A8A]/30 flex items-center justify-center">
                <Shield size={22} className="text-[#2563EB] dark:text-[#60A5FA]" />
              </div>
              <p className="text-xs font-semibold text-[#2D2D2D] dark:text-white">Protect</p>
              <p className="text-[10px] text-[#6B7280] dark:text-[#9CA3AF] mt-0.5">Laws & funding follow</p>
            </div>

            <ChevronRight size={16} className="text-[#D1D5DB] dark:text-[#4B5563] flex-shrink-0" />

            {/* Step 3: Recover */}
            <div className="flex-1 text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-[#D1FAE5] dark:bg-[#065F46]/30 flex items-center justify-center">
                <TrendingUp size={22} className="text-[#059669] dark:text-[#34D399]" />
              </div>
              <p className="text-xs font-semibold text-[#2D2D2D] dark:text-white">Recover</p>
              <p className="text-[10px] text-[#6B7280] dark:text-[#9CA3AF] mt-0.5">Species bounce back</p>
            </div>
          </div>
        </div>
      </section>

      {/* Did You Know? Scrollable Cards */}
      <DidYouKnowCards />

      {/* Interactive Visual Scale */}
      <InteractiveScale statuses={statuses} />

      {/* Divider */}
      <div className="px-4">
        <hr className="border-[#E5E5E5] dark:border-[#374151]" />
      </div>

      {/* What MarshMellow Wants You to Know */}
      <section className="px-4 py-6">
        <div className="bg-[#E8F5E9] dark:bg-[#1B3D2F] rounded-2xl p-4">
          <div className="flex gap-4">
            <img
              src="/images/marshmellow/marshmellow-thinking6.png"
              alt="MarshMellow thinking"
              className="w-20 h-20 object-contain flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p className="font-display font-bold text-[#2D5A3D] dark:text-[#81C784] mb-2">
                What MarshMellow Wants You to Know
              </p>
              <div className="space-y-3 text-sm text-[#2D5A3D] dark:text-[#A5D6A7] leading-relaxed">
                <p>
                  Conservation status helps scientists, governments, and communities decide where to focus their efforts. When a species is listed as Critically Endangered, it can unlock funding, legal protection, and attention.
                </p>
                <p>
                  But the list isn't just for scientists. When you see a status in The Ribbit Report, you'll know exactly what's at stake.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IUCN Source Card */}
      <section className="px-4 pt-2 pb-8">
        <a
          href="https://www.iucnredlist.org"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white dark:bg-[#262626] rounded-2xl p-4 border border-[#E5E7EB] dark:border-[#374151] hover:border-[#2D5A3D] dark:hover:border-[#6B9B7A] transition-colors group"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] dark:text-[#9CA3AF]">
                  Official Source
                </span>
              </div>
              <h3 className="font-display font-bold text-[#2D5A3D] dark:text-[#81C784] mb-1 group-hover:underline">
                IUCN Red List of Threatened Species™
              </h3>
              <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
                Explore the world's most comprehensive database of species conservation status. Search for any species and discover what's being done to protect it.
              </p>
            </div>
            <ExternalLink
              size={20}
              className="text-[#9CA3AF] dark:text-[#6B7280] group-hover:text-[#2D5A3D] dark:group-hover:text-[#81C784] flex-shrink-0 mt-1 transition-colors"
            />
          </div>
        </a>
      </section>
    </div>
  );
}

interface Status {
  code: string;
  name: string;
  color: string;
  textColor: string;
  description: string;
  example?: string;
  note?: string;
}

// Interactive scale with staggered fade-in and tap-to-learn
function InteractiveScale({ statuses }: { statuses: Status[] }) {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<Status | null>(null);
  const scaleRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // Intersection observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (scaleRef.current) {
      observer.observe(scaleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Close tooltip when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(e.target as Node)) {
        setSelectedStatus(null);
      }
    };

    if (selectedStatus) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [selectedStatus]);

  const mainStatuses = statuses.slice(0, 7); // EX through LC

  return (
    <section className="px-4 pb-6" ref={scaleRef}>
      <div className="bg-white dark:bg-[#262626] rounded-2xl p-4 border border-[#E5E7EB] dark:border-[#374151]">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] dark:text-[#9CA3AF] mb-3 text-center">
          The Scale
        </p>

        {/* Instruction */}
        <p className="text-xs text-[#9CA3AF] dark:text-[#6B7280] text-center mb-3">
          Tap a badge to learn more
        </p>

        {/* Badges with staggered animation */}
        <div className="flex justify-center gap-1.5 relative">
          {mainStatuses.map((status, index) => (
            <button
              key={status.code}
              onClick={() => setSelectedStatus(selectedStatus?.code === status.code ? null : status)}
              className={`flex-1 max-w-[44px] transition-all duration-300 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              } ${
                selectedStatus?.code === status.code
                  ? 'scale-110 z-10'
                  : 'hover:scale-105'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              <div
                className={`h-10 rounded-lg flex items-center justify-center text-xs font-bold shadow-sm transition-shadow ${
                  selectedStatus?.code === status.code ? 'shadow-lg ring-2 ring-white/50' : ''
                }`}
                style={{ backgroundColor: status.color, color: status.textColor }}
              >
                {status.code}
              </div>
            </button>
          ))}
        </div>

        <div className="flex justify-between mt-2 text-xs font-semibold text-[#6B7280] dark:text-[#9CA3AF]">
          <span>Most concern</span>
          <span>Least concern</span>
        </div>

        {/* Tooltip - appears below the scale on mobile (only for main statuses) */}
        {selectedStatus && mainStatuses.some(s => s.code === selectedStatus.code) && (
          <div
            ref={tooltipRef}
            className="mt-4 bg-[#F7F5F0] dark:bg-[#1a1a1a] rounded-xl p-4 animate-fade-in relative"
          >
            <button
              onClick={() => setSelectedStatus(null)}
              className="absolute top-2 right-2 p-1 text-[#9CA3AF] hover:text-[#6B7280] dark:hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-2 mb-2 pr-6">
              <span
                className="inline-flex items-center justify-center w-8 h-5 rounded text-[10px] font-bold"
                style={{ backgroundColor: selectedStatus.color, color: selectedStatus.textColor }}
              >
                {selectedStatus.code}
              </span>
              <h3 className="font-display font-bold text-[#2D2D2D] dark:text-white">
                {selectedStatus.name}
              </h3>
            </div>

            <p className="text-sm text-[#2D2D2D] dark:text-[#b3b3b3] leading-relaxed mb-2">
              {selectedStatus.description}
            </p>

            {selectedStatus.example && (
              <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] italic">
                Example: {selectedStatus.example}
              </p>
            )}
            {selectedStatus.note && !selectedStatus.example && (
              <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">
                {selectedStatus.note}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Additional statuses below (DD, NE) */}
      <div className="mt-4 bg-white dark:bg-[#262626] rounded-2xl p-4 border border-[#E5E7EB] dark:border-[#374151]">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] dark:text-[#9CA3AF] mb-3 text-center">
          Other Categories
        </p>
        <p className="text-xs text-[#9CA3AF] dark:text-[#6B7280] text-center mb-3">
          Tap to learn more
        </p>
        <div className="flex justify-center gap-3">
          {statuses.slice(7).map((status, index) => (
            <button
              key={status.code}
              onClick={() => setSelectedStatus(selectedStatus?.code === status.code ? null : status)}
              className={`transition-all duration-300 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              } ${
                selectedStatus?.code === status.code
                  ? 'scale-110'
                  : 'hover:scale-105'
              }`}
              style={{
                transitionDelay: isVisible ? `${(index + 7) * 100}ms` : '0ms',
              }}
            >
              <div
                className={`w-12 h-10 rounded-lg flex items-center justify-center text-xs font-bold shadow-sm transition-shadow ${
                  selectedStatus?.code === status.code ? 'shadow-lg ring-2 ring-white/50' : ''
                }`}
                style={{ backgroundColor: status.color, color: status.textColor }}
              >
                {status.code}
              </div>
            </button>
          ))}
        </div>

        {/* Tooltip for other categories */}
        {selectedStatus && statuses.slice(7).some(s => s.code === selectedStatus.code) && (
          <div
            className="mt-4 bg-[#F7F5F0] dark:bg-[#1a1a1a] rounded-xl p-4 animate-fade-in relative"
          >
            <button
              onClick={() => setSelectedStatus(null)}
              className="absolute top-2 right-2 p-1 text-[#9CA3AF] hover:text-[#6B7280] dark:hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-2 mb-2 pr-6">
              <span
                className="inline-flex items-center justify-center w-8 h-5 rounded text-[10px] font-bold"
                style={{ backgroundColor: selectedStatus.color, color: selectedStatus.textColor }}
              >
                {selectedStatus.code}
              </span>
              <h3 className="font-display font-bold text-[#2D2D2D] dark:text-white">
                {selectedStatus.name}
              </h3>
            </div>

            <p className="text-sm text-[#2D2D2D] dark:text-[#b3b3b3] leading-relaxed mb-2">
              {selectedStatus.description}
            </p>

            {selectedStatus.note && (
              <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF]">
                {selectedStatus.note}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

// Did You Know? horizontally scrollable fact cards
const didYouKnowFacts = [
  {
    icon: Landmark,
    iconBg: 'bg-[#FEF3C7] dark:bg-[#78350F]/30',
    iconColor: 'text-[#D97706] dark:text-[#FBBF24]',
    title: 'Zoos Use It Too',
    fact: 'Next time you visit a zoo or aquarium, look for IUCN status badges on the animal signs!',
  },
  {
    icon: Coins,
    iconBg: 'bg-[#D1FAE5] dark:bg-[#065F46]/30',
    iconColor: 'text-[#059669] dark:text-[#34D399]',
    title: 'Funding Follows',
    fact: 'When a species gets listed as threatened, it can unlock millions in conservation funding.',
  },
  {
    icon: MapPin,
    iconBg: 'bg-[#DBEAFE] dark:bg-[#1E3A8A]/30',
    iconColor: 'text-[#2563EB] dark:text-[#60A5FA]',
    title: 'Protecting Places',
    fact: 'Red List data helps identify Key Biodiversity Areas that need protection around the world.',
  },
  {
    icon: BarChart3,
    iconBg: 'bg-[#F3E8FF] dark:bg-[#581C87]/30',
    iconColor: 'text-[#9333EA] dark:text-[#C084FC]',
    title: 'Tracking Progress',
    fact: 'The United Nations uses Red List data to measure progress on global conservation goals.',
  },
  {
    icon: Palette,
    iconBg: 'bg-[#FCE7F3] dark:bg-[#831843]/30',
    iconColor: 'text-[#DB2777] dark:text-[#F472B6]',
    title: 'Inspiring Art',
    fact: 'Artists, musicians, and writers use the Red List as inspiration to raise awareness about endangered species.',
  },
];

function DidYouKnowCards() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener('scroll', checkScroll);
      return () => ref.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="pb-6">
      <div className="px-4 mb-3 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] dark:text-[#9CA3AF]">
          Did You Know?
        </p>
        {/* Desktop scroll buttons */}
        <div className="hidden sm:flex gap-1">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`p-1 rounded-full transition-colors ${
              canScrollLeft
                ? 'bg-[#E5E7EB] dark:bg-[#374151] hover:bg-[#D1D5DB] dark:hover:bg-[#4B5563]'
                : 'bg-transparent text-[#D1D5DB] dark:text-[#4B5563] cursor-not-allowed'
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`p-1 rounded-full transition-colors ${
              canScrollRight
                ? 'bg-[#E5E7EB] dark:bg-[#374151] hover:bg-[#D1D5DB] dark:hover:bg-[#4B5563]'
                : 'bg-transparent text-[#D1D5DB] dark:text-[#4B5563] cursor-not-allowed'
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto pb-2 px-4 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {didYouKnowFacts.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="flex-shrink-0 w-[260px] sm:w-[280px] snap-start bg-white dark:bg-[#262626] rounded-2xl p-4 border border-[#E5E7EB] dark:border-[#374151]"
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-full ${item.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <IconComponent size={20} className={item.iconColor} />
                </div>
                <div className="min-w-0">
                  <p className="font-display font-bold text-sm text-[#2D2D2D] dark:text-white mb-1">
                    {item.title}
                  </p>
                  <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
                    {item.fact}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile scroll indicator dots */}
      <div className="flex justify-center gap-1.5 mt-3 sm:hidden">
        <span className="text-[10px] text-[#9CA3AF] dark:text-[#6B7280]">
          Swipe to explore
        </span>
      </div>
    </section>
  );
}
