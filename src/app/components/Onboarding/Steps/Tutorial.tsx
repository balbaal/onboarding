"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SwiperDots from "@/app/components/SwiperDots";
import styles from "./style.module.css";
import { Button } from "@/components/Button";
import { SwipeIndex, useOnboardingStep } from "@/store/useOnboardingStep";
import { useSwiper } from "@/store/useSwiper";
import { useBackgroundChange } from "@/store/useBackgroundChange";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Tutorial = () => {
  const { setOnboardingStep, setSwipeIndex, swipeIndex, onboardingStep } = useOnboardingStep();
  const { setSwiper, slideNext, swiperInstance } = useSwiper();
  const { setGradientType } = useBackgroundChange();

  const refSliderContent = useRef(null);
  const refButtonContinue = useRef<HTMLButtonElement>(null);
  const refButtonContinueText = useRef<HTMLParagraphElement>(null);
  const refButtonStarted = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (onboardingStep === 2) {
      gsap.to(refSliderContent.current, {
        opacity: 1,
        duration: 4,
        ease: "power2.in",
      });
    } else {
      gsap.to(refSliderContent.current, {
        opacity: 0.5,
        duration: 4,
        ease: "power2.out",
      });
    }
  }, [onboardingStep]);

  useEffect(() => {
    if (swipeIndex < 2) {
      gsap.fromTo(
        refButtonContinue.current,
        {
          opacity: 0,
          duration: 0.1,
        },
        { opacity: 1, duration: 0.1 }
      );

      gsap.fromTo(
        refButtonContinueText.current,
        {
          x: -30,
        },
        {
          x: 0,
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (swiperInstance) swiperInstance.slideTo(swipeIndex, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swiperInstance]);

  useEffect(() => {
    if (swipeIndex === 0) {
      setGradientType("gradient2");
    } else {
      setGradientType("gradient1");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swipeIndex]);

  return (
    <div ref={refSliderContent} className={styles.introductionContainer}>
      <Swiper
        style={{ height: "fit-content", width: "100%", marginTop: "-120px" }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={(swipeIndex) => setSwipeIndex(swipeIndex.activeIndex as SwipeIndex)}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
      >
        <SwiperSlide>
          <p>
            Professionals around the world shared how they feel abo
            <span>ut technology and I’ve listened. Now it’s your turn.</span>
          </p>
        </SwiperSlide>

        <SwiperSlide>
          <p>
            I’ll ask you a handful of meaningful questions{" "}
            <span>and compare your responses with people in your industry.</span> 
          </p>
        </SwiperSlide>

        <SwiperSlide>
          <p>
            You’ll get insights into current industry sentiments an
            <span>d a reality check about technology in a few minutes. Deal? Great!</span>
          </p>
        </SwiperSlide>
      </Swiper>
      <div className={styles.swiperFooter}>
        <SwiperDots totalSwiper={3} activeIndex={swipeIndex} />

        {swipeIndex === 2 ? (
          <Button
            ref={refButtonStarted}
            text="Get started"
            type="light"
            onClick={() =>
              gsap.to(refButtonStarted.current, {
                opacity: 0,
                duration: 0.1,
                onComplete: () => {
                  setOnboardingStep(3);
                },
              })
            }
          />
        ) : (
          <Button
            ref={refButtonContinue}
            text={<p ref={refButtonContinueText}>Continue</p>}
            type="dark"
            onClick={() => {
              slideNext();
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Tutorial;
