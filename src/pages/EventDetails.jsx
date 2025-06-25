import React, { use } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";

const EventDetails = () => {
  const event = useLoaderData();
  const { user } = use(AuthContext);
  const {
    eventType,
    description,
    eventDate,
    location,
    organizer,
    photoURL,
    title,
    _id,
  } = event;
  //   console.log(event._id);
  //   console.log(user.email);

  const eventJointUser = {
    eventId: _id,
    userEmail: user.email,
  };
  console.log(eventJointUser);

  return (
    <>
      <div className="my-20 w-10/12 mx-auto flex flex-col  bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row   dark:border-gray-700 dark:bg-gray-800 ">
        <div className="p-2 lg:p-10  flex flex-col items-center">
          <img
            className="object-cover   w-[600px] max-h-[280px] rounded-2xl"
            src={photoURL}
            alt=""
          ></img>
          <button
            type="button"
            class="inter mt-10 text-white  dark:text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl   font-bold rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
          >
            Joint Event
          </button>
        </div>
        <div className="flex flex-col mt-4 mx-5 lg:mx-0 lg:mt-15 ">
          <h5 className="inter mb-2 text-3xl md:text-xl xl:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="inter mb-3 font-normal text-xl md:text-sm xl:text-xl  text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg my-10">
            <table class="w-full  text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <tbody>
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    class="px-6 py-4 font-bold text-sm lg:text-xl  text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Event type:
                  </th>
                  <td class="px-6 py-4 text-sm lg:text-xl">{eventType}</td>
                </tr>
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    class="px-6 py-4 font-bold text-sm lg:text-xl text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Location:
                  </th>
                  <td class="px-6 py-4 text-sm lg:text-xl">{location}</td>
                </tr>
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    class="px-6 py-4 font-bold text-sm lg:text-xl text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Organizer:
                  </th>
                  <td class="px-6 py-4 text-sm lg:text-xl">{organizer}</td>
                </tr>
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                  <th
                    scope="row"
                    class="px-6 py-4 font-bold text-sm lg:text-xl text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Event Date:
                  </th>
                  <td class="px-6 py-4 text-sm lg:text-xl">{eventDate}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
