import React from "react";
import InputField from "@/components/InputField";
import styles from "./style.module.css";

import { useOnboardingStep } from "@/store/useOnboardingStep";
import { isValidEmail } from "@/helper/utils";

const FormSecond = () => {
  const { email, setEmail, setOnboardingStep } = useOnboardingStep();

  const handleNextStep = () => {
    if (isValidEmail(email)) {
      setOnboardingStep(5);
    }
  };

  return (
    <div className={styles.formContainer}>
      <p>How should we contact you? Type in your email address.</p>
      <InputField
        onChange={setEmail}
        placeholder="Email address"
        type="email"
        value={email}
        required
        onSubmit={handleNextStep}
      />
    </div>
  );
};

export default FormSecond;
