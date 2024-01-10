"use client";
import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";

import Button from "@/components/Button";
import { CarouselButton } from "@/components/Carousel";

import "react-alice-carousel/lib/alice-carousel.css";
import styles from "./carousel.module.scss";
import dynamic from "next/dynamic";

interface TestimoniesCarouselProps {
  handleGoToTestimoniesPage?: () => void;
  children: React.ReactNode;
}

const TestimoniesCarousel: React.FC<TestimoniesCarouselProps> = ({
  handleGoToTestimoniesPage,
  children,
}) => {
  const [responsive] = useState({
    0: { items: 1.1 },
    500: { items: 2 },
    1000: { items: 3.5 },
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
        <div className={styles["testimony__button"]}>
          <Button
            label="View All Testimony"
            type="button"
            variant="primary"
            size="mini"
            handleClick={handleGoToTestimoniesPage}
          />
        </div>
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

// export default TestimoniesCarousel;
export default dynamic(() => Promise.resolve(TestimoniesCarousel), {
  ssr: false,
});
