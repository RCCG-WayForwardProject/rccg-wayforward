import React from "react";

import styles from "./modal.module.scss";

interface TestimonyModalProps {
  name?: string;
  content?: string;
}

const TestimonyModal: React.FC<TestimonyModalProps> = ({ name, content }) => {
  return (
    <div className={styles["modal"]}>
      <h1 className={styles["modal__heading"]}>{name}</h1>
      <p className={styles["modal__description"]}>{content}</p>
    </div>
  );
};

export default TestimonyModal;
