import React from "react";
import Form from "../components/contact/form/Form";
import Discuss from "../components/contact/discuss/Discuss";

const Contact = () => {
  return (
    <section className="flex">
      <Discuss />
      <Form />
    </section>
  );
};

export default Contact;
