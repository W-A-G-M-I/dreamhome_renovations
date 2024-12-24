import React from "react";
import "./services.css";

const Services = () => {
  return (
    <div className="w-[100%] h-[1255px] bg-[rgb(219,219,219)] flex flex-col justify-evenly items-center">
      <h2 class="font-heading w-fit text-[40px] text-[rgb(35,35,35)] ">
        Our Services Include
      </h2>

      <div class="w-[90%] h-[725px] flex justify-between gap-[35px]">
        <div class="flex justify-center items-center flex-auto w-auto h-[100%] imageWrap bg-[rgba(35,35,35,0.3)] bg-cover bg-top  bg-blend-multiply">
          <p class="font-heading text-[22px] text-[rgb(245,245,245)]">Kitchens</p>
        </div>

        <div class="flex justify-center items-center flex-auto w-auto h-[100%] imageWrap bg-[rgba(35,35,35,0.3)] bg-cover bg-top  bg-blend-multiply">
          <p class="font-heading text-[22px] text-[rgb(245,245,245)]">Bathrooms</p>
        </div>

        <div class="flex justify-center items-center flex-auto w-auto h-[100%] imageWrap bg-[rgba(35,35,35,0.3)] bg-cover bg-top  bg-blend-multiply">
          <p class="font-heading text-[22px] text-[rgb(245,245,245)]">Interiors</p>
        </div>
      </div>

      <button class="w-[160px] h-[40px] bg-[rgb(35,35,35)] text-[14px] text-[rgb(245,245,245)] hover:bg-[rgb(162,96,40)]">
        See All Services
      </button>
    </div>
  );
};

export default Services;
