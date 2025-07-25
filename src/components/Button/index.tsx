import React from "react";
import styles from "./style.module.css";

type ButtonType = "primary" | "dark" | "light";

interface ButtonProps {
  text: React.ReactNode;
  type?: ButtonType;
  onClick?: () => void;
  ref?: React.Ref<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({ ref, text, type = "primary", onClick }) => {
  const classNames = `${styles.button} ${styles[type]}`;

  return (
    <button ref={ref} className={classNames} onClick={onClick}>
      {text}
    </button>
  );
};
