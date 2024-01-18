import React from "react";
import Image from "next/image";

import styles from "./blog-card.module.scss";

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  dateCreated: string;
  creator: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  description,
  dateCreated,
  creator,
}) => {
  return (
    <div className={styles["blog-card"]}>
      <div className={styles["blog-card__image"]}>
        <Image
          src={`/images/${image}`}
          fill
          style={{ borderRadius: "45px" }}
          alt={"blog-post-image"}
        />
      </div>
      <h1 className={styles["blog-card__title"]}>{title}</h1>
      <p className={styles["blog-card__date-created"]}>
        {dateCreated} . {creator}
      </p>
      <p className={styles["blog-card__description"]}>{description} </p>
    </div>
  );
};

export default BlogCard;
