import React from "react";
import styles from "./style.module.css";

type ButtonType = "primary" | "dark" | "light";

interface ButtonProps {
  text: string;
  type?: ButtonType;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, type = "primary", onClick }) => {
  const classNames = `${styles.button} ${styles[type]}`;

  return (
    <button className={classNames} onClick={onClick}>
      {text}
    </button>
  );
};
