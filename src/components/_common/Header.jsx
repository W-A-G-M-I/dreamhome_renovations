import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";

const Header = () => {
  const [isStaticHeader, setStaticHeader] = useState(true);
  useEffect(() => {
    const handleWindowScroll = (e) => {
      const pageY = e.currentTarget.scrollY;
      pageY > 300 ? setStaticHeader(false) : setStaticHeader(true);
    };
    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <header
      className={`h-20 padded flex-apart ${
        isStaticHeader ? "header-static" : "header-fixed"
      }`}
    >
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
