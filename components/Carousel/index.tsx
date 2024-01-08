"use client";
import React, { useRef } from "react";
import AliceCarousel, { Responsive } from "react-alice-carousel";
import dynamic from "next/dynamic";

import Icon from "@/components/Icon";
import { IconNames } from "@/utils/icon";

import "react-alice-carousel/lib/alice-carousel.css";
import styles from "./carousel.module.scss";

interface CarouseButtonProps {
  icon: string;
  onClick?: () => void;
}

interface CarouselProps {
  children: React.ReactNode;
  contentGap?: number;
  responsive?: Responsive;
}

export const CarouselButton: React.FC<CarouseButtonProps> = ({
  icon,
  onClick,
}) => {
  return (
    <button
      className={styles["carousel__buttons"]}
      onClick={onClick}
      type="button"
    >
      <Icon icon={icon as IconNames} />
    </button>
  );
};

const Carousel: React.FC<CarouselProps> = ({
  children,
  contentGap,
  responsive,
}) => {
  const carouselRef = useRef<AliceCarousel>(null);

  const handlePrevButtonClick = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const handleNextButtonClick = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  return (
    <div className={styles["carousel__wrapper"]} style={{ gap: contentGap }}>
      <CarouselButton icon="arrowLeftCircle" onClick={handlePrevButtonClick} />
      <AliceCarousel
        // autoPlay
        autoPlayInterval={10000}
        disableDotsControls
        disableButtonsControls
        disableSlideInfo
        mouseTracking
        responsive={responsive}
        ref={carouselRef}
        keyboardNavigation
      >
        {children}
      </AliceCarousel>
      <CarouselButton icon="arrowRightCircle" onClick={handleNextButtonClick} />
    </div>
  );
};

// export default Carousel;
export default dynamic(() => Promise.resolve(Carousel), { ssr: false });
