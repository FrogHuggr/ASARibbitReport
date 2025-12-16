import { Link } from 'react-router-dom';
import { MapPin, Calendar, Pencil, Camera, Compass, Droplets, Eye, Heart, ExternalLink } from 'lucide-react';
import { ShareButton } from '../../components/ShareButton';

export function GlassHalfFull() {
  return (
    <div className="pb-10">
      {/* Hero Banner */}
      <div className="relative">
        {/* Background image - field journal illustration of glass frog */}
        <div
          className="h-72 sm:h-80 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/fieldnotes/glasshalffull/glasshalffullhero.jpg)',
          }}
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />

        {/* Field Notes badge */}
        <div className="absolute top-4 right-4 bg-[#8B6914]/90 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
          Field Notes
        </div>

        {/* Title overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center gap-2 text-[#D4A574] text-sm mb-2">
            <Calendar size={14} />
            <span className="font-semibold">Day 58</span>
            <span className="text-white/50">•</span>
            <MapPin size={14} />
            <span>Costa Rica</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
            Glass Half Full
          </h1>
        </div>
      </div>

      {/* MarshMellow's sketch note */}
      <div className="bg-[#F5E6D3] dark:bg-[#3D2E1F] px-4 py-2 flex items-center gap-2">
        <Pencil size={14} className="text-[#8B6914] dark:text-[#D4A574] flex-shrink-0" />
        <span className="text-xs text-[#6B5344] dark:text-[#B8A082] italic">
          MarshMellow's sketch note: "I tried to draw what I saw. Turns out 'transparent' is hard to capture on paper."
        </span>
      </div>

      {/* MarshMellow's intro card */}
      <section className="px-4 pt-6">
        <div className="bg-[#E8F5E9] dark:bg-[#1E3A2F] rounded-2xl p-4 flex gap-4">
          <img
            src="/images/fieldnotes/glasshalffull/glasshalffullmarshmellow.png"
            alt="MarshMellow looking philosophical"
            className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
          />
          <div>
            <p className="text-sm font-medium text-[#2D5A3D] dark:text-[#81C784] mb-1">
              MarshMellow's Take
            </p>
            <p className="text-[15px] text-[#2D2D2D] dark:text-[#E5E5E5] italic leading-relaxed">
              "Some frogs wear their hearts on their sleeves. Glass frogs? They wear everything on their sleeves. Including their sleeves."
            </p>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="px-4 py-6">
        <div className="flex items-center gap-2 mb-4">
          <Compass size={20} className="text-[#8B6914] dark:text-[#D4A574]" />
          <h2 className="font-display text-xl font-bold text-[#2D2D2D] dark:text-white">
            The Expedition
          </h2>
        </div>
        <div className="space-y-4 text-[15px] text-[#2D2D2D] dark:text-[#b3b3b3] leading-relaxed">
          <p>
            I've seen a lot of weird things in my travels. Purple frogs that look like deflated balloons. Salamanders the size of a carry-on bag. A frog that survived being frozen half solid (she was not interested in chatting afterwards—fair enough, honestly).
          </p>
          <p>
            But nothing—<em>nothing</em>—prepared me for my first glass frog.
          </p>
          <p>
            It was Day 58. I was perched on a leaf in the Costa Rican cloud forest, minding my own business, writing in my field journal, feeling very professional and explorer-y. Then I noticed something on the branch below. A frog. Tiny. Lime green. Perfectly normal looking from above.
          </p>
          <p>
            Then it shifted, and I caught a glimpse of its underside.
          </p>
          <p>
            I could see its <em>heart beating</em>.
          </p>
          <p>
            Not in a poetic way. Not in a "I could feel its life force" way. In an actual, literal, "THAT IS DEFINITELY A CARDIOVASCULAR SYSTEM" way.
          </p>
          <p>
            The skin on its belly was completely transparent. Like someone had forgotten to finish rendering it. I could see its liver. Its intestines. The blood flowing through its veins like tiny red highways during rush hour.
          </p>
          <p>
            I dropped my field journal. (My sketches from that day are... interpretive at best. Drawing with webbed feet is harder than it looks, and I refuse to apologize for my artistic choices.)
          </p>
          <p>
            I stared for a solid five minutes. The frog stared back. Neither of us blinked. (Well, I didn't. Frogs don't really blink much anyway. We're just built different. Literally. Our eyes are on top of our heads. It's a whole thing.)
          </p>
          <p>
            My first thought was: "That frog is inside out."
          </p>
          <p>
            My second thought was: "No wait, it's just... see-through?"
          </p>
          <p>
            My third thought was: "I need to sit down." (I was already sitting. I sat down harder.)
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="px-4">
        <hr className="border-[#E5E5E5] dark:border-[#374151]" />
      </div>

      {/* The Science */}
      <section className="px-4 py-6">
        <div className="flex items-center gap-2 mb-4">
          <Eye size={20} className="text-[#2D5A3D] dark:text-[#81C784]" />
          <h2 className="font-display text-xl font-bold text-[#2D2D2D] dark:text-white">
            The Science (It Gets Weirder)
          </h2>
        </div>
        <div className="space-y-4 text-[15px] text-[#2D2D2D] dark:text-[#b3b3b3] leading-relaxed">
          <p>
            Here's what I learned after bothering several very patient scientists at the research station. (Shoutout to Dr. Martinez, who only sighed twice when I asked if the frogs ever feel self-conscious about being transparent. Valid question, I think.)
          </p>
          <p>
            Glass frogs (family <em>Centrolenidae</em>) have evolved transparent skin as camouflage. When they rest on green leaves, their see-through bodies let the color of the leaf show through, making them nearly invisible to predators. It's called "edge diffusion"—the transparency blurs their outline so they don't look like a delicious frog-shaped snack.
          </p>
          <p>
            It's basically a biological invisibility cloak. Which is deeply unfair, because I've wanted an invisibility cloak since I was four.
          </p>
          <p>
            But here's where it gets <em>really</em> wild: they can actually <em>hide their blood</em>.
          </p>
          <p>
            When glass frogs sleep (which is during the day, because they're nocturnal like all sensible frogs and most college students), they somehow pack about 90% of their red blood cells into their liver. Just... shove it all in there. Like cramming clothes into a suitcase. This makes their body even MORE transparent—essentially becoming living glass.
          </p>
          <p>
            When they wake up, the blood goes back to circulating normally. Business as usual. Nothing to see here except literally everything.
          </p>
          <p>
            Scientists are still figuring out how they do this without, you know, dying. In any other animal, concentrating blood like that would cause fatal clots. Your circulatory system would stage a protest. Your organs would file complaints.
          </p>
          <p>
            Glass frogs just... don't get clots. They said "blood clots" and the glass frog said "no thank you, I have plans."
          </p>
          <p>
            Honestly? Iconic behavior.
          </p>
        </div>
      </section>

      {/* Quick Facts card */}
      <section className="px-4 pb-6">
        <div className="bg-[#F5E6D3] dark:bg-[#3D2E1F] rounded-2xl p-4">
          <h3 className="font-display text-lg font-bold text-[#2D2D2D] dark:text-white mb-4">
            Quick Facts
          </h3>
          <div className="space-y-3">
            <QuickFact
              icon={Droplets}
              label="Found in"
              value="Central & South American rainforests, usually near streams (where they're invisible) (rude)"
            />
            <QuickFact
              icon={Eye}
              label="Size"
              value="Most are tiny—about 2-3 cm (smaller than a grape, with significantly more organs visible)"
            />
            <QuickFact
              icon={Heart}
              label="Coolest feature"
              value="Males guard their eggs until they hatch (good dads! 10/10!)"
            />
            <QuickFact
              icon={Camera}
              label="Species count"
              value="Over 150 known species, and scientists keep finding more (probably because they keep overlooking them, on account of the whole INVISIBLE thing)"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-4">
        <hr className="border-[#E5E5E5] dark:border-[#374151]" />
      </div>

      {/* The Reflection */}
      <section className="px-4 py-6">
        <div className="flex items-center gap-2 mb-4">
          <Heart size={20} className="text-[#B45309] dark:text-[#FBBF24]" />
          <h2 className="font-display text-xl font-bold text-[#2D2D2D] dark:text-white">
            The Takeaway
          </h2>
        </div>
        <div className="space-y-4 text-[15px] text-[#2D2D2D] dark:text-[#b3b3b3] leading-relaxed">
          <p>
            I spent three hours with that glass frog. (It didn't seem to mind. Or maybe it was just too polite to say anything. Very Canadian energy for a Costa Rican frog.)
          </p>
          <p>
            And somewhere between watching its third heartbeat-per-second and its forty-thousandth, I had a thought:
          </p>
          <p>
            We spend so much time hiding who we are. What we feel. What's happening inside us. We've got walls and masks and carefully curated social media posts and "I'm fine, how are you?" on repeat.
          </p>
          <p>
            Glass frogs figured out how to survive by doing the opposite. By being completely, literally transparent. Their vulnerability isn't a weakness—it's their superpower. It's the thing that keeps them alive.
          </p>
          <p>
            Now, I'm not saying you should show everyone your internal organs. (Please don't. That would be weird and also medically concerning and also possibly illegal depending on your local ordinances.)
          </p>
          <p>
            But maybe there's something to learn from a frog that survives by letting the world see through it. Maybe it's okay to be a little more transparent. A little more visible. A little more "yes this is my actual heart, it beats weird sometimes, that's just what it does."
          </p>
          <p>
            Sometimes the glass really is half full. And sometimes it's completely transparent. And somehow, against all odds, that's exactly what it needs to be.
          </p>
          <p className="font-medium text-[#2D5A3D] dark:text-[#81C784]">
            Stay visible, friends. Even if it's terrifying. Especially if it's terrifying.
          </p>
        </div>
      </section>

      {/* Location Map */}
      <section className="px-4 pb-6">
        <div className="rounded-xl overflow-hidden">
          <img
            src="/images/fieldnotes/glasshalffull/glasshalffullmap.jpg"
            alt="Map showing glass frog expedition location in Costa Rica"
            className="w-full h-auto"
          />
        </div>
        <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] mt-2 text-center">
          Day 58 expedition location • Costa Rican Cloud Forest
        </p>
      </section>

      {/* Explore Glass Frogs - external links */}
      <section className="px-4 pb-6">
        <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-3">
          Glass frogs include over 150 species with varying conservation statuses. Explore them all:
        </p>
        <div className="flex flex-wrap gap-2">
          <a
            href="https://www.iucnredlist.org/search/grid?taxonomies=100366&searchType=species"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[#2D5A3D] dark:text-[#81C784] hover:underline"
          >
            <span>IUCN Red List</span>
            <ExternalLink size={12} />
          </a>
          <span className="text-[#6B7280]">•</span>
          <a
            href="https://amphibiaweb.org/lists/Centrolenidae.shtml"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[#2D5A3D] dark:text-[#81C784] hover:underline"
          >
            <span>AmphibiaWeb</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </section>

      {/* Next Field Note teaser */}
      <section className="px-4 pb-6">
        <Link to="/field-notes/salamander-older-than-dinosaurs" className="block group">
          <div className="relative h-44 rounded-2xl overflow-hidden">
            {/* Map background */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(/images/fieldnotes/salamanderolderthandinosaur/salamanderolderthandinosaursmap.jpg)',
              }}
            />

            {/* Warm overlay for cohesion */}
            <div className="absolute inset-0 bg-[#3D2E1F]/40" />

            {/* Scared MarshMellow - positioned right */}
            <div className="absolute right-1 bottom-0 w-32 h-32 z-10">
              <img
                src="/images/fieldnotes/salamanderolderthandinosaur/salamanderolderthandinosaursmarshmellow.png"
                alt="MarshMellow looking scared"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Dark gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              <div className="max-w-[60%]">
                <p className="text-[#D4A574] text-xs font-semibold uppercase tracking-wider mb-1">
                  Next Field Note
                </p>
                <h3 className="font-display text-lg font-bold text-white mb-1 leading-tight group-hover:text-[#D4A574] transition-colors">
                  The Salamander That's Older Than Dinosaurs
                </h3>
                <p className="text-white/80 text-sm">
                  Some things shouldn't fit in a carry-on.
                </p>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Share Button */}
      <div className="flex justify-center px-4 pb-6">
        <ShareButton
          title="Glass Half Full - The Ribbit Report"
          text="A frog with nothing to hide! Check out MarshMellow's field notes about glass frogs from Costa Rica."
        />
      </div>

    </div>
  );
}

function QuickFact({
  icon: Icon,
  label,
  value
}: {
  icon: typeof Droplets;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="w-8 h-8 rounded-full bg-[#E0C9A8] dark:bg-[#5A4632] flex items-center justify-center flex-shrink-0">
        <Icon size={16} className="text-[#6B5344] dark:text-[#D4A574]" />
      </div>
      <div>
        <p className="text-xs font-semibold text-[#8B6914] dark:text-[#D4A574] uppercase tracking-wide">
          {label}
        </p>
        <p className="text-sm text-[#4A3728] dark:text-[#E8D5B7]">{value}</p>
      </div>
    </div>
  );
}
