import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { dilemmas } from '../data/wildDecisions';

// Display order that mixes North American and international dilemmas
const displayOrder = [
  'trail-wet-patch',      // North America
  'cloud-forest-spring',  // Latin America (Ecuador)
  'backyard-toad',        // North America
  'rice-paddy-frogs',     // Asia (Vietnam)
  'salamander-log',       // North America
  'cane-toad-problem',    // Australia
  'frog-chorus',          // North America
  'vanishing-waterhole',  // Africa (Kenya)
  'toad-tunnel',          // Europe (Germany)
  'school-wetland',       // Europe (England)
  'bromeliad-harvest',    // Latin America (Colombia)
  'temple-release',       // Asia (Thailand)
];

export function WildDecisions() {
  // Sort dilemmas according to display order
  const [sortedDilemmas] = useState(() => {
    return displayOrder
      .map(id => dilemmas.find(d => d.id === id))
      .filter((d): d is NonNullable<typeof d> => d !== undefined);
  });

  return (
    <div className="pb-10">
      {/* Hero intro section with MarshMellow */}
      <section className="px-4 pt-6 pb-8">
        <div className="flex items-start gap-4">
          {/* MarshMellow thinking pose */}
          <img
            src="/images/marshmellow/marshmellow-thinking2.png"
            alt="MarshMellow thinking"
            className="w-28 h-28 object-contain flex-shrink-0"
          />

          {/* Intro text */}
          <div className="flex-1 pt-2">
            <h1 className="font-display text-2xl font-bold text-[#2D2D2D] dark:text-white mb-3">
              Wild Decisions
            </h1>
            <p className="text-[#6B7280] dark:text-[#9CA3AF] text-sm leading-relaxed">
              Conservation isn't always simple. Sometimes there's no perfect answer, just better questions. Ready to think it through?
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-4">
        <hr className="border-[#E5E5E5] dark:border-[#374151]" />
      </div>

      {/* Dilemma cards list */}
      <section className="px-4 pt-6 space-y-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] dark:text-[#9CA3AF] mb-2">
          Choose a dilemma
        </p>

        {sortedDilemmas.map((dilemma) => (
          <Link
            key={dilemma.id}
            to={`/wild-decisions/${dilemma.slug}`}
            className="block group"
          >
            <div
              className="relative h-36 rounded-2xl overflow-hidden transition-all duration-200 ease-out group-hover:-translate-y-1 group-active:scale-[0.98]"
              style={{
                boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
              }}
            >
              {/* Background illustration */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${dilemma.illustration})`,
                }}
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                {/* Label chip */}
                <span className="inline-block self-start px-2 py-0.5 mb-2 text-[10px] font-semibold uppercase tracking-wider text-white/80 bg-white/20 rounded-full">
                  {dilemma.label}
                </span>

                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white leading-tight">
                      {dilemma.title}
                    </h3>
                  </div>
                  <ChevronRight
                    size={24}
                    className="text-white/80 group-hover:translate-x-1 transition-transform flex-shrink-0"
                  />
                </div>
              </div>

              {/* Hover shadow enhancement */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl"
                style={{
                  boxShadow: '0 12px 32px rgba(0,0,0,0.2)',
                }}
              />
            </div>
          </Link>
        ))}
      </section>

      {/* Footer note */}
      <section className="px-4 pt-8">
        <p className="text-center text-xs text-[#9CA3AF] dark:text-[#6B7280]">
          No right answers. Just better questions.
        </p>
      </section>
    </div>
  );
}
