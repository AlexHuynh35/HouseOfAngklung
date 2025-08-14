import { events } from "@/data/events";
import { Masonry, SectionTitle } from "@/components";

export default function MaestroSamUdjoEventPage() {
  const event = events[1]
  return (
    <section className="p-6">
      <div className="max-w-4xl mx-auto text-center mb-10 px-4">
        <h1 className="text-gray-700 text-xl md:text-2xl">Explore highlights from the event, <span className="font-bold">{event.title}</span>, below.</h1>
      </div>

      <SectionTitle title="Photo Gallery" onLeft={true} />

      <div className="max-w-4xl mx-auto text-center mb-10 px-4">
        <h1 className="text-gray-700 text-xl md:text-2xl">Taken By: <span className="font-bold">Satrio Mahanto</span></h1>
      </div>

      <Masonry
        path={event.path}
        numPhotos={event.numPhotos}
      />
    </section>
  );
}