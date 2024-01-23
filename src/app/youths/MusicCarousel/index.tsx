"use client";
import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import AliceCarousel from "react-alice-carousel";

import { CarouselButton } from "@/components/Carousel";

import "react-alice-carousel/lib/alice-carousel.css";
import styles from "@/components/Testimonies/TestimoniesCarousel/carousel.module.scss";

interface MusicCarouselProps {
  children: React.ReactNode;
}

const MusicCarousel: React.FC<MusicCarouselProps> = ({ children }) => {
  const [responsive] = useState({
    0: { items: 1.7 },
    1000: { items: 6 },
  });

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
    <div className={styles["testimony__carousel"]}>
      <AliceCarousel
        disableDotsControls
        keyboardNavigation
        responsive={responsive}
        disableButtonsControls
        ref={carouselRef}
      >
        {children}
      </AliceCarousel>
      <div className={styles["testimony__button-wrapper"]}>
        <div className={styles["testimony__carousel-buttons-wrapper"]}>
          <CarouselButton
            icon="arrowLeftCircle"
            onClick={handlePrevButtonClick}
          />
          <CarouselButton
            icon="arrowRightCircle"
            onClick={handleNextButtonClick}
          />
        </div>
      </div>
    </div>
  );
};

// export default MusicCarousel;
export default dynamic(() => Promise.resolve(MusicCarousel), {
  ssr: false,
});
