import React, { useEffect } from "react";
import "./reason.css";

const Reason = () => {
  return (
    <div class="w-[100%] xl:h-[520px] lg:h-[520px] md:h-[520px] sm:h-[735px] mobile:h-[735px] bg-[rgb(245,245,245)] flex flex-col">
      <div className="top w-[100%] xl:h-[50%] lg:h-[50%] md:h-[50%] sm:h-[10%] mobile:h-[10%] flex justify-center items-center">
        <h2 class="font-heading xl:text-[40px] lg:text-[40px] md:text-[36px] sm:text-[25px] mobile:text-[25px] text-[rgb(30,30,30)] ">
          Why Choose Us
        </h2>
      </div>
      <div className="bottom w-[100%] xl:h-[50%] lg:h-[50%] md:h-[50%] sm:h-[90%] mobile:h-[90%] flex xl:flex-row lg:flex-row md:flex-row sm:flex-col mobile:flex-col">
        <article className="reasons w-auto h-[100%] flex flex-col flex-auto items-center xl:gap-[40px] lg:gap-[40px] md:gap-[40px] sm:gap-[20px] mobile:gap-[15px]">
          <h3 class="font-heading text-[rgb(162,96,40)] xl:text-[22px] lg:text-[22px] md:text-[22px] sm:text-[20px] mobile:text-[20px] xl:w-[220px] lg:w-[220px] md:w-[165px] text-center break-words ">
            Easy<br></br>Financing
          </h3>
          <p class="xl:w-[232px] lg:w-[232px] md:w-[150px] sm:w-[80%] mobile:w-[80%] text-center text-[15px] text-[rgb(30,30,30)]">
            I'm a paragraph. Click here to add your own text.
          </p>
        </article>

        <article className="reasons w-auto h-[100%] flex flex-col flex-auto items-center xl:gap-[40px] lg:gap-[40px] md:gap-[40px] sm:gap-[20px] mobile:gap-[15px]">
          <h3 class="font-heading text-[rgb(162,96,40)] xl:text-[22px] lg:text-[22px] md:text-[22px] sm:text-[20px] mobile:text-[20px] xl:w-[220px] lg:w-[220px] md:w-[165px] text-center break-words ">
            Free, At Home<br></br>Consultations
          </h3>
          <p class="xl:w-[232px] lg:w-[232px] md:w-[150px] sm:w-[80%] mobile:w-[80%] text-center text-[15px] text-[rgb(30,30,30)]">
            I'm a paragraph. Click here to add your own text.
          </p>
        </article>

        <article className="reasons w-auto h-[100%] flex flex-col flex-auto items-center xl:gap-[40px] lg:gap-[40px] md:gap-[40px] sm:gap-[20px] mobile:gap-[15px]">
          <h3 class="font-heading text-[rgb(162,96,40)] xl:text-[22px] lg:text-[22px] md:text-[22px] sm:text-[20px] mobile:text-[20px] xl:w-[220px] lg:w-[220px] md:w-[175px] text-center break-words ">
            Award Winning<br></br>Service
          </h3>
          <p class="xl:w-[232px] lg:w-[232px] md:w-[150px] sm:w-[80%] mobile:w-[80%] text-center text-[15px] text-[rgb(30,30,30)]">
            I'm a paragraph. Click here to add your own text.
          </p>
        </article>

        <article className="reasons w-auto h-[100%] flex flex-col flex-auto items-center xl:gap-[40px] lg:gap-[40px] md:gap-[40px] sm:gap-[20px] mobile:gap-[15px]">
          <h3 class="font-heading text-[rgb(162,96,40)] xl:text-[22px] lg:text-[22px] md:text-[22px] sm:text-[20px] mobile:text-[20px] xl:w-[220px] lg:w-[220px] md:w-[165px] text-center break-words ">
            Licensed &<br></br>Insured
          </h3>
          <p class="xl:w-[232px] lg:w-[232px] md:w-[150px] sm:w-[80%] mobile:w-[80%] text-center text-[15px] text-[rgb(30,30,30)]">
            I'm a paragraph. Click here to add your own text.
          </p>
        </article>
      </div>
    </div>
  );
};

export default Reason;
