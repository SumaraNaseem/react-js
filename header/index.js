import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <React.Fragment>
      <div className="flex justify-center  ">
        <div className=" max-w-full w-[1300px]">
          <div className="grid grid-cols-12 pt-3 space-x-7">
            <div className="col-span-3 flex  justify-between items-center">
              <Image
                className="px-2"
                src="/BETS Logo 1.png"
                alt="logo"
                width={100}
                height={100}
              />
              <div className="w-full">
                <h1 className="font-bold text-[16px]  text-[#003399]">
                  BETS Consulting Services Ltd.
                </h1>
                <h1 className="text-[16px] font-[275] text-[#003399]">
                  For a bertter solution
                </h1>
              </div>
            </div>
            <div className="col-span-8 flex justify-between items-center">
              <h1 className="  font-bold hover:text-blue-900 leading-[70px] rounded-sm hover:border-b-[3px] border-b-blue-900 ">
                Home
              </h1>
              <h1 className=" font-bold  hover:text-blue-900 leading-[70px] rounded-sm hover:border-b-[3px] border-b-blue-900">
                Projects{" "}
              </h1>
              <h1 className=" font-bold hover:text-blue-900 leading-[70px] rounded-sm hover:border-b-[3px] border-b-blue-900">
                Our Services
              </h1>
              <h1 className=" font-bold  hover:text-blue-900 leading-[70px] rounded-sm hover:border-b-[3px] border-b-blue-900">
                Job Opportunity
              </h1>
              <h1 className=" font-bold hover:text-blue-900 leading-[70px] rounded-sm hover:border-b-[3px] border-b-blue-900 ">
                {" "}
                News and insights
              </h1>
              <h1 className=" font-bold hover:text-blue-900 leading-[70px] rounded-sm hover:border-b-[3px] border-b-blue-900">
                Contact Us
              </h1>
            </div>
            <div className="col-span-1 flex justify-center mt-5">
              <form>
                <label
                  for="default-search"
                  class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 right-3 flex items-center pl-3 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-blue-700 dark:text-blue-700"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    class="block w-full p-1 pl-10 text-sm text-gray-900 border border-blue-700 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
              </form>
            </div>
          </div>{" "}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
