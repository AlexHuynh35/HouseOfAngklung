import Image from "next/image";
import { UpcomingEvent, SectionTitle, FactCard } from "@/components";

export default function Home() {
  return (
    <section className="p-6">
      <div className="max-w-4xl mx-auto text-center px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-brown-800 mb-4">
          Bringing the Sound of Angklung to San Francisco
        </h1>
        <p className="text-gray-700 text-xl md:text-2xl">
          Discover performances, workshops, and educational programs dedicated to preserving and sharing the beauty of traditional Indonesian music.
        </p>
      </div>

      <SectionTitle title="Angklung Fact" onLeft={false} />

      <FactCard
        title="Angklung Fact 1"
        description="Interesting Fact"
        imageUrl="/placeholder.jpg"
        onLeft={true}
      />

      <FactCard
        title="Angklung Fact 2"
        description="Interesting Fact"
        imageUrl="/placeholder.jpg"
        onLeft={false}
      />

      <SectionTitle title="Upcoming Event" onLeft={true} />

      <UpcomingEvent />
    </section>
  );
}
