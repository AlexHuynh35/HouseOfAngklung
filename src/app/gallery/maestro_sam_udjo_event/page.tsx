import { events } from "@/data/events";
import { Masonry, SectionTitle } from "@/components";

export default function MaestroSamUdjoEventPage() {
  const event = events[1]
  return (
    <section className="p-6">
      <div className="max-w-5xl mx-auto text-center mb-10 px-4">
        <h1 className="text-gray-700 text-xl md:text-2xl">Event: {event.title}</h1>
      </div>

      <SectionTitle title="Photo Gallery" onLeft={true} />

      <Masonry
        path={event.path}
        photos={event.photos}
      />
    </section>
  );
}