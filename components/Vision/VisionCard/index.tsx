"use client";
import React, { useState } from "react";
import styles from "./vision-card.module.scss";

interface VisionCardProps {
  title: string;
  content: string;
}

const VisionCard: React.FC<VisionCardProps> = ({ title, content }) => {
  const [activeCard, setActiveCard] = useState<boolean>(false);

  const handleToggleActiveCard = () => {
    setActiveCard(!activeCard);
  };

  return (
    <div
      className={styles["vision-card"]}
      onClick={handleToggleActiveCard}
      data-active={Boolean(activeCard === true)}
    >
      <p className={styles["vision-card__title"]}>{title} </p>
      <p className={styles["vision-card__content"]}>{content} </p>
    </div>
  );
};

export default VisionCard;
