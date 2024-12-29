import React from "react";
import { TitleDesc } from "../../_common";

const ReasonCard = ({ title1, title2, description }) => {
  return (
    <article className="flex-1 px-4 py-2">
      <TitleDesc
        containerStyle="text-center"
        title={
          <>
            {title1}
            <br />
            {title2}
          </>
        }
        titleStyle="font-heading text-tea text-xl lg:2xl"
        desc={description}
        descStyle="text-sm mt-2"
      />
    </article>
  );
};

export default ReasonCard;
