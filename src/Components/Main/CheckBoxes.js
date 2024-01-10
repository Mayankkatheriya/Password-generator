import React from "react";

const CheckBoxes = ({title, state, onClick}) => {
  return (
    <div>
    <input
      type="checkbox"
      checked={state}
      onChange={onClick}
      id={title}
    />
    <label htmlFor={title}>{title}</label>
  </div>
  );
};

export default CheckBoxes;
