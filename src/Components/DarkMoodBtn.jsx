import React from "react";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import { useDarkMood } from "../context/ThemeContext";
const DarkMoodBtn = () => {
  const { darkMood, setDarkMood } = useDarkMood();
  return (
    <button onClick={() => setDarkMood(!darkMood)}>
      {darkMood ? (
        <img
          src={sun}
          alt=""
          className="w-5 md:w-12 h-5 md:h-12 ml-0 md:ml-4 mb-0 xl:mb-2"
        />
      ) : (
        <img
          src={moon}
          alt=""
          className="w-5 md:w-12 h-5 md:h-12 ml-0 md:ml-4 mb-0 xl:mb-2"
        />
      )}
    </button>
  );
};

export default DarkMoodBtn;
