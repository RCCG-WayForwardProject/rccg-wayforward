import React from "react";

import Contact from "@/components/Contact";

import styles from "./children.module.scss";

const ChildrenPage: React.FC = () => {
  return (
    <>
      <div className={styles["children"]}>
        <div className={styles["children__banner-image"]}></div>
      </div>
      <Contact />
    </>
  );
};

export default ChildrenPage;
