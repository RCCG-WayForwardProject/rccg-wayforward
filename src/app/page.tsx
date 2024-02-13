"use client";
import React, { useEffect, useState, useRef } from "react";

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
import LaunchModal from "@/components/LaunchModal";

import { faq } from "@/utils/constants";
import { useClickOutside } from "@/utils/useClickOutside";

import styles from "./page.module.scss";

const Page: React.FC = () => {
  const [openLaunchModal, setOpenLaunchModal] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const isModalOpenedRef = useRef<boolean>(false);

  useClickOutside(modalRef, setOpenLaunchModal, false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1300 && !isModalOpenedRef.current) {
        setOpenLaunchModal(true);
        isModalOpenedRef.current = true;
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [openLaunchModal]);

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
      {openLaunchModal && (
        <div className={styles["page__modal-wrapper"]} ref={modalRef}>
          <LaunchModal />
        </div>
      )}
    </div>
  );
};

export default Page;
