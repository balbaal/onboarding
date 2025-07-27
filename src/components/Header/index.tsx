"use client";

import React from "react";
import { StepNumber, SwipeIndex, useOnboardingStep } from "@/store/useOnboardingStep";
import { useSwiper } from "@/store/useSwiper";
import styles from "./style.module.css";
import ButtonControl from "../ButtonControl";
import ArrowLeftIcon from "@/assets/icons/arrow-left.svg";
import RefreshIcon from "@/assets/icons/refresh.svg";

import J from "@/assets/images/brand-character/j.svg";
import U from "@/assets/images/brand-character/u.svg";
import I from "@/assets/images/brand-character/I.svg";
import C from "@/assets/images/brand-character/C.svg";
import E from "@/assets/images/brand-character/E.svg";
import B from "@/assets/images/brand-character/B.svg";
import O from "@/assets/images/brand-character/O.svg";
import X from "@/assets/images/brand-character/X.svg";

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
      <div className={styles.BrandWrap}>
        <J className={styles.Char1} />
        <U className={styles.Char2} />
        <I className={styles.Char3} />
        <C className={styles.Char4} />
        <E className={styles.Char5} />
        <B className={styles.Char6} />
        <O className={styles.Char7} />
        <X className={styles.Char8} />
      </div>
      <ButtonControl
        ariaLabel="refresh button for go back to first onboarding"
        onClick={handleClickRefresh}
        icon={<RefreshIcon width={20} height={20} />}
      />
    </div>
  );
};

export default Header;
