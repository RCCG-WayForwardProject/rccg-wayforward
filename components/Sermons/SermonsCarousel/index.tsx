"use client";
import React, { useState, useEffect } from "react";

import { SermonCard } from "../SermonCard";
import Carousel from "@/components/Carousel";

import styles from "./sermons-carousel.module.scss";

interface SermonCarouselProps {
  sermonsList: Array<{ img: string; name: string }>;
  handleSermonDownload?: () => void;
}

const SermonLoadingCard: React.FC = () => {
  return (
    <div className={styles["sermon__loading-card"]}>
      <div className={styles["sermon__loading-image"]}></div>
      <div className={styles["sermon__loading-name"]}>
        <div className={styles["sermon__loading-pulse"]}></div>
      </div>
      <div className={styles["sermon__loading-button"]}>
        <div className={styles["sermon__loading-pulse"]}></div>
      </div>
    </div>
  );
};

const SermonCarousel: React.FC<SermonCarouselProps> = ({ sermonsList }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [responsive] = useState({
    0: { items: 1 },
    500: { items: 2 },
    1000: { items: 3 },
  });

  useEffect(() => {
    const delay = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(delay);
  }, []);

  return (
    <div className={styles["sermon__wrapper"]}>
      {loading ? (
        <LoadingSermons />
      ) : (
        <Carousel responsive={responsive}>
          {sermonsList?.map((sermon, index) => {
            return (
              <SermonCard
                img={sermon?.img!}
                name={sermon?.name!}
                key={index + 1}
              />
            );
          })}
        </Carousel>
      )}
    </div>
  );
};

export default SermonCarousel;

const LoadingSermons = () => {
  return (
    <>
      {Array.from({ length: 5 })
        .map((_, i) => i + 1)
        .map((_, index) => {
          return <SermonLoadingCard key={index + 1} />;
        })}
    </>
  );
};
