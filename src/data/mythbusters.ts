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
  // Original cards mixed with new ones for variety
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
    id: 'identity-mix-up',
    claim: 'Salamanders are a type of lizard.',
    answer: 'myth',
    reveal: "Salamanders look like lizards but they're amphibians, not reptiles! The biggest differences? Salamanders have smooth, moist skin while lizards have dry scales. Salamanders need to stay damp and many start life in water with gills. Lizards hatch from eggs on land already looking like tiny adults.",
    bonusChip: {
      type: 'expedition',
      icon: 'map',
      text: 'Check out our Frogs vs. Toads Real Story for more on how scientists group amphibians!',
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
    id: 'strange-stranger',
    claim: 'Caecilians are a type of worm or snake.',
    answer: 'myth',
    reveal: "They look like giant worms or small snakes, but caecilians (say \"seh-SILL-yuns\") are amphibians! They're the third group of amphibians, alongside frogs and salamanders. Most live underground in tropical areas, which is why even many nature lovers have never heard of them.",
    bonusChip: {
      type: 'science',
      icon: 'microscope',
      text: 'There are over 200 species of caecilians, and scientists are still discovering new ones hidden in tropical soils around the world.',
    },
  },
  {
    id: 'superpower',
    claim: 'Some salamanders can regrow entire limbs.',
    answer: 'fact',
    reveal: "Axolotls and many other salamanders can regenerate lost legs, tails, and even parts of their hearts and brains! Scientists are studying this amazing ability to learn how humans might someday heal injuries better. The new body part grows back perfectly, bones and all.",
    bonusChip: {
      type: 'science',
      icon: 'microscope',
      text: 'It can take an axolotl several months to regrow a limb, but the new one works just as well as the original!',
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
    id: 'flying-frog',
    claim: 'Some frogs can glide through the air like flying squirrels.',
    answer: 'fact',
    reveal: "Wallace's flying frog of Southeast Asia has huge webbed feet that work like parachutes! When threatened, it leaps from trees and spreads its toes wide, gliding up to 50 feet through the air to escape predators. They can even steer by tilting their feet.",
    bonusChip: {
      type: 'try',
      icon: 'lightbulb',
      text: "Spread your fingers wide and wave your hand through air. Now imagine webbing between each finger—that's how flying frogs catch the wind!",
    },
  },
  {
    id: 'giant-salamander',
    claim: 'The largest amphibian in the world is a salamander.',
    answer: 'fact',
    reveal: "The Chinese giant salamander can grow up to 6 feet long—about as long as a tall adult human! These ancient creatures have been around for 170 million years, surviving the dinosaurs. Sadly, they're now critically endangered due to habitat loss and hunting.",
    bonusChip: {
      type: 'ask',
      icon: 'message-circle',
      text: 'Ask a teacher or librarian: What other animals alive today have been around since dinosaur times?',
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
    id: 'skin-snack',
    claim: "Baby caecilians eat their mother's skin.",
    answer: 'fact',
    reveal: "Some caecilian mothers grow a special nutritious layer of skin that their babies scrape off and eat! The babies have special teeth for peeling off this fatty skin layer, and moms regrow it every few days. It's like a built-in lunch box that never runs out.",
    bonusChip: {
      type: 'science',
      icon: 'microscope',
      text: "This behavior is called dermatophagy (der-mat-AH-fuh-jee)—literally 'skin eating.' The mother's skin is packed with extra fat and nutrients just for her babies.",
    },
  },
  {
    id: 'fire-legend',
    claim: 'Salamanders were once believed to be born from fire.',
    answer: 'fact',
    reveal: "In medieval times, people thought salamanders came from flames! The truth? Salamanders loved hiding in cool, damp logs. When people threw those logs on the fire, surprised salamanders would run out—looking like they emerged from the flames. The myth stuck for centuries.",
    bonusChip: {
      type: 'science',
      icon: 'microscope',
      text: 'The fire salamander of Europe got its name from this legend. Its bright yellow and black pattern does look almost flame-like!',
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
    id: 'tiny-champion',
    claim: 'The smallest backboned animal on Earth is a frog.',
    answer: 'fact',
    reveal: "Paedophryne amauensis from Papua New Guinea is smaller than a dime! At just 7.7 millimeters long, this tiny frog holds the world record for smallest vertebrate (animal with a backbone). It lives in leaf litter on the forest floor and makes a high-pitched insect-like call.",
    bonusChip: {
      type: 'observe',
      icon: 'eye',
      text: 'Find a dime and imagine a frog smaller than that. Then imagine scientists trying to find them in a rainforest!',
    },
  },
  {
    id: 'habitat-surprise',
    claim: 'All salamanders need to live in water.',
    answer: 'myth',
    reveal: "While some salamanders spend their whole lives in water, many live entirely on land! Woodland salamanders in North America never enter water at all—they even lay their eggs under logs and rocks. They breathe through their skin and need to stay moist, but they don't need ponds or streams.",
    bonusChip: {
      type: 'observe',
      icon: 'eye',
      text: 'Flip over a rotting log in a damp forest (gently!) and you might find a lungless salamander hiding underneath.',
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
    id: 'hidden-danger',
    claim: 'Some newts are more toxic than poison dart frogs.',
    answer: 'fact',
    reveal: "The rough-skinned newt of the Pacific Northwest contains tetrodotoxin—the same poison found in pufferfish! One newt has enough toxin to kill several adult humans. They don't look as flashy as poison dart frogs, but they're among the most toxic amphibians on Earth.",
    bonusChip: {
      type: 'science',
      icon: 'microscope',
      text: "Garter snakes in the same area have evolved resistance to newt poison—it's an evolutionary arms race that's been going on for millions of years!",
    },
  },
  {
    id: 'rainbow-myth',
    claim: 'Frogs are always green or brown.',
    answer: 'myth',
    reveal: "Frogs come in almost every color imaginable! There are bright blue poison dart frogs, hot pink reed frogs, brilliant orange mantellas, and even pure white albino frogs. Some can even change color depending on temperature, mood, or time of day.",
    bonusChip: {
      type: 'science',
      icon: 'microscope',
      text: "Bright colors often warn predators: 'I'm toxic, don't eat me!' This is called aposematic coloration.",
    },
  },
  {
    id: 'breathing-mystery',
    claim: 'Some salamanders have no lungs at all.',
    answer: 'fact',
    reveal: "The largest family of salamanders—over 400 species—breathe entirely through their skin and the lining of their mouth! Called lungless salamanders, they evolved without lungs millions of years ago. They need to stay moist because their skin must be wet to absorb oxygen.",
    bonusChip: {
      type: 'science',
      icon: 'microscope',
      text: 'Lungless salamanders are so sensitive to air quality that scientists use them as indicators of ecosystem health.',
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
    id: 'cave-dweller',
    claim: 'Some salamanders live their whole lives in complete darkness.',
    answer: 'fact',
    reveal: "The olm is a cave salamander from Europe that spends its entire life in underground rivers and lakes. It's completely blind, has pale pinkish-white skin, and can live for over 100 years! Without any light, it relies on smell, touch, and sensing vibrations to find food.",
    bonusChip: {
      type: 'science',
      icon: 'microscope',
      text: 'Olms can go 10 years without eating! Scientists think their extremely slow metabolism helps them survive in caves where food is rare.',
    },
  },
  {
    id: 'family-tree',
    claim: 'Newts and salamanders are completely different animals.',
    answer: 'myth',
    reveal: "All newts are salamanders—but not all salamanders are newts! Newts are a special group within the salamander family. They usually have rougher, bumpier skin and spend more time in water as adults. Think of it like squares and rectangles: every square is a rectangle, but not every rectangle is a square.",
    bonusChip: {
      type: 'expedition',
      icon: 'map',
      text: 'This is just like frogs and toads! Check out our Frogs vs. Toads Real Story for another example.',
      linkTo: '/real-story/frogs-vs-toads',
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
  {
    id: 'rib-defense',
    claim: 'Some salamanders can push their ribs through their skin as weapons.',
    answer: 'fact',
    reveal: "The Spanish ribbed newt has a truly bizarre defense. When threatened, it pushes its sharp rib bones right through its own skin! The ribs poke through special pores and are coated with poison from the salamander's skin glands. The wounds heal quickly after the danger passes.",
    bonusChip: {
      type: 'science',
      icon: 'microscope',
      text: 'These salamanders have even been to space! Scientists studied their amazing healing abilities on the International Space Station.',
    },
  },
  {
    id: 'eye-trick',
    claim: 'Newts can regrow their eye lenses.',
    answer: 'fact',
    reveal: "Japanese fire-bellied newts can regenerate their eye lenses up to 18 times over their lifetime! Scientists have tested this amazing ability repeatedly on the same newts. Understanding how they do this could someday help doctors treat human eye conditions like cataracts.",
    bonusChip: {
      type: 'science',
      icon: 'microscope',
      text: 'Along with eye lenses, newts can regrow limbs, tails, parts of their heart, and even sections of their brain!',
    },
  },
  {
    id: 'new-discovery',
    claim: 'Some caecilians have a venomous bite.',
    answer: 'fact',
    reveal: "Scientists only discovered in 2020 that some caecilians have glands in their mouths that may produce venom! This would make them the first amphibians known to deliver venom through a bite. There's still a lot to learn—caecilians are so secretive that we keep finding surprises.",
    bonusChip: {
      type: 'ask',
      icon: 'message-circle',
      text: 'Ask a teacher: What other animals have scientists only recently discovered have venom? The list might surprise you!',
    },
  },
];

export const getMythBusterCardById = (id: string): MythBusterCard | undefined => {
  return mythBusterCards.find(card => card.id === id);
};
