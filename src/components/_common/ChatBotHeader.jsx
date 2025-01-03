import React from "react";
import TitleDesc from "./TitleDesc";
import { icons } from "../../constants";

const ChatBotHeader = ({
  toggleOff,
  description = "We will reply as soon as possible",
  chatBotTitle = "DH Renovations",
}) => {
  return (
    <header className="h-[70px] pl-5 pr-3 flex-apart bg-tea">
      <TitleDesc
        containerStyle="text-faint"
        titleStyle="text-lg font-heading"
        descStyle="text-sm"
        title={chatBotTitle}
        desc={description}
      />

      <button onClick={toggleOff}>
        <img src={icons.x} alt="close" />
      </button>
    </header>
  );
};

export default ChatBotHeader;
