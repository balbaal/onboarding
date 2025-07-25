import React, { useEffect, useState } from "react";
import ArrowLeftIcon from "@/assets/icons/arrow-left.svg";
import styles from "./style.module.css";
import { isValidEmail } from "@/helper/utils";

type InputFieldProps = {
  type: "text" | "email";
  placeholder?: string;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
  required?: boolean;
  onSubmit: () => void;
  ref?: React.Ref<HTMLInputElement>;
};

const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  value,
  onChange,
  required = false,
  onSubmit,
  ref = null,
}) => {
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const handleClick = () => {
    const isValid = type === "email" ? isValidEmail(value) : value.trim() !== "";
    setShowError(!isValid);
    if (isValid) {
      onSubmit();
    }
  };

  useEffect(() => {
    if (!required && value === "") {
      setError("");
      return;
    }

    if (required && value.trim() === "") {
      setError("This field is required.");
    } else if (type === "email" && !isValidEmail(value)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  }, [value, required, type]);

  return (
    <div ref={ref} className={styles.inputWrapper}>
      <div className={`${styles.inputContainer} ${showError ? styles.error : ""}`}>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={styles.input}
        />
        <div className={styles.suffixButton} onClick={handleClick}>
          <ArrowLeftIcon width={18} height={18} />
        </div>
      </div>
      {showError && <label className={styles.errorText}>{error}</label>}
    </div>
  );
};

export default InputField;
