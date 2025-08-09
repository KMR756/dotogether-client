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
          className="w-5 md:w-8 h-5 md:h-8 ml-0 md:ml-4 mb-2"
        />
      ) : (
        <img
          src={moon}
          alt=""
          className="w-5 md:w-8 h-5 md:h-8 ml-0 md:ml-4 mb-0 "
        />
      )}
    </button>
  );
};

export default DarkMoodBtn;
