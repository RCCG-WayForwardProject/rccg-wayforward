"use client";
import React from "react";

import Home from "@/components/Home";
import AboutUs from "@/components/About";
import Sermons from "@/components/Sermons";
import Services from "@/components/Service";
import VideoPlayer from "@/components/Video";
import Songs from "@/components/Songs";
import Testimonies from "@/components/Testimonies";
import Donation from "@/components/Donation";
import Prayer from "@/components/Prayer";
import Newsletter from "@/components/Newsletter";
import Blogs from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

import { faq } from "@/utils/constants";

import styles from "./page.module.scss";

const Page: React.FC = () => {
  return (
    <div className={styles["page"]}>
      <Home />
      <AboutUs showViewButton />
      <Sermons />
      <Services />
      <VideoPlayer />
      <Songs />
      <Testimonies />
      <Donation />
      <Prayer />
      <Newsletter />
      <Blogs />
      <FAQ faq={faq} />
      <Contact />
    </div>
  );
};

export default Page;
