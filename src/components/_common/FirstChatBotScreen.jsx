import React, { useEffect, useState } from "react";
import ChatBotHeader from "./ChatBotHeader";
import ChatBox from "./ChatBox";
import Chat from "./Chat";
import InputField from "./InputField";
import { icons } from "../../constants";
import ChatBotScreen from "./ChatBotScreen";

const FirstChatBotScreen = ({
  isChatBoardOpen,
  toggleOff,
  noMoreFirstRender,
}) => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([
    { user: "bot", msg: "Please provide your name" },
  ]);

  const handleBtnClick = () => {
    setMessages((prev) => [...prev, { msg: userInput, user: "default" }]);
  };

  return (
    <ChatBotScreen
      title="Welcome"
      description="please provide name and email"
      toggleOff={toggleOff}
      isChatBoardOpen={isChatBoardOpen}
      messages={messages}
      userInput={userInput}
      setMessages={setMessages}
      setUserInput={setUserInput}
      handleBtnClick={handleBtnClick}
      // first={false}
      noMoreFirstRender={noMoreFirstRender}
    />
  );
};

export default FirstChatBotScreen;
