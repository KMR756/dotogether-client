import React from "react";
import { useLoaderData } from "react-router";
import UpcomingEventsCard from "../Components/UpcomingEventsCard";
import { Fade } from "react-awesome-reveal";

const UpcomingEvents = () => {
  const events = useLoaderData();
  console.log(events);
  const upcomingEvents = events.filter(
    (event) => new Date(event.eventDate) >= new Date()
  );

  return (
    <>
      <Fade direction="up" duration={2000} triggerOnce>
        <h1 className="w-10/12 mx-auto text-center text-4xl md:text-7xl dark:text-white text-[#FF6363] inter font-black my-8 md:my-15">
          Features
        </h1>
      </Fade>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  w-10/12 mx-auto gap-2 md:gap-10">
        {upcomingEvents.map((event) => (
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
