"use client";
import React, { useState, Suspense } from "react";
import dynamic from "next/dynamic";

import Button from "@/components/Button";
import Carousel from "@/components/Carousel";

import styles from "./sermons-carousel.module.scss";

interface SermonCarouselProps {
  sermonsList: Array<{ img: string; name: string }>;
  handleSermonDownload?: () => void;
}

const SermonCarousel: React.FC<SermonCarouselProps> = ({ sermonsList }) => {
  const [responsive] = useState({
    0: { items: 1 },
    500: { items: 2 },
    1000: { items: 3 },
  });

  return (
    <div className={styles["sermon__wrapper"]}>
      <Carousel responsive={responsive}>
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
      </Carousel>
    </div>
  );
};

export default SermonCarousel;
// export default dynamic(() => Promise.resolve(SermonCarousel), { ssr: false });
