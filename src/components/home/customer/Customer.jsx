import React from "react";
import "./customer.css";

const Customer = () => {
  return (
    <div className="xl:h-[775px] lg:h-[775px] md:h-[675px] bg-[rgb(245,245,245)] flex flex-col justify-end items-center xl:gap-[75px] lg:gap-[75px] md:gap-[100px]">
      <h2 class="font-heading xl:text-[40px] lg:text-[40px] md:text-[36px] text-[rgb(35,35,35)]">
        Satisfied Customers
      </h2>

      <div class="testimonyWrap w-[100%] xl:h-[480px] lg:h-[480px] md:h-[430px] flex">
        <div class="testimony w-auto h-[100%] flex flex-col items-center flex-auto">
          <div class="testimonyText w-[240px] h-fit flex flex-col items-center xl:gap-[50px] lg:gap-[50px] md:gap-[35px]">
            <div class="quote xl:w-[40px] lg:w-[40px] md:w-[30px] xl:h-[30px] lg:h-[30px] md:h-[25px] bg-no-repeat bg-contain bg-center"></div>
            <p class="extraLight xl:text-[15px] lg:text-[15px] md:text-[14px] text-[rgb(35,35,35)] text-center leading-7">
              “I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services. Let your customers
              review you and tell their friends how great you are.”
            </p>
            <p class="font-heading xl:text-[20px] lg:text-[20px] md:text-[18px] text-[rgb(162,96,40)]">
              Dave Reddington
            </p>
          </div>
        </div>

        <div class="testimony w-auto h-[100%] flex flex-col items-center flex-auto">
          <div class="testimonyText w-[240px] h-fit flex flex-col items-center xl:gap-[50px] lg:gap-[50px] md:gap-[35px]">
            <div class="quote xl:h-[30px] lg:h-[30px] md:h-[25px] xl:w-[40px] lg:w-[40px] md:w-[30px] bg-no-repeat bg-contain bg-center"></div>
            <p class="extraLight xl:text-[15px] lg:text-[15px] md:text-[14px] text-[rgb(35,35,35)] text-center leading-7">
              “I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services. Let your customers
              review you and tell their friends how great you are.”
            </p>
            <p class="font-heading xl:text-[20px] lg:text-[20px] md:text-[18px] text-[rgb(162,96,40)]">
              Amelia Banks
            </p>
          </div>
        </div>

        <div class="testimony w-auto h-[100%] flex flex-col items-center flex-auto">
          <div class="testimonyText w-[240px] h-fit flex flex-col items-center xl:gap-[50px] lg:gap-[50px] md:gap-[35px]">
            <div class="quote xl:w-[40px] lg:w-[40px] md:w-[30px] xl:h-[30px] lg:h-[30px] md:h-[25px] bg-no-repeat bg-contain bg-center"></div>
            <p class="extraLight xl:text-[15px] lg:text-[15px] md:text-[14px] text-[rgb(35,35,35)] text-center leading-7">
              “I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services. Let your customers
              review you and tell their friends how great you are.”
            </p>
            <p class="font-heading xl:text-[20px] lg:text-[20px] md:text-[18px] text-[rgb(162,96,40)]">
              Kenny Stutes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
