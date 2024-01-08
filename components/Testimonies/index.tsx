"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Button from "../Button";
import LoadingCard from "../LoadingCard";
import TestimoniesCarousel from "./TestimoniesCarousel";

import styles from "./testimonies.module.scss";

interface TestimoniesProps {
  style?: React.CSSProperties;
}
const Testimonies: React.FC<TestimoniesProps> = ({ style }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const { push } = useRouter();

  const handleRouteToTestimoniesPage = () => {
    push("/testimonies");
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className={styles["testimonies"]} style={style}>
      <div className={styles["testimonies__heading-container"]}>
        <h1 className={styles["testimonies__heading"]}>Testimonies</h1>
        <h3 className={styles["testimonies__subheading"]}>
          <span>Inspiring testimonies</span> you shouldn&apos;t miss
        </h3>
      </div>
      <div className={styles["testimonies__description-container"]}>
        <p className={styles["testimonies__description"]}>
          Lorem ipsum dolor sit amet consectetur. Duis vulputate libero turpis
          gravida. Sit blandit bibendum molestie mattis risus velit eu. Morbi
          consectetur ut nisi massa quam purus. Morbi mauris elementum in enim
          quis semper nisl. Cursus semper cras sit elementum turpis congue
          risus. Sed ut imperdiet vitae augue iaculis duis. Nisl sit rutrum sed
          turpis dui pretium. Fermentum lectus eu turpis mi mauris aliquam et
          facilisis. Risus at phasellus sem cum elementum molestie. Eget sit.
        </p>
        <div className={styles["testimonies__description-button"]}>
          <Button
            label="Add your testimony"
            type="button"
            variant="primary"
            size="mini"
          />
        </div>
      </div>
      <div className={styles["testimonies__carousel-wrapper"]}>
        {loading ? (
          <div className={styles["testimonies__carousel-loader-wrapper"]}>
            <LoadingItems />
          </div>
        ) : (
          <TestimoniesCarousel
            handleGoToTestimoniesPage={handleRouteToTestimoniesPage}
          />
        )}
      </div>
    </div>
  );
};

export default Testimonies;

const LoadingItems = () => {
  return (
    <>
      {Array.from({ length: 7 })
        .map((_, i) => i + 1)
        .map((_, index) => {
          return <LoadingCard key={index + 1} />;
        })}
    </>
  );
};
