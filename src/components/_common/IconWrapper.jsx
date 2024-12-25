import React from "react";

const IconWrapper = ({
  containerStyle,
  iconSrc,
  iconStyle = "object-center object-cover size-full",
}) => {
  return (
    <div className={containerStyle}>
      <img src={iconSrc} alt="icon" className={iconStyle} />
    </div>
  );
};

export default IconWrapper;
