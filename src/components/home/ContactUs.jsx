import React from "react";
import Discuss from "../contact/discuss/Discuss";
import Form from "../contact/form/Form";
import { contactTheme } from "../../constants";

const formBtnVariant = {
  light: "default",
  dark: "tea",
};

const ContactUs = ({ theme = "light" }) => {
  return (
    <section className={`py-5 md:py-10 padded md:flex ${contactTheme[theme]}`}>
      <Discuss />
      <Form btnVariant={formBtnVariant[theme]} />
    </section>
  );
};

export default ContactUs;
