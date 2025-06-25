import React, { use } from "react";
import JoinedEventsRowMap from "./JoinedEventsRowMap";
import { Fade } from "react-awesome-reveal";

const JoinedEventRow = ({ myJoinedPromise }) => {
  const jointList = use(myJoinedPromise);
  return (
    <div>
      <div>
        <Fade direction="up" duration={500} triggerOnce>
          <h1 className="w-10/12 mx-auto text-center text-4xl md:text-7xl dark:text-white text-[#FF6363] inter font-black my-8 md:my-20">
            joined event : {jointList.length}
          </h1>
        </Fade>
      </div>

      <div class="relative w-10/12 mx-auto overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th
                scope="col"
                class="inter text-[10px] lg:text-xl font-black px-6 py-3"
              >
                Title
              </th>
              <th
                scope="col"
                class="inter text-[10px] lg:text-xl  font-black px-6 py-3"
              >
                Event Type
              </th>
              <th
                scope="col"
                class="inter text-[10px] lg:text-xl font-black px-6 py-3"
              >
                Organizer
              </th>
              <th
                scope="col"
                class="inter text-[10px] lg:text-xl font-black px-6 py-3"
              >
                Event Date
              </th>
              <th
                scope="col"
                class="inter text-[10px] lg:text-xl font-black px-6 py-3"
              >
                location
              </th>
            </tr>
          </thead>
          <tbody>
            {jointList.map((event) => (
              <JoinedEventsRowMap
                event={event}
                key={event._id}
              ></JoinedEventsRowMap>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JoinedEventRow;
