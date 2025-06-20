import React from "react";
import error from "../assets/error.jpg";
import { Link } from "react-router";
const Error = () => {
  return (
    <div className="w-1/3 mx-auto py-20">
      <img src={error} alt="" />
      <Link to={"/"}>
        <div className="flex justify-center mt-20">
          <button className="relative  flex items-center justify-center p-0.5 mb-2   me-2 overflow-hidden  font-medium text-[#3A0519] dark:text-[#FBFBFB] rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white  ">
            <span className="relative font-semibold inter text-3xl px-5 py-2.5 transition-all ease-in duration-75 bg-[#FFDCDC] dark:bg-[#A2678A] rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Go Home :(
            </span>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Error;
