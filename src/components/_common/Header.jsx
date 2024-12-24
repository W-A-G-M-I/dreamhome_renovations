import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className=" w-[100%] h-[140px] pl-32 pr-32  flex-apart fixed top-0 left-0 z-10 bg-[#f5f5f5]">
      <div className="flex items-end">
        <Logo containerStyle="w-9 h-8" />
        <h1 className="text-xl font-heading ms-1 text-charcoal">
          <span className="md:hidden">DHR</span>
          <span className="hidden md:block">Dream Home Renovations</span>
        </h1>
      </div>

      <MobileNav />

      <Nav
        menuStyle="flex-1 hidden md:block"
        menuListStyle="flex items-center justify-end"
        menuListItemStyle="ml-3 text-sm"
      />
    </header>
  );
};

export default Header;
