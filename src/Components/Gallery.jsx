import React from "react";
import vitorMonthay from "../assets/vitor-monthay.jpg";
import ismaelParamo from "../assets/ismael-paramo.jpg";
import rizalHilman from "../assets/rizal-hilman.jpg";
import ashishBhanderi from "../assets/ashish-bhanderi.jpg";
const Gallery = () => {
  return (
    <>
      <div className="   py-3 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
              <h2 className="text-4xl md:text-7xl dark:text-white text-[#FF6363] inter font-black ">
                Gallery
              </h2>

              <p className="text-base inter text-slate-600 dark:text-white mt-4 font-light">
                Our gallery showcases the inspiring moments captured during
                various community events across the country. From tree
                plantations and road cleanups to health camps and donation
                drives, each photograph tells a story of unity and social
                responsibility. These glimpses of action reflect the heart of
                our mission—to bring people together for meaningful change.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            {/* <!-- image - start --> */}
            <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
              <img
                src={vitorMonthay}
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Tree Plantation in Hossainpur
              </span>
            </div>
            {/* <!-- image - end --> */}

            {/* <!-- image - start --> */}
            <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
              <img
                src={ismaelParamo}
                loading="lazy"
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Food Distribution in Chittagong
              </span>
            </div>
            {/* <!-- image - end --> */}

            {/* <!-- image - start --> */}
            <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
              <img
                src={ashishBhanderi}
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Free Medical Camp in Barisal
              </span>
            </div>
            {/* <!-- image - end --> */}

            {/* <!-- image - start --> */}
            <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
              <img
                src={rizalHilman}
                loading="lazy"
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Clean Water Campaign in Sylhet
              </span>
            </div>
            {/* <!-- image - end --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
