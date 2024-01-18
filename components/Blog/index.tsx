"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import BlogCarousel from "./BlogCarousel";
import BlogCard from "./BlogCard";
import LoadingCard from "../LoadingCard";

import { blogs } from "@/utils/constants";

import styles from "./blog.module.scss";

const Blogs: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const { push } = useRouter();

  const handleRouteToBlogsPage = () => {
    push("/testimonies");
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1300);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className={styles["blog"]}>
      <h1 className={styles["blog__heading"]}>Blog</h1>
      {loading ? (
        <div className={styles["blog__carousel-loader-wrapper"]}>
          <LoadingItems />
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Blogs;

const LoadingItems = () => {
  return (
    <>
      {Array.from({ length: 6 })
        .map((_, i) => i + 1)
        .map((_, index) => {
          return <LoadingCard key={index + 1} />;
        })}
    </>
  );
};
