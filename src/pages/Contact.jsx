import React, { useState } from "react";
import Modal from "../components/_common/Modal";
import { MenuIcon } from "../components/_common";

const Contact = () => {
  const [isNavShowing, setNavShowing] = useState(false);
  return (
       <Modal show={isNavShowing} toggleShow={() => setNavShowing(prev => !prev)}>
        <Modal.Trigger trigger={MenuIcon} />
      </Modal>
  );
};

export default Contact;
