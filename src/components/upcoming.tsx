import { getUpcomingEvent } from "@/data/events";
import EventCard from "@/components/event";

export default function UpcomingEvent() {
  const upcomingEvents = getUpcomingEvent();

  return (
    <div>
      {upcomingEvents ? (
        <EventCard {...upcomingEvents} />
      ) : (
        <p>No upcoming events found</p>
      )}
    </div>
  );
}