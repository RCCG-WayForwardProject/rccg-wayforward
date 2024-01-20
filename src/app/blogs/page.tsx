"use client";
import React, { useState } from "react";
import Link from "next/link";

import Button from "@/components/Button";
import BlogCard from "@/components/Blog/BlogCard";
import Contact from "@/components/Contact";

import { blogs } from "@/utils/constants";

import styles from "./blogs.module.scss";

const BlogsPage: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const filteredBlogs = blogs?.filter((blog) =>
    blog.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className={styles["blogs"]}>
        <div className={styles["blogs__heading-wrapper"]}>
          <h1 className={styles["blogs__heading"]}>Blogs</h1>
          <p className={styles["blogs__heading-description"]}>
            Catch up on our <span>Recent blogs</span>
          </p>
        </div>
        <div className={styles["blogs__input-wrapper"]}>
          <input
            type="search"
            className={styles["blogs__input"]}
            placeholder="Search blog"
            value={query}
            onChange={handleSearchChange}
          />
          <Button type="submit" label="Search" variant="primary" size="mini" />
        </div>
        <div className={styles["blogs__blog-wrapper"]}>
          {filteredBlogs?.map((blog, index) => {
            return (
              <Link
                href={`/blogs/${encodeURIComponent(blog.slug)}`}
                key={index + 1}
              >
                <BlogCard
                  key={index + 1}
                  title={blog?.title}
                  description={blog?.description}
                  image={blog?.image}
                  creator={blog?.creator}
                  dateCreated={blog?.dateCreated}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <Contact />
    </>
  );
};

export default BlogsPage;
