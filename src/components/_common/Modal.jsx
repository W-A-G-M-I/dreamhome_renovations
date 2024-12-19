import React from "react";

const Modal = ({ children, show, toggleShow }) => {
  const subComponents = React.Children.map(children, (child) => {
    const childName = child.type.name;
    const isChild = Modal[childName];
    return isChild ? child : null;
  });

  const displaySubComponents = () => {
    return subComponents.map((component) => {
      const isValidElement = React.isValidElement(component);
      return (
        isValidElement && React.cloneElement(component, { show, toggleShow })
      );
    });
  };

  return <>{displaySubComponents()}</>;
};

const Trigger = ({ trigger: Trigger, toggleShow, show }) => {
  return <Trigger toggleShow={toggleShow} show={show} />;
};
Modal.Trigger = Trigger;

const Backdrop = ({
  show,
  containerStyle = "w-full bg-black/50",
  children,
}) => {
  return show ? (
    <div className={`h-screen fixed top-0 left-0 ${containerStyle}`}>
      {children}
    </div>
  ) : null;
};
Modal.Backdrop = Backdrop;

export default Modal;
