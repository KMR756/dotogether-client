import React, { useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { IoLocationSharp } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyEventsCard = ({ event, onDelete }) => {
  const { photoURL, date, title, description, _id, location } = event;
  const [isDeleting, setIsDeleting] = useState(false);

  const handleEventDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to delete "${title}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setIsDeleting(true);

        fetch(`${import.meta.env.VITE_API_URL}/events/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your event has been deleted.", "success");
              onDelete(id);
            }
          })
          .catch(() => {
            Swal.fire(
              "Error",
              "Failed to delete event. Please try again.",
              "error"
            );
          })
          .finally(() => setIsDeleting(false));
      }
    });
  };

  return (
    <Zoom duration={500} triggerOnce>
      <div className="flex flex-col h-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-lg h-[180px] w-full object-cover"
          src={photoURL}
          alt={title}
        />

        <div className="flex justify-between mx-5 mt-6">
          <div className="flex items-center gap-1 bg-amber-500 p-1 rounded-2xl">
            <MdDateRange />
            <p className="text-[8px] px-1 text-gray-900 dark:text-white inter">
              {date}
            </p>
          </div>
          <div className="flex items-center gap-1 bg-amber-500 p-1 rounded-2xl">
            <IoLocationSharp />
            <p className="text-[8px] px-1 text-gray-900 dark:text-white inter">
              {location}
            </p>
          </div>
        </div>

        <div className="py-3 px-5 flex-1">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white inter">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 h-[40px] dark:text-gray-400 overflow-hidden inter">
            {description}
          </p>
        </div>

        <div className="mb-5 mx-3 flex justify-between">
          <Link to={`/update/${_id}`}>
            <button className="inline-flex gap-1 items-center px-1.5 py-1 text-xl font-bold  bg-[#4ED7F1] dark:bg-[#1A1A1D] text-[#3A0519] dark:text-[#FF6363] rounded-lg    hover:bg-[#78c1cf] dark:hover:bg-gray-700 inter">
              Edit
              <svg
                className="w-9 h-9 pb-1"
                viewBox="0 -0.5 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.7 5.12758L19.266 6.37458C19.4172 6.51691 19.5025 6.71571 19.5013 6.92339C19.5002 7.13106 19.4128 7.32892 19.26 7.46958L18.07 8.89358L14.021 13.7226C13.9501 13.8037 13.8558 13.8607 13.751 13.8856L11.651 14.3616C11.3755 14.3754 11.1356 14.1751 11.1 13.9016V11.7436C11.1071 11.6395 11.149 11.5409 11.219 11.4636L15.193 6.97058L16.557 5.34158C16.8268 4.98786 17.3204 4.89545 17.7 5.12758Z"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.033 7.61865C12.4472 7.61865 12.783 7.28287 12.783 6.86865C12.783 6.45444 12.4472 6.11865 12.033 6.11865V7.61865ZM9.23301 6.86865V6.11865L9.23121 6.11865L9.23301 6.86865ZM5.50001 10.6187H6.25001L6.25001 10.617L5.50001 10.6187ZM5.50001 16.2437L6.25001 16.2453V16.2437H5.50001ZM9.23301 19.9937L9.23121 20.7437H9.23301V19.9937ZM14.833 19.9937V20.7437L14.8348 20.7437L14.833 19.9937ZM18.566 16.2437H17.816L17.816 16.2453L18.566 16.2437ZM19.316 12.4937C19.316 12.0794 18.9802 11.7437 18.566 11.7437C18.1518 11.7437 17.816 12.0794 17.816 12.4937H19.316ZM15.8863 6.68446C15.7282 6.30159 15.2897 6.11934 14.9068 6.2774C14.5239 6.43546 14.3417 6.87397 14.4998 7.25684L15.8863 6.68446ZM18.2319 9.62197C18.6363 9.53257 18.8917 9.13222 18.8023 8.72777C18.7129 8.32332 18.3126 8.06792 17.9081 8.15733L18.2319 9.62197ZM8.30001 16.4317C7.8858 16.4317 7.55001 16.7674 7.55001 17.1817C7.55001 17.5959 7.8858 17.9317 8.30001 17.9317V16.4317ZM15.767 17.9317C16.1812 17.9317 16.517 17.5959 16.517 17.1817C16.517 16.7674 16.1812 16.4317 15.767 16.4317V17.9317ZM12.033 6.11865H9.23301V7.61865H12.033V6.11865ZM9.23121 6.11865C6.75081 6.12461 4.7447 8.13986 4.75001 10.6203L6.25001 10.617C6.24647 8.96492 7.58269 7.62262 9.23481 7.61865L9.23121 6.11865ZM4.75001 10.6187V16.2437H6.25001V10.6187H4.75001ZM4.75001 16.242C4.7447 18.7224 6.75081 20.7377 9.23121 20.7437L9.23481 19.2437C7.58269 19.2397 6.24647 17.8974 6.25001 16.2453L4.75001 16.242ZM9.23301 20.7437H14.833V19.2437H9.23301V20.7437ZM14.8348 20.7437C17.3152 20.7377 19.3213 18.7224 19.316 16.242L17.816 16.2453C17.8195 17.8974 16.4833 19.2397 14.8312 19.2437L14.8348 20.7437ZM19.316 16.2437V12.4937H17.816V16.2437H19.316ZM14.4998 7.25684C14.6947 7.72897 15.0923 8.39815 15.6866 8.91521C16.2944 9.44412 17.1679 9.85718 18.2319 9.62197L17.9081 8.15733C17.4431 8.26012 17.0391 8.10369 16.6712 7.7836C16.2897 7.45165 16.0134 6.99233 15.8863 6.68446L14.4998 7.25684ZM8.30001 17.9317H15.767V16.4317H8.30001V17.9317Z"
                  fill="#ffffff"
                />
              </svg>
            </button>
          </Link>

          <button
            onClick={() => handleEventDelete(_id)}
            disabled={isDeleting}
            className={`inline-flex gap-1  items-center px-1.5 py-1  text-xl font-bold rounded-lg focus:ring-4 focus:outline-none inter text-[#3A0519] ${
              isDeleting
                ? "bg-gray-500  cursor-not-allowed"
                : "bg-[#4ED7F1] dark:bg-[#1A1A1D]  dark:text-[#FF6363] rounded-lg    hover:bg-[#78c1cf] dark:hover:bg-gray-700 inter "
            }`}
          >
            {isDeleting ? (
              <>
                Deleting...
                <svg
                  className="animate-spin w-5 h-5 ml-1 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </>
            ) : (
              <>
                Delete
                <svg
                  className="w-9 h-9 pb-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 11V17"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 11V17"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 7H20"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>
    </Zoom>
  );
};

export default MyEventsCard;
