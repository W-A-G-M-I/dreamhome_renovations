import React from "react";
import "./emphasis.css";

const Emphasis = () => {
  return (
    <div className="w-[100%] xl:h-[680px] lg:h-[680px] md:h-[680px] sm:h-[635px] mobile:h-[635px] bg-faint">
      <div className=" xl:w-[90%] lg:w-[90%] md:w-[100%] sm:w-full mobile:w-full xl:mx-auto lg:mx-auto md:-m-0 my-[0] h-[inherit] flex xl:flex-row lg:flex-row md:flex-row sm:flex-col-reverse  mobile:flex-col-reverse">
        <div className="image xl:h-[inherit] lg:h-[inherit] md:h-[inherit] sm:h-[300px] mobile:h-[300px] xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-full mobile:w-full bg-[rgba(143,143,143,0.6)] bg-cover bg-top xl:bg-fixed lg:bg-fixed md:bg-fixed sm:bg-scroll mobile:bg-scroll bg-blend-multiply" />

        <div className="xl:h-[inherit] lg:h-[inherit] md:h-[inherit] sm:h-[338px] mobile:h-[338px] xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-full mobile:w-full flex justify-center items-center">
          <article className="xl:w-[75%] lg:w-[75%] md:w-[75%] sm:w-[85%] mobile:w-[85%] xl:h-[310px] lg:h-[400px] md:h-[400px] sm:h-[245px] mobile:h-[245px] flex flex-col justify-between xl:items-start lg:items-start md:items-start sm:items-center mobile:items-center">
            <h2 className="font-heading xl:text-[40px] lg:text-[40px] md:text-[36px] sm:text-[24px] mobile:text-[24px] text-charcoal">
              The Leading Bay Area Remodeling Company
            </h2>
            <p className="xl:text-[15px] lg:text-[15px] md:text-[14px] sm:text-[14px] mobile:text-[14px] text-charcoal xl:text-left lg:text-left md:text-left sm:text-center mobile:text-center">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p>
            
            <button className="xl:w-[160px] lg:w-[160px] md:w-[160px] sm:w-[140px] mobile:w-[140px] h-[40px] bg-[rgb(30,30,30)] text-[14px] text-[rgb(245,245,245)] hover:bg-[rgb(162,96,40)]">
              More About Us
            </button>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Emphasis;
