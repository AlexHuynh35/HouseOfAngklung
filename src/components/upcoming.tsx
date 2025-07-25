import { getUpcomingEvent } from "@/data/events";
import EventCard from "@/components/event";

export default function UpcomingEvent() {
  const upcomingEvents = getUpcomingEvent();

  return (
    <div>
      {upcomingEvents ? (
        <EventCard {...upcomingEvents} />
      ) : (
        <div className="max-w-4xl mx-auto text-center my-10 px-4">
          <p className="text-gray-700 text-md md:text-lg">
            No upcoming events found
          </p>
        </div>
      )}
    </div>
  );
}