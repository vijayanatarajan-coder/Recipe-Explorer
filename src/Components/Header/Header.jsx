import React from "react";
import "./Header.css";
import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
const Header = () => {
  return (
    <header className="flex" aria-label="Main Header">
      <Logo />
      <nav>
        <Nav />
      </nav>
    </header>
  );
};

export default Header;
