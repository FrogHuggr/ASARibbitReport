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
    program?: string;
    bio?: string;
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

export interface LinksSection {
  id: string;
  type: 'links';
  title: string;
  titleColor?: string;
  links: Array<{
    id: string;
    label: string;
    url: string;
    icon?: string;
    iconLibrary?: 'lucide' | 'emoji';
  }>;
}

export type DispatchSection =
  | StorySection
  | FactsSection
  | AlertSection
  | ResearcherSection
  | OrganizationSection
  | LinksSection;

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

    title: "India's Living Jewel",
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
      src: '/images/dispatches/india-resplendent-grass-frog/hero.jpeg',
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
          src: '/images/dispatches/india-resplendent-grass-frog/detail.jpg',
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
            icon: 'egg',
            iconLibrary: 'lucide',
            text: 'They skip the tadpole stage, the eggs hatch straight into miniature frogs!',
            cardColor: '#FDF8E8',
            accentColor: '#E8B84A',
          },
          {
            id: 'walkers',
            icon: 'footprints',
            iconLibrary: 'lucide',
            text: "These little hoppers actually don't like to hop much at all... Instead, they walk clumsily along grass blades.",
            cardColor: '#F0F7F1',
            accentColor: '#E8B84A',
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
          program: 'Future Leaders of Amphibian Conservation',
          bio: "Harikrishnan is a wildlife biologist who leads the Amphibian Recovery Project in India's Western Ghats mountains. During his research career, he's discovered and named three species that were completely new to science! He works with local communities to protect threatened frogs in the complex landscape of forests and plantations.",
          photo: {
            src: '/images/dispatches/india-resplendent-grass-frog/researcher.jpg',
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
        id: 'dive-deeper',
        type: 'links',
        title: 'Dive Deeper',
        titleColor: '#2D5A3D',
        links: [
          {
            id: 'iucn',
            label: 'IUCN Red List',
            url: 'https://www.iucnredlist.org/species/189814/86897335',
            icon: 'circle-alert',
            iconLibrary: 'lucide',
          },
          {
            id: 'amphibiaweb',
            label: 'AmphibiaWeb',
            url: 'https://amphibiaweb.org/species/7509',
            icon: 'book-open',
            iconLibrary: 'lucide',
          },
        ],
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
    id: 'argentina-patagonia-frog',
    slug: 'patagonia-frog',
    title: "Patagonia's Shapeshifter",
    subtitle: 'The Patagonia Frog',
    species: {
      commonName: 'Patagonia Frog',
      scientificName: 'Atelognathus patagonicus',
    },
    location: {
      country: 'Argentina',
      countryCode: 'AR',
      region: 'Patagonia',
      displayLocation: 'Patagonia, Argentina',
    },
    iucnStatus: {
      code: 'CR',
      label: 'Critically Endangered',
    },
    colors: {
      primary: '#2E6A8E',
      secondary: '#C4A35A',
      accent: '#8B7355',
    },
    countryStamp: {
      label: 'ARGENTINA',
      backgroundColor: '#2E6A8E',
      textColor: '#FFFFFF',
      rotation: 3,
    },
    heroImage: {
      src: '/images/dispatches/argentina-patagonia-frog/hero.png',
      alt: 'Patagonia Frog in shallow water showing its golden-brown coloring and blue eye',
      credit: 'Facundo De los Santos',
    },
    sections: [
      {
        id: 'story',
        type: 'story',
        title: 'One Frog, Two Bodies',
        titleColor: '#2E6A8E',
        content: "This amazing frog has a superpower: it can change its body to survive the tough Patagonian weather!\n\nThe most common form lives underwater, with smooth skin and webbed feet made for swimming. But when the lagoons dry up at the end of summer, these frogs can change their shape! They lose some of the skin folds and webbing so they can live on land, hiding under rocks to stay safe.\n\nThey even change their diet, from eating tiny water creatures to catching land prey like ants and spiders. That's why their color changes too. Incredible, right?",
        attribution: 'Melisa Rolón',
        image: {
          src: '/images/dispatches/argentina-patagonia-frog/detail.png',
          alt: 'Six photos showing the two forms of the Patagonia Frog: aquatic form on left with skin folds and webbed feet, land form on right with reduced webbing',
          credit: 'Melisa Rolón',
          caption: 'Same species, two forms! The aquatic form (left) has skin folds and webbed feet for swimming. The land form (right) loses these features when lagoons dry up.',
        },
      },
      {
        id: 'fun-facts',
        type: 'facts',
        title: 'Fun Facts',
        titleColor: '#2E6A8E',
        displayAs: 'cards',
        facts: [
          {
            id: 'two-forms',
            icon: 'users',
            iconLibrary: 'lucide',
            text: 'Scientists first thought these were different species, but they\'re actually two forms of the same frog!',
            cardColor: '#FDF8E8',
            accentColor: '#C4A35A',
          },
          {
            id: 'overwinter',
            icon: 'snowflake',
            iconLibrary: 'lucide',
            text: 'Tadpoles can overwinter! They stay as tadpoles all winter and only become frogs when spring arrives.',
            cardColor: '#F0F7F1',
            accentColor: '#C4A35A',
          },
          {
            id: 'mystery',
            icon: 'help-circle',
            iconLibrary: 'lucide',
            text: "Mystery alert: Scientists still don't know what their eggs look like or where they're laid!",
            cardColor: '#FFF8F0',
            accentColor: '#C4A35A',
          },
        ],
      },
      {
        id: 'threats',
        type: 'alert',
        title: 'Why They Need Us',
        titleColor: '#2E6A8E',
        stats: [
          {
            value: 'CR',
            label: 'Critically Endangered',
            color: '#D32F2F',
          },
        ],
        content: 'These shapeshifting frogs live in only a few lagoons in Patagonia and nowhere else in the world. Climate change and habitat loss threaten their fragile wetland homes.',
      },
      {
        id: 'on-the-ground',
        type: 'organization',
        title: 'On the Ground',
        titleColor: '#2E6A8E',
        content: "Melisa and her team search for frogs using funnel traps and visual surveys, looking beneath rocks in the lagoons where the species lives. The Patagonian weather can be extreme, from snowy winters with frozen lagoons to hot summers with winds so strong they've blown away field equipment more than once!",
        image: {
          src: '/images/dispatches/argentina-patagonia-frog/field.jpg',
          alt: 'Two researchers searching for frogs in a shallow Patagonian lagoon surrounded by rocky steppe landscape',
          credit: 'Melisa Rolón',
        },
      },
      {
        id: 'researcher',
        type: 'researcher',
        title: 'Meet the Researcher',
        titleColor: '#2E6A8E',
        displayAs: 'card',
        cardColor: '#F7F5F0',
        borderColor: '#C4A35A',
        researcher: {
          name: 'Melisa Rolón',
          organization: 'Amphibian Conservation',
          program: 'Future Leaders of Amphibian Conservation',
          bio: "Melisa is from Argentina and finished her biology degree in 2022. Now she's working on her PhD while leading a conservation project for the Critically Endangered Patagonia Frog, including building sanctuaries and restoring habitat. She believes we can still protect amphibians if we act now.",
          photo: {
            src: '/images/dispatches/argentina-patagonia-frog/researcher.jpg',
            alt: 'Melisa Rolón in the field',
            credit: 'Melisa Rolón',
          },
          quote: {
            text: "This species lives in only a few lagoons in Patagonia and nowhere else in the world! Together with the water birds, they are the only vertebrates adapted to these habitats. Protecting them is everyone's responsibility!",
            borderColor: '#2E6A8E',
          },
        },
      },
      {
        id: 'dive-deeper',
        type: 'links',
        title: 'Dive Deeper',
        titleColor: '#2E6A8E',
        links: [
          {
            id: 'iucn',
            label: 'IUCN Red List',
            url: 'https://www.iucnredlist.org/species/56323/101427111',
            icon: 'circle-alert',
            iconLibrary: 'lucide',
          },
          {
            id: 'amphibiaweb',
            label: 'AmphibiaWeb',
            url: 'https://amphibiaweb.org/species/2566',
            icon: 'book-open',
            iconLibrary: 'lucide',
          },
        ],
      },
    ],
    meta: {
      photographer: 'Facundo De los Santos',
      fieldPhotoCredit: 'Melisa Rolón',
      contentSource: 'Melisa Rolón',
      dateAdded: '2025-01',
      issue: 2,
    },
  },
  {
    id: 'usa-green-frog',
    slug: 'green-frog',
    title: "Michigan's Familiar Friend",
    subtitle: 'The Green Frog',
    species: {
      commonName: 'Green Frog',
      scientificName: 'Lithobates clamitans',
    },
    location: {
      country: 'United States',
      countryCode: 'US',
      region: 'Michigan',
      displayLocation: 'Michigan, USA',
    },
    iucnStatus: {
      code: 'LC',
      label: 'Least Concern',
    },
    colors: {
      primary: '#3A6B52',
      secondary: '#5889A6',
      accent: '#B8860B',
    },
    countryStamp: {
      label: 'USA',
      backgroundColor: '#3A6B52',
      textColor: '#FFFFFF',
      rotation: -3,
    },
    heroImage: {
      src: '/images/dispatches/us-green-frog/hero.jpg',
      alt: 'Green Frog peeking out of the water at Holland Ponds, showing its distinctive green upper lip and golden eyes',
      credit: 'Tom Favazza',
    },
    sections: [
      {
        id: 'story',
        type: 'story',
        title: 'The Frog Next Door',
        titleColor: '#3A6B52',
        content: "Green Frogs are one of the most common frogs around the lakes and ponds of Michigan. But just because they're familiar doesn't mean they're not fascinating!\n\nThese frogs are important indicator species. That means scientists watch them closely because their health tells us a lot about the health of the whole ecosystem. If the frogs are doing well, the wetlands are probably doing well too. If something's wrong with the frogs, it's an early warning sign that something might be off in the environment.\n\nEven though they're a familiar sight, there's always something new to discover about them.",
        attribution: 'Trinity Favazza',
      },
      {
        id: 'fun-facts',
        type: 'facts',
        title: 'Fun Facts',
        titleColor: '#3A6B52',
        displayAs: 'cards',
        facts: [
          {
            id: 'color-change',
            icon: 'palette',
            iconLibrary: 'lucide',
            text: 'Green Frogs can change their skin color slightly to blend in with their surroundings or to absorb heat!',
            cardColor: '#FDF8E8',
            accentColor: '#5889A6',
          },
          {
            id: 'calls',
            icon: 'volume-2',
            iconLibrary: 'lucide',
            text: "They have up to six different types of calls. That's a lot of ways to say hello!",
            cardColor: '#F0F7F1',
            accentColor: '#5889A6',
          },
          {
            id: 'freeze',
            icon: 'snowflake',
            iconLibrary: 'lucide',
            text: 'Some can survive freezing during the winter and thaw back to life in the spring!',
            cardColor: '#FFF8F0',
            accentColor: '#5889A6',
          },
        ],
      },
      {
        id: 'researcher',
        type: 'researcher',
        title: 'Meet the Researcher',
        titleColor: '#3A6B52',
        displayAs: 'card',
        cardColor: '#F7F5F0',
        borderColor: '#5889A6',
        researcher: {
          name: 'Trinity Favazza',
          organization: 'Amphibian Conservation',
          program: 'Future Leaders of Amphibian Conservation',
          bio: "Trinity has been the Mayor of Amphibiville at the Detroit Zoo's National Amphibian Conservation Center since 2016. She started her own conservation campaign called Amphibian Conservation Rocks and runs a website to inspire young people worldwide. Her work has been featured on TV news and she's received awards including the President's Environmental Youth Award!",
          photo: {
            src: '/images/dispatches/us-green-frog/researcher.jpg',
            alt: 'Trinity Favazza',
            credit: 'Tom Favazza',
          },
          quote: {
            text: "Saving amphibians means saving our planet's future.",
            borderColor: '#3A6B52',
          },
        },
      },
      {
        id: 'dive-deeper',
        type: 'links',
        title: 'Dive Deeper',
        titleColor: '#3A6B52',
        links: [
          {
            id: 'iucn',
            label: 'IUCN Red List',
            url: 'https://www.iucnredlist.org/species/58578/193376512',
            icon: 'circle-alert',
            iconLibrary: 'lucide',
          },
          {
            id: 'amphibiaweb',
            label: 'AmphibiaWeb',
            url: 'https://amphibiaweb.org/species/5009',
            icon: 'book-open',
            iconLibrary: 'lucide',
          },
        ],
      },
    ],
    meta: {
      photographer: 'Tom Favazza',
      contentSource: 'Trinity Favazza',
      dateAdded: '2025-01',
      issue: 2,
    },
  },
  {
    id: 'india-indigo-bush-frog',
    slug: 'indigo-bush-frog',
    title: "India's Hidden Jewel",
    subtitle: 'The Indigo Bush Frog',
    species: {
      commonName: 'Indigo Bush Frog',
      scientificName: 'Raorchestes indigo',
    },
    location: {
      country: 'India',
      countryCode: 'IN',
      region: 'Kudremukh National Park',
      displayLocation: 'Kudremukh National Park, India',
    },
    iucnStatus: {
      code: 'VU',
      label: 'Vulnerable',
    },
    colors: {
      primary: '#4A6670',
      secondary: '#5B8A51',
      accent: '#8B6E4E',
    },
    countryStamp: {
      label: 'INDIA',
      backgroundColor: '#4A6670',
      textColor: '#FFFFFF',
      rotation: 3,
    },
    heroImage: {
      src: '/images/dispatches/india-indigo-bush-frog/hero.jpeg',
      alt: 'A close-up look at the tiny Indigo Bush Frog resting on a dead fern leaf in its misty mountain home',
      credit: 'Amoghavarsha M',
    },
    sections: [
      {
        id: 'story',
        type: 'story',
        title: 'A Secret Treasure',
        titleColor: '#4A6670',
        content: "High in the misty grasslands of Kudremukh National Park, there's a frog that lives nowhere else on Earth. The Indigo Bush Frog makes its home on just one small hill in southern India. Scientists call animals like this endemic species, which means if something happens to their home, the whole species could disappear forever.\n\nFinding this tiny frog is like searching for a secret treasure. The weather up here is cold, wet, and misty. To reach the place where it lives, researchers have to hike about 6 miles up a steep mountain trail, sometimes in heavy rain! The habitat is called shola, a special mix of grasslands and patches of forest found only in the Western Ghats mountains.",
        attribution: 'Amoghavarsha M',
        image: {
          src: '/images/dispatches/india-indigo-bush-frog/detail.jpeg',
          alt: 'The Indigo Bush Frog showing its beautiful indigo coloring near the thighs, which gives this species its name',
          credit: 'Amoghavarsha M',
        },
      },
      {
        id: 'fun-facts',
        type: 'facts',
        title: 'Fun Facts',
        titleColor: '#4A6670',
        displayAs: 'cards',
        facts: [
          {
            id: 'one-hill',
            icon: 'map-pin',
            iconLibrary: 'lucide',
            text: 'This frog lives on only ONE hill in the entire world. That\'s it. Nowhere else!',
            cardColor: '#FDF8E8',
            accentColor: '#5B8A51',
          },
          {
            id: 'indigo-color',
            icon: 'palette',
            iconLibrary: 'lucide',
            text: "It's named for the beautiful indigo-blue coloring near its thighs. Look closely at the photos!",
            cardColor: '#F0F7F1',
            accentColor: '#5B8A51',
          },
          {
            id: 'hard-to-find',
            icon: 'search',
            iconLibrary: 'lucide',
            text: 'So hard to find that it took Amoghavarsha more than three trips before spotting his first one!',
            cardColor: '#FFF8F0',
            accentColor: '#5B8A51',
          },
        ],
      },
      {
        id: 'researcher',
        type: 'researcher',
        title: 'Meet the Researcher',
        titleColor: '#4A6670',
        displayAs: 'card',
        cardColor: '#F7F5F0',
        borderColor: '#5B8A51',
        researcher: {
          name: 'Amoghavarsha M',
          organization: 'Wildlife Researcher',
          program: 'Future Leaders of Amphibian Conservation',
          bio: 'Amoghavarsha is a researcher and educator currently studying Biology and Education at Azim Premji University in India. He leads workshops and training programs for students, forest rangers, and local communities across southern India. He believes that teaching people about amphibians is just as important as studying them.',
          photo: {
            src: '/images/dispatches/india-indigo-bush-frog/researcher.jpeg',
            alt: 'Amoghavarsha M',
            credit: 'Arpithamol C. Joy',
          },
          quote: {
            text: "What I love most about my work is that I get to explore wild places and discover creatures that few people have ever seen. Every trip feels like solving a little mystery—tracking clues, listening for frog calls, and waiting quietly in the dark to spot them.",
            borderColor: '#4A6670',
          },
        },
      },
      {
        id: 'dive-deeper',
        type: 'links',
        title: 'Dive Deeper',
        titleColor: '#4A6670',
        links: [
          {
            id: 'iucn',
            label: 'IUCN Red List',
            url: 'https://www.iucnredlist.org/species/73787889/73787915',
            icon: 'circle-alert',
            iconLibrary: 'lucide',
          },
          {
            id: 'amphibiaweb',
            label: 'AmphibiaWeb',
            url: 'https://amphibiaweb.org/species/8270',
            icon: 'book-open',
            iconLibrary: 'lucide',
          },
        ],
      },
    ],
    meta: {
      photographer: 'Amoghavarsha M',
      fieldPhotoCredit: 'Arpithamol C. Joy',
      contentSource: 'Amoghavarsha M',
      dateAdded: '2025-01',
      issue: 2,
    },
  },
  {
    id: 'panama-spiny-headed-treefrog',
    slug: 'spiny-headed-treefrog',
    title: "Panama's Crowned Aristocrat",
    subtitle: 'The Spiny-headed Treefrog',
    species: {
      commonName: 'Spiny-headed Treefrog',
      scientificName: 'Triprion spinosus',
    },
    location: {
      country: 'Panama',
      countryCode: 'PA',
      region: 'Panama',
      displayLocation: 'Panama',
    },
    iucnStatus: {
      code: 'NT',
      label: 'Near Threatened',
    },
    colors: {
      primary: '#6B3FA0',
      secondary: '#F4B942',
      accent: '#2D5A3D',
    },
    countryStamp: {
      label: 'PANAMA',
      backgroundColor: '#6B3FA0',
      textColor: '#FFFFFF',
      rotation: -3,
    },
    heroImage: {
      src: '/images/dispatches/panama-spiny-headed-treefrog/hero.jpeg',
      alt: 'Close-up front view of a Spiny-headed Treefrog showing its distinctive crown of spines and large golden-brown eyes',
      credit: 'Diego Samaniego, PARC project',
    },
    sections: [
      {
        id: 'story',
        type: 'story',
        title: 'Kings and Queens of the Canopy',
        titleColor: '#6B3FA0',
        content: "Look at that crown! Spiny-headed Treefrogs wear a ring of bony spines on their heads that makes them look like royalty. But those spines aren't just for show. These frogs actually use them for combat, fighting other frogs to defend their territory.\n\nThese crowned aristocrats spend almost their entire lives high in the trees. They breed in water-filled tree holes, bamboo stems, and the cup-shaped centers of bromeliad plants. Males call out with a distinctive 'boop... boop... boop' sound to attract females.\n\nYou can find Spiny-headed Treefrogs in Mexico, Honduras, Costa Rica, and Panama, but their populations are scattered and shrinking. That's why scientists at the Panama Amphibian Rescue and Conservation Project are working hard to protect them.",
        attribution: 'Karina Rodríguez',
        image: {
          src: '/images/dispatches/panama-spiny-headed-treefrog/detail.jpg',
          alt: 'A Spiny-headed Treefrog named Joel resting on a gloved hand, showing its full body, toe pads, and crown of spines',
          credit: 'Diego Samaniego, PARC project',
          caption: 'Meet Joel, who enjoys the comfort of his home at the Panama Amphibian Rescue and Conservation Project.',
        },
      },
      {
        id: 'fun-facts',
        type: 'facts',
        title: 'Fun Facts',
        titleColor: '#6B3FA0',
        displayAs: 'cards',
        facts: [
          {
            id: 'crown-combat',
            icon: 'crown',
            iconLibrary: 'lucide',
            text: "They use their 'crown of thorns' spines to defend themselves from other frogs. Yes, it's for combat!",
            cardColor: '#FDF8E8',
            accentColor: '#F4B942',
          },
          {
            id: 'super-parents',
            icon: 'heart',
            iconLibrary: 'lucide',
            text: 'Super parents alert! They care for and feed their tadpoles in water collected inside hollow logs or bromeliads.',
            cardColor: '#F0F7F1',
            accentColor: '#F4B942',
          },
          {
            id: 'range',
            icon: 'map-pin',
            iconLibrary: 'lucide',
            text: "Only found in Mexico, Honduras, Costa Rica, and Panama. They don't exist anywhere else on Earth!",
            cardColor: '#FFF8F0',
            accentColor: '#F4B942',
          },
        ],
      },
      {
        id: 'on-the-ground',
        type: 'organization',
        title: 'On the Ground',
        titleColor: '#6B3FA0',
        content: 'The Panama Amphibian Rescue and Conservation Project (PARC) works to save amphibians threatened by disease and habitat loss. In the lab, scientists like Karina carefully preserve genetic material using cryogenic freezing, ensuring these species have a future even if wild populations struggle. Safety gear is essential when working with liquid nitrogen!',
        image: {
          src: '/images/dispatches/panama-spiny-headed-treefrog/field.jpeg',
          alt: 'Karina Rodríguez in full cryogenic safety gear including face shield and insulated gloves, working with frozen samples in the PARC laboratory',
          credit: 'Diego Samaniego, PARC project',
        },
      },
      {
        id: 'researcher',
        type: 'researcher',
        title: 'Meet the Researcher',
        titleColor: '#6B3FA0',
        displayAs: 'card',
        cardColor: '#F7F5F0',
        borderColor: '#F4B942',
        researcher: {
          name: 'Karina Rodríguez',
          organization: 'Panama Amphibian Rescue and Conservation Project',
          program: 'Future Leaders of Amphibian Conservation',
          bio: "Karina is a biologist from Panama who joined the Panama Amphibian Rescue and Conservation Project in 2019. She's developing ways to help endangered frogs have babies in captivity, including creating the first-ever sperm bank for Crowned Tree Frogs! She hopes to inspire other young scientists in Panama to take action for amphibians.",
          photo: {
            src: '/images/dispatches/panama-spiny-headed-treefrog/researcher.jpeg',
            alt: 'Karina Rodríguez searching for amphibians',
            credit: 'Delia Basanta',
          },
          quote: {
            text: "I love doing experiments in the lab and searching for amphibians in the field. I admire the shapes, sounds, sizes, and colors of each amphibian. It's fascinating because it tells us their story and their role in nature. Teamwork is crucial to save amphibians and their habitats. Are you willing to get involved?",
            borderColor: '#6B3FA0',
          },
        },
      },
      {
        id: 'dive-deeper',
        type: 'links',
        title: 'Dive Deeper',
        titleColor: '#6B3FA0',
        links: [
          {
            id: 'iucn',
            label: 'IUCN Red List',
            url: 'https://www.iucnredlist.org/species/55296/3028482',
            icon: 'circle-alert',
            iconLibrary: 'lucide',
          },
          {
            id: 'amphibiaweb',
            label: 'AmphibiaWeb',
            url: 'https://amphibiaweb.org/species/673',
            icon: 'book-open',
            iconLibrary: 'lucide',
          },
        ],
      },
    ],
    meta: {
      photographer: 'Diego Samaniego, PARC project',
      fieldPhotoCredit: 'Delia Basanta',
      contentSource: 'Karina Rodríguez, PARC',
      dateAdded: '2025-01',
      issue: 2,
    },
  },
  {
    id: 'nepal-mahabharat-torrent-frog',
    slug: 'mahabharat-torrent-frog',
    title: "Nepal's Waterfall Climber",
    subtitle: 'The Mahabharat Torrent Frog',
    species: {
      commonName: 'Mahabharat Torrent Frog',
      scientificName: 'Amolops mahabharatensis',
    },
    location: {
      country: 'Nepal',
      countryCode: 'NP',
      region: 'Himalayas',
      displayLocation: 'Himalayas, Nepal',
    },
    iucnStatus: {
      code: 'VU',
      label: 'Vulnerable',
    },
    colors: {
      primary: '#4A6072',
      secondary: '#3D8B8B',
      accent: '#A8B5BD',
    },
    countryStamp: {
      label: 'NEPAL',
      backgroundColor: '#4A6072',
      textColor: '#FFFFFF',
      rotation: 3,
    },
    heroImage: {
      src: '/images/dispatches/nepal-mahabharat-torrent-frog/hero.jpg',
      alt: 'A Mahabharat Torrent Frog firmly attached to a wet stone beside a Himalayan stream, showing its mottled brown coloring and powerful legs',
      credit: 'Suman Sapkota',
    },
    sections: [
      {
        id: 'story',
        type: 'story',
        title: 'Climbing the Roof of the World',
        titleColor: '#4A6072',
        content: "High in the Himalayas, where icy streams rush down mountain slopes, lives a frog that can do something incredible: climb right up beside waterfalls.\n\nThe Mahabharat Torrent Frog was only recently discovered and exists nowhere else on Earth except Nepal. It makes its home in remote mountain locations where fast, cold water tumbles over rocks. Most animals would get swept away, but not this frog.\n\nSpecial sticky pads on its feet let it grip wet rocks even when water is rushing past. Its tadpoles are just as amazing. They have sucker-shaped mouths that help them hold on tight in the current. Scientists like Suman are still learning about this species and use special sound sensors to listen for their calls in the mountain streams.",
        attribution: 'Suman Sapkota',
        image: {
          src: '/images/dispatches/nepal-mahabharat-torrent-frog/detail.jpeg',
          alt: 'Close-up of a Mahabharat Torrent Frog tadpole in a human palm, showing its specialized sucker mouth adapted for fast-flowing streams',
          credit: 'Suman Sapkota',
          caption: 'This tadpole has special suckers that help it hold on tight in fast-flowing streams!',
        },
      },
      {
        id: 'fun-facts',
        type: 'facts',
        title: 'Fun Facts',
        titleColor: '#4A6072',
        displayAs: 'cards',
        facts: [
          {
            id: 'sticky-pads',
            icon: 'mountain',
            iconLibrary: 'lucide',
            text: 'Special sticky pads on its limbs let it climb right up beside waterfalls without getting swept away!',
            cardColor: '#FDF8E8',
            accentColor: '#3D8B8B',
          },
          {
            id: 'bioacoustics',
            icon: 'audio-lines',
            iconLibrary: 'lucide',
            text: 'Scientists use special sensors called bioacoustic recorders to listen to their calls in remote mountain streams.',
            cardColor: '#F0F7F1',
            accentColor: '#3D8B8B',
          },
          {
            id: 'sucker-mouth',
            icon: 'baby',
            iconLibrary: 'lucide',
            text: 'Their tadpoles have sucker mouths that work like suction cups to hold on in rushing water!',
            cardColor: '#FFF8F0',
            accentColor: '#3D8B8B',
          },
        ],
      },
      {
        id: 'on-the-ground',
        type: 'organization',
        title: 'On the Ground',
        titleColor: '#4A6072',
        content: "Suman and his team search for these frogs in some of Nepal's most remote places, including the Dhorpatan Hunting Reserve in Western Nepal. Finding them means trekking through rugged mountain terrain and wading into cold streams during monsoon season. They're also installing the first bioacoustics sensors in Nepal to record frog calls and learn more about these mysterious mountain amphibians.",
        image: {
          src: '/images/dispatches/nepal-mahabharat-torrent-frog/field.jpeg',
          alt: 'Suman Sapkota at night wearing a headlamp, carefully examining a small frog while taking measurements in the field',
          credit: 'Sangam Paudel',
          caption: 'In the search of threatened frogs in Dhorpatan Hunting Reserve, Western Nepal.',
        },
      },
      {
        id: 'researcher',
        type: 'researcher',
        title: 'Meet the Researcher',
        titleColor: '#4A6072',
        displayAs: 'card',
        cardColor: '#F7F5F0',
        borderColor: '#3D8B8B',
        researcher: {
          name: 'Suman Sapkota',
          organization: 'Amphibian Conservation',
          program: 'Future Leaders of Amphibian Conservation',
          bio: 'Suman is an ecologist from Nepal who leads the Stream Frog Conservation Project and volunteers with Save the Frogs. He studies how frogs communicate through their calls and works to protect their breeding sites in the Himalayas. He teaches students and local communities about why these mountain frogs matter.',
          photo: {
            src: '/images/dispatches/nepal-mahabharat-torrent-frog/researcher.jpeg',
            alt: 'Suman Sapkota installing a bioacoustics sensor to better understand amphibian vocalization in the Himalayas',
            credit: 'Sangam Paudel',
            caption: 'Installing the first bioacoustics sensor to better understand amphibian vocalization in the Himalayas.',
          },
          quote: {
            text: 'I am fascinated by the different shapes and patterns within frog species. I love searching for them beside streams during monsoon season. I especially enjoy hearing the old Nepali tales about frogs, blending science with stories from our culture.',
            borderColor: '#4A6072',
          },
        },
      },
      {
        id: 'dive-deeper',
        type: 'links',
        title: 'Dive Deeper',
        titleColor: '#4A6072',
        links: [
          {
            id: 'iucn',
            label: 'IUCN Red List',
            url: 'https://www.iucnredlist.org/species/181106111/181579021',
            icon: 'circle-alert',
            iconLibrary: 'lucide',
          },
          {
            id: 'amphibiaweb',
            label: 'AmphibiaWeb',
            url: 'https://amphibiaweb.org/species/9217',
            icon: 'book-open',
            iconLibrary: 'lucide',
          },
        ],
      },
    ],
    meta: {
      photographer: 'Suman Sapkota',
      fieldPhotoCredit: 'Sangam Paudel',
      contentSource: 'Suman Sapkota',
      dateAdded: '2025-01',
      issue: 2,
    },
  },
  {
    id: 'peru-lake-junin-frog',
    slug: 'lake-junin-frog',
    title: "Peru's Underwater Giant",
    subtitle: 'The Lake Junin Frog',
    species: {
      commonName: 'Lake Junin Frog',
      scientificName: 'Telmatobius macrostomus',
    },
    location: {
      country: 'Peru',
      countryCode: 'PE',
      region: 'Lake Junín',
      displayLocation: 'Lake Junín, Peru',
    },
    iucnStatus: {
      code: 'EN',
      label: 'Endangered',
    },
    colors: {
      primary: '#2E6A8E',
      secondary: '#D4A634',
      accent: '#8B6914',
    },
    countryStamp: {
      label: 'PERU',
      backgroundColor: '#2E6A8E',
      textColor: '#FFFFFF',
      rotation: -3,
    },
    heroImage: {
      src: '/images/dispatches/peru-Lake-Junin-Frog/hero.jpg',
      alt: 'Underwater view of a Lake Junin Frog resting on the rocky bottom, showing its massive body, golden-ringed eyes, and grayish-brown skin',
      credit: 'Roberto Elías Piperis',
    },
    sections: [
      {
        id: 'story',
        type: 'story',
        title: 'A Life Beneath the Surface',
        titleColor: '#2E6A8E',
        content: "Deep in the Peruvian Andes, at over 4,000 meters above sea level, sits Lake Junín. It's Peru's second-largest lake, and it's home to a very special giant: the Lake Junin Frog.\n\nThis frog holds a world record. It's the largest frog on Earth that spends its entire life underwater. While most frogs split their time between land and water, the Lake Junin Frog never leaves the lake. It breathes through its skin and hunts along the rocky bottom.\n\nBut this underwater giant is in trouble. Local communities have traditionally hunted it for food, and pollution and habitat loss threaten the cold, clean waters it needs to survive. Scientists like Luis are working hard to protect this incredible species before it's too late.",
        attribution: 'Luis Castillo',
      },
      {
        id: 'fun-facts',
        type: 'facts',
        title: 'Fun Facts',
        titleColor: '#2E6A8E',
        displayAs: 'cards',
        facts: [
          {
            id: 'world-record',
            icon: 'trophy',
            iconLibrary: 'lucide',
            text: "World record holder! It's the largest strictly aquatic frog on the planet, spending its entire life underwater.",
            cardColor: '#FDF8E8',
            accentColor: '#D4A634',
          },
          {
            id: 'high-altitude',
            icon: 'waves',
            iconLibrary: 'lucide',
            text: "Lives in Lake Junín, Peru's second-largest lake, high in the Andes mountains at over 4,000 meters elevation.",
            cardColor: '#F0F7F1',
            accentColor: '#D4A634',
          },
          {
            id: 'snorkeling',
            icon: 'glasses',
            iconLibrary: 'lucide',
            text: 'Scientists search for these frogs by snorkeling in cold mountain rivers and lagoons!',
            cardColor: '#FFF8F0',
            accentColor: '#D4A634',
          },
        ],
      },
      {
        id: 'on-the-ground',
        type: 'organization',
        title: 'On the Ground',
        titleColor: '#2E6A8E',
        content: "Luis and his team work in the Junín National Reserve and Huayllay National Sanctuary to monitor and protect the Lake Junin Frog. They wade into cold mountain streams and even go snorkeling to find frogs hiding under rocks. When they catch one, they carefully weigh and measure it before releasing it back. Luis has been working with this species for over ten years and is dedicated to protecting it until it's no longer endangered.",
        image: {
          src: '/images/dispatches/peru-Lake-Junin-Frog/field.jpeg',
          alt: 'Luis Castillo giving a thumbs up while weighing a large Lake Junin Frog on a yellow scale tray beside a stream, with field equipment nearby',
          credit: 'Miguel Manrique',
          caption: 'Weighing a Lake Junin Frog during fieldwork at the Huayllay National Sanctuary.',
        },
      },
      {
        id: 'researcher',
        type: 'researcher',
        title: 'Meet the Researcher',
        titleColor: '#2E6A8E',
        displayAs: 'card',
        cardColor: '#F7F5F0',
        borderColor: '#D4A634',
        researcher: {
          name: 'Luis Castillo',
          organization: 'Amphibian Conservation',
          program: 'Future Leaders of Amphibian Conservation',
          bio: 'Luis is a zoologist from Peru who co-founded Grupo Rana, an organization dedicated to saving endangered water frogs at Lake Junín. In 2018, he became a National Geographic Explorer and discovered new places where endangered frogs still survive. He runs citizen science programs where local people help monitor frog populations.',
          photo: {
            src: '/images/dispatches/peru-Lake-Junin-Frog/researcher.jpeg',
            alt: 'Luis with two Lake Junin Frogs at the Huayllay National Sanctuary, with the famous Rock Forest in the background',
            credit: 'Miguel Manrique',
          },
          quote: {
            text: "Searching for and finding them in rivers and lagoons is what excites me the most, especially in places where they're hard to find. One of my favorite ways to look for them is by snorkeling. Above all, you should do what you love, always with respect for nature.",
            borderColor: '#2E6A8E',
          },
        },
      },
      {
        id: 'dive-deeper',
        type: 'links',
        title: 'Dive Deeper',
        titleColor: '#2E6A8E',
        links: [
          {
            id: 'iucn',
            label: 'IUCN Red List',
            url: 'https://www.iucnredlist.org/species/2645/89195689',
            icon: 'circle-alert',
            iconLibrary: 'lucide',
          },
          {
            id: 'amphibiaweb',
            label: 'AmphibiaWeb',
            url: 'https://amphibiaweb.org/species/2578',
            icon: 'book-open',
            iconLibrary: 'lucide',
          },
        ],
      },
    ],
    meta: {
      photographer: 'Roberto Elías Piperis',
      fieldPhotoCredit: 'Miguel Manrique',
      contentSource: 'Luis Castillo',
      dateAdded: '2025-01',
      issue: 2,
    },
  },
  {
    id: 'argentina-valcheta-frog',
    slug: 'valcheta-frog',
    title: "Patagonia's Warm Water Secret",
    subtitle: 'The Valcheta Frog',
    species: {
      commonName: 'Valcheta Frog',
      scientificName: 'Pleurodema somuncurense',
    },
    location: {
      country: 'Argentina',
      countryCode: 'AR',
      region: 'Somuncurá Plateau',
      displayLocation: 'Somuncurá Plateau, Patagonia',
    },
    iucnStatus: {
      code: 'CR',
      label: 'Critically Endangered',
    },
    colors: {
      primary: '#2D7A7A',
      secondary: '#C9A961',
      accent: '#4A8B5C',
    },
    countryStamp: {
      label: 'ARGENTINA',
      backgroundColor: '#2D7A7A',
      textColor: '#FFFFFF',
      rotation: 3,
    },
    heroImage: {
      src: '/images/dispatches/argentina-Valcheta-Frog/hero.jpg',
      alt: 'A pair of Valcheta Frogs with striking golden eyes among bright green aquatic vegetation during breeding season',
      credit: 'Rodrigo Calvo',
    },
    sections: [
      {
        id: 'story',
        type: 'story',
        title: 'A Hot Spring Hideaway',
        titleColor: '#2D7A7A',
        content: "In the middle of Argentina's cold, windswept Patagonian steppe, there's a secret. Underground hot springs bubble up to create a tiny stream where the water never drops below 19°C, even when winter temperatures plunge to -15°C outside. This is the only home of the Valcheta Frog, a species so rare it lives in an area smaller than five square kilometers. That's like fitting an entire species into a few city blocks!\n\nThese little frogs never leave their warm water refuge. They eat, sleep, and raise their families right there in the stream. Scientists call animals like this microendemics, and the Valcheta Frog is one of the most extreme examples on Earth.",
        attribution: 'Rodrigo Calvo',
      },
      {
        id: 'fun-facts',
        type: 'facts',
        title: 'Fun Facts',
        titleColor: '#2D7A7A',
        displayAs: 'cards',
        facts: [
          {
            id: 'thermal-springs',
            icon: 'thermometer',
            iconLibrary: 'lucide',
            text: 'Lives in warm thermal springs surrounded by freezing Patagonian steppe where air temperatures can drop to -15°C.',
            cardColor: '#FDF8E8',
            accentColor: '#C9A961',
          },
          {
            id: 'speedy',
            icon: 'zap',
            iconLibrary: 'lucide',
            text: 'Super speedy and tricky to catch because they react instantly to flashlight beams or any movement.',
            cardColor: '#F0F7F1',
            accentColor: '#C9A961',
          },
          {
            id: 'one-stream',
            icon: 'map-pin',
            iconLibrary: 'lucide',
            text: 'Found in only ONE stream in the entire world, in an area smaller than five square kilometers.',
            cardColor: '#FFF8F0',
            accentColor: '#C9A961',
          },
        ],
      },
      {
        id: 'on-the-ground',
        type: 'organization',
        title: 'Nighttime Surveys',
        titleColor: '#2D7A7A',
        content: "Rodrigo searches for Valcheta Frogs after dark, when they're most active. He wades carefully through the warm stream with his headlamp, looking for the golden gleam of frog eyes. But these frogs are clever escape artists. The moment they spot light or sense movement, they zip away or dive under stones and sand.\n\nScientists here have worked for years to remove invasive trout that were eating the frogs, fence off areas where cattle were trampling the stream banks, and even release captive-bred frogs back into restored habitats. Thanks to this hard work, the Valcheta Frog is making a comeback.",
        image: {
          src: '/images/dispatches/argentina-Valcheta-Frog/researcher.jpeg',
          alt: 'Biologist Rodrigo Calvo kneeling by the stream at night with a headlamp, carefully holding small Valcheta Frogs in his hands',
          credit: 'Rodrigo Calvo',
          caption: 'Rodrigo monitors Valcheta Frog populations during nighttime surveys in the thermal stream.',
        },
      },
      {
        id: 'researcher',
        type: 'researcher',
        title: 'Meet the Researcher',
        titleColor: '#2D7A7A',
        displayAs: 'card',
        cardColor: '#F7F5F0',
        borderColor: '#C9A961',
        researcher: {
          name: 'Rodrigo Calvo',
          organization: 'Amphibian Conservation',
          program: 'Future Leaders of Amphibian Conservation',
          bio: 'Rodrigo is an Argentine biologist devoted to saving the Critically Endangered Valcheta Frog, which lives only in hot springs in Patagonia. He believes conservation works best when scientists and local communities work together. His goal is to make sure future generations can still find these unique frogs in the wild.',
          photo: {
            src: '/images/dispatches/argentina-Valcheta-Frog/researcher.jpeg',
            alt: 'Rodrigo Calvo during nighttime fieldwork',
            credit: 'Rodrigo Calvo',
          },
          quote: {
            text: 'By protecting this unique frog, we also take care of all the other species that share its home, and we inspire people to connect with nature and protect it too.',
            borderColor: '#2D7A7A',
          },
        },
      },
      {
        id: 'dive-deeper',
        type: 'links',
        title: 'Dive Deeper',
        titleColor: '#2D7A7A',
        links: [
          {
            id: 'iucn',
            label: 'IUCN Red List',
            url: 'https://www.iucnredlist.org/species/20372/85948443',
            icon: 'circle-alert',
            iconLibrary: 'lucide',
          },
          {
            id: 'amphibiaweb',
            label: 'AmphibiaWeb',
            url: 'https://amphibiaweb.org/species/9386',
            icon: 'book-open',
            iconLibrary: 'lucide',
          },
        ],
      },
    ],
    meta: {
      photographer: 'Rodrigo Calvo',
      contentSource: 'Rodrigo Calvo',
      dateAdded: '2025-01',
      issue: 2,
    },
  },
  {
    id: 'ghana-afiabirago-puddle-frog',
    slug: 'afiabirago-puddle-frog',
    title: "Ghana's Forest Guardian",
    subtitle: 'The Afiabirago Puddle Frog',
    species: {
      commonName: 'Afiabirago Puddle Frog',
      scientificName: 'Phrynobatrachus afiabirago',
    },
    location: {
      country: 'Ghana',
      countryCode: 'GH',
      region: 'Atewa Range',
      displayLocation: 'Atewa Range Forest Reserve, Ghana',
    },
    iucnStatus: {
      code: 'CR',
      label: 'Critically Endangered',
    },
    colors: {
      primary: '#2D6A4F',
      secondary: '#B7791F',
      accent: '#744210',
    },
    countryStamp: {
      label: 'GHANA',
      backgroundColor: '#2D6A4F',
      textColor: '#FFFFFF',
      rotation: -3,
    },
    heroImage: {
      src: '/images/dispatches/ghana-afiabirago-puddle-frog/hero.jpg',
      alt: 'A tiny brown Afiabirago Puddle Frog perched on wet leaf litter in the Atewa Forest, showing its delicate features and small size',
      credit: 'Caleb Ofori-Boateng',
    },
    sections: [
      {
        id: 'story',
        type: 'story',
        title: 'A Tiny Treasure of Atewa',
        titleColor: '#2D6A4F',
        content: "In the heart of Ghana's Atewa Range Forest Reserve lives a frog so small it could sit comfortably on your thumbnail. The Afiabirago Puddle Frog was only discovered in 2007 and exists nowhere else on Earth except this single patch of forest in West Africa.\n\nIts name comes from the Akan language and means 'beautiful newborn', a perfect description for this tiny forest jewel. But despite its beauty, this little frog is in big trouble. Mining companies want to dig up the Atewa Forest for bauxite, the mineral used to make aluminum.\n\nScientists like Caleb are working hard to protect the Afiabirago Puddle Frog and its forest home. They believe the forest is worth more standing than as a mine, and they're fighting to prove it.",
        attribution: 'Caleb Ofori-Boateng',
        image: {
          src: '/images/dispatches/ghana-afiabirago-puddle-frog/detail.jpeg',
          alt: 'A close-up of the tiny Afiabirago Puddle Frog on the forest floor, showing its brown coloring and small body adapted for life in leaf litter',
          credit: 'Caleb Ofori-Boateng',
          caption: 'This frog is so small it can fit on a thumbnail.',
        },
      },
      {
        id: 'fun-facts',
        type: 'facts',
        title: 'Fun Facts',
        titleColor: '#2D6A4F',
        displayAs: 'cards',
        facts: [
          {
            id: 'tiny',
            icon: 'heart',
            iconLibrary: 'lucide',
            text: "Its name 'Afiabirago' means 'beautiful newborn' in the Akan language, named for its tiny, delicate appearance.",
            cardColor: '#FDF8E8',
            accentColor: '#B7791F',
          },
          {
            id: 'discovered',
            icon: 'sparkles',
            iconLibrary: 'lucide',
            text: 'Only discovered in 2007! Scientists are still learning about its habits and life cycle.',
            cardColor: '#F0F7F1',
            accentColor: '#B7791F',
          },
          {
            id: 'endemic',
            icon: 'shield',
            iconLibrary: 'lucide',
            text: 'Found ONLY in the Atewa Forest Reserve in Ghana. If this forest disappears, so does this frog, forever.',
            cardColor: '#FFF8F0',
            accentColor: '#B7791F',
          },
        ],
      },
      {
        id: 'on-the-ground',
        type: 'organization',
        title: 'On the Ground',
        titleColor: '#2D6A4F',
        content: "Caleb and his team at SAVE THE FROGS! Ghana search for these tiny frogs by walking slowly through the forest at night, scanning the leaf litter with flashlights. Finding them takes patience since they're masters of camouflage and freeze perfectly still when approached.\n\nThe team also works with local communities to teach people about the importance of protecting the Atewa Forest. They train local guides, run education programs in schools, and advocate for the forest to become a National Park instead of a mine.",
        image: {
          src: '/images/dispatches/ghana-afiabirago-puddle-frog/field1.jpeg',
          alt: 'A group of researchers in the forest preparing to release juvenile frogs that were raised in captivity as part of a head-start program',
          credit: 'Caleb Ofori-Boateng',
          caption: 'Researchers prepare to release juvenile frogs that have been raised in captivity as part of a head-start program.',
        },
      },
      {
        id: 'researcher',
        type: 'researcher',
        title: 'Meet the Researcher',
        titleColor: '#2D6A4F',
        displayAs: 'card',
        cardColor: '#F7F5F0',
        borderColor: '#B7791F',
        researcher: {
          name: 'Caleb Ofori-Boateng',
          organization: 'SAVE THE FROGS! Ghana',
          program: 'Future Leaders of Amphibian Conservation',
          bio: "Caleb was the first biologist to study amphibians in Ghana, and he's discovered species that were completely new to science. He even rediscovered the Togo Slippery Frog, which scientists thought had been extinct for nearly 40 years! In 2011, he founded Herp-Ghana, the first organization in West Africa dedicated to protecting amphibians and reptiles.",
          photo: {
            src: '/images/dispatches/ghana-afiabirago-puddle-frog/researcher.jpeg',
            alt: 'Caleb Ofori-Boateng in the field',
            credit: 'Caleb Ofori-Boateng',
          },
          quote: {
            text: "The more I learn about these frogs, the more I want others to know about them too. Every species has its own incredible story. When you protect one small frog, you're also protecting the whole forest it lives in.",
            borderColor: '#2D6A4F',
          },
        },
      },
      {
        id: 'dive-deeper',
        type: 'links',
        title: 'Dive Deeper',
        titleColor: '#2D6A4F',
        links: [
          {
            id: 'iucn',
            label: 'IUCN Red List',
            url: 'https://www.iucnredlist.org/species/136014/88401513',
            icon: 'circle-alert',
            iconLibrary: 'lucide',
          },
          {
            id: 'amphibiaweb',
            label: 'AmphibiaWeb',
            url: 'https://amphibiaweb.org/species/6854',
            icon: 'book-open',
            iconLibrary: 'lucide',
          },
        ],
      },
    ],
    meta: {
      photographer: 'Caleb Ofori-Boateng',
      contentSource: 'Caleb Ofori-Boateng, SAVE THE FROGS! Ghana',
      dateAdded: '2025-01',
      issue: 2,
    },
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
