"use client";

import React from "react";
import Welcome from "./Steps/Welcome";
import { useOnboardingStep, StepNumber } from "@/store/useOnboardingStep";
import Introduction from "./Steps/Introduction";
import FormFirst from "./Steps/FormFirst";
import FormSecond from "./Steps/FormSecond";
import Success from "./Steps/Success";

const Onboarding = () => {
  const { onboardingStep } = useOnboardingStep();

  type Steps = {
    // eslint-disable-next-line no-unused-vars
    [key in StepNumber]: React.ReactNode;
  };

  const steps: Steps = {
    1: <Welcome />,
    2: <Introduction />,
    3: <FormFirst />,
    4: <FormSecond />,
    5: <Success />,
  };

  return <>{steps[onboardingStep]}</>;
};

export default Onboarding;
