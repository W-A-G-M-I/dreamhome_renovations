import React, { useState } from "react";
import MenuIcon from "./MenuIcon";
import Nav from "./Nav";

const MobileNav = () => {
  const [isNavShowing, setNavShowing] = useState(false);

  return (
    <>
      <MenuIcon
        show={isNavShowing}
        toggleShow={() => setNavShowing((prev) => !prev)}
      />
      {isNavShowing && (
        <Nav
          menuStyle="w-full h-screen fixed top-0 left-0 bg-white/50 flex-center"
          menuListStyle="flex-apart flex-col"
          menuListItemStyle="text-xl text-tea font-heading mb-5"
          setShowOff={() => setNavShowing(false)}
        />
      )}
    </>
  );
};

export default MobileNav;
