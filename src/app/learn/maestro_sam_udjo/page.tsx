import { LearningSection, SectionTitle, VideoCard, PDFCard } from "@/components";

export default function MaestroSamUdjoPage() {
  return (
    <section className="p-6">
      <LearningSection
        title="Maestro Sam Udjo"
        imageUrl="/media/people/Sam.jpg"
        text={[
            "Sam Udjo is the director and cultural ambassador of Saung Angklung Udjo (SAU), an internationally acclaimed center for traditional Indonesian music based in Bandung, West Java. He is the son of the legendary Mang Udjo and has carried forward his father's legacy of Angklung innovation and cultural education.",
            "Sam Udjo has represented Indonesia around the world, conducting performances, workshops, and cultural exchanges in:",
            "United States, including the world-record-breaking performance in Washington D.C. where 5,100 people played Angklung together; France (Paris) at the Odéon, Théâtre de l’Europe, to celebrate the 5th anniversary of Angklung’s UNESCO designation; Switzerland (Geneva); The Netherlands; Japan; South Korea; Malaysia; The Philippines; and Slovakia.",
            "His work with SAU has made significant contributions to Angklung’s recognition as a UNESCO Intangible Cultural Heritage since 2010. Sam continues to lead global educational programs and collaborations that connect traditional Indonesian music with communities worldwide."
        ]}
      />

      <SectionTitle title="Sam Udjo's Performances" onLeft={true} />

      <VideoCard
        title="Performance 1"
        description=""
        videoUrl="https://www.youtube.com/embed/E4Bq1xR_9sE?si=DRh8Dcbfg0y0fH1K"
        onYouTube={true}
      />

      <div className="flex justify-center">
        <div className="w-3/4 h-px bg-brown-500 rounded" />
      </div>

      <VideoCard
        title="Performance 2"
        description=""
        videoUrl="/media/general/performance.mp4"
        onYouTube={false}
      />

      <SectionTitle title="Sam Udjo's SF Visit" onLeft={false} />

      <PDFCard pdfUrl="/media/events/samudjo/AngklungReport.pdf" />
    </section>
  );
}