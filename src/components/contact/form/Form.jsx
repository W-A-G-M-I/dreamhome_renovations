import React, { useState } from "react";
import "./form.css";
import { InputField, Btn } from "../../_common";
import { useForm, ValidationError } from "@formspree/react";

const Form = ({ btnVariant }) => {
  const [state, handleSubmit] = useForm("xannqewb");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="py-4 mt-6 md:px-20 md:mt-0 md:w-1/2">
      <InputField
        label="First Name"
        labelStyle="text-sm md:text-base"
        name="firstname"
        inputContainerStyle="mt-1"
        inputStyle="w-full bg-transparent border-b outline-none px-3"
        value={formData.firstname}
        handleChange={handleChange}
        />

      <InputField
        containerStyle="mt-3"
        label="Last Name"
        labelStyle="text-sm"
        name="lastname"
        inputContainerStyle="mt-1"
        inputStyle="w-full bg-transparent border-b outline-none px-3"
        value={formData.lastname}
        handleChange={handleChange}
        />

      <InputField
        containerStyle="mt-3"
        label="Phone"
        labelStyle="text-sm"
        name="phone"
        inputContainerStyle="mt-1"
        inputStyle="w-full bg-transparent border-b outline-none px-3"
        mustFill={false}
        value={formData.phone}
        handleChange={handleChange}
        />

      <InputField
        containerStyle="mt-3"
        label="Subject"
        labelStyle="text-sm"
        name="subject"
        inputContainerStyle="mt-1"
        inputStyle="w-full bg-transparent border-b outline-none px-3"
        mustFill={false}
        value={formData.subject}
        handleChange={handleChange}
        />

      <InputField
        containerStyle="mt-3"
        type="textarea"
        label="Message"
        labelStyle="text-sm"
        name="message"
        inputContainerStyle="mt-1"
        inputStyle="w-full bg-transparent border-b outline-none px-3 h-20 resize-none"
        mustFill={false}
        value={formData.message}
        handleChange={handleChange}
      />

      <Btn
        text="Submit"
        variant={btnVariant}
        containerStyle="w-full h-10 mt-3 text-sm"
        disabled={state.submitting}
      />
    </form>
  );
};

export default Form;
