import React from "react";
import "./customer.css";

const Customer = () => {
  return (
    <div className="w-[100%] h-[775px] bg-[rgb(245,245,245)] flex flex-col justify-end items-center gap-[75px]">
      <h2 class="semiBold text-[40px] text-[rgb(35,35,35)]">
        Satisfied Customers
      </h2>
      <div class="testimonyWrap w-[100%] h-[480px] flex">
        <div class="testimony w-auto h-[100%] flex flex-col items-center flex-auto">
          <div class="testimonyText w-[240px] h-fit flex flex-col items-center gap-[50px]">
            <div class="quote w-[40px] h-[30px] bg-no-repeat bg-contain bg-center"></div>
            <p class="extraLight text-[15px] text-[rgb(35,35,35)] text-center leading-7">
              “I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services. Let your customers
              review you and tell their friends how great you are.”
            </p>
            <p class="semiBold text-[20px] text-[rgb(162,96,40)]">
              Dave Reddington
            </p>
          </div>
        </div>

        <div class="testimony w-auto h-[100%] flex flex-col items-center flex-auto">
          <div class="testimonyText w-[240px] h-fit flex flex-col items-center gap-[50px]">
            <div class="quote w-[40px] h-[30px] bg-no-repeat bg-contain bg-center"></div>
            <p class="extraLight text-[15px] text-[rgb(35,35,35)] text-center leading-7">
              “I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services. Let your customers
              review you and tell their friends how great you are.”
            </p>
            <p class="semiBold text-[20px] text-[rgb(162,96,40)]">
              Amelia Banks
            </p>
          </div>
        </div>

        <div class="testimony w-auto h-[100%] flex flex-col items-center flex-auto">
          <div class="testimonyText w-[240px] h-fit flex flex-col items-center gap-[50px]">
            <div class="quote w-[40px] h-[30px] bg-no-repeat bg-contain bg-center"></div>
            <p class="extraLight text-[15px] text-[rgb(35,35,35)] text-center leading-7">
              “I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services. Let your customers
              review you and tell their friends how great you are.”
            </p>
            <p class="semiBold text-[20px] text-[rgb(162,96,40)]">
              Kenny Stutes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
