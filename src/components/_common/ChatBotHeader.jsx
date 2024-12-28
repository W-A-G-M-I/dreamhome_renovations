import React from "react";
import TitleDesc from "./TitleDesc";
import { icons } from "../../constants";

const ChatBotHeader = ({ toggleOff }) => {
  return (
    <header className="h-[70px] pl-5 pr-3 flex-apart">
      <TitleDesc
        containerStyle=""
        titleStyle="text-lg font-heading"
        descStyle="text-sm"
        title="DH Renovations"
        desc="We will reply as soon as possible"
      />

      <button onClick={toggleOff}>
        <img src={icons.x} alt="close" />
      </button>
    </header>
  );
};

export default ChatBotHeader;
