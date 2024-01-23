import React, { useState } from "react";

import styles from "./accordion.module.scss";

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [openAccordion, setOpenAccordion] = useState<boolean>(false);

  const handleToggleAccordion = () => {
    setOpenAccordion(!openAccordion);
  };

  return (
    <div className={styles["accordion"]}>
      <div
        className={styles["accordion__heading-wrapper"]}
        onClick={handleToggleAccordion}
      >
        <p className={styles["accordion__heading"]}>{title} </p>
        <button className={styles["accordion__heading-button"]}>
          {openAccordion ? "-" : "+"}
        </button>
      </div>
      {openAccordion ? (
        <div className={styles["accordion__content-wrapper"]}>
          <p className={styles["accordion__content"]}>{content}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Accordion;
