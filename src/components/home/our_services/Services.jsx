import React from "react";
import "./services.css";

const Services = () => {
  return (
    <div className="h-[1255px] bg-[rgb(219,219,219)] flex flex-col justify-evenly items-center">
      <h2 className="font-heading text-2xl md:text-[40px] text-charcoal">
        Our Services Include
      </h2>

      <div className="w-full md:padded h-[725px] flex-apart flex-col md:gap-[35px] md:flex-row">
        <div className="flex-center flex-auto w-full h-[100%] imageWrap bg-[rgba(35,35,35,0.3)] bg-cover bg-top  bg-blend-multiply">
          <p className="font-heading text-[22px] text-[rgb(245,245,245)]">Kitchens</p>
        </div>

        <div className="flex-center flex-auto w-full h-[100%] imageWrap bg-[rgba(35,35,35,0.3)] bg-cover bg-top  bg-blend-multiply">
          <p className="font-heading text-[22px] text-[rgb(245,245,245)]">Bathrooms</p>
        </div>

        <div className="flex-center flex-auto w-full h-[100%] imageWrap bg-[rgba(35,35,35,0.3)] bg-cover bg-top  bg-blend-multiply">
          <p className="font-heading text-[22px] text-[rgb(245,245,245)]">Interiors</p>
        </div>
      </div>

      <button className="w-[160px] h-[40px] bg-[rgb(35,35,35)] text-[14px] text-[rgb(245,245,245)] hover:bg-[rgb(162,96,40)]">
        See All Services
      </button>
    </div>
  );
};

export default Services;
