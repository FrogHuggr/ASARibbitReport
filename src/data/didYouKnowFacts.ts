// Did You Know? Facts - Random facts for the home page

export type FactCategory =
  | 'body'
  | 'superpowers'
  | 'behavior'
  | 'conservation'
  | 'gruesome'
  | 'bizarre';

export interface Fact {
  id: string;
  category: FactCategory;
  text: string;
}

export const didYouKnowFacts: Fact[] = [
  { id: 'fact-01', category: 'body', text: 'A group of frogs is called an army.' },
  { id: 'fact-02', category: 'body', text: 'Some salamanders can regrow entire limbs, including bones and muscles.' },
  { id: 'fact-03', category: 'body', text: "Frogs can't swallow with their eyes open. They use their eyes to help push food down!" },
  { id: 'fact-04', category: 'body', text: 'The smallest frog in the world is smaller than a fingernail.' },
  { id: 'fact-05', category: 'body', text: 'Caecilians are amphibians that look like worms and live underground.' },
  { id: 'fact-06', category: 'body', text: "A frog's ear is called a tympanum, and you can see it right behind its eye." },
  { id: 'fact-07', category: 'body', text: "Some frogs have teeth. Toads don't." },
  { id: 'fact-08', category: 'body', text: "Amphibian means 'double life' because most live in water AND on land." },
  { id: 'fact-09', category: 'superpowers', text: 'Wood frogs can survive being frozen solid and thaw back to life in spring.' },
  { id: 'fact-10', category: 'superpowers', text: 'Some frogs can jump 20 times their own body length.' },
  { id: 'fact-11', category: 'superpowers', text: 'The waxy monkey frog makes its own sunscreen.' },
  { id: 'fact-12', category: 'superpowers', text: "Certain salamanders can breathe through their skin. They don't even have lungs!" },
  { id: 'fact-13', category: 'superpowers', text: 'Some poison dart frogs carry their tadpoles on their backs to find water.' },
  { id: 'fact-14', category: 'behavior', text: 'Male frogs call to attract females. Each species has its own unique song.' },
  { id: 'fact-15', category: 'behavior', text: 'Some frog fathers guard their eggs for weeks without eating.' },
  { id: 'fact-16', category: 'behavior', text: 'Toads return to the same breeding spot year after year.' },
  { id: 'fact-17', category: 'conservation', text: 'Amphibians have been on Earth for over 300 million years.' },
  { id: 'fact-18', category: 'conservation', text: "Scientists sometimes call frogs 'canaries in the coal mine' because they show when ecosystems are in trouble." },
  { id: 'fact-19', category: 'gruesome', text: 'The hairy frog breaks its own toe bones and pushes them through its skin to make claws when threatened.' },
  { id: 'fact-20', category: 'gruesome', text: "Surinam toad babies develop inside pockets in their mother's back, then burst out through her skin when ready." },
  { id: 'fact-21', category: 'gruesome', text: "Some caecilian babies eat their mother's skin. She grows an extra nutritious layer just for them." },
  { id: 'fact-22', category: 'gruesome', text: 'The gastric brooding frog swallowed her eggs and gave birth through her mouth. Sadly, now extinct.' },
  { id: 'fact-23', category: 'gruesome', text: "Male Darwin's frogs swallow their tadpoles and keep them in their vocal sacs until they hop out as tiny froglets." },
  { id: 'fact-24', category: 'gruesome', text: 'Many frogs eat their own shed skin. Waste not, want not.' },
  { id: 'fact-25', category: 'gruesome', text: 'The Spanish ribbed newt pushes its own ribs through its skin as poison-tipped spikes when attacked.' },
  { id: 'fact-26', category: 'bizarre', text: 'Glass frogs have see-through skin on their bellies. You can watch their heart beating.' },
  { id: 'fact-27', category: 'bizarre', text: "The paradoxical frog's tadpole is three times bigger than the adult frog. It shrinks as it grows up." },
  { id: 'fact-28', category: 'bizarre', text: 'The purple frog lives underground for 50 weeks a year and only surfaces for two weeks to breed.' },
  { id: 'fact-29', category: 'bizarre', text: 'Some frogs can change sex when their population needs more males or females.' },
  { id: 'fact-30', category: 'bizarre', text: "Horned frogs are so aggressive they'll try to eat prey bigger than themselves. Scientists call them 'Pac-Man frogs.'" },
  { id: 'fact-31', category: 'bizarre', text: 'The wood frog pees in its own blood. The urea helps protect its cells while frozen.' },
  { id: 'fact-32', category: 'superpowers', text: "Wallace's flying frog glides up to 50 feet between trees using enormous webbed feet." },
  { id: 'fact-33', category: 'superpowers', text: 'Olm salamanders live in caves and can survive up to 10 years without food.' },
  { id: 'fact-34', category: 'superpowers', text: 'Some giant salamanders can live over 100 years.' },
  { id: 'fact-35', category: 'superpowers', text: 'Poison dart frog toxins are being studied to create new painkillers for humans.' },
  { id: 'fact-36', category: 'bizarre', text: "The African clawed frog was used for pregnancy tests in the 1940s. If the frog laid eggs after being injected with a woman's urine, she was pregnant." },
  { id: 'fact-37', category: 'gruesome', text: 'Cane toads can shoot poison from glands behind their eyes when squeezed.' },
  { id: 'fact-38', category: 'superpowers', text: 'Some tree frogs can survive having 70% of their body frozen solid.' },
  { id: 'fact-39', category: 'bizarre', text: 'The Bornean flat-headed frog has no lungs at all. It breathes entirely through its skin.' },
  { id: 'fact-40', category: 'behavior', text: 'Male midwife toads wrap strings of eggs around their legs and carry them for weeks until they hatch.' },
  { id: 'fact-41', category: 'bizarre', text: "The 'screaming' rain frog sounds like a squeaky toy when startled." },
  { id: 'fact-42', category: 'superpowers', text: 'Some salamanders can regenerate not just limbs, but parts of their heart, eyes, and even brain.' },
];

// Get a random fact
export const getRandomFact = (): Fact => {
  return didYouKnowFacts[Math.floor(Math.random() * didYouKnowFacts.length)];
};
