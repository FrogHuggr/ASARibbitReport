import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export function MeetMarshMellow() {
  return (
    <div className="pb-10">
      {/* Header with back button */}
      <header className="px-4 pt-4 pb-2">
        <Link
          to="/settings"
          className="inline-flex items-center gap-1 text-[#2D5A3D] dark:text-[#6B9B7A] font-medium text-sm hover:underline"
        >
          <ChevronLeft size={18} />
          Settings
        </Link>
      </header>

      {/* Hero section with MarshMellow */}
      <section className="px-4 pt-4 pb-6 text-center">
        <img
          src="/images/marshmellow/marshmellow-wave.png"
          alt="MarshMellow waving"
          className="w-40 h-40 object-contain mx-auto mb-4"
        />
        <h1 className="font-display text-3xl font-bold text-[#2D2D2D] dark:text-white mb-2">
          Meet MarshMellow
        </h1>
      </section>

      {/* Species card */}
      <section className="px-4 pb-6">
        <div className="bg-[#E8F5E9] dark:bg-[#1E3A2F] rounded-2xl p-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-[#6B7280] dark:text-[#9CA3AF] uppercase text-xs font-semibold tracking-wider mb-1">Name</p>
              <p className="font-medium text-[#2D2D2D] dark:text-white">MarshMellow</p>
            </div>
            <div>
              <p className="text-[#6B7280] dark:text-[#9CA3AF] uppercase text-xs font-semibold tracking-wider mb-1">Species</p>
              <p className="font-medium text-[#2D2D2D] dark:text-white">Red-eyed Tree Frog</p>
            </div>
            <div>
              <p className="text-[#6B7280] dark:text-[#9CA3AF] uppercase text-xs font-semibold tracking-wider mb-1">Scientific Name</p>
              <p className="font-medium text-[#2D2D2D] dark:text-white italic">Agalychnis callidryas</p>
            </div>
            <div>
              <p className="text-[#6B7280] dark:text-[#9CA3AF] uppercase text-xs font-semibold tracking-wider mb-1">Home Region</p>
              <p className="font-medium text-[#2D2D2D] dark:text-white">Central America</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-[#C8E6C9] dark:border-[#2D5A3D]">
            <p className="text-[#6B7280] dark:text-[#9CA3AF] uppercase text-xs font-semibold tracking-wider mb-1">Role</p>
            <p className="font-medium text-[#2D2D2D] dark:text-white">Explorer, guide, and amphibian ambassador</p>
          </div>
          <p className="mt-4 pt-4 border-t border-[#C8E6C9] dark:border-[#2D5A3D] text-sm text-[#6B7280] dark:text-[#9CA3AF] italic">
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
            icon="🍽️"
            label="Favorite food"
            value="Moths (crunchy on the outside, soft on the inside)"
          />
          <FavoriteItem
            icon="🔊"
            label="Favorite sound"
            value="A full frog chorus after the first rain of the season"
          />
          <FavoriteItem
            icon="💡"
            label="Favorite discovery"
            value={`Learning that some frogs can survive being frozen solid. "Even I couldn't do that!"`}
          />
          <FavoriteItem
            icon="🗺️"
            label="Favorite expedition"
            value={`Visiting the cloud forests of Ecuador. "The fog made everything feel like a dream."`}
          />
          <FavoriteItem
            icon="💬"
            label="Best advice"
            value={`"You don't have to travel far to find something amazing. Sometimes the best discoveries are in your own backyard."`}
          />
        </div>
      </section>

      {/* MarshMellow thinking image at bottom */}
      <section className="px-4 pt-4 pb-8">
        <div className="flex justify-center">
          <img
            src="/images/marshmellow/marshmellow-thinking.png"
            alt="MarshMellow thinking"
            className="w-24 h-24 object-contain opacity-60"
          />
        </div>
      </section>
    </div>
  );
}

function FavoriteItem({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <span className="text-xl flex-shrink-0">{icon}</span>
      <div>
        <p className="font-medium text-[#2D2D2D] dark:text-white text-sm">{label}</p>
        <p className="text-[#6B7280] dark:text-[#9CA3AF] text-[15px]">{value}</p>
      </div>
    </div>
  );
}
