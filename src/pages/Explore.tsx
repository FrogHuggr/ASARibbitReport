import { Link } from 'react-router-dom';
import { Map, Search, FlaskConical, Gamepad2, ChevronRight } from 'lucide-react';
import { dispatches } from '../data/dispatches';
import { realStories } from '../data/realStory';

interface ContentTypeCard {
  id: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  count: number | null;
  route: string;
  available: boolean;
  comingSoon?: boolean;
}

const contentTypes: ContentTypeCard[] = [
  {
    id: 'dispatches',
    icon: Map,
    title: 'Dispatches',
    description: 'Field reports from Future Leaders around the world',
    count: dispatches.length,
    route: '/dispatches',
    available: true,
  },
  {
    id: 'real-story',
    icon: Search,
    title: 'The Real Story',
    description: "The truth behind nature's biggest mix-ups",
    count: realStories.length,
    route: '/real-story/frogs-vs-toads',
    available: true,
  },
  {
    id: 'myth-busters',
    icon: FlaskConical,
    title: 'Myth Busters',
    description: 'Test what you think you know',
    count: null,
    route: '/myths',
    available: false,
    comingSoon: true,
  },
  {
    id: 'activities',
    icon: Gamepad2,
    title: 'Activities',
    description: 'Quizzes, games, and challenges',
    count: null,
    route: '/activities',
    available: false,
    comingSoon: true,
  },
];

function ContentCard({ card }: { card: ContentTypeCard }) {
  const Icon = card.icon;

  const content = (
    <div
      className={`bg-white dark:bg-[#242424] border border-[#E5E5E5] dark:border-[#374151] rounded-xl p-4 shadow-sm ${
        card.available
          ? 'hover:shadow-md transition-shadow'
          : 'opacity-60 cursor-not-allowed'
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
            card.available
              ? 'bg-[#E8F5E9] dark:bg-[#1B3D2F]'
              : 'bg-[#F3F4F6] dark:bg-[#374151]'
          }`}
        >
          <Icon
            size={24}
            className={
              card.available
                ? 'text-[#2D5A3D] dark:text-[#81C784]'
                : 'text-[#9CA3AF] dark:text-[#6B7280]'
            }
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3
              className={`font-display font-bold text-lg ${
                card.available
                  ? 'text-[#2D2D2D] dark:text-white'
                  : 'text-[#9CA3AF] dark:text-[#6B7280]'
              }`}
            >
              {card.title}
            </h3>
            {card.count !== null && card.available && (
              <span className="bg-[#2D5A3D] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {card.count}
              </span>
            )}
            {card.comingSoon && (
              <span className="text-xs text-[#9CA3AF] dark:text-[#6B7280] bg-[#F3F4F6] dark:bg-[#374151] px-2 py-0.5 rounded">
                Coming Soon
              </span>
            )}
          </div>
          <p
            className={`text-sm mt-1 ${
              card.available
                ? 'text-[#6B7280] dark:text-[#9CA3AF]'
                : 'text-[#9CA3AF] dark:text-[#6B7280]'
            }`}
          >
            {card.description}
          </p>
        </div>

        {card.available && (
          <ChevronRight
            size={20}
            className="text-[#9CA3AF] dark:text-[#6B7280] flex-shrink-0 mt-1"
          />
        )}
      </div>
    </div>
  );

  if (card.available) {
    return (
      <Link to={card.route} className="block">
        {content}
      </Link>
    );
  }

  return content;
}

export function Explore() {
  return (
    <div className="pb-6">
      {/* Header */}
      <header className="container-app px-4 pt-6 pb-6">
        <h1 className="font-display text-3xl font-bold text-[#2D2D2D] dark:text-white">
          Explore
        </h1>
        <p className="text-[#6B7280] dark:text-[#9CA3AF] mt-2">
          Discover stories, facts, and adventures
        </p>
      </header>

      {/* Content Type Cards */}
      <section className="container-app px-4 space-y-3">
        {contentTypes.map(card => (
          <ContentCard key={card.id} card={card} />
        ))}
      </section>
    </div>
  );
}
