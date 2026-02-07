import { events } from "@/data/events";
import { EventCard, UpcomingEvent, SectionTitle } from "@/components";
import Link from "next/link";

const EVENTS_PER_PAGE = 2;

function getPageNumbers(total: number, perPage: number) {
  return Array.from({ length: Math.ceil(total / perPage) }, (_, i) => i + 1);
}

export default async function EventsPage(props: { searchParams?: Promise<{ page?: string; }>; }) {
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams?.page) || 1;
  const startIndex = (currentPage - 1) * EVENTS_PER_PAGE;
  const paginatedEvents = events.slice(startIndex, startIndex + EVENTS_PER_PAGE);
  const pageNumbers = getPageNumbers(events.length, EVENTS_PER_PAGE);

  return (
    <section className="p-6">
      <div className="max-w-5xl mx-auto text-center text-balance mb-10 px-4">
        <h1 className="text-gray-700 text-xl md:text-2xl">
          Explore our past performances and upcoming events — including workshops, concerts, and cultural collaborations — celebrating the rich tradition of Angklung music!
        </h1>
      </div>

      <SectionTitle title="Check Out This Event" onLeft={true} />

      <UpcomingEvent />

      <SectionTitle title="All Events" onLeft={false} />

      {paginatedEvents.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}

      <div className="flex justify-center mt-8 gap-2 items-center">
        {/* Prev button */}
        {currentPage > 1 && (
          <Link
            href={`?page=${currentPage - 1}`}
            scroll={false}
            className="px-3 py-1 border rounded hover:bg-gray-100"
          >
            &lt;
          </Link>
        )}

        {/* Page numbers */}
        {pageNumbers.map((page) => (
          <Link
            key={page}
            href={`?page=${page}`}
            scroll={false}
            className={`px-3 py-1 border rounded ${page === currentPage ? "bg-brown-700 text-white" : "hover:bg-gray-100"
              }`}
          >
            {page}
          </Link>
        ))}

        {/* Next button */}
        {currentPage < pageNumbers.length && (
          <Link
            href={`?page=${currentPage + 1}`}
            scroll={false}
            className="px-3 py-1 border rounded hover:bg-gray-100"
          >
            &gt;
          </Link>
        )}
      </div>
    </section>
  );
}