// Myth Busters - Swipe-deck true/false cards

export type BonusChipType = 'expedition' | 'science' | 'observe' | 'ask' | 'try';

export interface BonusChip {
  type: BonusChipType;
  icon: string; // Lucide icon name
  text: string;
  linkTo?: string; // Internal route for expedition links
}

export interface MythBusterCard {
  id: string;
  claim: string;
  answer: 'myth' | 'fact';
  reveal: string;
  bonusChip: BonusChip;
}

export const mythBusterCards: MythBusterCard[] = [
  {
    id: 'toad-warts',
    claim: 'Touching a toad will give you warts.',
    answer: 'myth',
    reveal: "Those bumps on toad skin aren't warts and they're not contagious. The bumpy texture helps toads blend into rocky or leafy ground, and some bumps contain glands that release a bitter taste to discourage predators. Warts in humans come from a virus that amphibians don't carry.",
    bonusChip: {
      type: 'expedition',
      icon: 'map',
      text: 'Learn more about toad skin in The Real Story: Frogs vs. Toads',
      linkTo: '/real-story/frogs-vs-toads',
    },
  },
  {
    id: 'frozen-frogs',
    claim: 'Some frogs can survive being frozen solid.',
    answer: 'fact',
    reveal: "Wood frogs in Alaska and Canada have an amazing winter trick. When temperatures drop, their bodies produce a natural \"antifreeze\" that protects their cells. Their heart stops, their breathing stops, and they freeze solid under leaves and snow. When spring comes, they thaw out and hop away!",
    bonusChip: {
      type: 'science',
      icon: 'microscope',
      text: "The 'antifreeze' is actually glucose, a type of sugar. The frog's liver makes extra glucose right before freezing begins.",
    },
  },
  {
    id: 'drinking-water',
    claim: 'Frogs drink water through their mouths like we do.',
    answer: 'myth',
    reveal: "Frogs don't drink at all! Instead, they absorb water directly through their skin, especially through a patch on their belly and thighs called the \"drinking patch.\" This is one reason frogs are so sensitive to pollution. Anything in the water goes right into their bodies.",
    bonusChip: {
      type: 'ask',
      icon: 'message-circle',
      text: 'Ask an adult: What else can pass through skin? Think about sunscreen, lotions, or even some medicines.',
    },
  },
  {
    id: 'temporary-pools',
    claim: "If a wet patch dries up in summer, it can't be important for wildlife.",
    answer: 'myth',
    reveal: "Some amphibians use temporary pools on purpose because they often have fewer fish predators. A seasonal wet patch can be a nursery for eggs and tadpoles that grow fast when spring rains arrive. Even when it looks like \"just mud,\" it may be part of a bigger water system that helps the whole area stay healthy.",
    bonusChip: {
      type: 'observe',
      icon: 'eye',
      text: 'Next rainy evening, look for movement in shallow water. Tiny swimmers often appear when the timing is right.',
    },
  },
  {
    id: 'tropical-only',
    claim: 'Frogs only live in tropical rainforests.',
    answer: 'myth',
    reveal: "Amphibians live on every continent except Antarctica! You can find frogs in deserts, mountains, grasslands, and even above the Arctic Circle. The Valcheta Frog lives in a warm stream surrounded by the cold, dry steppe of Patagonia, Argentina. It's the only place on Earth where this species exists!",
    bonusChip: {
      type: 'expedition',
      icon: 'compass',
      text: "Meet Rodrigo Calvo, who studies Patagonia's warm-water secret",
      linkTo: '/dispatches/argentina-valcheta-frog',
    },
  },
  {
    id: 'cannibal-tadpoles',
    claim: 'Some tadpoles eat their own siblings.',
    answer: 'fact',
    reveal: "When food is scarce, some tadpole species will eat smaller tadpoles, including their own brothers and sisters. It sounds harsh, but it helps at least some of the family survive. In species like spadefoot toads, some tadpoles even grow larger heads and stronger jaws specifically for eating other tadpoles!",
    bonusChip: {
      type: 'science',
      icon: 'microscope',
      text: "Scientists call these 'cannibalistic morphs.' The tadpoles that develop this way look noticeably different from their plant-eating siblings.",
    },
  },
  {
    id: 'waterfall-climbers',
    claim: 'Some frogs can climb straight up waterfalls.',
    answer: 'fact',
    reveal: "Torrent frogs have special toe pads that work like suction cups, letting them cling to wet, slippery rocks right next to rushing waterfalls. Their tadpoles have sucker-like mouths to hold on in fast-moving streams. It's like having built-in climbing gear!",
    bonusChip: {
      type: 'expedition',
      icon: 'map',
      text: 'Meet the Mahabharat Torrent Frog and researcher Suman Sapkota',
      linkTo: '/dispatches/nepal-mahabharat-torrent-frog',
    },
  },
  {
    id: 'big-dangerous',
    claim: 'The biggest frogs are the most dangerous.',
    answer: 'myth',
    reveal: "Some of the most toxic frogs in the world are tiny! Poison dart frogs are often smaller than your thumb, but their skin carries powerful toxins. Meanwhile, the Goliath frog of West Africa can weigh as much as a newborn human baby, but it's completely harmless. Size doesn't predict danger in the amphibian world.",
    bonusChip: {
      type: 'try',
      icon: 'lightbulb',
      text: "Look up the weight of a Goliath frog, then find something in your home that weighs about the same (around 7 pounds). That's one big frog!",
    },
  },
];

export const getMythBusterCardById = (id: string): MythBusterCard | undefined => {
  return mythBusterCards.find(card => card.id === id);
};
