import Home from "@/components/Home";
import AboutUs from "@/components/About";
import Sermons from "@/components/Sermons";
import Services from "@/components/Service";
import VideoPlayer from "@/components/Video";

import styles from "./page.module.scss";

export default function Page() {
  return (
    <div className={styles["page"]}>
      <Home />
      <AboutUs />
      <Sermons />
      <Services />
      <VideoPlayer />
    </div>
  );
}
