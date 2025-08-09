import React from "react";
import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router";
import { MdDateRange } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const UpcomingEventsCard = ({ event }) => {
  const { title, photoURL, description, _id, date, location } = event;
  console.log(event);

  return (
    <>
      <Zoom duration={500} triggerOnce>
        <div className="flex h-[455px] flex-col bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <img
            className="rounded-t-lg max-h-[140px] w-full object-cover"
            src={photoURL}
            alt=""
          />
          <div className="flex justify-between mx-5 mt-6">
            <div className="flex gap-1 items-center border-transparent bg-amber-500 p-1 rounded-2xl">
              <MdDateRange />
              <p className="text-[8px]  text-gray-900 dark:text-white inter">
                {date}
              </p>
            </div>
            <div className="flex items-center gap-1 border-transparent bg-amber-500 p-1 rounded-2xl">
              <IoLocationSharp />
              <p className="text-[8px] text-gray-900 dark:text-white inter">
                {location}
              </p>
            </div>
          </div>
          <div className="py-3 px-5 flex-1">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white inter">
              {title}
            </h5>

            <p className="mb-3 font-normal text-gray-700 h-[50px] dark:text-gray-400 overflow-hidden inter">
              {description}
            </p>
          </div>
          <div className="mb-5 ml-5">
            <Link
              to={`/upcomingevents/${_id}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inter"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                ariaHidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </Zoom>
    </>
  );
};

export default UpcomingEventsCard;
