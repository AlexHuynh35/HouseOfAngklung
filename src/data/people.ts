export type Person = {
  id: number;
  name: string;
  position: string;
  imageUrl: string;
};

export const people: Person[] = [
  {
    id: 1,
    name: "Jonathan Paul Gordon",
    position: "Chairman",
    imageUrl: "/John.jpg",
  },
  {
    id: 2,
    name: "Suryanti Gordon",
    position: "Founder",
    imageUrl: "/Suryanti.jpg",
  },
  {
    id: 3,
    name: "Andre Harsono",
    position: "Co-Chairman",
    imageUrl: "/Andre.jpg",
  },
  {
    id: 4,
    name: "Yulda Asmara",
    position: "Public Relations Manager",
    imageUrl: "/Yulda.jpg",
  },
  {
    id: 5,
    name: "Irma Ibrahim",
    position: "Board Member",
    imageUrl: "/Irma.jpg",
  },
  {
    id: 6,
    name: "Diah Brinck",
    position: "Treasurer",
    imageUrl: "/Diah.jpg",
  },
  {
    id: 7,
    name: "Maestro Sam Udjo",
    position: "Artistic Advisor & Guardian of the Angklung Legacy",
    imageUrl: "/Sam.jpg",
  }
];