import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const CreateEvent = () => {
  const navigate = useNavigate();
  const { user } = use(AuthContext);
  // console.log(user);
  const handleCreateEvent = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const eventData = Object.fromEntries(formData.entries());
    console.log(eventData);

    axios
      .post(`${import.meta.env.VITE_API_URL}/add-event`, eventData)
      .then((data) => {
        console.log(data.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${eventData.title} is created successfully..`,
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/manageevents");
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(data);
    // fetch(`${import.meta.env.VITE_API_URL}/add-event`, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  };
  return (
    <>
      <div class="lg:w-10/12 w-[96%] xl:w-7/12 mx-auto mt-10 bg-white dark:bg-gray-500 shadow-lg rounded-lg overflow-hidden">
        <div class="text-2xl bg-[#4ED7F1] dark:bg-[#1A1A1D] text-[#3A0519] dark:text-[#FF6363] py-4 px-6   text-center font-bold uppercase">
          Create your event
        </div>
        <form onSubmit={handleCreateEvent} class="py-4 px-6">
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="name">
              Name
            </label>
            <input
              name="name"
              class="shadow appearance-none border rounded w-full bg-gray-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              defaultValue={user.displayName}
              readOnly
            ></input>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="email">
              Email
            </label>
            <input
              name="email"
              class="shadow appearance-none border rounded w-full bg-gray-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              defaultValue={user.email}
              readOnly
            ></input>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="phone">
              PhotoURL
            </label>
            <input
              name="photoURL"
              class="shadow appearance-none border rounded w-full bg-gray-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="photo"
              placeholder="Enter your photo url"
              required
            ></input>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="phone">
              Title
            </label>
            <input
              name="title"
              class="shadow appearance-none border rounded w-full bg-gray-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter your event title"
              required
            ></input>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="message">
              Description
            </label>
            <textarea
              name="description"
              class="shadow bg-gray-200  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="4"
              placeholder="Enter your event description"
              required
            ></textarea>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="service">
              Event Type
            </label>
            <select
              class="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="service"
              name="eventType"
              required
            >
              <option value="Tree Plantation">Tree Plantation</option>
              <option value="Road/Beach Cleaning">Road/Beach Cleaning</option>
              <option value="Park Beautification">Park Beautification</option>
              <option value="Recycling Drives">Recycling Drives</option>
              <option value="Waterway Cleanup">Waterway Cleanup</option>
              <option value="Food Distribution">Food Distribution</option>
              <option value="Blood Donation Camp">Blood Donation Camp</option>
              <option value="Clothing Drive">Clothing Drive</option>
              <option value="Free Medical Checkup">Free Medical Checkup</option>
              <option value="Shelter Support Programs">
                Shelter Support Programs
              </option>
            </select>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="phone">
              Organizer
            </label>
            <input
              name="organizer"
              class="shadow appearance-none border rounded w-full bg-gray-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              placeholder="Enter your event organizer"
              required
            ></input>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="phone">
              Location
            </label>
            <input
              name="location"
              class="shadow appearance-none border rounded w-full bg-gray-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              placeholder="Enter your event location"
              required
            ></input>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="date">
              Date
            </label>
            <input
              name="date"
              class="inter shadow appearance-none border rounded w-full py-2 bg-gray-200 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              placeholder="Select a date"
              required
            ></input>
          </div>

          <div class="flex items-center justify-center mb-4">
            <button
              class="inter font-bold bg-[#4ED7F1] dark:bg-[#1A1A1D] text-[#3A0519] dark:text-[#FF6363] py-2 px-4 rounded hover:bg-[#78c1cf] focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateEvent;
