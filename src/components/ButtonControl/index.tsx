import React from "react";
import style from "./style.module.css";

interface ButtonControlProps {
  icon: React.ReactNode;
  ariaLabel?: string;
  onClick: () => void;
}

const ButtonControl: React.FC<ButtonControlProps> = ({ icon, onClick, ariaLabel = "" }) => {
  return (
    <div aria-label={ariaLabel} onClick={onClick} className={style.buttonContainer}>
      {icon}
    </div>
  );
};

export default ButtonControl;
