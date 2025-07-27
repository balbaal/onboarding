"use client";

import React from "react";
import Homepage from "./Steps/Homepage";
import Tutorial from "./Steps/Tutorial";
import FormFirst from "./Steps/FormFirst";
import FormSecond from "./Steps/FormSecond";
import Result from "./Steps/Result";
import { useOnboardingStep, StepNumber } from "@/store/useOnboardingStep";

const Onboarding = () => {
  const { onboardingStep } = useOnboardingStep();

  type Steps = {
    // eslint-disable-next-line no-unused-vars
    [key in StepNumber]: React.ReactNode;
  };

  const steps: Steps = {
    1: <Homepage />,
    2: <Tutorial />,
    3: <FormFirst />,
    4: <FormSecond />,
    5: <Result />,
  };

  return <>{steps[onboardingStep]}</>;
};

export default Onboarding;
