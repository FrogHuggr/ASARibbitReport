// The Real Story - Educational content busting common amphibian misconceptions

export interface RealStoryImage {
  file: string;
  alt: string;
  path: string;
}

export interface ColorSet {
  primary: string;
  secondary: string;
  label: string;
}

export interface ComparisonItem {
  icon: string;
  title: string;
  description: string;
}

export interface Comparison {
  category: string;
  frog: ComparisonItem;
  toad: ComparisonItem;
}

export interface QuestionSection {
  type: 'question';
  speaker: string;
  image: string;
  content: string;
}

export interface AnswerSection {
  type: 'answer';
  title: string;
  headline: string;
  content: string;
}

export interface FaceOffSection {
  type: 'faceOff';
  title: string;
  comparisons: Comparison[];
}

export interface SameTeamSection {
  type: 'sameTeam';
  title: string;
  content: string;
  conservation: string;
}

export interface TakeawaySection {
  type: 'takeaway';
  speaker: string;
  content: string;
}

export type RealStorySection =
  | QuestionSection
  | AnswerSection
  | FaceOffSection
  | SameTeamSection
  | TakeawaySection;

export interface RealStory {
  id: string;
  type: 'realStory';
  title: string;
  subtitle: string;
  images: Record<string, RealStoryImage>;
  colorPalette: {
    frog: ColorSet;
    toad: ColorSet;
  };
  sections: RealStorySection[];
}

export const frogsVsToads: RealStory = {
  id: 'frogs-vs-toads',
  type: 'realStory',
  title: 'Frogs vs. Toads',
  subtitle: 'Are they really different animals?',
  images: {
    frog: {
      file: 'realstoryfrog.png',
      alt: 'A sleek green frog with smooth skin and long hind legs in profile view',
      path: '/images/realstory/',
    },
    toad: {
      file: 'realstorytoad.png',
      alt: 'A stocky toad with bumpy, textured skin and a wide body facing forward',
      path: '/images/realstory/',
    },
    marshmellowThinking: {
      file: 'marshmellow-thinking.png',
      alt: 'MarshMellow the frog mascot with hand on chin, looking curious',
      path: '/images/marshmellow/',
    },
  },
  colorPalette: {
    frog: {
      primary: '#4A7B5C',
      secondary: '#6B9B7A',
      label: 'Frog Green',
    },
    toad: {
      primary: '#8B7355',
      secondary: '#A68B6A',
      label: 'Toad Brown',
    },
  },
  sections: [
    {
      type: 'question',
      speaker: 'MarshMellow',
      image: 'marshmellowThinking',
      content:
        "Okay, real talk. My whole life I've been calling myself a frog. But my cousin Bumpy insists he's a toad—like that makes him special or something. Are we even related? Is this a whole different animal? Should I be offended?",
    },
    {
      type: 'answer',
      title: 'The Truth',
      headline: 'All toads ARE frogs. But not all frogs are toads. (Yes, it\'s confusing. We know.)',
      content:
        "Scientists group both frogs and toads together in the order Anura (say it: ah-NUR-ah), which means 'without tail.' Within this order, the animals we call 'true toads' belong to the family Bufonidae (say it: byoo-FAWN-ih-dee). So your cousin Bumpy isn't a completely different creature—he's just a specialized branch on the frog family tree. Think of it like how all squares are rectangles, but not all rectangles are squares. Except with more hopping and fewer geometry tests.",
    },
    {
      type: 'faceOff',
      title: 'The Face-Off',
      comparisons: [
        {
          category: 'Skin',
          frog: {
            icon: 'droplet',
            title: 'Smooth & Moist',
            description:
              'Packed with mucous glands that help them breathe and stay hydrated. Yes, the slime has a purpose. We\'re not just making it for fun. (Okay, sometimes for fun.)',
          },
          toad: {
            icon: 'fingerprint',
            title: 'Bumpy & Dry',
            description:
              'Thicker skin with larger parotoid glands that can release mild toxins. Enough to taste absolutely disgusting to predators. Not poisonous enough to hurt you, but definitely enough to ruin a snake\'s whole day.',
          },
        },
        {
          category: 'Movement',
          frog: {
            icon: 'arrow-up',
            title: 'Long Leaps',
            description:
              'Long hind legs and strong thigh muscles perfect for launching through the air or swimming at top speed. We\'re basically the track athletes of the amphibian world. Very athletic. Very aerodynamic. Very humble about it.',
          },
          toad: {
            icon: 'footprints',
            title: 'Short Hops',
            description:
              'Shorter legs mean shorter hops or even slow little walks. They\'re the "I\'ll get there when I get there" crowd. Honestly? Respect.',
          },
        },
        {
          category: 'Eggs',
          frog: {
            icon: 'grape',
            title: 'Clumps Like Grapes',
            description:
              'Soft, jellylike clumps that float in the water like bunches of grapes. Forbidden grapes. Do not eat the frog eggs.',
          },
          toad: {
            icon: 'link',
            title: 'Strings Like Necklaces',
            description:
              'Long, gelatinous strings that wind through plants like necklaces of tiny pearls. Very elegant. Very gross. Nature is full of contradictions.',
          },
        },
        {
          category: 'Habitat',
          frog: {
            icon: 'waves',
            title: 'Close to Water',
            description:
              'Stick close to water: streams, wetlands, or rainforest pools. Our skin dries out fast. We\'re high-maintenance and we know it.',
          },
          toad: {
            icon: 'tree-deciduous',
            title: 'Farther From Water',
            description:
              'Can travel farther away thanks to thicker skin that holds moisture longer. You might meet one in a garden, field, or—if you\'re lucky—your shoe. (They love shoes. Nobody knows why.)',
          },
        },
      ],
    },
    {
      type: 'sameTeam',
      title: 'Same Team, Different Gear',
      content:
        "These differences didn't happen by accident. They evolved over millions of years as amphibians spread into new habitats. Smooth, moist skin is perfect for frogs that spend time in water. Dry, bumpy skin with mild toxins protects toads on land. Long legs make fast escapes. Short legs make sturdy hikers. It's like how some people are built for sprinting and others are built for marathon walking to the refrigerator at midnight. Different skills. Same family.",
      conservation:
        "Frogs and toads may live in different ways, but they face the same threats. Habitat loss, climate change, and emerging diseases affect them all. When one branch of the frog family tree struggles, the whole tree feels it. That's why the Amphibian Survival Alliance works to protect all amphibians—from rainforest frogs to backyard toads to that one grumpy guy who lives under your porch and judges you every time you take out the trash.",
    },
    {
      type: 'takeaway',
      speaker: 'MarshMellow',
      content:
        "Frogs leap. Toads hop. But we're all amphibian all-stars. Cousin Bumpy and I talked it out—we're cool now. Family's family, even if he does walk everywhere like he's got all the time in the world.",
    },
  ],
};

// Export all real stories for listing
export const realStories: RealStory[] = [frogsVsToads];

export const getRealStoryById = (id: string): RealStory | undefined => {
  return realStories.find(s => s.id === id);
};
