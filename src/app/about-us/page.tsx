import React from "react";

import AboutUs from "@/components/About";
import Mission from "@/components/Mission";
import Vision from "@/components/Vision";
import Services from "@/components/Service";
import VideoPlayer from "@/components/Video";
import Testimonies from "@/components/Testimonies";
import Donation from "@/components/Donation";
import Prayer from "@/components/Prayer";
import FAQ from "@/components/FAQ";

import styles from "./about-us.module.scss";

const AboutPage: React.FC = () => {
  return (
    <div className={styles["about-us"]}>
      <AboutUs showViewButton={false} showFullText />
      <Mission />
      <Vision />
      <Services />
      <VideoPlayer />
      <Testimonies style={{ justifyContent: "center" }} />
      <Donation />
      <Prayer />
      <FAQ />
    </div>
  );
};

export default AboutPage;
