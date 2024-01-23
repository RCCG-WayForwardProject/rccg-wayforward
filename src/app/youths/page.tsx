"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import LoadingCard from "@/components/LoadingCard";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import MusicCard from "@/components/Songs/MusicCard";
import MusicCarousel from "./MusicCarousel";
import Services from "@/components/Service";
import Blogs from "@/components/Blog";

import { youthFaq } from "@/utils/constants";
import { musics } from "@/utils/constants";

import styles from "./youth.module.scss";

const YouthsPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1300);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      <div className={styles["children"]}>
        <div className={styles["children__banner-image"]}>
          <div className={styles["children__banner-content"]}>
            <h1 className={styles["children__banner-content-heading"]}>
              Youth Zone: Fellowship, Faith & Fun
            </h1>
            <p className={styles["children__banner-content-description"]}>
              Remember your Creator in the days of your youth, before the days
              of trouble come and the years approach when you will say, I find
              no pleasure in them - Ecclesiastes 12:1
            </p>
          </div>
        </div>
        <div className={styles["children__content-wrapper"]}>
          <div className={styles["children__pastor-profile-section"]}>
            <div className={styles["children__pastor-profile-image"]}>
              <Image
                src={"/images/children-pastor.jpg"}
                alt="Image of pastor with wife"
                fill
              />
            </div>

            <div className={styles["children__pastor-profile-content-wrapper"]}>
              <h1
                className={styles["children__pastor-profile-content-heading"]}
              >
                Welcome to the Youth Zone!
              </h1>
              <p className={styles["children__pastor-profile-content"]}>
                We believe the best way for students to experience God is
                through building relationships with each other. In this safe
                space, you can relax and be real as you learn more about your
                awesome Creator.
                <br />
                <br />
                Whether through casual hangouts, service projects or deep
                discussions about life&apos;s big questions, our goal is to
                support each person&apos;s spiritual journey. As the Bible says,
                &quot;As iron sharpens iron, so one person sharpens
                another.&quot;
                <br />
                <br />
                There is no judgment here - only an open door to ask anything on
                your mind, share laughs and grow stronger together in community.
                We aim to challenge one another to closer walks with Christ
                through authentic fellowship.
                <br />
                <br />
                Our prayer is that you leave feeling empowered yet grounded in
                God&apos;s unconditional love. No matter what&apos;s going on in
                your life, know that you are not alone and this group is here
                for you.
                <br />
                <br />
                We can&apos;t wait to welcome both familiar and new faces into
                this journey. Wherever you&apos;re at in faith, you&apos;ve
                found a home in the Youth Zone!
              </p>
            </div>
          </div>

          <div className={styles["children__music-section"]}>
            <div className={styles["children__music-heading-wrapper"]}>
              <h1 className={styles["children__music-heading"]}>
                Youth Praise Playlist
              </h1>
              <p className={styles["children__music-description"]}>
                Lifting our voices in praise together is such a powerful way to
                hold onto truth even in hard times. It is my hope and prayer
                that through this music, you experience God&apos;s presence
                afresh and find a new perspective on whatever life may bring
                your way.
              </p>
            </div>
            <div className={styles["children__music-content-wrapper"]}>
              {loading ? (
                <div className={styles["children__music-loader"]}>
                  <LoadingItems />
                </div>
              ) : (
                <div className={styles["children__music-carousel-wrapper"]}>
                  <MusicCarousel>
                    {musics?.map((music, index) => {
                      return (
                        <div
                          className={styles["children__music"]}
                          key={index + 1}
                        >
                          <MusicCard
                            src={music?.src}
                            name={music?.name}
                            authorName={music?.authorName}
                            duration={music?.musicLength}
                            img={music?.img}
                          />
                        </div>
                      );
                    })}
                  </MusicCarousel>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Services />
      <Blogs />
      <div className={styles["children__faq-wrapper"]}>
        <FAQ faq={youthFaq} />
      </div>
      <Contact />
    </>
  );
};

export default YouthsPage;

const LoadingItems = () => {
  return (
    <>
      {Array.from({ length: 5 })
        .map((_, i) => i + 1)
        .map((_, index) => {
          return <LoadingCard key={index + 1} />;
        })}
    </>
  );
};
