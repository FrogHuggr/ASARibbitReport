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
      file: 'frog.png',
      alt: 'A sleek green frog with smooth skin and long hind legs in profile view',
      path: '/images/realstory/',
    },
    toad: {
      file: 'toad.png',
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
        "Hold up... if someone says 'toad,' aren't they just talking about a frog? What's the difference anyway?",
    },
    {
      type: 'answer',
      title: 'The Truth',
      headline: 'All toads ARE frogs. But not all frogs are toads.',
      content:
        "Scientists group both frogs and toads together in the order Anura (say it: ah-NUR-ah), which means 'without tail.' Within this order, the animals we call 'true toads' belong to the family Bufonidae (say it: byoo-FAWN-ih-dee). So a toad isn't a completely different creature. It's a special branch on the frog family tree.",
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
              'Packed with mucous glands that help them breathe and stay hydrated.',
          },
          toad: {
            icon: 'fingerprint',
            title: 'Bumpy & Dry',
            description:
              'Thicker skin with larger parotoid glands that can release mild toxins. Enough to taste bad to predators!',
          },
        },
        {
          category: 'Movement',
          frog: {
            icon: 'arrow-up',
            title: 'Long Leaps',
            description:
              'Long hind legs and strong thigh muscles perfect for launching through the air or swimming at top speed.',
          },
          toad: {
            icon: 'footprints',
            title: 'Short Hops',
            description:
              'Shorter legs mean shorter hops or even slow little walks. Better for life on land.',
          },
        },
        {
          category: 'Eggs',
          frog: {
            icon: 'grape',
            title: 'Clumps Like Grapes',
            description:
              'Soft, jellylike clumps that float in the water like bunches of grapes.',
          },
          toad: {
            icon: 'link',
            title: 'Strings Like Necklaces',
            description:
              'Long, gelatinous strings that wind through plants like necklaces of tiny pearls.',
          },
        },
        {
          category: 'Habitat',
          frog: {
            icon: 'waves',
            title: 'Close to Water',
            description:
              'Stick close to water: streams, wetlands, or rainforest pools.',
          },
          toad: {
            icon: 'tree-deciduous',
            title: 'Farther From Water',
            description:
              'Can travel farther away thanks to thicker skin that holds moisture longer. You might meet one in a garden or field!',
          },
        },
      ],
    },
    {
      type: 'sameTeam',
      title: 'Same Team, Different Gear',
      content:
        "These differences didn't happen by accident. They evolved over millions of years as amphibians spread into new habitats. Smooth, moist skin is perfect for frogs that spend time in water. Dry, bumpy skin with mild toxins protects toads on land. Long legs make fast escapes. Short legs make sturdy hikers.",
      conservation:
        "Frogs and toads may live in different ways, but they face the same threats. Habitat loss, climate change, and emerging diseases affect them all. When one branch of the frog family tree struggles, the whole tree feels it. That's why the Amphibian Survival Alliance works to protect all amphibians, from rainforest frogs to backyard toads.",
    },
    {
      type: 'takeaway',
      speaker: 'MarshMellow',
      content:
        "Frogs leap. Toads hop. But they're all amphibian all-stars. Helping one helps them all!",
    },
  ],
};

// Export all real stories for listing
export const realStories: RealStory[] = [frogsVsToads];

export const getRealStoryById = (id: string): RealStory | undefined => {
  return realStories.find(s => s.id === id);
};
