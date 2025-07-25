"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import styles from "./style.module.css";
import { Button } from "@/components/Button";
import { useOnboardingStep } from "@/store/useOnboardingStep";
import { useBackgroundChange } from "@/store/useBackgroundChange";

const Welcome = () => {
  const { setOnboardingStep } = useOnboardingStep();
  const { setGradientType } = useBackgroundChange();
  const refWelcomeText = React.useRef<HTMLDivElement>(null);
  const refButton = React.useRef<HTMLButtonElement>(null);
  const refButtonText = React.useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    setGradientType("gradient1");

    gsap.fromTo(
      refWelcomeText.current,
      {
        opacity: 0,
      },
      { opacity: 1, duration: 0.2, ease: "power2.in" }
    );

    gsap.fromTo(
      refButton.current,
      {
        opacity: 0,
      },
      { opacity: 1, duration: 0.2, ease: "power2.in" }
    );

    gsap.fromTo(refButtonText.current, { x: 30 }, { x: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.welcomeContainer}>
      <h1 ref={refWelcomeText}>
        Compare your thoughts on <span className="gradient-text">technology</span> with current
        industry opinions.
      </h1>
      <Button
        ref={refButton}
        text={<p ref={refButtonText}>Get a reality check</p>}
        type="primary"
        onClick={() => {
          gsap.to(refButtonText.current, { x: 30 });
          gsap.to(refWelcomeText.current, { opacity: 0 });
          gsap.to(refButton.current, {
            opacity: 0,
            duration: 0.2,
            onComplete: () => setOnboardingStep(2),
          });
        }}
      />
    </div>
  );
};

export default Welcome;
