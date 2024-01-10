"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import Icon from "@/components/Icon";
import Button from "@/components/Button";

import styles from "./about.module.scss";

interface AboutUsProps {
  showViewButton?: boolean;
  showFullText?: boolean;
}

const AboutUs: React.FC<AboutUsProps> = ({ showViewButton, showFullText }) => {
  const { push } = useRouter();

  const handleRouteToAboutPage = () => {
    push("/about-us");
  };
  return (
    <section className={styles["about-us"]}>
      <div className={styles["about-us__image-wrapper"]}>
        <div className={styles["about-us__image-cross-icon"]}>
          <Icon icon="cross" />
        </div>
        <p className={styles["about-us__image-heading"]}>About Us</p>
        <div className={styles["about-us__image-container"]}>
          <Image
            src={"/images/teamImage.svg"}
            fill={true}
            priority={false}
            loading={"lazy"}
            alt="Mixed image of people with different color"
          />
        </div>
        <h2 className={styles["about-us__image-text"]}>
          Experience Exceptional Worship and Life-Impacting Word at Our Church
          in Concord
        </h2>
      </div>

      <div className={styles["about-us__description-wrapper"]}>
        <h1 className={styles["about-us__description-heading"]}>About Us</h1>
        <p className={styles["about-us__description"]}>
          Welcome to WayForward Cathedral, a parish of the Redeemed Christian
          Church of God in Concord. Here, we believe in worshipping God in
          spirit and truth with the pure Word of God as our guiding light
          towards impacting lives. We take pride in the unique and profound way
          we worship, bringing down God’s presence to create an atmosphere that
          transcends the ordinary. <br />
          {!showFullText && <span>Our Worship, Bible study and...</span>}
        </p>
        {showFullText ? (
          <>
            <p className={styles["about-us__description"]}>
              Our worship, Bible study, and prayer sessions embody the core of
              true Christian fellowship: To be thoroughly replenished by the
              gathering of the saints (Heb. 10:25). We believe in creating an
              enabling environment where Christians from around the world can
              worship without limitations and experience authentic fellowship.
              <br />
            </p>

            <p className={styles["about-us__description"]}>
              Furthermore, we’re not limited to only believers. Anyone looking
              to enjoy the deliverance and saving grace of our Lord Jesus Christ
              is welcome. <br /> “Come unto me, all ye that labor and are
              heavily laden, and I will give you rest. Take my yoke upon you,
              and learn of me; for I am meek and lowly in heart: and ye shall
              find rest unto your souls. For my yoke is easy, and my burden is
              light” — Matthew 11:28-30.
            </p>
          </>
        ) : null}
        {showViewButton ? (
          <Button
            label="View More"
            type="button"
            variant="primary"
            size="small"
            handleClick={handleRouteToAboutPage}
          />
        ) : null}
      </div>
    </section>
  );
};

export default AboutUs;
