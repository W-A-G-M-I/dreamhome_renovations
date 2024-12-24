import { useState } from "react";

export const useToggle = () => {
  const [isToggle, setToggle] = useState(false);

  const toggleOn = () => setToggle(true);
  const toggleOff = () => setToggle(false);
  const toggleToFro = () => setToggle((prev) => !prev);

  return { isToggle, toggleOn, toggleOff, toggleToFro };
};
