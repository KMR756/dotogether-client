import React, { useState, useEffect, useRef, useContext } from "react";
import userImg from "../assets/user.png";
import DarkMoodBtn from "./DarkMoodBtn";
import {
  NavLink,
  useNavigate,
  useLocation,
  Link as RouterLink,
} from "react-router";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import Hamburger from "hamburger-react";
import { Link as ScrollLink } from "react-scroll";

const Nav = () => {
  const { user, singOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setOpen] = useState(false);

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
              navigate("/login");
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  const handleGalleryClick = () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToGallery: true } });
    }
  };

  return (
    <nav className="bg-[#4ED7F1] dark:bg-[#1A1A1D] sticky top-0 z-10">
      <div className="flex justify-between w-[95%] md:w-[90%] lg:w-10/12 mx-auto py-3">
        <div className="flex items-center">
          <div className="md:hidden">
            <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
          </div>

          <RouterLink to="/" className="flex flex-col">
            <span className="self-center flex caprasimo font-bold text-xs md:text-xl lg:text-2xl xl:text-3xl text-[#3A0519] dark:text-[#FF6363]">
              DoTogether
            </span>
            <span className="flex justify-end caprasimo text-[7px] md:text-xs text-white">
              Together We Do.....
            </span>
          </RouterLink>
        </div>

        {/* Desktop Menu */}
        <div className="md:flex gap-3 items-center hidden">
          <NavLink
            to="/upcomingevents"
            className={({ isActive }) =>
              `relative inline-flex items-center justify-center p-0.5 mb-0 md:mb-2 me-2 overflow-hidden font-medium rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 ${
                isActive
                  ? "text-white"
                  : "text-[#3A0519] hover:text-white dark:text-[#FBFBFB]"
              }`
            }
          >
            {({ isActive }) => (
              <span
                className={`relative md:font-semibold inter text-[10px] font-bold  px-1  py-1  transition-all ease-in duration-75 rounded-md ${
                  isActive
                    ? "bg-transparent group-hover:bg-transparent"
                    : "bg-[#FFDCDC] dark:bg-[#A2678A] group-hover:bg-transparent group-hover:dark:bg-transparent"
                }`}
              >
                Upcoming Events
              </span>
            )}
          </NavLink>

          {/* Show these only if user is logged in */}
          {user && (
            <>
              <NavLink
                to="/createevent"
                className={({ isActive }) =>
                  `relative inline-flex items-center justify-center p-0.5 mb-0 md:mb-2 me-2 overflow-hidden font-medium rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 ${
                    isActive
                      ? "text-white"
                      : "text-[#3A0519] hover:text-white dark:text-[#FBFBFB]"
                  }`
                }
              >
                {({ isActive }) => (
                  <span
                    className={`relative md:font-semibold inter text-[10px] font-bold  px-1  py-1   transition-all ease-in duration-75 rounded-md ${
                      isActive
                        ? "bg-transparent group-hover:bg-transparent"
                        : "bg-[#FFDCDC] dark:bg-[#A2678A] group-hover:bg-transparent group-hover:dark:bg-transparent"
                    }`}
                  >
                    Create Event
                  </span>
                )}
              </NavLink>

              <NavLink
                to={`/manageevents/${user.email}`}
                className={({ isActive }) =>
                  `relative inline-flex items-center justify-center p-0.5 mb-0 md:mb-2 me-2 overflow-hidden font-medium rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 ${
                    isActive
                      ? "text-white"
                      : "text-[#3A0519] hover:text-white dark:text-[#FBFBFB]"
                  }`
                }
              >
                {({ isActive }) => (
                  <span
                    className={`relative md:font-semibold inter text-[10px] font-bold  px-1  py-1   transition-all ease-in duration-75 rounded-md ${
                      isActive
                        ? "bg-transparent group-hover:bg-transparent"
                        : "bg-[#FFDCDC] dark:bg-[#A2678A] group-hover:bg-transparent group-hover:dark:bg-transparent"
                    }`}
                  >
                    Manage Events
                  </span>
                )}
              </NavLink>

              <NavLink
                to="/myjoinedevents"
                className={({ isActive }) =>
                  `relative inline-flex items-center justify-center p-0.5 mb-0 md:mb-2 me-2 overflow-hidden font-medium rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 ${
                    isActive
                      ? "text-white"
                      : "text-[#3A0519] hover:text-white dark:text-[#FBFBFB]"
                  }`
                }
              >
                {({ isActive }) => (
                  <span
                    className={`relative md:font-semibold inter text-[10px] font-bold  px-1  py-1   transition-all ease-in duration-75 rounded-md ${
                      isActive
                        ? "bg-transparent group-hover:bg-transparent"
                        : "bg-[#FFDCDC] dark:bg-[#A2678A] group-hover:bg-transparent group-hover:dark:bg-transparent"
                    }`}
                  >
                    Joined Events
                  </span>
                )}
              </NavLink>
            </>
          )}

          {location.pathname === "/" ? (
            <ScrollLink
              to="gallery-section"
              smooth={true}
              duration={600}
              offset={-80}
              className="relative inline-flex items-center justify-center p-0.5 mb-0 md:mb-2 me-2 overflow-hidden font-medium rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 text-[#3A0519] hover:text-white dark:text-[#FBFBFB] cursor-pointer"
            >
              <span className="relative md:font-semibold inter text-[10px] font-bold  px-1  py-1   transition-all ease-in duration-75 rounded-md bg-[#FFDCDC] dark:bg-[#A2678A] group-hover:bg-transparent group-hover:dark:bg-transparent">
                Gallery
              </span>
            </ScrollLink>
          ) : (
            <span
              onClick={handleGalleryClick}
              className="relative inline-flex items-center justify-center p-0.5 mb-0 md:mb-2 me-2 overflow-hidden font-medium rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 text-[#3A0519] hover:text-white dark:text-[#FBFBFB] cursor-pointer"
            >
              <span className="relative md:font-semibold inter text-[10px] font-bold  px-1  py-1   transition-all ease-in duration-75 rounded-md bg-[#FFDCDC] dark:bg-[#A2678A] group-hover:bg-transparent group-hover:dark:bg-transparent">
                Gallery
              </span>
            </span>
          )}

          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              `relative inline-flex items-center justify-center p-0.5 mb-0 md:mb-2 me-2 overflow-hidden font-medium rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 ${
                isActive
                  ? "text-white"
                  : "text-[#3A0519] hover:text-white dark:text-[#FBFBFB]"
              }`
            }
          >
            {({ isActive }) => (
              <span
                className={`relative md:font-semibold inter text-[10px] font-bold  px-1  py-1   transition-all ease-in duration-75 rounded-md ${
                  isActive
                    ? "bg-transparent group-hover:bg-transparent"
                    : "bg-[#FFDCDC] dark:bg-[#A2678A] group-hover:bg-transparent group-hover:dark:bg-transparent"
                }`}
              >
                About Us
              </span>
            )}
          </NavLink>

          <NavLink
            to="/contract"
            className={({ isActive }) =>
              `relative inline-flex items-center justify-center p-0.5 mb-0 md:mb-2 me-2 overflow-hidden font-medium rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 ${
                isActive
                  ? "text-white"
                  : "text-[#3A0519] hover:text-white dark:text-[#FBFBFB]"
              }`
            }
          >
            {({ isActive }) => (
              <span
                className={`relative md:font-semibold inter text-[10px] font-bold  px-1  py-1   transition-all ease-in duration-75 rounded-md ${
                  isActive
                    ? "bg-transparent group-hover:bg-transparent"
                    : "bg-[#FFDCDC] dark:bg-[#A2678A] group-hover:bg-transparent group-hover:dark:bg-transparent"
                }`}
              >
                Contact Us
              </span>
            )}
          </NavLink>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-18 left-3 w-[160px] bg-gray-600 shadow-lg flex flex-col items-start p-4 gap-3 z-50">
            <NavLink to="/upcomingevents">Upcoming Events</NavLink>

            {user && (
              <>
                <NavLink to="/createevent">Create Event</NavLink>
                <NavLink to={`/manageevents/${user.email}`}>
                  Manage Events
                </NavLink>
                <NavLink to="/myjoinedevents">Joined Events</NavLink>
              </>
            )}

            {location.pathname === "/" ? (
              <ScrollLink
                to="gallery-section"
                smooth={true}
                duration={600}
                offset={-80}
              >
                Gallery
              </ScrollLink>
            ) : (
              <span onClick={handleGalleryClick} className="cursor-pointer">
                Gallery
              </span>
            )}

            <NavLink to="/about-us">About Us</NavLink>
            <NavLink to="/contract">Contact Us</NavLink>
          </div>
        )}

        {/* User / Auth Section */}
        <div className="flex items-center space-x-2">
          {user ? (
            <>
              <img
                src={user.photoURL || userImg}
                className="w-7 md:w-13 h-7 md:h-13 mr-2 md:mr-4 rounded-full object-cover"
                alt="User"
              />
              <button
                onClick={handleSingOut}
                className="text-white font-semibold bg-gradient-to-r inter text-xs md:text-xl from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br rounded-lg px-1 md:px-3 py-1 md:py-2"
              >
                Sign Out
              </button>
            </>
          ) : (
            <RouterLink to="/login">
              <button className="text-white font-semibold bg-gradient-to-r inter text-xs md:text-xl from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br rounded-lg mb-2 px-1 md:px-3 py-1 md:py-2">
                Log In
              </button>
            </RouterLink>
          )}

          <DarkMoodBtn />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
