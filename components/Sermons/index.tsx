import React from "react";
import Image from "next/image";

import Button from "../Button";
import Icon from "@/components/Icon";
import SermonCarousel from "./SermonsCarousel";

import { sermonsList } from "@/utils/constants";

import styles from "./sermons.module.scss";

interface SermonsProps {}

const Sermons: React.FC<SermonsProps> = ({}) => {
  return (
    <section className={styles["sermons"]}>
      <div className={styles["sermons__cross-icon"]}>
        <Icon icon="cross" />
      </div>
      <div className={styles["sermons__image-wrapper"]}>
        <p className={styles["sermons__image-heading"]}>Sermons</p>
        <div className={styles["sermons__image-container"]}>
          <Image
            src={"/images/pastor_image.png"}
            width={351}
            height={462}
            priority={false}
            loading={"lazy"}
            alt="Picture of the senior pastor"
          />
        </div>
      </div>
      <div className={styles["sermons__sermons-wrapper"]}>
        <div className={styles["sermons__sermons-heading-wrapper"]}>
          <p className={styles["sermons__sermons-heading"]}>
            Catch up on our <span>Recent Sermons</span>
          </p>
          <p className={styles["sermons__sermons-heading-mobile"]}>
            Recent Sermons
          </p>
          <p className={styles["sermons__sermons-description"]}>
            Enjoy our library of sermons, each specially inspired by the Holy
            Spirit for your edification and benefit. Have a drink from the well
            of living water that is God’s Word and be truly refreshed.
          </p>
        </div>
        {/* <div className={styles["sermons__sermons-carousel-wrapper"]}>
          <SermonCarousel sermonsList={sermonsList} />
        </div> */}
        <div className={styles["sermons__youtube-video"]}>
          <iframe
            src="https://www.youtube.com/embed/EiiqGM9Vk7k?si=Y2rOv5DPA4E-CEnW"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        {/* {sermonsList?.length > 0 ? (
          <div className={styles["sermons__sermons-button-mobile"]}>
            <Button
              label="View More"
              variant="primary"
              size="small"
              type="button"
            />
          </div>
        ) : null} */}
      </div>
    </section>
  );
};

export default Sermons;
