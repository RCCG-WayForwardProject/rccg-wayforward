"use client";
import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import dynamic from "next/dynamic";

import { CarouselButton } from "@/components/Carousel";
import { ServiceCard } from "../ServiceCard";

import { services } from "@/utils/constants";

import "react-alice-carousel/lib/alice-carousel.css";
import styles from "./carousel.module.scss";

interface ServicesCarouselProps {
  handleReminderButton?: () => void;
}

const ServicesCarousel: React.FC<ServicesCarouselProps> = ({
  handleReminderButton,
}) => {
  const [responsive] = useState({
    0: { items: 1.2 },
    800: { items: 2 },
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
    <div className={styles["services__carousel"]}>
      <AliceCarousel
        disableDotsControls
        keyboardNavigation
        responsive={responsive}
        disableButtonsControls
        ref={carouselRef}
      >
        {services?.map((service, index) => {
          return (
            <ServiceCard
              key={index + 1}
              name={service?.name}
              img={service?.img}
              location={service?.location}
              day={service?.day}
              handleReminderButton={handleReminderButton}
            />
          );
        })}
      </AliceCarousel>
      <div className={styles["services__button-wrapper"]}>
        <div className={styles["services__carousel-buttons-wrapper"]}>
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

// export default ServicesCarousel;
export default dynamic(() => Promise.resolve(ServicesCarousel), { ssr: false });
