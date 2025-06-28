import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const EventDetails = () => {
  const event = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    eventType,
    description,
    date,
    location,
    organizer,
    photoURL,
    title,
    _id,
    name,
    email,
  } = event.data;

  const handleJointEvent = () => {
    if (!user || !user.email) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please login to join events",
        confirmButtonText: "Go to Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
      return;
    }

    const eventJointUser = {
      eventId: _id,
      userEmail: user.email,
      title,
      date,
      location,
      photoURL,
      joinedAt: new Date().toISOString(),
    };

    axios
      .post(`${import.meta.env.VITE_API_URL}/joined-event`, eventJointUser)
      .then((res) => {
        if (res.data.message === "already_joined") {
          Swal.fire({
            icon: "info",
            title: "Already Joined",
            text: `You've already joined "${title}"`,
          });
          return;
        }

        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Successfully joined "${title}"`,
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myjoinedevents");
        }
      })
      .catch((error) => {
        console.error("Join error:", error);
        Swal.fire({
          icon: "error",
          title: "Join Failed",
          text: error.response?.data?.message || "Please try again later",
        });
      });
  };

  return (
    <div className="my-10 md:my-20 w-11/12 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="p-5 lg:p-8 flex flex-col items-center w-full md:w-2/5">
          <img
            className="object-cover w-full h-64 md:h-80 rounded-xl"
            src={photoURL}
            alt={title}
          />
          <button
            onClick={handleJointEvent}
            className="mt-8 w-full py-3 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:from-red-300 hover:to-yellow-300 text-gray-900 font-bold rounded-lg text-lg transition-all duration-300"
          >
            Join Event
          </button>
        </div>

        <div className="p-5 lg:p-8 w-full md:w-3/5">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {title}
          </h1>

          <p className="mb-6 text-gray-700 dark:text-gray-300 text-lg">
            {description}
          </p>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DetailItem label="Event Type" value={eventType} />
              <DetailItem label="Location" value={location} />
              <DetailItem label="Organizer" value={organizer} />
              <DetailItem label="Event Date" value={date} />
              <DetailItem label="Created By" value={`${name} (${email})`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for detail items
const DetailItem = ({ label, value }) => (
  <div className="mb-3">
    <h3 className="font-semibold text-gray-600 dark:text-gray-400 text-sm">
      {label}
    </h3>
    <p className="text-gray-900 dark:text-white text-lg">{value}</p>
  </div>
);

export default EventDetails;
