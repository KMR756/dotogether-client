import React, { useState, useRef, useEffect, use } from "react";
import userImg from "../assets/user.png";
import DarkMoodBtn from "./DarkMoodBtn";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const Nav = () => {
  const { user, singOutUser } = use(AuthContext);
  // console.log(user);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const handleSingOut = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log Out!",
    }).then((result) => {
      if (result.isConfirmed) {
        singOutUser()
          .then(() => {
            Swal.fire({
              title: "Logged Out!",
              icon: "success",
            }).then(() => {
              // Redirect after user confirms the alert
              navigate("/login");
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-[#4ED7F1] dark:bg-[#1A1A1D] ">
      <div className="flex justify-between w-[95%] md:w-[90%] lg:w-10/12 mx-auto py-6">
        <div>
          <Link to={"/"} className="flex  flex-col">
            <span className="self-center flex caprasimo font-bold text-xs md:text-3xl lg:text-4xl xl:text-5xl text-[#3A0519] dark:text-[#FF6363]">
              DoTogether
            </span>
            <span className="flex justify-end caprasimo mt-0.5 md:mt-1 lg:mt-2 xl:mt-3 text-[7px] md:text-xl xl:text-2xl text-white">
              Together We Do.....
            </span>
          </Link>
        </div>

        <div className="flex items-center">
          <ul>
            <li>
              <Link to={"/upcomingevents"}>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-0 md:mb-2 me-2 overflow-hidden font-medium text-[#3A0519] dark:text-[#FBFBFB] rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 hover:text-white">
                  <span className="relative md:font-semibold inter text-[10px] md:text-xl lg:text-2xl xl:text-3xl px-1 md:px-2 lg:px-5 py-1 md:py-2 lg:py-2.5 transition-all ease-in duration-75 bg-[#FFDCDC] dark:bg-[#A2678A] rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Upcoming Events
                  </span>
                </button>
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-2 relative" ref={dropdownRef}>
          {user && (
            <>
              <button onClick={() => setDropdownOpen(!dropdownOpen)}>
                <img
                  src={user.photoURL || userImg}
                  className="w-7 md:w-13 h-7 md:h-13 mr-2 md:mr-4 rounded-full object-cover"
                  alt="User"
                />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 md:right-33 lg:right-29 top-8 md:top-16 lg:top-18 xl:top-20 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-30 md:w-40 dark:bg-gray-700">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <Link
                        to={"/createevent"}
                        className="block px-2 md:px-3 py-1 md:py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Create Event
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/manageevents/${user?.email}`}
                        className="block px-2 md:px-3 py-1 md:py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Manage Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/myjoinedevents"}
                        className="block px-2 md:px-3 py-1 md:py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Joined Events
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </>
          )}

          {user ? (
            <button
              onClick={handleSingOut}
              type="button"
              className="text-white font-semibold bg-gradient-to-r inter text-xs md:text-2xl from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br shadow-lg shadow-red-500/20 dark:shadow-lg dark:shadow-red-800/20 rounded-lg px-1 md:px-5 py-1 md:py-2.5 text-center"
            >
              Sing Out
            </button>
          ) : (
            <Link to={"/login"}>
              <button
                type="button"
                className="text-white font-semibold bg-gradient-to-r inter text-xs md:text-2xl from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br shadow-lg shadow-red-500/20 dark:shadow-lg dark:shadow-red-800/20 rounded-lg px-1 md:px-5 py-1 md:py-2.5 text-center"
              >
                Log In
              </button>
            </Link>
          )}

          <DarkMoodBtn />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
