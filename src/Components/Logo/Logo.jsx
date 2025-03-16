import React from "react";
import { FaUtensils } from "react-icons/fa";
import "./Logo.css";

const Logo = () => {
  return (
    <span className="flex">
      <FaUtensils className="logo-icon" />
      <span className="logo-text">Recipe Explorer</span>
    </span>
  );
};

export default Logo;
