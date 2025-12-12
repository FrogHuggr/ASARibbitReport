// Image with credit
export interface ImageWithCredit {
  src: string;
  alt: string;
  credit?: string;
  caption?: string;
}

// Section types for flexible content
export interface StorySection {
  id: string;
  type: 'story';
  title: string;
  titleColor?: string;
  content: string;
  attribution?: string;
  image?: ImageWithCredit;
}

export interface FactsSection {
  id: string;
  type: 'facts';
  title: string;
  titleColor?: string;
  displayAs?: 'cards' | 'list';
  facts: Array<{
    id: string;
    icon: string;
    iconLibrary?: 'lucide' | 'emoji';
    text: string;
    cardColor?: string;
    accentColor?: string;
  }>;
}

export interface AlertSection {
  id: string;
  type: 'alert';
  title: string;
  titleColor?: string;
  icon?: string;
  iconLibrary?: 'lucide' | 'emoji';
  stats?: Array<{
    value: string;
    label: string;
    color?: string;
  }>;
  content: string;
}

export interface ResearcherSection {
  id: string;
  type: 'researcher';
  title: string;
  titleColor?: string;
  displayAs?: 'card' | 'inline';
  cardColor?: string;
  borderColor?: string;
  researcher: {
    name: string;
    organization: string;
    project?: string;
    photo?: ImageWithCredit;
    quote?: {
      text: string;
      borderColor?: string;
    };
  };
}

export interface OrganizationSection {
  id: string;
  type: 'organization';
  title: string;
  titleColor?: string;
  content: string;
  image?: ImageWithCredit;
}

export type DispatchSection =
  | StorySection
  | FactsSection
  | AlertSection
  | ResearcherSection
  | OrganizationSection;

export interface Dispatch {
  id: string;
  slug?: string;

  title: string;
  subtitle?: string;

  species: {
    commonName: string;
    scientificName: string;
    displayName?: string;
    displayScientific?: string;
  };

  location: {
    country: string;
    countryCode: string;
    region: string;
    displayLocation?: string;
  };

  iucnStatus: {
    code: 'CR' | 'EN' | 'VU' | 'NT' | 'LC';
    label: string;
    color?: string;
  };

  colors: {
    primary: string;
    secondary: string;
    accent: string;
    cardBackground?: string;
    factCardBackground?: string;
  };

  countryStamp?: {
    label: string;
    backgroundColor?: string;
    textColor?: string;
    rotation?: number;
  };

  heroImage: ImageWithCredit;

  sections: DispatchSection[];

  // Legacy fields for backward compatibility
  heroImageLegacy?: string;
  detailImage?: string;
  researcher?: {
    name: string;
    organization: string;
    quote: string;
    photo?: string;
  };
  whySpecial?: string;
  funFacts?: Array<{
    icon: string;
    text: string;
  }>;
  palette?: {
    primary: string;
    secondary: string;
    accent: string;
  };

  meta?: {
    photographer?: string;
    fieldPhotoCredit?: string;
    contentSource?: string;
    dateAdded?: string;
    issue?: number;
  };
}

export const dispatches: Dispatch[] = [
  {
    id: 'india-western-ghats',
    slug: 'resplendent-grass-frog',

    title: 'Born Ready',
    subtitle: 'The Resplendent Grass Frog',

    species: {
      commonName: 'Resplendent Grass Frog',
      scientificName: 'Raorchestes resplendens',
      displayName: 'Resplendent Grass Frog',
      displayScientific: 'Raorchestes resplendens',
    },

    location: {
      country: 'India',
      countryCode: 'IN',
      region: 'Western Ghats',
      displayLocation: 'Western Ghats, India',
    },

    iucnStatus: {
      code: 'CR',
      label: 'Critically Endangered',
      color: '#D32F2F',
    },

    colors: {
      primary: '#2D5A3D',
      secondary: '#E8B84A',
      accent: '#6B8E4E',
      cardBackground: '#F7F5F0',
      factCardBackground: '#FDF8E8',
    },

    countryStamp: {
      label: 'INDIA',
      backgroundColor: '#2D5A3D',
      textColor: '#FFFFFF',
      rotation: -3,
    },

    heroImage: {
      src: '/images/dispatches/india-western-ghats/hero.jpg',
      alt: 'A tiny orange-gold Resplendent Grass Frog perched on a grass blade in the Western Ghats',
      credit: 'Harikrishnan S',
    },

    sections: [
      {
        id: 'mountain-survivors',
        type: 'story',
        title: 'Mountain Survivors',
        titleColor: '#2D5A3D',
        content: 'Resplendent Grass Frogs are tiny, direct-developing tree frogs that have evolved to survive in the cold, open grasslands in the mountains of Western Ghats. More than 70% of these grasslands have disappeared during the 20th century due to exotic plantations. Now, the surviving frogs are threatened by degradation of their remaining habitat, and the looming climate change crisis.',
        attribution: 'Harikrishnan S',
        image: {
          src: '/images/dispatches/india-western-ghats/habitat.jpg',
          alt: 'Resplendent Grass Frog in its montane grassland habitat',
          credit: 'Harikrishnan S',
          caption: 'Found only in the montane grasslands of the southern Western Ghats.',
        },
      },
      {
        id: 'fun-facts',
        type: 'facts',
        title: 'Fun Facts',
        titleColor: '#2D5A3D',
        displayAs: 'cards',
        facts: [
          {
            id: 'no-tadpole',
            icon: '🥚',
            iconLibrary: 'emoji',
            text: 'They skip the tadpole stage, the eggs hatch straight into miniature frogs!',
            cardColor: '#FDF8E8',
            accentColor: '#E8B84A',
          },
          {
            id: 'walkers',
            icon: '🚶',
            iconLibrary: 'emoji',
            text: "These little hoppers actually don't like to hop much at all... Instead, they walk clumsily along grass blades.",
            cardColor: '#F0F7F1',
            accentColor: '#6B8E4E',
          },
        ],
      },
      {
        id: 'threats',
        type: 'alert',
        title: 'Why They Need Us',
        titleColor: '#2D5A3D',
        icon: '⚠️',
        iconLibrary: 'emoji',
        stats: [
          {
            value: '70%',
            label: 'of their grassland habitat has vanished',
            color: '#D32F2F',
          },
        ],
        content: "Exotic plantations replaced their mountain grasslands. Climate change threatens what's left. These tiny survivors are running out of room.",
      },
      {
        id: 'researcher',
        type: 'researcher',
        title: 'Meet the Researcher',
        titleColor: '#2D5A3D',
        displayAs: 'card',
        cardColor: '#F7F5F0',
        borderColor: '#E8B84A',
        researcher: {
          name: 'Harikrishnan S',
          organization: 'Wildlife Trust of India',
          project: 'Amphibian Recovery Project',
          photo: {
            src: '/images/dispatches/india-western-ghats/researcher.jpg',
            alt: 'Harikrishnan S in the field wearing a cap',
            credit: 'Sreenanth K',
          },
          quote: {
            text: 'The best part about working with frogs is watching them in the wild. I mean, have you seen how cute they are?',
            borderColor: '#2D5A3D',
          },
        },
      },
      {
        id: 'conservation',
        type: 'organization',
        title: 'On the Ground',
        titleColor: '#2D5A3D',
        content: "Wildlife Trust of India's Amphibian Recovery Project works to conserve threatened amphibians of the Western Ghats.",
        image: {
          src: '/images/dispatches/india-western-ghats/field-team.jpg',
          alt: 'Wildlife Trust of India team conducting amphibian surveys in the Western Ghats',
          credit: 'Sreenanth K',
        },
      },
    ],

    meta: {
      photographer: 'Harikrishnan S',
      fieldPhotoCredit: 'Sreenanth K',
      contentSource: 'Harikrishnan S, Wildlife Trust of India',
      dateAdded: '2025-01',
      issue: 2,
    },
  },
  {
    id: 'panama',
    slug: 'spiny-headed-treefrog',
    title: 'Crown of Thorns',
    subtitle: 'The Spiny-headed Treefrog',
    species: {
      commonName: 'Spiny-headed Treefrog',
      scientificName: 'Anotheca spinosa',
    },
    location: {
      country: 'Panama',
      countryCode: 'PA',
      region: 'Tropical Rainforest',
      displayLocation: 'Tropical Rainforest, Panama',
    },
    iucnStatus: {
      code: 'VU',
      label: 'Vulnerable',
    },
    colors: {
      primary: '#6B3FA0',
      secondary: '#F4B942',
      accent: '#2D5A3D',
    },
    heroImage: {
      src: '/images/dispatches/panama/hero.jpg',
      alt: 'Spiny-headed Treefrog',
    },
    sections: [
      {
        id: 'story',
        type: 'story',
        title: 'Rainforest Royalty',
        content: 'Imagine a frog wearing a crown! The Spiny-headed Treefrog has bony spines on its head that make it look like royalty of the rainforest. These incredible climbers live high in the trees of Panama\'s lush tropical forests, raising their tadpoles in tiny pools of water that collect in tree holes. They\'re devoted parents who check on their babies regularly.',
      },
      {
        id: 'fun-facts',
        type: 'facts',
        title: 'Fun Facts',
        facts: [
          { id: 'crown', icon: '👑', text: 'Bony spines on their head give them a crown-like appearance' },
          { id: 'treeholes', icon: '🌳', text: 'Raise babies in tree holes filled with rainwater' },
          { id: 'eggs', icon: '🍳', text: 'Mom feeds unfertilized eggs to her hungry tadpoles' },
        ],
      },
      {
        id: 'researcher',
        type: 'researcher',
        title: 'Meet the Researcher',
        researcher: {
          name: 'Karina Rodríguez',
          organization: 'Smithsonian Tropical Research Institute',
          quote: {
            text: 'The spiny-headed treefrog is like a tiny dragon of the rainforest. Those spines aren\'t just for show—they help protect these amazing climbers.',
          },
        },
      },
    ],
  },
  {
    id: 'peru',
    slug: 'lake-junin-frog',
    title: 'Giant of the Andes',
    subtitle: 'The Lake Junín Frog',
    species: {
      commonName: 'Lake Junín Frog',
      scientificName: 'Telmatobius macrostomus',
    },
    location: {
      country: 'Peru',
      countryCode: 'PE',
      region: 'Lake Junín',
      displayLocation: 'Lake Junín, Peru',
    },
    iucnStatus: {
      code: 'CR',
      label: 'Critically Endangered',
    },
    colors: {
      primary: '#2E6A8E',
      secondary: '#D4A634',
      accent: '#8B6914',
    },
    heroImage: {
      src: '/images/dispatches/peru/hero.jpg',
      alt: 'Lake Junín Frog',
    },
    sections: [
      {
        id: 'story',
        type: 'story',
        title: 'High Altitude Giant',
        content: 'High in the Peruvian Andes, at over 4,000 meters above sea level, lives one of the world\'s largest aquatic frogs. The Lake Junín Frog can grow as big as your hand! These gentle giants have extra-baggy skin that helps them breathe underwater in the thin mountain air. They\'ve survived in this extreme environment for millions of years.',
      },
      {
        id: 'fun-facts',
        type: 'facts',
        title: 'Fun Facts',
        facts: [
          { id: 'altitude', icon: '🏔️', text: 'Live at 4,000+ meters—higher than most clouds!' },
          { id: 'size', icon: '📏', text: 'Can grow up to 15 cm—one of the biggest aquatic frogs' },
          { id: 'skin', icon: '🫁', text: 'Loose, baggy skin helps them absorb oxygen underwater' },
        ],
      },
      {
        id: 'researcher',
        type: 'researcher',
        title: 'Meet the Researcher',
        researcher: {
          name: 'Luis Castillo',
          organization: 'Denver Zoo Conservation',
          quote: {
            text: 'The Lake Junín frog is a gentle giant. Saving them means protecting one of the highest lakes in the world and all the life that depends on it.',
          },
        },
      },
    ],
  },
  {
    id: 'argentina',
    slug: 'valcheta-frog',
    title: 'Desert Oasis Dweller',
    subtitle: 'The Valcheta Frog',
    species: {
      commonName: 'Valcheta Frog',
      scientificName: 'Pleurodema somuncurense',
    },
    location: {
      country: 'Argentina',
      countryCode: 'AR',
      region: 'Valcheta Stream',
      displayLocation: 'Valcheta Stream, Argentina',
    },
    iucnStatus: {
      code: 'CR',
      label: 'Critically Endangered',
    },
    colors: {
      primary: '#C67B4E',
      secondary: '#7D9A78',
      accent: '#D4B896',
    },
    heroImage: {
      src: '/images/dispatches/argentina/hero.jpg',
      alt: 'Valcheta Frog',
    },
    sections: [
      {
        id: 'story',
        type: 'story',
        title: 'Warm Springs Survivor',
        content: 'In the windswept Patagonian steppe of Argentina, there\'s a secret: warm springs that bubble up from deep underground, creating a tiny oasis in the desert. The Valcheta Frog lives ONLY here, in these few kilometers of warm water surrounded by harsh, cold desert. They\'re found nowhere else on Earth!',
      },
      {
        id: 'fun-facts',
        type: 'facts',
        title: 'Fun Facts',
        facts: [
          { id: 'desert', icon: '🏜️', text: 'Live in warm springs surrounded by cold desert' },
          { id: 'warmth', icon: '🌡️', text: 'Their home stays warm year-round from geothermal heat' },
          { id: 'endemic', icon: '📍', text: 'Found in only ONE place on the entire planet' },
        ],
      },
      {
        id: 'researcher',
        type: 'researcher',
        title: 'Meet the Researcher',
        researcher: {
          name: 'Rodrigo Calvo',
          organization: 'Universidad Nacional del Comahue',
          quote: {
            text: 'The Valcheta frog lives in one of the most unlikely places—a warm stream in the middle of the cold Patagonian desert. It\'s like finding a tropical island in Antarctica!',
          },
        },
      },
    ],
  },
  {
    id: 'nepal',
    slug: 'mahabharat-torrent-frog',
    title: 'River Warrior',
    subtitle: 'The Mahabharat Torrent Frog',
    species: {
      commonName: 'Mahabharat Torrent Frog',
      scientificName: 'Amolops himalayanus',
    },
    location: {
      country: 'Nepal',
      countryCode: 'NP',
      region: 'Mahabharat Range',
      displayLocation: 'Mahabharat Range, Nepal',
    },
    iucnStatus: {
      code: 'EN',
      label: 'Endangered',
    },
    colors: {
      primary: '#4A6072',
      secondary: '#3D8B8B',
      accent: '#A8B5BD',
    },
    heroImage: {
      src: '/images/dispatches/nepal/hero.jpg',
      alt: 'Mahabharat Torrent Frog',
    },
    sections: [
      {
        id: 'story',
        type: 'story',
        title: 'Master of the Rapids',
        content: 'In the shadow of the Himalayas, where crystal-clear mountain streams rush down steep valleys, the Mahabharat Torrent Frog has mastered the art of extreme living. These incredible frogs can cling to wet rocks in fast-moving water using special suction-cup toe pads. They\'re like the rock climbers of the frog world!',
      },
      {
        id: 'fun-facts',
        type: 'facts',
        title: 'Fun Facts',
        facts: [
          { id: 'toepads', icon: '🧗', text: 'Special toe pads work like suction cups on wet rocks' },
          { id: 'strength', icon: '💪', text: 'Can resist being swept away by rushing water' },
          { id: 'tadpoles', icon: '❄️', text: 'Tadpoles have sucker mouths to grip rocks in the current' },
        ],
      },
      {
        id: 'researcher',
        type: 'researcher',
        title: 'Meet the Researcher',
        researcher: {
          name: 'Suman Sapkota',
          organization: 'Nepal Conservation Research Center',
          quote: {
            text: 'These frogs are athletes! They cling to rocks in rushing mountain streams that would sweep away most other animals.',
          },
        },
      },
    ],
  },
  {
    id: 'india-kudremukh',
    slug: 'indigo-bush-frog',
    title: 'Monsoon Singer',
    subtitle: 'The Indigo Bush Frog',
    species: {
      commonName: 'Indigo Bush Frog',
      scientificName: 'Raorchestes nerostagona',
    },
    location: {
      country: 'India',
      countryCode: 'IN',
      region: 'Kudremukh',
      displayLocation: 'Kudremukh, India',
    },
    iucnStatus: {
      code: 'EN',
      label: 'Endangered',
    },
    colors: {
      primary: '#3A5F7D',
      secondary: '#4A7B4A',
      accent: '#8FA4AF',
    },
    heroImage: {
      src: '/images/dispatches/india-kudremukh/hero.jpg',
      alt: 'Indigo Bush Frog',
    },
    sections: [
      {
        id: 'story',
        type: 'story',
        title: 'Voices in the Rain',
        content: 'During India\'s monsoon season, the misty forests of Kudremukh transform into a concert hall. The Indigo Bush Frog, with its striking blue-purple coloring, is one of the star performers. These tiny frogs call from bushes and low vegetation, their songs echoing through the rain-soaked forest. Males are devoted dads who guard their eggs until they hatch.',
      },
      {
        id: 'fun-facts',
        type: 'facts',
        title: 'Fun Facts',
        facts: [
          { id: 'color', icon: '💜', text: 'Beautiful indigo-purple coloring blends with shadows' },
          { id: 'song', icon: '🎵', text: 'Males sing to attract mates during monsoon season' },
          { id: 'dads', icon: '👨‍👧', text: 'Frog dads guard the eggs until the babies hatch' },
        ],
      },
      {
        id: 'researcher',
        type: 'researcher',
        title: 'Meet the Researcher',
        researcher: {
          name: 'Amoghavarsha M',
          organization: 'Centre for Wildlife Studies',
          quote: {
            text: 'When the monsoon arrives, the forests come alive with the calls of these beautiful blue frogs. Each species has its own unique song.',
          },
        },
      },
    ],
  },
];

export const getDispatchById = (id: string): Dispatch | undefined => {
  return dispatches.find(d => d.id === id);
};

export const getDispatchBySlug = (slug: string): Dispatch | undefined => {
  return dispatches.find(d => d.slug === slug);
};

export const getDispatchByCountry = (country: string): Dispatch[] => {
  return dispatches.filter(d => d.location.country.toLowerCase() === country.toLowerCase());
};
