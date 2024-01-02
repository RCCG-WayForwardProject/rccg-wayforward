import styles from "./page.module.scss";

export default function Page() {
  return (
    <div className={styles["home"]}>
      <h1>
        This is the custom page props, where the name is Hello World and the
        page is edited
      </h1>
    </div>
  );
}
