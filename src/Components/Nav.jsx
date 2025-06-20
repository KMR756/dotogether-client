import React from "react";
import userImg from "../assets/user.png";
import DarkMoodBtn from "./DarkMoodBtn";

const Nav = () => {
  return (
    <>
      <nav className="bg-[#4ED7F1] dark:bg-[#1A1A1D] ">
        <div className="flex justify-between w-10/12 mx-auto py-6">
          <div className="">
            <a href="#" className="flex  flex-col">
              <span className="self-center flex  caprasimo font-bold text-5xl  text-[#3A0519] dark:text-[#FF6363]">
                DoTogether
              </span>
              <span className="flex justify-end caprasimo mt-3 text-2xl text-white">
                Together We Do.....
              </span>
            </a>
          </div>
          <div className=" flex items-center text-3xl ">
            <ul className=" ">
              <li>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2  me-2 overflow-hidden  font-medium text-[#3A0519] dark:text-[#FBFBFB] rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white  ">
                  <span className="relative font-semibold inter text-3xl px-5 py-2.5 transition-all ease-in duration-75 bg-[#FFDCDC] dark:bg-[#A2678A] rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Upcoming Events
                  </span>
                </button>
              </li>
            </ul>
          </div>
          <div className="flex items-center  ">
            <button>
              <img src={userImg} className="w-13 h-13 mr-4" alt="" />
            </button>
            <button
              type="button"
              className="text-white font-semibold bg-gradient-to-r inter text-2xl from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br  shadow-lg shadow-red-500/20 dark:shadow-lg dark:shadow-red-800/20 rounded-lg  px-5 py-2.5 text-center me-2 mb-2"
            >
              Log In
            </button>
            <DarkMoodBtn />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
