import { Link } from 'react-router-dom';
import { MapPin, Calendar, Camera, Compass, Droplets, Eye, Heart, Skull, Clock, ExternalLink } from 'lucide-react';
import { ShareButton } from '../../components/ShareButton';

export function SalamanderOlderThanDinosaurs() {
  return (
    <div className="pb-10">
      {/* Hero Banner */}
      <div className="relative">
        {/* Background image - naturalist illustration of giant salamander */}
        <div
          className="h-72 sm:h-80 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/fieldnotes/salamanderolderthandinosaur/salamanderolderthandinosaurshero.jpg)',
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
            <span className="font-semibold">Day 72</span>
            <span className="text-white/50">•</span>
            <MapPin size={14} />
            <span>Yangtze River Basin, China</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
            The Salamander That's Older Than Dinosaurs
          </h1>
        </div>
      </div>

      {/* Photo credit bar */}
      <div className="bg-[#F5E6D3] dark:bg-[#3D2E1F] px-4 py-2 flex items-center gap-2">
        <Camera size={14} className="text-[#8B6914] dark:text-[#D4A574]" />
        <span className="text-xs text-[#6B5344] dark:text-[#B8A082]">
          Illustration: Naturalist Field Journal
        </span>
      </div>

      {/* MarshMellow's intro card */}
      <section className="px-4 pt-6">
        <div className="bg-[#E8F5E9] dark:bg-[#1E3A2F] rounded-2xl p-4 flex gap-4">
          <img
            src="/images/fieldnotes/salamanderolderthandinosaur/salamanderolderthandinosaursmarshmellow.png"
            alt="MarshMellow looking terrified"
            className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
          />
          <div>
            <p className="text-sm font-medium text-[#2D5A3D] dark:text-[#81C784] mb-1">
              MarshMellow's Take
            </p>
            <p className="text-[15px] text-[#2D2D2D] dark:text-[#E5E5E5] italic leading-relaxed">
              "I've met a lot of big personalities in my travels. This was the first time the personality came with its own zip code."
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
            I thought I was prepared. I'd done my research. Read the field guides. Studied the photos. I knew the Chinese Giant Salamander was big.
          </p>
          <p>
            I did not know it was <em>that</em> big.
          </p>
          <p>
            Picture this: I'm wading through a shallow stream in central China, minding my own business, feeling pretty good about myself, when I nearly step on what I assumed was a mossy rock. A mossy rock the size of a surfboard. A mossy rock with <em>legs</em>.
          </p>
          <p>
            It turned its head and looked at me.
          </p>
          <p>
            Reader, I screamed. Not a dignified yelp. Not a brave explorer's gasp. A full-body, high-pitched, "THAT'S NOT A ROCK" scream that probably scared every bird within a three-mile radius.
          </p>
          <p>
            The salamander did not seem impressed. It blinked at me once—slowly, the way your grandmother looks at you when you say you're "not hungry" and then eat seven cookies—and went back to sitting there. Just... existing. Being enormous. Judging me silently.
          </p>
          <p>
            These things can grow up to 1.8 meters long. That's nearly six feet. That's taller than most humans. That's <em>not</em> supposed to be a salamander. That's supposed to be a canoe.
          </p>
          <p>
            I called my friend Diego back at the research station. "Diego," I said, "I found one."
          </p>
          <p>
            "Congratulations," he said. "Did you scream?"
          </p>
          <p>
            I hung up on him.
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
            Here's the thing about Chinese Giant Salamanders (<em>Andrias davidianus</em>): they're not just big. They're ancient.
          </p>
          <p>
            And I don't mean "oh, that species is pretty old" ancient. I don't mean "your uncle's jokes" ancient. I mean they've been around for 170 <em>million</em> years. They were doing their thing when dinosaurs were just getting started. They watched the T-Rex show up, act very important for a while, and then dramatically exit. The salamanders remained. Unbothered. Moisturized. Enormous.
          </p>
          <p>
            They're called "living fossils" because they've barely changed since the Jurassic period. While everything else was evolving and adapting and growing feathers and figuring out thumbs, giant salamanders just said "no thanks, we're good."
          </p>
          <p>
            And honestly? Look at them. They're shaped like a pancake crossed with a grumpy uncle. They move like they're being paid by the hour. They've got tiny eyes that barely work and skin that looks like someone left them in the bath too long.
          </p>
          <p>
            And yet. ONE HUNDRED AND SEVENTY MILLION YEARS.
          </p>
          <p>
            Meanwhile, I've been around for twelve years and I still can't figure out how to fold a map.
          </p>
          <p>
            Other incredible facts I learned while trying to recover from my near-heart attack:
          </p>
          <p>
            They breathe through their <em>skin</em>. That wrinkly, bumpy skin isn't just for looks—it absorbs oxygen directly from the water. They have tiny lungs, but they're basically decorative at this point. Like a vestigial appendix. Or my sense of direction.
          </p>
          <p>
            They can sense prey through vibrations in the water. They're nearly blind, but they don't need to see you. They can <em>feel</em> you coming. Which is fine. That's fine. Not unsettling at all.
          </p>
          <p>
            They're called "baby fish" (<em>wá wá yú</em>) in Chinese because their distress call sounds eerily like a human baby crying. I have not personally heard this and I have no intention of changing that. Some things you don't need to experience firsthand.
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
              value="Mountain streams and lakes in central China (and my nightmares, briefly)"
            />
            <QuickFact
              icon={Eye}
              label="Size"
              value="Up to 1.8m (6 feet) and 50kg (110 lbs)—the world's largest amphibian"
            />
            <QuickFact
              icon={Skull}
              label="Diet"
              value="Fish, crayfish, crabs, and the occasional smaller salamander (family reunions must be awkward)"
            />
            <QuickFact
              icon={Clock}
              label="Lifespan"
              value="Can live over 50 years in the wild, possibly up to 100. They have time to hold grudges."
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
            I spent two days with those salamanders. Well, near them. Maintaining a respectful distance. Mostly because they didn't move, and also because I was still emotionally recovering.
          </p>
          <p>
            They're ambush predators who've perfected the art of sitting very, very still and waiting for dinner to swim by. It's like watching a very large, very patient rock play the world's slowest video game.
          </p>
          <p>
            And somewhere between hour four and hour five of watching a salamander do absolutely nothing, I had a thought:
          </p>
          <p>
            Sometimes survival isn't about being the fastest, the strongest, or the most adaptable. Sometimes it's about finding what works and sticking with it. For 170 million years.
          </p>
          <p>
            The dinosaurs are gone. The mammoths are gone. That one species of giant sloth—gone. Meanwhile, this wrinkly, slow, profoundly unbothered salamander just kept doing its thing. Same body plan. Same lifestyle. Same "I'll sit here and wait for food to arrive" energy.
          </p>
          <p>
            There's something weirdly comforting about that. In a world that's constantly demanding we change and adapt and optimize and hustle, this six-foot salamander has been living the same simple life since before the continents figured out where they wanted to be.
          </p>
          <p>
            Maybe some things don't need to be disrupted. Maybe some things are already perfect.
          </p>
          <p>
            (They do need to stop being endangered, though. Turns out surviving 170 million years doesn't prepare you for habitat loss and pollution. Some of us are working on that. More on this in a future dispatch.)
          </p>
          <p className="font-medium text-[#2D5A3D] dark:text-[#81C784]">
            Until next time—keep your eyes on the rocks. Sometimes they have legs.
          </p>
        </div>
      </section>

      {/* Location Map */}
      <section className="px-4 pb-6">
        <div className="rounded-xl overflow-hidden">
          <img
            src="/images/fieldnotes/salamanderolderthandinosaur/salamanderolderthandinosaursmap.jpg"
            alt="Map showing giant salamander expedition location in China"
            className="w-full h-auto"
          />
        </div>
        <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] mt-2 text-center">
          Day 72 expedition location • Yangtze River Basin, China
        </p>
      </section>

      {/* Learn More - subtle links */}
      <section className="px-4 pb-6">
        <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-3">
          Want to learn more about giant salamander conservation?
        </p>
        <div className="flex flex-wrap gap-2">
          <a
            href="https://www.iucnredlist.org/species/179010104/48438418"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[#D32F2F] dark:text-[#EF5350] hover:underline"
          >
            <span>IUCN Red List</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#D32F2F]/10 dark:bg-[#D32F2F]/20 font-semibold uppercase">
              Critically Endangered
            </span>
            <ExternalLink size={12} />
          </a>
          <span className="text-[#6B7280]">•</span>
          <a
            href="https://amphibiaweb.org/species/3858"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[#2D5A3D] dark:text-[#81C784] hover:underline"
          >
            <span>AmphibiaWeb</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </section>

      {/* Previous Field Note link */}
      <section className="px-4 pb-6">
        <Link to="/field-notes/glass-half-full" className="block group">
          <div className="relative h-44 rounded-2xl overflow-hidden">
            {/* Map background */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(/images/fieldnotes/glasshalffull/glasshalffullmap.jpg)',
              }}
            />

            {/* Green overlay for cohesion */}
            <div className="absolute inset-0 bg-[#1E3A2F]/40" />

            {/* MarshMellow - positioned right */}
            <div className="absolute right-1 bottom-0 w-32 h-32 z-10">
              <img
                src="/images/fieldnotes/glasshalffull/glasshalffullmarshmellow.png"
                alt="MarshMellow"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Dark gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              <div className="max-w-[55%]">
                <p className="text-[#81C784] text-xs font-semibold uppercase tracking-wider mb-1">
                  Previous Field Note
                </p>
                <h3 className="font-display text-lg font-bold text-white mb-1 leading-tight group-hover:text-[#81C784] transition-colors">
                  Glass Half Full
                </h3>
                <p className="text-white/80 text-sm">
                  Day 58: A frog with nothing to hide
                </p>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Coming Soon teaser */}
      <section className="px-4 pb-6">
        <div className="relative h-44 rounded-2xl overflow-hidden">
          {/* Map background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(/images/fieldnotes/thedadwhoatehiskids/thedadwhoatehiskidsmap.jpg)',
            }}
          />

          {/* Warm overlay for cohesion */}
          <div className="absolute inset-0 bg-[#3D2E1F]/50" />

          {/* MarshMellow - positioned right */}
          <div className="absolute right-1 bottom-0 w-32 h-32 z-10">
            <img
              src="/images/fieldnotes/thedadwhoatehiskids/thedadwhoatehiskids-marshmellow.png"
              alt="MarshMellow looking confused"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Dark gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 p-4 flex flex-col justify-end">
            <div className="max-w-[55%]">
              <p className="text-[#D4A574] text-xs font-semibold uppercase tracking-wider mb-1">
                Coming Soon
              </p>
              <h3 className="font-display text-lg font-bold text-white mb-1 leading-tight">
                The Dad Who Ate His Kids (On Purpose)
              </h3>
              <p className="text-white/80 text-sm">
                Day 85: Evolution said "put them WHERE?"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Share Button */}
      <div className="flex justify-center px-4 pb-6">
        <ShareButton
          title="The Salamander That's Older Than Dinosaurs - The Ribbit Report"
          text="170 million years old and still going! Check out MarshMellow's field notes about the Chinese Giant Salamander."
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
