import React from "react";
import styles from "./style.module.css";
import { useOnboardingStep } from "@/store/useOnboardingStep";
import { Button } from "@/components/Button";

const Success = () => {
  const { name } = useOnboardingStep();

  return (
    <div className={styles.successContainer}>
      <div className={styles.successContent}>
        <p>Thanks, {name}! Now, it’s time to get a reality check.</p>
        <p>This will take 2-3 minutes. </p>
      </div>
      <Button text="Continue" type="light" onClick={() => {}} />
    </div>
  );
};

export default Success;
