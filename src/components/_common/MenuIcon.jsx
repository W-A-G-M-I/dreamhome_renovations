import React, { useState } from "react";

const MenuIcon = () => {
  const [active, setActive] = useState(false);

  return (
    <button className="btn__menu" onClick={() => setActive((prev) => !prev)}>
      <span
        className={`btn__stroke ${active && "btn__stroke--active -rotate-45"}`}
      />
      <span className={`btn__stroke ${active && 'opacity-0'}`} />
      <span
        className={`btn__stroke ${active && "btn__stroke--active rotate-45"}`}
      />
    </button>
  );
};

export default MenuIcon;
