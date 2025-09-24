type MediaItem = {
  title: string;
  isImage: boolean;
  onYouTube: boolean;
  mediaUrl: string;
};

export type Event = {
  id: number;
  slug: string;
  title: string;
  date: string;
  time: string;
  building: string;
  address: string;
  description: string;
  media: MediaItem[];
  readings: string[];
  hasGallery: boolean;
  path: string;
  numPhotos: number;
};

export const events: Event[] = [
  {
    id: 1,
    slug: "angklung_whispers",
    title: "Angklung Whispers: The Untold Story",
    date: "2024-10-26",
    time: "3:00 - 5:00 PM",
    building: "Community Music Center",
    address: "544 Capp Street San Francisco, CA 94110",
    description: `Angklung Journey was a thoughtfully curated educational event examining the cultural and historical evolution of the angklung, a traditional bamboo instrument from West Java, Indonesia. Through live performance and storytelling, the event highlighted the angklung's role in community life, music education, and intergenerational transmission. \n
                At the heart of the program was a powerful original narrative titled Angklung Whispers, written by Sylvanna Nelwan and first introduced on May 05, 2024. The story illuminated the instrument's journey through time — interweaving ancestral memory, ritual, and renewal. Its inclusion during Angklung Journey offered audiences a compelling lens into the cultural heartbeat of the angklung, transforming historical knowledge into lived emotional resonance. \n
                The event was warmly received, underscoring how this UNESCO-recognized instrument continues to inspire learning, harmony, and connection across cultures.`,
    media: [
      {
        title: "Media 1",
        isImage: true,
        onYouTube: false,
        mediaUrl: "/media/events/whispers/whispers3.png",
      },
    ],
    readings: [],
    hasGallery: false,
    path: "media/events/whispers",
    numPhotos: 0,
  },
  {
    id: 2,
    slug: "maestro_sam_udjo",
    title: "Angklung Musical Maestro Sam Udjo Makes His Historic Bay Area Debut",
    date: "2025-07-20",
    time: "3:30 - 5:00 PM",
    building: "Community Music Center",
    address: "544 Capp Street San Francisco, CA 94110",
    description: `For the first time in Bay Area history, the internationally acclaimed Maestro Sam Udjo brought the majestic sounds of the Angklung live from West Java, Indonesia. \n
                The event explored the transformation of the Angklung - from its idiophonic, diatonic origins to its reimagining as a chromatic instrument in classical performance. It also delved into its tonal structure, tuning systems, and role in global music innovation. \n
                A landmark experience for music scholars, educators, and artists - it marked a moment in musical history not to be forgotten.`,
    media: [
      {
        title: "Media 1",
        isImage: true,
        onYouTube: false,
        mediaUrl: "/media/people/Sam.jpg",
      },
      {
        title: "Media 2",
        isImage: false,
        onYouTube: true,
        mediaUrl: "https://www.youtube.com/embed/E4Bq1xR_9sE?si=DRh8Dcbfg0y0fH1K",
      },
    ],
    readings: ["/media/events/samudjo/AngklungReport.pdf"],
    hasGallery: true,
    path: "media/events/samudjo",
    numPhotos: 65,
  }
];

export function getUpcomingEvent(): Event | null {
  const now = new Date();

  const upcoming = events
    .filter(event => new Date(event.date) > now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return upcoming[0] || null;
}

export function getMostRecentEvent(): Event | null {
  const now = new Date();

  const pastEvents = events
    .filter(event => new Date(event.date) <= now)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return pastEvents[0] || null;
}