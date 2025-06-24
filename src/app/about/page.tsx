import { people } from "@/data/people";
import { SectionTitle, PersonCard, FactCard } from "@/components";

export default function AboutPage() {
  return (
    <section className="p-6">
      <div className="px-4 py-12 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-brown-800 mb-4">
          About Us
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
          We are a community-driven group dedicated to sharing the beauty of Angklung through performances, workshops, and cultural education. Based in the Bay Area, we connect people of all backgrounds through music, storytelling, and hands-on experiences.
        </p>
      </div>
      
      <FactCard
        title="Our Mission"
        description="We strive to elevate the Angklung as a unique, one-of-a-kind bamboo musical genre, showcasing its distinctive sound and versatility through comprehensive educational initiatives and performance opportunities."
        imageUrl="/mission.png"
        onLeft={true}
        hasTitle={true}
        isFit={true}
      />

      <FactCard
        title="Our Vision"
        description="We aim to position the Angklung as a prominent genre within the global music landscape, encouraging innovation and collaborative practices while securing its lasting significance in contemporary musical expression."
        imageUrl="/vision.png"
        onLeft={false}
        hasTitle={true}
        isFit={true}
      />

      <SectionTitle title="Our Team" onLeft={true} />

      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {people.map((person) => (
          <PersonCard key={person.id} {...person} />
        ))}
      </div>
    </section>
  );
}