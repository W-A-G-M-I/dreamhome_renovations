import React from "react";
import "./services.css";

const Services = () => {
  return (
    <div className="w-[100%] xl:h-[1255px] lg:h-[1255px] md:h-[955px] sm:h-[970px ] mobile:h-[970px] bg-[rgb(219,219,219)] flex flex-col justify-evenly items-center">
      <h2 class="font-heading w-fit xl:text-[40px] lg:text-[40px] md:text-[36px] sm:text-[24px] mobile:text-[24px] text-[rgb(35,35,35)]">
        Our Services Include
      </h2>

      <div class="xl:w-[90%] lg:w-[90%] md:w-full sm:w-full mobile:w-full xl:h-[725px] lg:h-[725px] md:h-[580px] sm:h-[720px] mobile:h-[720px] flex xl:flex-row lg:flex-row md:flex-row sm:flex-row mobile:flex-col justify-between xl:gap-[35px] lg:gap-[25px] md:gap-[10px] sm:gap-0 mobile:gap-0 ">
        <div class="flex justify-center items-center flex-auto w-auto h-[100%] imageWrap bg-[rgba(35,35,35,0.3)] bg-cover bg-top  bg-blend-multiply">
          <p class="font-heading xl:text-[22px] lg:text-[22px] text-[rgb(245,245,245)] md:text-[20px] sm:text-[20px] mobile:text-[18px] ">Kitchens</p>
        </div>

        <div class="flex justify-center items-center flex-auto w-auto h-[100%] imageWrap bg-[rgba(35,35,35,0.3)] bg-cover bg-top  bg-blend-multiply">
          <p class="font-heading xl:text-[22px] lg:text-[22px] text-[rgb(245,245,245)] md:text-[20px] sm:text-[20px] mobile:text-[18px] ">Bathrooms</p>
        </div>

        <div class="flex justify-center items-center flex-auto w-auto h-[100%] imageWrap bg-[rgba(35,35,35,0.3)] bg-cover bg-top  bg-blend-multiply">
          <p class="font-heading xl:text-[22px] lg:text-[22px] text-[rgb(245,245,245)] md:text-[20px] sm:text-[20px] mobile:text-[18px] ">Interiors</p>
        </div>
      </div>

      <button class="xl:w-[160px] lg:w-[160px] md:w-[160px] sm:w-[140px] mobile:w-[140px] h-[40px] bg-[rgb(35,35,35)] text-[14px] text-[rgb(245,245,245)] hover:bg-[rgb(162,96,40)]">
        See All Services
      </button>
    </div>
  );
};

export default Services;
