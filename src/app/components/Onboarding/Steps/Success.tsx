import React, { useEffect, useRef } from "react";
import styles from "./style.module.css";
import { useOnboardingStep } from "@/store/useOnboardingStep";
import gsap from "gsap";
import { Button } from "@/components/Button";

const Success = () => {
  const { name } = useOnboardingStep();

  const refContentText = useRef<HTMLDivElement>(null);
  const refSuccessButton = useRef<HTMLButtonElement>(null);
  const refSuccessButtonText = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.fromTo(
      refContentText.current,
      {
        opacity: 0,
      },
      { opacity: 1, duration: 0.2, ease: "power2.in" }
    );

    gsap.fromTo(
      refSuccessButton.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );

    gsap.fromTo(refSuccessButtonText.current, { x: -30 }, { x: 0 });
  }, []);

  return (
    <div className={styles.successContainer}>
      <div ref={refContentText} style={{ marginTop: "-210px" }} className={styles.successContent}>
        <p>Thanks, {name}! Now, it’s time to get a reality check.</p>
        <p>This will take 2-3 minutes. </p>
      </div>
      <Button
        ref={refSuccessButton}
        text={<p ref={refSuccessButtonText}>Continue</p>}
        type="light"
        onClick={() => {}}
      />
    </div>
  );
};

export default Success;
