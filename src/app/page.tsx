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
        description="The Angklung is made of bamboo and played by shaking. Each instrument produces just one note, so a full melody can only be played when multiple players work together in harmony — making it a deeply collaborative musical experience."
        imageUrl="/media/general/angklung2.jpg"
        onLeft={true}
        hasTitle={false}
        isFit={false}
      />

      <FactCard
        title="Angklung Fact 3"
        description="The Angklung was recognized by UNESCO in 2010 as a Masterpiece of Oral and Intangible Heritage of Humanity. This designation highlights the instrument’s cultural importance and its role in preserving traditional Indonesian music."
        imageUrl="/media/general/unesco.png"
        onLeft={false}
        hasTitle={false}
        isFit={false}
      />

      <SectionTitle title="Upcoming Event" onLeft={true} />

      <UpcomingEvent />
    </section>
  );
}
