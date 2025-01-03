import React, { useState } from "react";
import ChatBotHeader from "./ChatBotHeader";
import ChatBox from "./ChatBox";
import InputField from "./InputField";
import { icons } from "../../constants";
import Chat from "./Chat";
import ChatBotScreen from "./ChatBotScreen";

const SecondChatBotScreen = ({ isChatBoardOpen, toggleOff }) => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([
    { user: "bot", msg: "Please provide your name" },
  ]);

  const handleBtnClick = () => {
    setMessages((prev) => [...prev, { msg: userInput, user: "default" }]);
  };

  return (
    <ChatBotScreen
      toggleOff={toggleOff}
      isChatBoardOpen={isChatBoardOpen}
      messages={messages}
      userInput={userInput}
      setMessages={setMessages}
      setUserInput={setUserInput}
      handleBtnClick={handleBtnClick}
      first={false}
    />
  );
};

export default SecondChatBotScreen;
