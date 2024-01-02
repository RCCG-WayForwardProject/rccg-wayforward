import styles from "./page.module.scss";

import Home from "@/components/Home";

export default function Page() {
  return (
    <div className={styles["home"]}>
      <Home />
    </div>
  );
}
