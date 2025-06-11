export type Event = {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
};

export const events: Event[] = [
  {
    id: 1,
    title: "Sample Event",
    date: "2024-10-12",
    location: "San Francisco",
    description: "This is an event.",
    imageUrl: "/placeholder.jpg",
  },
  {
    id: 2,
    title: "Sample Event",
    date: "2024-11-05",
    location: "San Francisco",
    description: "This is an event.",
    imageUrl: "/placeholder.jpg",
  },
  {
    id: 3,
    title: "Angklung Performance with Maestro Sam Udjo",
    date: "2025-07-18",
    location: "San Francisco",
    description: "Join us for a magical night of music with Maestro Sam Udjo visiting from Indonesia. This educational performance will feature traditional Angklung music, cultural storytelling, and community engagement.",
    imageUrl: "/placeholder.jpg",
  },
  {
    id: 4,
    title: "Sample Event",
    date: "2025-12-02",
    location: "San Francisco",
    description: "This is an event.",
    imageUrl: "/placeholder.jpg",
  },
];

export function getUpcomingEvent(): Event | null {
  const now = new Date();

  const upcoming = events
    .filter(event => new Date(event.date) > now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return upcoming[0] || null;
}