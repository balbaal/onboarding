import React from "react";
import style from "./style.module.css";

interface ButtonControlProps {
  icon: React.ReactNode;
  onClick: () => void;
}

const ButtonControl: React.FC<ButtonControlProps> = ({ icon, onClick }) => {
  return (
    <div onClick={onClick} className={style.buttonContainer}>
      {icon}
    </div>
  );
};

export default ButtonControl;
