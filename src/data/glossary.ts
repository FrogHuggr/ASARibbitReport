// Glossary terms for The Ribbit Report - kid-friendly definitions for ages 9-12

export interface GlossaryTerm {
  term: string;
  pronunciation?: string;
  definition: string;
  category: 'scientific' | 'conservation' | 'geographic';
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "adaptations",
    definition: "Special features or behaviors that help an animal survive in its environment. A frog's sticky toe pads are an adaptation for climbing trees.",
    category: "scientific"
  },
  {
    term: "amphibian",
    pronunciation: "am-FIB-ee-un",
    definition: "A group of animals that usually start life in water with gills, then grow lungs to live on land. Frogs, toads, salamanders, and caecilians are all amphibians.",
    category: "scientific"
  },
  {
    term: "aquatic",
    pronunciation: "uh-KWAH-tik",
    definition: "Living in or spending most of your time in water. Some frogs are fully aquatic, meaning they never leave the water.",
    category: "scientific"
  },
  {
    term: "bioacoustic recorders",
    pronunciation: "BY-oh-uh-KOO-stik",
    definition: "Special devices that record animal sounds in the wild. Scientists use them to listen for frog calls without having to be there in person.",
    category: "scientific"
  },
  {
    term: "biologist",
    pronunciation: "by-OL-oh-jist",
    definition: "A scientist who studies living things like plants, animals, and tiny organisms.",
    category: "scientific"
  },
  {
    term: "bromeliad",
    pronunciation: "bro-MEE-lee-ad",
    definition: "A tropical plant with stiff leaves that form a cup shape in the center. Rainwater collects in these cups, creating tiny pools where some frogs raise their tadpoles.",
    category: "scientific"
  },
  {
    term: "camouflage",
    pronunciation: "KAM-oh-flahzh",
    definition: "Colors or patterns that help an animal blend in with its surroundings so predators can't see it easily.",
    category: "scientific"
  },
  {
    term: "captive-bred",
    definition: "Animals that were born and raised by people in zoos, labs, or conservation centers rather than in the wild.",
    category: "scientific"
  },
  {
    term: "cryogenic freezing",
    pronunciation: "cry-oh-JEN-ik",
    definition: "Using extremely cold temperatures to preserve cells or tissue for a very long time. Scientists can freeze frog cells to help save species for the future.",
    category: "scientific"
  },
  {
    term: "direct-developing",
    definition: "Frogs that skip the tadpole stage completely. Their eggs hatch as tiny, fully-formed froglets instead of swimming tadpoles.",
    category: "scientific"
  },
  {
    term: "ecologist",
    pronunciation: "ee-KOL-oh-jist",
    definition: "A scientist who studies how living things interact with each other and their environment.",
    category: "scientific"
  },
  {
    term: "endemic",
    pronunciation: "en-DEM-ik",
    definition: "Found in only one specific place and nowhere else on Earth. Many frogs are endemic to a single mountain, forest, or stream.",
    category: "scientific"
  },
  {
    term: "ecosystem",
    pronunciation: "EE-koh-sis-tum",
    definition: "A community of living things and their environment all working together. A rainforest ecosystem includes the trees, animals, insects, soil, and water.",
    category: "scientific"
  },
  {
    term: "extinction",
    pronunciation: "ek-STINK-shun",
    definition: "When every single member of a species has died and none are left anywhere on Earth.",
    category: "scientific"
  },
  {
    term: "extinct",
    pronunciation: "ek-STINKT",
    definition: "A species that no longer exists anywhere on Earth. Once an animal goes extinct, it's gone forever.",
    category: "scientific"
  },
  {
    term: "genetic material",
    pronunciation: "juh-NET-ik",
    definition: "The instructions inside every living cell that determine what an organism looks like and how it works. It's like a recipe book for building a frog.",
    category: "scientific"
  },
  {
    term: "habitat",
    pronunciation: "HAB-ih-tat",
    definition: "The natural home where an animal or plant lives. A frog's habitat might be a rainforest, a stream, or a wetland.",
    category: "scientific"
  },
  {
    term: "indicator species",
    definition: "Animals or plants that show us how healthy an environment is. Because frogs are so sensitive to pollution, they're great indicator species.",
    category: "scientific"
  },
  {
    term: "invasive",
    pronunciation: "in-VAY-siv",
    definition: "A species that has been brought to a new place where it doesn't belong and causes problems for the animals and plants that already live there.",
    category: "scientific"
  },
  {
    term: "metamorphosis",
    pronunciation: "met-uh-MOR-fuh-sis",
    definition: "A big physical change an animal goes through as it grows up. When a tadpole grows legs, loses its tail, and becomes a frog, that's metamorphosis.",
    category: "scientific"
  },
  {
    term: "microendemics",
    pronunciation: "MY-kro-en-DEM-iks",
    definition: "Species that live in an extremely tiny area, sometimes just one hillside or a single stream. These animals are especially vulnerable because their entire world is so small.",
    category: "scientific"
  },
  {
    term: "montane",
    pronunciation: "mon-TAYN",
    definition: "Having to do with mountains. Montane forests are forests found on mountain slopes.",
    category: "scientific"
  },
  {
    term: "overwinter",
    definition: "How an animal survives through the cold winter months. Some frogs overwinter by burrowing underground or hiding under rocks.",
    category: "scientific"
  },
  {
    term: "shola",
    pronunciation: "SHO-lah",
    definition: "A type of tropical mountain forest found in southern India. These misty forests are home to many unique frogs.",
    category: "scientific"
  },
  {
    term: "species",
    pronunciation: "SPEE-sheez",
    definition: "A group of living things that are similar and can have babies together. The Red-eyed Tree Frog is one species, and the Poison Dart Frog is another.",
    category: "scientific"
  },
  {
    term: "tadpole",
    definition: "The baby stage of a frog or toad. Tadpoles live in water, breathe through gills, and have tails instead of legs.",
    category: "scientific"
  },
  {
    term: "torrent",
    pronunciation: "TOR-ent",
    definition: "A fast-moving stream of water, often rushing down a mountainside. Some frogs have special adaptations to live in torrents.",
    category: "scientific"
  },
  {
    term: "vertebrates",
    pronunciation: "VER-tuh-brits",
    definition: "Animals that have a backbone or spine. Fish, frogs, reptiles, birds, and mammals are all vertebrates.",
    category: "scientific"
  },
  {
    term: "vocalization",
    pronunciation: "voh-kuh-lih-ZAY-shun",
    definition: "The sounds an animal makes, especially to communicate. Frog calls are vocalizations that males use to attract mates.",
    category: "scientific"
  },
  {
    term: "biodiversity",
    pronunciation: "BY-oh-dih-VER-sih-tee",
    definition: "The variety of all living things in a place. A rainforest has high biodiversity because it's home to thousands of different species.",
    category: "conservation"
  },
  {
    term: "breeding sites",
    definition: "Places where animals come together to mate and have babies. Many frogs return to the same breeding sites year after year.",
    category: "conservation"
  },
  {
    term: "citizen science",
    definition: "When regular people help scientists collect information. You can do citizen science by recording frog calls in your neighborhood and sharing the data.",
    category: "conservation"
  },
  {
    term: "conservation",
    pronunciation: "kon-ser-VAY-shun",
    definition: "Protecting animals, plants, and wild places so they can survive into the future.",
    category: "conservation"
  },
  {
    term: "Critically Endangered",
    definition: "The most serious warning level for a species. It means the animal is at extremely high risk of going extinct in the wild very soon.",
    category: "conservation"
  },
  {
    term: "degradation",
    pronunciation: "deg-ruh-DAY-shun",
    definition: "When a natural place becomes damaged or less healthy over time, often because of pollution or human activity.",
    category: "conservation"
  },
  {
    term: "deforestation",
    pronunciation: "dee-for-eh-STAY-shun",
    definition: "Cutting down or clearing away forests. This destroys homes for countless animals, including many frogs.",
    category: "conservation"
  },
  {
    term: "habitat loss",
    definition: "When animals lose the places where they live, usually because humans build on the land, cut down forests, or drain wetlands.",
    category: "conservation"
  },
  {
    term: "head-start program",
    definition: "A conservation method where young animals are raised in a safe place until they're big enough to survive on their own, then released into the wild.",
    category: "conservation"
  },
  {
    term: "restoration",
    pronunciation: "res-tor-AY-shun",
    definition: "Bringing a damaged habitat back to health. This might mean planting trees, cleaning up pollution, or refilling wetlands with water.",
    category: "conservation"
  },
  {
    term: "sanctuary",
    pronunciation: "SANK-choo-air-ee",
    definition: "A protected place where animals can live safely without being hunted or having their homes destroyed.",
    category: "conservation"
  },
  {
    term: "threatened",
    definition: "A species that is likely to become endangered if we don't take action to protect it.",
    category: "conservation"
  },
  {
    term: "Andes",
    pronunciation: "AN-deez",
    definition: "The longest mountain range in the world, stretching along the western edge of South America. Many unique frogs live in these mountains.",
    category: "geographic"
  },
  {
    term: "bauxite",
    pronunciation: "BAWK-site",
    definition: "A type of rock that contains aluminum. Mining for bauxite can destroy frog habitats.",
    category: "geographic"
  },
  {
    term: "elevation",
    pronunciation: "el-uh-VAY-shun",
    definition: "How high a place is above sea level. Some frogs can only survive at certain elevations on mountains.",
    category: "geographic"
  },
  {
    term: "grasslands",
    definition: "Large open areas covered mainly in grasses rather than trees. Some toads and frogs make their homes in grasslands.",
    category: "geographic"
  },
  {
    term: "Himalayas",
    pronunciation: "him-uh-LAY-uhz",
    definition: "The highest mountain range on Earth, located in Asia between India, Nepal, Tibet, and neighboring countries.",
    category: "geographic"
  },
  {
    term: "lagoons",
    pronunciation: "luh-GOONZ",
    definition: "Shallow bodies of water separated from larger lakes or the ocean by sandbars or reefs.",
    category: "geographic"
  },
  {
    term: "monsoon",
    pronunciation: "mon-SOON",
    definition: "A season of heavy rainfall that happens every year in parts of Asia and other tropical regions. Many frogs breed during monsoon season.",
    category: "geographic"
  },
  {
    term: "Patagonia",
    pronunciation: "pat-uh-GO-nee-uh",
    definition: "A region at the southern tip of South America, shared by Argentina and Chile. It includes mountains, grasslands, and unique wildlife.",
    category: "geographic"
  },
  {
    term: "plateau",
    pronunciation: "pla-TOH",
    definition: "A large, flat area of land that sits higher than the land around it, like a table rising above the ground.",
    category: "geographic"
  },
  {
    term: "steppe",
    pronunciation: "STEP",
    definition: "A large area of flat, dry grassland with few trees. The Patagonian steppe can be cold and windy.",
    category: "geographic"
  },
  {
    term: "thermal springs",
    definition: "Places where naturally heated water bubbles up from underground. Some frogs depend on the warm water from thermal springs to survive in cold climates.",
    category: "geographic"
  },
  {
    term: "Western Ghats",
    pronunciation: "GAW-ts",
    definition: "A mountain range along the western coast of India. These misty, forested mountains are home to hundreds of frog species found nowhere else.",
    category: "geographic"
  },
  {
    term: "wetlands",
    definition: "Areas where the ground is soaked with water for most or all of the year, like swamps, marshes, and bogs. Wetlands are important homes for many amphibians.",
    category: "geographic"
  },
  {
    term: "Anura",
    pronunciation: "AN-yoo-rah",
    definition: "The scientific name for the group that includes all frogs and toads. It means 'without tail' in Greek because adult frogs don't have tails.",
    category: "scientific"
  },
  {
    term: "Bufonidae",
    pronunciation: "byoo-FAWN-ih-dee",
    definition: "The scientific family name for 'true toads.' These are the bumpy-skinned toads you might find in gardens or forests.",
    category: "scientific"
  },
  {
    term: "mucous glands",
    pronunciation: "MYOO-kus",
    definition: "Tiny organs in a frog's skin that produce a wet, slippery coating. This moisture helps frogs breathe through their skin and stay hydrated.",
    category: "scientific"
  },
  {
    term: "parotoid glands",
    pronunciation: "puh-ROT-oyd",
    definition: "Large bumps behind a toad's eyes that can release a bitter-tasting substance. This helps protect toads from predators who try to eat them.",
    category: "scientific"
  },
  {
    term: "gelatinous",
    pronunciation: "juh-LAT-in-us",
    definition: "Having a jelly-like texture. Frog and toad eggs are surrounded by a gelatinous coating that protects them.",
    category: "scientific"
  }
];

// Helper function to find a term (case-insensitive)
export function findGlossaryTerm(word: string): GlossaryTerm | undefined {
  const lowerWord = word.toLowerCase();
  return glossaryTerms.find(t => t.term.toLowerCase() === lowerWord);
}

// Get all terms sorted alphabetically
export function getGlossaryTermsSorted(): GlossaryTerm[] {
  return [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term));
}

// Get terms by category
export function getTermsByCategory(category: GlossaryTerm['category']): GlossaryTerm[] {
  return glossaryTerms.filter(t => t.category === category);
}
