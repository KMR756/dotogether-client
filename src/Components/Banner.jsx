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
        <h1 className="text-3xl  md:text-5xl font-bold mb-3 ml-8">
          Welcome to{" "}
          <span className="text-black dark:text-[#FF6363]">DoTogether...</span>
        </h1>
        <span className="inter text-xl md:text-2xl font-medium ml-13">
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
      <div className="absolute inset-0 flex items-end gap-3 md:gap-10 justify-end">
        <motion.img
          animate={{
            y: [0, 40, 0],
            rotate: [0, 2, -2, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          src={motion1}
          alt=""
          className="w-[30%] md:w-[30%] lg:w-[20%] mb-22 md:mb-30 lg:mb-45 rounded-t-xl md:rounded-t-2xl lg:rounded-t-4xl border-b-2 md:border-b-4 lg:border-b-7 border-l-2 md:border-l-4 lg:border-l-7"
        />

        <motion.img
          animate={{
            x: [0, -40, 0],
            y: [0, -10, 0],
            rotate: [0, -3, 3, 0],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 6,
            ease: [0.45, 0, 0.55, 1], // custom cubic-bezier for smoothness
            repeat: Infinity,
            repeatType: "mirror",
            delay: 1, // so it doesn't move exactly with the first one
          }}
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
          textShadow: [
            "0px 0px 4px rgba(0,0,0,0.3)",
            "0px 0px 12px rgba(255,255,255,0.7)",
            "0px 0px 4px rgba(0,0,0,0.3)",
          ],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute text-xl md:text-4xl lg:text-6xl font-bold mr-12 md:mr-70 mb-2 md:mb-3.5 inset-0 flex items-end justify-end"
      >
        OUR ACTIVITIES
      </motion.h1>
    </div>
  );
};

export default Banner;
