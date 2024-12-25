import React from "react";
import { socialLinks } from "../../constants";
import IconWrapper from "./IconWrapper";

const Footer = () => {
  return (
    <footer className="py-2 padded md:flex-apart">
      <div className="mb-1 md:order-last flex-center gap-x-2">
        {socialLinks.map(({ title, icon }) => (
          <IconWrapper
            key={title}
            iconSrc={icon}
            containerStyle="size-6 p-0.5 flex-center"
            iconStyle=""
          />
        ))}
      </div>

      <p className="text-sm text-center">
        <span className="block md:inline">© 2024 by Renovation Team.</span>
        <span>
          Powered and secured by{" "}
          <span className="underline font-heading">Group 2</span>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
