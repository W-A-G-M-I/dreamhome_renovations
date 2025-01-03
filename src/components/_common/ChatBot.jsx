import React, {  useState } from "react";
import { icons } from "../../constants";
import { useToggle } from "../../hooks/useToggle";
import FirstChatBotScreen from "./FirstChatBotScreen";
import SecondChatBotScreen from "./SecondChatBotScreen";

const ChatBot = () => {
  const [isFirstRender, setIsFirstRender] = useState(true)
  const { isToggle: isChatBoardOpen, toggleOff, toggleOn } = useToggle();
  const noMoreFirstRender = () => setIsFirstRender(false);

  return (
    <>
      <button
        className="fixed border rounded-full size-10 md:size-12 bg-tea flex-center bottom-5 right-5 md:right-12 md:bottom-6"
        onClick={toggleOn}
      >
        <img src={icons.messageBot} alt="message" className="size-6" />
      </button>

      {isFirstRender ? (
        <FirstChatBotScreen
          isChatBoardOpen={isChatBoardOpen}
          toggleOff={toggleOff}
          noMoreFirstRender={noMoreFirstRender}
        />
      ) : (
        <SecondChatBotScreen
          isChatBoardOpen={isChatBoardOpen}
          toggleOff={toggleOff}
        />
      )}
    </>
  );
};

export default ChatBot;
