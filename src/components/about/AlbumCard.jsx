import React from "react";
import { IconWrapper, TitleDesc } from "../_common";

const AlbumCard = ({ imageSrc, title, summary, orderLast }) => {
  return (
    <article className="lg:w-1/2 lg:flex">
      <IconWrapper
        iconSrc={imageSrc}
        containerStyle={`w-full h-[219px] lg:h-[420px] lg:w-1/2 ${
          orderLast && "order-last"
        }`}
      />
      <TitleDesc
        containerStyle="text-center px-4 py-5 lg:w-1/2 lg:flex-center flex-col"
        title={title}
        titleStyle="font-heading text-lg lg:text-2xl mb-3"
        desc={summary}
        descStyle="text-sm"
      />
    </article>
  );
};

export default AlbumCard;
