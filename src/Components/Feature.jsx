import React from "react";
import Lottie from "lottie-react";
import { Fade } from "react-awesome-reveal";
import CommunityImpact from "../assets/lotties/Create&ManageEvents.json";
import JoinLocalInitiatives from "../assets/lotties/JoinLocalInitiatives.json";
import ManageEvents from "../assets/lotties/ManageEvents.json";
import VolunteerTracking from "../assets/lotties/VolunteerTracking.json";
const Feature = () => {
  return (
    <>
      <div>
        <Fade direction="up" duration={2000} triggerOnce>
          <h1 className="w-10/12 mx-auto text-center text-7xl dark:text-white text-[#FF6363] inter font-black mt-20">
            Features
          </h1>
        </Fade>
      </div>
      <div className="grid grid-cols-4 w-10/12 mx-auto gap-10">
        <div class="flex flex-col bg-white dark:bg-gray-300 shadow-sm border border-slate-200 rounded-lg my-6 ">
          <div class="w-[100%]  mx-auto  rounded-xl overflow-hidden dark:bg-[#A2678A]">
            <Lottie
              animationData={CommunityImpact}
              loop
              autoplay
              className="w-full   object-cover"
            />
          </div>
          <div class="p-6 text-center">
            <h4 class="mb-1 inter text-xl font-bold text-slate-800 dark:text-[#FF6363]">
              Create & Manage Events
            </h4>

            <p class="text-base inter text-slate-600 dark:text-black mt-4 font-light ">
              Let users easily create social service events with date, location,
              and type.
            </p>
          </div>
        </div>
        <div class="flex flex-col bg-white dark:bg-gray-300 shadow-sm border border-slate-200 rounded-lg my-6 ">
          <div class="w-[100%]  mx-auto  rounded-xl overflow-hidden dark:bg-[#A2678A]">
            <Lottie
              animationData={JoinLocalInitiatives}
              loop
              autoplay
              className="w-full py-6 object-cover"
            />
          </div>
          <div class="p-6 text-center">
            <h4 class="mb-1 inter text-xl font-bold text-slate-800 dark:text-[#FF6363]">
              Join Local Initiatives
            </h4>

            <p class="text-base inter text-slate-600 dark:text-black mt-4 font-light ">
              Users can discover and join events happening near them.
            </p>
          </div>
        </div>
        <div class="flex flex-col bg-white dark:bg-gray-300 shadow-sm border border-slate-200 rounded-lg my-6 ">
          <div class="w-[100%]  mx-auto  rounded-xl overflow-hidden dark:bg-[#A2678A]">
            <Lottie
              animationData={ManageEvents}
              loop
              autoplay
              className="w-full  object-cover"
            />
          </div>
          <div class="p-6 text-center">
            <h4 class="mb-1 inter text-xl font-bold text-slate-800 dark:text-[#FF6363]">
              Volunteer Tracking
            </h4>

            <p class="text-base inter text-slate-600 dark:text-black mt-4 font-light ">
              Users can track how many hours they’ve volunteered.
            </p>
          </div>
        </div>
        <div class="flex flex-col bg-white dark:bg-gray-300 shadow-sm border border-slate-200 rounded-lg my-6 ">
          <div class="w-[100%]  mx-auto  rounded-xl overflow-hidden dark:bg-[#A2678A]">
            <Lottie
              animationData={VolunteerTracking}
              loop
              autoplay
              className="w-full  object-cover"
            />
          </div>
          <div class="p-6 text-center">
            <h4 class="mb-1 inter font-bold text-xl  text-slate-800 dark:text-[#FF6363]">
              Community Impact
            </h4>

            <p class="text-base inter text-slate-600 dark:text-black mt-4 font-light ">
              See stats on total trees planted, areas cleaned, or people
              involved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
