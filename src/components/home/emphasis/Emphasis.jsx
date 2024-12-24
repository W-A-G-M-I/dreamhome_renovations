import React from "react";
import "./emphasis.css";

const Emphasis = () => {
  return (
    <div className="w-[100%] h-[680px] bg-faint">
      <div className="mx-[auto] my-[0] w-[90%] h-[inherit] flex">
        <div className="image h-[inherit] w-[50%] bg-[rgba(143,143,143,0.6)] bg-cover bg-top bg-fixed bg-blend-multiply" />

        <div className="h-[inherit] w-[50%] flex justify-center items-center">
          <article className="w-[75%] h-[310px] flex flex-col justify-between">
            <h2 className="font-heading text-[40px] text-charcoal">
              The Leading Bay Area Remodeling Company
            </h2>
            <p className="text-[15px] text-charcoal">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p>
            
            <button className="w-[160px] h-[40px] bg-[rgb(30,30,30)] text-[14px] text-[rgb(245,245,245)] hover:bg-[rgb(162,96,40)]">
              More About Us
            </button>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Emphasis;
