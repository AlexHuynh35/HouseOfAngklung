export type Event = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl: string;
};

export const events: Event[] = [
  {
    id: 1,
    title: "Angklung Performance with Maestro Sam Udjo",
    date: "2025-07-19",
    time: "3:30 - 6:30 PM",
    location: "San Francisco",
    description: "Join us for a magical night of music with Maestro Sam Udjo visiting from Indonesia. This educational performance will feature traditional Angklung music, cultural storytelling, and community engagement.",
    imageUrl: "/Sam.jpg",
  }
];

export function getUpcomingEvent(): Event | null {
  const now = new Date();

  const upcoming = events
    .filter(event => new Date(event.date) > now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return upcoming[0] || null;
}