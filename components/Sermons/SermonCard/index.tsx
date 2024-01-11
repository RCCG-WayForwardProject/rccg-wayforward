import React from "react";
import Image from "next/image";

import Button from "@/components/Button";

import styles from "./sermon-card.module.scss";

interface SermonCardProps {
  img: string;
  name: string;
}

export const SermonCard: React.FC<SermonCardProps> = ({ name, img }) => {
  return (
    <div className={styles["sermon"]}>
      <div className={styles["sermon__image"]}>
        <Image src={img} fill loading="lazy" alt="Sermon Image" />
      </div>
      <p className={styles["sermon__name"]}>{name}</p>
      <Button
        type="button"
        label="Download"
        variant="secondary"
        size="medium"
      />
    </div>
  );
};
