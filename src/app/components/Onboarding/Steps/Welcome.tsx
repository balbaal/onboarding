"use client";

import React from "react";
import styles from "./style.module.css";
import { Button } from "@/components/Button";
import { useOnboardingStep } from "@/store/useOnboardingStep";

const Welcome = () => {
  const { setOnboardingStep } = useOnboardingStep();

  return (
    <div className={styles.welcomeContainer}>
      <h1>
        Compare your thoughts on <span className="gradient-text">technology</span> with current
        industry opinions.
      </h1>
      <Button text="Get a reality check" type="primary" onClick={() => setOnboardingStep(2)} />
    </div>
  );
};

export default Welcome;
