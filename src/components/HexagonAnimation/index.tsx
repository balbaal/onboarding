"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useOnboardingStep } from "@/store/useOnboardingStep";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import jb2gLottie from "@/assets/animations/JB2G_Lottie.json";
import { wait } from "@/helper/utils";
import style from "./style.module.css";

const HexagonAnimation = () => {
  const { onboardingStep } = useOnboardingStep();

  const refHexagonGradient = useRef(null);
  const refHexagonFlat = useRef(null);
  const refFloatingContent = useRef(null);
  const refJb2gLottie = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    const runLoop = async () => {
      if (!refJb2gLottie.current) return;

      while (true) {
        refJb2gLottie.current?.play();
        refJb2gLottie.current.setDirection(1);
        refJb2gLottie.current.setSpeed(10);
        refJb2gLottie.current.playSegments([0, 120], true);
        await wait(1000);

        await wait(700);

        refJb2gLottie.current.setDirection(-1);
        refJb2gLottie.current.setSpeed(10);
        refJb2gLottie.current.playSegments([120, 0], true);
        await wait(1000);

        await wait(700);
      }
    };

    if (onboardingStep === 5) {
      runLoop();
    } else {
      refJb2gLottie.current?.pause();
    }
  }, [onboardingStep]);

  useEffect(() => {
    if (onboardingStep === 1) {
      gsap.to(refHexagonGradient.current, {
        scale: 1,
      });

      gsap.to(refFloatingContent.current, {
        opacity: 1,
        duration: 0.5,
      });

      gsap.to(refHexagonFlat.current, {
        opacity: 0,
        duration: 0,
        scale: 1,
      });
    } else if (onboardingStep === 2) {
      gsap.to(refHexagonGradient.current, {
        scale: 0.5,
        transformOrigin: "top",
        opacity: 1,
      });

      gsap.to(refFloatingContent.current, {
        opacity: 0,
        duration: 0.5,
      });

      gsap.to(refHexagonFlat.current, {
        transformOrigin: "top",
        opacity: 0,
        scale: 0.5,
      });
    } else if (onboardingStep === 3) {
      gsap.to(refHexagonGradient.current, {
        scale: 0.15,
        transformOrigin: "top",
        opacity: 0,
      });

      gsap.to(refHexagonFlat.current, {
        scale: 0.15,
        transformOrigin: "top",
        opacity: 1,
      });
    }
  }, [onboardingStep]);

  return (
    <div style={{ marginTop: 50 }} className={style.hexagonContainer}>
      <Image
        ref={refHexagonGradient}
        src="/hexagon.png"
        width={274}
        height={290}
        alt="hexagon image animation"
      />

      <div style={{ position: "absolute", top: 0 }} ref={refHexagonFlat}>
        <Lottie
          lottieRef={refJb2gLottie}
          className={style.hexagonFlatContainer}
          animationData={jb2gLottie}
          loop={false}
          autoplay={false}
        />
      </div>

      <div ref={refFloatingContent} className={style.contentWrapper}>
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
