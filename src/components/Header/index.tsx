"use client";

import React from "react";
import Image from "next/image";
import { StepNumber, SwipeIndex, useOnboardingStep } from "@/store/useOnboardingStep";
import { useSwiper } from "@/store/useSwiper";
import styles from "./style.module.css";
import ButtonControl from "../ButtonControl";
import ArrowLeftIcon from "@/assets/icons/arrow-left.svg";
import RefreshIcon from "@/assets/icons/refresh.svg";

const Header = () => {
  const { setOnboardingStep, setSwipeIndex, swipeIndex, onboardingStep } = useOnboardingStep();
  const { slidePrev } = useSwiper();

  const handleClickBack = () => {
    if (onboardingStep === 2 && swipeIndex > 0) {
      setSwipeIndex((swipeIndex - 1) as SwipeIndex);
      slidePrev();
      return;
    }

    if (onboardingStep > 1) {
      setOnboardingStep((onboardingStep - 1) as StepNumber);
    }
  };

  const handleClickRefresh = () => {
    // reset();
    window.location.reload();
  };

  return (
    <div className={styles.headerContainer}>
      <div className={onboardingStep > 1 ? "" : styles.hidden}>
        <ButtonControl
          ariaLabel="prev button to back step"
          onClick={handleClickBack}
          icon={<ArrowLeftIcon width={20} height={20} />}
        />
      </div>
      <Image
        src="/juicebox-logo-white.svg"
        alt="juice box brand logo white"
        width={123}
        height={29}
      />
      <ButtonControl
        ariaLabel="refresh button for go back to first onboarding"
        onClick={handleClickRefresh}
        icon={<RefreshIcon width={20} height={20} />}
      />
    </div>
  );
};

export default Header;
