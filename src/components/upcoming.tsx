import { getUpcomingEvent, getMostRecentEvent } from "@/data/events";
import EventCard from "@/components/event";

export default function UpcomingEvent() {
  const upcomingEvent = getUpcomingEvent();
  const mostRecentEvent = getMostRecentEvent();

  return (
    <div>
      {upcomingEvent ? (
        <EventCard {...upcomingEvent} />
      ) : mostRecentEvent ? (
        <EventCard {...mostRecentEvent} />
      ) : (
        <div className="max-w-4xl mx-auto text-center my-10 px-4">
          <p className="text-gray-700 text-md md:text-lg">
            No events found
          </p>
        </div>
      )}
    </div>
  );
}