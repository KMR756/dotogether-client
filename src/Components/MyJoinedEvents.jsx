import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { Fade } from "react-awesome-reveal";
import { FaCalendarAlt, FaMapMarkerAlt, FaUserClock } from "react-icons/fa";
import moment from "moment";

const MyJoinedEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.email) {
      navigate("/login");
      return;
    }

    const fetchJoinedEvents = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:3000/joined-events?email=${user.email}`
        );
        setEvents(response.data);
      } catch (error) {
        console.error("Failed to fetch joined events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJoinedEvents();
  }, [user, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className=" py-8 px-4 sm:px-6 lg:px-8">
      <Fade direction="up" duration={2000} triggerOnce>
        <h1 className="w-10/12 mx-auto mb-10 text-center text-4xl md:text-7xl dark:text-white text-[#FF6363] inter font-black mt-10 md:mt-20">
          My joined events
        </h1>
      </Fade>
      <Fade direction="up" duration={500} triggerOnce>
        <div className="max-w-7xl mx-auto">
          {events.length === 0 ? (
            <div className="text-center py-4 lg:py-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="mx-auto h-24 w-24 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50">
                <FaUserClock className="h-12 w-12 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900 dark:text-white">
                No joined events yet
              </h3>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th
                        scope="col"
                        className="w-2/5 px-1 lg:px-6 py-1 lg:py-4 text-left text-[8px] lg:text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                      >
                        Event Title
                      </th>
                      <th
                        scope="col"
                        className="w-1/5 px-1 lg:px-6 py-1 lg:py-4 text-left text-[8px] lg:text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                      >
                        <div className="flex items-center">Event Date</div>
                      </th>
                      <th
                        scope="col"
                        className="w-1/5 px-1 lg:px-6 py-1 lg:py-4 text-left text-[8px] lg:text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                      >
                        <div className="flex items-center">Join Date</div>
                      </th>
                      <th
                        scope="col"
                        className="w-1/5 px-1 lg:px-6 py-1 lg:py-4 text-left text-[8px] lg:text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                      >
                        <div className="flex items-center">Location</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {events.map((event) => (
                      <tr
                        key={event._id}
                        className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                      >
                        <td className="w-2/5 px-6 py-4">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-5 lg:h-12 w-5 lg:w-12">
                              <img
                                className="h-5 lg:h-12 w-5 lg:w-12 rounded-lg object-cover"
                                src={event.photoURL}
                                alt={event.title}
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-[5px] lg:text-sm font-medium text-gray-900 dark:text-white">
                                {event.title}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="w-1/5 px-1 lg:px-6 py-1 lg:py-4">
                          <div className="text-[8px] lg:text-sm text-gray-900 dark:text-white">
                            {moment(event.date).format("MMM D, YYYY")}
                          </div>
                        </td>
                        <td className="w-1/5 px-1 lg:px-6 py-1 lg:py-4">
                          <div className="text-[8px] lg:text-sm text-gray-900 dark:text-white">
                            {moment(event.joinedAt).format("MMM D, YYYY")}
                          </div>
                        </td>
                        <td className="w-1/5 px-1 lg:px-6 py-1 lg:py-4 text-[5px] lg:text-sm text-gray-900 dark:text-white">
                          {event.location}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </Fade>
    </div>
  );
};

export default MyJoinedEvents;
