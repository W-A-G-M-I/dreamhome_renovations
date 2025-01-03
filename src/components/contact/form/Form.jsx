import "./form.css";
import { InputField, Btn } from "../../_common";
import sendMail from "../../../services/sendemail";
import { useState } from "react";

const Form = ({ btnVariant }) => {
  const [contactFormData, setContactFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setContactFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMail(contactFormData);
    setContactFormData({
      firstname: "",
      lastname: "",
      phone: "",
      subject: "",
      message: "",
    });
  };
  
  return (
    <form
      onSubmit={handleSubmit}
      className="py-4 mt-6 md:px-20 md:mt-0 md:w-1/2"
    >
      <InputField
        label="First Name"
        labelStyle="text-sm md:text-base"
        name="firstname"
        inputContainerStyle="mt-1"
        inputStyle="w-full bg-transparent border-b outline-none px-3"
        value={contactFormData.firstname}
        handleChange={handleChange}
      />

      <InputField
        containerStyle="mt-3"
        label="Last Name"
        labelStyle="text-sm"
        name="lastname"
        inputContainerStyle="mt-1"
        inputStyle="w-full bg-transparent border-b outline-none px-3"
        value={contactFormData.lastname}
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
        value={contactFormData.phone}
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
        value={contactFormData.subject}
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
        value={contactFormData.message}
        handleChange={handleChange}
      />

      <Btn
        text={"Submit"}
        variant={btnVariant}
        containerStyle="w-full h-10 mt-3 text-sm"
        // disabled={isLoading}
      />
    </form>
  );
};

export default Form;
