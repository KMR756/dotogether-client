import Lottie from "lottie-react";
import loading from "../assets/loading.json";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full flex h-screen justify-center items-center">
      <Lottie animationData={loading} className="w-1/6" />
    </div>
  );
};

export default Loading;
