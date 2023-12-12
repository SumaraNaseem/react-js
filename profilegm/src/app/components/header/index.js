import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-12">
        <div className="col-span-8 bg-white">
          <div className="flex">
            <div className="bg-[#4CB2E1]   w-24 h-24 rounded-br-2xl flex justify-center items-center mr-32">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-12 h-12 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                />
              </svg>
            </div>
            <div className="bg-white flex justify-center  ">
              <div className="flex font-bold text-2xl opacity-2 justify-between cursor-pointer w-[550px] text-center items-center font-[recoleta] ">
                <div className="relative ">
                  <p className=" menu-effect transform menu-effect w-8 h-8 -z-9  rounded-lg bg-[#4CB2E1]   text-[#4CB2E1] -rotate-12 group-hover:-rotate-12  absolute top-2 -left-5">
                    .
                  </p>
                  <p className=" menu-item text-dark-lighter group-hover:text-dark-color">
                    Home
                  </p>
                </div>
                <div className="relative ">
                  <span className=" menu-effect w-8 h-8 rounded-lg bg-[#4CB2E1] transform  text-[#4CB2E1] -rotate-12 group-hover:-rotate-12  absolute top-2 -left-5">
                    .
                  </span>
                  <p className="menu-item  text-dark-color  group-hover:text-dark-color">
                    Word
                  </p>
                </div>
                <div className="relative ">
                  <span className=" menu-effect w-8 h-8 rounded-lg bg-[#4CB2E1] transform  text-[#4CB2E1] -rotate-12 group-hover:-rotate-12  absolute top-2 -left-5">
                    .
                  </span>
                  <p className="menu-item  text-dark-color  group-hover:text-dark-color">
                    About Me
                  </p>
                </div>
                <div className="relative ">
                  <span className=" menu-effect w-8 h-8 rounded-lg bg-[#4CB2E1] transform  text-[#4CB2E1] -rotate-12 group-hover:-rotate-12  absolute top-2 -left-5">
                    .
                  </span>
                  <p className="menu-item  text-dark-color  group-hover:text-dark-color">
                    Hire Me
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4  bg-[#4CB2E1] text-[#4CB2E1]">
          .
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-8 mt-[165px]">
          <div className="px-32 ">
            <div className="">
              <h1 className="text-[#48C1ED] text-accent-color font-hind text-xl md:text-base lg:text-xl">
                Hello !
              </h1>
              <h2 className="text-dark-color font-recoletaBlack text-7xl md:text-6xl lg:text-7xl xl:text-8xl mt-5 md:mt-3">
                I'm IMAN
              </h2>
              <h2 className="text-dark-color font-hind font-bold uppercase text-md md:text-xs lg:text-xl">
              FULL-STACK WEB DEVELOPER & DESIGNER
              </h2>
            </div>
          </div>
        
        </div>
        <div className="col-span-4 bg-[#4CB2E1] h-[100vh]">
          <img src="/images.png" alt="image" width={700} height={700} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
