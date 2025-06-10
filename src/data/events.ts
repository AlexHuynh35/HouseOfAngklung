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
      title: "Angklung Opening Ceremony",
      date: "2024-10-12",
      location: "4:00 PM",
      description: "A celebration of cultural unity and music.",
      imageUrl: "/placeholder.jpg",
    },
    {
      id: 2,
      title: "Community Angklung Workshop",
      date: "2024-11-05",
      location: "1:00 PM",
      description: "Hands-on angklung workshop for all ages.",
      imageUrl: "/placeholder.jpg",
    },
    {
      id: 3,
      title: "Performance with Sam Udjo",
      date: "2025-07-18",
      location: "6:00 PM",
      description: "Featuring Maestro Sam Udjo from Indonesia.",
      imageUrl: "/placeholder.jpg",
    },
    {
      id: 4,
      title: "Winter Music Showcase",
      date: "2025-12-02",
      location: "5:00 PM",
      description: "Showcase of our winter angklung projects.",
      imageUrl: "/placeholder.jpg",
    },
  ];