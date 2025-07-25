/* eslint-disable no-unused-vars */
import { create } from "zustand";

type GradientType = "gradient1" | "gradient2";

interface BackgroundChangeState {
  gradientType: GradientType;
  setGradientType: (value: GradientType) => void;
}

export const useBackgroundChange = create<BackgroundChangeState>((set) => ({
  gradientType: "gradient1",
  setGradientType: (value) => set({ gradientType: value }),
}));
