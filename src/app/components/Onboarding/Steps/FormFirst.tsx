import React from "react";
import InputField from "@/components/InputField";
import styles from "./style.module.css";

import { useOnboardingStep } from "@/store/useOnboardingStep";

const FormFirst = () => {
  const { name, setName, setOnboardingStep } = useOnboardingStep();

  const handleNextStep = () => {
    if (name) {
      setOnboardingStep(4);
    }
  };

  return (
    <div className={styles.formContainer}>
      <p>Let’s start with the basics. Type in your first name.</p>
      <InputField
        onChange={setName}
        placeholder="First name"
        type="text"
        value={name}
        required
        onSubmit={handleNextStep}
      />
    </div>
  );
};

export default FormFirst;
