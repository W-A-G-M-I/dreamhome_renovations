import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="relative h-20 padded flex-apart">
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
