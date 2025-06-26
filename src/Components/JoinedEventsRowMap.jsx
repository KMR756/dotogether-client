import React from "react";

const JoinedEventsRowMap = ({ event }) => {
  console.log(event);
  const { date, eventType, location, organizer, photoURL, title, userEmail } =
    event;

  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        class="flex items-center  px-6 py-2 lg:py-4 text-gray-900 whitespace-nowrap dark:text-white"
      >
        <img
          class="w-10 h-10 object-cover rounded-2xl"
          src={photoURL}
          alt="event image"
        ></img>
        <div class="ps-1 lg:ps-3">
          <div class="inter font-normal  lg:font-semibold px-6 py-1 lg:py-2 text-[10px] lg:text-xl">
            {title}
          </div>
          <div class="inter font-normal  lg:font-semibold px-6 py-1 lg:py-2 text-[10px] lg:text-xl text-gray-500">
            {userEmail}
          </div>
        </div>
      </th>
      <td class="inter font-normal  lg:font-semibold px-6 py-1 lg:py-4 text-[10px] lg:text-xl">
        {eventType}
      </td>
      <td class="inter font-normal  lg:font-semibold px-6 py-1 lg:py-4 text-[10px] lg:text-xl">
        {organizer}
      </td>
      <td class="inter font-normal  lg:font-semibold px-6 py-1 lg:py-4 text-[10px] lg:text-xl">
        {date}
      </td>
      <td class="inter font-normal  lg:font-semibold px-6 py-1 lg:py-4 text-[10px] lg:text-xl">
        {location}
      </td>
    </tr>
  );
};

export default JoinedEventsRowMap;
