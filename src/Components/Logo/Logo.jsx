import React from "react";
import { FaUtensils } from "react-icons/fa";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="flex">
      <FaUtensils className="logo-icon" />
      <span className="logo-text">Recipe Explorer</span>
    </div>
  );
};

export default Logo;
