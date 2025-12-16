// Field Notes data for search indexing

export interface FieldNote {
  id: string;
  slug: string;
  title: string;
  day: number;
  location: string;
  species: string;
  searchText: string; // Key terms for search
}

export const fieldNotes: FieldNote[] = [
  {
    id: 'glass-half-full',
    slug: 'glass-half-full',
    title: 'Glass Half Full',
    day: 58,
    location: 'Costa Rica',
    species: 'Glass Frog',
    searchText: 'glass frog transparent see-through heart beating invisible camouflage centrolenidae cloud forest costa rica blood cells liver organs visibility transparency',
  },
  {
    id: 'salamander-older-than-dinosaurs',
    slug: 'salamander-older-than-dinosaurs',
    title: 'The Salamander That\'s Older Than Dinosaurs',
    day: 73,
    location: 'Japan',
    species: 'Japanese Giant Salamander',
    searchText: 'japanese giant salamander ancient dinosaur prehistoric living fossil cryptobranchidae japan river breathe skin amphibian endangered kyoto',
  },
];
