import React, { useEffect, useRef } from "react";
import InputField from "@/components/InputField";
import gsap from "gsap";
import styles from "./style.module.css";

import { useOnboardingStep } from "@/store/useOnboardingStep";
import { isValidEmail } from "@/lib/utils";

const FormSecond = () => {
  const { email, setEmail, setOnboardingStep } = useOnboardingStep();
  const refInput = useRef<HTMLInputElement>(null);
  const refContentText = useRef<HTMLDivElement>(null);

  const handleNextStep = () => {
    if (isValidEmail(email)) {
      setOnboardingStep(5);
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
        How should we contact you? Type in your email address.
      </p>
      <InputField
        ref={refInput}
        onChange={setEmail}
        placeholder="Email address"
        type="email"
        value={email}
        required
        onSubmit={() => {
          gsap.to(refInput.current, {
            opacity: 0,
            duration: 0.1,
            onComplete: () => {
              handleNextStep();
            },
          });
        }}
      />
    </div>
  );
};

export default FormSecond;
