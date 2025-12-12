export interface MythBuster {
  id: string;
  title: string;
  question: string;
  heroImage?: string;
  myth: string;
  truth: string;
  details: Array<{
    category: string;
    frog: string;
    toad: string;
  }>;
  whyItMatters: string;
}

export const mythbusters: MythBuster[] = [
  {
    id: 'frogs-vs-toads',
    title: 'Frogs vs Toads',
    question: 'Are they really different animals?',
    myth: 'Frogs and toads are completely different animals. Toads are warty and frogs are smooth. You can get warts from touching a toad!',
    truth: 'All toads ARE frogs! "Toad" is just a nickname for frogs that have dry, bumpy skin and spend more time on land. And no—you absolutely cannot get warts from touching them. That\'s 100% a myth!',
    details: [
      {
        category: 'Skin',
        frog: 'Usually smooth and moist',
        toad: 'Usually dry and bumpy',
      },
      {
        category: 'Legs',
        frog: 'Long legs for jumping',
        toad: 'Shorter legs for walking',
      },
      {
        category: 'Habitat',
        frog: 'Usually near water',
        toad: 'Can live far from water',
      },
      {
        category: 'Eggs',
        frog: 'Laid in clumps',
        toad: 'Laid in long strings',
      },
      {
        category: 'Body Shape',
        frog: 'Slim and athletic',
        toad: 'Round and chubby',
      },
    ],
    whyItMatters: 'Understanding that toads are frogs helps us appreciate just how diverse amphibians really are. There are over 7,000 species of frogs (including toads!), and they\'ve evolved to live in almost every environment on Earth—from tropical rainforests to cold mountains to dry deserts. Pretty amazing for animals that need to keep their skin moist!',
  },
];

export const getMythBusterById = (id: string): MythBuster | undefined => {
  return mythbusters.find(m => m.id === id);
};
