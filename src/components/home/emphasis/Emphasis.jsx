import React from "react";
import "./emphasis.css";

const Emphasis = () => {
  return (
    <div className="w-[100%] h-[680px] bg-[rgb(245,245,245)]">
      <div className="mx-[auto] my-[0] w-[90%] h-[inherit] flex">
        <div className="image h-[inherit] w-[50%] bg-[rgba(143,143,143,0.6)] bg-cover bg-top bg-fixed bg-blend-multiply"></div>
        <div class="h-[inherit] w-[50%] flex justify-center items-center">
          <article class="w-[75%] h-[310px] flex flex-col justify-between">
            <h2 class="semiBold text-[40px] text-[rgb(30,30,30)]">
              The Leading Bay Area Remodeling Company
            </h2>
            <p class="extralight text-[15px] text-[rgb(30,30,30)]">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p>
            <button class="extraLight w-[160px] h-[40px] bg-[rgb(30,30,30)] text-[14px] text-[rgb(245,245,245)] hover:bg-[rgb(162,96,40)]">
              More About Us
            </button>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Emphasis;
