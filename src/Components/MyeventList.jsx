import React, { use } from "react";
import MyEventsCard from "./MyEventsCard";
import { Fade } from "react-awesome-reveal";

const MyeventList = ({ myEventsPromise }) => {
  const events = use(myEventsPromise);
  console.log(events);

  return (
    <>
      <Fade direction="up" duration={2000} triggerOnce>
        <h1 className="w-10/12 mx-auto text-center text-4xl md:text-7xl dark:text-white text-[#FF6363] inter font-black my-8 md:my-15">
          My all events
        </h1>
      </Fade>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  w-10/12 mx-auto gap-2 md:gap-10">
        {events.map((event) => (
          <MyEventsCard key={event._id} event={event}></MyEventsCard>
        ))}
      </div>
    </>
  );
};

export default MyeventList;
