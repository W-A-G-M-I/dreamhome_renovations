import React from "react";
import Form from "../components/contact/form/Form";
import Discuss from "../components/contact/discuss/Discuss";
import './contact.css'

const Contact = () => {
  return (
    <section className="flex-box">
      <Discuss />
      <Form />
    </section>
  );
};

export default Contact;
