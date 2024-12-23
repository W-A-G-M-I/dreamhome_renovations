import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="image">
        <div className="text">
          <h1 class="semiBold text-[72px] text-[rgb(245,245,245)] mb-[70px]">
            Exceptional Home Remodeling & Renovations
          </h1>
          <a href="#" target="_blank">
            <span class="extraLight text-[14px] text-[rgb(30,30,30)]">
              Get A Free Estimate
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
