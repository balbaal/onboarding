import React from "react";
import styles from "./style.module.css";

interface SwiperDotsProps {
  totalSwiper: number;
  activeIndex: number;
}

const SwiperDots: React.FC<SwiperDotsProps> = ({ totalSwiper, activeIndex }) => {
  return (
    <div>
      <div className={styles.swiperPagination}>
        {Array.from({ length: totalSwiper }, (_, index) => (
          <span
            key={index}
            className={`${styles.swiperPaginationBullet} ${activeIndex === index ? `${styles.swiperPaginationBulletActive}` : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SwiperDots;
