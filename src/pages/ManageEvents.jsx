import React, { Suspense } from "react";
import { AuthContext } from "../context/AuthContext";
import Loading from "../Components/Loading";
import MyeventList from "../Components/MyeventList";
import { useLoaderData } from "react-router";
import { Fade } from "react-awesome-reveal";
import MyEventsCard from "../Components/MyEventsCard";

const ManageEvents = () => {
  const data = useLoaderData();
  // console.log(data.data);

  return (
    <>
      <Fade direction="up" duration={2000} triggerOnce>
        <h1 className="w-10/12 mx-auto text-center text-4xl md:text-7xl dark:text-white text-[#FF6363] inter font-black my-8 md:my-15">
          My all events
        </h1>
      </Fade>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  w-10/12 mx-auto gap-2 md:gap-10">
        {data.data.map((events) => (
          <MyEventsCard key={events._id} events={events}></MyEventsCard>
        ))}
      </div>
    </>
  );
};

export default ManageEvents;
