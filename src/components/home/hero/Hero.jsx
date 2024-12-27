import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="image">
        <div className="text">
          <h1 className="font-heading xl:text-[72px] lg:text-[62px] md:text-[62px] mobile:text-[28px] mobile:text-center text-faint xl:mb-[70px] lg:mb-[70px] md:mb-[70px] sm:mb-[10px] mobile:mb-[10px]">
            Exceptional Home Remodeling & Renovations
          </h1>

          <a href="#" target="_blank" className="text-sm text-charcoal">
            Get A Free Estimate
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
