"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import { useClickOutside } from "@/utils/useClickOutside";
import { testimonies } from "@/utils/constants";

import Button from "../Button";
import LoadingCard from "../LoadingCard";
import TestimoniesCarousel from "./TestimoniesCarousel";
import TestimonyModal from "./TestimonyModal";
import TestimonyCard from "./TestimoniesCarousel/TestimonyCard";

import styles from "./testimonies.module.scss";

interface TestimoniesProps {
  style?: React.CSSProperties;
}
const Testimonies: React.FC<TestimoniesProps> = ({ style }) => {
  const [testimonyName, setTestimonyName] = useState<string>("");
  const [testimony, setTestimony] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const { push } = useRouter();

  const handleRouteToTestimoniesPage = () => {
    push("/testimonies");
  };

  const handleViewMore = (name: string, testimony: string) => {
    setTestimonyName(name);
    setTestimony(testimony);
    setOpenModal(!openModal);
  };

  useClickOutside(modalRef, setOpenModal, false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1300);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className={styles["testimonies"]} style={style}>
      <div className={styles["testimonies__heading-container"]}>
        <h1 className={styles["testimonies__heading"]}>Testimonies</h1>
        <h2 className={styles["testimonies__subheading"]}>
          <span>Inspiring testimonies</span> you shouldn&apos;t miss
        </h2>
      </div>
      <div className={styles["testimonies__description-container"]}>
        <p className={styles["testimonies__description"]}>
          Read inspiring testimonies from some of our brethren whose lives have
          been changed by the Lord since becoming part of our church. Their
          stories remind us of the wonders possible when we truly connect to the
          incredible power of God, which is abundant in Wayforward Cathedral.
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
          >
            {testimonies?.map((testimony, index) => {
              return (
                <TestimonyCard
                  key={index + 1}
                  name={testimony?.name}
                  testimony={testimony?.testimony}
                  handleViewMore={() =>
                    handleViewMore(testimony?.name, testimony?.testimony)
                  }
                />
              );
            })}
          </TestimoniesCarousel>
        )}
      </div>
      {openModal && (
        <div className={styles["testimonies__modal-wrapper"]} ref={modalRef}>
          <TestimonyModal name={testimonyName} content={testimony} />
        </div>
      )}
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
