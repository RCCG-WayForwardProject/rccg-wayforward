"use client";
import React, { useState, useRef, Suspense } from "react";
import dynamic from "next/dynamic";
import AliceCarousel from "react-alice-carousel";

import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { IconNames } from "@/utils/icon";

import styles from "./sermons-carousel.module.scss";

interface CustomButtonProps {
  icon: string;
  onClick: () => void;
}

interface SermonCarouselProps {
  sermonsList: Array<{ img: string; name: string }>;
  handleSermonDownload?: () => void;
}

export const CarouselButton: React.FC<CustomButtonProps> = ({
  icon,
  onClick,
}) => {
  return (
    <button
      className={styles["sermon__carousel-controls"]}
      onClick={onClick}
      type="button"
    >
      <Icon icon={icon as IconNames} />
    </button>
  );
};

const SermonCarousel: React.FC<SermonCarouselProps> = ({ sermonsList }) => {
  const carouselRef = useRef<AliceCarousel>(null);
  const [responsive] = useState({
    0: { items: 1 },
    500: { items: 2 },
    1000: { items: 3 },
  });

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
    <div className={styles["sermon__wrapper"]}>
      <CarouselButton icon="arrowLeftCircle" onClick={handlePrevButtonClick} />
      <AliceCarousel
        autoPlay
        autoPlayInterval={10000}
        disableDotsControls
        disableButtonsControls
        mouseTracking
        responsive={responsive}
        ref={carouselRef}
      >
        {sermonsList?.map((sermon, index) => {
          return (
            <div key={index + 1} className={styles["sermon"]}>
              <div className={styles["sermon__image"]}>
                <Suspense fallback={<h3>Loading</h3>}>
                  <img
                    src={`/images/${sermon?.img}`}
                    loading="lazy"
                    alt="Sermon Image"
                  />
                </Suspense>
              </div>
              <p className={styles["sermon__name"]}>{sermon?.name}</p>
              <Button
                type="button"
                label="Download"
                variant="secondary"
                size="medium"
              />
            </div>
          );
        })}
      </AliceCarousel>
      <div className={styles["custom-buttons-wrapper"]}>
        <CarouselButton
          icon="arrowRightCircle"
          onClick={handleNextButtonClick}
        />
      </div>
    </div>
  );
};

export default SermonCarousel;
// export default dynamic(() => Promise.resolve(SermonCarousel), { ssr: false });
