import React from "react";
import { IconWrapper, TitleDesc } from "../../_common";
import { icons } from "../../../constants";

const ReviewCard = ({ name, review }) => {
  return (
    <div className="mb-10">
      <IconWrapper
        iconSrc={icons.quote}
        containerStyle="size-10 mx-auto mb-6"
      />
      <TitleDesc
        title={name}
        desc={review}
        containerStyle="text-center"
        titleStyle="text-tea font-heading text-lg"
        descStyle="mt-3 text-sm"
      />
    </div>
  );
};

export default ReviewCard;
