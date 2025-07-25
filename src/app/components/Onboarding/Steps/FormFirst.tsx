import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import InputField from "@/components/InputField";
import styles from "./style.module.css";

import { useOnboardingStep } from "@/store/useOnboardingStep";

const FormFirst = () => {
  const { name, setName, setOnboardingStep } = useOnboardingStep();
  const refContentText = useRef<HTMLDivElement>(null);

  const handleNextStep = () => {
    if (name) {
      setOnboardingStep(4);
    }
  };

  useEffect(() => {
    gsap.fromTo(
      refContentText.current,
      {
        opacity: 0,
      },
      { opacity: 1, duration: 0.2, ease: "power2.in" }
    );
  }, []);

  return (
    <div className={styles.formContainer}>
      <p ref={refContentText} style={{ marginTop: "-210px" }}>
        Let’s start with the basics. Type in your first name.
      </p>
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
