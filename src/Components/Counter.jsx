import React from "react";
import CountUp from "react-countup";
const Counter = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mb-20  mx-auto w-9/12   ">
        <div className="bg-white dark:bg-gray-300 p-10 flex flex-col items-center md:items-start rounded-2xl w-[70%] md:w-[80%] lg:w-full mx-auto">
          <img src="" alt="" />

          <h1 className="inter text-6xl lg:text-5xl xl:text-6xl mt-4 text-[#FF6363] font-semibold ">
            <CountUp start={0} end={560} duration={6} delay={0.1} />+
          </h1>
          <p className="inter text-2xl text-[#0F0F0F] font-bold mt-3">
            Total Members
          </p>
        </div>
        <div className="bg-white dark:bg-gray-300 p-10 flex flex-col items-center md:items-start rounded-2xl w-[70%] md:w-[80%] lg:w-full mx-auto">
          <img src="" alt="" />
          <h1 className="inter text-6xl lg:text-5xl xl:text-6xl mt-4 text-[#FF6363] font-semibold ">
            <CountUp start={0} end={340} duration={6} delay={0.1} />+
          </h1>
          <p className="inter text-2xl text-[#0F0F0F] font-bold mt-3">
            Completed Events
          </p>
        </div>
        <div className="bg-white dark:bg-gray-300 flex flex-col items-center md:items-start p-10 rounded-2xl w-[70%] md:w-[80%] lg:w-full mx-auto">
          <img src="" alt="" />
          <h1 className="inter text-6xl lg:text-5xl  xl:text-6xl mt-4 text-[#FF6363] font-semibold ">
            <CountUp start={0} end={246} duration={6} delay={0.1} />+
          </h1>
          <p className="inter text-2xl text-[#0F0F0F] font-bold mt-3">
            Total sponsored
          </p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
