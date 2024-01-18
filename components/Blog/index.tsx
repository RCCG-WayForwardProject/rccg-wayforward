"use client";
import React from "react";

import BlogCarousel from "./BlogCarousel";
import BlogCard from "./BlogCard";

import { blogs } from "@/utils/constants";

import styles from "./blog.module.scss";

const Blogs: React.FC = () => {
  return (
    <div className={styles["blog"]}>
      <h1 className={styles["blog__heading"]}>Blog</h1>
      <BlogCarousel>
        {blogs?.map((blog, index) => {
          return (
            <BlogCard
              key={index + 1}
              image={blog?.image}
              title={blog?.title}
              description={blog?.description}
              dateCreated={blog?.dateCreated}
              creator={blog?.creator}
            />
          );
        })}
      </BlogCarousel>
    </div>
  );
};

export default Blogs;
