import { formatDate } from "@/utils/formatDate";
import { eventPhotoData } from "@/utils/eventPhotoData";
import { SectionTitle, PDFCard, ScrollableDescription } from "@/components";
import { events } from "@/data/events";
import Image from "next/image";
import Link from "next/link";

type EventPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Event({ params }: EventPageProps) {
  const { slug } = await params;

  const event = events.find((p) => p.slug === slug);

  if (!event) {
    return <div className="p-8">Event not found</div>;
  }

  const imageUrls = eventPhotoData(event.numPhotos, event.path);
  const firstEight = imageUrls.slice(0, 8);

  return (
    <section className="p-6">
      <div className="max-w-4xl mx-auto text-center text-balance px-4 my-12">
        <h1 className="text-3xl md:text-4xl font-bold text-brown-800 mb-2">
          {event.title}
        </h1>
      </div>

      <SectionTitle title="Event Info" onLeft={true} />

      <div className="max-w-5xl mx-auto my-8 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
          <div className="w-full p-6 flex flex-col justify-center">
            <p className="text-gray-600 mb-1 text-lg md:text-xl"><strong>Date:</strong></p>
            <p className="text-gray-600 mb-1 ml-4">{formatDate(event.date)}</p>
            <p className="text-gray-600 ml-4">{event.time}</p>
          </div>
        </div>
        <div className="md:w-1/2 bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
          <div className="w-full p-6 flex flex-col justify-center">
            <p className="text-gray-600 mb-1 text-lg md:text-xl"><strong>Location:</strong></p>
            <p className="text-gray-600 mb-1 ml-4">{event.building}</p>
            <p className="text-gray-600 ml-4">{event.address}</p>
          </div>
        </div>
      </div>

      {event.links.length > 0 &&
        <div className="max-w-5xl mx-auto my-8 flex md:items-center bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
          <div className="w-full p-6 flex flex-col justify-center">
            <p className="text-gray-600 mb-1 text-lg md:text-xl"><strong>External Links:</strong></p>
            {event.links.map((link) => (
              <Link key={link.title} href={link.link} className="w-fit text-gray-600 mb-1 ml-4 underline hover:text-blue-500">{link.title}</Link>
            ))}
          </div>
        </div>
      }

      <div className="max-w-5xl mx-auto my-8 flex md:items-center bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
        <div className="w-full p-6 flex flex-col justify-center">
          <p className="text-gray-600 mb-1 text-lg md:text-xl"><strong>Description:</strong></p>
          <ScrollableDescription
            description={event.description}
            show={false}
          />
        </div>
      </div>

      {event.readings.length != 0 &&
        <div>
          <SectionTitle title="Impact" onLeft={false} />

          <PDFCard pdfUrl={event.readings[0]} />
        </div>
      }

      {event.hasGallery &&
        <div>
          <SectionTitle title="Photo Gallery" onLeft={true} />

          <div className="max-w-5xl mx-auto relative my-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {firstEight.map((src, idx) => (
                <div key={idx} className="relative w-full h-48">
                  <Image
                    src={src}
                    alt={`event${idx + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>

            {/* View All Button */}
            <div className="mt-8 flex justify-center">
              <button className="bg-brown-600 text-white px-3 py-1 rounded-md hover:bg-brown-700 transition-transform transform hover:scale-105">
                <Link href="/gallery/maestro_sam_udjo_event" className="text-2xl">View All Photos</Link>
              </button>
            </div>
          </div>
        </div>
      }
    </section>
  );
}