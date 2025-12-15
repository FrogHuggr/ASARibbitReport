import { Link } from 'react-router-dom';
import { ChevronLeft, MapPin, Calendar, Camera, Compass, Droplets, Eye, Heart } from 'lucide-react';

export function GlassHalfFull() {
  return (
    <div className="pb-10">
      {/* Hero Banner */}
      <div className="relative">
        {/* Background image - stunning glass frog */}
        <div
          className="h-72 sm:h-80 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/fieldnotes/glasshalffull/glasshalffullhero.png)',
          }}
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />

        {/* Back button */}
        <Link
          to="/explore"
          className="absolute top-4 left-4 inline-flex items-center gap-1 text-white/90 font-medium text-sm hover:text-white bg-black/20 hover:bg-black/30 px-2 py-1 rounded-lg transition-colors"
        >
          <ChevronLeft size={18} />
          Explore
        </Link>

        {/* Field Notes badge */}
        <div className="absolute top-4 right-4 bg-[#8B6914]/90 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
          Field Notes
        </div>

        {/* Title overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center gap-2 text-[#D4A574] text-sm mb-2">
            <Calendar size={14} />
            <span className="font-semibold">Day 47</span>
            <span className="text-white/50">•</span>
            <MapPin size={14} />
            <span>Costa Rica</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
            Glass Half Full
          </h1>
        </div>
      </div>

      {/* Photo credit bar */}
      <div className="bg-[#F5E6D3] dark:bg-[#3D2E1F] px-4 py-2 flex items-center gap-2">
        <Camera size={14} className="text-[#8B6914] dark:text-[#D4A574]" />
        <span className="text-xs text-[#6B5344] dark:text-[#B8A082]">
          Photo: Thorsten Spoerlein
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
            I've seen a lot of weird things in my travels. Purple frogs that look like deflated balloons. Salamanders the size of a carry-on bag. A toad that survived being frozen solid (she was not interested in chatting afterwards).
          </p>
          <p>
            But nothing—<em>nothing</em>—prepared me for my first glass frog.
          </p>
          <p>
            It was Day 47. I was perched on a leaf in the Costa Rican cloud forest, minding my own business, when I noticed something strange on the branch below. A frog. Tiny. Lime green. Looking perfectly normal from above.
          </p>
          <p>
            Then it shifted, and I caught a glimpse of its underside.
          </p>
          <p>
            I could see its <em>heart beating</em>.
          </p>
          <p>
            Not in a poetic way. In an actual, literal, "that is definitely a cardiovascular system" way. The skin on its belly was completely transparent. I could see its liver. Its intestines. The blood flowing through its veins like tiny red highways.
          </p>
          <p>
            I stared for a solid five minutes. The frog stared back. Neither of us blinked. (Well, I didn't. Frogs don't really blink much anyway. We're just built different.)
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
            Here's what I learned after bothering several patient scientists at the research station:
          </p>
          <p>
            Glass frogs (family <em>Centrolenidae</em>) have evolved transparent skin as camouflage. When they rest on green leaves, their see-through bodies let the color of the leaf show through, making them nearly invisible to predators. It's called "edge diffusion"—the transparency blurs their outline so they don't look like a delicious frog-shaped snack.
          </p>
          <p>
            But here's where it gets really wild: they can actually <em>hide their blood</em>.
          </p>
          <p>
            When glass frogs sleep (which is during the day, because they're nocturnal like all sensible frogs), they somehow pack about 90% of their red blood cells into their liver. This makes their body even more transparent—essentially becoming living glass. When they wake up, the blood goes back to circulating normally.
          </p>
          <p>
            Scientists are still figuring out how they do this without, you know, dying. In any other animal, concentrating blood like that would cause fatal clots. Glass frogs just... don't. They said "blood clots" and the glass frog said "no thank you."
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
              value="Central & South American rainforests, usually near streams"
            />
            <QuickFact
              icon={Eye}
              label="Size"
              value="Most are tiny—about 2-3 cm (smaller than a grape)"
            />
            <QuickFact
              icon={Heart}
              label="Coolest feature"
              value="Males guard their eggs until they hatch (good dads!)"
            />
            <QuickFact
              icon={Camera}
              label="Species count"
              value="Over 150 known species, and scientists keep finding more"
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
            I spent three hours with that glass frog. (It didn't seem to mind. Or maybe it was just too polite to say anything.) And somewhere between watching its third heartbeat-per-second and its forty-thousandth, I had a thought:
          </p>
          <p>
            We spend so much time hiding who we are. What we feel. What's happening inside us.
          </p>
          <p>
            Glass frogs figured out how to survive by doing the opposite. By being completely, literally transparent. Their vulnerability isn't a weakness—it's their superpower.
          </p>
          <p>
            Now, I'm not saying you should show everyone your internal organs. (Please don't. That would be weird and also medically concerning.) But maybe there's something to learn from a frog that survives by letting the world see through it.
          </p>
          <p className="font-medium text-[#2D5A3D] dark:text-[#81C784]">
            Sometimes the glass really is half full. And sometimes it's completely transparent. And somehow, against all odds, that's exactly what it needs to be.
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
          Day 47 expedition location • Costa Rican Cloud Forest
        </p>
      </section>

      {/* Coming Soon teaser - visual preview */}
      <section className="px-4 pb-6">
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
              <h3 className="font-display text-lg font-bold text-white mb-1 leading-tight">
                The Salamander That's Older Than Dinosaurs
              </h3>
              <p className="text-white/80 text-sm">
                Some things shouldn't fit in a carry-on.
              </p>
              <p className="text-[#B8A082] text-xs mt-2 font-medium">
                Coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

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
