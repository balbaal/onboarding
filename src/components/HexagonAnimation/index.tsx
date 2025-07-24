"use client";

import React from "react";
import Image from "next/image";
import style from "./style.module.css";
import { useOnboardingStep } from "@/store/useOnboardingStep";

const HexagonAnimation = () => {
  const { onboardingStep } = useOnboardingStep();

  return (
    <div style={{ marginTop: 50 }} className={style.hexagonContainer}>
      <Image src="/hexagon.svg" width={274} height={290} alt="hexagon image animation" />
      <div className={`${style.contentWrapper} ${onboardingStep > 1 ? style.hide : ""}`}>
        <p style={{ top: 20, left: 0 }}>WA businesses feel confident about future growth</p>
        <p style={{ top: 60, right: 0 }}>AI cant replace creativity</p>
        <p style={{ top: 120, left: 0 }}>Sales measure true success</p>
        <p style={{ bottom: 100, right: 0 }}>Human connection drives WA business</p>
        <p style={{ bottom: 20, left: 0 }}>
          The primary barrier to digital <br />
          transformation is financial investment
        </p>
      </div>
    </div>
  );
};

export default HexagonAnimation;
