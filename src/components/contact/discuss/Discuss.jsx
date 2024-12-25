import React from "react";
import "./discuss.css";
import { TitleDesc } from "../../_common";
import { contactDetails } from "../../../constants";

const Discuss = () => {
  const ourDetails = Object.values(contactDetails).map((detail) => detail);

  return (
    <div className="md:w-1/2 md:pr-20">
      <TitleDesc
      containerStyle=""
        title="Let's Discuss Your Next Project"
        desc="Fill out the form, or call us to set up a free in-home consultation"
        titleStyle="text-2xl font-heading md:text-[40px] md:leading-snug"
        descStyle="text-sm mt-1 md:mt-6 md:text-base"
      />

      <article className="mt-6">
        <h3 className="font-bold md:text-xl">Service Areas: </h3>

        <div className="flex flex-col mt-3 gap-y-2">
          {ourDetails.map((detail, index) => (
            <p key={index} className="text-xs md:text-base">
              {detail}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
};

export default Discuss;
