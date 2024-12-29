import React from "react";
import "./hero.css";
import { Btn } from "../../_common";

const Hero = () => {
  return (
    <div className="px-0 hero md:px-28">
      <div className="px-4 image">
        <div className="flex-col text flex-center md:px-14">
          <h1 className="font-heading text-3xl lg:text-[72px] text-faint text-center lg:text-left lg:self-start max-w-[659px] leading-normal mb-10">
            Innovative Renovations, Beautiful Results
          </h1>

          <Btn
            text="Get A Free Estimate"
            variant="tea"
            containerStyle="text-sm px-4 py-2 lg:self-start"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
