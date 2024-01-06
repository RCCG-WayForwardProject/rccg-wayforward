import React from "react";

import styles from "./testimony-card.module.scss";

interface TestimonyCardProps {
  name: string;
  testimony: string;
  handleClick?: () => void;
}

const TestimonyCard: React.FC<TestimonyCardProps> = ({
  name,
  testimony,
  handleClick,
}) => {
  return (
    <div className={styles["testimony-card"]}>
      <p className={styles["testimony-card__name"]}>{name} </p>
      <p className={styles["testimony-card__content"]}>{testimony}</p>
      <button
        onClick={handleClick}
        className={styles["testimony-card__button"]}
      >
        View All
      </button>
    </div>
  );
};

export default TestimonyCard;
