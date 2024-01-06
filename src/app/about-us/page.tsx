import React from "react";
import AboutUs from "@/components/About";

import styles from "./about-us.module.scss";
import Mission from "@/components/Mission";

const AboutPage: React.FC = () => {
  return (
    <div className={styles["about-us"]}>
      <AboutUs showViewButton={false} showFullText />
      <Mission />
    </div>
  );
};

export default AboutPage;
