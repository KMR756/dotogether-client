import React from "react";
import { useLoaderData } from "react-router";
import UpcomingEventsCard from "../Components/UpcomingEventsCard";

const UpcomingEvents = () => {
  const events = useLoaderData();
  console.log(events);

  return (
    <>
      <h1>Upcoming events</h1>
      <div>
        {events.map((event) => (
          <UpcomingEventsCard
            key={event._id}
            event={event}
          ></UpcomingEventsCard>
        ))}
      </div>
    </>
  );
};

export default UpcomingEvents;
