type MediaItem = {
  title: string;
  isImage: boolean;
  onYouTube: boolean;
  mediaUrl: string;
};

export type Event = {
  id: number;
  title: string;
  date: string;
  time: string;
  building: string;
  address: string;
  description: string;
  media: MediaItem[];
};

export const events: Event[] = [
  {
    id: 1,
    title: "Angklung Whispers: The Forgotten Story",
    date: "2024-10-26",
    time: "3:00 - 5:00 PM",
    building: "Community Music Center",
    address: "544 Capp Street San Francisco, CA 94110",
    description: "This powerful Angklung musical theater performance revives the echoes of bravery and unity, buried in history, but now awakened through the vibrant sounds of Indonesia's sacred bamboo instrument. Every note carries a story, a message, a whisper of the past, as this one-of-a-kind production takes you on unforgettable journey of courage and hope.",
    media: [
      {
        title: "Media 1",
        isImage: true,
        onYouTube: false,
        mediaUrl: "/whispers.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Angklung Musical Maestro Sam Udjo Makes His Historic Bay Area Debut",
    date: "2025-07-20",
    time: "3:00 - 4:30 PM",
    building: "Community Music Center",
    address: "544 Capp Street San Francisco, CA 94110",
    description: "For the first time in Bay Area history, the internationally acclaimed Maestro Sam Udjo brings the majestic sounds of the Angklung live from West Java, Indonesia. Witness how the Angklung — once rooted in ritual — now speaks fluently in Western musical scales, opening new possibilities in ensemble and solo performance.",
    media: [
      {
        title: "Media 1",
        isImage: true,
        onYouTube: false,
        mediaUrl: "/Sam.jpg",
      },
      {
        title: "Media 2",
        isImage: false,
        onYouTube: true,
        mediaUrl: "https://www.youtube.com/embed/E4Bq1xR_9sE?si=DRh8Dcbfg0y0fH1K",
      },
    ],
  }
];

export function getUpcomingEvent(): Event | null {
  const now = new Date();

  const upcoming = events
    .filter(event => new Date(event.date) > now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return upcoming[0] || null;
}