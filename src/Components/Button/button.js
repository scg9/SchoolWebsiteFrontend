import React from "react";
import "./button.css"; // Import the CSS file

const Button = ({ label, onClick, styleType }) => {
  return (
    <button className={`button ${styleType}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
