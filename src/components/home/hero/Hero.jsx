import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="image">
        <div className="text">
          <h1 className="font-heading text-[72px] text-faint mb-[70px]">
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
