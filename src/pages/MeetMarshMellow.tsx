import { Link } from 'react-router-dom';
import { ChevronLeft, UtensilsCrossed, Volume2, Lightbulb, Map, MessageCircle } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

export function MeetMarshMellow() {
  return (
    <div className="pb-10">
      {/* Hero Banner with Adventure Map */}
      <div className="relative">
        {/* Background image */}
        <div
          className="h-56 sm:h-64 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/explore/adventuresofmarshmellow.jpg)',
          }}
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />

        {/* Back button - positioned over the image */}
        <Link
          to="/explore"
          className="absolute top-4 left-4 inline-flex items-center gap-1 text-white/90 font-medium text-sm hover:text-white bg-black/20 hover:bg-black/30 px-2 py-1 rounded-lg transition-colors"
        >
          <ChevronLeft size={18} />
          Explore
        </Link>

        {/* Title overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-white/70 text-xs font-medium uppercase tracking-wider mb-1">
            Your Guide
          </p>
          <h1 className="font-display text-3xl font-bold text-white">
            Meet MarshMellow
          </h1>
        </div>
      </div>

      {/* Species card - parchment/map colors */}
      <section className="px-4 pt-6 pb-6">
        <div className="bg-[#F5E6D3] dark:bg-[#3D2E1F] rounded-2xl p-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-[#6B5344] dark:text-[#B8A082] uppercase text-xs font-semibold tracking-wider mb-1">Name</p>
              <p className="font-medium text-[#2D2D2D] dark:text-white">MarshMellow</p>
            </div>
            <div>
              <p className="text-[#6B5344] dark:text-[#B8A082] uppercase text-xs font-semibold tracking-wider mb-1">Species</p>
              <p className="font-medium text-[#2D2D2D] dark:text-white">Red-eyed Tree Frog</p>
            </div>
            <div>
              <p className="text-[#6B5344] dark:text-[#B8A082] uppercase text-xs font-semibold tracking-wider mb-1">Scientific Name</p>
              <p className="font-medium text-[#2D2D2D] dark:text-white italic">Agalychnis callidryas</p>
            </div>
            <div>
              <p className="text-[#6B5344] dark:text-[#B8A082] uppercase text-xs font-semibold tracking-wider mb-1">Home Region</p>
              <p className="font-medium text-[#2D2D2D] dark:text-white">Central America</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-[#E0C9A8] dark:border-[#5A4632]">
            <p className="text-[#6B5344] dark:text-[#B8A082] uppercase text-xs font-semibold tracking-wider mb-1">Role</p>
            <p className="font-medium text-[#2D2D2D] dark:text-white">Explorer, guide, and amphibian ambassador</p>
          </div>
          <p className="mt-4 pt-4 border-t border-[#E0C9A8] dark:border-[#5A4632] text-sm text-[#6B5344] dark:text-[#B8A082] italic">
            Sharp-eyed visitors might notice MarshMellow's eyes aren't quite the classic red. Why? That's MarshMellow's little secret... for now.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="px-4">
        <hr className="border-[#E5E5E5] dark:border-[#374151]" />
      </div>

      {/* His Story */}
      <section className="px-4 py-6">
        <h2 className="font-display text-xl font-bold text-[#2D2D2D] dark:text-white mb-4">
          His Story
        </h2>
        <div className="space-y-4 text-[15px] text-[#2D2D2D] dark:text-[#b3b3b3] leading-relaxed">
          <p>
            MarshMellow wasn't always an explorer. He grew up in the rainforests of Costa Rica, spending his nights catching insects and his days sleeping on the undersides of big green leaves.
          </p>
          <p>
            One day, a researcher studying his species gently picked him up, took a photo, and placed him right back on his leaf. That moment changed everything. MarshMellow realized there were humans out there who cared about frogs. Who studied them, protected them, and traveled the world to find them.
          </p>
          <p>
            He decided he wanted to do the same. Not study frogs (he already knew plenty about being one), but help kids discover how amazing amphibians are. He traded his leaf for an explorer's hat, packed a tiny satchel, and set off to find the best stories the amphibian world has to offer.
          </p>
          <p>
            Now he's your guide. Wherever there's a frog chorus to hear, a salamander to spot, or a conservation mystery to solve, MarshMellow is ready to lead the way.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="px-4">
        <hr className="border-[#E5E5E5] dark:border-[#374151]" />
      </div>

      {/* MarshMellow's Favorites */}
      <section className="px-4 py-6">
        <h2 className="font-display text-xl font-bold text-[#2D2D2D] dark:text-white mb-4">
          MarshMellow's Favorites
        </h2>
        <div className="space-y-4">
          <FavoriteItem
            icon={UtensilsCrossed}
            iconBg="bg-[#FEF3C7] dark:bg-[#78350F]/30"
            iconColor="text-[#B45309] dark:text-[#FBBF24]"
            label="Favorite food"
            value="Moths (crunchy on the outside, soft on the inside)"
          />
          <FavoriteItem
            icon={Volume2}
            iconBg="bg-[#E8F5E9] dark:bg-[#1E3A2F]/50"
            iconColor="text-[#2D5A3D] dark:text-[#6B9B7A]"
            label="Favorite sound"
            value="A full frog chorus after the first rain of the season"
          />
          <FavoriteItem
            icon={Lightbulb}
            iconBg="bg-[#F5E6D3] dark:bg-[#3D2E1F]/50"
            iconColor="text-[#8B6914] dark:text-[#D4A574]"
            label="Favorite discovery"
            value={`Learning that some frogs can survive being frozen solid. "Even I couldn't do that!"`}
          />
          <FavoriteItem
            icon={Map}
            iconBg="bg-[#E0C9A8] dark:bg-[#5A4632]/50"
            iconColor="text-[#6B5344] dark:text-[#D4C4A8]"
            label="Favorite expedition"
            value={`Visiting the cloud forests of Ecuador. "The fog made everything feel like a dream."`}
          />
          <FavoriteItem
            icon={MessageCircle}
            iconBg="bg-[#D4E4D9] dark:bg-[#2D4A3D]/50"
            iconColor="text-[#4A7B5C] dark:text-[#8FBC8F]"
            label="Best advice"
            value={`"You don't have to travel far to find something amazing. Sometimes the best discoveries are in your own backyard."`}
          />
        </div>
      </section>

    </div>
  );
}

function FavoriteItem({
  icon: Icon,
  iconBg,
  iconColor,
  label,
  value
}: {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3">
      <div className={`w-10 h-10 rounded-full ${iconBg} flex items-center justify-center flex-shrink-0`}>
        <Icon size={20} className={iconColor} />
      </div>
      <div className="pt-0.5">
        <p className="font-medium text-[#2D2D2D] dark:text-white text-sm">{label}</p>
        <p className="text-[#6B7280] dark:text-[#9CA3AF] text-[15px]">{value}</p>
      </div>
    </div>
  );
}
