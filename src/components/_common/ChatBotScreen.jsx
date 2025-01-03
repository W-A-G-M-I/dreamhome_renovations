import React, { useEffect } from "react";
import ChatBotHeader from "./ChatBotHeader";
import ChatBox from "./ChatBox";
import Chat from "./Chat";
import { icons } from "../../constants";
import InputField from "./InputField";
import sendMail from "../../services/sendemail";

const ChatBotScreen = ({
  toggleOff,
  title,
  description,
  messages,
  isChatBoardOpen,
  userInput,
  first = true,
  setMessages,
  setUserInput,
  handleBtnClick,
  noMoreFirstRender,
}) => {
  useEffect(() => {
    if (!first) return;

    const numberOfMessages = messages.length;

    if (numberOfMessages === 2) {
      setMessages((prev) => [
        ...prev,
        { msg: "Thanks for your name, now your email please", user: "bot" },
      ]);
    }

    if (numberOfMessages === 4) {
      const name = messages[1].msg;
      const email = messages[3].msg;
      (async () => {
        await sendMail({ name, email }, "/send-mail/bot");
        setTimeout(() => {
          noMoreFirstRender();
        }, 3000);
      })();
    }
  }, [messages]);

  if (!isChatBoardOpen) return null;

  return (
    <div className="fixed top-0 md:top-[80px] right-0 md:right-10 z-50 flex flex-col items-stretch w-full md:w-[340px] h-screen bg-white md:h-[500px] md:shadow-lg">
      <ChatBotHeader
        toggleOff={toggleOff}
        chatBotTitle={title}
        description={description}
      />

      <ChatBox>
        {messages.map((message) => (
          <Chat {...message} key={message.msg} />
        ))}
      </ChatBox>

      <InputField
        type="textarea"
        containerStyle="min-h-[4rem] flex-center px-5"
        inputContainerStyle="flex-center flex-1 gap-x-2"
        inputStyle="flex-1 px-2 resize-none h-7 pt-1 border"
        placeholder="Type Your Message"
        value={userInput}
        iconSrc={icons.send}
        handleChange={(e) => setUserInput(e.currentTarget.value)}
        handleBtnClick={handleBtnClick}
      />
    </div>
  );
};

export default ChatBotScreen;
