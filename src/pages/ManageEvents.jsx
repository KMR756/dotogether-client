import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { Fade } from "react-awesome-reveal";
import MyEventsCard from "../Components/MyEventsCard";
import Loading from "../Components/Loading";

const ManageEvents = () => {
  const data = useLoaderData();
  const [events, setEvents] = useState(data.data);

  const handleDeleteEvent = (id) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event._id !== id));
  };

  return (
    <>
      <Fade direction="up" duration={2000} triggerOnce>
        <h1 className="w-10/12 mx-auto text-center text-4xl md:text-7xl dark:text-white text-[#FF6363] inter font-black my-8 md:my-15">
          My all events
        </h1>
      </Fade>

      {events.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-2xl dark:text-white">No events found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-10/12 mx-auto gap-2 md:gap-10">
          {events.map((event) => (
            <MyEventsCard
              key={event._id}
              event={event}
              onDelete={handleDeleteEvent}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ManageEvents;
