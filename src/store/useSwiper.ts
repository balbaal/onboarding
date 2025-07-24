import { SwiperClass } from "swiper/react";
import { create } from "zustand";

type SwiperState = {
  swiperInstance: SwiperClass | null;
  // eslint-disable-next-line no-unused-vars
  setSwiper: (swiper: SwiperClass) => void;
  slideNext: () => void;
  slidePrev: () => void;
};

export const useSwiper = create<SwiperState>((set, get) => ({
  swiperInstance: null,
  setSwiper: (swiper) => set({ swiperInstance: swiper }),
  slideNext: () => {
    const swiper = get().swiperInstance;
    if (swiper) swiper.slideNext();
  },
  slidePrev: () => {
    const swiper = get().swiperInstance;
    if (swiper) swiper.slidePrev();
  },
}));
