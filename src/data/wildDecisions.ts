// Wild Decisions - Tiny Conservation Dilemmas

export type ChoiceId = 'A' | 'B' | 'C';

export interface DilemmaChoice {
  id: ChoiceId;
  label: string;
  outcomeTitle: string;
  outcomeBody: string;
  questions: string[];
}

export interface CrossLink {
  section: string;
  item: string;
  label: string;
  path: string;
}

export interface Dilemma {
  id: string;
  slug: string;
  label: string;
  title: string;
  illustration: string;
  paragraphs: [string, string];
  prompt: string;
  choices: [DilemmaChoice, DilemmaChoice, DilemmaChoice];
  miniLesson: string;
  crossLink?: CrossLink;
}

export const dilemmas: Dilemma[] = [
  {
    id: 'trail-wet-patch',
    slug: 'trail-wet-patch',
    label: 'tiny conservation dilemma',
    title: 'The new trail by the wet patch',
    illustration: '/images/wilddecision/wilddecision1.jpg',
    paragraphs: [
      "Your town wants to build a new walking trail behind the school. Everyone is excited because it would be easier to get to the park. The plan shows the trail passing a wet patch that fills with water in spring, then dries up in summer. Some kids call it \"the mud puddle,\" but you have seen tiny wriggling things in it after rainy nights.",
      "At the planning meeting, someone says, \"It's just a seasonal puddle. We can build the trail close to it and add lights so it's safer at night.\" You get one chance to speak. You want people to enjoy the trail, but you also want to protect whatever is living in that wet patch."
    ],
    prompt: 'what do you say?',
    choices: [
      {
        id: 'A',
        label: "Let's build it as planned. It's just a puddle and lights make things safer.",
        outcomeTitle: 'What could happen',
        outcomeBody: "Lights can attract insects. That sounds good for animals that eat insects, but lights also confuse night wildlife and can pull predators into the area. Building close to the wet patch can squash plants and compact soil, which changes how water soaks in. A \"puddle\" can quietly be a nursery. If it dries sooner, eggs and larvae may not make it.",
        questions: [
          'When does the wet patch hold water each year?',
          'Does it connect to a stream underground or during storms?',
          'What animals have been seen there at night?'
        ]
      },
      {
        id: 'B',
        label: "Let's move the trail farther away and avoid lights near the wet patch.",
        outcomeTitle: 'What could happen',
        outcomeBody: "Moving the trail back and keeping it darker near the wet patch can protect the water and the nighttime routine of wildlife. It can also reduce trampling and keep plants that hold the soil in place. The tradeoff is that some people will worry about safety if it is dark.",
        questions: [
          'Can we add reflective trail markers instead of bright lights?',
          'Can lights be motion-activated and pointed down, away from water?',
          'Can we build a short boardwalk section to prevent trampling?'
        ]
      },
      {
        id: 'C',
        label: "Before deciding, can we check what animals use it and when they use it?",
        outcomeTitle: 'What could happen',
        outcomeBody: "This slows the decision down a little, but it makes the plan smarter. If you learn that amphibians breed there in spring, the trail could be rerouted, raised, or timed for construction outside the breeding season. Even if it turns out to be mostly insects, you still learn what the wet patch does for the park. It is easier to protect something when you can name what it supports.",
        questions: [
          'Can we do one evening "wildlife check" after rain with an adult?',
          'Can we ask a local naturalist group or park staff to survey it?',
          'Can construction be scheduled after the breeding season?'
        ]
      }
    ],
    miniLesson: 'Seasonal wetlands can be small, temporary, and still extremely important.'
  },
  {
    id: 'backyard-toad',
    slug: 'backyard-toad',
    label: 'tiny conservation dilemma',
    title: 'The backyard toad',
    illustration: '/images/wilddecision/wilddecision2.jpg',
    paragraphs: [
      "You find a toad living under the bushes in your backyard. It's been there for a few weeks now, and you've started to think of it as \"your\" toad. You want to help it stay safe and healthy.",
      "Your neighbor mentions that your family's garden has aphids and suggests using a spray to get rid of them. You know toads eat insects, and you remember reading that amphibians absorb things through their skin. You want the garden to look nice, but you also want the toad to stick around."
    ],
    prompt: 'what do you suggest?',
    choices: [
      {
        id: 'A',
        label: "Let's use the spray. It's just for the aphids, and the toad is on the other side of the yard.",
        outcomeTitle: 'What could happen',
        outcomeBody: "Garden sprays can travel. Rain washes them into soil. Wind carries droplets farther than you'd expect. Even if the toad doesn't touch the sprayed plants directly, it might walk through treated areas or eat insects that have been exposed. Amphibians absorb chemicals through their skin very easily. What seems far away might not be far enough.",
        questions: [
          'How far can spray drift on a windy day?',
          'What happens to the spray when it rains?',
          'Are there animals other than aphids that might be affected?'
        ]
      },
      {
        id: 'B',
        label: "Let's skip the spray and let the toad eat the aphids instead.",
        outcomeTitle: 'What could happen',
        outcomeBody: "Toads do eat aphids, along with slugs, beetles, and other garden insects. One toad won't solve a big infestation overnight, but it's part of a natural balance. The tradeoff is that the aphids might damage some plants before the toad and other predators catch up. Some gardeners are okay with a few chewed leaves. Others aren't.",
        questions: [
          'How bad is the aphid problem, really? Are plants dying or just nibbled?',
          'What other predators might already be helping (ladybugs, birds)?',
          'Can we remove aphids by hand from the worst spots?'
        ]
      },
      {
        id: 'C',
        label: "Can we find something that targets aphids but won't hurt the toad?",
        outcomeTitle: 'What could happen',
        outcomeBody: "Some options are gentler than others. Insecticidal soaps break down quickly. Neem oil works on soft-bodied insects but has fewer effects on animals that don't eat treated leaves. But \"safer\" isn't the same as \"safe.\" Reading labels carefully matters. So does timing, because spraying in the evening when the toad is active is riskier than spraying in the morning.",
        questions: [
          'What does the label say about wildlife and water?',
          'Can we spray only the affected plants and leave the rest alone?',
          'Can we spray in the morning when the toad is hiding?'
        ]
      }
    ],
    miniLesson: 'Amphibians absorb chemicals through their skin, so what goes on your garden can end up in their bodies.'
  },
  {
    id: 'salamander-log',
    slug: 'salamander-log',
    label: 'tiny conservation dilemma',
    title: 'The salamander under the log',
    illustration: '/images/wilddecision/wilddecision3.jpg',
    paragraphs: [
      "On a class nature walk, you flip over a rotting log and find a salamander underneath. It's beautiful, with bright orange spots. Everyone crowds around to see. Someone says, \"Pick it up so we can get a better look!\" Someone else says, \"We should take it back to the classroom!\"",
      "Your teacher is helping another group and hasn't noticed yet. The salamander is sitting very still, but you can see its sides moving as it breathes. You want everyone to appreciate it, but something feels off about grabbing it."
    ],
    prompt: 'what do you do?',
    choices: [
      {
        id: 'A',
        label: "I'll pick it up carefully so everyone can see.",
        outcomeTitle: 'What could happen',
        outcomeBody: "Salamanders have thin, moist skin that absorbs whatever touches it. The oils and salts on human hands can irritate or even harm them. Picking one up also causes stress, and a stressed salamander might drop its tail as a defense. The tail grows back, but it costs the animal a lot of energy. Even careful handling has risks.",
        questions: [
          "What's on my hands right now (soap, sunscreen, bug spray)?",
          'Is there a way to see it up close without touching it?',
          'How can I tell if an animal is stressed?'
        ]
      },
      {
        id: 'B',
        label: "Let's all look but not touch. Then I'll put the log back.",
        outcomeTitle: 'What could happen',
        outcomeBody: "This lets everyone see the salamander without adding stress or risk. Putting the log back gently is important because that log is the salamander's home. It provides moisture, protection from predators, and a place to find food. Leaving the habitat as you found it means the salamander can go back to its normal life after you leave.",
        questions: [
          'Why do salamanders need rotting logs specifically?',
          'What else might live under this log?',
          'How long should we watch before putting it back?'
        ]
      },
      {
        id: 'C',
        label: "Let's take a quick photo and show the teacher before we put the log back.",
        outcomeTitle: 'What could happen',
        outcomeBody: "A photo creates a record without handling the animal. You can zoom in later, look up the species, and share the discovery with people who weren't there. Getting the teacher involved means an adult can help make sure the log goes back properly. The tradeoff is that the salamander stays exposed a bit longer while you wait.",
        questions: [
          'Can someone shade the salamander while we get the teacher?',
          'How do we put the log back without squishing anything?',
          'Can we use the photo to identify the species later?'
        ]
      }
    ],
    miniLesson: 'The best wildlife encounters often end with everything exactly where you found it.'
  },
  {
    id: 'frog-chorus',
    slug: 'frog-chorus',
    label: 'tiny conservation dilemma',
    title: 'The frog chorus at night',
    illustration: '/images/wilddecision/wilddecision4.jpg',
    paragraphs: [
      "Every spring, the frogs in the wetland behind your house start calling at night. You love falling asleep to the sound. But this year, a new neighbor complains that the noise keeps them awake. They want to talk to the city about \"doing something\" about the frogs.",
      "You hear your parents discussing it. The neighbor seems really frustrated. Your parents want to be good neighbors, but they also know the frogs have been there for years. The neighbor asks if everyone could sign a letter asking the city to drain or fill part of the wetland. Your parents ask what you think."
    ],
    prompt: 'what do you say?',
    choices: [
      {
        id: 'A',
        label: "Maybe we should sign it. We want to get along with the neighbors.",
        outcomeTitle: 'What could happen',
        outcomeBody: "Keeping peace with neighbors matters. But filling or draining a wetland removes habitat that frogs, insects, birds, and other wildlife depend on. Once it's gone, it's very hard to bring back. Frogs often return to the same breeding site year after year. If that site disappears, so does the local population. Good intentions can lead to permanent loss.",
        questions: [
          'Is the wetland protected by any local rules?',
          'What else lives there besides frogs?',
          'Are there other ways to help the neighbor sleep?'
        ]
      },
      {
        id: 'B',
        label: "Don't sign it. The frogs were here first and they need that wetland.",
        outcomeTitle: 'What could happen',
        outcomeBody: "Standing up for wildlife is important, and you're right that the wetland is valuable habitat. But saying \"no\" without offering any help might make the conflict worse. The neighbor is still frustrated, and if enough people complain, the city might act anyway. Sometimes protecting nature also means finding creative solutions that address people's concerns.",
        questions: [
          'Would the neighbor be open to trying earplugs or a white noise machine?',
          'Is the calling season short enough that they could wait it out?',
          'Can we help them understand why the frogs are there?'
        ]
      },
      {
        id: 'C',
        label: "Can we find a way to help the neighbor without hurting the frogs?",
        outcomeTitle: 'What could happen',
        outcomeBody: "This opens a conversation instead of picking a side. Maybe the neighbor just needs to know that frog calling season only lasts a few weeks. Maybe a white noise machine or fan would help them sleep. Maybe they'd feel differently if they understood what the wetland does for the neighborhood, like reducing flooding and filtering water. Sometimes the best conservation work is just talking to people.",
        questions: [
          'How long does the calling season actually last?',
          'Would the neighbor like to come listen with us one night?',
          'Are there local naturalists who could explain why the wetland matters?'
        ]
      }
    ],
    miniLesson: 'Protecting wildlife sometimes means helping people find ways to live alongside it.'
  }
];

export const getDilemmaBySlug = (slug: string): Dilemma | undefined => {
  return dilemmas.find(d => d.slug === slug);
};
