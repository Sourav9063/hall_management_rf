import React from "react";
import style from "./blueButton.module.css";

const BlueButton = ({ name, onClick, type, isDisabled, color }) => {
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        className={
          color === "blue"
            ? `${style.btn} ${style.btn_blue} `
            :color==="green"
            ? `${style.btn} ${style.submit}` 
            : `${style.btn} ${style.btn_brown}` 
        }
        isDisabled={isDisabled}
      >
        {name}
      </button>
    </div>
  );
};

BlueButton.defaultProps = {
  type: "button",
  isDisabled: false,
};

export default BlueButton;
