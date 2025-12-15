import { Link } from 'react-router-dom';
import { ChevronLeft, UtensilsCrossed, Volume2, Lightbulb, Map, MessageCircle, Notebook } from 'lucide-react';
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
            MarshMellow wasn't always an explorer. He grew up in the rainforests of Costa Rica, spending his nights catching moths (crunchy, 10/10, no notes) and his days sleeping on the undersides of big green leaves. Life was simple. Predictable. Honestly? A little boring. He was the frog equivalent of someone who eats the same lunch every day and thinks "maybe I'll try something different" but never does.
          </p>
          <p>
            Then came the storm.
          </p>
          <p>
            A flash flood swept through his forest, and before he knew it, MarshMellow was clinging to a leaf like his life depended on it. (It did.) He had exactly one thought, on repeat, for 48 hours: <em>"This is fine. This is fine. This is NOT fine. This is fine."</em>
          </p>
          <p>
            Two days later, soggy, slightly traumatized, and missing one of his favorite flies (rest in peace, Gerald), he washed up somewhere completely unexpected: a research station at the edge of the jungle.
          </p>
          <p>
            A scientist found him, took his photo, measured him carefully, and spoke into a recorder: <em>"Another survivor. Remarkable resilience."</em>
          </p>
          <p>
            MarshMellow had never been called remarkable before. He'd been called "small," "green," and once, memorably, "AAAAH THERE'S A FROG IN MY BOOT." But never remarkable. He decided he liked it.
          </p>
          <p>
            While recovering in a terrarium (the room service was excellent, the fruit flies were <em>chef's kiss</em>), he noticed something on the walls: maps. Maps covered in pins marking frog sightings across the world. Photographs of species he'd never imagined: purple frogs that lived underground, glass frogs with see-through skin, salamanders the size of a canoe. There was a whole world of amphibians out there—and humans who dedicated their lives to finding and protecting them.
          </p>
          <p>
            Wild.
          </p>
          <p>
            When the scientist released him back into the forest, MarshMellow made a decision. He wasn't going back to his old leaf. That leaf could find a new frog. He was going to see those places. Meet those frogs. Maybe even become remarkable for real.
          </p>
          <p>
            He traded his leaf for an explorer's hat (found it floating in the river, barely chewed), packed a tiny satchel (one spare fly, emergency use only), and set off on his first expedition. He hasn't stopped since.
          </p>
          <p>
            Well, except for naps. Naps are non-negotiable. He's not a monster.
          </p>
          <p>
            Now he's your guide. Wherever there's a frog chorus to hear, a salamander to spot, or a conservation mystery to solve, MarshMellow is ready to lead the way. He's enthusiastic, he's curious, and he only screams at large salamanders <em>sometimes</em>.
          </p>
          <p>
            Just don't ask him to swim through any more floods. Once was enough. Gerald would have wanted it that way.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="px-4">
        <hr className="border-[#E5E5E5] dark:border-[#374151]" />
      </div>

      {/* Field Notes */}
      <section className="px-4 py-6">
        <div className="flex items-center gap-2 mb-4">
          <Notebook size={20} className="text-[#8B6914] dark:text-[#D4A574]" />
          <h2 className="font-display text-xl font-bold text-[#2D2D2D] dark:text-white">
            Field Notes
          </h2>
        </div>
        <div className="bg-[#F5E6D3] dark:bg-[#3D2E1F] rounded-2xl p-4 space-y-3">
          <FieldNote
            day={23}
            note="Hitched a ride in a researcher's backpack. Accidentally traveled to Panama. No regrets."
          />
          <FieldNote
            day={47}
            note="Found a purple frog in India that hadn't been seen in months. It lives underground and only comes out for two weeks a year. Relatable, honestly."
          />
          <FieldNote
            day={89}
            note="Tried to interview a poison dart frog. She said I 'wasn't her type.' Fair enough."
          />
          <FieldNote
            day={112}
            note="Almost stepped on by an elephant in Nepal. Worth it for the salamander sighting."
          />
          <FieldNote
            day={156}
            note="Met a frog in Ecuador that can survive being frozen solid. Asked for tips. She just stared at me."
          />
          <FieldNote
            day={203}
            note="Discovered a new species! Just kidding, it was my reflection in a pond. The humidity is getting to me."
          />
          <FieldNote
            day={267}
            note="Spent three hours camouflaged on a branch waiting for a rare tree frog. A bird tried to eat me. Twice."
          />
          <FieldNote
            day={298}
            note="Local guide asked if I was someone's pet that escaped. I chose to take it as a compliment."
          />
          <FieldNote
            day={341}
            note="Finally found the golden toad's last known habitat in Costa Rica. No toads. Just me, the mist, and a lot of feelings."
          />
          <FieldNote
            day={389}
            note="Attended a scientific conference. Sat in a water glass the whole time. Nobody noticed. 10/10 infiltration."
          />
        </div>

        {/* Travel Map */}
        <div className="mt-4 rounded-xl overflow-hidden">
          <img
            src="/images/explore/travellocations.jpg"
            alt="MarshMellow's expedition map showing locations around the world"
            className="w-full h-auto"
          />
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

function FieldNote({ day, note }: { day: number; note: string }) {
  return (
    <div className="flex gap-3">
      <div className="flex-shrink-0 w-14 text-right">
        <span className="text-xs font-bold text-[#8B6914] dark:text-[#D4A574] uppercase tracking-wide">
          Day {day}
        </span>
      </div>
      <div className="flex-1 border-l-2 border-[#D4A574]/40 dark:border-[#8B6914]/40 pl-3">
        <p className="text-sm text-[#4A3728] dark:text-[#E8D5B7] leading-relaxed italic">
          "{note}"
        </p>
      </div>
    </div>
  );
}
