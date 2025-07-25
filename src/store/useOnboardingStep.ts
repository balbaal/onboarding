/* eslint-disable no-unused-vars */
import { create } from "zustand";

export type StepNumber = 1 | 2 | 3 | 4 | 5;
export type SwipeIndex = 1 | 2 | 3;

interface OnboardingState {
  onboardingStep: StepNumber;
  setOnboardingStep: (step: StepNumber) => void;
  swipeIndex: number;
  setSwipeIndex: (index: SwipeIndex) => void;
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  reset: () => void;
}

export const useOnboardingStep = create<OnboardingState>((set) => ({
  onboardingStep: 1,
  setOnboardingStep: (step) => set({ onboardingStep: step }),
  swipeIndex: 0,
  setSwipeIndex: (index) => set({ swipeIndex: index }),
  name: "",
  setName: (name) => set({ name }),
  email: "",
  setEmail: (email) => set({ email }),
  reset: () =>
    set({
      onboardingStep: 1,
      swipeIndex: 0,
      name: "",
      email: "",
    }),
}));
