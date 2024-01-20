import React from "react";
import Image from "next/image";

import Button from "@/components/Button";
import Contact from "@/components/Contact";

import { booksList } from "@/utils/constants";

import styles from "./books.module.scss";

const BooksPage: React.FC = () => {
  return (
    <>
      <div className={styles["books"]}>
        <div className={styles["books__heading-wrapper"]}>
          <h1 className={styles["books__heading"]}>Books</h1>
          <p className={styles["books__heading-description"]}>
            Catch up on our <span>Recent Sermons</span>
          </p>
        </div>
        <div className={styles["books__input-wrapper"]}>
          <input
            type="search"
            className={styles["books__input"]}
            placeholder="Search book"
          />
          <Button type="submit" label="Search" variant="primary" size="mini" />
        </div>
        <div className={styles["books__book-wrapper"]}>
          {booksList?.map((book, index) => {
            return (
              <a
                className={styles["books__book"]}
                href={book?.link}
                rel="noopener noreferrer"
                target="_blank"
                key={index + 1}
              >
                <div className={styles["books__book-image"]}>
                  <Image src={book?.img} fill loading="lazy" alt="Book Image" />
                </div>
                <p className={styles["books__book-name"]}>{book?.name}</p>
                <Button
                  type="button"
                  label="Download"
                  variant="secondary"
                  size="medium"
                />
              </a>
            );
          })}
        </div>
      </div>
      <Contact />
    </>
  );
};

export default BooksPage;
