"use client";

import React from "react";
import SwiperDots from "@/app/components/SwiperDots";
import styles from "./style.module.css";
import { Button } from "@/components/Button";
import { SwipeIndex, useOnboardingStep } from "@/store/useOnboardingStep";
import { useSwiper } from "@/store/useSwiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Introduction = () => {
  const { setOnboardingStep, setSwipeIndex, swipeIndex } = useOnboardingStep();
  const { setSwiper, slideNext } = useSwiper();

  return (
    <div className={styles.introductionContainer}>
      <Swiper
        style={{ height: "fit-content", width: "100%" }}
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
          <Button text="Get started" type="light" onClick={() => setOnboardingStep(3)} />
        ) : (
          <Button text="Continue" type="dark" onClick={() => slideNext()} />
        )}
      </div>
    </div>
  );
};

export default Introduction;
