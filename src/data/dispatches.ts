export interface Dispatch {
  id: string;
  country: string;
  region: string;
  countryCode: string;
  speciesName: string;
  commonName: string;
  title: string;
  iucnStatus: 'CR' | 'EN' | 'VU' | 'NT' | 'LC';
  iucnLabel: string;
  researcher: {
    name: string;
    organization: string;
    quote: string;
    photo?: string;
  };
  heroImage?: string;
  whySpecial: string;
  funFacts: Array<{
    icon: string;
    text: string;
  }>;
  palette: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export const dispatches: Dispatch[] = [
  {
    id: 'india-western-ghats',
    country: 'India',
    region: 'Western Ghats',
    countryCode: 'IN',
    speciesName: 'Nyctibatrachus karnatakaensis',
    commonName: 'Resplendent Grass Frog',
    title: 'Born Ready',
    iucnStatus: 'CR',
    iucnLabel: 'Critically Endangered',
    researcher: {
      name: 'Harikrishnan S',
      organization: 'Wildlife Trust of India',
      quote: 'These tiny frogs skip the tadpole stage entirely—they hatch as fully formed froglets, ready to take on the world from day one.',
    },
    whySpecial: 'The Resplendent Grass Frog is one of nature\'s most remarkable survivors. Unlike most frogs that start life as tadpoles swimming in water, these little champions hatch directly as tiny froglets! They live in the misty forests of India\'s Western Ghats, one of the world\'s biodiversity hotspots. With their gorgeous golden-green coloring and unique life cycle, they\'re proof that evolution loves to surprise us.',
    funFacts: [
      { icon: '🥚', text: 'Skip the tadpole stage completely—hatch as mini frogs!' },
      { icon: '🚶', text: 'Walk instead of hop, moving carefully through leaf litter' },
      { icon: '🔦', text: 'Hide from flashlights—they\'re camera shy!' },
    ],
    palette: {
      primary: '#2D5A3D',
      secondary: '#E8B84A',
      accent: '#6B8E4E',
    },
  },
  {
    id: 'panama',
    country: 'Panama',
    region: 'Tropical Rainforest',
    countryCode: 'PA',
    speciesName: 'Anotheca spinosa',
    commonName: 'Spiny-headed Treefrog',
    title: 'Crown of Thorns',
    iucnStatus: 'VU',
    iucnLabel: 'Vulnerable',
    researcher: {
      name: 'Karina Rodríguez',
      organization: 'Smithsonian Tropical Research Institute',
      quote: 'The spiny-headed treefrog is like a tiny dragon of the rainforest. Those spines aren\'t just for show—they help protect these amazing climbers.',
    },
    whySpecial: 'Imagine a frog wearing a crown! The Spiny-headed Treefrog has bony spines on its head that make it look like royalty of the rainforest. These incredible climbers live high in the trees of Panama\'s lush tropical forests, raising their tadpoles in tiny pools of water that collect in tree holes. They\'re devoted parents who check on their babies regularly.',
    funFacts: [
      { icon: '👑', text: 'Bony spines on their head give them a crown-like appearance' },
      { icon: '🌳', text: 'Raise babies in tree holes filled with rainwater' },
      { icon: '🍳', text: 'Mom feeds unfertilized eggs to her hungry tadpoles' },
    ],
    palette: {
      primary: '#6B3FA0',
      secondary: '#F4B942',
      accent: '#2D5A3D',
    },
  },
  {
    id: 'peru',
    country: 'Peru',
    region: 'Lake Junín',
    countryCode: 'PE',
    speciesName: 'Telmatobius macrostomus',
    commonName: 'Lake Junín Frog',
    title: 'Giant of the Andes',
    iucnStatus: 'CR',
    iucnLabel: 'Critically Endangered',
    researcher: {
      name: 'Luis Castillo',
      organization: 'Denver Zoo Conservation',
      quote: 'The Lake Junín frog is a gentle giant. Saving them means protecting one of the highest lakes in the world and all the life that depends on it.',
    },
    whySpecial: 'High in the Peruvian Andes, at over 4,000 meters above sea level, lives one of the world\'s largest aquatic frogs. The Lake Junín Frog can grow as big as your hand! These gentle giants have extra-baggy skin that helps them breathe underwater in the thin mountain air. They\'ve survived in this extreme environment for millions of years.',
    funFacts: [
      { icon: '🏔️', text: 'Live at 4,000+ meters—higher than most clouds!' },
      { icon: '📏', text: 'Can grow up to 15 cm—one of the biggest aquatic frogs' },
      { icon: '🫁', text: 'Loose, baggy skin helps them absorb oxygen underwater' },
    ],
    palette: {
      primary: '#2E6A8E',
      secondary: '#D4A634',
      accent: '#8B6914',
    },
  },
  {
    id: 'argentina',
    country: 'Argentina',
    region: 'Valcheta Stream',
    countryCode: 'AR',
    speciesName: 'Pleurodema somuncurense',
    commonName: 'Valcheta Frog',
    title: 'Desert Oasis Dweller',
    iucnStatus: 'CR',
    iucnLabel: 'Critically Endangered',
    researcher: {
      name: 'Rodrigo Calvo',
      organization: 'Universidad Nacional del Comahue',
      quote: 'The Valcheta frog lives in one of the most unlikely places—a warm stream in the middle of the cold Patagonian desert. It\'s like finding a tropical island in Antarctica!',
    },
    whySpecial: 'In the windswept Patagonian steppe of Argentina, there\'s a secret: warm springs that bubble up from deep underground, creating a tiny oasis in the desert. The Valcheta Frog lives ONLY here, in these few kilometers of warm water surrounded by harsh, cold desert. They\'re found nowhere else on Earth!',
    funFacts: [
      { icon: '🏜️', text: 'Live in warm springs surrounded by cold desert' },
      { icon: '🌡️', text: 'Their home stays warm year-round from geothermal heat' },
      { icon: '📍', text: 'Found in only ONE place on the entire planet' },
    ],
    palette: {
      primary: '#C67B4E',
      secondary: '#7D9A78',
      accent: '#D4B896',
    },
  },
  {
    id: 'nepal',
    country: 'Nepal',
    region: 'Mahabharat Range',
    countryCode: 'NP',
    speciesName: 'Amolops himalayanus',
    commonName: 'Mahabharat Torrent Frog',
    title: 'River Warrior',
    iucnStatus: 'EN',
    iucnLabel: 'Endangered',
    researcher: {
      name: 'Suman Sapkota',
      organization: 'Nepal Conservation Research Center',
      quote: 'These frogs are athletes! They cling to rocks in rushing mountain streams that would sweep away most other animals.',
    },
    whySpecial: 'In the shadow of the Himalayas, where crystal-clear mountain streams rush down steep valleys, the Mahabharat Torrent Frog has mastered the art of extreme living. These incredible frogs can cling to wet rocks in fast-moving water using special suction-cup toe pads. They\'re like the rock climbers of the frog world!',
    funFacts: [
      { icon: '🧗', text: 'Special toe pads work like suction cups on wet rocks' },
      { icon: '💪', text: 'Can resist being swept away by rushing water' },
      { icon: '❄️', text: 'Tadpoles have sucker mouths to grip rocks in the current' },
    ],
    palette: {
      primary: '#4A6072',
      secondary: '#3D8B8B',
      accent: '#A8B5BD',
    },
  },
  {
    id: 'india-kudremukh',
    country: 'India',
    region: 'Kudremukh',
    countryCode: 'IN',
    speciesName: 'Raorchestes nerostagona',
    commonName: 'Indigo Bush Frog',
    title: 'Monsoon Singer',
    iucnStatus: 'EN',
    iucnLabel: 'Endangered',
    researcher: {
      name: 'Amoghavarsha M',
      organization: 'Centre for Wildlife Studies',
      quote: 'When the monsoon arrives, the forests come alive with the calls of these beautiful blue frogs. Each species has its own unique song.',
    },
    whySpecial: 'During India\'s monsoon season, the misty forests of Kudremukh transform into a concert hall. The Indigo Bush Frog, with its striking blue-purple coloring, is one of the star performers. These tiny frogs call from bushes and low vegetation, their songs echoing through the rain-soaked forest. Males are devoted dads who guard their eggs until they hatch.',
    funFacts: [
      { icon: '💜', text: 'Beautiful indigo-purple coloring blends with shadows' },
      { icon: '🎵', text: 'Males sing to attract mates during monsoon season' },
      { icon: '👨‍👧', text: 'Frog dads guard the eggs until the babies hatch' },
    ],
    palette: {
      primary: '#3A5F7D',
      secondary: '#4A7B4A',
      accent: '#8FA4AF',
    },
  },
];

export const getDispatchById = (id: string): Dispatch | undefined => {
  return dispatches.find(d => d.id === id);
};

export const getDispatchByCountry = (country: string): Dispatch[] => {
  return dispatches.filter(d => d.country.toLowerCase() === country.toLowerCase());
};
