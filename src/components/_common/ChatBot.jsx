import React from "react";
import { icons } from "../../constants";

const ChatBot = () => {
  return (
    <button className="size-10 md:size-14 border rounded-full bg-tea flex-center fixed bottom-5 right-5 md:right-12 md:bottom-12">
      <img src={icons.messageBot} alt="message" className="size-6" />
    </button>
  );
};

export default ChatBot;
