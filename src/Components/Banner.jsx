import React from "react";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";
import banner from "../assets/cover.jpg";
import motion1 from "../assets/motion1.jpg";
import motion2 from "../assets/motion2.jpg";

const Banner = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[500px]">
      <img
        src={banner}
        alt="Banner"
        className="w-full h-full object-cover opacity-70"
      />

      <div className="inter absolute inset-0 flex flex-col items-start ml-4 md:ml-16 xl:ml-20 mb-40 justify-center   text-white">
        <h1 className="text-3xl  md:text-5xl font-bold mb-3">
          Welcome to <span className="text-[#FF6363]">DoTogether...</span>
        </h1>
        <span className="inter text-xl md:text-2xl font-medium">
          <Typewriter
            words={[
              "Join. Act. Inspire.",
              "Events that matter.",
              "Together for change.",
              "Build your community.",
              "Be the difference.",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </span>
      </div>
      <div className="absolute inset-0 flex  items-end gap-3 md:gap-10 justify-end ">
        <motion.img
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          src={motion1}
          alt=""
          className="w-[30%] md:w-[30%] lg:w-[20%] mb-22 md:mb-30 lg:mb-45 rounded-t-xl md:rounded-t-2xl lg:rounded-t-4xl border-b-2 md:border-b-4 lg:border-b-7 border-l-2 md:border-l-4 lg:border-l-7"
        />
        <motion.img
          animate={{ x: [0, -50, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          src={motion2}
          alt=""
          className="w-[30%] md:w-[30%] lg:w-[20%] mr-7 md:mr-20 mb-8 md:mb-17 lg:mb-20 rounded-t-xl md:rounded-t-2xl lg:rounded-t-4xl border-b-2 md:border-b-4 lg:border-b-7 border-l-2 md:border-l-4 lg:border-l-7"
        />
      </div>
      <motion.h1
        animate={{
          color: [
            "#E67514",
            "#06923E",
            "#FFF287",
            "#3674B5",
            "#511D43",
            "#901E3E",
          ],
          transition: { duration: 4, repeat: Infinity },
        }}
        className="absolute text-xl md:text-4xl lg:text-6xl font-bold mr-12 md:mr-70 mb-2 md:mb-3.5 inset-0 flex  items-end  justify-end"
      >
        OUR ACTIVITIES
      </motion.h1>
    </div>
  );
};

export default Banner;
