// Hero image rotation pool for the Home page

export interface HeroImage {
  id: string;
  src: string;
  alt: string;
  species: string;
  location: string;
  contentType: 'dispatch' | 'real-story' | 'species-spotlight' | 'myth-busters';
  photographer?: string;
}

export const heroImages: HeroImage[] = [
  {
    id: 'india-resplendent-grass-frog',
    src: '/images/dispatches/india-resplendent-grass-frog/hero.jpeg',
    alt: 'A tiny orange-gold Resplendent Grass Frog perched on a grass blade in the Western Ghats',
    species: 'Resplendent Grass Frog',
    location: 'India',
    contentType: 'dispatch',
    photographer: 'Harikrishnan S',
  },
  {
    id: 'panama-spiny-headed-treefrog',
    src: '/images/dispatches/panama-spiny-headed-treefrog/hero.jpeg',
    alt: 'Close-up front view of a Spiny-headed Treefrog showing its distinctive crown of spines and large golden-brown eyes',
    species: 'Spiny-headed Treefrog',
    location: 'Panama',
    contentType: 'dispatch',
    photographer: 'Diego Samaniego',
  },
  {
    id: 'peru-lake-junin-frog',
    src: '/images/dispatches/peru-lake-junin-frog/hero.jpg',
    alt: 'Underwater view of a Lake Junin Frog resting on the rocky bottom, showing its massive body and golden-ringed eyes',
    species: 'Lake Junin Frog',
    location: 'Peru',
    contentType: 'dispatch',
    photographer: 'Roberto Elías Piperis',
  },
  {
    id: 'argentina-valcheta-frog',
    src: '/images/dispatches/argentina-valcheta-frog/hero.jpg',
    alt: 'A pair of Valcheta Frogs with striking golden eyes among bright green aquatic vegetation',
    species: 'Valcheta Frog',
    location: 'Argentina',
    contentType: 'dispatch',
    photographer: 'Rodrigo Calvo',
  },
  {
    id: 'nepal-mahabharat-torrent-frog',
    src: '/images/dispatches/nepal-mahabharat-torrent-frog/hero.jpg',
    alt: 'A Mahabharat Torrent Frog firmly attached to a wet stone beside a Himalayan stream',
    species: 'Mahabharat Torrent Frog',
    location: 'Nepal',
    contentType: 'dispatch',
    photographer: 'Suman Sapkota',
  },
  {
    id: 'india-indigo-bush-frog',
    src: '/images/dispatches/india-indigo-bush-frog/hero.jpeg',
    alt: 'A close-up look at the tiny Indigo Bush Frog resting on a dead fern leaf in its misty mountain home',
    species: 'Indigo Bush Frog',
    location: 'India',
    contentType: 'dispatch',
    photographer: 'Amoghavarsha M',
  },
  {
    id: 'argentina-patagonia-frog',
    src: '/images/dispatches/argentina-patagonia-frog/hero.png',
    alt: 'Patagonia Frog in shallow water showing its golden-brown coloring and blue eye',
    species: 'Patagonia Frog',
    location: 'Argentina',
    contentType: 'dispatch',
    photographer: 'Facundo De los Santos',
  },
  {
    id: 'ghana-afiabirago-puddle-frog',
    src: '/images/dispatches/ghana-afiabirago-puddle-frog/hero.jpg',
    alt: 'A tiny brown Afiabirago Puddle Frog perched on wet leaf litter in the Atewa Forest',
    species: 'Afiabirago Puddle Frog',
    location: 'Ghana',
    contentType: 'dispatch',
    photographer: 'Caleb Ofori-Boateng',
  },
  {
    id: 'us-green-frog',
    src: '/images/dispatches/us-green-frog/hero.jpg',
    alt: 'Green Frog peeking out of the water at Holland Ponds, showing its distinctive green upper lip and golden eyes',
    species: 'Green Frog',
    location: 'USA',
    contentType: 'dispatch',
    photographer: 'Tom Favazza',
  },
];

// Get a random hero image
export const getRandomHeroImage = (): HeroImage => {
  return heroImages[Math.floor(Math.random() * heroImages.length)];
};
