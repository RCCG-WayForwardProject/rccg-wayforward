"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import LoadingCard from "@/components/LoadingCard";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import MusicCard from "../musics/MusicCard";
import MusicCarousel from "./MusicCarousel";

import { childrenFaq, childrenGroup } from "@/utils/constants";
import { musics } from "@/utils/constants";

import styles from "./children.module.scss";

const ChildrenPage: React.FC = () => {
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
              Kids' Kingdom: Fun Learning & Spiritual Growth
            </h1>
            <p className={styles["children__banner-content-description"]}>
              Let the little children come to me and do not hinder them, for to
              such belongs the kingdom of heaven - Matthew 19:14
            </p>
          </div>
        </div>
        <div className={styles["children__content-wrapper"]}>
          <div className={styles["children__group-wrapper"]}>
            <h1 className={styles["children__group-heading"]}>
              Discover Your Crew
            </h1>
            <div className={styles["children__group-list-wrapper"]}>
              {childrenGroup?.map((element, index) => {
                return (
                  <div className={styles["children__group"]} key={index + 1}>
                    <div className={styles["children__group-image"]}>
                      <Image fill alt={"Group Image"} src={element?.image} />
                    </div>
                    <h1 className={styles["children__group-title"]}>
                      {element?.heading}
                    </h1>
                    <p className={styles["children__group-age"]}>
                      {element?.age}
                    </p>
                    <p className={styles["children__group-description"]}>
                      {element?.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles["children__music-section"]}>
            <div className={styles["children__music-heading-wrapper"]}>
              <h1 className={styles["children__music-heading"]}>
                Kids Praise Songs
              </h1>
              <p className={styles["children__music-description"]}>
                Check out some of our favorite songs to sing together as a
                church family! The lyrics help teach important Bible truths in a
                fun, memorable way.
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
                Sarah Joe <span>/ Children's Pastor</span>
              </h1>
              <p className={styles["children__pastor-profile-content"]}>
                I'm Sarah Joe, your Childrens Pastor here at WayForward Church.
                My goal is to provide a nurturing environment where your kids
                can develop a lifelong love for God.
                <br />
                <br />
                As Jesus said in Mark 10:14, "Let the little children come to
                me, and do not hinder them, for the kingdom of God belongs to
                such as these." In this spirit, we strive to make faith
                exploration fun through interactive Bible lessons, crafts and
                other activities.
                <br />
                <br />
                It brings me such joy witnessing the smiles and laughter of
                little ones discovering their unique talents, made in God's
                image. My hope is that with guidance, each child will find ways
                to use their gifts to serve others.
                <br />
                <br />
                I seek to support you as parents, entrusted with the care of
                these impressionable souls. Please share your ideas and prayer
                requests. Together through open communication, I believe we can
                cultivate meaningful faith in families.
                <br />
                <br />
                Do stop by after service should you want to discuss your child's
                experience. It would be my privilege to walk alongside you on
                this journey. Thank you for partnering with us in children's
                ministry. God bless!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["children__faq-wrapper"]}>
        <FAQ faq={childrenFaq} />
      </div>
      <Contact />
    </>
  );
};

export default ChildrenPage;

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
