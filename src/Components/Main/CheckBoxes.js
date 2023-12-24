import React from "react";

const CheckBoxes = ({title, state, onClick}) => {
  return (
    <div>
    <input
      type="checkbox"
      checked={state}
      onChange={onClick}
    />
    <label>{title}</label>
  </div>
  );
};

export default CheckBoxes;
