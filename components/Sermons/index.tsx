import React from "react";
import Image from "next/image";

import Icon from "@/components/Icon";
import SermonCarousel from "./SermonsCarousel";
import { sermonsList } from "@/utils/constants";

import styles from "./sermons.module.scss";
import Button from "../Button";

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
            src={"/images/pastor_image.svg"}
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus
            accumsan hac purus volutpat ultrices. Vitae, sem dignissim vitae
            nunc aliquet integer ac suspendisse aliquet. Vulputate dictum
            egestas potenti mi amet. Aenean convallis ut vel in viverra.
          </p>
        </div>
        <div className={styles["sermons__sermons-carousel-wrapper"]}>
          <SermonCarousel sermonsList={sermonsList} />
        </div>
        {sermonsList?.length >= 1 ? (
          <div className={styles["sermons__sermons-button-mobile"]}>
            <Button
              label="View More"
              variant="primary"
              size="small"
              type="button"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Sermons;
