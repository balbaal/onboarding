"use client";

import React from "react";
import Header from "@/components/Header";
import { useBackgroundChange } from "@/store/useBackgroundChange";
import HexagonAnimation from "@/components/HexagonAnimation";
import styles from "./style.module.css";

const LayoutClient: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { gradientType } = useBackgroundChange();

  return (
    <div className={`${styles.wrapper} container ${styles[gradientType]}`}>
      <Header />
      <HexagonAnimation />
      {children}
    </div>
  );
};

export default LayoutClient;
