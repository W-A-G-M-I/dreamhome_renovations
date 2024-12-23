import React, { useEffect } from "react";
import "./reason.css";

const Reason = () => {
  return (
    <div class="w-[100%] h-[520px] bg-[rgb(245,245,245)] flex flex-col">
      <div className="top w-[100%] h-[50%] flex justify-center items-center">
        <h2 class="semiBold text-[40px] text-[rgb(30,30,30)]">Why Choose Us</h2>
      </div>
      <div className="bottom w-[100%] h-[50%] flex">
        <div className="reasons w-auto h-[100%] flex flex-col flex-auto items-center gap-[40px]">
          <h3 class="semiBold text-[rgb(162,96,40)] text-[22px] w-[220px] text-center break-words ">
            Easy<br></br>Financing
          </h3>
          <p class="w-[232px] text-center text-[15px] text-[rgb(30,30,30)]">
            I'm a paragraph. Click here to add your own text.
          </p>
        </div>
        <div className="reasons w-auto h-[100%] flex flex-col flex-auto items-center gap-[40px]">
          <h3 class="semiBold text-[rgb(162,96,40)] text-[22px] w-[220px] text-center break-words ">
            Free, At Home<br></br>Consultations
          </h3>
          <p class="w-[232px] text-center text-[15px] text-[rgb(30,30,30)]">
            I'm a paragraph. Click here to add your own text.
          </p>
        </div>
        <div className="reasons w-auto h-[100%] flex flex-col flex-auto items-center gap-[40px]">
          <h3 class="semiBold text-[rgb(162,96,40)] text-[22px] w-[220px] text-center break-words ">
            Award Winning<br></br>Service
          </h3>
          <p class="w-[232px] text-center text-[15px] text-[rgb(30,30,30)]">
            I'm a paragraph. Click here to add your own text.
          </p>
        </div>
        <div className="reasons w-auto h-[100%] flex flex-col flex-auto items-center gap-[40px]">
          <h3 class="semiBold text-[rgb(162,96,40)] text-[22px] w-[220px] text-center break-words ">
            Licensed &<br></br>Insured
          </h3>
          <p class="w-[232px] text-center text-[15px] text-[rgb(30,30,30)]">
            I'm a paragraph. Click here to add your own text.
          </p>
        </div>
      </div>
    </div>
  );

  
};


export default Reason;
