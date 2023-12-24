import React from "react";

const Button = ({ customClass, text, onClick }) => {
  return (
    <button className={customClass}onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
