import React from "react";
import { navLinks } from "../../constants";
import { Link, useLocation } from "react-router-dom";

const Nav = ({ menuStyle, menuListStyle, menuListItemStyle, setShowOff }) => {
  const { pathname } = useLocation();

  return (
    <nav className={menuStyle}>
      <ul className={menuListStyle}>
        {navLinks.map(({ title, href }) => (
          <li className={menuListItemStyle} onClick={setShowOff} key={title}>
            <Link to={href}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
