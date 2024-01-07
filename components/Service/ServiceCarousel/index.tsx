"use client";
import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import Image from "next/image";

import Icon from "@/components/Icon";
import Button from "@/components/Button";
import { CarouselButton } from "@/components/Carousel";

import { services } from "@/utils/constants";

import "react-alice-carousel/lib/alice-carousel.css";
import styles from "./carousel.module.scss";

interface ServiceCardProps {
  img: string;
  name: string;
  day: string;
  location: string;
}

interface ServicesCarouselProps {}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  img,
  name,
  day,
  location,
}) => {
  return (
    <div className={styles["services__service"]}>
      <div className={styles["services__service-image"]}>
        <Image
          src={`/images/${img}`}
          fill
          alt="Service image"
          loading="lazy"
          style={{ borderRadius: "13px" }}
        />
      </div>
      <div className={styles["services__service-content-wrapper"]}>
        <p className={styles["services__service-name"]}>{name}</p>
        <div className={styles["services__service-day-wrapper"]}>
          <Icon icon="calendar" />
          <p className={styles["services__service-day"]}>{day}</p>
        </div>
        <div className={styles["services__service-location-wrapper"]}>
          <Icon icon="location" />
          <p className={styles["services__service-location"]}>{location}</p>
        </div>
        <Button
          type="button"
          label="Set Reminder"
          variant="primary"
          size="small"
        />
      </div>
    </div>
  );
};

const ServicesCarousel: React.FC<ServicesCarouselProps> = ({}) => {
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

export default ServicesCarousel;
