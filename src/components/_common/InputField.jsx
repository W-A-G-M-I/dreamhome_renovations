import React from "react";

const InputField = ({
  type = "text",
  name,
  label,
  labelStyle,
  containerStyle,
  placeholder,
  inputStyle,
  inputContainerStyle,
  iconSrc,
  value
}) => {
  const displayInput = () => {
    switch (type) {
      case "textarea":
        return (
          <textarea
            name={name}
            className={inputStyle}
            placeholder={placeholder}
            value={value}
          />
        );
      default:
        return (
          <input
            type={type}
            placeholder={placeholder}
            className={inputStyle}
            name={name}
            value={value}
          />
        );
    }
  };
  return (
    <div className={containerStyle}>
      {label && (
        <label htmlFor={name} className={labelStyle}>
          {label}
        </label>
      )}

      <div className={inputContainerStyle}>
        {displayInput()}
        {iconSrc && (
          <button>
            <img src={iconSrc} alt="input icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
