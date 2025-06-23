import React from "react";

const NewsLatter = () => {
  return (
    <div class="mx-auto mt-10 w-[97%] md:w-10/12 lg:w-9/12 px-3 sm:mt-10 lg:px-8">
      <div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24  rounded-2xl sm:rounded-3xl sm:px-24 xl:py-32">
        <h2 class="inter  mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-[#FF6363] dark:text-white  sm:text-4xl">
          Stay Connected to Change!
        </h2>

        <p class="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
          Get notified about upcoming social events in your area.
        </p>

        <form class="mx-auto mt-10 flex max-w-md gap-x-4">
          <label for="email-address" class="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autocomplete="email"
            required=""
            class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
            placeholder="Enter your email"
          ></input>

          <div class="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100   focus-visible:outline-offset-2 focus-visible:outline-white">
            Notify me
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsLatter;
