import React from "react";
import "./Footer.css";
import Logo from "../Logo/Logo";
const Footer = () => {
  return (
    <footer className="flex" aria-label="Site Footer">
      <p>All Rights reserved by</p>
      <Logo />
    </footer>
  );
};

export default Footer;
