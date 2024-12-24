import React, { useState } from "react";
import { icons } from "../../constants";
import { useToggle } from "../../hooks/useToggle";
import TitleDesc from "./TitleDesc";
import InputField from "./InputField";
import ChatBox from "./ChatBox";

const ChatBot = () => {
  const { isToggle: isChatBoardOpen, toggleOff, toggleOn } = useToggle();
  const [message, setMessage] = useState("");

  return (
    <>
      <button
        className="fixed border rounded-full size-10 md:size-14 bg-tea flex-center bottom-5 right-5 md:right-12 md:bottom-12"
        onClick={toggleOn}
      >
        <img src={icons.messageBot} alt="message" className="size-6" />
      </button>

      {isChatBoardOpen && (
        <div className="fixed bottom-0 md:bottom-0 right-0 md:right-10 z-50 flex flex-col items-stretch w-full md:w-[340px] h-screen bg-white md:h-[500px] md:absolute md:shadow-lg">
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
          <ChatBox />
          <InputField
            type="textarea"
            containerStyle="min-h-[4rem] flex-center px-5"
            inputContainerStyle="flex-center flex-1 gap-x-2"
            inputStyle="flex-1 px-2 resize-none h-7 pt-1 border"
            placeholder="Type Your Message"
            value={message}
            iconSrc={icons.x}
          />
        </div>
      )}
    </>
  );
};

export default ChatBot;
