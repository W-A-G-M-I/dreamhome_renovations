import React, { useState } from "react";
import TitleDesc from "./TitleDesc";
import InputField from "./InputField";
import Btn from "./Btn";
import { useFormData } from "../../hooks/useFormData";

const ChatBotForm = () => {
  const [isDisplayed, setDisplayed] = useState(true);
  const { isLoading, formData, handleFormDataChange, handleFormSubmit } =
    useFormData({
      customFormData: { name: "", email: "" },
      formKey: "xwppozwl",
    });

  return isDisplayed ? (
    <div className="absolute inset-0 px-4 bg-neutral-600/30 flex-center">
      <div className="w-full px-2 py-4 bg-white rounded-md">
        <TitleDesc
          title="provide your name and email"
          titleStyle="font-heading capitalize text-center"
        />

        <form
          className="mt-2"
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              await handleFormSubmit(e)
              setDisplayed(false)
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <InputField
            label="name"
            name="name"
            labelStyle="text-xs"
            placeholder="John Doe"
            inputStyle="w-full text-sm px-4 py-1 border-b outline-none"
            value={formData.name}
            handleChange={handleFormDataChange}
          />

          <InputField
            type="email"
            containerStyle="mt-2"
            label="email"
            name="email"
            labelStyle="text-xs"
            placeholder="johndoe@gmail.com"
            inputStyle="w-full text-sm px-4 py-1 border-b outline-none"
            value={formData.email}
            handleChange={handleFormDataChange}
          />

          <Btn
            text={isLoading ? "submitting" : "submit"}
            containerStyle="px-2 py-1 rounded-md mx-auto block mt-2"
          />
        </form>
      </div>
    </div>
  ) : null;
};

export default ChatBotForm;
