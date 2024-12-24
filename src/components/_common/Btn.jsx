import React from "react";

const Btn = ({ text, containerStyle, handleClick }) => {
  return <button className={containerStyle}>{text && text}
  </button>;
};

export default Btn;
