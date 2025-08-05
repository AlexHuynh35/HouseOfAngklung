import { LearningSection } from "@/components";

export default function MusicalEvolutionPage() {
  return (
    <section className="p-6">
      <LearningSection
        title="The Musical Evolution of the Angklung"
        imageUrl="/media/general/angklung2.jpg"
        text={[
            "The angklung is a bamboo musical instrument known for its distinctive resonance and ensemble-based performance. As an idiophone, it consists of tuned bamboo tubes mounted on a frame. When shaken, each instrument produces a single pitch, requiring coordinated group playing to create melodies and harmonic structures. Its design inherently emphasizes collaboration and musical unity.",
            "Originally limited to pentatonic tones, the angklung underwent a significant transformation in the 20th century when it was adapted to follow the Western diatonic scale. This breakthrough, pioneered by Daeng Soetigna, marked the beginning of the angklung’s integration into global musical frameworks. Further innovation led to the development of the chromatic angklung, expanding its tonal range and enabling performance of complex Western classical pieces and full-scale harmonic progressions.",
            "Today, the angklung can be performed in combination with orchestras, wind ensembles, choirs, jazz bands, and modern instruments. Its pitch precision and flexible arrangement make it suitable for a wide variety of genres and musical traditions. Angklung orchestras now regularly feature in international music festivals and academic institutions, performing everything from Baroque to contemporary works.",
            "In 2010, the angklung was recognized by UNESCO on its Representative List of the Intangible Cultural Heritage of Humanity—not solely for its origins, but for its enduring musical relevance and its capacity to evolve. The angklung stands today as a fully realized concert instrument, bridging traditional craftsmanship with modern musical innovation across diverse performance contexts."
        ]}
      />
    </section>
  );
}